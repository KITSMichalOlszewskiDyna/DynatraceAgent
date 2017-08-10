/*! ---------------------------------------------------------------------------
    Copyright 2016-2017 Dynatrace
    All rights reserved.
    ---------------------------------------------------------------------------
    This document contains proprietary information belonging to Dynatrace.
    Passing on and copying of this document, use, and communication of its
    contents is not permitted without prior written authorization.
    --------------------------------------------------------------------------- */

"use strict";
(function() {
'use strict';var u = this && this.__extends || function() {
  var g = Object.setPrototypeOf || {__proto__:[]} instanceof Array && function(b, f) {
    b.__proto__ = f;
  } || function(b, f) {
    for (var d in f) {
      f.hasOwnProperty(d) && (b[d] = f[d]);
    }
  };
  return function(b, f) {
    function d() {
      this.constructor = b;
    }
    g(b, f);
    b.prototype = null === f ? Object.create(f) : (d.prototype = f.prototype, new d);
  };
}();
module.__DT_NODE_OBFUSCATED_AGENT__ = !0;
var z = function() {
  function g(f) {
    var c = [], n = h[f];
    if (n.exports === m) {
      d && console.log("resolving " + f);
      n.exports = {_____DynatraceAmdLoaderModuleName:f};
      n.isResolving = !0;
      for (var a = 0, e = n.dependencies;a < e.length;a++) {
        var l = e[a];
        "require" === l ? c.push(require) : "exports" === l ? c.push(n.exports) : void 0 !== h[l] ? (c.push(g(l)), d && h[l].isResolving && console.log("module " + f + " is dependent on resolving module " + l)) : global.__DT_AMDLOADER_ALLOW_EXTERNALS__ || q.hasOwnProperty(l) || k[l] ? c.push(require(l)) : require("assert")(!1, "forbidden request to external module " + l);
      }
      f = n.generator.apply(void 0, c);
      void 0 !== f && (n.exports = f);
      n.isResolving = !1;
    }
    return n.exports;
  }
  function b() {
    g("src/nodejsagent");
    for (var d in h) {
      g(d);
    }
  }
  function f(d, c) {
    b();
    h["src/nodejsagent"].exports(d, c);
  }
  var d = process.env.DT_NODE_AMD_LOADER_ENABLE_LOGGING, h = {}, m = {}, k = {semver:!0}, q = process.binding("natives");
  f.amdModuleLoader = {resolve:g, resolveAll:b, moduleMap:h};
  module.exports = f;
  return function(f, c, n) {
    var a = h[f];
    void 0 === a && (a = {generator:n, dependencies:c, exports:m, isResolving:!1}, h[f] = a, d && console.log("creating module " + f));
  };
}();
z("src/lib/util/CoreUtil", ["require", "exports", "util"], function(g, b, f) {
  function d(a) {
    return f.isArray(a);
  }
  function h(a) {
    return f.isRegExp(a);
  }
  function m(a) {
    return "function" === typeof a;
  }
  function k(a) {
    return null !== a && "object" === typeof a;
  }
  function q(a) {
    return void 0 !== a;
  }
  function p(a) {
    return void 0 === a;
  }
  function c(a) {
    return void 0 !== a && null !== a;
  }
  function n(a) {
    return void 0 === a || null === a;
  }
  function a(a, e) {
    var l = c(a) && c(a[e]);
    if (l && 2 < arguments.length) {
      a = a[e];
      for (var l = c(a), d = 2;d < arguments.length && l;++d) {
        a = a[arguments[d]], l = c(a);
      }
    }
    return l;
  }
  function e() {
  }
  Object.defineProperty(b, "__esModule", {value:!0});
  b.isArray = d;
  b.isDate = function(a) {
    return f.isDate(a);
  };
  b.isError = function(a) {
    return f.isError(a);
  };
  b.isRegExp = h;
  b.isFunction = m;
  b.isBoolean = function(a) {
    return "boolean" === typeof a;
  };
  b.isNumber = function(a) {
    return "number" === typeof a;
  };
  b.isString = function(a) {
    return "string" === typeof a;
  };
  b.isObject = k;
  b.isPrimitive = function(a) {
    return null === a || !k(a) && !m(a);
  };
  b.isDefined = q;
  b.isUndefined = p;
  b.isNull = function(a) {
    return null === a;
  };
  b.hasValue = c;
  b.isValueless = n;
  b.isEmptyObject = function(a) {
    for (var e in a) {
      return !1;
    }
    return !0;
  };
  b.strEndsWith = function(a, e) {
    return -1 !== a.indexOf(e, a.length - e.length);
  };
  b.strStartsWith = function(a, e) {
    return 0 === a.indexOf(e);
  };
  b.pad = function(a, e, c) {
    void 0 === e && (e = 2);
    void 0 === c && (c = "0");
    return (Array(e + 1).join(c) + a).slice(-e);
  };
  b.stripByteOrderMark = function(a) {
    return 65279 === a.charCodeAt(0) ? a.slice(1) : a;
  };
  b.hasProperty = a;
  b.getOptionalPropertyValue = function(e, c, d) {
    return a(e, c) ? e[c] : d;
  };
  b.getOptionalValue = function(a, e) {
    return q(a) ? a : e;
  };
  b.hasElements = function(a, e) {
    void 0 === e && (e = 1);
    return q(a) && a.length >= e;
  };
  e.prototype = Object.create(null);
  b.createPropertyContainer = function() {
    return new e;
  };
  b.extend = function(a, e) {
    if (n(a)) {
      throw new TypeError("Cannot convert undefined or null to object");
    }
    if (k(e)) {
      for (var c = Object.keys(e), l = c.length;l--;) {
        a[c[l]] = e[c[l]];
      }
    }
    return a;
  };
  b.cast = function(a) {
    return a;
  };
  b.match = function(a, e) {
    var c;
    if (d(a)) {
      for (var l = 0;p(c) && l < a.length;++l) {
        var n = a[l], f = e;
        if (h(n) ? n.test(f) : n === f) {
          c = a[l];
        }
      }
    } else {
      h(a) ? a.test(e) && (c = a) : a === e && (c = a);
    }
    return c;
  };
});
z("src/lib/Debug", ["require", "exports", "assert", "src/lib/util/CoreUtil"], function(g, b, f, d) {
  Object.defineProperty(b, "__esModule", {value:!0});
  var h = d.isDefined(process.env.DT_NODE_AGENT_DEBUG_MODE_ENABLE);
  b.test = function(d) {
    return h && d;
  };
  b.assert = function(d, b) {
    h && f(d, b);
  };
  b.assertStrictEqual = function(d, b, q) {
    h && f.strictEqual(d, b, q);
  };
  b.assertNotStrictEqual = function(d, b, q) {
    h && f.notStrictEqual(d, b, q);
  };
  b.fail = function(d) {
    h && f.ok(!1, d);
  };
  b.isEnabled = function() {
    return h;
  };
  b.setDebugMode = function(d) {
    h = d;
  };
  b.unitTestMode = !1;
  b.setUnitTestMode = function(d) {
    b.unitTestMode = d;
  };
});
z("src/lib/util/InvocationUtil", ["require", "exports"], function(g, b) {
  function f(d, f, b) {
    switch(b.length) {
      case 0:
        return f.call(d);
      case 1:
        return f.call(d, b[0]);
      case 2:
        return f.call(d, b[0], b[1]);
      case 3:
        return f.call(d, b[0], b[1], b[2]);
      case 4:
        return f.call(d, b[0], b[1], b[2], b[3]);
      case 5:
        return f.call(d, b[0], b[1], b[2], b[3], b[4]);
      default:
        return f.apply(d, b);
    }
  }
  Object.defineProperty(b, "__esModule", {value:!0});
  b.copyArgsArray = function(d, f) {
    void 0 === f && (f = 0);
    var b = d.length;
    f = Array(b + f);
    for (var h = 0;h < b;h++) {
      f[h] = d[h];
    }
    return f;
  };
  b.doInvoke = f;
  var d = function() {
    function d(d, f) {
      this.obj = d;
      this.didThrow = f;
    }
    d.makeRetVal = function(f) {
      return new d(f, !1);
    };
    d.makeException = function(f) {
      return new d(f, !0);
    };
    Object.defineProperty(d.prototype, "retVal", {get:function() {
      return this.didThrow ? void 0 : this.obj;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(d.prototype, "exception", {get:function() {
      return this.didThrow ? this.obj : void 0;
    }, enumerable:!0, configurable:!0});
    d.prototype.rethrow = function() {
      if (this.didThrow) {
        throw this.obj;
      }
      return this.obj;
    };
    return d;
  }();
  b.SafeInvokeRetVal = d;
  b.safeInvoke = function(b, m, k) {
    try {
      return d.makeRetVal(f(b, m, k));
    } catch (q) {
      return d.makeException(q);
    }
  };
});
z("src/lib/Dispatcher", ["require", "exports", "src/lib/Debug", "src/lib/util/InvocationUtil"], function(g, b, f, d) {
  Object.defineProperty(b, "__esModule", {value:!0});
  g = function() {
    function b(d) {
      this.methodName = d;
      this.listeners = [];
    }
    b.prototype.addListener = function(d) {
      f.assert(d[this.methodName]);
      this.listeners.push(d);
    };
    b.prototype.dispatch = function() {
      for (var f = 0;f < arguments.length;f++) {
      }
      for (var f = 0, b = this.listeners;f < b.length;f++) {
        var h = b[f];
        d.doInvoke(h, h[this.methodName], arguments);
      }
    };
    return b;
  }();
  b.Dispatcher = g;
});
z("src/lib/Branding", ["require", "exports", "src/lib/Configuration", "src/lib/Debug"], function(g, b, f, d) {
  Object.defineProperty(b, "__esModule", {value:!0});
  g = new (function() {
    function b() {
    }
    Object.defineProperty(b.prototype, "productNameLowerCase", {get:function() {
      d.assert(0 !== f.Configuration.activeProduct, "Configuration.activeProduct not set");
      return 1 === f.Configuration.activeProduct ? "dt" : "one";
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(b.prototype, "productNameCamelCase", {get:function() {
      d.assert(0 !== f.Configuration.activeProduct, "Configuration.activeProduct not set");
      return 1 === f.Configuration.activeProduct ? "Dt" : "One";
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(b.prototype, "prodcutNameAllCaps", {get:function() {
      d.assert(0 !== f.Configuration.activeProduct, "Configuration.activeProduct not set");
      return 1 === f.Configuration.activeProduct ? "DT" : "ONE";
    }, enumerable:!0, configurable:!0});
    return b;
  }());
  b.Branding = g;
});
z("src/lib/FileLogger", "require exports path fs src/lib/util/CoreUtil src/lib/Branding".split(" "), function(g, b, f, d, h, m) {
  Object.defineProperty(b, "__esModule", {value:!0});
  g = function() {
    function b() {
      var d = this;
      this.appendFileCallback = function() {
        0 < d.queue.length && d.doWrite();
      };
      this.queue = [];
    }
    b.prototype.init = function(b, k, c) {
      var n = !0;
      try {
        var a = this.findLogFolder(b, k);
        if (!a) {
          return !1;
        }
        a = f.join(a, "nodejs");
        try {
          d.mkdirSync(a);
        } catch (e) {
        }
        this.logFileName = f.join(a, m.Branding.productNameLowerCase + "agent_" + c + "_managed_" + process.pid + ".log");
        try {
          d.unlinkSync(this.logFileName);
        } catch (e) {
        }
      } catch (e) {
        this.logFileName = void 0, n = !1;
      }
      return n;
    };
    Object.defineProperty(b.prototype, "fileName", {get:function() {
      return this.logFileName;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(b.prototype, "initialized", {get:function() {
      return void 0 !== this.logFileName;
    }, enumerable:!0, configurable:!0});
    b.prototype.write = function(d) {
      this.logFileName && (this.queue.push(d), 1 === this.queue.length && this.doWrite());
    };
    b.prototype.doWrite = function() {
      h.isDefined(this.logFileName) && d.appendFile(this.logFileName, this.queue.shift(), this.appendFileCallback);
    };
    b.prototype.findLogFolder = function(b, k) {
      for (;;) {
        var c = f.join(b, "log");
        try {
          d.statSync(c);
          var n = f.join(b, "agent/bin");
          d.statSync(n);
          b = c;
          break;
        } catch (a) {
        }
        --k;
        b = f.dirname(b);
        if ("" === b || 0 >= k) {
          b = void 0;
          break;
        }
      }
      return b;
    };
    return b;
  }();
  b.FileLogger = g;
});
z("src/lib/Logger", "require exports util src/lib/Agent src/lib/util/CoreUtil src/lib/util/InvocationUtil src/lib/FileLogger src/lib/Configuration".split(" "), function(g, b, f, d, h, m, k, q) {
  function p(a) {
    return a >= b.control.logLevel;
  }
  function c(a) {
    for (var e = [], c = 1;c < arguments.length;c++) {
      e[c - 1] = arguments[c];
    }
    return w.doWrite(a, e);
  }
  function n() {
    return w.condWrite(v.INFO, arguments);
  }
  function a() {
    return w.condWrite(v.WARNING, arguments);
  }
  function e() {
    return w.condWrite(v.SEVERE, arguments);
  }
  Object.defineProperty(b, "__esModule", {value:!0});
  var l;
  (function(a) {
    a[a.BUFFERED = 0] = "BUFFERED";
    a[a.NATIVE = 1] = "NATIVE";
    a[a.MANAGED = 2] = "MANAGED";
  })(l = b.Mode || (b.Mode = {}));
  var v;
  (function(a) {
    a[a.INFO = 4] = "INFO";
    a[a.WARNING = 5] = "WARNING";
    a[a.SEVERE = 6] = "SEVERE";
    a[a.DEBUG = 7] = "DEBUG";
    a[a.NONE = 8] = "NONE";
  })(v = b.Level || (b.Level = {}));
  var t = function() {
    return function(a, e) {
      this.logLevel = a;
      this.msg = e;
      this.timeStamp = Date.now();
    };
  }(), w = new (function() {
    function g() {
      this.logFn = this.writeBufferedLog;
      this.bufferedLogEntries = [];
      this.discardedLogEntryCount = 0;
    }
    Object.defineProperty(g.prototype, "mode", {get:function() {
      var a;
      switch(this.logFn) {
        case this.writeManagedLog:
          a = l.MANAGED;
          break;
        case this.writeNativeLog:
          a = l.NATIVE;
          break;
        case this.writeBufferedLog:
          a = l.BUFFERED;
          break;
        default:
          a = l.BUFFERED, e("could not determine logger mode");
      }
      return a;
    }, set:function(a) {
      switch(a) {
        case l.NATIVE:
          a === l.NATIVE && d.Agent.nativeAgent && (this.logFn = this.writeNativeLog, this.updateLogLevelsFromNative(), this.flushLogBuffer());
          break;
        case l.MANAGED:
          this.logFn = this.writeManagedLog;
          this.flushLogBuffer();
          break;
        case l.BUFFERED:
          this.logFn = this.writeBufferedLog;
          break;
        default:
          e("unknown logger mode: " + a);
      }
      c(v.INFO, "switched log mode to %s", l[this.mode]);
    }, enumerable:!0, configurable:!0});
    g.prototype.updateLogLevelsFromNative = function() {
      if (d.Agent.nativeAgent) {
        var a = d.Agent.nativeAgent.consoleLogLevel, e = d.Agent.nativeAgent.fileLogLevel;
        if (b.control.consoleLogLevel !== a || b.control.fileLogLevel !== e) {
          b.control.consoleLogLevel = a, b.control.fileLogLevel = e, n("update log levels from native consoleLogLevel=" + v[b.control.consoleLogLevel] + ", fileLogLevel=" + v[b.control.fileLogLevel]);
        }
      }
    };
    g.prototype.assembleLogHeader = function(a) {
      var e = new Date;
      return f.format("%d-%s-%s %s:%s:%s.%s UTC [%s] %s [node] ", e.getUTCFullYear(), h.pad(e.getUTCMonth() + 1), h.pad(e.getUTCDate()), h.pad(e.getUTCHours()), h.pad(e.getUTCMinutes()), h.pad(e.getUTCSeconds()), (e.getUTCMilliseconds() / 1E3).toFixed(3).slice(2, 5), h.pad(process.pid, 8), h.pad(v[a], 8, " "));
    };
    g.prototype.writeManagedLog = function(e, c) {
      p(e) && (c = this.assembleLogHeader(e) + c, e >= b.control.consoleLogLevel && console.log(c), e >= b.control.fileLogLevel && (this.fileLogger || (this.fileLogger = new k.FileLogger, this.fileLogger.init(q.Configuration.rootFolder, 6, q.Configuration.appName) || (this.mode = l.BUFFERED, a("unable to setup file logger"))), this.fileLogger && this.fileLogger.write(c + "\n")));
    };
    g.prototype.writeBufferedLog = function(a, e) {
      if (0 === this.bufferedLogEntries.length) {
        this.discardedLogEntryCount = 0;
      } else {
        if (this.bufferedLogEntries.length >= b.control.bufferedLogEntryCountMax) {
          do {
            this.bufferedLogEntries.shift(), ++this.discardedLogEntryCount;
          } while (this.bufferedLogEntries.length >= b.control.bufferedLogEntryCountMax);
          this.bufferedLogEntries[0].msg = "[" + this.discardedLogEntryCount + " discarded prior log entries] " + this.bufferedLogEntries[0].msg;
        }
      }
      this.bufferedLogEntries.push(new t(a, e));
    };
    g.prototype.flushLogBuffer = function() {
      var a = this;
      this.bufferedLogEntries.forEach(function(e) {
        var c = "[buffered " + (Date.now() - e.timeStamp) + "ms ago] " + e.msg;
        a.logFn(e.logLevel, c);
      });
      this.bufferedLogEntries.length = 0;
    };
    g.prototype.writeNativeLog = function(a, e) {
      d.Agent.nativeAgent && d.Agent.nativeAgent.log(a, e);
    };
    g.prototype.condWrite = function(a, e) {
      return p(a) && this.doWrite(a, e);
    };
    g.prototype.doWrite = function(a, e) {
      e = m.doInvoke(null, f.format, e);
      this.logFn(a, e);
      return !0;
    };
    return g;
  }());
  g = function() {
    function a() {
      this.bufferedLogEntryCountMax = 100;
      this.currLogLevel = v.INFO;
      this.currConLogLevel = v.NONE;
      this.currFileLogLevel = v.INFO;
      this.loggerImpl = w;
    }
    Object.defineProperty(a.prototype, "mode", {get:function() {
      return w.mode;
    }, set:function(a) {
      w.mode = a;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(a.prototype, "logLevel", {get:function() {
      return this.currLogLevel;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(a.prototype, "consoleLogLevel", {get:function() {
      return this.currConLogLevel;
    }, set:function(a) {
      this.currConLogLevel = a;
      this.updateLogLevel();
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(a.prototype, "fileLogLevel", {get:function() {
      return this.currFileLogLevel;
    }, set:function(a) {
      this.currFileLogLevel = a;
      this.updateLogLevel();
    }, enumerable:!0, configurable:!0});
    a.prototype.updateLogLevelFrom = function(a) {
      if (a.loglevelcon) {
        var e = v[a.loglevelcon.toUpperCase()];
        e ? this.currConLogLevel = e : n("invalid option loglevelcon=" + a.loglevelcon);
      }
    };
    a.prototype.updateLogLevel = function() {
      this.currLogLevel = Math.min(this.currConLogLevel, this.currFileLogLevel);
    };
    return a;
  }();
  b.LogControl = g;
  b.isLoggable = p;
  b.write = c;
  b.info = n;
  b.warning = a;
  b.severe = e;
  b.debug = function() {
    return w.condWrite(v.DEBUG, arguments);
  };
  b.control = new g;
});
z("src/lib/Configuration", ["require", "exports", "path", "src/lib/Logger", "src/lib/util/CoreUtil"], function(g, b, f, d, h) {
  Object.defineProperty(b, "__esModule", {value:!0});
  b.Configuration = {activeProduct:0, rootFolder:(module.__DT_NODE_OBFUSCATED_AGENT__ ? __dirname : f.dirname(__dirname)) + f.sep, appName:"DefaultNodeApplicationName", scriptName:1 < process.argv.length ? f.basename(process.argv[1]) : "", processOptions:function(f) {
    var k;
    try {
      process.env.DT_NODE_OPTIONS_FILE ? (d.info("acquiring alternative agent options from " + process.env.DT_NODE_OPTIONS_FILE), k = g(process.env.DT_NODE_OPTIONS_FILE)) : process.env.DT_NODE_OPTIONS && (d.info("acquiring alternative agent options from environment: " + process.env.DT_NODE_OPTIONS), k = JSON.parse(h.stripByteOrderMark(process.env.DT_NODE_OPTIONS)));
    } catch (p) {
      d.info("reading alternative options failed with " + p);
    }
    if (h.isDefined(k)) {
      for (var q in f) {
        h.isUndefined(k[q]) && (k[q] = f[q]);
      }
    } else {
      k = f;
    }
    b.Configuration.activeProduct = h.isDefined(k.tenant) ? 2 : 1;
    return k;
  }};
});
z("src/lib/NiLoader", "require exports fs path os src/lib/Logger".split(" "), function(g, b, f, d, h, m) {
  Object.defineProperty(b, "__esModule", {value:!0});
  var k = function() {
    function b() {
    }
    b.prototype.load = function(b) {
      if (!this.nativeInterface) {
        var c = b.nativeLibsRootPath || process.env.DT_NODE_NATIVE_LIBS_ROOT;
        c && (c = d.join(c, this.getLibFolderName(b), this.nativeModuleFileName), this.requireNativeLibrary(c));
      }
      this.nativeInterface || (c = d.join(__dirname, this.oneAgentBaseDirRelative, this.platformFolderName, this.nativeModuleFileName), this.requireNativeLibrary(c));
      this.nativeInterface || (c = d.join(__dirname, this.oneAgentBaseDirRelative, this.getLibFolderName(b), this.nativeModuleFileName), this.requireNativeLibrary(c));
      this.nativeInterface || m.info("Unable to load native interface.");
      return this.nativeInterface;
    };
    b.prototype.requireNativeLibrary = function(d) {
      m.info("try to load native library from " + d);
      if (f.existsSync(d)) {
        try {
          this.nativeInterface = g(d), this.dsoFileName = d, m.info("loaded " + d);
        } catch (c) {
          m.info("failed to load " + d + " ': " + c);
        }
      }
    };
    Object.defineProperty(b.prototype, "moduleFileName", {get:function() {
      return this.dsoFileName;
    }, enumerable:!0, configurable:!0});
    b.prototype.getLibFolderName = function(d) {
      d = "musl" === d.libcvendor ? "libmusl" : "lib";
      return "x64" === process.arch || "ppc64" === process.arch ? d + "64" : d;
    };
    Object.defineProperty(b.prototype, "nativeModuleFileName", {get:function() {
      return "oneagentnode_" + process.versions.modules + ".node";
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(b.prototype, "oneAgentBaseDirRelative", {get:function() {
      return module.__DT_NODE_OBFUSCATED_AGENT__ ? "../.." : "../../..";
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(b.prototype, "platformFolderName", {get:function() {
      var d;
      switch(process.platform) {
        case "win32":
          d = "windows-x86";
          break;
        case "linux":
          d = "ppc64" === process.arch ? "linux-ppc" + h.endianness().toLowerCase() : "linux-x86";
          break;
        default:
          d = process.platform;
      }
      return d += "x64" === process.arch || "ppc64" === process.arch ? "-64" : "-32";
    }, enumerable:!0, configurable:!0});
    return b;
  }();
  b.NiLoader = k;
});
z("src/lib/modules/MemMetrics", ["require", "exports", "src/lib/Agent"], function(g, b, f) {
  Object.defineProperty(b, "__esModule", {value:!0});
  g = function() {
    function d() {
      this.name = "MemMetrics";
    }
    d.prototype.onInit = function() {
      this.timer = setInterval(d.onPeriodicTimer, 1E4);
      this.timer.unref();
    };
    d.prototype.onLifeCycleStateChanged = function() {
      f.Agent.lifeCycleState === f.LifeCycleState.ShuttingDown && this.timer && (clearInterval(this.timer), this.timer = void 0);
    };
    d.onPeriodicTimer = function() {
      if (f.Agent.active && f.Agent.nativeAgent) {
        try {
          var d = process.memoryUsage();
          f.Agent.nativeAgent.onPeriodicMemMetrics(d.heapTotal, d.heapUsed, d.rss);
        } catch (m) {
          f.Logger.info("Exception during capturing memory usage: " + m);
        }
      }
    };
    return d;
  }();
  b.MemMetricsModule = g;
});
z("src/lib/util/RuntimeUtil", ["require", "exports", "src/lib/util/CoreUtil", "src/lib/Configuration"], function(g, b, f, d) {
  function h() {
    return "win32" === process.platform;
  }
  Object.defineProperty(b, "__esModule", {value:!0});
  b.isWindows = h;
  b.isLinux = function() {
    return "linux" === process.platform;
  };
  b.hasCaseInsensitiveFilePaths = function() {
    return h();
  };
  b.isDebuggerActive = function() {
    return f.isDefined(global.v8debug);
  };
  b.isAgentFile = function(b) {
    return f.strStartsWith(b, d.Configuration.rootFolder);
  };
  var m = process.binding("natives");
  b.isNodeCoreModule = function(d) {
    return f.hasProperty(m, d);
  };
});
z("src/lib/RunTimeProperty", ["require", "exports", "src/lib/Agent", "src/lib/Debug"], function(g, b, f, d) {
  Object.defineProperty(b, "__esModule", {value:!0});
  var h = function() {
    return function(c) {
      this.value = c;
    };
  }(), m = function() {
    return function() {
    };
  }();
  g = function() {
    function c() {
      this.entries = new m;
    }
    c.prototype.get = function(a, e) {
      var c = this.entries[a];
      if (!c) {
        if (f.Agent && f.Agent.nativeAgent) {
          switch(typeof e) {
            case "boolean":
              e = f.Agent.nativeAgent.getBooleanRunTimePropertyValue(a, e);
              break;
            case "number":
              e = f.Agent.nativeAgent.getNumericalRunTimePropertyValue(a, e);
              break;
            case "string":
              e = f.Agent.nativeAgent.getStringRunTimePropertyValue(a, e);
              break;
            default:
              d.fail("unknown property type");
          }
        }
        c = new h(e);
        this.entries[a] = c;
      }
      return c;
    };
    c.prototype.set = function(a, e) {
      var c = this.entries[a];
      c ? c.value = e : this.entries[a] = new h(e);
    };
    c.prototype.update = function(a, e) {
      if (a = this.entries[a]) {
        a.value = e;
      }
    };
    c.prototype.updateExistingFromNative = function(a) {
      for (var e in this.entries) {
        var c = this.entries[e];
        c.value = a.call(f.Agent.nativeAgent, e, c.value);
      }
    };
    return c;
  }();
  var k = new g, q = new g, p = new g;
  g = function() {
    function c() {
    }
    c.prototype.onConfigUpdate = function(a) {
      if (a = a.rtc) {
        for (var e in a.booleanMap) {
          k.update(e, a.booleanMap[e]);
        }
        for (e in a.longMap) {
          q.update(e, a.longMap[e]);
        }
        for (e in a.stringMap) {
          p.update(e, a.stringMap[e]);
        }
      }
    };
    c.prototype.onLifeCycleStateChanged = function() {
      f.Agent.lifeCycleState === f.LifeCycleState.Running && f.Agent.nativeAgent && (k.updateExistingFromNative(f.Agent.nativeAgent.getBooleanRunTimePropertyValue), q.updateExistingFromNative(f.Agent.nativeAgent.getNumericalRunTimePropertyValue), p.updateExistingFromNative(f.Agent.nativeAgent.getStringRunTimePropertyValue));
    };
    return c;
  }();
  b.PropertyRtcUpdateListener = g;
  b.parseForRunTimeProperties = function(c) {
    for (var a = 0, e = Object.getOwnPropertyNames(c);a < e.length;a++) {
      var d = e[a];
      if (0 === d.indexOf("debugNode") || 0 === d.indexOf("optionNode")) {
        var b = c[d];
        switch(typeof b) {
          case "boolean":
            k.set(d, b);
            break;
          case "number":
            q.set(d, b);
            break;
          case "string":
            p.set(d, b);
        }
      }
    }
  };
  var c = function() {
    function c(a, e) {
      this.name = a;
      this.valueRef = e;
    }
    Object.defineProperty(c.prototype, "value", {get:function() {
      return this.valueRef.value;
    }, enumerable:!0, configurable:!0});
    c.makeName = function(a, e) {
      void 0 === e && (e = "debug");
      return e + "Node" + a + "NodeJS";
    };
    return c;
  }();
  g = function(d) {
    function a(e, l) {
      void 0 === l && (l = !1);
      e = c.makeName(e);
      return d.call(this, e, a.pool.get(e, l)) || this;
    }
    u(a, d);
    return a;
  }(c);
  g.pool = k;
  b.BooleanProperty = g;
  g = function(d) {
    function a(e, l) {
      void 0 === l && (l = !1);
      e = c.makeName(e, "option");
      return d.call(this, e, a.pool.get(e, l)) || this;
    }
    u(a, d);
    return a;
  }(c);
  g.pool = k;
  b.BooleanOption = g;
  g = function(d) {
    function a(e, l) {
      void 0 === l && (l = 0);
      e = c.makeName(e, "option");
      return d.call(this, e, a.pool.get(e, l)) || this;
    }
    u(a, d);
    return a;
  }(c);
  g.pool = q;
  b.NumberOption = g;
  g = function(d) {
    function a(e, l) {
      void 0 === l && (l = "");
      e = c.makeName(e, "option");
      return d.call(this, e, a.pool.get(e, l)) || this;
    }
    u(a, d);
    return a;
  }(c);
  g.pool = p;
  b.StringOption = g;
});
z("src/lib/DebugLoggingEntity", "require exports src/lib/Agent src/lib/RunTimeProperty src/lib/Debug src/lib/util/CoreUtil src/lib/util/InvocationUtil".split(" "), function(g, b, f, d, h, m, k) {
  Object.defineProperty(b, "__esModule", {value:!0});
  g = function() {
    function b(b) {
      this.debugFlag = new d.BooleanProperty(b, h.unitTestMode);
    }
    Object.defineProperty(b.prototype, "isDebugEnabled", {get:function() {
      return this.debugFlag.value || m.isDefined(this.domainDebugFlags) && this.domainDebugFlags.some(function(d) {
        return d.value;
      });
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(b.prototype, "debugFlagName", {get:function() {
      return this.debugFlag.name;
    }, enumerable:!0, configurable:!0});
    b.prototype.logDebug = function() {
      this.isDebugEnabled && k.doInvoke(void 0, f.Logger.debug, arguments);
    };
    b.prototype.addToDebugLogDomain = function(b) {
      m.isUndefined(this.domainDebugFlags) && (this.domainDebugFlags = []);
      this.domainDebugFlags.push(new d.BooleanProperty(b, h.unitTestMode));
    };
    return b;
  }();
  b.default = g;
});
z("src/lib/sensors/WebRequestSensorProperties", ["require", "exports", "src/lib/util/CoreUtil"], function(g, b, f) {
  function d(d) {
    var b = [];
    if (f.isArray(d)) {
      for (var k = 0;k < d.length;k++) {
        var h = d[k];
        f.isString(h) && b.push(h.toLowerCase());
      }
    }
    return b;
  }
  Object.defineProperty(b, "__esModule", {value:!0});
  g = function() {
    function b(d) {
      this.theCaptureAllRequestHeaders = !1;
      this.theRequestHeadersToCapture = [];
      this.theCaptureAllResponseHeaders = !1;
      this.theResponseHeadersToCapture = [];
      this.theRequestParametersToCapture = [];
      this.theCaptureAllRequestParameters = !1;
      this.update(d);
    }
    b.prototype.update = function(b) {
      f.hasProperty(b, "sensorProperties") && (b = b.sensorProperties, f.isBoolean(b.captureAllRequestHeaders) && (this.theCaptureAllRequestHeaders = b.captureAllRequestHeaders), f.isDefined(b.requestHeadersToCapture) && (this.theRequestHeadersToCapture = d(b.requestHeadersToCapture)), f.isBoolean(b.captureAllResponseHeaders) && (this.theCaptureAllResponseHeaders = b.captureAllResponseHeaders), f.isDefined(b.responseHeadersToCapture) && (this.theResponseHeadersToCapture = d(b.responseHeadersToCapture)), 
      f.isDefined(b.requestParametersToCapture) && (this.theRequestParametersToCapture = d(b.requestParametersToCapture)), f.isBoolean(b.captureAllRequestParameters) && (this.theCaptureAllRequestParameters = b.captureAllRequestParameters));
    };
    Object.defineProperty(b.prototype, "captureAllRequestHeaders", {get:function() {
      return this.theCaptureAllRequestHeaders;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(b.prototype, "requestHeadersToCapture", {get:function() {
      return this.theRequestHeadersToCapture;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(b.prototype, "captureAllResponseHeaders", {get:function() {
      return this.theCaptureAllResponseHeaders;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(b.prototype, "responseHeadersToCapture", {get:function() {
      return this.theResponseHeadersToCapture;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(b.prototype, "requestParametersToCapture", {get:function() {
      return this.theRequestParametersToCapture;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(b.prototype, "captureAllRequestParameters", {get:function() {
      return this.theCaptureAllRequestParameters;
    }, enumerable:!0, configurable:!0});
    return b;
  }();
  b.WebRequestSensorProperties = g;
});
z("src/lib/sensors/SensorConfig", ["require", "exports"], function(g, b) {
  Object.defineProperty(b, "__esModule", {value:!0});
  b.cConfigKeyPrefix = "Node.";
});
z("src/lib/util/Reflection", ["require", "exports", "semver", "src/lib/util/CoreUtil", "src/lib/Agent"], function(g, b, f, d, h) {
  function m(c) {
    return h.Agent.nativeAgent.getConstructorName(c);
  }
  function k(c) {
    return d.isUndefined(c.constructor) ? "" : c.constructor.name;
  }
  function q(c) {
    d.isObject(c) ? c = k(c) : (c = typeof c, c = c[0].toUpperCase() + c.slice(1));
    return c;
  }
  Object.defineProperty(b, "__esModule", {value:!0});
  b.getTypeName = function(c) {
    return c === global || d.isValueless(c) ? "" : p(c);
  };
  var p;
  p = f.satisfies(process.version, ">=7.0.0") ? m : f.satisfies(process.version, ">=4.0.0") ? k : q;
  var c = f.satisfies(process.version, ">=4.0.0");
  b.cAnonymousFnName = "<anonymous>";
  b.cloneFunctionProperties = function(d, a, e) {
    void 0 === e && (e = "");
    c && (e = a.name ? a.name : e, d.name !== e && (e = {value:e, enumerable:!1, configurable:!0, writable:!1}, Object.defineProperty(d, "name", e)), d.length !== a.length && (e = {value:a.length, enumerable:!1, configurable:!0, writable:!1}, Object.defineProperty(d, "length", e)));
  };
  b.decoratedVNodeName = function(c) {
    return "asynchronous execution of " + c;
  };
});
z("src/lib/Embedder", ["require", "exports", "src/lib/util/CoreUtil"], function(g, b, f) {
  Object.defineProperty(b, "__esModule", {value:!0});
  b.cDtEmbeddedDataPropertyName = "__dynatraceEmbeddedData";
  b.create = function(d) {
    function b(b) {
      return f.hasProperty(b, "__dynatraceEmbeddedData", d);
    }
    return {get:function(f) {
      return b(f) ? f.__dynatraceEmbeddedData[d] : void 0;
    }, set:function(b, k) {
      try {
        f.isUndefined(b.__dynatraceEmbeddedData) && Object.defineProperty(b, "__dynatraceEmbeddedData", {enumerable:!1, configurable:!0, value:f.createPropertyContainer(), writable:!0}), b.__dynatraceEmbeddedData[d] = k;
      } catch (q) {
        return;
      }
      return k;
    }, clear:function(b) {
      try {
        f.isDefined(b.__dynatraceEmbeddedData) && (b.__dynatraceEmbeddedData[d] = void 0);
      } catch (k) {
      }
    }, unlink:function(b) {
      try {
        f.isDefined(b.__dynatraceEmbeddedData) && (b.__dynatraceEmbeddedData[d] = void 0, delete b.__dynatraceEmbeddedData[d], f.isEmptyObject(b.__dynatraceEmbeddedData) && delete b.__dynatraceEmbeddedData);
      } catch (k) {
      }
    }, hasData:b};
  };
});
z("src/lib/Patch", "require exports src/lib/Agent src/lib/util/InvocationUtil src/lib/util/CoreUtil src/lib/util/Reflection src/lib/Agent src/lib/DebugLoggingEntity src/lib/Embedder".split(" "), function(g, b, f, d, h, m, k, q, p) {
  function c(a, e) {
    var c = a[e];
    return h.isFunction(c) && (!b.FnEmbedder.hasData(c) || !a.hasOwnProperty(e));
  }
  function n(e, c, d) {
    void 0 === d && (d = t);
    if (h.isUndefined(e.module) || h.isUndefined(e.module[e.functionName])) {
      k.Logger.info("function " + e.functionName + " does not exist in module " + e.moduleName);
    } else {
      var l = e.module[e.functionName];
      if (h.isFunction(l)) {
        if (b.FnEmbedder.hasData(l) && e.module.hasOwnProperty(e.functionName)) {
          d.ignoreAlreadyPatched || k.Logger.info(e.qualifiedName + " is already patched");
        } else {
          return C.isDebugEnabled && k.Logger.debug("patching " + e.qualifiedName + " [" + e.apiRealm + "]"), d = new y(e, l), c = c(d), e.module[e.functionName] = c, a(e, c, l), d;
        }
      } else {
        d.ignoreMissing || k.Logger.info(e.qualifiedName + " is not a function");
      }
    }
  }
  function a(a, e, c) {
    a = a instanceof r ? new y(a, c) : a;
    b.FnEmbedder.set(e, a);
    m.cloneFunctionProperties(e, c, a.functionName);
    return a;
  }
  function e(a, e, c) {
    void 0 === c && (c = t);
    return n(a, function(a) {
      return e.generateSubstitute(a);
    });
  }
  function l(a) {
    var e = b.FnEmbedder.get(a);
    return h.isDefined(e) ? e.origFn : a;
  }
  function v(a) {
    var e = b.FnEmbedder.get(a);
    return h.isDefined(e) ? e.resolvedOrigFn : a;
  }
  Object.defineProperty(b, "__esModule", {value:!0});
  b.FnEmbedder = p.create("patchedFnDesc");
  var t = {ignoreMissing:!1, ignoreAlreadyPatched:!1}, w;
  (function(a) {
    a[a.None = 0] = "None";
    a[a.CallbackFirst = 536870912] = "CallbackFirst";
    a[a.CallbackSecond = 536870913] = "CallbackSecond";
    a[a.CallbackSecondInjectMissing = a.CallbackSecond | -2147483648] = "CallbackSecondInjectMissing";
    a[a.CallbackThird = 536870914] = "CallbackThird";
    a[a.CallbackLast = 536936447] = "CallbackLast";
    a[a.CallbackLastInjectMissing = a.CallbackLast | -2147483648] = "CallbackLastInjectMissing";
    a[a.Promise = 1073741824] = "Promise";
    a[a.CallbackFirstOrPromise = a.CallbackFirst | 1073741824] = "CallbackFirstOrPromise";
    a[a.CallbackLastOrPromise = a.CallbackLast | 1073741824] = "CallbackLastOrPromise";
  })(w = b.AsyncTrackingMode || (b.AsyncTrackingMode = {}));
  (function(a) {
    a.getCallbackIndex = function(a, e) {
      if (0 === (a & 536870912)) {
        return -1;
      }
      a &= 536870911;
      return 65535 === a ? e.length - 1 : a;
    };
    a.makeCallbackTrackingMode = function(a, e) {
      void 0 === e && (e = !1);
      return a | 536870912 | (e ? -2147483648 : 0);
    };
    a.isCallbackStyle = function(a) {
      return 0 !== (a & 536870912);
    };
    a.isPromiseStyle = function(a) {
      return 0 !== (a & 1073741824);
    };
    a.doInjectMissingCallback = function(a) {
      return 0 !== (a & -2147483648);
    };
  })(w = b.AsyncTrackingMode || (b.AsyncTrackingMode = {}));
  var x = function() {
    return function(a, e, c, d) {
      void 0 === c && (c = w.None);
      this.moduleName = a;
      this.module = e;
      this.asyncTrackingMode = c;
      this.apiRealm = d;
    };
  }();
  b.ModuleSpec = x;
  var r = function(a) {
    function e() {
      var e;
      e = arguments[1];
      e = e instanceof x ? a.call(this, e.moduleName, e.module, e.asyncTrackingMode, e.apiRealm) || this : a.call(this, arguments[1], arguments[2], 3 < arguments.length ? arguments[3] : void 0, 4 < arguments.length ? arguments[4] : void 0) || this;
      e.functionName = arguments[0];
      return e;
    }
    u(e, a);
    Object.defineProperty(e.prototype, "qualifiedName", {get:function() {
      return this.moduleName + "." + this.functionName;
    }, enumerable:!0, configurable:!0});
    return e;
  }(x);
  b.FunctionSpec = r;
  var y = function() {
    function a(a, e) {
      this.origFn = e;
      this.functionName = a.functionName;
      this.apiRealm = a.apiRealm;
      this.asyncTrackingMode = a.asyncTrackingMode;
      this.qualifiedName = a.qualifiedName;
    }
    Object.defineProperty(a.prototype, "resolvedOrigFn", {get:function() {
      for (var a = this.origFn;;) {
        var e = b.FnEmbedder.get(a);
        if (h.isUndefined(e)) {
          break;
        }
        a = e.origFn;
      }
      return a;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(a.prototype, "methodNodeName", {get:function() {
      h.isUndefined(this.theMethodNodeName) && this.setFunctionInfo(f.Agent.nativeAgent.getFunctionInfo(this.origFn));
      return this.theMethodNodeName;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(a.prototype, "scriptFile", {get:function() {
      h.isUndefined(this.theScriptFile) && this.setFunctionInfo(f.Agent.nativeAgent.getFunctionInfo(this.origFn));
      return this.theScriptFile;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(a.prototype, "lineNumber", {get:function() {
      h.isUndefined(this.theLineNumber) && this.setFunctionInfo(f.Agent.nativeAgent.getFunctionInfo(this.origFn));
      return this.theLineNumber;
    }, enumerable:!0, configurable:!0});
    a.prototype.setFunctionInfo = function(a) {
      this.theMethodNodeName = a.functionName;
      this.theScriptFile = a.fileName;
      this.theLineNumber = a.lineNumber;
    };
    return a;
  }();
  b.PatchedFnDescriptor = y;
  var C = new q.default("Patch");
  C.addToDebugLogDomain("Transformers");
  b.tag = a;
  b.applyToSingle = e;
  b.applyToAll = function(a, c, d, b) {
    void 0 === b && (b = t);
    a = new r("", a);
    for (var l = 0;l < c.length;l++) {
      a.functionName = c[l], e(a, d, b);
    }
  };
  b.applyToAllFunctionsIn = function(a, d, b, l) {
    void 0 === l && (l = t);
    h.isDefined(b) ? h.isArray(b) || (b = [b]) : b = [/.+/];
    l = h.getOptionalValue(l.ignoreMissing, !1);
    var f = {};
    l || b.forEach(function(a) {
      return f[a.toString()] = !1;
    });
    var n = new r("", a);
    if (b.some(h.isRegExp)) {
      for (var q in n.module) {
        if (c(n.module, q)) {
          var v = h.match(b, q);
          h.isDefined(v) && (n.functionName = q, e(n, d), l || (f[v.toString()] = !0));
        }
      }
    } else {
      for (q = 0, v = b;q < v.length;q++) {
        var p = v[q];
        c(n.module, p) && (n.functionName = p, e(n, d), l || (f[p] = !0));
      }
    }
    !l && b.some(function(a) {
      return !f[a.toString()];
    }) && (d = b.reduce(function(a, e) {
      return f[e.toString()] ? a : a + " " + e.toString();
    }), k.Logger.info("no match for [" + d + "] in module " + a.moduleName));
  };
  b.substitute = function(a, e, c) {
    void 0 === c && (c = t);
    return n(a, function() {
      return e;
    });
  };
  b.isApplied = function(a) {
    return b.FnEmbedder.hasData(a);
  };
  b.getFunctionDescriptor = function(a) {
    return b.FnEmbedder.get(a);
  };
  b.resolveFunctionDescriptor = function(a) {
    a = b.FnEmbedder.get(a);
    for (var e;h.isDefined(a);) {
      e = a, a = b.FnEmbedder.get(a.origFn);
    }
    return e;
  };
  b.invokeOriginal = function(a, e, c) {
    void 0 === c && (c = []);
    return d.doInvoke(e, l(a), c);
  };
  b.invokeResolvedOriginal = function(a, e, c) {
    void 0 === c && (c = []);
    return d.doInvoke(e, v(a), c);
  };
  b.getOriginalFunction = l;
  b.getResolvedOriginalFunction = v;
});
z("src/lib/sensors/InstrumentationRule", ["require", "exports", "src/lib/Patch"], function(g, b, f) {
  Object.defineProperty(b, "__esModule", {value:!0});
  g = b.Strategy || (b.Strategy = {});
  g[g.OnRequest = 0] = "OnRequest";
  g[g.Startup = 1] = "Startup";
  b.cDefaultRuleOptions = {ignoreMissing:!1, patchPrototype:!1, asyncTrackingMode:f.AsyncTrackingMode.CallbackLast};
});
z("src/lib/transformer/ControlParamSupplier", ["require", "exports"], function(g, b) {
  Object.defineProperty(b, "__esModule", {value:!0});
});
z("src/lib/sensors/SensorBase", "require exports semver src/lib/Agent src/lib/RunTimeProperty src/lib/sensors/SensorConfig src/lib/util/CoreUtil src/lib/Patch src/lib/ModuleRegistry src/lib/DebugLoggingEntity".split(" "), function(g, b, f, d, h, m, k, q, p, c) {
  Object.defineProperty(b, "__esModule", {value:!0});
  g = function(c) {
    function a(e, b, f, n) {
      var l = c.call(this, a.makeSensorDebugFlagName(e)) || this;
      l.sensorConfigKey = e;
      l.sensorConfig = b;
      l.instrumentationRule = f;
      l.sensorId = n;
      l.addToDebugLogDomain("Sensors");
      l.addToDebugLogDomain("Transformers");
      l.disableFlag = new h.BooleanProperty(a.makeSensorDebugFlagName(e) + "Disabled", !1);
      k.isUndefined(l.sensorId) && (l.sensorId = d.Agent.correlation.SensorId.SENSOR_ID_NODEJS);
      return l;
    }
    u(a, c);
    Object.defineProperty(a.prototype, "name", {get:function() {
      return this.sensorConfigKey;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(a.prototype, "enabled", {get:function() {
      return this.sensorConfig.enabled && !this.disableFlag.value;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(a.prototype, "entrypoint", {get:function() {
      return this.sensorConfig.entrypoint;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(a.prototype, "capture", {get:function() {
      return this.sensorConfig.capture;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(a.prototype, "active", {get:function() {
      return this.capture && d.Agent.active;
    }, enumerable:!0, configurable:!0});
    a.prototype.updateState = function(a) {
      this.sensorConfig.capture = a.capture;
      this.sensorConfig.entrypoint = a.entrypoint;
    };
    a.prototype.applyInstrumentation = function() {
    };
    a.prototype.isApplicable = function(e) {
      var c = this.instrumentationRule.associatedModules[e.request];
      return k.isUndefined(c) || a.validateCriterias(c, e);
    };
    a.prototype.determinePackageMetaInfo = function() {
    };
    a.prototype.applyPatch = function(a, c) {
      var e = this.instrumentationRule.associatedModules[a.request];
      k.isDefined(e) ? this.doApplyPatch(e, a.moduleExports, a.request, a, c, k.getOptionalValue(e.ignoreMissing, !1), k.getOptionalValue(e.patchPrototype, !1), k.getOptionalValue(e.asyncTrackingMode, q.AsyncTrackingMode.CallbackLast), e.apiRealm) : d.Logger.warning(this.sensorConfigKey + " received instrumentation request for non associated module '" + a.request + "'");
    };
    a.prototype.doApplyPatch = function(e, c, b, f, n, h, p, g, m) {
      if (k.isDefined(e.rules) && a.validateCriterias(e, f)) {
        for (var l = 0, v = e.rules;l < v.length;l++) {
          var w = v[l];
          if (a.validateCriterias(w, f)) {
            var r = k.getOptionalValue(w.asyncTrackingMode, g), t = k.getOptionalValue(w.patchPrototype, p), x = k.getOptionalValue(w.ignoreMissing, h), y = k.getOptionalValue(e.apiRealm, m);
            if (k.isDefined(w.subComponentName)) {
              this.isDebugEnabled && d.Logger.debug("doApplyPatch patching sub-component " + b + "." + w.subComponentName + ": " + t);
              var C = c[w.subComponentName];
              k.isDefined(C) ? this.doApplyPatch(w, C, b + "." + w.subComponentName, f, n, x, t, r, y) : d.Logger.warning(this.sensorConfigKey + ": sub-component " + b + "." + w.subComponentName + " not found");
            } else {
              this.isDebugEnabled && d.Logger.debug("patching " + b + ": " + w.methodFilter), x = {ignoreMissing:x}, r = new q.ModuleSpec(b, t ? c.prototype : c, r, y), q.applyToAllFunctionsIn(r, n, w.methodFilter, x);
            }
          }
        }
      }
    };
    a.validateCriterias = function(a, c) {
      var e = k.isUndefined(a.nodeVersionCriteria) || f.satisfies(process.version, a.nodeVersionCriteria);
      e && k.isDefined(a.moduleVersionCriteria) && (c = p.ModuleRegistry.lookup(c), e = k.isDefined(c) && f.satisfies(c.version, a.moduleVersionCriteria));
      e && k.isDefined(a.platformCriteria) && (e = k.isDefined(k.match(a.platformCriteria, process.platform)));
      e && k.isDefined(a.runTimePropertyCriteria) && (e = (new h.BooleanProperty(a.runTimePropertyCriteria, !1)).value);
      return e;
    };
    a.makeSensorDebugFlagName = function(a) {
      var e = a.substr(m.cConfigKeyPrefix.length), e = e.replace(/\./g, "");
      /Sensor$/.test(a) || (e += "Sensor");
      return e;
    };
    return a;
  }(c.default);
  b.SensorBase = g;
});
z("src/lib/util/ErrorUtil", ["require", "exports", "module", "src/lib/Agent"], function(g, b, f, d) {
  function h(d) {
    return d instanceof Error ? d.stack : d;
  }
  Object.defineProperty(b, "__esModule", {value:!0});
  b.verboseExceptionObject = h;
  b.logAgentException = function(b) {
    b = h(b);
    d.Logger.warning("agent exception: " + b);
    var p = Date.now();
    if (!(p - m < k)) {
      try {
        d.Agent.nativeAgent.generateSupportAlert(b, process.execPath, process.version, !0, !1, f._cache), m = p;
      } catch (c) {
      }
    }
  };
  var m = 0, k = 864E5;
});
z("src/lib/MethodIdCache", ["require", "exports", "src/lib/Agent", "src/lib/util/CoreUtil", "src/lib/RunTimeProperty"], function(g, b, f, d, h) {
  Object.defineProperty(b, "__esModule", {value:!0});
  var m = function() {
    function b() {
      this.typeNameCount = this.fileNameCount = this.methodIdObjectCount = 0;
    }
    b.prototype.toString = function() {
      return "[" + this.fileNameCount + " " + this.typeNameCount + " " + this.methodIdObjectCount + "]";
    };
    return b;
  }();
  g = new (function() {
    function b() {
      this.debugFlag = new h.BooleanProperty("MethodIdCache");
      this.disableFlag = new h.BooleanProperty("MethodIdCacheDisabled");
      this.reset();
    }
    Object.defineProperty(b.prototype, "statistics", {get:function() {
      return this.stats;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(b.prototype, "enabled", {get:function() {
      return !this.disableFlag.value;
    }, enumerable:!0, configurable:!0});
    b.prototype.reset = function() {
      this.cache = d.createPropertyContainer();
      this.stats = new m;
    };
    b.prototype.get = function(b, k, c) {
      var n;
      if (this.disableFlag.value) {
        d.isEmptyObject(this.cache) || this.reset(), n = f.Agent.nativeAgent.registerMethod(b, k, c);
      } else {
        n = this.cache[c];
        d.isUndefined(n) && (n = d.createPropertyContainer(), this.cache[c] = n, ++this.stats.fileNameCount);
        var a = n[k];
        d.isUndefined(a) && (a = d.createPropertyContainer(), n[k] = a, ++this.stats.typeNameCount);
        n = a[b];
        d.isUndefined(n) && (n = f.Agent.nativeAgent.registerMethod(b, k, c), a[b] = n, ++this.stats.methodIdObjectCount, this.debugFlag.value && f.Logger.debug("MethodRegistryCache: created id " + n + " #" + this.stats.methodIdObjectCount + " from '" + b + "' '" + k + "' '" + c + "'"), 255 === (this.stats.methodIdObjectCount & 255) && f.Logger.info("MethodRegistryCache: grown to " + this.stats + " entries"));
      }
      return n;
    };
    return b;
  }());
  b.default = g;
});
z("src/lib/FunctionId", "require exports src/lib/Agent src/lib/util/CoreUtil src/lib/util/Reflection src/lib/MethodIdCache".split(" "), function(g, b, f, d, h, m) {
  Object.defineProperty(b, "__esModule", {value:!0});
  g = function() {
    function b() {
      if (d.isString(arguments[0])) {
        this.functionName = arguments[0], this.typeName = arguments[1], this.fileName = arguments[2], this.lineNumber = arguments[3], 5 === arguments.length && (this.apiRealm = arguments[4]);
      } else {
        if (d.isFunction(arguments[0])) {
          var b = f.Agent.nativeAgent.getFunctionInfo(arguments[0]);
          this.functionName = b.functionName;
          this.fileName = b.fileName;
          this.lineNumber = b.lineNumber;
          this.typeName = h.getTypeName(arguments[1]);
        } else {
          b = arguments[0], this.functionName = b.methodNodeName, this.typeName = h.getTypeName(arguments[1]), this.fileName = b.scriptFile, this.lineNumber = b.lineNumber, this.apiRealm = b.apiRealm;
        }
      }
    }
    b.prototype.toString = function(b) {
      void 0 === b && (b = !1);
      return b ? this.qualifiedName : this.functionName;
    };
    Object.defineProperty(b.prototype, "methodId", {get:function() {
      d.isUndefined(this.theMethodId) && (this.theMethodId = m.default.get(this.functionName, this.typeName, this.fileName));
      return this.theMethodId;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(b.prototype, "qualifiedName", {get:function() {
      d.isUndefined(this.theQualifiedName) && (this.theQualifiedName = this.typeName ? this.typeName + "." + this.functionName : this.functionName);
      return this.theQualifiedName;
    }, enumerable:!0, configurable:!0});
    return b;
  }();
  b.FunctionId = g;
  g = function(b) {
    function d(d) {
      return b.call(this, h.decoratedVNodeName(d.functionName), d.typeName, d.fileName, d.lineNumber, d.apiRealm) || this;
    }
    u(d, b);
    return d;
  }(g);
  b.VirtualNodeFunctionId = g;
});
z("src/lib/util/Validatable", ["require", "exports", "src/lib/util/CoreUtil"], function(g, b, f) {
  Object.defineProperty(b, "__esModule", {value:!0});
  b.validate = function(b) {
    return f.isDefined(b) && b.valid;
  };
});
z("src/lib/Stack", ["require", "exports", "semver", "src/lib/util/CoreUtil", "src/lib/util/Reflection"], function(g, b, f, d, h) {
  function m(a) {
    var e = "";
    d.hasValue(a.receiver) && (e = a.getTypeName() || "");
    return e;
  }
  function k(a) {
    var e = "";
    try {
      e = a.getTypeName() || "";
    } catch (l) {
    }
    return e;
  }
  function q(a) {
    return a.getTypeName() || "";
  }
  function p(a, e) {
    var c = {}, b = [], d = Error.stackTraceLimit, f = Error.prepareStackTrace;
    try {
      Error.prepareStackTrace = function(a, e) {
        b = e;
      }, Error.stackTraceLimit = a, Error.captureStackTrace(c, e ? e : p), n.triggerPrepareStackTrace(c);
    } finally {
      Error.stackTraceLimit = d, Error.prepareStackTrace = f;
    }
    return b;
  }
  Object.defineProperty(b, "__esModule", {value:!0});
  var c;
  c = f.satisfies(process.version, "0.10") ? m : f.satisfies(process.version, "0.12") ? k : q;
  var n = function() {
    function a() {
    }
    a.triggerPrepareStackTrace = function(a) {
      return a.stack;
    };
    return a;
  }();
  b.getCallSites = p;
  b.findTypeName = function(a) {
    if (a.isToplevel()) {
      return "";
    }
    a = c(a);
    "[object Object]" === a && (a = "");
    return a;
  };
  b.findFunctionName = function(a) {
    var e;
    (e = a.getFunctionName()) || (e = a.getMethodName());
    return e || h.cAnonymousFnName;
  };
});
z("src/lib/ErrorObject", ["require", "exports", "src/lib/Stack", "src/lib/Debug"], function(g, b, f, d) {
  function h(c) {
    var b = [];
    if (!c || "string" !== typeof c) {
      return b;
    }
    c = c.split("\n").slice(1);
    for (var a = new p, e = 0;e < c.length;e++) {
      var d = c[e].match(/at (?:(.+)\s+)?\(?(?:(.+?):(\d+):(\d+)|([^)]+))\)?/);
      if (d) {
        var k = new p;
        if (d[1]) {
          var h = d[1];
          h && (a.functionName = h, k.typeName = f.findTypeName(a), k.functionName = f.findFunctionName(a) || (k.typeName ? "<anonymous>" : ""), h = k.functionName.indexOf(" "), 0 < h && (k.functionName = k.functionName.substring(0, h)));
        }
        k.fileName = d[2] || "";
        k.lineNumber = parseInt(d[3], 10) || -1;
        k.columnNumber = parseInt(d[4], 10) || -1;
        b.push(k);
      }
    }
    return b;
  }
  function m(c, b) {
    var a = [];
    c && a.push(c.toString());
    if (b) {
      for (c = 0;c < b.length;c++) {
        a.push("    at " + b[c].toString());
      }
    }
    return a.join("\n");
  }
  Object.defineProperty(b, "__esModule", {value:!0});
  var k = function() {
    return function(c) {
      this.name = "Error";
      this.message = "Error '" + c + "' occurred";
    };
  }();
  b.createExceptionObject = function(c) {
    return new k(c);
  };
  b.getCallStack = function(c) {
    var b = [], a = Error.prepareStackTrace;
    try {
      Error.prepareStackTrace = function(e, c) {
        b = c;
        return (a || m)(e, c);
      }, q.triggerPrepareStackTrace(c), 0 === b.length && (b = h(c.stack));
    } finally {
      Error.prepareStackTrace = a;
    }
    return b;
  };
  var q = function() {
    function c() {
    }
    c.triggerPrepareStackTrace = function(c) {
      return c.stack;
    };
    return c;
  }(), p = function() {
    function c() {
      this.fileName = this.typeName = this.functionName = "";
      this.columnNumber = this.lineNumber = -1;
      this.receiver = "dummyReceiverValue";
    }
    c.prototype.getFileName = function() {
      return this.fileName;
    };
    c.prototype.getLineNumber = function() {
      return this.lineNumber;
    };
    c.prototype.getFunctionName = function() {
      return this.functionName;
    };
    c.prototype.getTypeName = function() {
      return this.typeName;
    };
    c.prototype.getColumnNumber = function() {
      return this.columnNumber;
    };
    c.prototype.getMethodName = function() {
      return "";
    };
    c.prototype.toString = function() {
      return (this.typeName ? this.typeName + "." : "") + this.functionName + (this.functionName ? " (" : "") + this.fileName + ":" + this.lineNumber + ":" + this.columnNumber + (this.functionName ? ")" : "");
    };
    c.prototype.isNative = function() {
      d.fail("not implemented");
      return !1;
    };
    c.prototype.getThis = function() {
      d.fail("not implemented");
    };
    c.prototype.getFunction = function() {
      d.fail("not implemented");
    };
    c.prototype.getEvalOrigin = function() {
      d.fail("not implemented");
    };
    c.prototype.isToplevel = function() {
      return !1;
    };
    c.prototype.isEval = function() {
      d.fail("not implemented");
      return !1;
    };
    c.prototype.isConstructor = function() {
      d.fail("not implemented");
      return !1;
    };
    return c;
  }();
  b.CallSiteObject = p;
});
z("src/lib/sensors/AttachmentBase", ["require", "exports", "src/lib/Agent"], function(g, b, f) {
  Object.defineProperty(b, "__esModule", {value:!0});
  var d = function() {
    function b(b) {
      this.attachment = b;
    }
    Object.defineProperty(b.prototype, "id", {get:function() {
      return f.Agent.correlation.AttachmentFieldId;
    }, enumerable:!0, configurable:!0});
    b.prototype.string = function(b, d) {
      this.attachment.setAttachmentFieldString(b, d);
    };
    b.prototype.numeric = function(b, d) {
      this.attachment.setAttachmentFieldNumeric(b, d);
    };
    b.prototype.keyValue = function(b, d) {
      this.attachment.setAttachmentFieldKeyValue(b, d);
    };
    b.setMultiple = function(d, f) {
      try {
        d.beginFastFieldAccess(), f(new b(d));
      } catch (q) {
        throw q;
      } finally {
        d.endFastFieldAccess();
      }
    };
    return b;
  }();
  b.AttachmentFieldSetter = d;
  g = function() {
    function b(b, d, f) {
      this.id = d;
      this.attachment = b.getAttachment(d, f);
    }
    Object.defineProperty(b.prototype, "valid", {get:function() {
      return this.attachment.valid;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(b.prototype, "fieldId", {get:function() {
      return f.Agent.correlation.AttachmentFieldId;
    }, enumerable:!0, configurable:!0});
    b.prototype.setMultipleFields = function(b) {
      d.setMultiple(this.attachment, b);
    };
    b.prototype.toString = function() {
      return "attachment[#" + this.attachment + " " + this.id + "]";
    };
    return b;
  }();
  b.AttachmentBase = g;
  b.default = g;
});
z("src/lib/sensors/ExceptionAttachment", "require exports src/lib/Agent src/lib/ErrorObject src/lib/util/CoreUtil src/lib/util/RuntimeUtil src/lib/Stack src/lib/Debug src/lib/sensors/AttachmentBase src/lib/RunTimeProperty".split(" "), function(g, b, f, d, h, m, k, q, p, c) {
  Object.defineProperty(b, "__esModule", {value:!0});
  var n = !q.isEnabled();
  g = function(a) {
    function e(e) {
      e = a.call(this, e, f.Agent.correlation.AttachmentId.ATTACHMENT_EXCEPTION_ID, f.Agent.correlation.AttachmentTarget.CurrentNode) || this;
      e.debugExceptionAttachment = new c.BooleanProperty("ExceptionAttachment", !1);
      return e;
    }
    u(e, a);
    e.prototype.fillExceptionData = function(a) {
      var e = this;
      if (!h.isUndefined(this.attachment)) {
        var c = a instanceof Error ? a : d.createExceptionObject(a);
        this.setMultipleFields(function(a) {
          e.debugExceptionAttachment.value && f.Logger.debug("ExceptionAttachment: processing " + c.name + " [" + c.message + "]");
          a.string(a.id.EXCEPTION_MESSAGE, c.message);
          a.string(a.id.EXCEPTION_THROWABLE, c.name);
          var b = d.getCallStack(c);
          if (h.isDefined(b)) {
            for (var l = 0;l < b.length;l++) {
              var n = b[l];
              !h.isDefined(n) || e.isFilterAgentFrames() && m.isAgentFile(n.getFileName() || "") || (e.debugExceptionAttachment.value && f.Logger.debug("ExceptionAttachment: adding stackframe " + n.toString()), a.numeric(a.id.EXCEPTION_STACKTRACE_NEXT_LINE, 0), a.string(a.id.EXCEPTION_STACKTRACE_METHOD, k.findFunctionName(n)), a.string(a.id.EXCEPTION_STACKTRACE_CLASS, k.findTypeName(n)), a.string(a.id.EXCEPTION_STACKTRACE_FILE, n.getFileName() || ""), a.numeric(a.id.EXCEPTION_STACKTRACE_LINE_NUMBER, 
              n.getLineNumber()));
            }
          }
        });
      }
    };
    e.prototype.isFilterAgentFrames = function() {
      return n;
    };
    return e;
  }(p.default);
  b.ExceptionAttachment = g;
});
z("src/lib/MethodActivation", "require exports src/lib/Agent src/lib/Debug src/lib/sensors/ExceptionAttachment src/lib/util/CoreUtil src/lib/FunctionId src/lib/RunTimeProperty".split(" "), function(g, b, f, d, h, m, k, q) {
  Object.defineProperty(b, "__esModule", {value:!0});
  var p = Math.pow(2, 32);
  g = function() {
    function c(b, a, e, l, k, h) {
      void 0 === e && (e = !1);
      void 0 === l && (l = 0);
      this.spc = b;
      this.functionId = a;
      this.endSpcOnExit = e;
      this.currentState = 0;
      d.assert(b.open);
      c.serialNoCounter >= p && (c.serialNoCounter = 1);
      this.serialNo = c.serialNoCounter++;
      m.isDefined(h) && h.createAttachments(this);
      this.isDebugEnabled && f.Logger.debug("creating MethodActivation(" + this.toString(!0) + ")");
      switch(l) {
        case 0:
          break;
        case 1:
          this.enter(k);
          break;
        case 2:
          this.enterAndSuspend(k);
          break;
        default:
          d.fail("unexpected MethodActivationCreationMode: " + l);
      }
    }
    Object.defineProperty(c.prototype, "stack", {get:function() {
      var c = [];
      c.push(this);
      for (var a = this.parentActivation;m.isDefined(a);) {
        c.push(a), a = a.parentActivation;
      }
      return c;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(c.prototype, "valid", {get:function() {
      return this.spc.open;
    }, enumerable:!0, configurable:!0});
    c.prototype.toString = function(c) {
      void 0 === c && (c = !1);
      var a = this.functionId.toString(!1) + ":" + this.serialNo;
      c && (a += "[" + this.functionId.toString(c) + ", " + this.spc + "]");
      return a;
    };
    c.prototype.enter = function(c, a) {
      void 0 === a && (a = !1);
      this.doTransition(a ? 1 : 0);
      d.assert(m.isUndefined(this.parentActivation) || 1 === this.parentActivation.currentState);
      var e = this.functionId instanceof k.VirtualNodeFunctionId;
      e && m.isUndefined(c) && (c = f.Agent.correlation.MethodCategory.AsyncCall);
      var b = !1;
      d.assert(this.spc.open, "enter on closed path");
      this.spc.open && (b = a ? this.spc.path.methodEnterSuspended(this.serialNo, this.functionId.methodId, c, e) : this.spc.path.methodEnter(this.serialNo, this.functionId.methodId, c, e), this.spc.onMethodEnter(this), this.isDebugEnabled && f.Logger.debug("MethodActivation.enter(" + this + "): " + b));
      return b;
    };
    c.prototype.enterAndSuspend = function(c) {
      return this.enter(c, !0);
    };
    c.prototype.exit = function(c) {
      void 0 === c && (c = !1);
      this.doTransition(4);
      d.assert(this.spc.open, "exit on closed path");
      this.onMethodExit(c);
      c = this.spc.path.methodExit(this.serialNo);
      this.endSpcOnExit && this.spc.end();
      this.isDebugEnabled && f.Logger.debug("MethodActivation.exit(" + this + "): " + c);
      return c;
    };
    Object.defineProperty(c.prototype, "isExited", {get:function() {
      return 3 === this.currentState;
    }, enumerable:!0, configurable:!0});
    c.prototype.suspend = function() {
      this.doTransition(2);
      d.assert(this.spc.open, "suspend on closed path");
      var c = this.spc.path.methodSuspend(this.serialNo);
      this.isDebugEnabled && f.Logger.debug("MethodActivation.suspend(" + this + "): " + c);
      return c;
    };
    c.prototype.resume = function() {
      this.doTransition(3);
      d.assert(this.spc.open, "resume on closed path");
      var c = this.spc.path.methodResume(this.serialNo);
      this.isDebugEnabled && f.Logger.debug("MethodActivation.resume(" + this + "): " + c);
      return c;
    };
    c.prototype.exitOrException = function(c) {
      return m.isDefined(c) ? this.methodException(c) : this.exit();
    };
    c.prototype.methodException = function(c) {
      this.doTransition(5);
      d.assert(this.spc.open, "methodException on closed path");
      var a = new h.ExceptionAttachment(this);
      a.valid && a.fillExceptionData(c);
      c = this.spc.path.methodException(this.serialNo);
      this.onMethodExit(!1);
      this.endSpcOnExit && this.spc.end();
      this.isDebugEnabled && f.Logger.debug("MethodActivation.methodException(" + this + "): " + c);
      return c;
    };
    c.prototype.getAttachment = function(c, a) {
      this.spc.open ? (this.isDebugEnabled && f.Logger.debug("MethodActivation.getAttachment(" + this + ", id:" + c + ", target:" + a + ")"), c = this.spc.path.getAttachment(this.serialNo, c, a)) : (c = f.Agent.correlation.cInvalidAttachment, d.fail("attempt to create attachement on closed path"));
      return c;
    };
    c.prototype.onMethodExit = function(c) {
      this.spc.didInitiateAsyncOp = c;
      this.spc.onMethodExit(this);
    };
    c.prototype.doTransition = function(c) {
      var a, e;
      switch(c) {
        case 0:
          a = 0 === this.currentState;
          e = 1;
          break;
        case 1:
          a = 0 === this.currentState;
          e = 2;
          break;
        case 2:
          a = 1 === this.currentState;
          e = 2;
          break;
        case 3:
          a = 2 === this.currentState;
          e = 1;
          break;
        case 4:
        case 5:
          a = 1 === this.currentState || 2 === this.currentState;
          e = 3;
          break;
        default:
          d.fail("unknown MethodActivationEvent " + c), a = !1, e = this.currentState;
      }
      a ? this.currentState = e : (c = this.toString(!0) + ": MethodActivationEvent " + c + " invalid in state " + this.currentState, d.fail(c), f.Logger.warning(c));
      return a;
    };
    Object.defineProperty(c.prototype, "isDebugEnabled", {get:function() {
      m.isUndefined(c.dbgFlag) && (c.dbgFlag = new q.BooleanProperty("MethodActivation"));
      return c.dbgFlag.value;
    }, enumerable:!0, configurable:!0});
    return c;
  }();
  g.serialNoCounter = 1;
  b.MethodActivation = g;
});
z("src/lib/SubPathContext", "require exports src/lib/Agent src/lib/Debug src/lib/util/CoreUtil src/lib/util/Validatable src/lib/RunTimeProperty src/lib/MethodActivation".split(" "), function(g, b, f, d, h, m, k, q) {
  function p() {
    h.isUndefined(c) && (c = new k.BooleanProperty("SubPathContext"));
    return c.value;
  }
  Object.defineProperty(b, "__esModule", {value:!0});
  b.MethodActivation = q.MethodActivation;
  var c;
  g = function() {
    function a() {
      this.contextStack = [];
    }
    Object.defineProperty(a.prototype, "top", {get:function() {
      return this.hasItem ? this.contextStack[this.contextStack.length - 1] : void 0;
    }, enumerable:!0, configurable:!0});
    a.prototype.pop = function() {
      var a = this.hasItem ? this.contextStack.pop() : void 0;
      p() && f.Logger.debug("ContextStack.pop " + a + " => " + this.topToString());
      return a;
    };
    a.prototype.push = function(a) {
      a && (p() && f.Logger.debug("ContextStack.push " + this.topToString() + " => " + a), this.contextStack.push(a));
    };
    a.prototype.topToString = function() {
      return this.hasItem ? this.top.toString() : "<empty>";
    };
    Object.defineProperty(a.prototype, "hasItem", {get:function() {
      return 0 < this.contextStack.length;
    }, enumerable:!0, configurable:!0});
    a.prototype.clear = function() {
      this.contextStack = [];
    };
    return a;
  }();
  var n = function() {
    function a(e, c, b) {
      void 0 === b && (b = 0);
      this.instanceId = a.instanceCounter++;
      this.theDidInitiatAsyncOpFlag = !1;
      this.sensorId = h.getOptionalValue(c, f.Agent.correlation.SensorId.SENSOR_ID_NODEJS);
      this.pathHandle = f.Agent.correlation.startPath(this.sensorId, e, b);
      p() && f.Logger.debug("created " + this.toString(!0));
    }
    a.getActiveContext = function() {
      return a.contextStack.top;
    };
    a.prototype.toString = function(a) {
      void 0 === a && (a = !1);
      var e = "SPC:#" + this.instanceId.toString(16);
      a && (e += "[P=" + this.pathHandle + ", LAF=" + (h.isDefined(this.lostAndFoundLink) ? this.lostAndFoundLink : "<>") + "]");
      return e;
    };
    Object.defineProperty(a.prototype, "activationStack", {get:function() {
      for (var a = [], c = this.theCurrentActivation;h.isDefined(c);) {
        a.push(c), c = c.parentActivation;
      }
      return a;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(a.prototype, "currentActivation", {get:function() {
      return this.theCurrentActivation;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(a.prototype, "didInitiateAsyncOp", {get:function() {
      return this.theDidInitiatAsyncOpFlag;
    }, set:function(a) {
      a && a !== this.theDidInitiatAsyncOpFlag && (p() && f.Logger.debug(this + " set didInitiatAsyncOp to true"), this.theDidInitiatAsyncOpFlag = !0);
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(a.prototype, "valid", {get:function() {
      return m.validate(this.pathHandle) || h.isDefined(this.lostAndFoundLink);
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(a.prototype, "open", {get:function() {
      return h.isDefined(this.pathHandle);
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(a.prototype, "isActive", {get:function() {
      return a.contextStack.top === this;
    }, enumerable:!0, configurable:!0});
    a.prototype.activate = function() {
      a.contextStack.push(this);
    };
    a.prototype.deactivate = function() {
      this.isActive ? a.contextStack.pop() : d.fail("don't deactivate inactive SPC");
    };
    Object.defineProperty(a.prototype, "path", {get:function() {
      return h.isDefined(this.pathHandle) ? this.pathHandle : f.Agent.correlation.cInvalidPath;
    }, enumerable:!0, configurable:!0});
    a.prototype.end = function() {
      d.assert(h.isDefined(this.pathHandle), "attempt to end path twice");
      var a = !1;
      h.isDefined(this.pathHandle) && (p() && f.Logger.debug("ending " + this + " => LAF=" + this.lostAndFoundLink), a = this.pathHandle.endPath(), this.pathHandle = void 0);
      return a;
    };
    a.prototype.spawnAsyncExecutionSubPath = function(a) {
      a = this.spawnSubPath(h.getOptionalValue(a, this.sensorId));
      a.asyncInitiator = this;
      return a;
    };
    a.prototype.spawnSubPath = function(e, c) {
      void 0 === c && (c = !1);
      var b;
      h.isDefined(this.pathHandle) ? (b = this.createSubPathLink(c), p() && f.Logger.debug(this + " created " + (c ? "" : "a") + "synchronous link for new sub path L[" + b + "]")) : h.isUndefined(this.lostAndFoundLink) ? (d.fail(this + " has no lost-and-found-link, is didInitiateAsyncOp set?"), f.Logger.warning(this + " has no lost-and-found-link, is didInitiateAsyncOp set?")) : (b = f.Agent.correlation.deserializeLinkFromString(this.lostAndFoundLink), p() && f.Logger.debug("instantiating lost&found " + 
      this + " => L[" + b + "]"));
      h.isDefined(e) || (e = this.sensorId);
      e = new a(b, e);
      p() && f.Logger.debug("spawning " + e + " from L(" + this + ")");
      return e;
    };
    a.prototype.createActivation = function(a, c, b, d) {
      void 0 === c && (c = 0);
      var e = this.open ? this : this.spawnSubPath();
      return new q.MethodActivation(e, a, e !== this, c, b, d);
    };
    a.prototype.createLink = function(a, c) {
      return h.isDefined(this.pathHandle) ? this.pathHandle.createLink(a, c) : f.Agent.correlation.cInvalidLink;
    };
    a.prototype.addLink = function(a, c) {
      return h.isDefined(this.pathHandle) ? this.pathHandle.addLink(a, this.sensorId, c) : !1;
    };
    a.prototype.onMethodEnter = function(a) {
      if (p()) {
        var c = this.activationStack.map(function(a) {
          return a.toString();
        }).join(" < ");
        f.Logger.debug(this + ".onMethodEnter: push '" + a + "' to [" + c + "]");
      }
      a.parentActivation = this.theCurrentActivation;
      this.theCurrentActivation = a;
    };
    a.prototype.onMethodExit = function(a) {
      if (p()) {
        var c = this.activationStack.map(function(a) {
          return a.toString();
        }).join(" < ");
        f.Logger.debug(this + ".onMethodExit: pop '" + a + "' from [" + c + "]");
      }
      d.assertStrictEqual(this.theCurrentActivation, a);
      this.theDidInitiatAsyncOpFlag && h.isUndefined(a.parentActivation) && this.addLostAndFoundLink();
      this.theCurrentActivation = a.parentActivation;
      a.parentActivation = void 0;
    };
    a.prototype.addLostAndFoundLink = function() {
      if (h.isDefined(this.lostAndFoundLink)) {
        return !0;
      }
      if (h.isUndefined(this.pathHandle)) {
        return !1;
      }
      var a = this.pathHandle.createLink();
      this.lostAndFoundLink = a.serialize();
      a = this.pathHandle.addLink(!1, this.sensorId, a);
      p() && f.Logger.debug(this + ": created LAF=" + this.lostAndFoundLink + ": " + a);
      return a;
    };
    a.prototype.createSubPathLink = function(a) {
      void 0 === a && (a = !1);
      d.assert(h.isDefined(this.pathHandle));
      var c, e;
      h.isDefined(this.pathHandle) ? (c = this.pathHandle.createLink(), e = c.duplicate(), this.pathHandle.addLink(a, this.sensorId, c)) : e = f.Agent.correlation.cInvalidLink;
      return e;
    };
    return a;
  }();
  n.contextStack = new g;
  n.instanceCounter = 0;
  b.SubPathContext = n;
});
z("src/lib/transformer/TransformerBase", "require exports src/lib/Agent src/lib/util/CoreUtil src/lib/Agent src/lib/SubPathContext src/lib/FunctionId".split(" "), function(g, b, f, d, h, m, k) {
  Object.defineProperty(b, "__esModule", {value:!0});
  var q = function() {
    function b(c, b) {
      this.vNodeActivation = c;
      this.initiatorActivation = b;
    }
    b.prototype.initiatorActivationDone = function(c) {
      this.initiatorActivation.spc.deactivate();
      return this.initiatorActivation.exitOrException(c);
    };
    return b;
  }();
  b.AsyncActivationResult = q;
  g = function() {
    function b(c) {
      this.controlParams = c;
    }
    b.prototype.shouldCreateActivation = function(c, b) {
      return d.isDefined(c) && !this.isApiRealmActive(c, b);
    };
    b.prototype.isApiRealmActive = function(c, b) {
      return d.isDefined(b.apiRealm) && d.isDefined(c.currentActivation) && c.currentActivation.functionId.apiRealm === b.apiRealm;
    };
    b.prototype.tryCreateActivation = function(c, b, a, e, f) {
      void 0 === e && (e = 1);
      if (this.shouldCreateActivation(c, b)) {
        return c.createActivation(b, e, a, f);
      }
      d.isDefined(c) && this.controlParams.isDebugEnabled && h.Logger.debug("nested call within apiRealm " + b.apiRealm + " " + c.currentActivation.functionId.functionName + "->" + b.functionName);
    };
    b.prototype.tryStartAsyncActivation = function(c, b, a, e) {
      void 0 === b && (b = f.Agent.correlation.MethodCategory.AsyncCall);
      if (this.controlParams.active) {
        var l = m.SubPathContext.getActiveContext();
        if (d.isDefined(l)) {
          if (this.isApiRealmActive(l, c)) {
            this.controlParams.isDebugEnabled && h.Logger.debug("nested call within apiRealm " + c.apiRealm + " " + l.currentActivation.functionId.functionName + "->" + c.functionName);
            return;
          }
        } else {
          if (!this.controlParams.entrypoint) {
            return;
          }
          l = new m.SubPathContext(void 0, e);
          if (!l.valid) {
            return;
          }
        }
        l = l.createActivation(c, 1);
        l.spc.activate();
        e = l.spc.spawnAsyncExecutionSubPath(e);
        c = new k.VirtualNodeFunctionId(c);
        b = e.createActivation(c, 2, b, a);
        return new q(b, l);
      }
    };
    b.prototype.tryStartIncomingAsyncSubPath = function(c, b, a, e, d, h) {
      void 0 === b && (b = f.Agent.correlation.MethodCategory.AsyncCall);
      if (this.controlParams.active && this.controlParams.entrypoint && (a = new m.SubPathContext(a, d, h), a.valid)) {
        return h = new k.VirtualNodeFunctionId(c), b = a.createActivation(h, 2, b, e), d = a.spawnSubPath(d, !1), a.asyncInitiator = d, d.didInitiateAsyncOp = !0, c = new m.MethodActivation(d, c, !0, 1), d.activate(), new q(b, c);
      }
    };
    b.selectMethodActivationContext = function(c) {
      var b = m.SubPathContext.getActiveContext();
      if (d.isUndefined(b) || !b.open) {
        b = c;
      }
      return b;
    };
    return b;
  }();
  b.TransformerBase = g;
});
z("src/lib/transformer/AsyncTransformerBase", ["require", "exports", "src/lib/transformer/TransformerBase"], function(g, b, f) {
  Object.defineProperty(b, "__esModule", {value:!0});
  g = function(b) {
    function d(f, k) {
      void 0 === k && (k = d.dynatraceInjectedCallback);
      f = b.call(this, f) || this;
      f.injectionCallback = k;
      return f;
    }
    u(d, b);
    d.dynatraceInjectedCallback = function() {
    };
    return d;
  }(f.TransformerBase);
  b.AsyncTransformerBase = g;
});
z("src/lib/sensors/AutoSensorAttachment", "require exports src/lib/Agent src/lib/Stack src/lib/util/CoreUtil src/lib/util/RuntimeUtil src/lib/sensors/AttachmentBase src/lib/MethodIdCache".split(" "), function(g, b, f, d, h, m, k, q) {
  Object.defineProperty(b, "__esModule", {value:!0});
  g = function(b) {
    function c(c) {
      return b.call(this, c, f.Agent.correlation.AttachmentId.ATTACHMENT_AUTOSENSOR_ID, f.Agent.nativeAgent.correlation.AttachmentTarget.CurrentNode) || this;
    }
    u(c, b);
    c.prototype.fillAutoSensorAttachment = function(c, a, e) {
      if (!h.isUndefined(this.attachment)) {
        var b = [];
        h.isDefined(a) && !m.isAgentFile(a.fileName) && (e && f.Logger.debug("AutoSensor: adding top frame: [" + a.functionName + " " + a.typeName + " " + a.fileName + " " + a.lineNumber + "] -> " + a.methodId), b.push({methodId:a.methodId, lineNumber:a.lineNumber}));
        this.addAutoSensorFramesFromStackTrace(c, b, e);
        0 < b.length && this.attachment.setAutoSensorFrames(b);
      }
    };
    c.prototype.addAutoSensorFramesFromStackTrace = function(c, a, e) {
      for (var b = 0;b < c.length;b++) {
        var k = c[b], h = d.findFunctionName(k), n = k.getFileName() || "";
        if (!m.isAgentFile(n)) {
          var g = d.findTypeName(k), k = k.getLineNumber(), p = q.default.get(h, g, n);
          e && f.Logger.debug("AutoSensor: processing frame: [" + h + " " + g + " " + n + " " + k + "] -> " + p);
          a.push({methodId:p, lineNumber:k});
        }
      }
    };
    return c;
  }(k.default);
  b.AutoSensorAttachment = g;
});
z("src/lib/sensors/AutoSensor", "require exports src/lib/Agent src/lib/sensors/AutoSensorAttachment src/lib/Stack src/lib/SubPathContext src/lib/util/CoreUtil src/lib/sensors/SensorBase src/lib/Debug src/lib/RunTimeProperty src/lib/RunTimeProperty".split(" "), function(g, b, f, d, h, m, k, q, p, c, n) {
  function a(c) {
    k.isDefined(l) && l.addSample(a, c);
  }
  Object.defineProperty(b, "__esModule", {value:!0});
  var e = new n.NumberOption("AutoSensorStacktDepth", 300), l;
  b.addSample = a;
  b.addSampleAsyncHook = function(a) {
    k.isDefined(l) && l.addSample(a);
  };
  b.resetInstance = function() {
    l = void 0;
  };
  g = function(a) {
    function b(e, b, d) {
      e = a.call(this, e, b, d) || this;
      e.autoSensorAlwaysOn = new c.BooleanOption("AutoSensorAlwaysOn", !1);
      p.assert(void 0 === l);
      return l = e;
    }
    u(b, a);
    b.prototype.addSample = function(a, c) {
      if (this.active && this.enabled) {
        var b = this.getActivation();
        k.isUndefined(b) || !this.autoSensorAlwaysOn.value && !f.Agent.nativeAgent.checkAutoSensorInterval() || (a = h.getCallSites(e.value, a), 0 >= a.length ? this.isDebugEnabled && f.Logger.debug("AutoSensor: Failed to retrieve stack for " + this.getActivationInfoString(b)) : (c = k.isFunction(c) ? c() : c, this.isDebugEnabled && f.Logger.debug("AutoSensor: adding sample to " + this.getActivationInfoString(b) + ", topFrame: " + (c ? c.toString(!0) : "-")), (new d.AutoSensorAttachment(b)).fillAutoSensorAttachment(a, 
        c, this.isDebugEnabled)));
      }
    };
    b.prototype.getActivation = function() {
      var a = m.SubPathContext.getActiveContext();
      if (!k.isUndefined(a) && (a = a.currentActivation, !k.isUndefined(a) && !a.isExited)) {
        return a;
      }
    };
    b.prototype.getActivationInfoString = function(a) {
      return "[" + a.toString(!0) + " " + a.functionId.methodId + " " + a.functionId.fileName + "] on path " + a.spc.path.toString();
    };
    return b;
  }(q.SensorBase);
  b.default = g;
});
z("src/lib/CallbackWrappingHelper", "require exports src/lib/util/CoreUtil src/lib/util/ErrorUtil src/lib/util/InvocationUtil src/lib/FunctionId src/lib/transformer/TransformerBase src/lib/sensors/AutoSensor".split(" "), function(g, b, f, d, h, m, k, q) {
  Object.defineProperty(b, "__esModule", {value:!0});
  b.errorFromFirstArg = function() {
    return 1 <= arguments.length && f.isError(arguments[0]) ? arguments[0] : void 0;
  };
  g = function() {
    function b() {
    }
    b.wrapCallbackContextPassing = function(c) {
      return function() {
        var b = this;
        try {
          c.spc.activate();
        } catch (e) {
          d.logAgentException(e);
        }
        var a = h.safeInvoke(this, c.origCb, arguments);
        try {
          q.addSample(function() {
            return new m.FunctionId(c.origCb, b);
          }), c.spc.deactivate();
        } catch (e) {
          d.logAgentException(e);
        }
        return a.rethrow();
      };
    };
    b.wrapCallbackCreateActivation = function(c) {
      return function() {
        try {
          if (f.isDefined(c.virtualNodeActivation)) {
            var b = f.isFunction(c.errorExtractor) ? h.doInvoke(this, c.errorExtractor, arguments) : void 0;
            c.virtualNodeActivation.exitOrException(b);
          }
        } catch (l) {
          d.logAgentException(l);
        }
        var b = new m.FunctionId(c.origCb, this), a;
        if (f.isDefined(c.virtualNodeActivation) && !c.injectedCallback) {
          try {
            a = k.TransformerBase.selectMethodActivationContext(c.virtualNodeActivation.spc).createActivation(b, 1), a.spc.activate();
          } catch (l) {
            d.logAgentException(l);
          }
        }
        var e = h.safeInvoke(this, c.origCb, arguments);
        try {
          c.injectedCallback || q.addSample(b), f.isDefined(a) && (a.spc.deactivate(), a.exitOrException(e.exception)), f.isDefined(c.virtualNodeActivation) && c.virtualNodeActivation.spc.end();
        } catch (l) {
          d.logAgentException(l);
        }
        return e.rethrow();
      };
    };
    return b;
  }();
  b.CallbackWrappingHelper = g;
});
z("src/lib/AsyncTracker", ["require", "exports", "src/lib/Patch", "src/lib/util/CoreUtil"], function(g, b, f, d) {
  Object.defineProperty(b, "__esModule", {value:!0});
  g = function() {
    function b(b, d, f) {
      this.transformer = b;
      this.spc = d;
      this.descriptor = f;
      this.injectedCallback = !1;
    }
    Object.defineProperty(b.prototype, "hasCallback", {get:function() {
      return d.isDefined(this.origCb);
    }, enumerable:!0, configurable:!0});
    b.prototype.manipulateArguments = function(b) {
      var k = f.AsyncTrackingMode.getCallbackIndex(this.descriptor.asyncTrackingMode, b);
      if (0 > k) {
        return b;
      }
      k < b.length && d.isFunction(b[k]) ? this.origCb = b[k] : d.isDefined(this.transformer.injectionCallback) && f.AsyncTrackingMode.doInjectMissingCallback(this.descriptor.asyncTrackingMode) && (this.origCb = this.transformer.injectionCallback, this.injectedCallback = !0);
      if (d.isUndefined(this.origCb)) {
        return b;
      }
      var h = this.transformer.wrapCallback(this);
      if (this.injectedCallback) {
        for (var g = Array(k >= b.length ? k + 1 : b.length), c = 0, n = 0;n < g.length && !(n === k && (g[n++] = h, n >= g.length));++n) {
          g[n] = b.length > c ? b[c++] : void 0;
        }
        b = g;
      } else {
        b[k] = h;
      }
      return b;
    };
    b.prototype.manipulateReturnValue = function(b) {
      !b.didThrow && f.AsyncTrackingMode.isPromiseStyle(this.descriptor.asyncTrackingMode) && this.transformer.wrapReturnValue(this, b);
    };
    return b;
  }();
  b.default = g;
});
z("src/lib/transformer/ContextPassingTransformer", "require exports src/lib/util/CoreUtil src/lib/util/InvocationUtil src/lib/util/ErrorUtil src/lib/FunctionId src/lib/SubPathContext src/lib/AsyncTracker src/lib/transformer/AsyncTransformerBase src/lib/CallbackWrappingHelper src/lib/sensors/AutoSensor".split(" "), function(g, b, f, d, h, m, k, q, p, c, n) {
  Object.defineProperty(b, "__esModule", {value:!0});
  g = function(a) {
    function b(c) {
      return a.call(this, c, void 0) || this;
    }
    u(b, a);
    b.prototype.generateSubstitute = function(a) {
      var c = this;
      return function() {
        var b = this;
        if (!c.controlParams.active) {
          return d.doInvoke(this, a.origFn, arguments);
        }
        var e, l = arguments;
        try {
          var g = k.SubPathContext.getActiveContext();
          f.isDefined(g) && (e = new q.default(c, g, a), l = e.manipulateArguments(arguments), g.didInitiateAsyncOp = e.hasCallback);
        } catch (y) {
          h.logAgentException(y);
        }
        if (f.isUndefined(e)) {
          return d.doInvoke(this, a.origFn, arguments);
        }
        l = d.safeInvoke(this, a.origFn, l);
        try {
          n.addSample(function() {
            return new m.FunctionId(a, b);
          }), e.manipulateReturnValue(l);
        } catch (y) {
          h.logAgentException(y);
        }
        return l.rethrow();
      };
    };
    b.prototype.wrapCallback = function(a) {
      return c.CallbackWrappingHelper.wrapCallbackContextPassing(a);
    };
    b.prototype.wrapReturnValue = function() {
    };
    return b;
  }(p.AsyncTransformerBase);
  b.ContextPassingTransformer = g;
});
z("src/lib/AsyncVirtualNodeTracker", ["require", "exports", "src/lib/AsyncTracker"], function(g, b, f) {
  Object.defineProperty(b, "__esModule", {value:!0});
  g = function(b) {
    function d() {
      return null !== b && b.apply(this, arguments) || this;
    }
    u(d, b);
    return d;
  }(f.default);
  b.default = g;
});
z("src/lib/transformer/AsyncTimingTransformer", "require exports src/lib/util/CoreUtil src/lib/util/InvocationUtil src/lib/util/ErrorUtil src/lib/AsyncVirtualNodeTracker src/lib/transformer/AsyncTransformerBase src/lib/FunctionId src/lib/CallbackWrappingHelper src/lib/sensors/AutoSensor".split(" "), function(g, b, f, d, h, m, k, q, p, c) {
  Object.defineProperty(b, "__esModule", {value:!0});
  g = function(b) {
    function a() {
      return null !== b && b.apply(this, arguments) || this;
    }
    u(a, b);
    a.prototype.generateSubstitute = function(a) {
      var b = this;
      return function() {
        var e, l = arguments, k, n = new q.FunctionId(a, this);
        try {
          e = b.tryStartAsyncActivation(n), f.isDefined(e) && (k = new m.default(b, e.initiatorActivation.spc, a), k.virtualNodeActivation = e.vNodeActivation, l = k.manipulateArguments(arguments));
        } catch (r) {
          h.logAgentException(r);
        }
        if (f.isUndefined(e)) {
          return d.doInvoke(this, a.origFn, arguments);
        }
        l = d.safeInvoke(this, a.origFn, l);
        try {
          c.addSample(n), f.isDefined(k) && k.manipulateReturnValue(l), e.initiatorActivationDone(l.exception);
        } catch (r) {
          h.logAgentException(r);
        }
        return l.rethrow();
      };
    };
    a.prototype.wrapCallback = function(a) {
      return p.CallbackWrappingHelper.wrapCallbackCreateActivation(a);
    };
    a.prototype.wrapReturnValue = function() {
    };
    return a;
  }(k.AsyncTransformerBase);
  b.AsyncTimingTransformer = g;
});
z("src/lib/transformer/SyncTimingTransformer", "require exports src/lib/util/CoreUtil src/lib/util/InvocationUtil src/lib/util/ErrorUtil src/lib/SubPathContext src/lib/FunctionId src/lib/transformer/TransformerBase src/lib/sensors/AutoSensor".split(" "), function(g, b, f, d, h, m, k, q, p) {
  Object.defineProperty(b, "__esModule", {value:!0});
  g = function(c) {
    function b() {
      return null !== c && c.apply(this, arguments) || this;
    }
    u(b, c);
    b.prototype.generateSubstitute = function(a) {
      var c = this;
      return function() {
        var b, e = new k.FunctionId(a, this);
        if (c.controlParams.active) {
          try {
            b = c.tryCreateActivation(m.SubPathContext.getActiveContext(), e);
          } catch (w) {
            h.logAgentException(w);
          }
        }
        var n = d.safeInvoke(this, a.origFn, arguments);
        try {
          p.addSample(e), f.isDefined(b) && b.exitOrException(n.exception);
        } catch (w) {
          h.logAgentException(w);
        }
        return n.rethrow();
      };
    };
    return b;
  }(q.TransformerBase);
  b.SyncTimingTransformer = g;
});
z("src/lib/sensors/GenericSensors", "require exports src/lib/Agent src/lib/util/CoreUtil src/lib/sensors/SensorBase src/lib/transformer/ContextPassingTransformer src/lib/transformer/AsyncTimingTransformer src/lib/transformer/SyncTimingTransformer".split(" "), function(g, b, f, d, h, m, k, q) {
  Object.defineProperty(b, "__esModule", {value:!0});
  g = function(b) {
    function c() {
      return null !== b && b.apply(this, arguments) || this;
    }
    u(c, b);
    c.prototype.applyInstrumentation = function(c) {
      this.isDebugEnabled && f.Logger.debug(this.name + ": instrumenting module " + c.toString(!0));
      d.isUndefined(this.transformer) && (this.transformer = this.createTransformer());
      this.applyPatch(c, this.transformer);
    };
    return c;
  }(h.SensorBase);
  h = function(b) {
    function c() {
      return null !== b && b.apply(this, arguments) || this;
    }
    u(c, b);
    c.prototype.createTransformer = function() {
      return new m.ContextPassingTransformer(this);
    };
    return c;
  }(g);
  b.ContextPassingSensor = h;
  h = function(b) {
    function c() {
      return null !== b && b.apply(this, arguments) || this;
    }
    u(c, b);
    c.prototype.createTransformer = function() {
      return new k.AsyncTimingTransformer(this);
    };
    return c;
  }(g);
  b.AsyncTimingSensor = h;
  g = function(b) {
    function c() {
      return null !== b && b.apply(this, arguments) || this;
    }
    u(c, b);
    c.prototype.createTransformer = function() {
      return new q.SyncTimingTransformer(this);
    };
    return c;
  }(g);
  b.SyncTimingSensor = g;
});
z("src/lib/sensors/DisabledModulesSensor", "require exports src/lib/sensors/SensorBase src/lib/Agent src/lib/util/CoreUtil src/lib/Debug".split(" "), function(g, b, f, d, h, m) {
  function k() {
  }
  function q() {
    return "";
  }
  Object.defineProperty(b, "__esModule", {value:!0});
  var p = {newrelic:function(b) {
    process.env.NEW_RELIC_NO_CONFIG_FILE = 1;
    process.env.NEW_RELIC_ENABLED = 0;
    return b.moduleExports;
  }, appdynamics:function() {
    return {profile:k};
  }, longjohn:function() {
    return {format_stack_frame:q, format_stack:q, async_trace_limit:5, empty_frame:"---------------------------------------------"};
  }};
  g = function(b) {
    function c() {
      return null !== b && b.apply(this, arguments) || this;
    }
    u(c, b);
    c.prototype.applyInstrumentation = function(a) {
      m.assert(!a.isModuleAcquired, "disabled module got loaded before DisabledModuleSensor");
      this.isDebugEnabled && d.Logger.debug(this.name + ": inhibit " + a);
      var b = p[a.request];
      a.moduleExports = h.isDefined(b) ? b(a) : {};
    };
    return c;
  }(f.SensorBase);
  b.default = g;
});
z("src/lib/sensors/ModuleSubstitutionSensor", ["require", "exports", "src/lib/Agent", "src/lib/sensors/SensorBase", "src/lib/util/CoreUtil"], function(g, b, f, d, h) {
  function m(b) {
    b.gracefulify = m;
    return b;
  }
  Object.defineProperty(b, "__esModule", {value:!0});
  var k = {"graceful-fs":function() {
    var b = g("fs");
    return m(b);
  }};
  d = function(b) {
    function d() {
      return null !== b && b.apply(this, arguments) || this;
    }
    u(d, b);
    d.prototype.applyInstrumentation = function(b) {
      h.isDefined(k[b.request]) ? (this.isDebugEnabled && f.Logger.debug(this.name + ": substituting module " + b), b.moduleExports = k[b.request](b)) : f.Logger.warning("ModuleSubstitutionSensor: undefined substitution for module " + b.request);
    };
    return d;
  }(d.SensorBase);
  b.default = d;
});
z("src/lib/transformer/EventEmitterTransformerBase", "require exports semver src/lib/transformer/TransformerBase src/lib/Patch src/lib/util/CoreUtil src/lib/Embedder".split(" "), function(g, b, f, d, h, m, k) {
  function q(b, a, c) {
    function e() {
      b.removeListener(a, e.listener);
      d || (d = !0, c.apply(b, arguments));
    }
    var d = !1;
    e.listener = c;
    p.set(e, c);
    return e;
  }
  Object.defineProperty(b, "__esModule", {value:!0});
  var p = k.create("eventEmitter"), c = f.satisfies(process.version, ">=6.0.0");
  g = function(b) {
    function a(a, c) {
      a = b.call(this, a) || this;
      m.isDefined(c) && (m.isArray(c) ? a.types = c : a.types = [c]);
      return a;
    }
    u(a, b);
    a.prototype.applyTransformation = function(a) {
      h.substitute(new h.FunctionSpec("addListener", a), this.generateAddListenerSubstitute());
      a.module.on = a.module.addListener;
      h.substitute(new h.FunctionSpec("once", a), this.generateOnceSubstitute());
      c && (h.substitute(new h.FunctionSpec("prependListener", a), this.generateAddListenerSubstitute()), h.substitute(new h.FunctionSpec("prependOnceListener", a), this.generatePrependOnceSubstitute()));
      f.satisfies(process.version, "<7.0.0") && h.substitute(new h.FunctionSpec("listeners", a), this.generateListenersSubstitute());
    };
    a.getUnwrappedListener = function(a) {
      return p.get(a) || a;
    };
    a.prototype.generateAddListenerSubstitute = function() {
      var b = this;
      return function v() {
        if (b.checkArguments.apply(b, arguments)) {
          var c = arguments[1], e = b.getWrappedListener(this, arguments[0], c);
          if (m.isDefined(e) && e !== c) {
            return p.set(e, c), c = a.getUnwrappedListener(c), e.listener = c, arguments[1] = e, h.invokeResolvedOriginal(v, this, arguments);
          }
        }
        return h.invokeOriginal(v, this, arguments);
      };
    };
    a.prototype.generateOnceSubstitute = function() {
      var a = this;
      return function v() {
        return a.checkArguments.apply(a, arguments) && a.shallWrap(this, arguments[0]) ? (arguments[1] = q(this, arguments[0], arguments[1]), this.on.apply(this, arguments)) : h.invokeOriginal(v, this, arguments);
      };
    };
    a.prototype.generatePrependOnceSubstitute = function() {
      var a = this;
      return function v() {
        return a.checkArguments.apply(a, arguments) && a.shallWrap(this, arguments[0]) ? (arguments[1] = q(this, arguments[0], arguments[1]), this.prependListener.apply(this, arguments)) : h.invokeOriginal(v, this, arguments);
      };
    };
    a.prototype.generateListenersSubstitute = function() {
      return function l() {
        return h.invokeOriginal(l, this, arguments).map(a.getUnwrappedListener);
      };
    };
    a.prototype.checkArguments = function() {
      return 2 <= arguments.length && m.isFunction(arguments[1]) && (m.isUndefined(this.types) || -1 !== this.types.indexOf(arguments[0]));
    };
    return a;
  }(d.TransformerBase);
  b.EventEmitterTransformerBase = g;
});
z("src/lib/util/EventUtil", ["require", "exports", "events", "src/lib/util/CoreUtil"], function(g, b, f, d) {
  function h(b, k) {
    return d.isFunction(b.listenerCount) ? b.listenerCount(k) : f.EventEmitter.listenerCount(b, k);
  }
  Object.defineProperty(b, "__esModule", {value:!0});
  b.emitterListenerCount = h;
  b.reEmitErrorIfNeeded = function(b, d) {
    1 >= h(b, "error") && (b.removeAllListeners("error"), b.emit("error", d));
  };
});
z("src/lib/util/UniqueId", ["require", "exports"], function(g, b) {
  Object.defineProperty(b, "__esModule", {value:!0});
  g = function() {
    function b() {
      this.id = b.nextId++;
      b.nextId >= Math.pow(2, 16) && (b.nextId = 0);
    }
    b.prototype.toString = function() {
      return "[#" + ("000" + this.id.toString(16)).substr(-4) + "]";
    };
    return b;
  }();
  g.nextId = 0;
  b.UniqueId = g;
});
z("src/lib/sensors/SensorConstants", ["require", "exports"], function(g, b) {
  Object.defineProperty(b, "__esModule", {value:!0});
  b.cHttpTaggingHeader = "x-dynatrace";
});
z("src/lib/sensors/UemMobileWebrequestAttachment", ["require", "exports", "src/lib/sensors/AttachmentBase", "src/lib/Agent"], function(g, b, f, d) {
  Object.defineProperty(b, "__esModule", {value:!0});
  g = function(b) {
    function f(f) {
      return b.call(this, f, d.Agent.correlation.AttachmentId.ATTACHMENT_UEM_MOBILE_WEBREQUEST_ID) || this;
    }
    u(f, b);
    f.prototype.fillEntryData = function(b) {
      this.attachment.setAttachmentFieldString(d.Agent.correlation.AttachmentFieldId.UEM_MOBILE_WEB_REQUEST_MOBILE_TAG, b);
    };
    return f;
  }(f.default);
  b.UemMobileWebrequestAttachment = g;
});
z("src/lib/util/HttpUtil", ["require", "exports", "http", "semver", "src/lib/util/CoreUtil"], function(g, b, f, d, h) {
  Object.defineProperty(b, "__esModule", {value:!0});
  b.outHeadersKey = function() {
    if (d.satisfies(process.version, ">=8.0.0")) {
      var b = new f.OutgoingMessage;
      return Object.getOwnPropertySymbols(b).find(function(b) {
        return -1 !== b.toString().indexOf("outHeadersKey");
      });
    }
  }();
  var m = process.binding("pipe_wrap").Pipe;
  b.getRemoteAddress = function(b) {
    return h.hasValue(b.socket) ? b.socket._handle instanceof m ? "127.0.0.1" : b.socket.remoteAddress || "0.0.0.0" : "0.0.0.0";
  };
});
z("src/lib/sensors/WebRequestAttachment", "require exports url src/lib/Agent src/lib/Debug src/lib/Configuration src/lib/util/CoreUtil src/lib/util/ErrorUtil src/lib/util/HttpUtil src/lib/sensors/SensorConstants src/lib/sensors/AttachmentBase".split(" "), function(g, b, f, d, h, m, k, q, p, c, n) {
  function a(a) {
    var b;
    try {
      k.isFunction(a.address) && (b = a.address());
    } catch (r) {
      q.logAgentException(r);
    }
    if (k.isValueless(b) || !k.isString(b.address)) {
      return "localhost";
    }
    a = "IPv6" === b.family ? "[" + b.address + "]" : b.address;
    k.isNumber(b.port) && (a += ":" + b.port);
    return a;
  }
  function e(a) {
    var b = a.length;
    2 <= b && '"' === a[0] && '"' === a[b - 1] && (a = a.substr(1, b - 2));
    if ("_" === a[0] || "unknown" === a) {
      return "";
    }
    if ("[" === a[0]) {
      return b = a.indexOf("]"), -1 !== b ? a.substring(1, b) : a.substr(1);
    }
    b = a.indexOf(":");
    return -1 !== b ? -1 !== a.indexOf(":", b + 1) ? a : a.substr(0, b) : a;
  }
  function l(a) {
    var b = a.headers, c;
    c = k.hasProperty(d.Agent.configuration, "uemConfig", "globalUemConfiguration", "clientIPDetectionHeaders") ? d.Agent.configuration.uemConfig.globalUemConfiguration.clientIPDetectionHeaders : [];
    for (var f = 0;f < c.length;f++) {
      var l = b[c[f].toLowerCase()];
      if (k.isString(l)) {
        a = l.indexOf(",");
        l = (-1 === a ? l : l.substring(0, a)).toLowerCase();
        a = l.indexOf("for=");
        if (-1 === a) {
          return -1 !== l.indexOf("=") ? "" : e(l);
        }
        b = l.indexOf(";");
        l = -1 === b ? l.substr(a + 4) : l.substring(a + 4, b);
        return e(l);
      }
    }
    return p.getRemoteAddress(a);
  }
  function v(a) {
    var b;
    b = k.hasProperty(d.Agent.configuration, "uemConfig", "globalUemConfiguration", "hostDetectionHeaders") ? d.Agent.configuration.uemConfig.globalUemConfiguration.hostDetectionHeaders : [];
    for (var c = 0;c < b.length;c++) {
      var e = a[b[c].toLowerCase()];
      if (k.isString(e)) {
        return a = e.indexOf(","), -1 === a ? e : e.substring(0, a);
      }
    }
    return a.host || "";
  }
  function t(a) {
    h.assert(k.isDefined(a));
    for (var b = a.length / 2 * 4, c = 0;c < a.length;c++) {
      b += a[c].length;
    }
    return b;
  }
  Object.defineProperty(b, "__esModule", {value:!0});
  g = function(b) {
    function e(a, c) {
      a = b.call(this, a, d.Agent.correlation.AttachmentId.ATTACHMENT_WEBREQUEST_ID) || this;
      a.sensorProperties = c;
      return a;
    }
    u(e, b);
    e.prototype.fillEntryData = function(b, e, d) {
      var h = this;
      this.setMultipleFields(function(g) {
        var n = e.headers || {};
        g.string(g.id.WEBREQUEST_CLIENT_IP, l(e));
        k.isDefined(e.method) && g.string(g.id.WEBREQUEST_REQUEST_METHOD, e.method);
        var q = f.parse(e.url || "");
        g.string(g.id.WEBREQUEST_URI, q.pathname || "");
        g.string(g.id.WEBREQUEST_QUERY_STRING, q.query || "");
        g.string(g.id.WEBREQUEST_HTTP_TAG, d || n[c.cHttpTaggingHeader] || "");
        g.string(g.id.WEBREQUEST_REQUESTED_HOSTNAME, v(n));
        k.isDefined(e.rawHeaders) && g.numeric(g.id.WEBREQUEST_REQUEST_HEADER_SIZE, t(e.rawHeaders));
        h.fillRequestHeaders(g, n);
        g.string(g.id.WEBREQUEST_APPLICATION_ID, m.Configuration.appName);
        g.string(g.id.WEBREQUEST_SERVERNAME, a(b));
        g.string(g.id.WEBREQUEST_CONTEXTROOT, "/");
        n = n["x-forwarded-for"];
        k.isDefined(n) && g.string(g.id.WEBREQUEST_FORWARDED_FOR, n);
        g.string(g.id.WEBREQUEST_REMOTE_ADRESS, p.getRemoteAddress(e));
      });
    };
    e.prototype.fillExitData = function(a) {
      var b = this;
      this.setMultipleFields(function(c) {
        c.numeric(c.id.WEBREQUEST_RESPONSE_STATUS, +a.statusCode);
        a.headersSent && k.isString(a._header) && (c.numeric(c.id.WEBREQUEST_RESPONSE_HEADER_SIZE, a._header.length), b.fillResponseHeaders(c, a._header));
      });
    };
    e.prototype.fillRequestHeaders = function(a, b) {
      var c = a.id.WEBREQUEST_REQUEST_HEADERS, e = {key:"", value:""}, d;
      for (d in b) {
        if (this.sensorProperties.captureAllRequestHeaders || -1 !== this.sensorProperties.requestHeadersToCapture.indexOf(d)) {
          e.key = d;
          var f = b[d];
          if (k.isString(f)) {
            e.value = f, a.keyValue(c, e);
          } else {
            for (var l = 0;l < f.length;l++) {
              e.value = f[l], a.keyValue(c, e);
            }
          }
        }
      }
    };
    e.prototype.fillResponseHeaders = function(a, b) {
      b = b.split("\r\n");
      for (var c = b.length, e = 0;e < c;e++) {
        if (k.strStartsWith(b[e], "HTTP/")) {
          e++;
          break;
        }
      }
      for (var d = this.sensorProperties.captureAllResponseHeaders, f = this.sensorProperties.responseHeadersToCapture, l = a.id.WEBREQUEST_RESPONSE_HEADERS, h = {key:"", value:""};e < c;e++) {
        var g = b[e], n = g.indexOf(":");
        if (-1 !== n) {
          var q = g.substr(0, n).toLowerCase();
          if (d || -1 !== f.indexOf(q)) {
            h.key = q, h.value = g.substr(n + 1).trim(), a.keyValue(l, h);
          }
        }
      }
    };
    return e;
  }(n.default);
  b.WebRequestAttachment = g;
});
z("src/lib/sensors/UemSensor", "require exports url src/lib/Agent src/lib/Configuration src/lib/RunTimeProperty src/lib/util/CoreUtil src/lib/util/ErrorUtil src/lib/util/HttpUtil".split(" "), function(g, b, f, d, h, m, k, q, p) {
  Object.defineProperty(b, "__esModule", {value:!0});
  var c = {address:"0.0.0.0", port:80, family:"IPv4"};
  g = function() {
    function a() {
    }
    a.isEnabled = function() {
      return !a.uemDisabled.value;
    };
    a.createContext = function(a, b) {
      return new n(a, b);
    };
    return a;
  }();
  g.uemDisabled = new m.BooleanProperty("UemSensorDisabled", !1);
  b.UemSensor = g;
  var n = function() {
    function a(b, c) {
      this.debug = (new m.BooleanProperty("UemSensorLogging", !1)).value;
      this.dataCached = !1;
      var e = f.parse(b.url ? b.url : ""), l = e.pathname ? e.pathname : "", k = a.getAddress(b), e = {scheme:"http", method:b.method || "", url:l, query:e.query || "", clientIP:p.getRemoteAddress(b), applicationName:h.Configuration.appName, applicationIP:k.address || "", applicationPort:k.port ? k.port.toString() : ""};
      this.uemSensorContext = d.Agent.uemSensor.createUemSensorContext(e, b.headers, c);
    }
    a.prototype.isUemWebRequest = function() {
      return k.isDefined(this.uemSensorContext) ? this.uemSensorContext.isUemWebRequest() : !1;
    };
    a.prototype.isInjecting = function() {
      return k.isDefined(this.uemSensorContext) ? this.uemSensorContext.isInjecting() : !1;
    };
    a.prototype.getServerId = function() {
      return k.isDefined(this.uemSensorContext) ? this.uemSensorContext.getServerId() : 0;
    };
    a.prototype.getMobileTag = function() {
      if (k.isDefined(this.uemSensorContext)) {
        return this.uemSensorContext.getMobileTag();
      }
    };
    a.prototype.onWebRequest = function(b, c, f, k) {
      f = this.handleRequest(f, k);
      this.debug && d.Logger.debug("UEM: " + a.getRequestTypeStr(f) + ": " + b.url);
      0 === f ? this.handleRegularRequest(b) : 2 === f || 3 === f ? this.handleBeaconRequest(f, b, c) : this.handleSpecialRequest(f, c);
    };
    a.prototype.onStoreHeaders = function(b, c) {
      if (!(k.isUndefined(c) || 2 > c.length)) {
        var e, f;
        p.outHeadersKey && b[p.outHeadersKey] === c[1] ? (f = a.getHeadersFromServerRespose(c[1]), e = !0) : (f = c[1], e = !1);
        k.isUndefined(f) && (f = k.createPropertyContainer());
        var l = this.responseStarted(f);
        this.debug && (d.Logger.debug("UEM: " + c[0]), this.logHeaders("UEM: Headers before modification:", f));
        var h = this.getChangedResponseHeaders();
        this.debug && this.logHeaders("UEM: Changed responseHeaders:", h);
        for (var g in h) {
          var n = this.lookupKey(f, g);
          if (k.isDefined(n)) {
            if (a.shouldAppendHeader(n)) {
              var q = [], q = q.concat(f[n], h[g]);
              a.setHeader(b, f, n, q, e);
            } else {
              a.setHeader(b, f, n, h[g], e);
            }
          } else {
            a.setHeader(b, f, g, h[g], e);
          }
        }
        l && (l = this.lookupKey(f, "content-length"), k.isDefined(l) && a.removeHeader(b, f, l, e), l = this.lookupKey(f, "transfer-encoding") || "transfer-encoding", a.setHeader(b, f, l, "chunked", e));
        this.debug && this.logHeaders("UEM: Headers after modification:", e ? a.getHeadersFromServerRespose(c[1]) : f);
      }
    };
    a.prototype.onResponseWrite = function(b) {
      if (!(k.isUndefined(b) || 1 > b.length) && this.isInjecting() && (b = a.getBuffer(b[0], 2 <= b.length ? b[1] : void 0), !k.isUndefined(b))) {
        var c = this.injectJsAgentTag(b, !1), e = k.isDefined(c), f = e ? c.length : 0;
        this.debug && d.Logger.debug("UEM: Agent was " + (0 < f ? "" : "NOT ") + "injected into fragment" + (" (fragment length before: " + b.length + ", new fragment" + (e ? " length: " + f : ": <undefined>") + ")"));
        this.dataCached = f < b.length;
        return c;
      }
    };
    a.prototype.onResponseEnd = function(b, c) {
      if (this.isInjecting() && (this.dataCached || k.isDefined(b))) {
        this.dataCached = !1;
        b = this.injectJsAgentTag(a.getBuffer(b, c), !0);
        if (this.debug) {
          var e = (c = k.isDefined(b)) ? b.length : 0;
          d.Logger.debug("UEM: Processing remaining fragment (fragment" + (c ? " length: " + e : ": <undefined>") + ")");
        }
        return b;
      }
    };
    a.prototype.handleRequest = function(a, b) {
      return k.isDefined(this.uemSensorContext) ? this.uemSensorContext.handleRequest(a, b) : 0;
    };
    a.prototype.responseStarted = function(a) {
      return k.isDefined(this.uemSensorContext) ? this.uemSensorContext.responseStarted(a) : !1;
    };
    a.prototype.getChangedRequestHeaders = function() {
      if (k.isDefined(this.uemSensorContext)) {
        return this.uemSensorContext.getChangedRequestHeaders();
      }
    };
    a.prototype.getChangedResponseHeaders = function() {
      return k.isDefined(this.uemSensorContext) ? this.uemSensorContext.getChangedResponseHeaders() : {};
    };
    a.prototype.injectJsAgentTag = function(a, b) {
      if (k.isDefined(this.uemSensorContext)) {
        return this.uemSensorContext.injectJsAgentTag(a, b);
      }
    };
    a.prototype.updateRequestBody = function(a) {
      return k.isDefined(this.uemSensorContext) ? this.uemSensorContext.updateRequestBody(a) : !1;
    };
    a.prototype.getResponseStatus = function() {
      return k.isDefined(this.uemSensorContext) ? this.uemSensorContext.getResponseStatus() : 200;
    };
    a.prototype.getResponseBody = function() {
      if (k.isDefined(this.uemSensorContext)) {
        return this.uemSensorContext.getResponseBody();
      }
    };
    a.getAddress = function(a) {
      var b;
      try {
        a.socket && k.isFunction(a.socket.address) && (b = a.socket.address());
      } catch (v) {
      }
      k.isValueless(b) && (b = c);
      return b;
    };
    a.getBuffer = function(a, b) {
      var c;
      k.isString(a) ? c = new Buffer(a, b || "utf8") : a instanceof Buffer && (c = a);
      return k.isDefined(c) && 0 < c.length ? c : void 0;
    };
    a.prototype.lookupKey = function(a, b) {
      b = b.toLowerCase();
      for (var c in a) {
        if (c.toLowerCase() === b) {
          return c;
        }
      }
    };
    a.shouldAppendHeader = function(a) {
      return "set-cookie" === a.toLowerCase() ? !0 : !1;
    };
    a.prototype.logHeaders = function(a, b) {
      d.Logger.debug(a);
      for (var c in b) {
        if (a = b[c], Array.isArray(a)) {
          for (var e = 0;e < a.length;e++) {
            d.Logger.debug("  " + c + "=" + a[e]);
          }
        } else {
          d.Logger.debug("  " + c + "=" + a);
        }
      }
    };
    a.prototype.handleRegularRequest = function(a) {
      var b = this.getChangedRequestHeaders();
      if (k.isDefined(b)) {
        a.headers = {};
        for (var c in b) {
          a.headers[c.toLowerCase()] = b[c];
        }
        this.debug && this.logHeaders("UEM: Changed requestHeaders:", a.headers);
      }
    };
    a.prototype.handleSpecialRequest = function(a, b) {
      var c = this.getChangedResponseHeaders(), e = this.getResponseBody(), f = this.getResponseStatus(), l = 0;
      k.isUndefined(e) ? d.Logger.warning("UemSensor: failed to get response body for special request (e.g. no jsAgent available)") : l = e.length;
      this.debug && (d.Logger.debug("UEM: Response status code: " + f), this.logHeaders("UEM: Response headers:", c), d.Logger.debug("UEM: Response body size: " + l), 0 < l && 2 === a && d.Logger.debug("UEM: Beacon signal: " + e.toString()));
      k.isUndefined(this.lookupKey(c, "content-length")) && (c["content-length"] = l.toString());
      b.writeHead(f, c);
      0 < l ? b.end(e) : b.end();
    };
    a.prototype.handleBeaconRequest = function(a, b, c) {
      this.debug && d.Logger.debug("UEM: Processing BEACON request");
      switch(b.method) {
        case "OPTIONS":
        case "GET":
          this.updateRequestBody(new Buffer(0)) && this.handleSpecialRequest(a, c);
          break;
        case "POST":
          var e = this, f = 0, l = new Buffer(65536);
          b.on("data", function(a) {
            try {
              f < l.length && (k.isString(a) ? f += l.write(a, f) : Buffer.isBuffer(a) && (f += a.copy(l, f)));
            } catch (y) {
              q.logAgentException(y);
            }
          });
          b.on("end", function() {
            try {
              e.updateRequestBody(l.slice(0, f)) && e.handleSpecialRequest(a, c);
            } catch (r) {
              q.logAgentException(r);
            }
          });
          break;
        default:
          d.Logger.warning("UemSensor: Unexpected method on processing BEACON signal: " + b.method), this.handleSpecialRequest(a, c);
      }
    };
    a.getRequestTypeStr = function(a) {
      switch(a) {
        case 0:
          return "SpecialRequestType.NONE";
        case 1:
          return "SpecialRequestType.AGENT";
        case 2:
          return "SpecialRequestType.BEACON";
        case 3:
          return "SpecialRequestType.BEACON_CORS";
        case 4:
          return "SpecialRequestType.HEALTHCHECK";
        case 5:
          return "SpecialRequestType.BANDWIDTH";
        case 6:
          return "SpecialRequestType.MOBILE";
        case 7:
          return "SpecialRequestType.DEBUG_INFO";
        case 8:
          return "SpecialRequestType.DEBUG_LOG";
        case 9:
          return "SpecialRequestType.TROUBLESHOOT";
        case 10:
          return "SpecialRequestType.NOOP";
      }
      return "<unknown>";
    };
    a.setHeader = function(a, b, c, d, f) {
      f ? a.setHeader(c, d) : b[c] = d;
    };
    a.removeHeader = function(a, b, c, d) {
      d ? a.removeHeader(c) : delete b[c];
    };
    a.getHeadersFromServerRespose = function(a) {
      var b = k.createPropertyContainer(), c;
      for (c in a) {
        var e = a[c];
        b[e[0]] = e[1];
      }
      return b;
    };
    return a;
  }();
  b.UemSensorContext = n;
});
z("src/lib/sensors/WebRequestSensor", "require exports src/lib/Agent src/lib/sensors/SensorBase src/lib/transformer/EventEmitterTransformerBase src/lib/Patch src/lib/SubPathContext src/lib/FunctionId src/lib/Debug src/lib/util/CoreUtil src/lib/util/ErrorUtil src/lib/util/EventUtil src/lib/util/InvocationUtil src/lib/util/UniqueId src/lib/sensors/SensorConstants src/lib/sensors/UemMobileWebrequestAttachment src/lib/sensors/WebRequestAttachment src/lib/sensors/WebRequestSensorProperties src/lib/sensors/ExceptionAttachment src/lib/sensors/UemSensor src/lib/Embedder src/lib/sensors/AutoSensor".split(" "), 
function(g, b, f, d, h, m, k, q, p, c, n, a, e, l, v, t, w, x, r, y, C, A) {
  function B(a) {
    var b = a.isDebugEnabled;
    if (c.isDefined(a.vNodeActivation)) {
      try {
        b && f.Logger.debug(a + ": _endAsyncExeNode(), status: " + a.res.statusCode), a.fillAttachmentExitData(), a.vNodeActivation.exit(), a.vNodeActivation.spc.end(), a.vNodeActivation = void 0;
      } catch (M) {
        n.logAgentException(M);
      } finally {
        D.clear(a.res);
      }
    } else {
      b && f.Logger.debug(a + ": _endAsyncExeNode() on closed vNode");
    }
  }
  Object.defineProperty(b, "__esModule", {value:!0});
  (function(a) {
    a.isMonitored = function(a) {
      return D.hasData(a);
    };
    a.attachError = function(a, b) {
      (a = D.get(a)) && a.attachError(b);
    };
  })(b.WebRequestSensorApi || (b.WebRequestSensorApi = {}));
  g = function(a) {
    function b(b, c, e, d) {
      b = a.call(this, b, c, e, d) || this;
      b.properties = new x.WebRequestSensorProperties(c);
      return b;
    }
    u(b, a);
    b.prototype.applyInstrumentation = function(a) {
      this.transformRegisterRequest(a);
      "http" === a.request && (this.transformResponseStoreHeader(a), this.transformResponseWrite(a), this.transformResponseEnd(a));
    };
    b.prototype.updateState = function(b) {
      a.prototype.updateState.call(this, b);
      this.properties.update(b);
    };
    b.prototype.transformRegisterRequest = function(a) {
      a = new m.ModuleSpec("Server", a.moduleExports.Server.prototype);
      (new L(this)).applyTransformation(a);
    };
    b.prototype.transformResponseStoreHeader = function(a) {
      a = new m.FunctionSpec("_storeHeader", "ServerResponse", a.moduleExports.ServerResponse.prototype);
      var b = new E(this);
      a = m.applyToSingle(a, b);
      c.isUndefined(a) && (f.Logger.warning("Failed to patch http.ServerResponse._storeHeader"), p.fail());
    };
    b.prototype.transformResponseWrite = function(a) {
      a = new m.FunctionSpec("write", "ServerResponse", a.moduleExports.ServerResponse.prototype);
      var b = new I(this);
      a = m.applyToSingle(a, b);
      c.isUndefined(a) && (f.Logger.warning("Failed to patch http.ServerResponse.write"), p.fail());
    };
    b.prototype.transformResponseEnd = function(a) {
      a = new m.FunctionSpec("end", "ServerResponse", a.moduleExports.ServerResponse.prototype);
      var b = new F(this);
      a = m.applyToSingle(a, b);
      c.isUndefined(a) && (f.Logger.warning("Failed to patch http.ServerResponse.end"), p.fail());
    };
    return b;
  }(d.SensorBase);
  b.WebRequestSensor = g;
  var D = C.create("serverResponse"), J = function() {
    function a(a, b, c, e, d) {
      this.server = a;
      this.req = b;
      this.res = c;
      this.sensor = e;
      this.uemMobileTag = d;
      this.errorCnt = 0;
      this.id = new l.UniqueId;
      this.isResponseEnd = !1;
    }
    a.prototype.createAttachments = function(a) {
      this.webRequestAttachment = new w.WebRequestAttachment(a, this.sensor.properties);
      if (this.webRequestAttachment.valid) {
        try {
          this.webRequestAttachment.fillEntryData(this.server, this.req, this.uemMobileTag);
        } catch (M) {
          n.logAgentException(M);
        }
      } else {
        this.isDebugEnabled && f.Logger.debug(this + ": WebRequestAttachment is not valid");
      }
      if (c.isDefined(this.uemMobileTag)) {
        if (this.uemMobileWebrequestAttachment = new t.UemMobileWebrequestAttachment(a), this.uemMobileWebrequestAttachment.valid) {
          try {
            this.uemMobileWebrequestAttachment.fillEntryData(this.uemMobileTag);
          } catch (M) {
            n.logAgentException(M);
          }
        } else {
          this.isDebugEnabled && f.Logger.debug(this + ": UemMobileWebrequestAttachment is not valid");
        }
      }
    };
    a.prototype.attachError = function(a) {
      var b = this.isDebugEnabled;
      0 === this.errorCnt ? c.isDefined(this.vNodeActivation) ? (this.errorCnt++, (new r.ExceptionAttachment(this.vNodeActivation)).fillExceptionData(a), b && f.Logger.debug(this + ": attached error " + n.verboseExceptionObject(a))) : b && f.Logger.debug(this + ": rejecting error object - vNode closed") : b && f.Logger.debug(this + ": rejecting error object - already attached " + this.errorCnt);
    };
    a.prototype.fillAttachmentExitData = function() {
      p.assert(c.isDefined(this.webRequestAttachment));
      if (c.isDefined(this.webRequestAttachment) && this.webRequestAttachment.valid) {
        try {
          this.webRequestAttachment.fillExitData(this.res);
        } catch (G) {
          n.logAgentException(G);
        }
      } else {
        this.isDebugEnabled && f.Logger.debug(this + ": no valid WebRequestAttachment in fillAttachmentExitData()");
      }
    };
    Object.defineProperty(a.prototype, "isDebugEnabled", {get:function() {
      return this.sensor.isDebugEnabled;
    }, enumerable:!0, configurable:!0});
    a.prototype.toString = function() {
      return "WebRequest " + this.id;
    };
    return a;
  }(), H = !1, L = function(b) {
    function d(a) {
      var c = b.call(this, a, "request") || this;
      c.sensor = a;
      return c;
    }
    u(d, b);
    d.prototype.shallWrap = function() {
      return !0;
    };
    d.prototype.getWrappedListener = function(b, l, g) {
      var p = this;
      p.controlParams.isDebugEnabled && f.Logger.debug("WebRequest: getWrappedListener cnt: " + a.emitterListenerCount(b, l));
      var m = h.EventEmitterTransformerBase.getUnwrappedListener(g);
      return function(a, b) {
        var l = p.controlParams.isDebugEnabled;
        l && f.Logger.debug("WebRequest: Handler enter: " + a.method + ", " + a.url);
        if (!p.controlParams.active) {
          return l && f.Logger.debug("WebRequest: Handler exit - inactive"), e.doInvoke(this, g, arguments);
        }
        var h = new q.FunctionId(m, this);
        if (D.hasData(b)) {
          var r = D.get(b);
          l && f.Logger.debug(r + ": Handler exit: already patched, currSpc: " + k.SubPathContext.getActiveContext());
          if (c.isUndefined(r.vNodeActivation)) {
            return l && f.Logger.debug(r + ": Handler exit - no vNodeActivation"), e.doInvoke(this, g, arguments);
          }
          var t = void 0;
          try {
            var C = r.vNodeActivation.spc.spawnSubPath(), t = new k.MethodActivation(C, h, !0, 1);
            C.activate();
          } catch (K) {
            n.logAgentException(K);
          }
          var x = e.safeInvoke(this, g, arguments);
          try {
            g === m && A.addSample(h), c.isDefined(t) && (t.spc.deactivate(), t.exitOrException(x.exception));
          } catch (K) {
            n.logAgentException(K);
          }
          l && f.Logger.debug(r + ": Handler exit didThrow: " + (x.didThrow ? n.verboseExceptionObject(x.exception) : "-"));
          return x.rethrow();
        }
        var w, C = !1;
        try {
          var B = void 0, E = c.isDefined(a.headers) ? a.headers[v.cHttpTaggingHeader] : void 0;
          c.isString(E) && (B = f.Agent.correlation.deserializeLinkFromString(E));
          var F = 0, L = void 0, G;
          if (G = y.UemSensor.isEnabled()) {
            var I = a;
            c.isBoolean(I.isSpdy) && I.isSpdy ? (H || (f.Logger.info("Disable UEM on SPDY requests"), H = !0), G = !1) : G = !0;
          }
          G && (w = y.UemSensor.createContext(a, B), C = w.isUemWebRequest(), F = w.getServerId(), L = w.getMobileTag());
          r = new J(this, a, b, p.sensor, L);
          C ? c.isDefined(B) && B.purge() : (t = p.tryStartIncomingAsyncSubPath(h, f.Agent.correlation.MethodCategory.WebRequest, B, r, void 0, F), c.isDefined(t) ? (l && f.Logger.debug(r + ": Handler virt: " + t.vNodeActivation.spc + ", init: " + t.initiatorActivation.spc + ", tag: " + E + ", " + r.webRequestAttachment), r.vNodeActivation = t.vNodeActivation, D.set(b, r), a.on("error", d.getRequestErrorListener(r)), b.on("error", d.responseErrorListener), b.on("close", d.responseCloseListener)) : 
          l && f.Logger.debug(r + ": Handler failed to create activation, tag: " + E));
          c.isDefined(w) && (r.uemSensorContext = w, x = f.Agent.correlation.cInvalidPath, w = 0, !C && c.isDefined(t) && (x = t.vNodeActivation.spc.path, w = t.vNodeActivation.serialNo), r.uemSensorContext.onWebRequest(a, b, x, w));
        } catch (K) {
          n.logAgentException(K);
        }
        if (!C) {
          x = e.safeInvoke(this, g, arguments);
          try {
            g === m && A.addSample(h), c.isDefined(t) && t.initiatorActivationDone(x.exception);
          } catch (K) {
            n.logAgentException(K);
          }
          l && f.Logger.debug("WebRequest: Handler exit didThrow: " + (x.didThrow ? n.verboseExceptionObject(x.exception) : "-"));
          return x.rethrow();
        }
      };
    };
    d.getRequestErrorListener = function(a) {
      return function(b) {
        d.handleErrorEvent(this, a, b);
      };
    };
    d.responseErrorListener = function(a) {
      d.handleErrorEvent(this, D.get(this), a);
    };
    d.handleErrorEvent = function(b, e, d) {
      if (c.isDefined(e)) {
        try {
          e.attachError(d);
        } catch (N) {
          n.logAgentException(N);
        }
      } else {
        f.Logger.info("WebRequest: unmonitored handleErrorEvent(): " + n.verboseExceptionObject(d));
      }
      a.reEmitErrorIfNeeded(b, d);
    };
    d.responseCloseListener = function() {
      var a = D.get(this);
      c.isDefined(a) ? (a.isDebugEnabled && f.Logger.debug(a + ": responseClose"), B(a)) : f.Logger.info("WebRequest: unmonitored responseClose");
    };
    return d;
  }(h.EventEmitterTransformerBase), F = function() {
    function a(a) {
      this.controlParams = a;
    }
    a.prototype.generateSubstitute = function(a) {
      var b = this;
      return function(d, l, k) {
        var h = this, g = b.controlParams.isDebugEnabled, p = D.get(this);
        if (c.isUndefined(p)) {
          return g && f.Logger.debug("WebRequest: unmonitored end()"), e.doInvoke(this, a.origFn, arguments);
        }
        g && f.Logger.debug(p + ": end() argLength: " + arguments.length);
        var m = arguments;
        try {
          if (c.isDefined(p.uemSensorContext)) {
            p.isResponseEnd = !0;
            this.headersSent || this.finished || this.writeHead(this.statusCode);
            c.isFunction(d) ? (k = d, d = void 0) : c.isFunction(l) && (k = l, l = void 0);
            var r = p.uemSensorContext.onResponseEnd(d, l);
            c.isDefined(r) && (c.isDefined(d) ? m[0] = r : m = [r, k]);
          }
        } catch (R) {
          n.logAgentException(R);
        }
        m = e.safeInvoke(this, a.origFn, m);
        try {
          A.addSample(function() {
            return new q.FunctionId(a, h);
          });
        } catch (R) {
          n.logAgentException(R);
        }
        B(p);
        g && f.Logger.debug(p + ": end() didThrow: " + (m.didThrow ? n.verboseExceptionObject(m.exception) : "-"));
        return m.rethrow();
      };
    };
    return a;
  }(), E = function() {
    function a(a) {
      this.controlParams = a;
    }
    a.prototype.generateSubstitute = function(a) {
      var b = this;
      return function() {
        var d = this, l = b.controlParams.isDebugEnabled, k = D.get(this);
        if (c.isUndefined(k)) {
          return l && f.Logger.debug("WebRequest: unmonitored storeHeader()"), e.doInvoke(this, a.origFn, arguments);
        }
        l && f.Logger.debug(k + ": storeHeader() argLength: " + arguments.length);
        try {
          if (A.addSample(function() {
            return new q.FunctionId(a, d);
          }), c.isDefined(k.uemSensorContext)) {
            k.uemSensorContext.onStoreHeaders(this, arguments);
          }
        } catch (O) {
          n.logAgentException(O);
        }
        var h = e.safeInvoke(this, a.origFn, arguments);
        l && f.Logger.debug(k + ": storeHeader() didThrow: " + (h.didThrow ? n.verboseExceptionObject(h.exception) : "-"));
        return h.rethrow();
      };
    };
    return a;
  }(), I = function() {
    function a(a) {
      this.controlParams = a;
    }
    a.prototype.generateSubstitute = function(a) {
      var b = this;
      return function() {
        var d = b.controlParams.isDebugEnabled, l = D.get(this);
        if (c.isUndefined(l)) {
          return d && f.Logger.debug("WebRequest: unmonitored write()"), e.doInvoke(this, a.origFn, arguments);
        }
        d && f.Logger.debug(l + ": write() argLength: " + arguments.length);
        if (c.isDefined(l.uemSensorContext) && !l.isResponseEnd) {
          try {
            this.headersSent || this.finished || this.writeHead(this.statusCode);
            var k = l.uemSensorContext.onResponseWrite(arguments);
            c.isDefined(k) && (arguments[0] = k);
          } catch (S) {
            n.logAgentException(S);
          }
        }
        k = e.safeInvoke(this, a.origFn, arguments);
        d && f.Logger.debug(l + ": write() didThrow: " + (k.didThrow ? n.verboseExceptionObject(k.exception) : "-"));
        return k.rethrow();
      };
    };
    return a;
  }();
});
z("src/lib/sensors/ClientWebRequestAttachment", "require exports url src/lib/Agent src/lib/sensors/AttachmentBase src/lib/util/CoreUtil".split(" "), function(g, b, f, d, h, m) {
  function k(b) {
    if (m.isString(b)) {
      b = f.parse(b);
    } else {
      if (m.isValueless(b)) {
        b = {};
      } else {
        if (m.isFunction(f.URL) && b instanceof f.URL) {
          var d = {protocol:b.protocol, hostname:b.hostname, host:b.host, path:"" + b.pathname + b.search};
          "" !== b.port && (d.port = +b.port);
          b = d;
        }
      }
    }
    return b;
  }
  Object.defineProperty(b, "__esModule", {value:!0});
  g = function(b) {
    function f(c) {
      return b.call(this, c, d.Agent.correlation.AttachmentId.ATTACHMENT_CLIENT_WEBREQUEST_ID) || this;
    }
    u(f, b);
    f.prototype.fillEntryData = function(b, d) {
      var a = k(b);
      b = d ? 443 : 80;
      d = d ? "https:" : "http:";
      var c = a.protocol || d, f = a.hostname || a.host || "localhost", h = a.method || "GET", g = m.isValueless(a.port) ? b : +a.port, a = a.path ? String(a.path) : "/", n = a.indexOf("?"), p = -1 !== n ? a.substr(0, n) : a, q = -1 !== n ? a.substr(n + 1) : "", y = c + "//" + f + (g === b && c === d ? "" : ":" + g) + p;
      this.setMultipleFields(function(a) {
        a.string(a.id.CLIENT_WEB_REQUEST_URI, y);
        a.string(a.id.CLIENT_WEB_REQUEST_QUERY, q);
        a.string(a.id.CLIENT_WEB_REQUEST_METHOD, h);
        a.string(a.id.CLIENT_WEB_REQUEST_HOSTNAME, f);
        a.numeric(a.id.CLIENT_WEB_REQUEST_PORTNO, g);
      });
    };
    f.prototype.fillExitData = function(b) {
      this.attachment.setAttachmentFieldNumeric(d.Agent.correlation.AttachmentFieldId.CLIENT_WEB_REQUEST_RESPONSECODE, b);
    };
    return f;
  }(h.default);
  b.ClientWebRequestAttachment = g;
});
z("src/lib/sensors/ClientWebRequestSensor", "require exports semver src/lib/Agent src/lib/sensors/SensorBase src/lib/transformer/TransformerBase src/lib/transformer/EventEmitterTransformerBase src/lib/SubPathContext src/lib/FunctionId src/lib/Patch src/lib/sensors/ClientWebRequestAttachment src/lib/sensors/SensorConstants src/lib/Embedder src/lib/sensors/AutoSensor src/lib/Debug src/lib/util/CoreUtil src/lib/util/InvocationUtil src/lib/util/ErrorUtil src/lib/util/EventUtil src/lib/util/Reflection src/lib/util/UniqueId".split(" "), 
function(g, b, f, d, h, m, k, q, p, c, n, a, e, l, v, t, w, x, r, y, C) {
  function A(a) {
    try {
      var b = r.emitterListenerCount(this, "response");
      1 >= b ? a._dump() : d.Logger.warning("ClientWebRequest: dummyOnResponse but cnt is " + b);
    } catch (E) {
    }
  }
  Object.defineProperty(b, "__esModule", {value:!0});
  g = function(a) {
    function b() {
      return null !== a && a.apply(this, arguments) || this;
    }
    u(b, a);
    b.prototype.applyInstrumentation = function(a) {
      this.transformRequest(a);
      "http" === a.request && (this.transformClientRequestStoreHeader(a), this.transformClientRequestEmitter(a), this.transformGet(a));
    };
    b.prototype.transformRequest = function(a) {
      var b = new c.FunctionSpec("request", a.request, a.moduleExports, void 0, "http");
      a = new D(this, "https" === a.request);
      b = c.applyToSingle(b, a);
      v.assert(t.isDefined(b));
    };
    b.prototype.transformClientRequestEmitter = function(a) {
      a = new c.ModuleSpec("ClientRequest", a.moduleExports.ClientRequest.prototype);
      (new H(this)).applyTransformation(a);
    };
    b.prototype.transformClientRequestStoreHeader = function(a) {
      a = new c.FunctionSpec("_storeHeader", "ClientRequest", a.moduleExports.ClientRequest.prototype);
      var b = new J(this);
      a = c.applyToSingle(a, b);
      v.assert(t.isDefined(a));
    };
    b.prototype.transformGet = function(a) {
      if (!f.satisfies(process.version, "<8.0.0")) {
        var b = a.moduleExports;
        a = b.get;
        t.isFunction(a) ? (b.get = function(a, c) {
          a = b.request(a, c);
          a.end();
          return a;
        }, y.cloneFunctionProperties(b.get, a)) : d.Logger.warning("http.get() is not of type Function");
      }
    };
    return b;
  }(h.SensorBase);
  b.ClientWebRequestSensor = g;
  var B = function() {
    function a(a, b, c) {
      this.reqOptions = a;
      this.isHttps = b;
      this.controlParams = c;
      this.onRequestInjected = !1;
      this.id = new C.UniqueId;
    }
    a.prototype.createAttachments = function(a) {
      a = new n.ClientWebRequestAttachment(a);
      if (a.valid) {
        this.attachment = a;
        try {
          a.fillEntryData(this.reqOptions, this.isHttps);
        } catch (E) {
          x.logAgentException(E);
        }
      }
    };
    a.prototype.fillAttachmentExitData = function(a) {
      v.assert(t.isDefined(this.attachment));
      if (t.isDefined(this.attachment)) {
        try {
          this.attachment.fillExitData(a);
        } catch (E) {
          x.logAgentException(E);
        }
      }
    };
    Object.defineProperty(a.prototype, "clientRequest", {set:function(b) {
      a.embedder.set(b, this);
      this.theClientRequest = b;
    }, enumerable:!0, configurable:!0});
    a.prototype.endAsyncSubPath = function() {
      t.isDefined(this.vNodeActivation) && (this.vNodeActivation.spc.end(), this.vNodeActivation = void 0, t.isDefined(this.theClientRequest) && a.embedder.clear(this.theClientRequest), this.theClientRequest = void 0);
    };
    a.prototype.toString = function() {
      return "ClientWebRequest " + this.id;
    };
    a.getTracker = function(b) {
      return a.embedder.get(b) || a.activeTracker;
    };
    return a;
  }();
  B.activeTracker = void 0;
  B.embedder = e.create("clientRequest");
  var D = function(b) {
    function c(a, c) {
      a = b.call(this, a) || this;
      a.isHttps = c;
      return a;
    }
    u(c, b);
    c.prototype.generateSubstitute = function(b) {
      var e = this;
      return function(f, k) {
        var h = e.controlParams.isDebugEnabled;
        h && d.Logger.debug("ClientWebRequest: request() hasCb: " + t.isDefined(k));
        if (!e.controlParams.active) {
          return h && d.Logger.debug("ClientWebRequest: request() exit - inactive"), w.doInvoke(this, b.origFn, arguments);
        }
        var g, n, m, r = new p.FunctionId(b, this);
        try {
          if (n = new B(f, e.isHttps, e.controlParams), g = e.tryStartAsyncActivation(r, d.Agent.correlation.MethodCategory.AsyncCall, n), t.isDefined(g)) {
            n.vNodeActivation = g.vNodeActivation;
            var v = g.vNodeActivation.spc, y = v.createLink();
            y.valid && (m = y.serialize(), v.addLink(!0, y));
            h && d.Logger.debug(n + ": request() virt: " + g.vNodeActivation.spc + ", init: " + g.initiatorActivation.spc + ", tag: " + y + ", " + n.attachment);
          } else {
            h && d.Logger.debug(n + ": request() no method activation, active spc: " + q.SubPathContext.getActiveContext());
          }
        } catch (P) {
          x.logAgentException(P);
        }
        if (t.isUndefined(g)) {
          return w.doInvoke(this, b.origFn, arguments);
        }
        t.isDefined(m) && t.hasProperty(f, "headers") && (v = c.addTaggingHeaderinOptions(m, f, h), t.isDefined(v) && (arguments[0] = v, m = void 0));
        B.activeTracker = n;
        v = w.safeInvoke(this, b.origFn, arguments);
        B.activeTracker = void 0;
        try {
          l.addSample(r);
          if (v.didThrow) {
            c.closeAsyncExePathWithException(n, v.exception);
          } else {
            var A = v.retVal;
            n.clientRequest = A;
            A.on("error", c.getErrorListener(n));
            if (t.isDefined(m)) {
              try {
                A.setHeader(a.cHttpTaggingHeader, m);
              } catch (P) {
                x.logAgentException(P);
              }
            }
          }
          g.initiatorActivationDone(v.exception);
        } catch (P) {
          x.logAgentException(P);
        }
        h && (h = t.isDefined(n) ? n.toString() : "ClientWebRequest", d.Logger.debug(h + ": request() exit didThrow: " + (v.didThrow ? x.verboseExceptionObject(v.exception) : "-")));
        return v.rethrow();
      };
    };
    c.addTaggingHeaderinOptions = function(b, c, e) {
      var f;
      Array.isArray(c.headers) ? (f = t.extend({}, c), f.headers = f.headers.slice(0), f.headers.push([a.cHttpTaggingHeader, b])) : t.isObject(c.headers) ? (f = t.extend({}, c), f.headers = t.extend({}, f.headers), f.headers[a.cHttpTaggingHeader] = b) : e && d.Logger.debug("ClientWebRequest: headers property present in options but unknown type: " + typeof c.headers);
      return f;
    };
    c.getErrorListener = function(a) {
      return function(b) {
        c.closeAsyncExePathWithException(a, b);
        r.reEmitErrorIfNeeded(this, b);
      };
    };
    c.closeAsyncExePathWithException = function(a, b) {
      var c;
      if (t.isDefined(a.vNodeActivation)) {
        try {
          c = a.vNodeActivation.spc, a.vNodeActivation.methodException(b), a.endAsyncSubPath();
        } catch (G) {
          x.logAgentException(G);
        }
      }
      a.controlParams.isDebugEnabled && d.Logger.debug(a + ": closeAsyncExePathWithException() spc: " + c + ", err: " + x.verboseExceptionObject(b));
    };
    return c;
  }(m.TransformerBase), J = function() {
    function a(a) {
      this.controlParams = a;
    }
    a.prototype.generateSubstitute = function(a) {
      var b = this;
      return function() {
        try {
          var c = b.controlParams.isDebugEnabled, e = B.getTracker(this);
          t.isDefined(e) ? (c && d.Logger.debug(e + ": _storeHeadersSubstitute()"), 0 === r.emitterListenerCount(this, "response") && (this.on("response", A), e.onRequestInjected = !0, c && d.Logger.debug(e + ": installed dummy response listener"))) : c && d.Logger.debug("ClientWebRequest: unmonitored _storeHeadersSubstitute()");
        } catch (G) {
          x.logAgentException(G);
        }
        return w.doInvoke(this, a.origFn, arguments);
      };
    };
    return a;
  }(), H = function(a) {
    function b(b) {
      return a.call(this, b, "response") || this;
    }
    u(b, a);
    b.prototype.shallWrap = function(a) {
      a = B.getTracker(a);
      return t.isDefined(a);
    };
    b.prototype.getWrappedListener = function(a, b, c) {
      var e = B.getTracker(a);
      if (t.isUndefined(e)) {
        return c;
      }
      e.onRequestInjected && (a.removeListener("response", A), e.onRequestInjected = !1);
      var f = k.EventEmitterTransformerBase.getUnwrappedListener(c);
      return function(a) {
        var b = e.controlParams.isDebugEnabled;
        if (t.isUndefined(e.vNodeActivation)) {
          return b && d.Logger.debug(e + ": onResponse() vNode already closed status: " + a.statusCode), w.doInvoke(this, c, arguments);
        }
        var k = new p.FunctionId(f, this), h;
        try {
          t.isDefined(a.statusCode) && e.fillAttachmentExitData(a.statusCode), e.vNodeActivation.exit(), e.onRequestInjected || (h = D.selectMethodActivationContext(e.vNodeActivation.spc).createActivation(k, 1), h.spc.activate());
        } catch (Q) {
          x.logAgentException(Q);
        }
        var g = w.safeInvoke(this, c, arguments);
        try {
          c === f && l.addSample(k), t.isDefined(h) && (h.spc.deactivate(), h.exitOrException(g.exception)), e.endAsyncSubPath();
        } catch (Q) {
          x.logAgentException(Q);
        }
        b && d.Logger.debug(e + ": onResponse() status: " + a.statusCode + ", didThrow: " + (g.didThrow ? x.verboseExceptionObject(g.exception) : "-"));
        return g.rethrow();
      };
    };
    return b;
  }(k.EventEmitterTransformerBase);
});
z("src/lib/transformer/EventEmitterContextPassingTransformer", "require exports src/lib/transformer/EventEmitterTransformerBase src/lib/SubPathContext src/lib/FunctionId src/lib/util/CoreUtil src/lib/util/InvocationUtil src/lib/util/ErrorUtil src/lib/sensors/AutoSensor".split(" "), function(g, b, f, d, h, m, k, q, p) {
  Object.defineProperty(b, "__esModule", {value:!0});
  g = function(b) {
    function c() {
      return null !== b && b.apply(this, arguments) || this;
    }
    u(c, b);
    c.prototype.shallWrap = function() {
      return this.controlParams.active && m.isDefined(d.SubPathContext.getActiveContext());
    };
    c.prototype.getWrappedListener = function(a, b, f) {
      if (!this.controlParams.active) {
        return f;
      }
      var e;
      try {
        e = d.SubPathContext.getActiveContext(), m.isDefined(e) && (e.didInitiateAsyncOp = !0);
      } catch (t) {
        q.logAgentException(t);
      }
      return m.isDefined(e) ? c.getListenerClosure(e, f) : f;
    };
    c.getListenerClosure = function(a, b) {
      var c = f.EventEmitterTransformerBase.getUnwrappedListener(b);
      return function() {
        var e = this;
        try {
          a.activate();
        } catch (w) {
          q.logAgentException(w);
        }
        var d = k.safeInvoke(this, b, arguments);
        try {
          b === c && p.addSample(function() {
            return new h.FunctionId(b, e);
          }), a.deactivate();
        } catch (w) {
          q.logAgentException(w);
        }
        return d.rethrow();
      };
    };
    return c;
  }(f.EventEmitterTransformerBase);
  b.EventEmitterContextPassingTransformer = g;
});
z("src/lib/sensors/EventEmitterContextPassingSensor", "require exports src/lib/Agent src/lib/sensors/SensorBase src/lib/Patch src/lib/transformer/EventEmitterContextPassingTransformer".split(" "), function(g, b, f, d, h, m) {
  Object.defineProperty(b, "__esModule", {value:!0});
  g = function(b) {
    function d() {
      return null !== b && b.apply(this, arguments) || this;
    }
    u(d, b);
    d.prototype.applyInstrumentation = function(b) {
      var c = new h.ModuleSpec("EventEmitter", b.moduleExports.EventEmitter.prototype), d = new m.EventEmitterContextPassingTransformer(this);
      this.isDebugEnabled && f.Logger.debug(this.name + ": instrumenting module " + b.toString(!0));
      d.applyTransformation(c);
    };
    return d;
  }(d.SensorBase);
  b.EventEmitterContextPassingSensor = g;
});
z("src/lib/sensors/MongoDbAttachmentUtils", ["require", "exports", "src/lib/Agent", "src/lib/util/CoreUtil", "src/lib/Configuration"], function(g, b, f, d, h) {
  function m(a) {
    return a && "object" === typeof a ? n.normalizeQueryToString(a) : a;
  }
  function k(a) {
    switch(a) {
      case c.drop:
      case c.indexInformation:
      case c.listIndexes:
        return 0;
      case c.aggregate:
      case c.bulkWrite:
      case c.collection:
      case c.count:
      case c.createCollection:
      case c.createIndexes:
      case c.createIndex:
      case c.command:
      case c.deleteMany:
      case c.deleteOne:
      case c.dropIndex:
      case c.ensureIndex:
      case c.findOne:
      case c.findOneAndDelete:
      case c.insert:
      case c.insertMany:
      case c.insertOne:
      case c.listCollections:
      case c.rename:
      case c.remove:
      case c.save:
        return 1;
      case c.authenticate:
      case c.distinct:
      case c.findOneAndReplace:
      case c.findOneAndUpdate:
      case c.findAndRemove:
      case c.mapReduce:
      case c.replaceOne:
      case c.update:
      case c.updateMany:
      case c.updateOne:
        return 2;
      case c.findAndModify:
        return 3;
      default:
        return -1;
    }
  }
  function q(a) {
    switch(a) {
      case c.aggregate:
        return "pipeline:";
      case c.bulkWrite:
        return "operations:";
      case c.createIndex:
      case c.ensureIndex:
        return "fieldOrSpec:";
      case c.createIndexes:
        return "indexSpecs:";
      case c.deleteMany:
      case c.deleteOne:
      case c.listCollections:
      case c.findOneAndReplace:
      case c.findOneAndUpdate:
      case c.findOneAndDelete:
      case c.replaceOne:
      case c.updateMany:
      case c.updateOne:
        return "filter:";
      case c.dropIndex:
        return "indexName:";
      case c.collection:
      case c.createCollection:
        return "name:";
      case c.command:
        return "command:";
      case c.indexExists:
        return "indexes:";
      case c.insert:
      case c.insertMany:
      case c.insertOne:
        return "docs:";
      case c.rename:
        return "newName:";
      case c.remove:
      case c.update:
        return "selector:";
      case c.save:
        return "doc:";
      default:
        return "query:";
    }
  }
  function p(a) {
    switch(a) {
      case c.distinct:
        return 0;
      case c.findAndModify:
        return 2;
      case c.findOneAndReplace:
      case c.findOneAndUpdate:
      case c.replaceOne:
      case c.update:
      case c.updateMany:
      case c.updateOne:
        return 1;
      default:
        return -1;
    }
  }
  Object.defineProperty(b, "__esModule", {value:!0});
  var c;
  (function(a) {
    a[a.aggregate = 0] = "aggregate";
    a[a.authenticate = 1] = "authenticate";
    a[a.bulkWrite = 2] = "bulkWrite";
    a[a.close = 3] = "close";
    a[a.collection = 4] = "collection";
    a[a.count = 5] = "count";
    a[a.createCollection = 6] = "createCollection";
    a[a.createIndexes = 7] = "createIndexes";
    a[a.createIndex = 8] = "createIndex";
    a[a.command = 9] = "command";
    a[a.deleteMany = 10] = "deleteMany";
    a[a.deleteOne = 11] = "deleteOne";
    a[a.dropIndex = 12] = "dropIndex";
    a[a.drop = 13] = "drop";
    a[a.dropAllIndexes = 14] = "dropAllIndexes";
    a[a.dropDatabase = 15] = "dropDatabase";
    a[a.distinct = 16] = "distinct";
    a[a.dropIndexes = 17] = "dropIndexes";
    a[a.ensureIndex = 18] = "ensureIndex";
    a[a.find = 19] = "find";
    a[a.findOne = 20] = "findOne";
    a[a.findAndModify = 21] = "findAndModify";
    a[a.findOneAndReplace = 22] = "findOneAndReplace";
    a[a.findOneAndUpdate = 23] = "findOneAndUpdate";
    a[a.findAndRemove = 24] = "findAndRemove";
    a[a.findOneAndDelete = 25] = "findOneAndDelete";
    a[a.indexInformation = 26] = "indexInformation";
    a[a.indexExists = 27] = "indexExists";
    a[a.insert = 28] = "insert";
    a[a.insertMany = 29] = "insertMany";
    a[a.insertOne = 30] = "insertOne";
    a[a.listCollections = 31] = "listCollections";
    a[a.listIndexes = 32] = "listIndexes";
    a[a.mapReduce = 33] = "mapReduce";
    a[a.open = 34] = "open";
    a[a.reIndex = 35] = "reIndex";
    a[a.rename = 36] = "rename";
    a[a.remove = 37] = "remove";
    a[a.replaceOne = 38] = "replaceOne";
    a[a.save = 39] = "save";
    a[a.update = 40] = "update";
    a[a.updateMany = 41] = "updateMany";
    a[a.updateOne = 42] = "updateOne";
  })(c || (c = {}));
  b.methodNameToMethodType = function(a) {
    switch(c[a]) {
      case c.aggregate:
        return f.Agent.correlation.DbMethodType.DB_METHOD_TYPE_MONGO_DB_AGGREGATE;
      case c.open:
        return f.Agent.correlation.DbMethodType.DB_METHOD_TYPE_CONNECTION_ACQUISITION;
      case c.close:
        return f.Agent.correlation.DbMethodType.DB_METHOD_TYPE_MONGO_DB_COMMAND;
      case c.collection:
      case c.listCollections:
      case c.listIndexes:
      case c.indexInformation:
      case c.indexExists:
        return f.Agent.correlation.DbMethodType.DB_METHOD_TYPE_MONGO_DB_LISTCOLLECTIONS;
      case c.createCollection:
        return f.Agent.correlation.DbMethodType.DB_METHOD_TYPE_MONGO_DB_CREATECOLLECTION;
      case c.dropDatabase:
        return f.Agent.correlation.DbMethodType.DB_METHOD_TYPE_MONGO_DB_DROPDATABASE;
      case c.command:
        return f.Agent.correlation.DbMethodType.DB_METHOD_TYPE_MONGO_DB_COMMAND;
      case c.insert:
      case c.insertMany:
      case c.insertOne:
        return f.Agent.correlation.DbMethodType.DB_METHOD_TYPE_MONGO_DB_INSERT;
      case c.save:
        return f.Agent.correlation.DbMethodType.DB_METHOD_TYPE_MONGO_DB_SAVE;
      case c.count:
        return f.Agent.correlation.DbMethodType.DB_METHOD_TYPE_MONGO_DB_GET_COUNT;
      case c.find:
        return f.Agent.correlation.DbMethodType.DB_METHOD_TYPE_MONGO_DB_FIND;
      case c.findOne:
        return f.Agent.correlation.DbMethodType.DB_METHOD_TYPE_MONGO_DB_FIND_ONE;
      case c.findAndModify:
      case c.findOneAndReplace:
      case c.replaceOne:
        return f.Agent.correlation.DbMethodType.DB_METHOD_TYPE_MONGO_DB_FIND_AND_MODIFY;
      case c.update:
      case c.updateMany:
      case c.updateOne:
      case c.findOneAndUpdate:
      case c.rename:
      case c.createIndex:
      case c.createIndexes:
      case c.ensureIndex:
      case c.reIndex:
      case c.bulkWrite:
        return f.Agent.correlation.DbMethodType.DB_METHOD_TYPE_MONGO_DB_UPDATE;
      case c.findAndRemove:
      case c.findOneAndDelete:
        return f.Agent.correlation.DbMethodType.DB_METHOD_TYPE_MONGO_DB_FIND_AND_REMOVE;
      case c.distinct:
        return f.Agent.correlation.DbMethodType.DB_METHOD_TYPE_MONGO_DB_DISTINCT;
      case c.remove:
      case c.deleteMany:
      case c.deleteOne:
      case c.dropIndex:
      case c.drop:
      case c.dropAllIndexes:
      case c.dropIndexes:
        return f.Agent.correlation.DbMethodType.DB_METHOD_TYPE_MONGO_DB_REMOVE;
      case c.authenticate:
        return f.Agent.correlation.DbMethodType.DB_METHOD_TYPE_MONGO_DB_AUTHENTICATE;
      case c.mapReduce:
        return f.Agent.correlation.DbMethodType.DB_METHOD_TYPE_MONGO_DB_MAP_REDUCE;
      default:
        return f.Agent.correlation.DbMethodType.DB_METHOD_TYPE_UNKNOWN;
    }
  };
  b.methodTypeToServiceType = function(a) {
    switch(a) {
      case f.Agent.correlation.DbMethodType.DB_METHOD_TYPE_MONGO_DB_AUTHENTICATE:
      case f.Agent.correlation.DbMethodType.DB_METHOD_TYPE_MONGO_DB_COMMAND:
        return a;
      case f.Agent.correlation.DbMethodType.DB_METHOD_TYPE_MONGO_DB_DISTINCT:
      case f.Agent.correlation.DbMethodType.DB_METHOD_TYPE_MONGO_DB_GET_COUNT:
      case f.Agent.correlation.DbMethodType.DB_METHOD_TYPE_MONGO_DB_AGGREGATE:
      case f.Agent.correlation.DbMethodType.DB_METHOD_TYPE_MONGO_DB_GROUP:
      case f.Agent.correlation.DbMethodType.DB_METHOD_TYPE_MONGO_DB_MAP_REDUCE:
        return f.Agent.correlation.DbServiceType.DB_SERVICE_TYPE_MONGO_DB_AGGREGATION;
      case f.Agent.correlation.DbMethodType.DB_METHOD_TYPE_MONGO_DB_INSERT:
      case f.Agent.correlation.DbMethodType.DB_METHOD_TYPE_MONGO_DB_UPDATE:
      case f.Agent.correlation.DbMethodType.DB_METHOD_TYPE_MONGO_DB_FIND_AND_MODIFY:
      case f.Agent.correlation.DbMethodType.DB_METHOD_TYPE_MONGO_DB_FIND_AND_REMOVE:
      case f.Agent.correlation.DbMethodType.DB_METHOD_TYPE_MONGO_DB_REMOVE:
      case f.Agent.correlation.DbMethodType.DB_METHOD_TYPE_MONGO_DB_SAVE:
      case f.Agent.correlation.DbMethodType.DB_METHOD_TYPE_MONGO_DB_DROPDATABASE:
      case f.Agent.correlation.DbMethodType.DB_METHOD_TYPE_MONGO_DB_CREATECOLLECTION:
        return f.Agent.correlation.DbServiceType.DB_SERVICE_TYPE_MONGO_DB_WRITE;
      case f.Agent.correlation.DbMethodType.DB_METHOD_TYPE_MONGO_DB_FIND:
      case f.Agent.correlation.DbMethodType.DB_METHOD_TYPE_MONGO_DB_FIND_ONE:
      case f.Agent.correlation.DbMethodType.DB_METHOD_TYPE_MONGO_DB_NEXT:
      case f.Agent.correlation.DbMethodType.DB_METHOD_TYPE_MONGO_DB_LISTCOLLECTIONS:
        return f.Agent.correlation.DbServiceType.DB_SERVICE_TYPE_MONGO_DB_READ;
      case f.Agent.correlation.DbMethodType.DB_METHOD_TYPE_CONNECTION_ACQUISITION:
        return f.Agent.correlation.DbServiceType.DB_SERVICE_TYPE_CONNECTION_ACQUISITION;
      default:
        return f.Agent.correlation.DbServiceType.DB_SERVICE_TYPE_UNDEFINED;
    }
  };
  b.cpMethodTypeToServiceType = function(a) {
    switch(a) {
      case f.Agent.correlation.DbMethodType.DB_METHOD_TYPE_MONGO_DB_COMMAND:
        return f.Agent.correlation.DbServiceType.DB_SERVICE_TYPE_MONGO_DB_COMMAND;
      default:
        return a;
    }
  };
  b.findDatabaseName = function(a) {
    var b = "";
    d.isDefined(a) && (d.isDefined(a.databasename) ? b = a.databasename : d.isDefined(a.databaseName) && (b = a.databaseName), "" === b && d.isDefined(a.s) && (d.isDefined(a.s.databaseName) ? b = a.s.databaseName : d.isDefined(a.s.databasename) ? b = a.s.databasename : d.isDefined(a.s.dbName) ? b = a.s.dbName : d.isDefined(a.s.dbname) && (b = a.s.dbname)), "" === b && d.isDefined(a.s) && d.isDefined(a.s.db) && (d.isDefined(a.s.db.databaseName) ? b = a.s.db.databaseName : d.isDefined(a.s.db.databasename) ? 
    b = a.s.db.databasename : d.isDefined(a.s.db.dbName) ? b = a.s.db.dbName : d.isDefined(a.s.db.dbname) && (b = a.s.db.dbname)), "" === b && d.isDefined(a.db) && d.isDefined(a.db.databaseName) && (b = a.db.databaseName));
    return b;
  };
  b.findHostName = function(a) {
    var b = "";
    d.isDefined(a) && (d.isDefined(a.s) && (d.isDefined(a.s.topology) && (d.isDefined(a.s.topology.host) && (b = a.s.topology.host), "" === b && d.isDefined(a.s.topology.s) && d.isDefined(a.s.topology.s.host) && (b = a.s.topology.s.host)), "" === b && d.isDefined(a.s.db) && d.isDefined(a.s.db.serverConfig) && d.isDefined(a.s.db.serverConfig.s) && d.isDefined(a.s.db.serverConfig.s.host) && (b = a.s.db.serverConfig.s.host)), "" === b && (d.isDefined(a.serverConfig) && d.isDefined(a.serverConfig.host) ? 
    b = a.serverConfig.host : d.isDefined(a.db) && d.isDefined(a.db.serverConfig) && d.isDefined(a.db.serverConfig.host) && (b = a.db.serverConfig.host)));
    return b || "undefined";
  };
  b.findPort = function(a) {
    var b = -1;
    d.isDefined(a) && (d.isDefined(a.s) && d.isDefined(a.s.topology) && (d.isDefined(a.s.topology.port) && (b = a.s.topology.port), b && -1 !== b || !d.isDefined(a.s.topology.s) || !d.isDefined(a.s.topology.s.port) || (b = a.s.topology.s.port), (!b || -1 === b) && d.isDefined(a.s.db) && d.isDefined(a.s.db.serverConfig) && d.isDefined(a.s.db.serverConfig.s) && d.isDefined(a.s.db.serverConfig.s.port) && (b = a.s.db.serverConfig.s.port)), b && -1 !== b || (d.isDefined(a.serverConfig) && d.isDefined(a.serverConfig.port) ? 
    b = a.serverConfig.port : d.isDefined(a.db) && d.isDefined(a.db.serverConfig) && d.isDefined(a.db.serverConfig.port) && (b = a.db.serverConfig.port)));
    return +b;
  };
  b.findCollectionName = function(a) {
    var b = "";
    d.isDefined(a) && (d.isDefined(a.s) && d.isDefined(a.s.name) && (b = a.s.name), "" === b && d.isDefined(a.s) && d.isDefined(a.s.db) && d.isDefined(a.s.db.name) && (b = a.s.db.name), d.isDefined(a.collectionName) && (b = a.collectionName));
    return b;
  };
  b.findPoolSize = function(a) {
    var b = -1;
    d.isDefined(a) && (d.isDefined(a.s) && d.isDefined(a.s.topology) && d.isDefined(a.s.topology.s) && (d.isDefined(a.s.topology.s.poolSize) ? b = a.s.topology.s.poolSize : d.isDefined(a.s.topology.s.poolsize) && (b = a.s.topology.s.poolsize)), d.isDefined(a.serverConfig) && d.isDefined(a.serverConfig.connectionPool && a.serverConfig.connectionPool.poolSize) && (b = a.serverConfig.connectionPool.poolSize));
    return +b;
  };
  var n = function() {
    function a() {
    }
    a.normalizeQueryToString = function(b, c) {
      void 0 === c && (c = 0);
      a.initialized || a.initialize();
      var e = "";
      if (c >= this.maxRecursionDepth || null === b || void 0 === b || b instanceof RegExp || "object" !== typeof b) {
        return e += a.isAppMon ? b : this.queryValueReplacer;
      }
      if (b instanceof Array) {
        for (var e = e + "[", d = 0;d < b.length;++d) {
          e += this.normalizeQueryToString(b[d], ++c);
          if (e.length > a.maxStringLength) {
            break;
          }
          d < b.length - 1 && (e += ",");
        }
        e += "]";
      } else {
        var e = e + "{", d = 0, f = Object.keys(b).length, l;
        for (l in b) {
          if (Object.hasOwnProperty.call(b, l)) {
            d++;
            e += l + ":";
            e += this.normalizeQueryToString(b[l], ++c);
            if (e.length > a.maxStringLength) {
              break;
            }
            d < f && (e += ",");
          }
        }
        e += "}";
      }
      return e.length > a.maxStringLength ? e.slice(0, a.maxStringLength) : e;
    };
    a.initialize = function() {
      a.isAppMon = 1 === h.Configuration.activeProduct;
      a.maxStringLength = a.isAppMon ? 512 : 4096;
      a.initialized = !0;
    };
    return a;
  }();
  n.initialized = !1;
  n.maxRecursionDepth = 50;
  n.queryValueReplacer = "?";
  b.normalizeJson = m;
  b.getNormalizedQueryString = function(a, b) {
    a = c[a];
    var e;
    a: {
      switch(a) {
        case c.distinct:
          e = 1;
          break a;
        case c.authenticate:
        case c.drop:
        case c.dropAllIndexes:
        case c.dropDatabase:
        case c.dropIndexes:
        case c.indexInformation:
        case c.listIndexes:
        case c.mapReduce:
        case c.reIndex:
        case c.insert:
        case c.insertMany:
        case c.insertOne:
          e = -1;
          break a;
        default:
          e = 0;
      }
    }
    return -1 < e && e < b.length && (b = b[e]) && !d.isFunction(b) ? q(a) + m(b) : "";
  };
  b.getQueryOptionsString = function(a, b) {
    a = k(c[a]);
    return -1 < a && a < b.length && (b = b[a]) && !d.isFunction(b) ? "options:" + JSON.stringify(b) : "";
  };
  b.getUpdateString = function(a, b) {
    a = p(c[a]);
    return -1 < a && a < b.length && (b = b[a]) && !d.isFunction(b) ? "update:" + m(b) : "";
  };
});
z("src/lib/sensors/MongoDbAttachment", "require exports src/lib/Agent src/lib/util/CoreUtil src/lib/sensors/AttachmentBase src/lib/sensors/MongoDbAttachmentUtils".split(" "), function(g, b, f, d, h, m) {
  Object.defineProperty(b, "__esModule", {value:!0});
  b.CONNECTION_POOL_TYPE_MONGODB = 17;
  b.DATABASE_TYPE = "MongoDB";
  b.DEFAULT_POOL_NAME = "default-pool";
  g = function(b) {
    function d() {
      return null !== b && b.apply(this, arguments) || this;
    }
    u(d, b);
    return d;
  }(h.default);
  b.MongoDbAttachment = g;
  h = function(b) {
    function k(d) {
      return b.call(this, d, f.Agent.correlation.AttachmentId.ATTACHMENT_SQL_ID) || this;
    }
    u(k, b);
    k.prototype.fillMongoDbQueryData = function(b) {
      if (d.isDefined(this.attachment)) {
        var c = f.Agent.correlation.AttachmentFieldId;
        d.isDefined(b) && (this.attachment.setAttachmentFieldString(c.SQL_STATEMENT, b.makePseudoSql()), d.isDefined(b.dbMethod) && this.attachment.setAttachmentFieldNumeric(c.SQL_METHOD_TYPE, m.methodTypeToServiceType(m.methodNameToMethodType(b.dbMethod))));
      }
    };
    return k;
  }(g);
  b.MongoDbQueryAttachment = h;
  g = function(k) {
    function h(b) {
      return k.call(this, b, f.Agent.correlation.AttachmentId.ATTACHMENT_CONNECTION_POOL_ID) || this;
    }
    u(h, k);
    h.prototype.fillMongoDbConnectionPoolData = function(k) {
      d.isDefined(this.attachment) && d.isDefined(k) && this.setMultipleFields(function(c) {
        c.string(c.id.CONNECTION_POOL_DB, k.dbName);
        c.string(c.id.CONNECTION_POOL_URL, k.dbUrl);
        c.string(c.id.CONNECTION_POOL_DBTYPE, b.DATABASE_TYPE);
        c.string(c.id.CONNECTION_POOL_NAME, b.DEFAULT_POOL_NAME);
        c.string(c.id.CONNECTION_POOL_DBHOST, k.dbHost);
        c.numeric(c.id.CONNECTION_POOL_DBPORTNO, k.dbPort);
        c.numeric(c.id.CONNECTION_POOL_TYPE, b.CONNECTION_POOL_TYPE_MONGODB);
        c.numeric(c.id.CONNECTION_POOL_AGGREGATION_MECHANISM, f.Agent.correlation.DbAggregationMechanism.DB_AGGREGATION_MECHANISM_MONGO_DB);
        c.numeric(c.id.CONNECTION_POOL_METHOD_TYPE, m.cpMethodTypeToServiceType(m.methodNameToMethodType(k.dbMethod)));
        c.numeric(c.id.CONNECTION_POOL_SIZE, k.dbPoolSize);
      });
    };
    return h;
  }(g);
  b.MongoDbConnectionPoolAttachment = g;
  g = function() {
    function b(b, d, c) {
      this.dbName = m.findDatabaseName(b);
      this.dbHost = m.findHostName(b);
      this.dbPort = m.findPort(b);
      this.dbCollectionName = m.findCollectionName(b);
      this.dbMethod = d;
      this.dbQueryString = m.getNormalizedQueryString(d, c);
      this.dbOptionsString = m.getQueryOptionsString(d, c);
      this.dbUpdateString = m.getUpdateString(d, c);
      this.dbPoolSize = m.findPoolSize(b);
      this.dbUrl = "mongodb://" + this.dbHost + (0 < this.dbPort ? ":" + this.dbPort : "") + "/" + this.dbName;
    }
    b.prototype.makePseudoSql = function() {
      var b = "";
      this.dbCollectionName && (b += this.dbCollectionName);
      this.dbMethod && (this.dbCollectionName && (b += "."), b += this.dbMethod);
      b = b + "(" + this.dbQueryString;
      this.dbQueryString && this.dbUpdateString && (b += ", ");
      b += this.dbUpdateString;
      (this.dbQueryString || this.dbUpdateString) && this.dbOptionsString && (b += ", ");
      b += this.dbOptionsString;
      return b + ")";
    };
    return b;
  }();
  b.MongoDbData = g;
});
z("src/lib/transformer/PromiseTransformerUtilities", ["require", "exports", "src/lib/util/CoreUtil", "src/lib/Embedder"], function(g, b, f, d) {
  Object.defineProperty(b, "__esModule", {value:!0});
  g = function() {
    function b() {
    }
    b.isActuallyAPromise = function(b) {
      return b && f.isDefined(b) && f.isFunction(b.then) ? !0 : !1;
    };
    b.registerThenWrapper = function(b, g) {
      if (f.isDefined(b)) {
        var k = d.create("promise"), c = k.get(b);
        f.isUndefined(c) && (c = new h, k.set(b, c));
        f.isFunction(g) && (c.customThenWrapper = g);
      }
    };
    return b;
  }();
  b.PromiseTransformerUtilities = g;
  var h = function() {
    return function() {
    };
  }();
  b.EmbeddedPromiseContext = h;
});
z("src/lib/transformer/MongoDbTransformer", "require exports src/lib/Agent src/lib/Debug src/lib/sensors/AutoSensor src/lib/transformer/ContextPassingTransformer src/lib/util/CoreUtil src/lib/util/InvocationUtil src/lib/util/ErrorUtil src/lib/AsyncVirtualNodeTracker src/lib/transformer/AsyncTransformerBase src/lib/SubPathContext src/lib/sensors/MongoDbAttachment src/lib/sensors/ExceptionAttachment src/lib/transformer/PromiseTransformerUtilities src/lib/Embedder src/lib/FunctionId".split(" "), function(g, 
b, f, d, h, m, k, q, p, c, n, a, e, l, v, t, w) {
  function x() {
  }
  function r(b, c, e, d, l, h) {
    var g, m;
    try {
      m = n.AsyncTransformerBase.selectMethodActivationContext(c.spc);
      if (k.isDefined(c.virtualNodeActivation)) {
        if (!c.virtualNodeActivation.isExited) {
          c.virtualNodeActivation.exitOrException(e ? d : void 0);
        } else {
          if (k.isDefined(c.link)) {
            var r = f.Agent.correlation.deserializeLinkFromString(c.link);
            m = new a.SubPathContext(r);
            var y = new w.FunctionId(l, b);
            g = m.createActivation(y, 1);
          }
        }
      }
      k.isDefined(m) && m.activate();
    } catch (G) {
      p.logAgentException(G);
    }
    b = q.safeInvoke(b, l, h);
    try {
      k.isDefined(m) && m.deactivate(), k.isDefined(g) && g.exitOrException(b.exception), k.isDefined(c.virtualNodeActivation) && c.virtualNodeActivation.spc.open && c.virtualNodeActivation.spc.end();
    } catch (G) {
      p.logAgentException(G);
    }
    return b.rethrow();
  }
  Object.defineProperty(b, "__esModule", {value:!0});
  var y = function() {
    function a() {
    }
    a.isActuallyACursor = function(a, b) {
      return a && a instanceof b;
    };
    return a;
  }();
  y.CursorEmbedder = t.create("cursorTracker");
  b.MongoDbTransformerHelper = y;
  g = function(b) {
    function c(a, c) {
      a = b.call(this, a, void 0) || this;
      a.cursorType = c;
      return a;
    }
    u(c, b);
    c.prototype.generateSubstitute = function(b) {
      var c = this;
      return function() {
        var d, l, g = arguments, n, m = new w.FunctionId(b, this);
        if (c.controlParams.active) {
          try {
            n = a.SubPathContext.getActiveContext();
            y.suppressActivationCreation ? (l = void 0, y.suppressActivationCreation = !1) : l = c.tryCreateActivation(n, m);
            if (k.isDefined(l)) {
              n = l.spc;
              n.didInitiateAsyncOp = !0;
              var r = new e.MongoDbData(this, b.functionName, arguments);
              d = new C(r, c, n, b);
              var g = d.manipulateArguments(arguments), t = n.createLink(), v = t.duplicate(), r = void 0;
              t.valid && (r = t.serialize(), n.addLink(!1, t));
              d.link = r;
              var A = new a.SubPathContext(v);
              if (k.isDefined(A)) {
                var x = A.createActivation(new w.VirtualNodeFunctionId(l.functionId), 2, f.Agent.correlation.MethodCategory.Database, d);
                k.isDefined(x) && (d.virtualNodeActivation = x);
              }
            } else {
              k.isDefined(n) && (d = new C(void 0, c, n, b), g = d.manipulateArguments(arguments));
            }
            k.isDefined(n) && n.activate();
          } catch (N) {
            p.logAgentException(N);
          }
        }
        g = q.safeInvoke(this, b.origFn, g);
        try {
          h.addSample(m), k.isDefined(d) && d.manipulateReturnValue(g), g.didThrow && k.isDefined(d) && k.isDefined(d.virtualNodeActivation) && (d.virtualNodeActivation.isExited || d.virtualNodeActivation.exitOrException(g.exception), d.virtualNodeActivation.spc.end()), k.isDefined(n) && n.deactivate(), k.isDefined(l) && l.exitOrException(g.exception);
        } catch (N) {
          p.logAgentException(N);
        }
        return g.rethrow();
      };
    };
    c.prototype.wrapCallback = function(a) {
      var b = this;
      return function() {
        var c = this;
        try {
          a.spc.activate();
        } catch (F) {
          p.logAgentException(F);
        }
        for (var d = 0;d < arguments.length;d++) {
          y.isActuallyACursor(arguments[d], b.cursorType) && y.CursorEmbedder.set(arguments[d], a);
        }
        d = q.safeInvoke(this, a.origCb, arguments);
        try {
          h.addSample(function() {
            return new w.FunctionId(a.origCb, c);
          }), a.spc.deactivate();
        } catch (F) {
          p.logAgentException(F);
        }
        return d.rethrow();
      };
    };
    c.prototype.wrapReturnValue = function(a, b) {
      b = b.retVal;
      y.isActuallyACursor(b, this.cursorType) && y.CursorEmbedder.set(b, a);
    };
    return c;
  }(n.AsyncTransformerBase);
  b.MongoDbReturnsCursorTransformer = g;
  g = function(b) {
    function c(a) {
      return b.call(this, a, void 0) || this;
    }
    u(c, b);
    c.prototype.generateSubstitute = function(b) {
      var c = this;
      return function() {
        var d = this, e, f = arguments, l;
        if (c.controlParams.active) {
          try {
            e = y.CursorEmbedder.get(this), k.isDefined(e) ? (e.callbackPatched ? e = new C(e.mongoData, new m.ContextPassingTransformer(c.controlParams), e.spc, b) : (e.transformer = c, e.callbackPatched = !0), f = e.manipulateArguments(arguments), l = e.spc) : l = a.SubPathContext.getActiveContext(), k.isDefined(l) && l.activate();
          } catch (I) {
            p.logAgentException(I);
          }
        }
        f = q.safeInvoke(this, b.origFn, f);
        try {
          h.addSample(function() {
            return new w.FunctionId(b, d);
          }), k.isDefined(e) && e.manipulateReturnValue(f), f.didThrow && k.isDefined(e) && k.isDefined(e.virtualNodeActivation) && (e.virtualNodeActivation.isExited || e.virtualNodeActivation.exitOrException(f.exception), e.virtualNodeActivation.spc.end()), k.isDefined(l) && l.deactivate();
        } catch (I) {
          p.logAgentException(I);
        }
        return f.rethrow();
      };
    };
    c.prototype.wrapCallback = function(a) {
      return function() {
        var b, c = void 0, d = new w.FunctionId(a.origCb, this);
        try {
          if (k.isDefined(a.virtualNodeActivation)) {
            if (k.isDefined(arguments) && 0 < arguments.length && arguments[0] instanceof Error) {
              var e = arguments[0];
              (new l.ExceptionAttachment(a.virtualNodeActivation)).fillExceptionData(e);
            }
            if (!a.virtualNodeActivation.isExited) {
              a.virtualNodeActivation.exit();
              try {
                c = a.virtualNodeActivation.spc, c.didInitiateAsyncOp = !0, b = c.createActivation(d, 1), k.isDefined(b) && (c = b.spc, a.spc = c);
              } catch (E) {
                p.logAgentException(E);
              }
            }
          } else {
            c = a.spc, y.suppressActivationCreation = k.isUndefined(a.virtualNodeActivation);
          }
          k.isDefined(c) && c.activate();
        } catch (E) {
          p.logAgentException(E);
        }
        e = q.safeInvoke(this, a.origCb, arguments);
        try {
          h.addSample(d), k.isDefined(b) && !b.isExited && b.exitOrException(e.exception), k.isDefined(c) && (c.deactivate(), y.suppressActivationCreation = !1), k.isDefined(a.virtualNodeActivation) && a.virtualNodeActivation.spc.open && a.virtualNodeActivation.spc.end();
        } catch (E) {
          p.logAgentException(E);
        }
        return e.rethrow();
      };
    };
    c.prototype.wrapReturnValue = function(a, b) {
      function c(b, c, d) {
        return function(b) {
          return r(this, a, c, b, d, arguments);
        };
      }
      b = b.retVal;
      v.PromiseTransformerUtilities.isActuallyAPromise(b) && (v.PromiseTransformerUtilities.registerThenWrapper(b, c), b.then(x), a.returnsPromise = !0);
    };
    return c;
  }(n.AsyncTransformerBase);
  b.MongoDbCursorTransformer = g;
  g = function(b) {
    function c(a, c) {
      a = b.call(this, a, void 0) || this;
      a.isDbCollection = c;
      return a;
    }
    u(c, b);
    c.prototype.generateSubstitute = function(b) {
      var c = this;
      return function() {
        var d, l, g = arguments, n, m = c.shouldCreateNode(arguments), r = new w.FunctionId(b, this);
        if (c.controlParams.active) {
          try {
            if (n = a.SubPathContext.getActiveContext(), m) {
              if (y.suppressActivationCreation ? (l = void 0, y.suppressActivationCreation = !1) : l = c.tryCreateActivation(n, r), k.isDefined(l)) {
                var t = l.spc;
                t.didInitiateAsyncOp = !0;
                var v = new e.MongoDbData(this, b.functionName, arguments);
                d = new C(v, c, t, b);
                t.activate();
                var g = d.manipulateArguments(arguments), x = t.createLink(), A = x.duplicate(), v = void 0;
                x.valid && (v = x.serialize(), t.addLink(!1, x));
                d.link = v;
                var B = new a.SubPathContext(A);
                if (k.isDefined(B)) {
                  var D = B.createActivation(new w.VirtualNodeFunctionId(l.functionId), 2, f.Agent.correlation.MethodCategory.Database, d);
                  k.isDefined(D) && (d.virtualNodeActivation = D);
                }
              }
            } else {
              k.isDefined(n) && n.activate();
            }
          } catch (O) {
            p.logAgentException(O);
          }
        }
        g = q.safeInvoke(this, b.origFn, g);
        try {
          h.addSample(r), m ? (k.isDefined(d) && d.manipulateReturnValue(g), k.isDefined(d) && k.isDefined(d.virtualNodeActivation) && (g.didThrow || !d.hasCallback && !d.returnsPromise) && (d.virtualNodeActivation.isExited || d.virtualNodeActivation.exitOrException(g.exception), d.virtualNodeActivation.spc.end()), k.isDefined(l) && (l.spc.deactivate(), l.exitOrException(g.exception))) : k.isDefined(n) && n.deactivate();
        } catch (O) {
          p.logAgentException(O);
        }
        return g.rethrow();
      };
    };
    c.prototype.wrapCallback = function(a) {
      return function() {
        var b, c = new w.FunctionId(a.origCb, this);
        try {
          if (k.isDefined(a.virtualNodeActivation)) {
            if (k.isDefined(arguments) && 0 < arguments.length && arguments[0] instanceof Error) {
              var d = arguments[0];
              (new l.ExceptionAttachment(a.virtualNodeActivation)).fillExceptionData(d);
            }
            a.virtualNodeActivation.isExited || a.virtualNodeActivation.exit();
          }
          if (k.isDefined(a.virtualNodeActivation) && !a.injectedCallback) {
            try {
              b = n.AsyncTransformerBase.selectMethodActivationContext(a.virtualNodeActivation.spc).createActivation(c, 1), k.isDefined(b) && b.spc.activate();
            } catch (F) {
              p.logAgentException(F);
            }
          }
        } catch (F) {
          p.logAgentException(F);
        }
        y.suppressActivationCreation && (y.suppressActivationCreation = !1);
        d = q.safeInvoke(this, a.origCb, arguments);
        try {
          h.addSample(c), k.isDefined(b) && (b.spc.deactivate(), b.exitOrException(d.exception)), k.isDefined(a.virtualNodeActivation) && (a.virtualNodeActivation.isExited || a.virtualNodeActivation.exit(), a.virtualNodeActivation.spc.end());
        } catch (F) {
          p.logAgentException(F);
        }
        return d.rethrow();
      };
    };
    c.prototype.wrapReturnValue = function(a, b) {
      function c(b, c, d) {
        return function(b) {
          return r(this, a, c, b, d, arguments);
        };
      }
      b = b.retVal;
      v.PromiseTransformerUtilities.isActuallyAPromise(b) && (v.PromiseTransformerUtilities.registerThenWrapper(b, c), b.then(x), a.returnsPromise = !0);
    };
    c.prototype.shouldCreateNode = function(a) {
      return this.isDbCollection ? 1 <= a.length && a[1] && a[1].strict : !0;
    };
    return c;
  }(n.AsyncTransformerBase);
  b.MongoDbTransformer = g;
  var C = function(a) {
    function b(b, c, d, e) {
      c = a.call(this, c, d, e) || this;
      c.returnsPromise = !1;
      c.callbackPatched = !1;
      c.mongoData = b;
      return c;
    }
    u(b, a);
    b.prototype.createAttachments = function(a) {
      if (k.isDefined(this.mongoData)) {
        var b = new e.MongoDbQueryAttachment(a);
        b.valid && b.fillMongoDbQueryData(this.mongoData);
        a = new e.MongoDbConnectionPoolAttachment(a);
        a.valid && a.fillMongoDbConnectionPoolData(this.mongoData);
      } else {
        d.fail("CreateAttachment called without MongoData!");
      }
    };
    return b;
  }(c.default);
});
z("src/lib/sensors/MongoDbSensor", "require exports src/lib/Agent src/lib/Patch path src/lib/sensors/SensorBase src/lib/modules/SensorManager src/lib/transformer/MongoDbTransformer semver".split(" "), function(g, b, f, d, h, m, k, q, p) {
  Object.defineProperty(b, "__esModule", {value:!0});
  var c, n;
  g = function(a) {
    function b() {
      return null !== a && a.apply(this, arguments) || this;
    }
    u(b, a);
    b.prototype.applyInstrumentation = function(a) {
      this.isDebugEnabled && f.Logger.debug(this.name + ": inhibit " + a);
      var b;
      switch(a.request) {
        case "mongodb":
          n = a.moduleInfo.version;
          c = void 0;
          (b = this.findCommandCursorPath(a.resolvedModulePath)) ? k.default.getInstance().registerForRequest(b, this) : f.Logger.warning("CommandCursor module not found - some methods will not be fully supported (e.g. Db.listCollection)!");
          b = new q.MongoDbTransformer(this, !1);
          this.applyPatch(a, b);
          b = new q.MongoDbTransformer(this, !0);
          this.patchDbCollection(a.moduleExports, a.request, b);
          b = new q.MongoDbCursorTransformer(this);
          this.patchCursorToArray(a.moduleExports, a.request, b);
          this.patchCursorHasNext(a.moduleExports, a.request, b);
          this.patchCursorNext(a.moduleExports, a.request, b);
          this.patchCursorNextObject(a.moduleExports, a.request, b);
          this.patchCursorCount(a.moduleExports, a.request, b);
          this.patchCursorEach(a.moduleExports, a.request, b);
          this.patchCursorForEach(a.moduleExports, a.request, b);
          b = new q.MongoDbReturnsCursorTransformer(this, a.moduleExports.Cursor);
          this.patchCollectionFind(a.moduleExports, a.request, b);
          b = new q.MongoDbReturnsCursorTransformer(this, c);
          this.patchListCollections(a.moduleExports, a.request, b);
          c = void 0;
          break;
        case "./command_cursor":
        case "../command_cursor":
          b = new q.MongoDbCursorTransformer(this), n ? (p.satisfies(n, "1.4") ? c = a.moduleExports.CommandCursor : p.satisfies(n, ">=2.0.0") && (c = a.moduleExports), this.patchCommandCursorEach(c, a.request, b), this.patchCommandCursorNext(c, a.request, b), this.patchCommandCursorToArray(c, a.request, b)) : f.Logger.warning("CommandCursor type not found - some methods will not be fully supported (e.g. Db.listCollection)!");
      }
    };
    b.prototype.patchDbCollection = function(a, b, c) {
      a = new d.FunctionSpec("collection", "Db", a.Db.prototype);
      a.asyncTrackingMode = d.AsyncTrackingMode.CallbackLast;
      a.apiRealm = "mongodb";
      d.applyToSingle(a, c);
    };
    b.prototype.patchCursorToArray = function(a, b, c) {
      a = new d.FunctionSpec("toArray", "Cursor", a.Cursor.prototype);
      a.asyncTrackingMode = d.AsyncTrackingMode.CallbackLastOrPromise;
      a.apiRealm = "mongodb";
      d.applyToSingle(a, c);
    };
    b.prototype.patchCursorHasNext = function(a, b, c) {
      a = new d.FunctionSpec("hasNext", "Cursor", a.Cursor.prototype);
      a.asyncTrackingMode = d.AsyncTrackingMode.CallbackLastOrPromise;
      a.apiRealm = "mongodb";
      d.applyToSingle(a, c);
    };
    b.prototype.patchCursorNext = function(a, b, c) {
      a = new d.FunctionSpec("next", "Cursor", a.Cursor.prototype);
      a.asyncTrackingMode = d.AsyncTrackingMode.CallbackLastOrPromise;
      a.apiRealm = "mongodb";
      d.applyToSingle(a, c);
    };
    b.prototype.patchCursorNextObject = function(a, b, c) {
      a = new d.FunctionSpec("nextObject", "Cursor", a.Cursor.prototype);
      a.asyncTrackingMode = d.AsyncTrackingMode.CallbackLastOrPromise;
      a.apiRealm = "mongodb";
      d.applyToSingle(a, c);
    };
    b.prototype.patchCursorCount = function(a, b, c) {
      a = new d.FunctionSpec("count", "Cursor", a.Cursor.prototype);
      a.asyncTrackingMode = d.AsyncTrackingMode.CallbackLastOrPromise;
      a.apiRealm = "mongodb";
      d.applyToSingle(a, c);
    };
    b.prototype.patchCursorEach = function(a, b, c) {
      a = new d.FunctionSpec("each", "Cursor", a.Cursor.prototype);
      a.asyncTrackingMode = d.AsyncTrackingMode.CallbackLastOrPromise;
      a.apiRealm = "mongodb";
      d.applyToSingle(a, c);
    };
    b.prototype.patchCursorForEach = function(a, b, c) {
      a = new d.FunctionSpec("forEach", "Cursor", a.Cursor.prototype);
      a.asyncTrackingMode = d.AsyncTrackingMode.CallbackLastOrPromise;
      a.apiRealm = "mongodb";
      d.applyToSingle(a, c);
    };
    b.prototype.patchCommandCursorEach = function(a, b, c) {
      a = new d.FunctionSpec("each", "CommandCursor", a.prototype);
      a.asyncTrackingMode = d.AsyncTrackingMode.CallbackLastOrPromise;
      a.apiRealm = "mongodb";
      d.applyToSingle(a, c);
    };
    b.prototype.patchCommandCursorNext = function(a, b, c) {
      a = new d.FunctionSpec("next", "CommandCursor", a.prototype);
      a.asyncTrackingMode = d.AsyncTrackingMode.CallbackLastOrPromise;
      a.apiRealm = "mongodb";
      d.applyToSingle(a, c);
    };
    b.prototype.patchCommandCursorToArray = function(a, b, c) {
      a = new d.FunctionSpec("toArray", "CommandCursor", a.prototype);
      a.asyncTrackingMode = d.AsyncTrackingMode.CallbackLastOrPromise;
      a.apiRealm = "mongodb";
      d.applyToSingle(a, c);
    };
    b.prototype.patchCollectionFind = function(a, b, c) {
      a = new d.FunctionSpec("find", "Collection", a.Collection.prototype);
      a.asyncTrackingMode = d.AsyncTrackingMode.CallbackLastOrPromise;
      a.apiRealm = "mongodb";
      d.applyToSingle(a, c);
    };
    b.prototype.patchListCollections = function(a, b, c) {
      a = new d.FunctionSpec("listCollections", "Db", a.Db.prototype);
      a.asyncTrackingMode = d.AsyncTrackingMode.CallbackLastOrPromise;
      a.apiRealm = "mongodb";
      d.applyToSingle(a, c);
    };
    b.prototype.findCommandCursorPath = function(a) {
      var b = "", c = "";
      n && (p.satisfies(n, "1.4") ? c = "command_cursor.js" : p.satisfies(n, ">=2.0.0") && (c = h.join("lib", "command_cursor.js")));
      c && (b = h.join(h.dirname(a), c));
      return b;
    };
    return b;
  }(m.SensorBase);
  b.default = g;
});
z("src/lib/transformer/RedisTracker", "require exports events src/lib/Logger src/lib/util/CoreUtil src/lib/util/InvocationUtil src/lib/util/UniqueId src/lib/Embedder src/lib/CallbackWrappingHelper".split(" "), function(g, b, f, d, h, m, k, q, p) {
  Object.defineProperty(b, "__esModule", {value:!0});
  g = function() {
    function b(b, a, c) {
      this.transformer = b;
      this.descriptor = a;
      this.redisClient = c;
      this.errorExtractor = p.errorFromFirstArg;
      this.injectedCallback = !1;
      this.isDebugEnabled = b.controlParams.isDebugEnabled;
      this.id = new k.UniqueId;
    }
    b.prototype.toString = function() {
      return "Redis " + this.id;
    };
    b.prototype.getWrappedCallback = function(c) {
      h.hasValue(c) ? this.origCb = c : (this.injectedCallback = !0, this.origCb = this.transformer.emitErrors ? this.getEmittingRedisCb() : this.getThrowingRedisCb());
      c = this.transformer.wrapCallback(this);
      b.embedder.set(c, !0);
      return c;
    };
    b.prototype.cbIsWrapped = function(c) {
      return h.hasValue(c) ? (c = b.embedder.get(c), h.isDefined(c) && c) : !1;
    };
    b.prototype.getEmittingRedisCb = function() {
      var b = this;
      return function(a) {
        a && (b.redisClient instanceof f.EventEmitter ? (b.isDebugEnabled && d.debug(b + ": reemit error event: " + a), b.redisClient.emit("error", a)) : b.isDebugEnabled && d.debug(b + ": can't reemit error event: " + a + ", " + typeof b.redisClient));
      };
    };
    b.prototype.getThrowingRedisCb = function() {
      var b = this;
      return function(a) {
        a && (b.isDebugEnabled && d.debug(b + ": re-throw error event: " + a), process.nextTick(function() {
          throw a;
        }));
      };
    };
    return b;
  }();
  g.embedder = q.create("redisTracker");
  b.RedisTrackerBase = g;
  q = function(b) {
    function c() {
      return null !== b && b.apply(this, arguments) || this;
    }
    u(c, b);
    c.prototype.manipulateArguments = function(a) {
      if (0 < a.length) {
        var b = a[0];
        h.hasValue(b) && (this.isDebugEnabled && d.debug(this + ": " + (h.isFunction(b.callback) ? "wrap" : "inject") + " callback"), b.callback = this.getWrappedCallback(b.callback));
      }
      return a;
    };
    c.prototype.shallProcess = function(a) {
      if (0 < a.length) {
        var b = a[0];
        if (h.hasValue(b)) {
          return !this.cbIsWrapped(b.callback);
        }
      }
      this.isDebugEnabled && d.debug(this + ": Since26: unknown args: length=" + a.length + ", typeof(args[0]=" + (1 <= a.length ? typeof a[0] : "") + ")");
      return !1;
    };
    return c;
  }(g);
  b.RedisTrackerSince26 = q;
  q = function(b) {
    function c() {
      return null !== b && b.apply(this, arguments) || this;
    }
    u(c, b);
    c.prototype.manipulateArguments = function(a) {
      if (3 <= a.length) {
        if (h.isUndefined(a[2]) || h.isFunction(a[2])) {
          this.isDebugEnabled && d.debug(this + ": " + (h.isFunction(a[2]) ? "wrap" : "inject") + " at third argument"), a[2] = this.getWrappedCallback(a[2]);
        }
        return a;
      }
      if (2 === a.length && h.isArray(a[1])) {
        var b = a[1];
        h.isFunction(b[b.length - 1]) ? (b[b.length - 1] = this.getWrappedCallback(b[b.length - 1]), this.isDebugEnabled && d.debug(this + ": wrapped last element in args[1]")) : (this.isDebugEnabled && d.debug(this + ": inject a third argument."), b = m.copyArgsArray(a, 1), b[a.length] = this.getWrappedCallback(), a = b);
      }
      return a;
    };
    c.prototype.shallProcess = function(a) {
      var b;
      if (3 <= a.length && (h.isUndefined(a[2]) || h.isFunction(a[2]))) {
        b = a[2];
      } else {
        if (2 === a.length && h.isArray(a[1])) {
          a = a[1], h.isFunction(a[a.length - 1]) && (b = a[a.length - 1]);
        } else {
          return this.isDebugEnabled && d.debug(this + ": Pre26: unknown args: length=" + a.length + ", typeof(args[2]=" + (2 <= a.length ? typeof a[2] : "") + ")"), !1;
        }
      }
      return !this.cbIsWrapped(b);
    };
    return c;
  }(g);
  b.RedisTrackerPre26 = q;
});
z("src/lib/transformer/RedisTransformer", "require exports events src/lib/util/CoreUtil src/lib/util/InvocationUtil src/lib/util/ErrorUtil src/lib/SubPathContext src/lib/transformer/TransformerBase src/lib/Agent src/lib/FunctionId src/lib/transformer/RedisTracker src/lib/sensors/AutoSensor src/lib/sensors/AttachmentBase src/lib/CallbackWrappingHelper".split(" "), function(g, b, f, d, h, m, k, q, p, c, n, a, e, l) {
  Object.defineProperty(b, "__esModule", {value:!0});
  var v = function() {
    function a(a, b) {
      this.tracker = a;
      this.args = b;
    }
    a.prototype.createAttachments = function(a) {
      var b = this;
      try {
        var c = a.getAttachment(p.Agent.correlation.AttachmentId.ATTACHMENT_EXTERNAL_CALL_ID);
        d.isDefined(c) ? e.AttachmentFieldSetter.setMultiple(c, function(a) {
          var c = b.tracker.redisClient.connection_options || b.tracker.redisClient.connectionOption;
          d.hasValue(c) ? (d.isString(c.host) && a.string(a.id.EXTERNALCALL_HOSTNAME_ID, c.host), d.hasValue(c.port) && a.numeric(a.id.EXTERNALCALL_PORTNO_ID, +c.port)) : (d.isString(b.tracker.redisClient.host) && a.string(a.id.EXTERNALCALL_HOSTNAME_ID, b.tracker.redisClient.host), d.hasValue(b.tracker.redisClient.port) && a.numeric(a.id.EXTERNALCALL_PORTNO_ID, +b.tracker.redisClient.port));
          a.string(a.id.EXTERNALCALL_OPERATION_NAME_ID, b.getCommandName());
          a.numeric(a.id.EXTERNALCALL_CALL_TYPE_ID, 1);
        }) : this.tracker.isDebugEnabled && p.Logger.debug(this.tracker + ": failed to create attachment");
      } catch (y) {
        m.logAgentException(y);
      }
    };
    a.prototype.getCommandName = function() {
      if (this.tracker.transformer.useCommandObject && 0 < this.args.length) {
        var a = this.args[0];
        if (d.isDefined(a.command)) {
          return this.tracker.isDebugEnabled && p.Logger.debug(this.tracker + ": found command in CmdObj: " + a.command), a.command;
        }
      }
      if (1 < this.args.length && d.isArray(this.args[1])) {
        return this.tracker.isDebugEnabled && p.Logger.debug(this.tracker + ": found command in arg[0]: " + this.args[0]), this.args[0];
      }
      this.tracker.isDebugEnabled && p.Logger.debug(this.tracker + ": fallback to command from descriptor: " + this.tracker.descriptor.functionName);
      return this.tracker.descriptor.functionName;
    };
    return a;
  }();
  g = function(b) {
    function e(a, c, d) {
      a = b.call(this, a) || this;
      a.useCommandObject = c;
      a.emitErrors = d;
      return a;
    }
    u(e, b);
    e.prototype.generateSubstitute = function(b) {
      var e = this;
      return function() {
        var g = e.controlParams.isDebugEnabled;
        if (g) {
          var l = arguments.length;
          p.Logger.debug("Redis command(), argCnt: " + l + ", cmd: " + (1 <= l ? arguments[0] : "<missing>") + ", isEmitter: " + (this instanceof f.EventEmitter));
        }
        if (!e.controlParams.active) {
          return g && p.Logger.debug("Redis command() exit - inactive"), h.doInvoke(this, b.origFn, arguments);
        }
        var q = arguments, r, l = new c.FunctionId(b, this), t;
        try {
          if (t = e.useCommandObject ? new n.RedisTrackerSince26(e, b, this) : new n.RedisTrackerPre26(e, b, this), t.shallProcess(q)) {
            var x = new v(t, q);
            r = e.tryStartAsyncActivation(l, p.Agent.correlation.MethodCategory.AsyncCall, x);
            d.isDefined(r) ? (t.virtualNodeActivation = r.vNodeActivation, q = t.manipulateArguments(q), g && p.Logger.debug(t + ": command() virt: " + r.vNodeActivation.spc + ", init: " + r.initiatorActivation.spc)) : g && p.Logger.debug(t + ": no activation, active spc: " + k.SubPathContext.getActiveContext());
          } else {
            g && p.Logger.debug(t + ": Skip request as shall Process returned false");
          }
        } catch (H) {
          m.logAgentException(H);
        }
        x = h.safeInvoke(this, b.origFn, q);
        try {
          d.isDefined(r) && (a.addSample(l), r.initiatorActivationDone(x.exception));
        } catch (H) {
          m.logAgentException(H);
        }
        g && t && p.Logger.debug(t + ": command() exit, didThrow: " + x.didThrow);
        return x.rethrow();
      };
    };
    e.prototype.wrapCallback = function(a) {
      return l.CallbackWrappingHelper.wrapCallbackCreateActivation(a);
    };
    return e;
  }(q.TransformerBase);
  b.RedisTransformer = g;
});
z("src/lib/sensors/RedisSensor", "require exports semver src/lib/Patch src/lib/sensors/SensorBase src/lib/transformer/RedisTransformer src/lib/ModuleRegistry src/lib/Debug src/lib/Logger src/lib/util/CoreUtil".split(" "), function(g, b, f, d, h, m, k, q, p, c) {
  Object.defineProperty(b, "__esModule", {value:!0});
  g = function(b) {
    function a() {
      return null !== b && b.apply(this, arguments) || this;
    }
    u(a, b);
    a.prototype.applyInstrumentation = function(a) {
      var b = k.ModuleRegistry.lookup(a), e, g;
      c.isFunction(a.moduleExports.RedisClient.prototype.internal_send_command) ? (e = !0, g = "internal_send_command") : (e = !1, g = "send_command");
      var h = f.gte(b.version, "2.0.0");
      e = new m.RedisTransformer(this, e, h);
      a = new d.FunctionSpec(g, "RedisClient", a.moduleExports.RedisClient.prototype);
      a = d.applyToSingle(a, e);
      c.isUndefined(a) && (p.warning("Failed to patch Redis version: " + b.version), q.fail());
    };
    return a;
  }(h.SensorBase);
  b.default = g;
});
z("src/lib/transformer/MemcachedTracker", ["require", "exports", "src/lib/util/CoreUtil", "src/lib/util/ErrorUtil", "src/lib/CallbackWrappingHelper"], function(g, b, f, d, h) {
  Object.defineProperty(b, "__esModule", {value:!0});
  g = function() {
    function b() {
      this.errorExtractor = h.errorFromFirstArg;
    }
    b.prototype.manipulateArguments = function(g) {
      if (0 < g.length) {
        try {
          var h = g[0]();
          f.hasValue(h.callback) ? this.origCb = h.callback : (this.injectedCallback = !0, this.origCb = b.emptyCallback);
          h.callback = this.transformer.wrapCallback(this);
          g[0] = function() {
            return h;
          };
        } catch (p) {
          d.logAgentException(p);
        }
      }
      return g;
    };
    b.emptyCallback = function() {
    };
    return b;
  }();
  b.MemcachedTracker = g;
});
z("src/lib/transformer/MemcachedTransformer", "require exports src/lib/util/CoreUtil src/lib/util/InvocationUtil src/lib/util/ErrorUtil src/lib/transformer/MemcachedTracker src/lib/transformer/TransformerBase src/lib/Agent src/lib/FunctionId src/lib/sensors/AutoSensor src/lib/CallbackWrappingHelper src/lib/sensors/AttachmentBase src/lib/Embedder".split(" "), function(g, b, f, d, h, m, k, q, p, c, n, a, e) {
  Object.defineProperty(b, "__esModule", {value:!0});
  var l = e.create("memcachedAttachment"), v = function() {
    function b(a, b, c) {
      this.memcachedClient = a;
      this.originalDescriptor = b;
      this.args = c;
    }
    b.prototype.createAttachments = function(b) {
      this.externalCallAttachment = b.getAttachment(q.Agent.correlation.AttachmentId.ATTACHMENT_EXTERNAL_CALL_ID);
      if (f.isDefined(this.externalCallAttachment)) {
        var c = this.getCommandName();
        a.AttachmentFieldSetter.setMultiple(this.externalCallAttachment, function(a) {
          a.string(a.id.EXTERNALCALL_OPERATION_NAME_ID, c);
          a.numeric(a.id.EXTERNALCALL_CALL_TYPE_ID, 2);
        });
      }
    };
    b.prototype.setServerInfo = function(b) {
      f.isDefined(this.externalCallAttachment) && f.isString(b) && 0 < b.length && a.AttachmentFieldSetter.setMultiple(this.externalCallAttachment, function(a) {
        var c = b.split(":"), d = c[0], e = 11211;
        1 < c.length && (e = +c[1]);
        a.string(a.id.EXTERNALCALL_HOSTNAME_ID, d);
        a.numeric(a.id.EXTERNALCALL_PORTNO_ID, e);
      });
    };
    b.prototype.getCommandName = function() {
      if (0 < this.args.length) {
        var a = this.args[0];
        if (f.isDefined(a.name)) {
          return a.name;
        }
      }
      return this.originalDescriptor.functionName;
    };
    return b;
  }();
  b.MemcachedAttachmentCreator = v;
  g = function(a) {
    function b() {
      return null !== a && a.apply(this, arguments) || this;
    }
    u(b, a);
    b.prototype.generateSubstitute = function(a) {
      var b = this;
      return function() {
        var e = new m.MemcachedTracker;
        e.descriptor = a;
        e.transformer = b;
        var g = arguments, k, n = new p.FunctionId(a, this), r = new v(this, a, g);
        k = b.tryStartAsyncActivation(n, q.Agent.correlation.MethodCategory.AsyncCall, r);
        f.isDefined(k) && (e.virtualNodeActivation = k.vNodeActivation, l.set(this, r));
        try {
          e.manipulateArguments(g);
        } catch (J) {
          h.logAgentException(J);
        }
        e = d.safeInvoke(this, a.origFn, g);
        try {
          c.addSample(n);
        } catch (J) {
          h.logAgentException(J);
        }
        f.isDefined(k) && k.initiatorActivationDone(e.exception);
        return e.rethrow();
      };
    };
    b.prototype.wrapCallback = function(a) {
      return n.CallbackWrappingHelper.wrapCallbackCreateActivation(a);
    };
    return b;
  }(k.TransformerBase);
  b.MemcachedCommandTransformer = g;
  k = function(a) {
    function b() {
      return null !== a && a.apply(this, arguments) || this;
    }
    u(b, a);
    b.prototype.generateSubstitute = function(a) {
      return function() {
        var b = l.get(this);
        f.isDefined(b) && f.isDefined(arguments) && 0 < arguments.length && (b.setServerInfo(arguments[0]), l.clear(this));
        return d.doInvoke(this, a.origFn, arguments);
      };
    };
    return b;
  }(k.TransformerBase);
  b.MemcachedConnectTransformer = k;
});
z("src/lib/sensors/MemcachedSensor", ["require", "exports", "src/lib/Patch", "src/lib/sensors/SensorBase", "src/lib/transformer/MemcachedTransformer"], function(g, b, f, d, h) {
  Object.defineProperty(b, "__esModule", {value:!0});
  g = function(b) {
    function d() {
      return null !== b && b.apply(this, arguments) || this;
    }
    u(d, b);
    d.prototype.applyInstrumentation = function(b) {
      f.applyToSingle(new f.FunctionSpec("command", "Client", b.moduleExports.prototype), new h.MemcachedCommandTransformer(this));
      f.applyToSingle(new f.FunctionSpec("connect", "Client", b.moduleExports.prototype), new h.MemcachedConnectTransformer(this));
    };
    return d;
  }(d.SensorBase);
  b.default = g;
});
z("src/lib/sensors/ExpressSensor", "require exports path src/lib/Patch src/lib/Agent src/lib/util/ErrorUtil src/lib/sensors/SensorBase src/lib/modules/SensorManager src/lib/sensors/WebRequestSensor".split(" "), function(g, b, f, d, h, m, k, q, p) {
  function c(b) {
    return function e(c, f, g, k) {
      try {
        p.WebRequestSensorApi.isMonitored(g) && (b.isDebugEnabled && h.Logger.debug(b.name + ": capture error " + m.verboseExceptionObject(c)), p.WebRequestSensorApi.attachError(g, c));
      } catch (x) {
        h.Logger.warning("ExpressSensor: failed with " + m.verboseExceptionObject(x));
      }
      d.getOriginalFunction(e).call(this, c, f, g, k);
    };
  }
  Object.defineProperty(b, "__esModule", {value:!0});
  (function() {
    return function() {
    };
  })();
  g = function(b) {
    function a() {
      var a = null !== b && b.apply(this, arguments) || this;
      a.relativeLayerFilePath = f.join("lib", "router", "layer.js");
      return a;
    }
    u(a, b);
    a.prototype.applyInstrumentation = function(a) {
      if (a.matchRequest("express")) {
        var b = f.join(f.dirname(a.resolvedModulePath), this.relativeLayerFilePath);
        q.default.getInstance().registerForRequest(b, this);
        a.load();
      } else {
        0 <= a.resolvedModulePath.indexOf(this.relativeLayerFilePath) && d.substitute(new d.FunctionSpec("handle_error", "Layer", a.moduleExports.prototype), c(this));
      }
    };
    return a;
  }(k.SensorBase);
  b.default = g;
});
z("src/lib/sensors/FinalHandlerSensor", "require exports src/lib/Patch src/lib/Agent src/lib/sensors/SensorBase src/lib/util/CoreUtil src/lib/util/ErrorUtil src/lib/sensors/WebRequestSensor".split(" "), function(g, b, f, d, h, m, k, q) {
  function p(b, f, a) {
    return function(c) {
      try {
        m.hasValue(c) && q.WebRequestSensorApi.isMonitored(f) && (a.isDebugEnabled && d.Logger.debug(a.name + ": capture error " + k.verboseExceptionObject(c)), q.WebRequestSensorApi.attachError(f, c));
      } catch (l) {
        d.Logger.warning(a.name + ": failed with " + k.verboseExceptionObject(l));
      }
      b(c);
    };
  }
  Object.defineProperty(b, "__esModule", {value:!0});
  g = function(b) {
    function c() {
      return null !== b && b.apply(this, arguments) || this;
    }
    u(c, b);
    c.prototype.applyInstrumentation = function(a) {
      var b = a.moduleExports;
      m.isFunction(b) && 3 === b.length ? (a.moduleExports = this.makeFinalHandlerSubstituteClosure(b), f.tag(new f.FunctionSpec("finalHandler", "finalhandler", void 0), a.moduleExports, b)) : (a = m.isFunction(b), d.Logger.warning(this.name + ": instrumentation failed as exports did not match expected: " + a + " " + b.length));
    };
    c.prototype.makeFinalHandlerSubstituteClosure = function(a) {
      var b = this;
      return function(c, d, e) {
        c = a.call(this, c, d, e);
        return q.WebRequestSensorApi.isMonitored(d) ? p(c, d, b) : c;
      };
    };
    return c;
  }(h.SensorBase);
  b.default = g;
});
z("src/lib/sensors/RestifySensor", "require exports http path src/lib/Agent src/lib/Patch src/lib/sensors/SensorBase src/lib/util/CoreUtil src/lib/util/ErrorUtil src/lib/sensors/WebRequestSensor src/lib/modules/SensorManager".split(" "), function(g, b, f, d, h, m, k, q, p, c, n) {
  Object.defineProperty(b, "__esModule", {value:!0});
  g = function(a) {
    function b() {
      return null !== a && a.apply(this, arguments) || this;
    }
    u(b, a);
    b.prototype.applyInstrumentation = function(a) {
      a.matchRequest("restify") ? (a = d.join(d.dirname(a.resolvedModulePath), "response.js"), n.default.getInstance().registerForRequest(a, this), this.isDebugEnabled && h.Logger.debug(this.name + ": register for " + a)) : /response.js$/.test(a.resolvedModulePath) && (a.load(), a = new m.FunctionSpec("send", "ServerResponse", f.ServerResponse.prototype), m.substitute(a, this.makeResponseSendSubstituteClosure()));
    };
    b.prototype.makeResponseSendSubstituteClosure = function() {
      var a = this;
      return function t() {
        if (c.WebRequestSensorApi.isMonitored(this) && 0 < arguments.length) {
          try {
            var b = void 0;
            q.isError(arguments[0]) ? b = arguments[0] : 1 < arguments.length && q.isError(arguments[1]) && (b = arguments[1]);
            q.hasValue(b) && (a.isDebugEnabled && h.Logger.debug(a.name + ": capture error " + p.verboseExceptionObject(b)), c.WebRequestSensorApi.attachError(this, b));
          } catch (x) {
            h.Logger.debug("RestifySensor: failed with " + p.verboseExceptionObject(x));
          }
        }
        return m.invokeOriginal(t, this, arguments);
      };
    };
    return b;
  }(k.SensorBase);
  b.default = g;
});
z("src/lib/transformer/PromiseTransformer", "require exports src/lib/Agent src/lib/util/CoreUtil src/lib/util/InvocationUtil src/lib/SubPathContext src/lib/Embedder src/lib/Patch src/lib/transformer/PromiseTransformerUtilities".split(" "), function(g, b, f, d, h, m, k, q, p) {
  Object.defineProperty(b, "__esModule", {value:!0});
  g = function() {
    function b(a, b, c) {
      void 0 === a && (a = !1);
      void 0 === b && (b = !1);
      this.instrumentInstanceInsteadOfPrototype = a;
      this.wrapCatch = b;
      this.sensor = c;
    }
    b.prototype.instrument = function(a) {
      function b() {
        var a = q.getOriginalFunction(b).apply(this, arguments), c = new q.FunctionSpec("then", "Promise", a);
        q.substitute(c, g);
        return a;
      }
      function g() {
        function a(a, b, c) {
          return function(a) {
            var b = t(e.spc);
            b.activate();
            var d = h.safeInvoke(this, c, arguments);
            b.deactivate();
            return d.rethrow();
          };
        }
        var b = k.create("promise");
        b.hasData(this) || b.set(this, new p.EmbeddedPromiseContext);
        var c = b.get(this), e = t();
        e.didInitiateAsyncOp = !0;
        var f, l;
        1 <= arguments.length && d.isFunction(arguments[0]) && (f = arguments[0]);
        2 <= arguments.length && d.isFunction(arguments[1]) && (l = arguments[1]);
        var n = d.isFunction(c.customThenWrapper) ? c.customThenWrapper : a;
        d.isFunction(f) && (arguments[0] = n(c, !1, f));
        d.isDefined(l) && (arguments[1] = n(c, !0, l));
        f = q.getOriginalFunction(g).apply(this, arguments);
        b.set(f, c);
        w.instrumentInstanceInsteadOfPrototype && (f.then = g);
        return f;
      }
      function n(a) {
        return this.then(void 0, a);
      }
      function t(a) {
        var b;
        b = d.isDefined(w.sensor) ? w.sensor.active : !0;
        return b ? (b = m.SubPathContext.getActiveContext(), d.isUndefined(b) && (b = a), new c(b)) : new c(void 0);
      }
      var w = this;
      if (function() {
        return d.isUndefined(a) ? (f.Logger.warning("Unable to instrument this particular promise implementation, because we don't have any exports at all."), !1) : d.isUndefined(a.Promise) ? (f.Logger.warning("Unable to instrument this particular promise implementation, because we don't have '.Promise'."), !1) : w.instrumentInstanceInsteadOfPrototype || !d.isUndefined(a.Promise.prototype) && !d.isUndefined(a.Promise.prototype.then) ? !0 : (f.Logger.warning("Unable to instrument this particular promise implementation, because we don't have '.Promise.prototype.then'."), 
        !1);
      }()) {
        if (this.instrumentInstanceInsteadOfPrototype) {
          var x = new q.FunctionSpec("", "Promise", a), r = d.isFunction(a.Promise), y = d.isFunction(a.promise);
          r || y ? (r && !q.isApplied(a.Promise) && (r = a.Promise === a.promise, x.functionName = "Promise", q.substitute(x, b), r && (a.promise = a.Promise)), y && !q.isApplied(a.promise) && (x.functionName = "promise", q.substitute(x, b))) : f.Logger.warning("Unable to instrument this promise instance, because we can't find the constructor.");
        } else {
          d.isFunction(a.Promise) ? (q.isApplied(a.Promise.prototype.then) || (x = new q.FunctionSpec("then", "Promise", a.Promise.prototype), q.substitute(x, g)), w.wrapCatch && !q.isApplied(a.Promise.prototype.catch) && (x = new q.FunctionSpec("catch", "Promise", a.Promise.prototype), q.substitute(x, n))) : f.Logger.warning("Unable to instrument this promise instance, because we can't find the constructor.");
        }
      }
    };
    return b;
  }();
  b.PromiseTransformer = g;
  var c = function() {
    function b(a) {
      this.spc = a;
    }
    b.prototype.activate = function() {
      d.isDefined(this.spc) && this.spc.activate();
    };
    b.prototype.deactivate = function() {
      d.isDefined(this.spc) && this.spc.deactivate();
    };
    Object.defineProperty(b.prototype, "didInitiateAsyncOp", {set:function(a) {
      d.isDefined(this.spc) && (this.spc.didInitiateAsyncOp = a);
    }, enumerable:!0, configurable:!0});
    return b;
  }();
});
z("src/lib/sensors/PromiseSensor", "require exports src/lib/util/CoreUtil src/lib/sensors/SensorBase src/lib/transformer/PromiseTransformer src/lib/Agent".split(" "), function(g, b, f, d, h, m) {
  Object.defineProperty(b, "__esModule", {value:!0});
  g = function(b) {
    function d() {
      return null !== b && b.apply(this, arguments) || this;
    }
    u(d, b);
    d.prototype.applyInstrumentation = function(b) {
      this.isDebugEnabled && m.Logger.debug(this.name + ": instrumenting module " + b.toString(!0));
      if (!f.isUndefined(b.moduleExports)) {
        var c = b.matchRequest("mpromise"), d = b.matchRequest("q"), c = new h.PromiseTransformer(d, c, this);
        f.isDefined(b.moduleExports.Promise) || f.isDefined(b.moduleExports.promise) ? c.instrument(b.moduleExports) : (d = {Promise:b.moduleExports}, c.instrument(d), b.moduleExports = d.Promise);
      }
    };
    return d;
  }(d.SensorBase);
  b.default = g;
});
z("src/lib/sensors/TimerSensor", "require exports src/lib/Patch src/lib/sensors/SensorBase src/lib/transformer/ContextPassingTransformer semver".split(" "), function(g, b, f, d, h, m) {
  Object.defineProperty(b, "__esModule", {value:!0});
  g = function(b) {
    function d() {
      return null !== b && b.apply(this, arguments) || this;
    }
    u(d, b);
    d.prototype.applyInstrumentation = function(b) {
      if ("timers" === b.request) {
        var c = b.moduleExports, g = [], a = [];
        d.monitoredFn.forEach(function(b) {
          c[b] === global[b] ? a.push(b) : g.push(b);
        });
        b = new h.ContextPassingTransformer(this);
        var e = new f.ModuleSpec("timers", c, f.AsyncTrackingMode.CallbackFirst);
        f.applyToAll(e, d.monitoredFn, b);
        m.satisfies(process.version, ">=1.0.0") && (0 < g.length && (e = new f.ModuleSpec("global", global, f.AsyncTrackingMode.CallbackFirst), f.applyToAll(e, g, b)), a.forEach(function(a) {
          global[a] = c[a];
        }));
      }
    };
    return d;
  }(d.SensorBase);
  g.monitoredFn = ["setTimeout", "setInterval", "setImmediate"];
  b.default = g;
});
z("src/lib/sensors/CryptoSensor", ["require", "exports", "src/lib/Patch", "src/lib/sensors/SensorBase", "src/lib/transformer/ContextPassingTransformer"], function(g, b, f, d, h) {
  Object.defineProperty(b, "__esModule", {value:!0});
  g = function(b) {
    function d() {
      return null !== b && b.apply(this, arguments) || this;
    }
    u(d, b);
    d.prototype.applyInstrumentation = function(b) {
      if ("crypto" === b.request) {
        var d = b.moduleExports, c = new h.ContextPassingTransformer(this), f = d.randomBytes !== d.pseudoRandomBytes, a = d.rng === d.randomBytes, e = d.prng === d.pseudoRandomBytes;
        this.applyPatch(b, c);
        f ? this.patchPseudoRandomBytes(d, c) : d.pseudoRandomBytes = d.randomBytes;
        a && (d.rng = d.randomBytes);
        e && (d.prng = d.pseudoRandomBytes);
      }
    };
    d.prototype.patchPseudoRandomBytes = function(b, d) {
      b = new f.FunctionSpec("pseudoRandomBytes", "crypto", b);
      b.asyncTrackingMode = f.AsyncTrackingMode.CallbackLast;
      f.applyToSingle(b, d);
    };
    return d;
  }(d.SensorBase);
  b.default = g;
});
z("src/lib/sensors/SensorFactory", "require exports src/lib/Agent src/lib/sensors/GenericSensors src/lib/sensors/DisabledModulesSensor src/lib/sensors/ModuleSubstitutionSensor src/lib/sensors/WebRequestSensor src/lib/sensors/ClientWebRequestSensor src/lib/sensors/EventEmitterContextPassingSensor src/lib/sensors/MongoDbSensor src/lib/sensors/RedisSensor src/lib/sensors/MemcachedSensor src/lib/sensors/ExpressSensor src/lib/sensors/FinalHandlerSensor src/lib/sensors/RestifySensor src/lib/sensors/PromiseSensor src/lib/sensors/AutoSensor src/lib/sensors/TimerSensor src/lib/sensors/CryptoSensor".split(" "), 
function(g, b, f, d, h, m, k, q, p, c, n, a, e, l, v, t, w, x, r) {
  Object.defineProperty(b, "__esModule", {value:!0});
  b.createSensor = function(b, g, A) {
    var y;
    switch(A.type) {
      case "ContextPassing":
        y = new d.ContextPassingSensor(b, g, A);
        break;
      case "AsyncTiming":
        y = new d.AsyncTimingSensor(b, g, A);
        break;
      case "SyncTiming":
        y = new d.SyncTimingSensor(b, g, A);
        break;
      case "DisabledModules":
        y = new h.default(b, g, A);
        break;
      case "ModuleSubstitution":
        y = new m.default(b, g, A);
        break;
      case "EventEmitterContextPassing":
        y = new p.EventEmitterContextPassingSensor(b, g, A);
        break;
      case "WebRequest":
        y = new k.WebRequestSensor(b, g, A);
        break;
      case "ClientWebRequest":
        y = new q.ClientWebRequestSensor(b, g, A);
        break;
      case "MongoDb":
        y = new c.default(b, g, A);
        break;
      case "Redis":
        y = new n.default(b, g, A);
        break;
      case "Memcached":
        y = new a.default(b, g, A);
        break;
      case "Express":
        y = new e.default(b, g, A);
        break;
      case "FinalHandler":
        y = new l.default(b, g, A);
        break;
      case "Restify":
        y = new v.default(b, g, A);
        break;
      case "Promise":
        y = new t.default(b, g, A);
        break;
      case "AutoSensor":
        y = new w.default(b, g, A);
        break;
      case "TimerSensor":
        y = new x.default(b, g, A);
        break;
      case "CryptoSensor":
        y = new r.default(b, g, A);
        break;
      default:
        f.Logger.warning(b + " requests unknown sensor type " + A.type);
    }
    return y;
  };
});
z("src/lib/modules/SensorManager", "require exports module path src/lib/util/CoreUtil src/lib/util/ErrorUtil src/lib/util/RuntimeUtil src/lib/Debug src/lib/Agent src/lib/Patch src/lib/ModuleLoadContext src/lib/DebugLoggingEntity src/lib/sensors/SensorConfig src/lib/sensors/InstrumentationRule src/lib/sensors/SensorFactory src/lib/PackageRegistry".split(" "), function(g, b, f, d, h, m, k, q, p, c, n, a, e, l, v, t) {
  Object.defineProperty(b, "__esModule", {value:!0});
  a = function(a) {
    function b(c, d) {
      var e = a.call(this, "SensorManager") || this;
      e.predefinedSensors = c;
      e.predefinedInstrumentationRules = d;
      e.name = "SensorManager";
      e.sensorMapIsBuilt = !1;
      e.sensorMap = {};
      e.moduleMap = {};
      e.agentModuleRegistry = {};
      q.assertStrictEqual(b.theInstance, void 0);
      b.theInstance = e;
      e.addToDebugLogDomain("Transformers");
      return e;
    }
    u(b, a);
    b.getInstance = function() {
      return b.theInstance;
    };
    b.prototype.startModuleLoadIntercept = function() {
      p.Logger.info("Module._load intercept kicked in");
      this.sensorMapIsBuilt || (p.Logger.info("build sensor map lazy"), this.buildSensorMap());
      var a = new c.FunctionSpec("_load", "module", f);
      c.substitute(a, b.moduleLoadSubstitute);
      var a = {}, d;
      for (d in f._cache) {
        var e = f._cache[d];
        if (k.isAgentFile(d)) {
          this.agentModuleRegistry[d] = f._cache[d].exports;
        } else {
          if (!this.isRequiredByAgent(e)) {
            var g = t.PackageRegistry.lookup(d);
            h.isDefined(g) && h.isDefined(g.packageRoot) ? a.hasOwnProperty(g.packageRoot) || (a[g.packageRoot] = 1, p.Logger.info("unmonitored load of package " + g + " (required by " + b.getParentModuleId(e) + ")")) : a.hasOwnProperty(d) || (a[d] = 1, p.Logger.info("unmonitored load of " + d + " (required by " + b.getParentModuleId(e) + ")"));
          }
        }
      }
      this.preLoadModules();
    };
    b.prototype.onConfigUpdate = function(a) {
      if (h.hasProperty(a, "rtc", "knowledgeSensorConfigurations")) {
        var b = a.rtc;
        if (this.sensorMapIsBuilt) {
          for (a = 0, b = b.knowledgeSensorConfigurations.entries;a < b.length;a++) {
            var c = b[a];
            if (this.isNodeSensorConfig(c)) {
              var d = this.getSensor(c.sensorKey);
              h.isDefined(d) && (c = this.convertSensorConfig(c), h.isDefined(c) && d.updateState(c));
            }
          }
        } else {
          this.buildSensorMap(b.knowledgeSensorConfigurations.entries);
        }
      }
    };
    b.prototype.getSensor = function(a) {
      return this.sensorMap[a];
    };
    b.prototype.registerForRequest = function(a, b) {
      this.addToModuleMap(b, a);
    };
    b.prototype.onLoad = function(a) {
      if (k.isAgentFile(a.resolvedModulePath)) {
        this.onAgentFileLoad(a);
      } else {
        var b = this.getAssociatedSensors(a);
        if (!(h.isUndefined(b) || a.moduleInfo.isInstrumented && (this.isInNodeModuleCache(a.resolvedModulePath) || k.isNodeCoreModule(a.request)))) {
          a.moduleInfo.isInstrumented = !0;
          try {
            for (var c = 0;c < b.length;c++) {
              var d = b[c];
              if (d.enabled && d.isApplicable(a)) {
                try {
                  d.isDebugEnabled && p.Logger.debug(d.name + ": instrumenting module " + a.toString(!0)), d.applyInstrumentation(a);
                } catch (B) {
                  p.Logger.severe("exception during instrumentation of " + a.request + ": " + m.verboseExceptionObject(B));
                }
              } else {
                d.isDebugEnabled && p.Logger.debug(d.name + ": skipping instrumentation of module " + a.toString(!0) + " - sensor disabled or restrictions not met");
              }
            }
          } finally {
            !a.isModuleAcquired && this.isDebugEnabled && p.Logger.debug("instrumentation of " + a.toString() + " did not acquire module");
          }
        }
      }
    };
    b.prototype.getAssociatedSensors = function(a) {
      var b = this.moduleMap[a.request];
      h.isUndefined(b) && (b = this.moduleMap[a.resolvedModulePath]);
      return b;
    };
    b.prototype.loadModule = function(a, d, e, f) {
      this.isDebugEnabled && p.Logger.debug("SensorManager: loading " + d + " requested by " + (e ? e.id : "<undefined>"));
      return c.getOriginalFunction(b.moduleLoadSubstitute).call(a, d, e, f);
    };
    b.prototype.onAgentFileLoad = function(a) {
      h.isDefined(this.agentModuleRegistry[a.resolvedModulePath]) ? (a.moduleExports = this.agentModuleRegistry[a.resolvedModulePath], this.isDebugEnabled && p.Logger.debug("repeated load of agent file " + a + ": using cached exports.")) : (this.agentModuleRegistry[a.resolvedModulePath] = a.moduleExports, this.isDebugEnabled && p.Logger.debug("agent file " + a + ": caching exports on initial load."));
    };
    b.prototype.isRequiredByAgent = function(a) {
      for (a = a.parent;;a = a.parent) {
        if (h.isValueless(a)) {
          return !1;
        }
        if (h.hasValue(a.filename) && k.isAgentFile(a.filename)) {
          return !0;
        }
      }
    };
    b.prototype.isInNodeModuleCache = function(a) {
      return h.isDefined(f._cache[a]);
    };
    b.prototype.buildSensorMap = function(a) {
      if (this.sensorMapIsBuilt) {
        q.fail();
      } else {
        this.sensorMapIsBuilt = !0;
        var b = {};
        if (h.isArray(a)) {
          for (var c = 0;c < a.length;c++) {
            var d = a[c];
            if (this.isNodeSensorConfig(d)) {
              var e = this.convertSensorConfig(d);
              e && (b[d.sensorKey] = e);
            }
          }
        }
        a = 0;
        for (c = Object.getOwnPropertyNames(this.predefinedInstrumentationRules);a < c.length;a++) {
          d = c[a], (e = b[d] || this.predefinedSensors[d]) && e.enabled ? this.createSensorInstance(d, e, this.predefinedInstrumentationRules[d]) : p.Logger.info("skip creation of sensor " + d + " as sensor is " + (e ? "unknown" : "disabled"));
        }
      }
    };
    b.prototype.createSensorInstance = function(a, b, c) {
      b = v.createSensor(a, b, c);
      h.isDefined(b) && (this.sensorMap[a] = b, this.addAssociatesToModuleMap(b, c.associatedModules), this.logDebug("created sensor " + a + " of type " + c.type));
    };
    b.prototype.addAssociatesToModuleMap = function(a, b) {
      var c = 0;
      for (b = Object.getOwnPropertyNames(b);c < b.length;c++) {
        this.addToModuleMap(a, b[c]);
      }
    };
    b.prototype.addToModuleMap = function(a, b) {
      h.isUndefined(this.moduleMap[b]) ? this.moduleMap[b] = [a] : this.moduleMap[b].some(function(b) {
        return b === a;
      }) || this.moduleMap[b].push(a);
    };
    b.prototype.isNodeSensorConfig = function(a) {
      return h.isString(a.sensorKey) && 0 === a.sensorKey.indexOf(e.cConfigKeyPrefix);
    };
    b.prototype.convertSensorConfig = function(a) {
      if (h.isBoolean(a.capture) && h.isBoolean(a.enabled) && h.isBoolean(a.entrypoint) && h.isArray(a.sensorProperties)) {
        var b = {capture:a.capture, enabled:a.enabled, entrypoint:a.entrypoint};
        0 < a.sensorProperties.length && (b.sensorProperties = a.sensorProperties[0]);
        return b;
      }
      p.Logger.warning("Illegal sensor config received");
    };
    b.prototype.preLoadModules = function() {
      function a(a) {
        if (b.moduleMap[a].some(function(b) {
          return b.instrumentationRule.associatedModules[a].instrumentationStrategy === l.Strategy.Startup;
        })) {
          b.isDebugEnabled && p.Logger.debug("pre-loading module " + a);
          try {
            g(a);
          } catch (B) {
            p.Logger.severe("SensorManager: failed to pre-load module " + a + " with " + m.verboseExceptionObject(B));
          }
        }
      }
      var b = this, c;
      for (c in this.moduleMap) {
        a(c);
      }
      this.logDebug("done with module pre-load");
    };
    b.getParentModuleId = function(a) {
      return h.hasValue(a.parent) && h.hasValue(a.parent.id) ? a.parent.id : "<unknown>";
    };
    b.moduleLoadSubstitute = function(a, c, e) {
      var f = b.theInstance, g = d.extname(a);
      0 === g.length || ".js" === g || ".node" === g ? (h.isUndefined(e) && (e = !1), g = n.ModuleLoadContext.create(a, c, e, this), h.isDefined(g) ? (f.onLoad(g), a = g.moduleExports) : (f.isDebugEnabled && p.Logger.debug("module " + a + " could not be resolved."), a = f.loadModule(this, a, c, e))) : a = f.loadModule(this, a, c, e);
      return a;
    };
    return b;
  }(a.default);
  b.default = a;
});
z("src/lib/ModuleRegistry", "require exports src/lib/util/CoreUtil src/lib/PackageRegistry src/lib/Agent src/lib/DebugLoggingEntity src/lib/modules/SensorManager".split(" "), function(g, b, f, d, h, m, k) {
  Object.defineProperty(b, "__esModule", {value:!0});
  var q, p = function() {
    function b(b, a, c) {
      this.request = b;
      this.parent = a;
      this.packageMetaInfo = c;
      this.isLoaded = this.isInstrumented = !1;
    }
    Object.defineProperty(b.prototype, "version", {get:function() {
      return f.isDefined(this.packageMetaInfo) ? this.packageMetaInfo.version : d.cInvalidVersionString;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(b.prototype, "packageJsonPath", {get:function() {
      return f.isDefined(this.packageMetaInfo) ? this.packageMetaInfo.packageRoot : void 0;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(b.prototype, "packageName", {get:function() {
      return f.isDefined(this.packageMetaInfo) ? this.packageMetaInfo.name : void 0;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(b.prototype, "parentFilePath", {get:function() {
      return f.hasProperty(this.parent, "id") ? this.parent.id : void 0;
    }, enumerable:!0, configurable:!0});
    return b;
  }();
  b.ModuleRegistryEntry = p;
  g = function() {
    function b() {
      this.loadedModuleCount = 0;
      this.loadedModuleMap = {};
    }
    b.prototype.lookup = function(b) {
      var a = this.loadedModuleMap[b.resolvedModulePath];
      if (f.isUndefined(a)) {
        var c = this.determinePackageMetaInfo(b), a = new p(b.request, b.parent, c);
        this.loadedModuleMap[b.resolvedModulePath] = a;
        f.isUndefined(q) && (q = new m.default("ModuleRegistry"), q.addToDebugLogDomain("ModuleLoad"));
        q.isDebugEnabled && h.Logger.debug("ModuleRegistry: added #" + this.loadedModuleCount + " " + b.request + ": pmi=" + c + ", resolved=" + b.resolvedModulePath);
        ++this.loadedModuleCount;
      }
      return a;
    };
    b.prototype.determinePackageMetaInfo = function(b) {
      var a = k.default.getInstance().getAssociatedSensors(b), c;
      f.isDefined(a) && a.some(function(a) {
        c = a.determinePackageMetaInfo(b);
        return f.isDefined(c);
      });
      f.isUndefined(c) && (c = d.PackageRegistry.determinePackageMetaInfo(b));
      return c;
    };
    return b;
  }();
  b.ModuleRegistry = new g;
});
z("src/lib/ModuleLoadContext", "require exports module src/lib/Debug src/lib/Agent src/lib/DebugLoggingEntity src/lib/util/CoreUtil src/lib/util/RuntimeUtil src/lib/ModuleRegistry src/lib/modules/SensorManager".split(" "), function(g, b, f, d, h, m, k, q, p, c) {
  Object.defineProperty(b, "__esModule", {value:!0});
  b.ModuleRegistryEntry = p.ModuleRegistryEntry;
  var n, a = {"implicit:process":process, "implicit:global":global, "implicit:Promise":k.isDefined(global.Promise) ? global : void 0};
  g = function() {
    function b(c, d, e, f, g, h) {
      this.request = c;
      this.parent = d;
      this.isMain = e;
      this.moduleType = f;
      this.resolvedModulePath = g;
      this.thisContext = h;
      this.theModuleExports = b.cNoExports;
      1 === this.moduleType && (this.theModuleExports = a[c]);
      this.moduleInfo = p.ModuleRegistry.lookup(this);
    }
    b.create = function(c, d, e, g) {
      var l, p = c;
      if (q.isNodeCoreModule(c)) {
        l = 0;
      } else {
        if (a.hasOwnProperty(c)) {
          l = 1;
        } else {
          try {
            p = f._resolveFilename(c, d), l = b.isInternalModuleRequestString(c) ? 2 : 3;
          } catch (y) {
          }
        }
      }
      if (k.isUndefined(l)) {
        k.isUndefined(n) && (n = new m.default("ModuleLoadContext"), n.addToDebugLogDomain("ModuleLoad")), n.isDebugEnabled && h.Logger.debug("unable to resolve module " + c);
      } else {
        return k.isDefined(l) ? new b(c, d, e, l, p, g) : void 0;
      }
    };
    Object.defineProperty(b.prototype, "isImplicitModule", {get:function() {
      return 1 === this.moduleType;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(b.prototype, "isNodeCoreModule", {get:function() {
      return 0 === this.moduleType;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(b.prototype, "isExternalModule", {get:function() {
      return 3 === this.moduleType;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(b.prototype, "isInternalModule", {get:function() {
      return 2 === this.moduleType;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(b.prototype, "isModuleAcquired", {get:function() {
      return this.theModuleExports !== b.cNoExports;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(b.prototype, "moduleExports", {get:function() {
      this.load();
      return this.theModuleExports;
    }, set:function(a) {
      this.theModuleExports = a;
      var b = this.moduleCacheEntry;
      k.isDefined(b) && (b.exports = a);
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(b.prototype, "moduleCacheEntry", {get:function() {
      return f._cache[this.resolvedModulePath];
    }, enumerable:!0, configurable:!0});
    b.prototype.load = function() {
      this.theModuleExports === b.cNoExports && (this.theModuleExports = c.default.getInstance().loadModule(this.thisContext, this.request, this.parent, this.isMain), this.moduleInfo.isLoaded = !0);
    };
    b.prototype.matchRequest = function(a) {
      return b.compareRequestString(this.request, a);
    };
    b.prototype.toString = function(a) {
      void 0 === a && (a = !1);
      return a ? this.request + "(" + this.resolvedModulePath + ")" : this.request;
    };
    b.isInternalModuleRequestString = function(a) {
      return /^[\/\\.]|([a-zA-Z]:)/.test(a);
    };
    b.getRequestStringComparer = function() {
      function a(a, b) {
        return a === b;
      }
      function b(a, b) {
        return a.toLowerCase() === b.toLowerCase();
      }
      var c;
      switch(process.platform) {
        case "win32":
          c = b;
          break;
        case "linux":
          c = a;
          break;
        default:
          d.fail("missing operating system specific adaptation for request string normalization"), c = a;
      }
      return c;
    };
    return b;
  }();
  g.cNoExports = {cNoExports:!0};
  g.compareRequestString = g.getRequestStringComparer();
  b.ModuleLoadContext = g;
});
z("src/lib/PackageRegistry", "require exports path fs src/lib/util/CoreUtil src/lib/util/RuntimeUtil src/lib/Agent src/lib/DebugLoggingEntity".split(" "), function(g, b, f, d, h, m, k, q) {
  function p() {
    h.isUndefined(n) && (n = new q.default("PackageRegistry"), n.addToDebugLogDomain("ModuleLoad"));
    return n.isDebugEnabled;
  }
  Object.defineProperty(b, "__esModule", {value:!0});
  b.cInvalidVersionString = "0.0.0";
  var c = function() {
    function a(a, b, c) {
      this.name = a;
      this.version = b;
      this.packageRoot = c;
    }
    a.prototype.toString = function() {
      return this.name + "@" + this.version;
    };
    return a;
  }();
  b.PackageMetaInfo = c;
  var n;
  g = function() {
    function a() {
      this.cNodeModulePathFragment = f.sep + "node_modules" + f.sep;
      this.packageRootCache = {};
      this.builtinPackageCache = {};
      this.packageMetaInfoList = [];
    }
    a.prototype.determinePackageMetaInfo = function(a) {
      var b;
      if (2 === a.moduleType || 3 === a.moduleType) {
        b = this.lookup(a.resolvedModulePath);
      } else {
        if (0 === a.moduleType || 1 === a.moduleType) {
          b = this.getBuiltinPackage(a.request);
        }
      }
      return b;
    };
    a.prototype.lookup = function(a) {
      a = f.dirname(a);
      m.hasCaseInsensitiveFilePaths() && (a = a.toLowerCase());
      for (var d = a.lastIndexOf(this.cNodeModulePathFragment), d = 0 <= d ? d + this.cNodeModulePathFragment.length : f.dirname(a).length, e, g = [], k;!(a.length <= d && k !== a);) {
        if (this.packageRootCache.hasOwnProperty(a)) {
          e = this.packageRootCache[a];
          break;
        } else {
          if (g.push(a), k = f.join(a, "package.json"), k = this.tryReadPackageJson(k), h.isDefined(k)) {
            e = h.isDefined(k.name) ? k.name : f.basename(a);
            d = h.isDefined(k.version) ? k.version : b.cInvalidVersionString;
            e = new c(e, d, a);
            this.addNewPackage(e);
            break;
          }
        }
        k = a;
        a = f.dirname(a);
      }
      this.associateLocationsWithPackage(e, g);
      return e;
    };
    Object.defineProperty(a.prototype, "packageList", {get:function() {
      return this.packageMetaInfoList;
    }, enumerable:!0, configurable:!0});
    a.prototype.tryReadPackageJson = function(a) {
      var b;
      try {
        var c = d.readFileSync(a), e = h.stripByteOrderMark(c.toString("utf-8"));
        b = JSON.parse(e);
        p() && k.Logger.debug('tryReadPackageJson: read "' + a + '"');
      } catch (w) {
        p() && k.Logger.debug('tryReadPackageJson: failed to read "' + a + '"');
      }
      return b;
    };
    a.prototype.addNewPackage = function(a) {
      this.packageMetaInfoList.push(a);
      p() && k.Logger.debug("Adding package #" + this.packageMetaInfoList.length + ' "' + a + '" -> ' + a.packageRoot);
    };
    a.prototype.associateLocationsWithPackage = function(a, b) {
      var c = this;
      b.forEach(function(b) {
        return c.packageRootCache[b] = a;
      });
      p() && 0 < b.length && k.Logger.debug("PackageRegistry.packageFileCache.length=" + Object.getOwnPropertyNames(this.packageRootCache).length);
    };
    a.prototype.getBuiltinPackage = function(a) {
      var b = this.builtinPackageCache[a];
      h.isUndefined(b) && (b = new c(a, process.version), this.builtinPackageCache[a] = b);
      return b;
    };
    return a;
  }();
  b.PackageRegistry = new g;
});
z("src/lib/modules/PackageListReporter", "require exports src/lib/Agent src/lib/PackageRegistry src/lib/DebugLoggingEntity src/lib/util/CoreUtil".split(" "), function(g, b, f, d, h, m) {
  Object.defineProperty(b, "__esModule", {value:!0});
  g = function(b) {
    function g() {
      var d = b.call(this, "PackageListReporterModule") || this;
      d.name = "PackageListReporterModule";
      d.addToDebugLogDomain("ModuleLoad");
      return d;
    }
    u(g, b);
    g.prototype.onInit = function() {
      this.startTimer(1E4);
    };
    g.prototype.onLifeCycleStateChanged = function() {
      f.Agent.lifeCycleState === f.LifeCycleState.ShuttingDown && m.isDefined(this.timer) && m.isDefined(this.timer) && (clearTimeout(this.timer), this.timer = void 0);
    };
    g.onPeriodicTimer = function(b) {
      if (f.Agent.active && f.Agent.nativeAgent) {
        try {
          b.isDebugEnabled && f.Logger.debug("updating package list: " + d.PackageRegistry.packageList.join(",")), f.Agent.nativeAgent.reportPackageList(d.PackageRegistry.packageList), b.startTimer(6E5);
        } catch (c) {
          f.Logger.info("Exception while sending module information: " + c);
        }
      }
    };
    g.prototype.startTimer = function(b) {
      this.timer = setTimeout(g.onPeriodicTimer, b, this);
      this.timer.unref();
    };
    return g;
  }(h.default);
  b.PackageListReporterModule = g;
});
z("src/lib/Blacklist", ["require", "exports", "src/lib/Configuration", "src/lib/RunTimeProperty", "src/lib/Logger"], function(g, b, f, d, h) {
  Object.defineProperty(b, "__esModule", {value:!0});
  var m = ["grunt", "gulp", "node-gyp", "npm"], k = ["atom-package-manager", "forever", "localtunnel-server"];
  b.isBlacklisted = function() {
    var b = new d.StringOption("ScriptBlacklist"), g = new d.StringOption("AppBlacklist"), c = /\s*,\s*/, n = m;
    "" !== b.value && (n = b.value.split(c), h.info("Scripts blacklist: " + b.value));
    b = k;
    "" !== g.value && (b = g.value.split(c), h.info("App blacklist: " + g.value));
    return g = (g = -1 !== n.indexOf(f.Configuration.scriptName)) || -1 !== b.indexOf(f.Configuration.appName);
  };
});
z("src/lib/sensors/PredefinedSensors", ["require", "exports"], function(g, b) {
  Object.defineProperty(b, "__esModule", {value:!0});
  g = {capture:!0, enabled:!0, entrypoint:!1};
  b.default = {"Node.Core.FileSystem":g, "Node.Core.Process":g, "Node.Core.DNS":g, "Node.Core.Timers":g, "Node.Core.Events":g, "Node.Core.Promise":g, "Node.Core.Crypto":g, "Node.ModuleSubstitutions":g, "Node.DisabledModules":g, "Node.AutoSensor":g, "Node.WebRequest":{capture:!0, enabled:!0, entrypoint:!0}, "Node.ClientWebRequest":g, "Node.MongoDb.ContextPassing":g, "Node.MongoDb":g, "Node.Redis":g, "Node.Memcached":g, "Node.Express":g, "Node.FinalHandler":g, "Node.Restify":g, "Node.SQLite3":g};
});
z("src/lib/sensors/PredefinedInstrumentationRules", ["require", "exports", "src/lib/Patch", "src/lib/sensors/InstrumentationRule"], function(g, b, f, d) {
  Object.defineProperty(b, "__esModule", {value:!0});
  b.default = {"Node.Core.FileSystem":{type:"ContextPassing", associatedModules:{fs:{asyncTrackingMode:f.AsyncTrackingMode.CallbackLast, instrumentationStrategy:d.Strategy.Startup, rules:[{methodFilter:"rename ftruncate truncate chown fchown chmod fchmod stat lstat fstat link symlink readlink realpath unlink rmdir mkdir readdir close open utimes futimes fsync write read readFile writeFile appendFile exists fdatasync".split(" ")}, {methodFilter:"access", nodeVersionCriteria:">=0.12.0"}, {methodFilter:["lchmod", 
  "lchown", "mkdtemp"], ignoreMissing:!0}]}}}, "Node.Core.Process":{type:"ContextPassing", associatedModules:{"implicit:process":{asyncTrackingMode:f.AsyncTrackingMode.CallbackLast, instrumentationStrategy:d.Strategy.Startup, rules:[{methodFilter:["nextTick"]}, {methodFilter:["_nextDomainTick"], ignoreMissing:!0}]}}}, "Node.Core.DNS":{type:"ContextPassing", associatedModules:{dns:{asyncTrackingMode:f.AsyncTrackingMode.CallbackLast, rules:[{methodFilter:"lookup resolve resolve4 resolve6 resolveMx resolveTxt resolveSrv resolveNs resolveCname resolveNaptr reverse".split(" ")}, 
  {methodFilter:["lookupService", "resolveSoa"], nodeVersionCriteria:">=0.12.0"}, {methodFilter:"resolvePtr", nodeVersionCriteria:">=6.0.0"}]}}}, "Node.Core.Timers":{type:"TimerSensor", associatedModules:{timers:{instrumentationStrategy:d.Strategy.Startup}}}, "Node.Core.Events":{type:"EventEmitterContextPassing", associatedModules:{events:{instrumentationStrategy:d.Strategy.Startup}}}, "Node.Core.Promise":{type:"Promise", associatedModules:{"implicit:Promise":{instrumentationStrategy:d.Strategy.Startup}, 
  bluebird:{instrumentationStrategy:d.Strategy.OnRequest}, "promise-polyfill":{instrumentationStrategy:d.Strategy.OnRequest}, q:{instrumentationStrategy:d.Strategy.OnRequest}, "es6-promise":{instrumentationStrategy:d.Strategy.OnRequest}, mpromise:{instrumentationStrategy:d.Strategy.OnRequest}}}, "Node.Core.Crypto":{type:"CryptoSensor", associatedModules:{crypto:{asyncTrackingMode:f.AsyncTrackingMode.CallbackLast, rules:[{methodFilter:["pbkdf2", "randomBytes"]}, {methodFilter:["randomFill"], ignoreMissing:!0}]}}}, 
  "Node.ModuleSubstitutions":{type:"ModuleSubstitution", associatedModules:{"graceful-fs":{moduleVersionCriteria:"<4.0.0"}}}, "Node.DisabledModules":{type:"DisabledModules", associatedModules:{newrelic:{}, appdynamics:{}, longjohn:{}}}, "Node.AutoSensor":{type:"AutoSensor", associatedModules:{}}, "Node.WebRequest":{type:"WebRequest", associatedModules:{http:{instrumentationStrategy:d.Strategy.Startup}, https:{instrumentationStrategy:d.Strategy.Startup}}}, "Node.ClientWebRequest":{type:"ClientWebRequest", 
  associatedModules:{http:{instrumentationStrategy:d.Strategy.Startup}, https:{instrumentationStrategy:d.Strategy.Startup}}}, "Node.MongoDb":{type:"MongoDb", associatedModules:{mongodb:{asyncTrackingMode:f.AsyncTrackingMode.CallbackLastOrPromise, instrumentationStrategy:d.Strategy.OnRequest, rules:[{subComponentName:"Collection", patchPrototype:!0, ignoreMissing:!1, apiRealm:"mongodb", rules:[{moduleVersionCriteria:">=1.4.0", methodFilter:"insert remove rename save update distinct count drop findAndModify findAndRemove findOne createIndex ensureIndex listIndexes indexInformation dropIndex dropAllIndexes reIndex mapReduce group options isCapped indexExists indexes aggregate stats".split(" ")}, 
  {moduleVersionCriteria:">=2.0.0", methodFilter:"bulkWrite createIndexes deleteMany deleteOne dropIndexes findOneAndDelete findOneAndReplace findOneAndUpdate insertMany insertOne replaceOne updateMany updateOne".split(" ")}]}, {subComponentName:"Db", patchPrototype:!0, ignoreMissing:!1, apiRealm:"mongodb", rules:[{moduleVersionCriteria:">=1.4.0", methodFilter:"db addUser admin authenticate collectionNames collections eval dereference logout removeUser createCollection command dropCollection renameCollection createIndex ensureIndex cursorInfo dropIndex reIndex indexInformation dropDatabase stats".split(" ")}, 
  {moduleVersionCriteria:">=2.0.0", methodFilter:["executeDbAdminCommand"]}]}]}}}, "Node.MongoDb.ContextPassing":{type:"ContextPassing", associatedModules:{mongodb:{asyncTrackingMode:f.AsyncTrackingMode.CallbackLastOrPromise, instrumentationStrategy:d.Strategy.OnRequest, rules:[{subComponentName:"Db", patchPrototype:!0, ignoreMissing:!1, rules:[{methodFilter:["open", "close"]}]}]}}}, "Node.Redis":{type:"Redis", associatedModules:{redis:{instrumentationStrategy:d.Strategy.OnRequest}}}, "Node.Memcached":{type:"Memcached", 
  associatedModules:{memcached:{instrumentationStrategy:d.Strategy.OnRequest}}}, "Node.Express":{type:"Express", associatedModules:{express:{instrumentationStrategy:d.Strategy.OnRequest}}}, "Node.FinalHandler":{type:"FinalHandler", associatedModules:{finalhandler:{instrumentationStrategy:d.Strategy.OnRequest}}}, "Node.Restify":{type:"Restify", associatedModules:{restify:{instrumentationStrategy:d.Strategy.OnRequest}}}, "Node.SQLite3":{type:"ContextPassing", associatedModules:{sqlite3:{asyncTrackingMode:f.AsyncTrackingMode.CallbackLast, 
  instrumentationStrategy:d.Strategy.OnRequest, rules:[{subComponentName:"Database", patchPrototype:!0, ignoreMissing:!1, rules:[{methodFilter:"close exec wait loadExtension serialize parallelize configure".split(" ")}]}, {subComponentName:"Statement", patchPrototype:!0, ignoreMissing:!1, rules:[{methodFilter:"bind get run all each reset finalize".split(" ")}]}]}}}};
});
z("src/lib/AsyncHook", "require exports semver src/lib/SubPathContext src/lib/Agent src/lib/util/CoreUtil src/lib/util/ErrorUtil src/lib/RunTimeProperty src/lib/sensors/AutoSensor".split(" "), function(g, b, f, d, h, m, k, q, p) {
  Object.defineProperty(b, "__esModule", {value:!0});
  g = function() {
    function b() {
      this.externEnabled = !1;
      this.enabledFlag = new q.BooleanProperty("AsyncHookEnabled");
      this.contextPassingEnabledFlag = new q.BooleanProperty("AsyncHookContextPassingEnabled");
      this.autoSamplingEnabledFlag = new q.BooleanProperty("AsyncHookAutoSamplingEnabled");
      this.uidMap = {};
    }
    Object.defineProperty(b.prototype, "active", {get:function() {
      return m.isDefined(this.genuineSetupHooks);
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(b.prototype, "featureEnabled", {get:function() {
      return f.satisfies(process.version, ">=6.0.0") && this.enabledFlag.value;
    }, enumerable:!0, configurable:!0});
    b.prototype.setup = function() {
      if (!this.active && this.featureEnabled) {
        var a = process.binding("async_wrap");
        m.isUndefined(a) ? h.Logger.info("could not bind async_wrap") : (this.patch(a), c.setAgentHooks(), this.genuineEnable());
      }
    };
    b.prototype.patch = function(a) {
      try {
        this.genuineEnable = a.enable;
        this.genuineDisable = a.disable;
        this.genuineSetupHooks = a.setupHooks;
        delete a.enable;
        delete a.disable;
        delete a.setupHooks;
        var c = function() {
        };
        Object.defineProperties(a, {enable:{get:function() {
          return b.enableSubstitute;
        }, set:c, configurable:!1, enumerable:!0}, disable:{get:function() {
          return b.disableSubstitute;
        }, set:c, configurable:!1, enumerable:!0}, setupHooks:{get:function() {
          return b.setupHooksSubstitute;
        }, set:c, configurable:!1, enumerable:!0}});
      } catch (l) {
        h.Logger.info("failed to install async_wrap interceptors: " + k.verboseExceptionObject(l));
      }
    };
    b.prototype.shouldInstallHook = function(a) {
      return this.contextPassingEnabledFlag.value || m.hasProperty(this.externHooks, a);
    };
    b.prototype.setAgentHooks = function() {
      var a = {init:b.onAsyncInit};
      this.shouldInstallHook("pre") && (a.pre = b.onAsyncPre);
      this.shouldInstallHook("post") && (a.post = b.onAsyncPost);
      this.shouldInstallHook("destroy") && (a.destroy = b.onAsyncDestroy);
      this.genuineSetupHooks(a);
    };
    b.enableSubstitute = function() {
      c.externEnabled = m.isDefined(c.externHooks);
    };
    b.disableSubstitute = function() {
      c.externEnabled = !1;
    };
    b.setupHooksSubstitute = function(a) {
      c.externHooks = a;
      c.externEnabled && (c.externEnabled = m.isDefined(a));
      c.setAgentHooks();
    };
    b.onAsyncInit = function(a, e, f, g) {
      c.autoSamplingEnabledFlag.value && p.addSampleAsyncHook(b.onAsyncInit);
      if (c.contextPassingEnabledFlag.value) {
        var h = d.SubPathContext.getActiveContext();
        m.isDefined(h) && (c.uidMap[a] = h);
      }
      c.externEnabled && m.isDefined(c.externHooks) && (h = c.externHooks.init, m.isDefined(h) && h.call(this, a, e, f, g));
    };
    b.onAsyncPre = function(a) {
      if (c.contextPassingEnabledFlag.value) {
        var b = c.uidMap[a];
        m.isDefined(b) && b.activate();
      }
      c.externEnabled && m.isDefined(c.externHooks) && (b = c.externHooks.pre, m.isDefined(b) && b.call(this, a));
    };
    b.onAsyncPost = function(a, b) {
      if (c.contextPassingEnabledFlag.value) {
        var d = c.uidMap[a];
        m.isDefined(d) && d.deactivate();
      }
      c.externEnabled && m.isDefined(c.externHooks) && (d = c.externHooks.post, m.isDefined(d) && d.call(this, a, b));
    };
    b.onAsyncDestroy = function(a) {
      c.contextPassingEnabledFlag.value && m.isDefined(c.uidMap[a]) && delete c.uidMap[a];
      if (c.externEnabled && m.isDefined(c.externHooks)) {
        var b = c.externHooks.destroy;
        m.isDefined(b) && b.call(this, a);
      }
    };
    return b;
  }();
  b.AsyncHookController = g;
  var c = new g;
  b.default = c;
});
z("src/lib/agentapi/AgentApi", "require exports src/lib/CallbackWrappingHelper src/lib/SubPathContext src/lib/util/CoreUtil src/lib/util/ErrorUtil".split(" "), function(g, b, f, d, h, m) {
  function k(b) {
    if (!h.isFunction(b)) {
      return b;
    }
    var g = b;
    try {
      var c = d.SubPathContext.getActiveContext();
      h.isDefined(c) && (c.didInitiateAsyncOp = !0, g = f.CallbackWrappingHelper.wrapCallbackContextPassing({spc:c, origCb:b}));
    } catch (n) {
      m.logAgentException(n);
    }
    return g;
  }
  Object.defineProperty(b, "__esModule", {value:!0});
  b.getAgentApi = function(b) {
    var d;
    switch(b) {
      case 1:
        d = {passContext:k};
    }
    return d;
  };
});
z("src/lib/Agent", "require exports path src/lib/Dispatcher src/lib/Configuration src/lib/Logger src/lib/NiLoader src/lib/modules/MemMetrics src/lib/modules/PackageListReporter src/lib/RunTimeProperty src/lib/RunTimeProperty src/lib/util/CoreUtil src/lib/Blacklist src/lib/modules/SensorManager src/lib/sensors/PredefinedSensors src/lib/sensors/PredefinedInstrumentationRules src/lib/AsyncHook src/lib/agentapi/AgentApi".split(" "), function(g, b, f, d, h, m, k, q, p, c, n, a, e, l, v, t, w, x) {
  Object.defineProperty(b, "__esModule", {value:!0});
  b.Configuration = h.Configuration;
  b.Logger = m;
  var r;
  (function(a) {
    a[a.PreInitial = 0] = "PreInitial";
    a[a.Initializing = 1] = "Initializing";
    a[a.Running = 2] = "Running";
    a[a.ShuttingDown = 3] = "ShuttingDown";
    a[a.PostMortem = 4] = "PostMortem";
    a[a.Undefined = 5] = "Undefined";
  })(r = b.LifeCycleState || (b.LifeCycleState = {}));
  var y = function() {
    function b() {
      var b = this;
      this.active = !0;
      this.blacklisted = !1;
      this.onConfigUpdate = function(c) {
        try {
          var d = JSON.parse(c);
          a.isDefined(d.agentActive) && b.active !== d.agentActive && (b.active = d.agentActive, b.agentClassDebugFlag.value && m.debug("agent active changed to '" + b.active + "'"));
          if (a.isDefined(d.rtc)) {
            if (a.isDefined(d.rtc.booleanMap)) {
              for (var e in d.rtc.booleanMap) {
                var f = "true" === String(d.rtc.booleanMap[e]);
                d.rtc.booleanMap[e] = f;
              }
            }
            if (a.isDefined(d.rtc.longMap)) {
              for (e in d.rtc.longMap) {
                f = +d.rtc.longMap[e], d.rtc.longMap[e] = f;
              }
            }
          }
          b.niConfig = d;
          b.configUpdateListeners.dispatch(d);
        } catch (L) {
          m.warning("onconfigUpdate: caught exception " + L);
        }
      };
      this.agentClassDebugFlag = new n.BooleanProperty("AgentClass", !1);
      this.niAgent = void 0;
      this.agentModules = [];
      this.theLifeCycleState = r.PreInitial;
      this.configUpdateListeners = new d.Dispatcher("onConfigUpdate");
      this.lifeCycleStateChangeListeners = new d.Dispatcher("onLifeCycleStateChanged");
    }
    b.prototype.initialize = function(a, b) {
      var c = !1;
      try {
        this.moveToState(r.PreInitial);
        this.moveToState(r.Initializing);
        n.parseForRunTimeProperties(a);
        var d = new k.NiLoader;
        this.ni = d.load(a);
        if (!this.ni) {
          return m.control.mode = m.Mode.MANAGED, m.severe("failed to load native agent"), !1;
        }
        this.niAgent = new this.ni.NiAgent(this.stringifyOptions(a), f.basename(d.moduleFileName), this.onConfigUpdate, b);
        h.Configuration.appName = a.agentName || this.niAgent.processGroupName;
        m.control.mode = m.Mode.NATIVE;
        this.niAgent.initialize({nodeVersion:process.version});
        this.blacklisted = e.isBlacklisted();
        this.blacklisted || (this.initAgentModules(), l.default.getInstance().startModuleLoadIntercept(), w.default.setup(), global.__DT_GETAGENTAPI__ = x.getAgentApi);
      } catch (H) {
        c = !0, m.control.mode !== m.Mode.NATIVE && (m.control.mode = m.Mode.MANAGED), m.severe("agent initialization failed: " + H);
      } finally {
        this.logStartupInfo(), this.moveToState(c ? r.Undefined : r.Running);
      }
      return !c;
    };
    Object.defineProperty(b.prototype, "lifeCycleState", {get:function() {
      return this.theLifeCycleState;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(b.prototype, "nativeAgent", {get:function() {
      return this.niAgent;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(b.prototype, "correlation", {get:function() {
      return this.niAgent.correlation;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(b.prototype, "uemSensor", {get:function() {
      return this.niAgent.uemSensor;
    }, enumerable:!0, configurable:!0});
    b.prototype.register = function(a) {
      this.addListener(a);
      this.agentModules.push(a);
    };
    b.prototype.addListener = function(a) {
      a.onConfigUpdate && this.configUpdateListeners.addListener(a);
      a.onLifeCycleStateChanged && this.lifeCycleStateChangeListeners.addListener(a);
    };
    b.prototype.shutdown = function() {
      var a = !1;
      try {
        this.moveToState(r.ShuttingDown), this.niAgent && this.niAgent.shutdown();
      } catch (B) {
        a = !0, m.severe("exception during shutdown" + B);
      } finally {
        this.moveToState(a ? r.Undefined : r.PostMortem);
      }
    };
    Object.defineProperty(b.prototype, "configuration", {get:function() {
      return this.niConfig;
    }, enumerable:!0, configurable:!0});
    b.prototype.logStartupInfo = function() {
      var b;
      try {
        b = g(f.join(h.Configuration.rootFolder, "package.json")).agentversion;
      } catch (B) {
        b = "not specified";
      }
      m.info("Platform .................... " + process.platform);
      m.info("Arch ........................ " + process.arch);
      m.info("Node version ................ " + process.version);
      m.info("Agent version ............... " + b);
      m.info("Script ...................... " + h.Configuration.scriptName);
      m.info("AppName ..................... " + h.Configuration.appName);
      m.info("Blacklisted ................. " + this.blacklisted);
      m.info("MainModule .................. " + a.getOptionalPropertyValue(process.mainModule, "filename", "undefined"));
      m.info("require.main................. " + a.getOptionalPropertyValue(g.main, "filename", "undefined"));
    };
    b.prototype.initAgentModules = function() {
      for (var a = 0, b = this.agentModules;a < b.length;a++) {
        var c = b[a];
        c.onInit && (this.agentClassDebugFlag.value && m.debug("initializing agent module '%s'", c.name), c.onInit());
      }
    };
    b.prototype.moveToState = function(a) {
      var b = !1, c = this.lifeCycleState;
      if (c !== a) {
        switch(a) {
          case r.PreInitial:
            b = c === r.PreInitial;
            break;
          case r.Initializing:
            b = c === r.PreInitial;
            break;
          case r.Running:
            b = c === r.Initializing;
            break;
          case r.ShuttingDown:
            b = c === r.Running;
            break;
          case r.PostMortem:
            b = c === r.ShuttingDown;
            break;
          case r.Undefined:
            b = !0;
        }
        if (!b) {
          throw Error("cannot transit from state " + r[c] + " to " + r[a]);
        }
        this.agentClassDebugFlag.value && m.debug("transit from " + r[c] + " to " + r[a]);
        this.theLifeCycleState = a;
        this.lifeCycleStateChangeListeners.dispatch(c);
      }
    };
    b.prototype.stringifyOptions = function(a) {
      return Object.keys(a).map(function(b) {
        var c = a[b];
        switch(c) {
          case null:
          case void 0:
          case "":
            return m.info("Ignoring empty option '" + b + "'"), "";
          default:
            return b + "=" + c;
        }
      }).join();
    };
    return b;
  }();
  b.NodeAgent = y;
  b.Agent = new y;
  b.Agent.register(new q.MemMetricsModule);
  b.Agent.register(new p.PackageListReporterModule);
  b.Agent.register(new l.default(v.default, t.default));
  b.Agent.addListener(new c.PropertyRtcUpdateListener);
});
z("src/lib/SupportAlertBuilder", "require exports src/lib/Configuration module src/lib/util/CoreUtil src/lib/Agent src/lib/RunTimeProperty".split(" "), function(g, b, f, d, h, m, k) {
  Object.defineProperty(b, "__esModule", {value:!0});
  var q = ".*listen EADDRINUSE.*;.*ENOENT: no such file or directory.*;.*EFAULT: bad address in system call argument.*;.*ENOMEM.*;.*SyntaxError: Unexpected token.*;.*duplicate key error.*;.*Cannot find module.*".split(";");
  g = function() {
    function b() {
      this.debugSuppressAllAlerts = (new k.BooleanProperty("SuppressSupportAlerts", !1)).value;
      this.agentMaxPosOnStack = (new k.NumberOption("AgentMaxPosOnStack", 3)).value;
      this.ignoreErrorsFilter = [];
      for (var b = 0;b < q.length;b++) {
        var d = q[b];
        this.ignoreErrorsFilter.push(new RegExp(d));
      }
      d = (new k.StringOption("NonRelevantErrors", "")).value;
      if (0 < d.length) {
        for (var b = 0, a = d.split("|");b < a.length;b++) {
          d = a[b], this.ignoreErrorsFilter.push(new RegExp(d));
        }
      }
    }
    b.handleUncaughtException = function(c, d) {
      (new b).generateSupportAlert(c, d);
    };
    b._testonly_createInstance = function() {
      return new b;
    };
    b.prototype.generateSupportAlert = function(b, f) {
      var a = b.stack ? b.stack : "";
      b = !this.debugSuppressAllAlerts && this.isErrorMessageRelevant(b.message) && this.isAgentOnTopOfStack(a);
      m.Agent.nativeAgent.generateSupportAlert(a, process.execPath, process.version, b, f, d._cache);
      return b;
    };
    b.prototype.isErrorMessageRelevant = function(b) {
      return b && (b = h.match(this.ignoreErrorsFilter, b)) && 0 < b.toString().length ? !1 : !0;
    };
    b.prototype.isAgentOnTopOfStack = function(b) {
      b = b.split("\n");
      for (var c = 1;c < b.length && c <= this.agentMaxPosOnStack;c++) {
        if (-1 !== b[c].indexOf(f.Configuration.rootFolder)) {
          return c <= this.agentMaxPosOnStack;
        }
      }
      return !1;
    };
    return b;
  }();
  b.default = g;
});
z("src/lib/UncaughtException", "require exports fs src/lib/Logger src/lib/SupportAlertBuilder src/lib/util/RuntimeUtil src/lib/ErrorObject".split(" "), function(g, b, f, d, h, m, k) {
  function q(a) {
    var b = 1 === process.listeners("uncaughtException").length && !q.listener;
    try {
      if (d.info("Uncaught Exception - will exit: " + b), a && a instanceof Error) {
        var c = void 0;
        b && (c = k.getCallStack(a));
        d.info(a.stack || "Unknown uncaughtException " + a);
        h.default.handleUncaughtException(a, b);
        if (b) {
          if (0 < c.length) {
            try {
              var g = c[0], n = g.getFileName() || "";
              console.error(n + ":" + g.getLineNumber());
              var p = f.readFileSync(n, "utf8").split(/\r?\n/);
              console.error(p[g.getLineNumber() - 1]);
              console.error(Array(g.getColumnNumber()).join(" ") + "^");
            } catch (r) {
              console.error("");
            }
            console.error(a.toString());
            for (g = 0;g < c.length;g++) {
              var x = c[g], n = x.getFileName() || "";
              m.isAgentFile(n) || console.error("    at " + x.toString());
            }
          } else {
            console.error(a.stack || "Unknown uncaughtException");
          }
        }
      } else {
        d.info("Unknown uncaughtException: error object is " + a), b && console.error("Unknown uncaughtException: error object is " + a);
      }
    } finally {
      q.listener && q.listener(a), b && process.exit(1);
    }
  }
  function p() {
    var a = process.listeners("uncaughtException");
    if (0 < a.length && (d.info("uncaughtException listeners installed: " + a.length), 1 === a.length)) {
      var a = a[0], b = a.listener;
      b ? d.info("original listener <" + a.name + "> has already a listener attached: " + b.name) : (process.removeListener("uncaughtException", a), q.listener = a);
    }
    process.on("uncaughtException", q);
  }
  function c(a, b) {
    "uncaughtException" === a && d.info("new uncaught exception listener: " + b.name);
  }
  function n(a, b) {
    "uncaughtException" === a && (d.info("removed uncaughtException listener: " + b.name), b === q.listener && (delete q.listener, p()));
  }
  Object.defineProperty(b, "__esModule", {value:!0});
  b.installListener = function() {
    p();
    process.on("newListener", c);
    process.on("removeListener", n);
  };
});
z("src/nodejsagent", "require exports util semver src/lib/Agent src/lib/UncaughtException src/lib/util/RuntimeUtil".split(" "), function(g, b, f, d, h, m, k) {
  function q() {
    h.Configuration && (h.Logger && h.Logger.info("Application [ " + h.Configuration.appName + " ] end"), h.Agent.shutdown());
  }
  function p() {
    1 === process.listeners("SIGINT").length ? process.exit(k.isWindows() ? 3221225786 : 130) : h.Logger.info("ingoring SIGINT as other listeners are present");
  }
  function c() {
    1 === process.listeners("SIGTERM").length ? process.exit(143) : h.Logger.info("ingoring SIGTERM as other listeners are present");
  }
  function n() {
    1 === process.listeners("SIGBREAK").length ? process.exit(3221225786) : h.Logger.info("ingoring SIGBREAK as other listeners are present");
  }
  return function(a, b) {
    a = a || {};
    if (global.__DT_AGENT_INJECTED__) {
      console.error("Agent already injected - exiting");
    } else {
      if (global.__DT_AGENT_INJECTED__ = module.__DT_NODE_OBFUSCATED_AGENT__ ? 2 : 1, d.satisfies(process.version, "0.10 || 0.12 || 4 || 5 || 6 || 7 || 8")) {
        if (h.Logger.control.updateLogLevelFrom(a), a = h.Configuration.processOptions(a), h.Agent.initialize(a, b)) {
          process.on("exit", q);
          process.on("SIGINT", p);
          if (k.isWindows()) {
            process.on("SIGBREAK", n);
          } else {
            process.on("SIGTERM", c);
          }
          h.Agent.blacklisted || m.installListener();
          k.isDebuggerActive() || h.Logger.info("Agent options: " + f.inspect(a).replace(/(\r\n|\n|\r)/gm, ""));
          h.Logger.info("Starting application: " + h.Configuration.appName);
        }
      } else {
        console.error("Node.js version " + process.version + " is not supported. Agent disabled.");
      }
    }
  };
});

})();


//# sourceMappingURL=nodejsagent.js.map
