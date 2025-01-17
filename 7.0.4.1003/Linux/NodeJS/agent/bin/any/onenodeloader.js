//-----------------------------------------------------------------------------
// Copyright 2016-2017 Dynatrace
// All rights reserved.
// ----------------------------------------------------------------------------
// This document contains proprietary information belonging to Dynatrace.
// Passing on and copying of this document, use, and communication of its
// contents is not permitted without prior written authorization.
// ----------------------------------------------------------------------------

"use strict";

var os = require('os');
var path = require("path");
var fs = require("fs");


//=============================================================================
var logEnabled = false;

// Environment variables used to communicate with native part
// !!! needs to stay in sync with native loader part !!!
var cEnvPipeName = "__DT_ONENODELOADER_PIPENAME";
var cEnvGenericLoader = "__DT_ONENODELOADER_GENERIC";
var cEnvOptions = "__DT_ONENODELOADER_OPTIONS";
var cEnvStatus = "__DT_ONENODELOADER_STATUS";
var cEnvResultPath = "__DT_ONENODELOADER_RESULT_PATH";
var cEnvResultVersion = "__DT_ONENODELOADER_RESULT_VERSION";
var cEnvError = "__DT_ONENODELOADER_ERROR";

// seperator for version string
// !!! needs to stay in sync with native loader part !!!
var cSeperator = ":x:";

// path to lib folder based on JS loader location in agent/bin/any folder
var libPath = path.join(__dirname, "..", getPlatformName());


//=============================================================================
function log() {
	if (logEnabled) {
		console.error.apply(this, arguments);
	}
}

//-----------------------------------------------------------------------------
// helper to check 
function flagIsEnabled(option) {
	return (option === "true") || (option === true);
}

//-----------------------------------------------------------------------------
// Get name of generic loader - depends on OS
function getGenericLoaderName() {
	switch (process.platform) {
		case "win32":
			return "oneagentloader.dll";
		case "linux":
			return "liboneagentloader.so";
		default:
			throw new Error("NodeJsLoader: unsupported platform: ", process.platform);
	}
}

//-----------------------------------------------------------------------------
// Get platform name - depends on bitness and os (e.a. linux-x86-32, windows-x86-64)
function getPlatformName() {
	var result;
	
	switch (process.platform) {
		case "win32":
			result = "windows-x86";
			break;
		case "linux":
			if (process.arch === "ppc64" || process.arch === "ppc") {
				result = "linux-ppc" + os.endianness().toLowerCase();
			} else {
				result = "linux-x86";
			}
			break;
		default:
			throw new Error("NodeJsLoader: unsupported platform: ", process.platform);
	}

	switch (process.arch) {
		case "x64":
		case "ppc64":
			result += "-64";
			break;
		case "ia32":
		case "ppc":
			result += "-32";
			break;
		default:
			throw new Error("NodeJsLoader: unsupported arch: " + process.arch);
	}

	return result;
}

//-----------------------------------------------------------------------------
// stringify options object to a key=value CSV
function optionsToString(options) {
	var optString = Object.keys(options).map(function (key) {
		var val = options[key];
		switch (val) {
			case null:
			case undefined:
			case "":
				return "";
			default:
				return key + "=" + val;
		}
	}).join();

	return optString;
}

//-----------------------------------------------------------------------------
// build unique name for pipe
function getPipeName() {
	var name = "DT_ONENODELOADERPIPE_" + process.pid;
	var base;
	switch (process.platform) {
		case "win32":
			base = "\\\\.\\pipe";
			break;
		case "linux":
			base = os.tmpdir();
			break;
		default:
			throw new Error("NodeJsLoader: unsupported platform: ", process.platform);
	}
	return path.join(base, name);
}

//-----------------------------------------------------------------------------
// trigger the loader by requiring hte native lib, will throw
function triggerLoader() {
	try {
		// build path to native module
		var loaderFile = path.join(libPath, "oneagentnodeloader.node");

		log("NodeJsLoader: loading native module: " + loaderFile);
		var loader = require(loaderFile);
	} catch (e) {
		log("NodeJsLoader: loader triggered: " + e.message);
	}
}

//-----------------------------------------------------------------------------
// wait on native loader depending on status provided in environment
function waitOnLoader(pipeName) {
	switch (process.env[cEnvStatus]) {
		case "Init":
			log("NodeJsLoader: native loader didn't start: " + process.env[cEnvError]);
			throw new Error("NodeJsLoader: native loader didn't start: " + process.env[cEnvError]);

		case "UsePipe":
			waitOnPipe(pipeName);
			break;
		
		case "NoPipe":
			pollEnv();
			break;

		case "Done":
			break;

		default:
			log("NodeJsLoader: native loader failed with status: " + process.env[cEnvStatus] + " error: " + process.env[cEnvError]);
			throw new Error(process.env[cEnvError]);
	}
}

//-----------------------------------------------------------------------------
// read sync from pipe to suspend thread until loader is complete
function waitOnPipe(pipeName) {
	log("NodeJsLoader: start waiting on pipe: " + pipeName);

	var fd;
	try {
		// we have to use openSync and readSync here as fileReadSync does an stat which returns 0 size in windows
		// resulting in reading up to 8k in a loop which throws because pipe is closed from native.
		fd = fs.openSync(pipeName, "r");
		log("NodeJsLoader: opened pipe " + fd);

		var buffer = (process.versions.module >= 48) ? Buffer.allocUnsafe(150) : new Buffer(150);
		var read = fs.readSync(fd, buffer, 0, 150);

		log("NodeJsLoader: got " + read + " bytes from pipe: " + buffer.toString("utf8", 0, read));
	} catch (e) {
		log("NodeJsLoader: pipe operation failed " + e.stack);
	} finally {
		if (fd) {
			fs.closeSync(fd);
			log("NodeJsLoader: closed pipe");
		}
	}

	log("NodeJsLoader: waiting on pipe finished");
}

//-----------------------------------------------------------------------------
// poll status in environment until loader is complete (busy wait)
function pollEnv() {
	log("NodeJsLoader: start polling environment");
	//var maxWaitTime = 10 * 60 * 1000; // 10 minutes
	var maxWaitTime = 10 * 1000; // 10 seconds

	var start = Date.now();
	do {
	} while ((process.env[cEnvStatus] === "NoPipe") && ((Date.now() - start) < maxWaitTime));

	log("NodeJsLoader: polling environment finished");
}


//-----------------------------------------------------------------------------
// get agent path using module specific native addon
function loadModuleSpecific(optString) {
	var loaderInfo;

	try {
		// build path to native module
		var loaderName = "oneagentnodeloader_" + process.versions.modules + ".node";
		var loaderFile = path.join(libPath, loaderName);

		// load native module
		log("NodeJsLoader: loading native module: " + loaderFile);
		var loader = require(loaderFile);

		// get path to agent via native module
		var genericLoader = path.join(libPath, getGenericLoaderName());
		log("NodeJsLoader: get path to agent via " + genericLoader + " using options: " + optString);
		loaderInfo = loader.getLoaderInfo(genericLoader, optString);
		if (!loaderInfo || !loaderInfo.path) {
			log("NodeJsLoader: no result from native loader");
			return undefined;
		}
	} catch (e) {
		log("NodeJsLoader: failed to get agent path using specific loader: " + e.message);
	}

	return loaderInfo;
}

//-----------------------------------------------------------------------------
// get agent path using generic native addon
function loadGeneric(optString) {
	var loaderInfo;

	try {
		var pipeName = getPipeName();

		// put info for native loader into environment
		process.env[cEnvPipeName] = pipeName;
		process.env[cEnvGenericLoader] = path.join(libPath, getGenericLoaderName());	
		process.env[cEnvOptions] = optString;
		process.env[cEnvStatus] = "Init";

		// trigger native loader
		triggerLoader();

		// wait on native loader
		waitOnLoader(pipeName);

		// get agent path from env
		var agentPath = process.env[cEnvResultPath];
		if (!agentPath) {
			log("NodeJsLoader: no result from native loader status: " + process.env[cEnvStatus] + " error: " + process.env[cEnvError]);
			return undefined;
		} else {
			loaderInfo = {
				path: agentPath
			};

			var versionStr = process.env[cEnvResultVersion];
			if (versionStr) {
				// split version into components and convert to numbers
				var versionElements = versionStr.split(cSeperator);
				if (versionElements.length === 5) {
					// !!!property names must match NativeInterface.BootstrapVersion
					loaderInfo.version = {
						major: +versionElements[0],
						minor: +versionElements[1],
						revision: +versionElements[2],
						build: +versionElements[3],
						timeStamp: versionElements[4],
					};
				}
			}
		}
	} catch (e) {
		log("NodeJsLoader: failed to get agent path using specific loader: " + e.message);
	}

	return loaderInfo;
}

//=============================================================================
// Load and start agent by first calling native module to get path to agent entry point
function loadAgent(options) {
	options = options || {};
	logEnabled = flagIsEnabled(options.debugNodeLoaderNodeJS);

	var optString = optionsToString(options);

	var loaderInfo;
	if (!flagIsEnabled(options.debugNodeSkipModuleSpecificLoaderNodeJS)) {
		// first try loader matching to module version
		loaderInfo = loadModuleSpecific(optString);
	}

	if (!loaderInfo && !flagIsEnabled(options.debugNodeSkipGenericLoaderNodeJS)) {
		loaderInfo = loadGeneric(optString);
	}

	if (!loaderInfo) {
		throw new Error("NodeJsLoader: failed to get agent path from native loader");
	}

	// load and start agent using passed options and bootstrap version
	var agentPath = loaderInfo.path;
	log("NodeJsLoader: loading agent from: " + agentPath);
	require(agentPath)(options, { bootstrapVersion: loaderInfo.version });
}

//=============================================================================
module.exports = loadAgent;
