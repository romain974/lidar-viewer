/*! lidar-viewer v1.0.0 — visionneuse de nuages de points LiDAR HD (IGN, open data)
 *  Utilisation libre, y compris commerciale, à condition de conserver le crédit
 *  vers simulateur-toiture.fr affiché par la visionneuse.
 *  Dépôt : https://github.com/romain974/lidar-viewer
 *  Doc   : https://www.simulateur-toiture.fr/lidar-viewer
 */
var LidarViewer = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });
  var __commonJS = (cb, mod) => function __require2() {
    try {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e) {
      throw mod = 0, e;
    }
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key2 of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key2) && key2 !== except)
          __defProp(to, key2, { get: () => from[key2], enumerable: !(desc = __getOwnPropDesc(from, key2)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/cross-fetch/dist/browser-ponyfill.js
  var require_browser_ponyfill = __commonJS({
    "node_modules/cross-fetch/dist/browser-ponyfill.js"(exports, module) {
      var __global__ = typeof globalThis !== "undefined" && globalThis || typeof self !== "undefined" && self || typeof global !== "undefined" && global;
      var __globalThis__ = (function() {
        function F() {
          this.fetch = false;
          this.DOMException = __global__.DOMException;
        }
        F.prototype = __global__;
        return new F();
      })();
      (function(globalThis2) {
        var irrelevant = (function(exports2) {
          var g = typeof globalThis2 !== "undefined" && globalThis2 || typeof self !== "undefined" && self || // eslint-disable-next-line no-undef
          typeof global !== "undefined" && global || {};
          var support = {
            searchParams: "URLSearchParams" in g,
            iterable: "Symbol" in g && "iterator" in Symbol,
            blob: "FileReader" in g && "Blob" in g && (function() {
              try {
                new Blob();
                return true;
              } catch (e) {
                return false;
              }
            })(),
            formData: "FormData" in g,
            arrayBuffer: "ArrayBuffer" in g
          };
          function isDataView(obj) {
            return obj && DataView.prototype.isPrototypeOf(obj);
          }
          if (support.arrayBuffer) {
            var viewClasses = [
              "[object Int8Array]",
              "[object Uint8Array]",
              "[object Uint8ClampedArray]",
              "[object Int16Array]",
              "[object Uint16Array]",
              "[object Int32Array]",
              "[object Uint32Array]",
              "[object Float32Array]",
              "[object Float64Array]"
            ];
            var isArrayBufferView = ArrayBuffer.isView || function(obj) {
              return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
            };
          }
          function normalizeName(name) {
            if (typeof name !== "string") {
              name = String(name);
            }
            if (/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(name) || name === "") {
              throw new TypeError('Invalid character in header field name: "' + name + '"');
            }
            return name.toLowerCase();
          }
          function normalizeValue(value) {
            if (typeof value !== "string") {
              value = String(value);
            }
            return value;
          }
          function iteratorFor(items) {
            var iterator = {
              next: function() {
                var value = items.shift();
                return { done: value === void 0, value };
              }
            };
            if (support.iterable) {
              iterator[Symbol.iterator] = function() {
                return iterator;
              };
            }
            return iterator;
          }
          function Headers(headers) {
            this.map = {};
            if (headers instanceof Headers) {
              headers.forEach(function(value, name) {
                this.append(name, value);
              }, this);
            } else if (Array.isArray(headers)) {
              headers.forEach(function(header) {
                if (header.length != 2) {
                  throw new TypeError("Headers constructor: expected name/value pair to be length 2, found" + header.length);
                }
                this.append(header[0], header[1]);
              }, this);
            } else if (headers) {
              Object.getOwnPropertyNames(headers).forEach(function(name) {
                this.append(name, headers[name]);
              }, this);
            }
          }
          Headers.prototype.append = function(name, value) {
            name = normalizeName(name);
            value = normalizeValue(value);
            var oldValue = this.map[name];
            this.map[name] = oldValue ? oldValue + ", " + value : value;
          };
          Headers.prototype["delete"] = function(name) {
            delete this.map[normalizeName(name)];
          };
          Headers.prototype.get = function(name) {
            name = normalizeName(name);
            return this.has(name) ? this.map[name] : null;
          };
          Headers.prototype.has = function(name) {
            return this.map.hasOwnProperty(normalizeName(name));
          };
          Headers.prototype.set = function(name, value) {
            this.map[normalizeName(name)] = normalizeValue(value);
          };
          Headers.prototype.forEach = function(callback, thisArg) {
            for (var name in this.map) {
              if (this.map.hasOwnProperty(name)) {
                callback.call(thisArg, this.map[name], name, this);
              }
            }
          };
          Headers.prototype.keys = function() {
            var items = [];
            this.forEach(function(value, name) {
              items.push(name);
            });
            return iteratorFor(items);
          };
          Headers.prototype.values = function() {
            var items = [];
            this.forEach(function(value) {
              items.push(value);
            });
            return iteratorFor(items);
          };
          Headers.prototype.entries = function() {
            var items = [];
            this.forEach(function(value, name) {
              items.push([name, value]);
            });
            return iteratorFor(items);
          };
          if (support.iterable) {
            Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
          }
          function consumed(body) {
            if (body._noBody) return;
            if (body.bodyUsed) {
              return Promise.reject(new TypeError("Already read"));
            }
            body.bodyUsed = true;
          }
          function fileReaderReady(reader) {
            return new Promise(function(resolve, reject) {
              reader.onload = function() {
                resolve(reader.result);
              };
              reader.onerror = function() {
                reject(reader.error);
              };
            });
          }
          function readBlobAsArrayBuffer(blob) {
            var reader = new FileReader();
            var promise = fileReaderReady(reader);
            reader.readAsArrayBuffer(blob);
            return promise;
          }
          function readBlobAsText(blob) {
            var reader = new FileReader();
            var promise = fileReaderReady(reader);
            var match2 = /charset=([A-Za-z0-9_-]+)/.exec(blob.type);
            var encoding = match2 ? match2[1] : "utf-8";
            reader.readAsText(blob, encoding);
            return promise;
          }
          function readArrayBufferAsText(buf) {
            var view = new Uint8Array(buf);
            var chars = new Array(view.length);
            for (var i = 0; i < view.length; i++) {
              chars[i] = String.fromCharCode(view[i]);
            }
            return chars.join("");
          }
          function bufferClone(buf) {
            if (buf.slice) {
              return buf.slice(0);
            } else {
              var view = new Uint8Array(buf.byteLength);
              view.set(new Uint8Array(buf));
              return view.buffer;
            }
          }
          function Body() {
            this.bodyUsed = false;
            this._initBody = function(body) {
              this.bodyUsed = this.bodyUsed;
              this._bodyInit = body;
              if (!body) {
                this._noBody = true;
                this._bodyText = "";
              } else if (typeof body === "string") {
                this._bodyText = body;
              } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
                this._bodyBlob = body;
              } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
                this._bodyFormData = body;
              } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
                this._bodyText = body.toString();
              } else if (support.arrayBuffer && support.blob && isDataView(body)) {
                this._bodyArrayBuffer = bufferClone(body.buffer);
                this._bodyInit = new Blob([this._bodyArrayBuffer]);
              } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
                this._bodyArrayBuffer = bufferClone(body);
              } else {
                this._bodyText = body = Object.prototype.toString.call(body);
              }
              if (!this.headers.get("content-type")) {
                if (typeof body === "string") {
                  this.headers.set("content-type", "text/plain;charset=UTF-8");
                } else if (this._bodyBlob && this._bodyBlob.type) {
                  this.headers.set("content-type", this._bodyBlob.type);
                } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
                  this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
                }
              }
            };
            if (support.blob) {
              this.blob = function() {
                var rejected = consumed(this);
                if (rejected) {
                  return rejected;
                }
                if (this._bodyBlob) {
                  return Promise.resolve(this._bodyBlob);
                } else if (this._bodyArrayBuffer) {
                  return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                } else if (this._bodyFormData) {
                  throw new Error("could not read FormData body as blob");
                } else {
                  return Promise.resolve(new Blob([this._bodyText]));
                }
              };
            }
            this.arrayBuffer = function() {
              if (this._bodyArrayBuffer) {
                var isConsumed = consumed(this);
                if (isConsumed) {
                  return isConsumed;
                } else if (ArrayBuffer.isView(this._bodyArrayBuffer)) {
                  return Promise.resolve(
                    this._bodyArrayBuffer.buffer.slice(
                      this._bodyArrayBuffer.byteOffset,
                      this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength
                    )
                  );
                } else {
                  return Promise.resolve(this._bodyArrayBuffer);
                }
              } else if (support.blob) {
                return this.blob().then(readBlobAsArrayBuffer);
              } else {
                throw new Error("could not read as ArrayBuffer");
              }
            };
            this.text = function() {
              var rejected = consumed(this);
              if (rejected) {
                return rejected;
              }
              if (this._bodyBlob) {
                return readBlobAsText(this._bodyBlob);
              } else if (this._bodyArrayBuffer) {
                return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
              } else if (this._bodyFormData) {
                throw new Error("could not read FormData body as text");
              } else {
                return Promise.resolve(this._bodyText);
              }
            };
            if (support.formData) {
              this.formData = function() {
                return this.text().then(decode2);
              };
            }
            this.json = function() {
              return this.text().then(JSON.parse);
            };
            return this;
          }
          var methods = ["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT", "TRACE"];
          function normalizeMethod(method) {
            var upcased = method.toUpperCase();
            return methods.indexOf(upcased) > -1 ? upcased : method;
          }
          function Request(input, options) {
            if (!(this instanceof Request)) {
              throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
            }
            options = options || {};
            var body = options.body;
            if (input instanceof Request) {
              if (input.bodyUsed) {
                throw new TypeError("Already read");
              }
              this.url = input.url;
              this.credentials = input.credentials;
              if (!options.headers) {
                this.headers = new Headers(input.headers);
              }
              this.method = input.method;
              this.mode = input.mode;
              this.signal = input.signal;
              if (!body && input._bodyInit != null) {
                body = input._bodyInit;
                input.bodyUsed = true;
              }
            } else {
              this.url = String(input);
            }
            this.credentials = options.credentials || this.credentials || "same-origin";
            if (options.headers || !this.headers) {
              this.headers = new Headers(options.headers);
            }
            this.method = normalizeMethod(options.method || this.method || "GET");
            this.mode = options.mode || this.mode || null;
            this.signal = options.signal || this.signal || (function() {
              if ("AbortController" in g) {
                var ctrl = new AbortController();
                return ctrl.signal;
              }
            })();
            this.referrer = null;
            if ((this.method === "GET" || this.method === "HEAD") && body) {
              throw new TypeError("Body not allowed for GET or HEAD requests");
            }
            this._initBody(body);
            if (this.method === "GET" || this.method === "HEAD") {
              if (options.cache === "no-store" || options.cache === "no-cache") {
                var reParamSearch = /([?&])_=[^&]*/;
                if (reParamSearch.test(this.url)) {
                  this.url = this.url.replace(reParamSearch, "$1_=" + (/* @__PURE__ */ new Date()).getTime());
                } else {
                  var reQueryString = /\?/;
                  this.url += (reQueryString.test(this.url) ? "&" : "?") + "_=" + (/* @__PURE__ */ new Date()).getTime();
                }
              }
            }
          }
          Request.prototype.clone = function() {
            return new Request(this, { body: this._bodyInit });
          };
          function decode2(body) {
            var form = new FormData();
            body.trim().split("&").forEach(function(bytes) {
              if (bytes) {
                var split = bytes.split("=");
                var name = split.shift().replace(/\+/g, " ");
                var value = split.join("=").replace(/\+/g, " ");
                form.append(decodeURIComponent(name), decodeURIComponent(value));
              }
            });
            return form;
          }
          function parseHeaders(rawHeaders) {
            var headers = new Headers();
            var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, " ");
            preProcessedHeaders.split("\r").map(function(header) {
              return header.indexOf("\n") === 0 ? header.substr(1, header.length) : header;
            }).forEach(function(line) {
              var parts = line.split(":");
              var key2 = parts.shift().trim();
              if (key2) {
                var value = parts.join(":").trim();
                try {
                  headers.append(key2, value);
                } catch (error) {
                  console.warn("Response " + error.message);
                }
              }
            });
            return headers;
          }
          Body.call(Request.prototype);
          function Response(bodyInit, options) {
            if (!(this instanceof Response)) {
              throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
            }
            if (!options) {
              options = {};
            }
            this.type = "default";
            this.status = options.status === void 0 ? 200 : options.status;
            if (this.status < 200 || this.status > 599) {
              throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");
            }
            this.ok = this.status >= 200 && this.status < 300;
            this.statusText = options.statusText === void 0 ? "" : "" + options.statusText;
            this.headers = new Headers(options.headers);
            this.url = options.url || "";
            this._initBody(bodyInit);
          }
          Body.call(Response.prototype);
          Response.prototype.clone = function() {
            return new Response(this._bodyInit, {
              status: this.status,
              statusText: this.statusText,
              headers: new Headers(this.headers),
              url: this.url
            });
          };
          Response.error = function() {
            var response = new Response(null, { status: 200, statusText: "" });
            response.ok = false;
            response.status = 0;
            response.type = "error";
            return response;
          };
          var redirectStatuses = [301, 302, 303, 307, 308];
          Response.redirect = function(url, status) {
            if (redirectStatuses.indexOf(status) === -1) {
              throw new RangeError("Invalid status code");
            }
            return new Response(null, { status, headers: { location: url } });
          };
          exports2.DOMException = g.DOMException;
          try {
            new exports2.DOMException();
          } catch (err) {
            exports2.DOMException = function(message, name) {
              this.message = message;
              this.name = name;
              var error = Error(message);
              this.stack = error.stack;
            };
            exports2.DOMException.prototype = Object.create(Error.prototype);
            exports2.DOMException.prototype.constructor = exports2.DOMException;
          }
          function fetch4(input, init37) {
            return new Promise(function(resolve, reject) {
              var request = new Request(input, init37);
              if (request.signal && request.signal.aborted) {
                return reject(new exports2.DOMException("Aborted", "AbortError"));
              }
              var xhr = new XMLHttpRequest();
              function abortXhr() {
                xhr.abort();
              }
              xhr.onload = function() {
                var options = {
                  statusText: xhr.statusText,
                  headers: parseHeaders(xhr.getAllResponseHeaders() || "")
                };
                if (request.url.indexOf("file://") === 0 && (xhr.status < 200 || xhr.status > 599)) {
                  options.status = 200;
                } else {
                  options.status = xhr.status;
                }
                options.url = "responseURL" in xhr ? xhr.responseURL : options.headers.get("X-Request-URL");
                var body = "response" in xhr ? xhr.response : xhr.responseText;
                setTimeout(function() {
                  resolve(new Response(body, options));
                }, 0);
              };
              xhr.onerror = function() {
                setTimeout(function() {
                  reject(new TypeError("Network request failed"));
                }, 0);
              };
              xhr.ontimeout = function() {
                setTimeout(function() {
                  reject(new TypeError("Network request timed out"));
                }, 0);
              };
              xhr.onabort = function() {
                setTimeout(function() {
                  reject(new exports2.DOMException("Aborted", "AbortError"));
                }, 0);
              };
              function fixUrl(url) {
                try {
                  return url === "" && g.location.href ? g.location.href : url;
                } catch (e) {
                  return url;
                }
              }
              xhr.open(request.method, fixUrl(request.url), true);
              if (request.credentials === "include") {
                xhr.withCredentials = true;
              } else if (request.credentials === "omit") {
                xhr.withCredentials = false;
              }
              if ("responseType" in xhr) {
                if (support.blob) {
                  xhr.responseType = "blob";
                } else if (support.arrayBuffer) {
                  xhr.responseType = "arraybuffer";
                }
              }
              if (init37 && typeof init37.headers === "object" && !(init37.headers instanceof Headers || g.Headers && init37.headers instanceof g.Headers)) {
                var names38 = [];
                Object.getOwnPropertyNames(init37.headers).forEach(function(name) {
                  names38.push(normalizeName(name));
                  xhr.setRequestHeader(name, normalizeValue(init37.headers[name]));
                });
                request.headers.forEach(function(value, name) {
                  if (names38.indexOf(name) === -1) {
                    xhr.setRequestHeader(name, value);
                  }
                });
              } else {
                request.headers.forEach(function(value, name) {
                  xhr.setRequestHeader(name, value);
                });
              }
              if (request.signal) {
                request.signal.addEventListener("abort", abortXhr);
                xhr.onreadystatechange = function() {
                  if (xhr.readyState === 4) {
                    request.signal.removeEventListener("abort", abortXhr);
                  }
                };
              }
              xhr.send(typeof request._bodyInit === "undefined" ? null : request._bodyInit);
            });
          }
          fetch4.polyfill = true;
          if (!g.fetch) {
            g.fetch = fetch4;
            g.Headers = Headers;
            g.Request = Request;
            g.Response = Response;
          }
          exports2.Headers = Headers;
          exports2.Request = Request;
          exports2.Response = Response;
          exports2.fetch = fetch4;
          return exports2;
        })({});
      })(__globalThis__);
      __globalThis__.fetch.ponyfill = true;
      delete __globalThis__.fetch.polyfill;
      var ctx = __global__.fetch ? __global__ : __globalThis__;
      exports = ctx.fetch;
      exports.default = ctx.fetch;
      exports.fetch = ctx.fetch;
      exports.Headers = ctx.Headers;
      exports.Request = ctx.Request;
      exports.Response = ctx.Response;
      module.exports = exports;
    }
  });

  // (disabled):fs
  var require_fs = __commonJS({
    "(disabled):fs"() {
    }
  });

  // node_modules/laz-perf/lib/web/laz-perf.js
  var require_laz_perf = __commonJS({
    "node_modules/laz-perf/lib/web/laz-perf.js"(exports, module) {
      var createLazPerf3 = (() => {
        var _scriptDir = typeof document !== "undefined" && document.currentScript ? document.currentScript.src : void 0;
        return (function(createLazPerf4) {
          createLazPerf4 = createLazPerf4 || {};
          var Module = typeof createLazPerf4 != "undefined" ? createLazPerf4 : {};
          var readyPromiseResolve, readyPromiseReject;
          Module["ready"] = new Promise(function(resolve, reject) {
            readyPromiseResolve = resolve;
            readyPromiseReject = reject;
          });
          ["_main", "___getTypeName", "__embind_initialize_bindings", "_fflush", "onRuntimeInitialized"].forEach((prop) => {
            if (!Object.getOwnPropertyDescriptor(Module["ready"], prop)) {
              Object.defineProperty(Module["ready"], prop, { get: () => abort("You are getting " + prop + " on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js"), set: () => abort("You are setting " + prop + " on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js") });
            }
          });
          var moduleOverrides = Object.assign({}, Module);
          var arguments_ = [];
          var thisProgram = "./this.program";
          var quit_ = (status, toThrow) => {
            throw toThrow;
          };
          var ENVIRONMENT_IS_WEB = true;
          var ENVIRONMENT_IS_WORKER = false;
          var ENVIRONMENT_IS_NODE = false;
          var ENVIRONMENT_IS_SHELL = false;
          if (Module["ENVIRONMENT"]) {
            throw new Error("Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)");
          }
          var scriptDirectory = "";
          function locateFile(path) {
            if (Module["locateFile"]) {
              return Module["locateFile"](path, scriptDirectory);
            }
            return scriptDirectory + path;
          }
          var read_, readAsync, readBinary, setWindowTitle;
          function logExceptionOnExit(e) {
            if (e instanceof ExitStatus) return;
            let toLog = e;
            if (e && typeof e == "object" && e.stack) {
              toLog = [e, e.stack];
            }
            err("exiting due to exception: " + toLog);
          }
          if (ENVIRONMENT_IS_SHELL) {
            if (typeof process == "object" && typeof __require === "function" || typeof window == "object" || typeof importScripts == "function") throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
            if (typeof read != "undefined") {
              read_ = function shell_read(f) {
                return read(f);
              };
            }
            readBinary = function readBinary2(f) {
              let data;
              if (typeof readbuffer == "function") {
                return new Uint8Array(readbuffer(f));
              }
              data = read(f, "binary");
              assert(typeof data == "object");
              return data;
            };
            readAsync = function readAsync2(f, onload, onerror) {
              setTimeout(() => onload(readBinary(f)), 0);
            };
            if (typeof scriptArgs != "undefined") {
              arguments_ = scriptArgs;
            } else if (typeof arguments != "undefined") {
              arguments_ = arguments;
            }
            if (typeof quit == "function") {
              quit_ = (status, toThrow) => {
                logExceptionOnExit(toThrow);
                quit(status);
              };
            }
            if (typeof print != "undefined") {
              if (typeof console == "undefined") console = {};
              console.log = print;
              console.warn = console.error = typeof printErr != "undefined" ? printErr : print;
            }
          } else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
            if (ENVIRONMENT_IS_WORKER) {
              scriptDirectory = self.location.href;
            } else if (typeof document != "undefined" && document.currentScript) {
              scriptDirectory = document.currentScript.src;
            }
            if (_scriptDir) {
              scriptDirectory = _scriptDir;
            }
            if (scriptDirectory.indexOf("blob:") !== 0) {
              scriptDirectory = scriptDirectory.substr(0, scriptDirectory.replace(/[?#].*/, "").lastIndexOf("/") + 1);
            } else {
              scriptDirectory = "";
            }
            if (!(typeof window == "object" || typeof importScripts == "function")) throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
            {
              read_ = (url) => {
                var xhr = new XMLHttpRequest();
                xhr.open("GET", url, false);
                xhr.send(null);
                return xhr.responseText;
              };
              if (ENVIRONMENT_IS_WORKER) {
                readBinary = (url) => {
                  var xhr = new XMLHttpRequest();
                  xhr.open("GET", url, false);
                  xhr.responseType = "arraybuffer";
                  xhr.send(null);
                  return new Uint8Array(xhr.response);
                };
              }
              readAsync = (url, onload, onerror) => {
                var xhr = new XMLHttpRequest();
                xhr.open("GET", url, true);
                xhr.responseType = "arraybuffer";
                xhr.onload = () => {
                  if (xhr.status == 200 || xhr.status == 0 && xhr.response) {
                    onload(xhr.response);
                    return;
                  }
                  onerror();
                };
                xhr.onerror = onerror;
                xhr.send(null);
              };
            }
            setWindowTitle = (title) => document.title = title;
          } else {
            throw new Error("environment detection error");
          }
          var out = Module["print"] || console.log.bind(console);
          var err = Module["printErr"] || console.warn.bind(console);
          Object.assign(Module, moduleOverrides);
          moduleOverrides = null;
          checkIncomingModuleAPI();
          if (Module["arguments"]) arguments_ = Module["arguments"];
          legacyModuleProp("arguments", "arguments_");
          if (Module["thisProgram"]) thisProgram = Module["thisProgram"];
          legacyModuleProp("thisProgram", "thisProgram");
          if (Module["quit"]) quit_ = Module["quit"];
          legacyModuleProp("quit", "quit_");
          assert(typeof Module["memoryInitializerPrefixURL"] == "undefined", "Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead");
          assert(typeof Module["pthreadMainPrefixURL"] == "undefined", "Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead");
          assert(typeof Module["cdInitializerPrefixURL"] == "undefined", "Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead");
          assert(typeof Module["filePackagePrefixURL"] == "undefined", "Module.filePackagePrefixURL option was removed, use Module.locateFile instead");
          assert(typeof Module["read"] == "undefined", "Module.read option was removed (modify read_ in JS)");
          assert(typeof Module["readAsync"] == "undefined", "Module.readAsync option was removed (modify readAsync in JS)");
          assert(typeof Module["readBinary"] == "undefined", "Module.readBinary option was removed (modify readBinary in JS)");
          assert(typeof Module["setWindowTitle"] == "undefined", "Module.setWindowTitle option was removed (modify setWindowTitle in JS)");
          assert(typeof Module["TOTAL_MEMORY"] == "undefined", "Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY");
          legacyModuleProp("read", "read_");
          legacyModuleProp("readAsync", "readAsync");
          legacyModuleProp("readBinary", "readBinary");
          legacyModuleProp("setWindowTitle", "setWindowTitle");
          assert(!ENVIRONMENT_IS_WORKER, "worker environment detected but not enabled at build time.  Add 'worker' to `-sENVIRONMENT` to enable.");
          assert(!ENVIRONMENT_IS_NODE, "node environment detected but not enabled at build time.  Add 'node' to `-sENVIRONMENT` to enable.");
          assert(!ENVIRONMENT_IS_SHELL, "shell environment detected but not enabled at build time.  Add 'shell' to `-sENVIRONMENT` to enable.");
          var POINTER_SIZE = 4;
          function legacyModuleProp(prop, newName) {
            if (!Object.getOwnPropertyDescriptor(Module, prop)) {
              Object.defineProperty(Module, prop, { configurable: true, get: function() {
                abort("Module." + prop + " has been replaced with plain " + newName + " (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
              } });
            }
          }
          function ignoredModuleProp(prop) {
            if (Object.getOwnPropertyDescriptor(Module, prop)) {
              abort("`Module." + prop + "` was supplied but `" + prop + "` not included in INCOMING_MODULE_JS_API");
            }
          }
          function isExportedByForceFilesystem(name) {
            return name === "FS_createPath" || name === "FS_createDataFile" || name === "FS_createPreloadedFile" || name === "FS_unlink" || name === "addRunDependency" || name === "FS_createLazyFile" || name === "FS_createDevice" || name === "removeRunDependency";
          }
          function missingLibrarySymbol(sym) {
            if (typeof globalThis !== "undefined" && !Object.getOwnPropertyDescriptor(globalThis, sym)) {
              Object.defineProperty(globalThis, sym, { configurable: true, get: function() {
                var msg = "`" + sym + "` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line";
                if (isExportedByForceFilesystem(sym)) {
                  msg += ". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you";
                }
                warnOnce(msg);
                return void 0;
              } });
            }
          }
          function unexportedRuntimeSymbol(sym) {
            if (!Object.getOwnPropertyDescriptor(Module, sym)) {
              Object.defineProperty(Module, sym, { configurable: true, get: function() {
                var msg = "'" + sym + "' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)";
                if (isExportedByForceFilesystem(sym)) {
                  msg += ". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you";
                }
                abort(msg);
              } });
            }
          }
          var wasmBinary;
          if (Module["wasmBinary"]) wasmBinary = Module["wasmBinary"];
          legacyModuleProp("wasmBinary", "wasmBinary");
          var noExitRuntime = Module["noExitRuntime"] || true;
          legacyModuleProp("noExitRuntime", "noExitRuntime");
          if (typeof WebAssembly != "object") {
            abort("no native wasm support detected");
          }
          var wasmMemory;
          var ABORT = false;
          var EXITSTATUS;
          function assert(condition, text) {
            if (!condition) {
              abort("Assertion failed" + (text ? ": " + text : ""));
            }
          }
          var UTF8Decoder = typeof TextDecoder != "undefined" ? new TextDecoder("utf8") : void 0;
          function UTF8ArrayToString(heapOrArray, idx, maxBytesToRead) {
            var endIdx = idx + maxBytesToRead;
            var endPtr = idx;
            while (heapOrArray[endPtr] && !(endPtr >= endIdx)) ++endPtr;
            if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) {
              return UTF8Decoder.decode(heapOrArray.subarray(idx, endPtr));
            }
            var str = "";
            while (idx < endPtr) {
              var u0 = heapOrArray[idx++];
              if (!(u0 & 128)) {
                str += String.fromCharCode(u0);
                continue;
              }
              var u1 = heapOrArray[idx++] & 63;
              if ((u0 & 224) == 192) {
                str += String.fromCharCode((u0 & 31) << 6 | u1);
                continue;
              }
              var u2 = heapOrArray[idx++] & 63;
              if ((u0 & 240) == 224) {
                u0 = (u0 & 15) << 12 | u1 << 6 | u2;
              } else {
                if ((u0 & 248) != 240) warnOnce("Invalid UTF-8 leading byte 0x" + u0.toString(16) + " encountered when deserializing a UTF-8 string in wasm memory to a JS string!");
                u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | heapOrArray[idx++] & 63;
              }
              if (u0 < 65536) {
                str += String.fromCharCode(u0);
              } else {
                var ch = u0 - 65536;
                str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
              }
            }
            return str;
          }
          function UTF8ToString(ptr, maxBytesToRead) {
            return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : "";
          }
          function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
            if (!(maxBytesToWrite > 0)) return 0;
            var startIdx = outIdx;
            var endIdx = outIdx + maxBytesToWrite - 1;
            for (var i = 0; i < str.length; ++i) {
              var u = str.charCodeAt(i);
              if (u >= 55296 && u <= 57343) {
                var u1 = str.charCodeAt(++i);
                u = 65536 + ((u & 1023) << 10) | u1 & 1023;
              }
              if (u <= 127) {
                if (outIdx >= endIdx) break;
                heap[outIdx++] = u;
              } else if (u <= 2047) {
                if (outIdx + 1 >= endIdx) break;
                heap[outIdx++] = 192 | u >> 6;
                heap[outIdx++] = 128 | u & 63;
              } else if (u <= 65535) {
                if (outIdx + 2 >= endIdx) break;
                heap[outIdx++] = 224 | u >> 12;
                heap[outIdx++] = 128 | u >> 6 & 63;
                heap[outIdx++] = 128 | u & 63;
              } else {
                if (outIdx + 3 >= endIdx) break;
                if (u > 1114111) warnOnce("Invalid Unicode code point 0x" + u.toString(16) + " encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF).");
                heap[outIdx++] = 240 | u >> 18;
                heap[outIdx++] = 128 | u >> 12 & 63;
                heap[outIdx++] = 128 | u >> 6 & 63;
                heap[outIdx++] = 128 | u & 63;
              }
            }
            heap[outIdx] = 0;
            return outIdx - startIdx;
          }
          function stringToUTF8(str, outPtr, maxBytesToWrite) {
            assert(typeof maxBytesToWrite == "number", "stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!");
            return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
          }
          function lengthBytesUTF8(str) {
            var len = 0;
            for (var i = 0; i < str.length; ++i) {
              var c = str.charCodeAt(i);
              if (c <= 127) {
                len++;
              } else if (c <= 2047) {
                len += 2;
              } else if (c >= 55296 && c <= 57343) {
                len += 4;
                ++i;
              } else {
                len += 3;
              }
            }
            return len;
          }
          var buffer, HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;
          function updateGlobalBufferAndViews(buf) {
            buffer = buf;
            Module["HEAP8"] = HEAP8 = new Int8Array(buf);
            Module["HEAP16"] = HEAP16 = new Int16Array(buf);
            Module["HEAP32"] = HEAP32 = new Int32Array(buf);
            Module["HEAPU8"] = HEAPU8 = new Uint8Array(buf);
            Module["HEAPU16"] = HEAPU16 = new Uint16Array(buf);
            Module["HEAPU32"] = HEAPU32 = new Uint32Array(buf);
            Module["HEAPF32"] = HEAPF32 = new Float32Array(buf);
            Module["HEAPF64"] = HEAPF64 = new Float64Array(buf);
          }
          var TOTAL_STACK = 65536;
          if (Module["TOTAL_STACK"]) assert(TOTAL_STACK === Module["TOTAL_STACK"], "the stack size can no longer be determined at runtime");
          var INITIAL_MEMORY = Module["INITIAL_MEMORY"] || 262144;
          legacyModuleProp("INITIAL_MEMORY", "INITIAL_MEMORY");
          assert(INITIAL_MEMORY >= TOTAL_STACK, "INITIAL_MEMORY should be larger than TOTAL_STACK, was " + INITIAL_MEMORY + "! (TOTAL_STACK=" + TOTAL_STACK + ")");
          assert(typeof Int32Array != "undefined" && typeof Float64Array !== "undefined" && Int32Array.prototype.subarray != void 0 && Int32Array.prototype.set != void 0, "JS engine does not provide full typed array support");
          assert(!Module["wasmMemory"], "Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally");
          assert(INITIAL_MEMORY == 262144, "Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically");
          var wasmTable;
          function writeStackCookie() {
            var max = _emscripten_stack_get_end();
            assert((max & 3) == 0);
            HEAPU32[max >> 2] = 34821223;
            HEAPU32[max + 4 >> 2] = 2310721022;
            HEAPU32[0] = 1668509029;
          }
          function checkStackCookie() {
            if (ABORT) return;
            var max = _emscripten_stack_get_end();
            var cookie1 = HEAPU32[max >> 2];
            var cookie2 = HEAPU32[max + 4 >> 2];
            if (cookie1 != 34821223 || cookie2 != 2310721022) {
              abort("Stack overflow! Stack cookie has been overwritten at 0x" + max.toString(16) + ", expected hex dwords 0x89BACDFE and 0x2135467, but received 0x" + cookie2.toString(16) + " 0x" + cookie1.toString(16));
            }
            if (HEAPU32[0] !== 1668509029) abort("Runtime error: The application has corrupted its heap memory area (address zero)!");
          }
          (function() {
            var h16 = new Int16Array(1);
            var h8 = new Int8Array(h16.buffer);
            h16[0] = 25459;
            if (h8[0] !== 115 || h8[1] !== 99) throw "Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)";
          })();
          var __ATPRERUN__ = [];
          var __ATINIT__ = [];
          var __ATPOSTRUN__ = [];
          var runtimeInitialized = false;
          function preRun() {
            if (Module["preRun"]) {
              if (typeof Module["preRun"] == "function") Module["preRun"] = [Module["preRun"]];
              while (Module["preRun"].length) {
                addOnPreRun(Module["preRun"].shift());
              }
            }
            callRuntimeCallbacks(__ATPRERUN__);
          }
          function initRuntime() {
            assert(!runtimeInitialized);
            runtimeInitialized = true;
            checkStackCookie();
            callRuntimeCallbacks(__ATINIT__);
          }
          function postRun() {
            checkStackCookie();
            if (Module["postRun"]) {
              if (typeof Module["postRun"] == "function") Module["postRun"] = [Module["postRun"]];
              while (Module["postRun"].length) {
                addOnPostRun(Module["postRun"].shift());
              }
            }
            callRuntimeCallbacks(__ATPOSTRUN__);
          }
          function addOnPreRun(cb) {
            __ATPRERUN__.unshift(cb);
          }
          function addOnInit(cb) {
            __ATINIT__.unshift(cb);
          }
          function addOnPostRun(cb) {
            __ATPOSTRUN__.unshift(cb);
          }
          assert(Math.imul, "This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
          assert(Math.fround, "This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
          assert(Math.clz32, "This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
          assert(Math.trunc, "This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
          var runDependencies = 0;
          var runDependencyWatcher = null;
          var dependenciesFulfilled = null;
          var runDependencyTracking = {};
          function addRunDependency(id) {
            runDependencies++;
            if (Module["monitorRunDependencies"]) {
              Module["monitorRunDependencies"](runDependencies);
            }
            if (id) {
              assert(!runDependencyTracking[id]);
              runDependencyTracking[id] = 1;
              if (runDependencyWatcher === null && typeof setInterval != "undefined") {
                runDependencyWatcher = setInterval(function() {
                  if (ABORT) {
                    clearInterval(runDependencyWatcher);
                    runDependencyWatcher = null;
                    return;
                  }
                  var shown = false;
                  for (var dep in runDependencyTracking) {
                    if (!shown) {
                      shown = true;
                      err("still waiting on run dependencies:");
                    }
                    err("dependency: " + dep);
                  }
                  if (shown) {
                    err("(end of list)");
                  }
                }, 1e4);
              }
            } else {
              err("warning: run dependency added without ID");
            }
          }
          function removeRunDependency(id) {
            runDependencies--;
            if (Module["monitorRunDependencies"]) {
              Module["monitorRunDependencies"](runDependencies);
            }
            if (id) {
              assert(runDependencyTracking[id]);
              delete runDependencyTracking[id];
            } else {
              err("warning: run dependency removed without ID");
            }
            if (runDependencies == 0) {
              if (runDependencyWatcher !== null) {
                clearInterval(runDependencyWatcher);
                runDependencyWatcher = null;
              }
              if (dependenciesFulfilled) {
                var callback = dependenciesFulfilled;
                dependenciesFulfilled = null;
                callback();
              }
            }
          }
          function abort(what) {
            {
              if (Module["onAbort"]) {
                Module["onAbort"](what);
              }
            }
            what = "Aborted(" + what + ")";
            err(what);
            ABORT = true;
            EXITSTATUS = 1;
            var e = new WebAssembly.RuntimeError(what);
            readyPromiseReject(e);
            throw e;
          }
          var FS2 = { error: function() {
            abort("Filesystem support (FS) was not included. The problem is that you are using files from JS, but files were not used from C/C++, so filesystem support was not auto-included. You can force-include filesystem support with -sFORCE_FILESYSTEM");
          }, init: function() {
            FS2.error();
          }, createDataFile: function() {
            FS2.error();
          }, createPreloadedFile: function() {
            FS2.error();
          }, createLazyFile: function() {
            FS2.error();
          }, open: function() {
            FS2.error();
          }, mkdev: function() {
            FS2.error();
          }, registerDevice: function() {
            FS2.error();
          }, analyzePath: function() {
            FS2.error();
          }, loadFilesFromDB: function() {
            FS2.error();
          }, ErrnoError: function ErrnoError() {
            FS2.error();
          } };
          Module["FS_createDataFile"] = FS2.createDataFile;
          Module["FS_createPreloadedFile"] = FS2.createPreloadedFile;
          var dataURIPrefix = "data:application/octet-stream;base64,";
          function isDataURI(filename) {
            return filename.startsWith(dataURIPrefix);
          }
          function isFileURI(filename) {
            return filename.startsWith("file://");
          }
          function createExportWrapper(name, fixedasm) {
            return function() {
              var displayName = name;
              var asm2 = fixedasm;
              if (!fixedasm) {
                asm2 = Module["asm"];
              }
              assert(runtimeInitialized, "native function `" + displayName + "` called before runtime initialization");
              if (!asm2[name]) {
                assert(asm2[name], "exported native function `" + displayName + "` not found");
              }
              return asm2[name].apply(null, arguments);
            };
          }
          var wasmBinaryFile;
          wasmBinaryFile = "laz-perf.wasm";
          if (!isDataURI(wasmBinaryFile)) {
            wasmBinaryFile = locateFile(wasmBinaryFile);
          }
          function getBinary(file) {
            try {
              if (file == wasmBinaryFile && wasmBinary) {
                return new Uint8Array(wasmBinary);
              }
              if (readBinary) {
                return readBinary(file);
              }
              throw "both async and sync fetching of the wasm failed";
            } catch (err2) {
              abort(err2);
            }
          }
          function getBinaryPromise() {
            if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
              if (typeof fetch == "function") {
                return fetch(wasmBinaryFile, { credentials: "same-origin" }).then(function(response) {
                  if (!response["ok"]) {
                    throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
                  }
                  return response["arrayBuffer"]();
                }).catch(function() {
                  return getBinary(wasmBinaryFile);
                });
              }
            }
            return Promise.resolve().then(function() {
              return getBinary(wasmBinaryFile);
            });
          }
          function createWasm() {
            var info = { "env": asmLibraryArg, "wasi_snapshot_preview1": asmLibraryArg };
            function receiveInstance(instance, module2) {
              var exports3 = instance.exports;
              Module["asm"] = exports3;
              wasmMemory = Module["asm"]["memory"];
              assert(wasmMemory, "memory not found in wasm exports");
              updateGlobalBufferAndViews(wasmMemory.buffer);
              wasmTable = Module["asm"]["__indirect_function_table"];
              assert(wasmTable, "table not found in wasm exports");
              addOnInit(Module["asm"]["__wasm_call_ctors"]);
              removeRunDependency("wasm-instantiate");
            }
            addRunDependency("wasm-instantiate");
            var trueModule = Module;
            function receiveInstantiationResult(result) {
              assert(Module === trueModule, "the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?");
              trueModule = null;
              receiveInstance(result["instance"]);
            }
            function instantiateArrayBuffer(receiver) {
              return getBinaryPromise().then(function(binary) {
                return WebAssembly.instantiate(binary, info);
              }).then(function(instance) {
                return instance;
              }).then(receiver, function(reason) {
                err("failed to asynchronously prepare wasm: " + reason);
                if (isFileURI(wasmBinaryFile)) {
                  err("warning: Loading from a file URI (" + wasmBinaryFile + ") is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing");
                }
                abort(reason);
              });
            }
            function instantiateAsync() {
              if (!wasmBinary && typeof WebAssembly.instantiateStreaming == "function" && !isDataURI(wasmBinaryFile) && typeof fetch == "function") {
                return fetch(wasmBinaryFile, { credentials: "same-origin" }).then(function(response) {
                  var result = WebAssembly.instantiateStreaming(response, info);
                  return result.then(receiveInstantiationResult, function(reason) {
                    err("wasm streaming compile failed: " + reason);
                    err("falling back to ArrayBuffer instantiation");
                    return instantiateArrayBuffer(receiveInstantiationResult);
                  });
                });
              } else {
                return instantiateArrayBuffer(receiveInstantiationResult);
              }
            }
            if (Module["instantiateWasm"]) {
              try {
                var exports2 = Module["instantiateWasm"](info, receiveInstance);
                return exports2;
              } catch (e) {
                err("Module.instantiateWasm callback failed with error: " + e);
                return false;
              }
            }
            instantiateAsync().catch(readyPromiseReject);
            return {};
          }
          var tempDouble;
          var tempI64;
          function ExitStatus(status) {
            this.name = "ExitStatus";
            this.message = "Program terminated with exit(" + status + ")";
            this.status = status;
          }
          function callRuntimeCallbacks(callbacks) {
            while (callbacks.length > 0) {
              callbacks.shift()(Module);
            }
          }
          function demangle(func) {
            warnOnce("warning: build with -sDEMANGLE_SUPPORT to link in libcxxabi demangling");
            return func;
          }
          function demangleAll(text) {
            var regex = /\b_Z[\w\d_]+/g;
            return text.replace(regex, function(x) {
              var y = demangle(x);
              return x === y ? x : y + " [" + x + "]";
            });
          }
          function jsStackTrace() {
            var error = new Error();
            if (!error.stack) {
              try {
                throw new Error();
              } catch (e) {
                error = e;
              }
              if (!error.stack) {
                return "(no stack trace available)";
              }
            }
            return error.stack.toString();
          }
          function warnOnce(text) {
            if (!warnOnce.shown) warnOnce.shown = {};
            if (!warnOnce.shown[text]) {
              warnOnce.shown[text] = 1;
              err(text);
            }
          }
          function writeArrayToMemory(array, buffer2) {
            assert(array.length >= 0, "writeArrayToMemory array must have a length (should be an array or typed array)");
            HEAP8.set(array, buffer2);
          }
          function ___cxa_allocate_exception(size) {
            return _malloc(size + 24) + 24;
          }
          function ExceptionInfo(excPtr) {
            this.excPtr = excPtr;
            this.ptr = excPtr - 24;
            this.set_type = function(type) {
              HEAPU32[this.ptr + 4 >> 2] = type;
            };
            this.get_type = function() {
              return HEAPU32[this.ptr + 4 >> 2];
            };
            this.set_destructor = function(destructor) {
              HEAPU32[this.ptr + 8 >> 2] = destructor;
            };
            this.get_destructor = function() {
              return HEAPU32[this.ptr + 8 >> 2];
            };
            this.set_refcount = function(refcount) {
              HEAP32[this.ptr >> 2] = refcount;
            };
            this.set_caught = function(caught) {
              caught = caught ? 1 : 0;
              HEAP8[this.ptr + 12 >> 0] = caught;
            };
            this.get_caught = function() {
              return HEAP8[this.ptr + 12 >> 0] != 0;
            };
            this.set_rethrown = function(rethrown) {
              rethrown = rethrown ? 1 : 0;
              HEAP8[this.ptr + 13 >> 0] = rethrown;
            };
            this.get_rethrown = function() {
              return HEAP8[this.ptr + 13 >> 0] != 0;
            };
            this.init = function(type, destructor) {
              this.set_adjusted_ptr(0);
              this.set_type(type);
              this.set_destructor(destructor);
              this.set_refcount(0);
              this.set_caught(false);
              this.set_rethrown(false);
            };
            this.add_ref = function() {
              var value = HEAP32[this.ptr >> 2];
              HEAP32[this.ptr >> 2] = value + 1;
            };
            this.release_ref = function() {
              var prev = HEAP32[this.ptr >> 2];
              HEAP32[this.ptr >> 2] = prev - 1;
              assert(prev > 0);
              return prev === 1;
            };
            this.set_adjusted_ptr = function(adjustedPtr) {
              HEAPU32[this.ptr + 16 >> 2] = adjustedPtr;
            };
            this.get_adjusted_ptr = function() {
              return HEAPU32[this.ptr + 16 >> 2];
            };
            this.get_exception_ptr = function() {
              var isPointer = ___cxa_is_pointer_type(this.get_type());
              if (isPointer) {
                return HEAPU32[this.excPtr >> 2];
              }
              var adjusted = this.get_adjusted_ptr();
              if (adjusted !== 0) return adjusted;
              return this.excPtr;
            };
          }
          var exceptionLast = 0;
          var uncaughtExceptionCount = 0;
          function ___cxa_throw(ptr, type, destructor) {
            var info = new ExceptionInfo(ptr);
            info.init(type, destructor);
            exceptionLast = ptr;
            uncaughtExceptionCount++;
            throw ptr + " - Exception catching is disabled, this exception cannot be caught. Compile with -sNO_DISABLE_EXCEPTION_CATCHING or -sEXCEPTION_CATCHING_ALLOWED=[..] to catch.";
          }
          function __embind_register_bigint(primitiveType, name, size, minRange, maxRange) {
          }
          function getShiftFromSize(size) {
            switch (size) {
              case 1:
                return 0;
              case 2:
                return 1;
              case 4:
                return 2;
              case 8:
                return 3;
              default:
                throw new TypeError("Unknown type size: " + size);
            }
          }
          function embind_init_charCodes() {
            var codes2 = new Array(256);
            for (var i = 0; i < 256; ++i) {
              codes2[i] = String.fromCharCode(i);
            }
            embind_charCodes = codes2;
          }
          var embind_charCodes = void 0;
          function readLatin1String(ptr) {
            var ret = "";
            var c = ptr;
            while (HEAPU8[c]) {
              ret += embind_charCodes[HEAPU8[c++]];
            }
            return ret;
          }
          var awaitingDependencies = {};
          var registeredTypes = {};
          var typeDependencies = {};
          var char_0 = 48;
          var char_9 = 57;
          function makeLegalFunctionName(name) {
            if (void 0 === name) {
              return "_unknown";
            }
            name = name.replace(/[^a-zA-Z0-9_]/g, "$");
            var f = name.charCodeAt(0);
            if (f >= char_0 && f <= char_9) {
              return "_" + name;
            }
            return name;
          }
          function createNamedFunction(name, body) {
            name = makeLegalFunctionName(name);
            return function() {
              "use strict";
              return body.apply(this, arguments);
            };
          }
          function extendError(baseErrorType, errorName) {
            var errorClass = createNamedFunction(errorName, function(message) {
              this.name = errorName;
              this.message = message;
              var stack = new Error(message).stack;
              if (stack !== void 0) {
                this.stack = this.toString() + "\n" + stack.replace(/^Error(:[^\n]*)?\n/, "");
              }
            });
            errorClass.prototype = Object.create(baseErrorType.prototype);
            errorClass.prototype.constructor = errorClass;
            errorClass.prototype.toString = function() {
              if (this.message === void 0) {
                return this.name;
              } else {
                return this.name + ": " + this.message;
              }
            };
            return errorClass;
          }
          var BindingError = void 0;
          function throwBindingError(message) {
            throw new BindingError(message);
          }
          var InternalError = void 0;
          function throwInternalError(message) {
            throw new InternalError(message);
          }
          function whenDependentTypesAreResolved(myTypes, dependentTypes, getTypeConverters) {
            myTypes.forEach(function(type) {
              typeDependencies[type] = dependentTypes;
            });
            function onComplete(typeConverters2) {
              var myTypeConverters = getTypeConverters(typeConverters2);
              if (myTypeConverters.length !== myTypes.length) {
                throwInternalError("Mismatched type converter count");
              }
              for (var i = 0; i < myTypes.length; ++i) {
                registerType(myTypes[i], myTypeConverters[i]);
              }
            }
            var typeConverters = new Array(dependentTypes.length);
            var unregisteredTypes = [];
            var registered = 0;
            dependentTypes.forEach((dt, i) => {
              if (registeredTypes.hasOwnProperty(dt)) {
                typeConverters[i] = registeredTypes[dt];
              } else {
                unregisteredTypes.push(dt);
                if (!awaitingDependencies.hasOwnProperty(dt)) {
                  awaitingDependencies[dt] = [];
                }
                awaitingDependencies[dt].push(() => {
                  typeConverters[i] = registeredTypes[dt];
                  ++registered;
                  if (registered === unregisteredTypes.length) {
                    onComplete(typeConverters);
                  }
                });
              }
            });
            if (0 === unregisteredTypes.length) {
              onComplete(typeConverters);
            }
          }
          function registerType(rawType, registeredInstance, options = {}) {
            if (!("argPackAdvance" in registeredInstance)) {
              throw new TypeError("registerType registeredInstance requires argPackAdvance");
            }
            var name = registeredInstance.name;
            if (!rawType) {
              throwBindingError('type "' + name + '" must have a positive integer typeid pointer');
            }
            if (registeredTypes.hasOwnProperty(rawType)) {
              if (options.ignoreDuplicateRegistrations) {
                return;
              } else {
                throwBindingError("Cannot register type '" + name + "' twice");
              }
            }
            registeredTypes[rawType] = registeredInstance;
            delete typeDependencies[rawType];
            if (awaitingDependencies.hasOwnProperty(rawType)) {
              var callbacks = awaitingDependencies[rawType];
              delete awaitingDependencies[rawType];
              callbacks.forEach((cb) => cb());
            }
          }
          function __embind_register_bool(rawType, name, size, trueValue, falseValue) {
            var shift = getShiftFromSize(size);
            name = readLatin1String(name);
            registerType(rawType, { name, "fromWireType": function(wt) {
              return !!wt;
            }, "toWireType": function(destructors, o) {
              return o ? trueValue : falseValue;
            }, "argPackAdvance": 8, "readValueFromPointer": function(pointer) {
              var heap;
              if (size === 1) {
                heap = HEAP8;
              } else if (size === 2) {
                heap = HEAP16;
              } else if (size === 4) {
                heap = HEAP32;
              } else {
                throw new TypeError("Unknown boolean type size: " + name);
              }
              return this["fromWireType"](heap[pointer >> shift]);
            }, destructorFunction: null });
          }
          function ClassHandle_isAliasOf(other) {
            if (!(this instanceof ClassHandle)) {
              return false;
            }
            if (!(other instanceof ClassHandle)) {
              return false;
            }
            var leftClass = this.$$.ptrType.registeredClass;
            var left = this.$$.ptr;
            var rightClass = other.$$.ptrType.registeredClass;
            var right = other.$$.ptr;
            while (leftClass.baseClass) {
              left = leftClass.upcast(left);
              leftClass = leftClass.baseClass;
            }
            while (rightClass.baseClass) {
              right = rightClass.upcast(right);
              rightClass = rightClass.baseClass;
            }
            return leftClass === rightClass && left === right;
          }
          function shallowCopyInternalPointer(o) {
            return { count: o.count, deleteScheduled: o.deleteScheduled, preservePointerOnDelete: o.preservePointerOnDelete, ptr: o.ptr, ptrType: o.ptrType, smartPtr: o.smartPtr, smartPtrType: o.smartPtrType };
          }
          function throwInstanceAlreadyDeleted(obj) {
            function getInstanceTypeName(handle) {
              return handle.$$.ptrType.registeredClass.name;
            }
            throwBindingError(getInstanceTypeName(obj) + " instance already deleted");
          }
          var finalizationRegistry = false;
          function detachFinalizer(handle) {
          }
          function runDestructor($$) {
            if ($$.smartPtr) {
              $$.smartPtrType.rawDestructor($$.smartPtr);
            } else {
              $$.ptrType.registeredClass.rawDestructor($$.ptr);
            }
          }
          function releaseClassHandle($$) {
            $$.count.value -= 1;
            var toDelete = 0 === $$.count.value;
            if (toDelete) {
              runDestructor($$);
            }
          }
          function downcastPointer(ptr, ptrClass, desiredClass) {
            if (ptrClass === desiredClass) {
              return ptr;
            }
            if (void 0 === desiredClass.baseClass) {
              return null;
            }
            var rv = downcastPointer(ptr, ptrClass, desiredClass.baseClass);
            if (rv === null) {
              return null;
            }
            return desiredClass.downcast(rv);
          }
          var registeredPointers = {};
          function getInheritedInstanceCount() {
            return Object.keys(registeredInstances).length;
          }
          function getLiveInheritedInstances() {
            var rv = [];
            for (var k in registeredInstances) {
              if (registeredInstances.hasOwnProperty(k)) {
                rv.push(registeredInstances[k]);
              }
            }
            return rv;
          }
          var deletionQueue = [];
          function flushPendingDeletes() {
            while (deletionQueue.length) {
              var obj = deletionQueue.pop();
              obj.$$.deleteScheduled = false;
              obj["delete"]();
            }
          }
          var delayFunction = void 0;
          function setDelayFunction(fn) {
            delayFunction = fn;
            if (deletionQueue.length && delayFunction) {
              delayFunction(flushPendingDeletes);
            }
          }
          function init_embind() {
            Module["getInheritedInstanceCount"] = getInheritedInstanceCount;
            Module["getLiveInheritedInstances"] = getLiveInheritedInstances;
            Module["flushPendingDeletes"] = flushPendingDeletes;
            Module["setDelayFunction"] = setDelayFunction;
          }
          var registeredInstances = {};
          function getBasestPointer(class_, ptr) {
            if (ptr === void 0) {
              throwBindingError("ptr should not be undefined");
            }
            while (class_.baseClass) {
              ptr = class_.upcast(ptr);
              class_ = class_.baseClass;
            }
            return ptr;
          }
          function getInheritedInstance(class_, ptr) {
            ptr = getBasestPointer(class_, ptr);
            return registeredInstances[ptr];
          }
          function makeClassHandle(prototype, record) {
            if (!record.ptrType || !record.ptr) {
              throwInternalError("makeClassHandle requires ptr and ptrType");
            }
            var hasSmartPtrType = !!record.smartPtrType;
            var hasSmartPtr = !!record.smartPtr;
            if (hasSmartPtrType !== hasSmartPtr) {
              throwInternalError("Both smartPtrType and smartPtr must be specified");
            }
            record.count = { value: 1 };
            return attachFinalizer(Object.create(prototype, { $$: { value: record } }));
          }
          function RegisteredPointer_fromWireType(ptr) {
            var rawPointer = this.getPointee(ptr);
            if (!rawPointer) {
              this.destructor(ptr);
              return null;
            }
            var registeredInstance = getInheritedInstance(this.registeredClass, rawPointer);
            if (void 0 !== registeredInstance) {
              if (0 === registeredInstance.$$.count.value) {
                registeredInstance.$$.ptr = rawPointer;
                registeredInstance.$$.smartPtr = ptr;
                return registeredInstance["clone"]();
              } else {
                var rv = registeredInstance["clone"]();
                this.destructor(ptr);
                return rv;
              }
            }
            function makeDefaultHandle() {
              if (this.isSmartPointer) {
                return makeClassHandle(this.registeredClass.instancePrototype, { ptrType: this.pointeeType, ptr: rawPointer, smartPtrType: this, smartPtr: ptr });
              } else {
                return makeClassHandle(this.registeredClass.instancePrototype, { ptrType: this, ptr });
              }
            }
            var actualType = this.registeredClass.getActualType(rawPointer);
            var registeredPointerRecord = registeredPointers[actualType];
            if (!registeredPointerRecord) {
              return makeDefaultHandle.call(this);
            }
            var toType;
            if (this.isConst) {
              toType = registeredPointerRecord.constPointerType;
            } else {
              toType = registeredPointerRecord.pointerType;
            }
            var dp = downcastPointer(rawPointer, this.registeredClass, toType.registeredClass);
            if (dp === null) {
              return makeDefaultHandle.call(this);
            }
            if (this.isSmartPointer) {
              return makeClassHandle(toType.registeredClass.instancePrototype, { ptrType: toType, ptr: dp, smartPtrType: this, smartPtr: ptr });
            } else {
              return makeClassHandle(toType.registeredClass.instancePrototype, { ptrType: toType, ptr: dp });
            }
          }
          function attachFinalizer(handle) {
            if ("undefined" === typeof FinalizationRegistry) {
              attachFinalizer = (handle2) => handle2;
              return handle;
            }
            finalizationRegistry = new FinalizationRegistry((info) => {
              console.warn(info.leakWarning.stack.replace(/^Error: /, ""));
              releaseClassHandle(info.$$);
            });
            attachFinalizer = (handle2) => {
              var $$ = handle2.$$;
              var hasSmartPtr = !!$$.smartPtr;
              if (hasSmartPtr) {
                var info = { $$ };
                var cls = $$.ptrType.registeredClass;
                info.leakWarning = new Error("Embind found a leaked C++ instance " + cls.name + " <0x" + $$.ptr.toString(16) + ">.\nWe'll free it automatically in this case, but this functionality is not reliable across various environments.\nMake sure to invoke .delete() manually once you're done with the instance instead.\nOriginally allocated");
                if ("captureStackTrace" in Error) {
                  Error.captureStackTrace(info.leakWarning, RegisteredPointer_fromWireType);
                }
                finalizationRegistry.register(handle2, info, handle2);
              }
              return handle2;
            };
            detachFinalizer = (handle2) => finalizationRegistry.unregister(handle2);
            return attachFinalizer(handle);
          }
          function ClassHandle_clone() {
            if (!this.$$.ptr) {
              throwInstanceAlreadyDeleted(this);
            }
            if (this.$$.preservePointerOnDelete) {
              this.$$.count.value += 1;
              return this;
            } else {
              var clone = attachFinalizer(Object.create(Object.getPrototypeOf(this), { $$: { value: shallowCopyInternalPointer(this.$$) } }));
              clone.$$.count.value += 1;
              clone.$$.deleteScheduled = false;
              return clone;
            }
          }
          function ClassHandle_delete() {
            if (!this.$$.ptr) {
              throwInstanceAlreadyDeleted(this);
            }
            if (this.$$.deleteScheduled && !this.$$.preservePointerOnDelete) {
              throwBindingError("Object already scheduled for deletion");
            }
            detachFinalizer(this);
            releaseClassHandle(this.$$);
            if (!this.$$.preservePointerOnDelete) {
              this.$$.smartPtr = void 0;
              this.$$.ptr = void 0;
            }
          }
          function ClassHandle_isDeleted() {
            return !this.$$.ptr;
          }
          function ClassHandle_deleteLater() {
            if (!this.$$.ptr) {
              throwInstanceAlreadyDeleted(this);
            }
            if (this.$$.deleteScheduled && !this.$$.preservePointerOnDelete) {
              throwBindingError("Object already scheduled for deletion");
            }
            deletionQueue.push(this);
            if (deletionQueue.length === 1 && delayFunction) {
              delayFunction(flushPendingDeletes);
            }
            this.$$.deleteScheduled = true;
            return this;
          }
          function init_ClassHandle() {
            ClassHandle.prototype["isAliasOf"] = ClassHandle_isAliasOf;
            ClassHandle.prototype["clone"] = ClassHandle_clone;
            ClassHandle.prototype["delete"] = ClassHandle_delete;
            ClassHandle.prototype["isDeleted"] = ClassHandle_isDeleted;
            ClassHandle.prototype["deleteLater"] = ClassHandle_deleteLater;
          }
          function ClassHandle() {
          }
          function ensureOverloadTable(proto, methodName, humanName) {
            if (void 0 === proto[methodName].overloadTable) {
              var prevFunc = proto[methodName];
              proto[methodName] = function() {
                if (!proto[methodName].overloadTable.hasOwnProperty(arguments.length)) {
                  throwBindingError("Function '" + humanName + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + proto[methodName].overloadTable + ")!");
                }
                return proto[methodName].overloadTable[arguments.length].apply(this, arguments);
              };
              proto[methodName].overloadTable = [];
              proto[methodName].overloadTable[prevFunc.argCount] = prevFunc;
            }
          }
          function exposePublicSymbol(name, value, numArguments) {
            if (Module.hasOwnProperty(name)) {
              if (void 0 === numArguments || void 0 !== Module[name].overloadTable && void 0 !== Module[name].overloadTable[numArguments]) {
                throwBindingError("Cannot register public name '" + name + "' twice");
              }
              ensureOverloadTable(Module, name, name);
              if (Module.hasOwnProperty(numArguments)) {
                throwBindingError("Cannot register multiple overloads of a function with the same number of arguments (" + numArguments + ")!");
              }
              Module[name].overloadTable[numArguments] = value;
            } else {
              Module[name] = value;
              if (void 0 !== numArguments) {
                Module[name].numArguments = numArguments;
              }
            }
          }
          function RegisteredClass(name, constructor, instancePrototype, rawDestructor, baseClass, getActualType, upcast, downcast) {
            this.name = name;
            this.constructor = constructor;
            this.instancePrototype = instancePrototype;
            this.rawDestructor = rawDestructor;
            this.baseClass = baseClass;
            this.getActualType = getActualType;
            this.upcast = upcast;
            this.downcast = downcast;
            this.pureVirtualFunctions = [];
          }
          function upcastPointer(ptr, ptrClass, desiredClass) {
            while (ptrClass !== desiredClass) {
              if (!ptrClass.upcast) {
                throwBindingError("Expected null or instance of " + desiredClass.name + ", got an instance of " + ptrClass.name);
              }
              ptr = ptrClass.upcast(ptr);
              ptrClass = ptrClass.baseClass;
            }
            return ptr;
          }
          function constNoSmartPtrRawPointerToWireType(destructors, handle) {
            if (handle === null) {
              if (this.isReference) {
                throwBindingError("null is not a valid " + this.name);
              }
              return 0;
            }
            if (!handle.$$) {
              throwBindingError('Cannot pass "' + embindRepr(handle) + '" as a ' + this.name);
            }
            if (!handle.$$.ptr) {
              throwBindingError("Cannot pass deleted object as a pointer of type " + this.name);
            }
            var handleClass = handle.$$.ptrType.registeredClass;
            var ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);
            return ptr;
          }
          function genericPointerToWireType(destructors, handle) {
            var ptr;
            if (handle === null) {
              if (this.isReference) {
                throwBindingError("null is not a valid " + this.name);
              }
              if (this.isSmartPointer) {
                ptr = this.rawConstructor();
                if (destructors !== null) {
                  destructors.push(this.rawDestructor, ptr);
                }
                return ptr;
              } else {
                return 0;
              }
            }
            if (!handle.$$) {
              throwBindingError('Cannot pass "' + embindRepr(handle) + '" as a ' + this.name);
            }
            if (!handle.$$.ptr) {
              throwBindingError("Cannot pass deleted object as a pointer of type " + this.name);
            }
            if (!this.isConst && handle.$$.ptrType.isConst) {
              throwBindingError("Cannot convert argument of type " + (handle.$$.smartPtrType ? handle.$$.smartPtrType.name : handle.$$.ptrType.name) + " to parameter type " + this.name);
            }
            var handleClass = handle.$$.ptrType.registeredClass;
            ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);
            if (this.isSmartPointer) {
              if (void 0 === handle.$$.smartPtr) {
                throwBindingError("Passing raw pointer to smart pointer is illegal");
              }
              switch (this.sharingPolicy) {
                case 0:
                  if (handle.$$.smartPtrType === this) {
                    ptr = handle.$$.smartPtr;
                  } else {
                    throwBindingError("Cannot convert argument of type " + (handle.$$.smartPtrType ? handle.$$.smartPtrType.name : handle.$$.ptrType.name) + " to parameter type " + this.name);
                  }
                  break;
                case 1:
                  ptr = handle.$$.smartPtr;
                  break;
                case 2:
                  if (handle.$$.smartPtrType === this) {
                    ptr = handle.$$.smartPtr;
                  } else {
                    var clonedHandle = handle["clone"]();
                    ptr = this.rawShare(ptr, Emval.toHandle(function() {
                      clonedHandle["delete"]();
                    }));
                    if (destructors !== null) {
                      destructors.push(this.rawDestructor, ptr);
                    }
                  }
                  break;
                default:
                  throwBindingError("Unsupporting sharing policy");
              }
            }
            return ptr;
          }
          function nonConstNoSmartPtrRawPointerToWireType(destructors, handle) {
            if (handle === null) {
              if (this.isReference) {
                throwBindingError("null is not a valid " + this.name);
              }
              return 0;
            }
            if (!handle.$$) {
              throwBindingError('Cannot pass "' + embindRepr(handle) + '" as a ' + this.name);
            }
            if (!handle.$$.ptr) {
              throwBindingError("Cannot pass deleted object as a pointer of type " + this.name);
            }
            if (handle.$$.ptrType.isConst) {
              throwBindingError("Cannot convert argument of type " + handle.$$.ptrType.name + " to parameter type " + this.name);
            }
            var handleClass = handle.$$.ptrType.registeredClass;
            var ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);
            return ptr;
          }
          function simpleReadValueFromPointer(pointer) {
            return this["fromWireType"](HEAP32[pointer >> 2]);
          }
          function RegisteredPointer_getPointee(ptr) {
            if (this.rawGetPointee) {
              ptr = this.rawGetPointee(ptr);
            }
            return ptr;
          }
          function RegisteredPointer_destructor(ptr) {
            if (this.rawDestructor) {
              this.rawDestructor(ptr);
            }
          }
          function RegisteredPointer_deleteObject(handle) {
            if (handle !== null) {
              handle["delete"]();
            }
          }
          function init_RegisteredPointer() {
            RegisteredPointer.prototype.getPointee = RegisteredPointer_getPointee;
            RegisteredPointer.prototype.destructor = RegisteredPointer_destructor;
            RegisteredPointer.prototype["argPackAdvance"] = 8;
            RegisteredPointer.prototype["readValueFromPointer"] = simpleReadValueFromPointer;
            RegisteredPointer.prototype["deleteObject"] = RegisteredPointer_deleteObject;
            RegisteredPointer.prototype["fromWireType"] = RegisteredPointer_fromWireType;
          }
          function RegisteredPointer(name, registeredClass, isReference, isConst, isSmartPointer, pointeeType, sharingPolicy, rawGetPointee, rawConstructor, rawShare, rawDestructor) {
            this.name = name;
            this.registeredClass = registeredClass;
            this.isReference = isReference;
            this.isConst = isConst;
            this.isSmartPointer = isSmartPointer;
            this.pointeeType = pointeeType;
            this.sharingPolicy = sharingPolicy;
            this.rawGetPointee = rawGetPointee;
            this.rawConstructor = rawConstructor;
            this.rawShare = rawShare;
            this.rawDestructor = rawDestructor;
            if (!isSmartPointer && registeredClass.baseClass === void 0) {
              if (isConst) {
                this["toWireType"] = constNoSmartPtrRawPointerToWireType;
                this.destructorFunction = null;
              } else {
                this["toWireType"] = nonConstNoSmartPtrRawPointerToWireType;
                this.destructorFunction = null;
              }
            } else {
              this["toWireType"] = genericPointerToWireType;
            }
          }
          function replacePublicSymbol(name, value, numArguments) {
            if (!Module.hasOwnProperty(name)) {
              throwInternalError("Replacing nonexistant public symbol");
            }
            if (void 0 !== Module[name].overloadTable && void 0 !== numArguments) {
              Module[name].overloadTable[numArguments] = value;
            } else {
              Module[name] = value;
              Module[name].argCount = numArguments;
            }
          }
          function dynCallLegacy(sig, ptr, args) {
            assert("dynCall_" + sig in Module, "bad function pointer type - no table for sig '" + sig + "'");
            if (args && args.length) {
              assert(args.length === sig.substring(1).replace(/j/g, "--").length);
            } else {
              assert(sig.length == 1);
            }
            var f = Module["dynCall_" + sig];
            return args && args.length ? f.apply(null, [ptr].concat(args)) : f.call(null, ptr);
          }
          var wasmTableMirror = [];
          function getWasmTableEntry(funcPtr) {
            var func = wasmTableMirror[funcPtr];
            if (!func) {
              if (funcPtr >= wasmTableMirror.length) wasmTableMirror.length = funcPtr + 1;
              wasmTableMirror[funcPtr] = func = wasmTable.get(funcPtr);
            }
            assert(wasmTable.get(funcPtr) == func, "JavaScript-side Wasm function table mirror is out of date!");
            return func;
          }
          function dynCall(sig, ptr, args) {
            if (sig.includes("j")) {
              return dynCallLegacy(sig, ptr, args);
            }
            assert(getWasmTableEntry(ptr), "missing table entry in dynCall: " + ptr);
            var rtn = getWasmTableEntry(ptr).apply(null, args);
            return rtn;
          }
          function getDynCaller(sig, ptr) {
            assert(sig.includes("j") || sig.includes("p"), "getDynCaller should only be called with i64 sigs");
            var argCache = [];
            return function() {
              argCache.length = 0;
              Object.assign(argCache, arguments);
              return dynCall(sig, ptr, argCache);
            };
          }
          function embind__requireFunction(signature, rawFunction) {
            signature = readLatin1String(signature);
            function makeDynCaller() {
              if (signature.includes("j")) {
                return getDynCaller(signature, rawFunction);
              }
              return getWasmTableEntry(rawFunction);
            }
            var fp = makeDynCaller();
            if (typeof fp != "function") {
              throwBindingError("unknown function pointer with signature " + signature + ": " + rawFunction);
            }
            return fp;
          }
          var UnboundTypeError = void 0;
          function getTypeName(type) {
            var ptr = ___getTypeName(type);
            var rv = readLatin1String(ptr);
            _free(ptr);
            return rv;
          }
          function throwUnboundTypeError(message, types) {
            var unboundTypes = [];
            var seen = {};
            function visit(type) {
              if (seen[type]) {
                return;
              }
              if (registeredTypes[type]) {
                return;
              }
              if (typeDependencies[type]) {
                typeDependencies[type].forEach(visit);
                return;
              }
              unboundTypes.push(type);
              seen[type] = true;
            }
            types.forEach(visit);
            throw new UnboundTypeError(message + ": " + unboundTypes.map(getTypeName).join([", "]));
          }
          function __embind_register_class(rawType, rawPointerType, rawConstPointerType, baseClassRawType, getActualTypeSignature, getActualType, upcastSignature, upcast, downcastSignature, downcast, name, destructorSignature, rawDestructor) {
            name = readLatin1String(name);
            getActualType = embind__requireFunction(getActualTypeSignature, getActualType);
            if (upcast) {
              upcast = embind__requireFunction(upcastSignature, upcast);
            }
            if (downcast) {
              downcast = embind__requireFunction(downcastSignature, downcast);
            }
            rawDestructor = embind__requireFunction(destructorSignature, rawDestructor);
            var legalFunctionName = makeLegalFunctionName(name);
            exposePublicSymbol(legalFunctionName, function() {
              throwUnboundTypeError("Cannot construct " + name + " due to unbound types", [baseClassRawType]);
            });
            whenDependentTypesAreResolved([rawType, rawPointerType, rawConstPointerType], baseClassRawType ? [baseClassRawType] : [], function(base) {
              base = base[0];
              var baseClass;
              var basePrototype;
              if (baseClassRawType) {
                baseClass = base.registeredClass;
                basePrototype = baseClass.instancePrototype;
              } else {
                basePrototype = ClassHandle.prototype;
              }
              var constructor = createNamedFunction(legalFunctionName, function() {
                if (Object.getPrototypeOf(this) !== instancePrototype) {
                  throw new BindingError("Use 'new' to construct " + name);
                }
                if (void 0 === registeredClass.constructor_body) {
                  throw new BindingError(name + " has no accessible constructor");
                }
                var body = registeredClass.constructor_body[arguments.length];
                if (void 0 === body) {
                  throw new BindingError("Tried to invoke ctor of " + name + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(registeredClass.constructor_body).toString() + ") parameters instead!");
                }
                return body.apply(this, arguments);
              });
              var instancePrototype = Object.create(basePrototype, { constructor: { value: constructor } });
              constructor.prototype = instancePrototype;
              var registeredClass = new RegisteredClass(name, constructor, instancePrototype, rawDestructor, baseClass, getActualType, upcast, downcast);
              var referenceConverter = new RegisteredPointer(name, registeredClass, true, false, false);
              var pointerConverter = new RegisteredPointer(name + "*", registeredClass, false, false, false);
              var constPointerConverter = new RegisteredPointer(name + " const*", registeredClass, false, true, false);
              registeredPointers[rawType] = { pointerType: pointerConverter, constPointerType: constPointerConverter };
              replacePublicSymbol(legalFunctionName, constructor);
              return [referenceConverter, pointerConverter, constPointerConverter];
            });
          }
          function heap32VectorToArray(count, firstElement) {
            var array = [];
            for (var i = 0; i < count; i++) {
              array.push(HEAPU32[firstElement + i * 4 >> 2]);
            }
            return array;
          }
          function runDestructors(destructors) {
            while (destructors.length) {
              var ptr = destructors.pop();
              var del = destructors.pop();
              del(ptr);
            }
          }
          function craftInvokerFunction(humanName, argTypes, classType, cppInvokerFunc, cppTargetFunc) {
            var argCount = argTypes.length;
            if (argCount < 2) {
              throwBindingError("argTypes array size mismatch! Must at least get return value and 'this' types!");
            }
            var isClassMethodFunc = argTypes[1] !== null && classType !== null;
            var needsDestructorStack = false;
            for (var i = 1; i < argTypes.length; ++i) {
              if (argTypes[i] !== null && argTypes[i].destructorFunction === void 0) {
                needsDestructorStack = true;
                break;
              }
            }
            var returns = argTypes[0].name !== "void";
            var expectedArgCount = argCount - 2;
            var argsWired = new Array(expectedArgCount);
            var invokerFuncArgs = [];
            var destructors = [];
            return function() {
              if (arguments.length !== expectedArgCount) {
                throwBindingError("function " + humanName + " called with " + arguments.length + " arguments, expected " + expectedArgCount + " args!");
              }
              destructors.length = 0;
              var thisWired;
              invokerFuncArgs.length = isClassMethodFunc ? 2 : 1;
              invokerFuncArgs[0] = cppTargetFunc;
              if (isClassMethodFunc) {
                thisWired = argTypes[1]["toWireType"](destructors, this);
                invokerFuncArgs[1] = thisWired;
              }
              for (var i2 = 0; i2 < expectedArgCount; ++i2) {
                argsWired[i2] = argTypes[i2 + 2]["toWireType"](destructors, arguments[i2]);
                invokerFuncArgs.push(argsWired[i2]);
              }
              var rv = cppInvokerFunc.apply(null, invokerFuncArgs);
              function onDone(rv2) {
                if (needsDestructorStack) {
                  runDestructors(destructors);
                } else {
                  for (var i3 = isClassMethodFunc ? 1 : 2; i3 < argTypes.length; i3++) {
                    var param = i3 === 1 ? thisWired : argsWired[i3 - 2];
                    if (argTypes[i3].destructorFunction !== null) {
                      argTypes[i3].destructorFunction(param);
                    }
                  }
                }
                if (returns) {
                  return argTypes[0]["fromWireType"](rv2);
                }
              }
              return onDone(rv);
            };
          }
          function __embind_register_class_constructor(rawClassType, argCount, rawArgTypesAddr, invokerSignature, invoker, rawConstructor) {
            assert(argCount > 0);
            var rawArgTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
            invoker = embind__requireFunction(invokerSignature, invoker);
            whenDependentTypesAreResolved([], [rawClassType], function(classType) {
              classType = classType[0];
              var humanName = "constructor " + classType.name;
              if (void 0 === classType.registeredClass.constructor_body) {
                classType.registeredClass.constructor_body = [];
              }
              if (void 0 !== classType.registeredClass.constructor_body[argCount - 1]) {
                throw new BindingError("Cannot register multiple constructors with identical number of parameters (" + (argCount - 1) + ") for class '" + classType.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
              }
              classType.registeredClass.constructor_body[argCount - 1] = () => {
                throwUnboundTypeError("Cannot construct " + classType.name + " due to unbound types", rawArgTypes);
              };
              whenDependentTypesAreResolved([], rawArgTypes, function(argTypes) {
                argTypes.splice(1, 0, null);
                classType.registeredClass.constructor_body[argCount - 1] = craftInvokerFunction(humanName, argTypes, null, invoker, rawConstructor);
                return [];
              });
              return [];
            });
          }
          function __embind_register_class_function(rawClassType, methodName, argCount, rawArgTypesAddr, invokerSignature, rawInvoker, context, isPureVirtual) {
            var rawArgTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
            methodName = readLatin1String(methodName);
            rawInvoker = embind__requireFunction(invokerSignature, rawInvoker);
            whenDependentTypesAreResolved([], [rawClassType], function(classType) {
              classType = classType[0];
              var humanName = classType.name + "." + methodName;
              if (methodName.startsWith("@@")) {
                methodName = Symbol[methodName.substring(2)];
              }
              if (isPureVirtual) {
                classType.registeredClass.pureVirtualFunctions.push(methodName);
              }
              function unboundTypesHandler() {
                throwUnboundTypeError("Cannot call " + humanName + " due to unbound types", rawArgTypes);
              }
              var proto = classType.registeredClass.instancePrototype;
              var method = proto[methodName];
              if (void 0 === method || void 0 === method.overloadTable && method.className !== classType.name && method.argCount === argCount - 2) {
                unboundTypesHandler.argCount = argCount - 2;
                unboundTypesHandler.className = classType.name;
                proto[methodName] = unboundTypesHandler;
              } else {
                ensureOverloadTable(proto, methodName, humanName);
                proto[methodName].overloadTable[argCount - 2] = unboundTypesHandler;
              }
              whenDependentTypesAreResolved([], rawArgTypes, function(argTypes) {
                var memberFunction = craftInvokerFunction(humanName, argTypes, classType, rawInvoker, context);
                if (void 0 === proto[methodName].overloadTable) {
                  memberFunction.argCount = argCount - 2;
                  proto[methodName] = memberFunction;
                } else {
                  proto[methodName].overloadTable[argCount - 2] = memberFunction;
                }
                return [];
              });
              return [];
            });
          }
          var emval_free_list = [];
          var emval_handle_array = [{}, { value: void 0 }, { value: null }, { value: true }, { value: false }];
          function __emval_decref(handle) {
            if (handle > 4 && 0 === --emval_handle_array[handle].refcount) {
              emval_handle_array[handle] = void 0;
              emval_free_list.push(handle);
            }
          }
          function count_emval_handles() {
            var count = 0;
            for (var i = 5; i < emval_handle_array.length; ++i) {
              if (emval_handle_array[i] !== void 0) {
                ++count;
              }
            }
            return count;
          }
          function get_first_emval() {
            for (var i = 5; i < emval_handle_array.length; ++i) {
              if (emval_handle_array[i] !== void 0) {
                return emval_handle_array[i];
              }
            }
            return null;
          }
          function init_emval() {
            Module["count_emval_handles"] = count_emval_handles;
            Module["get_first_emval"] = get_first_emval;
          }
          var Emval = { toValue: (handle) => {
            if (!handle) {
              throwBindingError("Cannot use deleted val. handle = " + handle);
            }
            return emval_handle_array[handle].value;
          }, toHandle: (value) => {
            switch (value) {
              case void 0:
                return 1;
              case null:
                return 2;
              case true:
                return 3;
              case false:
                return 4;
              default: {
                var handle = emval_free_list.length ? emval_free_list.pop() : emval_handle_array.length;
                emval_handle_array[handle] = { refcount: 1, value };
                return handle;
              }
            }
          } };
          function __embind_register_emval(rawType, name) {
            name = readLatin1String(name);
            registerType(rawType, { name, "fromWireType": function(handle) {
              var rv = Emval.toValue(handle);
              __emval_decref(handle);
              return rv;
            }, "toWireType": function(destructors, value) {
              return Emval.toHandle(value);
            }, "argPackAdvance": 8, "readValueFromPointer": simpleReadValueFromPointer, destructorFunction: null });
          }
          function embindRepr(v) {
            if (v === null) {
              return "null";
            }
            var t = typeof v;
            if (t === "object" || t === "array" || t === "function") {
              return v.toString();
            } else {
              return "" + v;
            }
          }
          function floatReadValueFromPointer(name, shift) {
            switch (shift) {
              case 2:
                return function(pointer) {
                  return this["fromWireType"](HEAPF32[pointer >> 2]);
                };
              case 3:
                return function(pointer) {
                  return this["fromWireType"](HEAPF64[pointer >> 3]);
                };
              default:
                throw new TypeError("Unknown float type: " + name);
            }
          }
          function __embind_register_float(rawType, name, size) {
            var shift = getShiftFromSize(size);
            name = readLatin1String(name);
            registerType(rawType, { name, "fromWireType": function(value) {
              return value;
            }, "toWireType": function(destructors, value) {
              if (typeof value != "number" && typeof value != "boolean") {
                throw new TypeError('Cannot convert "' + embindRepr(value) + '" to ' + this.name);
              }
              return value;
            }, "argPackAdvance": 8, "readValueFromPointer": floatReadValueFromPointer(name, shift), destructorFunction: null });
          }
          function integerReadValueFromPointer(name, shift, signed) {
            switch (shift) {
              case 0:
                return signed ? function readS8FromPointer(pointer) {
                  return HEAP8[pointer];
                } : function readU8FromPointer(pointer) {
                  return HEAPU8[pointer];
                };
              case 1:
                return signed ? function readS16FromPointer(pointer) {
                  return HEAP16[pointer >> 1];
                } : function readU16FromPointer(pointer) {
                  return HEAPU16[pointer >> 1];
                };
              case 2:
                return signed ? function readS32FromPointer(pointer) {
                  return HEAP32[pointer >> 2];
                } : function readU32FromPointer(pointer) {
                  return HEAPU32[pointer >> 2];
                };
              default:
                throw new TypeError("Unknown integer type: " + name);
            }
          }
          function __embind_register_integer(primitiveType, name, size, minRange, maxRange) {
            name = readLatin1String(name);
            if (maxRange === -1) {
              maxRange = 4294967295;
            }
            var shift = getShiftFromSize(size);
            var fromWireType = (value) => value;
            if (minRange === 0) {
              var bitshift = 32 - 8 * size;
              fromWireType = (value) => value << bitshift >>> bitshift;
            }
            var isUnsignedType = name.includes("unsigned");
            var checkAssertions = (value, toTypeName) => {
              if (typeof value != "number" && typeof value != "boolean") {
                throw new TypeError('Cannot convert "' + embindRepr(value) + '" to ' + toTypeName);
              }
              if (value < minRange || value > maxRange) {
                throw new TypeError('Passing a number "' + embindRepr(value) + '" from JS side to C/C++ side to an argument of type "' + name + '", which is outside the valid range [' + minRange + ", " + maxRange + "]!");
              }
            };
            var toWireType;
            if (isUnsignedType) {
              toWireType = function(destructors, value) {
                checkAssertions(value, this.name);
                return value >>> 0;
              };
            } else {
              toWireType = function(destructors, value) {
                checkAssertions(value, this.name);
                return value;
              };
            }
            registerType(primitiveType, { name, "fromWireType": fromWireType, "toWireType": toWireType, "argPackAdvance": 8, "readValueFromPointer": integerReadValueFromPointer(name, shift, minRange !== 0), destructorFunction: null });
          }
          function __embind_register_memory_view(rawType, dataTypeIndex, name) {
            var typeMapping = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array];
            var TA = typeMapping[dataTypeIndex];
            function decodeMemoryView(handle) {
              handle = handle >> 2;
              var heap = HEAPU32;
              var size = heap[handle];
              var data = heap[handle + 1];
              return new TA(buffer, data, size);
            }
            name = readLatin1String(name);
            registerType(rawType, { name, "fromWireType": decodeMemoryView, "argPackAdvance": 8, "readValueFromPointer": decodeMemoryView }, { ignoreDuplicateRegistrations: true });
          }
          function __embind_register_std_string(rawType, name) {
            name = readLatin1String(name);
            var stdStringIsUTF8 = name === "std::string";
            registerType(rawType, { name, "fromWireType": function(value) {
              var length = HEAPU32[value >> 2];
              var payload = value + 4;
              var str;
              if (stdStringIsUTF8) {
                var decodeStartPtr = payload;
                for (var i = 0; i <= length; ++i) {
                  var currentBytePtr = payload + i;
                  if (i == length || HEAPU8[currentBytePtr] == 0) {
                    var maxRead = currentBytePtr - decodeStartPtr;
                    var stringSegment = UTF8ToString(decodeStartPtr, maxRead);
                    if (str === void 0) {
                      str = stringSegment;
                    } else {
                      str += String.fromCharCode(0);
                      str += stringSegment;
                    }
                    decodeStartPtr = currentBytePtr + 1;
                  }
                }
              } else {
                var a = new Array(length);
                for (var i = 0; i < length; ++i) {
                  a[i] = String.fromCharCode(HEAPU8[payload + i]);
                }
                str = a.join("");
              }
              _free(value);
              return str;
            }, "toWireType": function(destructors, value) {
              if (value instanceof ArrayBuffer) {
                value = new Uint8Array(value);
              }
              var length;
              var valueIsOfTypeString = typeof value == "string";
              if (!(valueIsOfTypeString || value instanceof Uint8Array || value instanceof Uint8ClampedArray || value instanceof Int8Array)) {
                throwBindingError("Cannot pass non-string to std::string");
              }
              if (stdStringIsUTF8 && valueIsOfTypeString) {
                length = lengthBytesUTF8(value);
              } else {
                length = value.length;
              }
              var base = _malloc(4 + length + 1);
              var ptr = base + 4;
              HEAPU32[base >> 2] = length;
              if (stdStringIsUTF8 && valueIsOfTypeString) {
                stringToUTF8(value, ptr, length + 1);
              } else {
                if (valueIsOfTypeString) {
                  for (var i = 0; i < length; ++i) {
                    var charCode = value.charCodeAt(i);
                    if (charCode > 255) {
                      _free(ptr);
                      throwBindingError("String has UTF-16 code units that do not fit in 8 bits");
                    }
                    HEAPU8[ptr + i] = charCode;
                  }
                } else {
                  for (var i = 0; i < length; ++i) {
                    HEAPU8[ptr + i] = value[i];
                  }
                }
              }
              if (destructors !== null) {
                destructors.push(_free, base);
              }
              return base;
            }, "argPackAdvance": 8, "readValueFromPointer": simpleReadValueFromPointer, destructorFunction: function(ptr) {
              _free(ptr);
            } });
          }
          var UTF16Decoder = typeof TextDecoder != "undefined" ? new TextDecoder("utf-16le") : void 0;
          function UTF16ToString(ptr, maxBytesToRead) {
            assert(ptr % 2 == 0, "Pointer passed to UTF16ToString must be aligned to two bytes!");
            var endPtr = ptr;
            var idx = endPtr >> 1;
            var maxIdx = idx + maxBytesToRead / 2;
            while (!(idx >= maxIdx) && HEAPU16[idx]) ++idx;
            endPtr = idx << 1;
            if (endPtr - ptr > 32 && UTF16Decoder) {
              return UTF16Decoder.decode(HEAPU8.subarray(ptr, endPtr));
            } else {
              var str = "";
              for (var i = 0; !(i >= maxBytesToRead / 2); ++i) {
                var codeUnit = HEAP16[ptr + i * 2 >> 1];
                if (codeUnit == 0) break;
                str += String.fromCharCode(codeUnit);
              }
              return str;
            }
          }
          function stringToUTF16(str, outPtr, maxBytesToWrite) {
            assert(outPtr % 2 == 0, "Pointer passed to stringToUTF16 must be aligned to two bytes!");
            assert(typeof maxBytesToWrite == "number", "stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!");
            if (maxBytesToWrite === void 0) {
              maxBytesToWrite = 2147483647;
            }
            if (maxBytesToWrite < 2) return 0;
            maxBytesToWrite -= 2;
            var startPtr = outPtr;
            var numCharsToWrite = maxBytesToWrite < str.length * 2 ? maxBytesToWrite / 2 : str.length;
            for (var i = 0; i < numCharsToWrite; ++i) {
              var codeUnit = str.charCodeAt(i);
              HEAP16[outPtr >> 1] = codeUnit;
              outPtr += 2;
            }
            HEAP16[outPtr >> 1] = 0;
            return outPtr - startPtr;
          }
          function lengthBytesUTF16(str) {
            return str.length * 2;
          }
          function UTF32ToString(ptr, maxBytesToRead) {
            assert(ptr % 4 == 0, "Pointer passed to UTF32ToString must be aligned to four bytes!");
            var i = 0;
            var str = "";
            while (!(i >= maxBytesToRead / 4)) {
              var utf32 = HEAP32[ptr + i * 4 >> 2];
              if (utf32 == 0) break;
              ++i;
              if (utf32 >= 65536) {
                var ch = utf32 - 65536;
                str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
              } else {
                str += String.fromCharCode(utf32);
              }
            }
            return str;
          }
          function stringToUTF32(str, outPtr, maxBytesToWrite) {
            assert(outPtr % 4 == 0, "Pointer passed to stringToUTF32 must be aligned to four bytes!");
            assert(typeof maxBytesToWrite == "number", "stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!");
            if (maxBytesToWrite === void 0) {
              maxBytesToWrite = 2147483647;
            }
            if (maxBytesToWrite < 4) return 0;
            var startPtr = outPtr;
            var endPtr = startPtr + maxBytesToWrite - 4;
            for (var i = 0; i < str.length; ++i) {
              var codeUnit = str.charCodeAt(i);
              if (codeUnit >= 55296 && codeUnit <= 57343) {
                var trailSurrogate = str.charCodeAt(++i);
                codeUnit = 65536 + ((codeUnit & 1023) << 10) | trailSurrogate & 1023;
              }
              HEAP32[outPtr >> 2] = codeUnit;
              outPtr += 4;
              if (outPtr + 4 > endPtr) break;
            }
            HEAP32[outPtr >> 2] = 0;
            return outPtr - startPtr;
          }
          function lengthBytesUTF32(str) {
            var len = 0;
            for (var i = 0; i < str.length; ++i) {
              var codeUnit = str.charCodeAt(i);
              if (codeUnit >= 55296 && codeUnit <= 57343) ++i;
              len += 4;
            }
            return len;
          }
          function __embind_register_std_wstring(rawType, charSize, name) {
            name = readLatin1String(name);
            var decodeString2, encodeString, getHeap, lengthBytesUTF, shift;
            if (charSize === 2) {
              decodeString2 = UTF16ToString;
              encodeString = stringToUTF16;
              lengthBytesUTF = lengthBytesUTF16;
              getHeap = () => HEAPU16;
              shift = 1;
            } else if (charSize === 4) {
              decodeString2 = UTF32ToString;
              encodeString = stringToUTF32;
              lengthBytesUTF = lengthBytesUTF32;
              getHeap = () => HEAPU32;
              shift = 2;
            }
            registerType(rawType, { name, "fromWireType": function(value) {
              var length = HEAPU32[value >> 2];
              var HEAP = getHeap();
              var str;
              var decodeStartPtr = value + 4;
              for (var i = 0; i <= length; ++i) {
                var currentBytePtr = value + 4 + i * charSize;
                if (i == length || HEAP[currentBytePtr >> shift] == 0) {
                  var maxReadBytes = currentBytePtr - decodeStartPtr;
                  var stringSegment = decodeString2(decodeStartPtr, maxReadBytes);
                  if (str === void 0) {
                    str = stringSegment;
                  } else {
                    str += String.fromCharCode(0);
                    str += stringSegment;
                  }
                  decodeStartPtr = currentBytePtr + charSize;
                }
              }
              _free(value);
              return str;
            }, "toWireType": function(destructors, value) {
              if (!(typeof value == "string")) {
                throwBindingError("Cannot pass non-string to C++ string type " + name);
              }
              var length = lengthBytesUTF(value);
              var ptr = _malloc(4 + length + charSize);
              HEAPU32[ptr >> 2] = length >> shift;
              encodeString(value, ptr + 4, length + charSize);
              if (destructors !== null) {
                destructors.push(_free, ptr);
              }
              return ptr;
            }, "argPackAdvance": 8, "readValueFromPointer": simpleReadValueFromPointer, destructorFunction: function(ptr) {
              _free(ptr);
            } });
          }
          function __embind_register_void(rawType, name) {
            name = readLatin1String(name);
            registerType(rawType, { isVoid: true, name, "argPackAdvance": 0, "fromWireType": function() {
              return void 0;
            }, "toWireType": function(destructors, o) {
              return void 0;
            } });
          }
          function _abort() {
            abort("native code called abort()");
          }
          function _emscripten_memcpy_big(dest, src, num) {
            HEAPU8.copyWithin(dest, src, src + num);
          }
          function getHeapMax() {
            return 2147483648;
          }
          function emscripten_realloc_buffer(size) {
            try {
              wasmMemory.grow(size - buffer.byteLength + 65535 >>> 16);
              updateGlobalBufferAndViews(wasmMemory.buffer);
              return 1;
            } catch (e) {
              err("emscripten_realloc_buffer: Attempted to grow heap from " + buffer.byteLength + " bytes to " + size + " bytes, but got error: " + e);
            }
          }
          function _emscripten_resize_heap(requestedSize) {
            var oldSize = HEAPU8.length;
            requestedSize = requestedSize >>> 0;
            assert(requestedSize > oldSize);
            var maxHeapSize = getHeapMax();
            if (requestedSize > maxHeapSize) {
              err("Cannot enlarge memory, asked to go up to " + requestedSize + " bytes, but the limit is " + maxHeapSize + " bytes!");
              return false;
            }
            let alignUp = (x, multiple) => x + (multiple - x % multiple) % multiple;
            for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
              var overGrownHeapSize = oldSize * (1 + 0.2 / cutDown);
              overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
              var newSize = Math.min(maxHeapSize, alignUp(Math.max(requestedSize, overGrownHeapSize), 65536));
              var replacement = emscripten_realloc_buffer(newSize);
              if (replacement) {
                return true;
              }
            }
            err("Failed to grow the heap from " + oldSize + " bytes to " + newSize + " bytes, not enough memory!");
            return false;
          }
          var ENV = {};
          function getExecutableName() {
            return thisProgram || "./this.program";
          }
          function getEnvStrings() {
            if (!getEnvStrings.strings) {
              var lang = (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8";
              var env = { "USER": "web_user", "LOGNAME": "web_user", "PATH": "/", "PWD": "/", "HOME": "/home/web_user", "LANG": lang, "_": getExecutableName() };
              for (var x in ENV) {
                if (ENV[x] === void 0) delete env[x];
                else env[x] = ENV[x];
              }
              var strings = [];
              for (var x in env) {
                strings.push(x + "=" + env[x]);
              }
              getEnvStrings.strings = strings;
            }
            return getEnvStrings.strings;
          }
          function writeAsciiToMemory(str, buffer2, dontAddNull) {
            for (var i = 0; i < str.length; ++i) {
              assert(str.charCodeAt(i) === (str.charCodeAt(i) & 255));
              HEAP8[buffer2++ >> 0] = str.charCodeAt(i);
            }
            if (!dontAddNull) HEAP8[buffer2 >> 0] = 0;
          }
          var SYSCALLS = { varargs: void 0, get: function() {
            assert(SYSCALLS.varargs != void 0);
            SYSCALLS.varargs += 4;
            var ret = HEAP32[SYSCALLS.varargs - 4 >> 2];
            return ret;
          }, getStr: function(ptr) {
            var ret = UTF8ToString(ptr);
            return ret;
          } };
          function _environ_get(__environ, environ_buf) {
            var bufSize = 0;
            getEnvStrings().forEach(function(string, i) {
              var ptr = environ_buf + bufSize;
              HEAPU32[__environ + i * 4 >> 2] = ptr;
              writeAsciiToMemory(string, ptr);
              bufSize += string.length + 1;
            });
            return 0;
          }
          function _environ_sizes_get(penviron_count, penviron_buf_size) {
            var strings = getEnvStrings();
            HEAPU32[penviron_count >> 2] = strings.length;
            var bufSize = 0;
            strings.forEach(function(string) {
              bufSize += string.length + 1;
            });
            HEAPU32[penviron_buf_size >> 2] = bufSize;
            return 0;
          }
          function _fd_close(fd) {
            abort("fd_close called without SYSCALLS_REQUIRE_FILESYSTEM");
          }
          function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
            return 70;
          }
          var printCharBuffers = [null, [], []];
          function printChar(stream, curr) {
            var buffer2 = printCharBuffers[stream];
            assert(buffer2);
            if (curr === 0 || curr === 10) {
              (stream === 1 ? out : err)(UTF8ArrayToString(buffer2, 0));
              buffer2.length = 0;
            } else {
              buffer2.push(curr);
            }
          }
          function flush_NO_FILESYSTEM() {
            _fflush(0);
            if (printCharBuffers[1].length) printChar(1, 10);
            if (printCharBuffers[2].length) printChar(2, 10);
          }
          function _fd_write(fd, iov, iovcnt, pnum) {
            var num = 0;
            for (var i = 0; i < iovcnt; i++) {
              var ptr = HEAPU32[iov >> 2];
              var len = HEAPU32[iov + 4 >> 2];
              iov += 8;
              for (var j = 0; j < len; j++) {
                printChar(fd, HEAPU8[ptr + j]);
              }
              num += len;
            }
            HEAPU32[pnum >> 2] = num;
            return 0;
          }
          function __isLeapYear(year) {
            return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
          }
          function __arraySum(array, index) {
            var sum = 0;
            for (var i = 0; i <= index; sum += array[i++]) {
            }
            return sum;
          }
          var __MONTH_DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
          var __MONTH_DAYS_REGULAR = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
          function __addDays(date, days) {
            var newDate = new Date(date.getTime());
            while (days > 0) {
              var leap = __isLeapYear(newDate.getFullYear());
              var currentMonth = newDate.getMonth();
              var daysInCurrentMonth = (leap ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR)[currentMonth];
              if (days > daysInCurrentMonth - newDate.getDate()) {
                days -= daysInCurrentMonth - newDate.getDate() + 1;
                newDate.setDate(1);
                if (currentMonth < 11) {
                  newDate.setMonth(currentMonth + 1);
                } else {
                  newDate.setMonth(0);
                  newDate.setFullYear(newDate.getFullYear() + 1);
                }
              } else {
                newDate.setDate(newDate.getDate() + days);
                return newDate;
              }
            }
            return newDate;
          }
          function intArrayFromString(stringy, dontAddNull, length) {
            var len = length > 0 ? length : lengthBytesUTF8(stringy) + 1;
            var u8array = new Array(len);
            var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
            if (dontAddNull) u8array.length = numBytesWritten;
            return u8array;
          }
          function _strftime(s, maxsize, format, tm) {
            var tm_zone = HEAP32[tm + 40 >> 2];
            var date = { tm_sec: HEAP32[tm >> 2], tm_min: HEAP32[tm + 4 >> 2], tm_hour: HEAP32[tm + 8 >> 2], tm_mday: HEAP32[tm + 12 >> 2], tm_mon: HEAP32[tm + 16 >> 2], tm_year: HEAP32[tm + 20 >> 2], tm_wday: HEAP32[tm + 24 >> 2], tm_yday: HEAP32[tm + 28 >> 2], tm_isdst: HEAP32[tm + 32 >> 2], tm_gmtoff: HEAP32[tm + 36 >> 2], tm_zone: tm_zone ? UTF8ToString(tm_zone) : "" };
            var pattern = UTF8ToString(format);
            var EXPANSION_RULES_1 = { "%c": "%a %b %d %H:%M:%S %Y", "%D": "%m/%d/%y", "%F": "%Y-%m-%d", "%h": "%b", "%r": "%I:%M:%S %p", "%R": "%H:%M", "%T": "%H:%M:%S", "%x": "%m/%d/%y", "%X": "%H:%M:%S", "%Ec": "%c", "%EC": "%C", "%Ex": "%m/%d/%y", "%EX": "%H:%M:%S", "%Ey": "%y", "%EY": "%Y", "%Od": "%d", "%Oe": "%e", "%OH": "%H", "%OI": "%I", "%Om": "%m", "%OM": "%M", "%OS": "%S", "%Ou": "%u", "%OU": "%U", "%OV": "%V", "%Ow": "%w", "%OW": "%W", "%Oy": "%y" };
            for (var rule in EXPANSION_RULES_1) {
              pattern = pattern.replace(new RegExp(rule, "g"), EXPANSION_RULES_1[rule]);
            }
            var WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            function leadingSomething(value, digits, character) {
              var str = typeof value == "number" ? value.toString() : value || "";
              while (str.length < digits) {
                str = character[0] + str;
              }
              return str;
            }
            function leadingNulls(value, digits) {
              return leadingSomething(value, digits, "0");
            }
            function compareByDay(date1, date2) {
              function sgn(value) {
                return value < 0 ? -1 : value > 0 ? 1 : 0;
              }
              var compare2;
              if ((compare2 = sgn(date1.getFullYear() - date2.getFullYear())) === 0) {
                if ((compare2 = sgn(date1.getMonth() - date2.getMonth())) === 0) {
                  compare2 = sgn(date1.getDate() - date2.getDate());
                }
              }
              return compare2;
            }
            function getFirstWeekStartDate(janFourth) {
              switch (janFourth.getDay()) {
                case 0:
                  return new Date(janFourth.getFullYear() - 1, 11, 29);
                case 1:
                  return janFourth;
                case 2:
                  return new Date(janFourth.getFullYear(), 0, 3);
                case 3:
                  return new Date(janFourth.getFullYear(), 0, 2);
                case 4:
                  return new Date(janFourth.getFullYear(), 0, 1);
                case 5:
                  return new Date(janFourth.getFullYear() - 1, 11, 31);
                case 6:
                  return new Date(janFourth.getFullYear() - 1, 11, 30);
              }
            }
            function getWeekBasedYear(date2) {
              var thisDate = __addDays(new Date(date2.tm_year + 1900, 0, 1), date2.tm_yday);
              var janFourthThisYear = new Date(thisDate.getFullYear(), 0, 4);
              var janFourthNextYear = new Date(thisDate.getFullYear() + 1, 0, 4);
              var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
              var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
              if (compareByDay(firstWeekStartThisYear, thisDate) <= 0) {
                if (compareByDay(firstWeekStartNextYear, thisDate) <= 0) {
                  return thisDate.getFullYear() + 1;
                }
                return thisDate.getFullYear();
              }
              return thisDate.getFullYear() - 1;
            }
            var EXPANSION_RULES_2 = { "%a": function(date2) {
              return WEEKDAYS[date2.tm_wday].substring(0, 3);
            }, "%A": function(date2) {
              return WEEKDAYS[date2.tm_wday];
            }, "%b": function(date2) {
              return MONTHS[date2.tm_mon].substring(0, 3);
            }, "%B": function(date2) {
              return MONTHS[date2.tm_mon];
            }, "%C": function(date2) {
              var year = date2.tm_year + 1900;
              return leadingNulls(year / 100 | 0, 2);
            }, "%d": function(date2) {
              return leadingNulls(date2.tm_mday, 2);
            }, "%e": function(date2) {
              return leadingSomething(date2.tm_mday, 2, " ");
            }, "%g": function(date2) {
              return getWeekBasedYear(date2).toString().substring(2);
            }, "%G": function(date2) {
              return getWeekBasedYear(date2);
            }, "%H": function(date2) {
              return leadingNulls(date2.tm_hour, 2);
            }, "%I": function(date2) {
              var twelveHour = date2.tm_hour;
              if (twelveHour == 0) twelveHour = 12;
              else if (twelveHour > 12) twelveHour -= 12;
              return leadingNulls(twelveHour, 2);
            }, "%j": function(date2) {
              return leadingNulls(date2.tm_mday + __arraySum(__isLeapYear(date2.tm_year + 1900) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, date2.tm_mon - 1), 3);
            }, "%m": function(date2) {
              return leadingNulls(date2.tm_mon + 1, 2);
            }, "%M": function(date2) {
              return leadingNulls(date2.tm_min, 2);
            }, "%n": function() {
              return "\n";
            }, "%p": function(date2) {
              if (date2.tm_hour >= 0 && date2.tm_hour < 12) {
                return "AM";
              }
              return "PM";
            }, "%S": function(date2) {
              return leadingNulls(date2.tm_sec, 2);
            }, "%t": function() {
              return "	";
            }, "%u": function(date2) {
              return date2.tm_wday || 7;
            }, "%U": function(date2) {
              var days = date2.tm_yday + 7 - date2.tm_wday;
              return leadingNulls(Math.floor(days / 7), 2);
            }, "%V": function(date2) {
              var val = Math.floor((date2.tm_yday + 7 - (date2.tm_wday + 6) % 7) / 7);
              if ((date2.tm_wday + 371 - date2.tm_yday - 2) % 7 <= 2) {
                val++;
              }
              if (!val) {
                val = 52;
                var dec31 = (date2.tm_wday + 7 - date2.tm_yday - 1) % 7;
                if (dec31 == 4 || dec31 == 5 && __isLeapYear(date2.tm_year % 400 - 1)) {
                  val++;
                }
              } else if (val == 53) {
                var jan1 = (date2.tm_wday + 371 - date2.tm_yday) % 7;
                if (jan1 != 4 && (jan1 != 3 || !__isLeapYear(date2.tm_year))) val = 1;
              }
              return leadingNulls(val, 2);
            }, "%w": function(date2) {
              return date2.tm_wday;
            }, "%W": function(date2) {
              var days = date2.tm_yday + 7 - (date2.tm_wday + 6) % 7;
              return leadingNulls(Math.floor(days / 7), 2);
            }, "%y": function(date2) {
              return (date2.tm_year + 1900).toString().substring(2);
            }, "%Y": function(date2) {
              return date2.tm_year + 1900;
            }, "%z": function(date2) {
              var off = date2.tm_gmtoff;
              var ahead = off >= 0;
              off = Math.abs(off) / 60;
              off = off / 60 * 100 + off % 60;
              return (ahead ? "+" : "-") + String("0000" + off).slice(-4);
            }, "%Z": function(date2) {
              return date2.tm_zone;
            }, "%%": function() {
              return "%";
            } };
            pattern = pattern.replace(/%%/g, "\0\0");
            for (var rule in EXPANSION_RULES_2) {
              if (pattern.includes(rule)) {
                pattern = pattern.replace(new RegExp(rule, "g"), EXPANSION_RULES_2[rule](date));
              }
            }
            pattern = pattern.replace(/\0\0/g, "%");
            var bytes = intArrayFromString(pattern, false);
            if (bytes.length > maxsize) {
              return 0;
            }
            writeArrayToMemory(bytes, s);
            return bytes.length - 1;
          }
          function _strftime_l(s, maxsize, format, tm) {
            return _strftime(s, maxsize, format, tm);
          }
          function uleb128Encode(n, target) {
            assert(n < 16384);
            if (n < 128) {
              target.push(n);
            } else {
              target.push(n % 128 | 128, n >> 7);
            }
          }
          function sigToWasmTypes(sig) {
            var typeNames = { "i": "i32", "j": "i64", "f": "f32", "d": "f64", "p": "i32" };
            var type = { parameters: [], results: sig[0] == "v" ? [] : [typeNames[sig[0]]] };
            for (var i = 1; i < sig.length; ++i) {
              assert(sig[i] in typeNames, "invalid signature char: " + sig[i]);
              type.parameters.push(typeNames[sig[i]]);
            }
            return type;
          }
          function convertJsFunctionToWasm(func, sig) {
            if (typeof WebAssembly.Function == "function") {
              return new WebAssembly.Function(sigToWasmTypes(sig), func);
            }
            var typeSectionBody = [1, 96];
            var sigRet = sig.slice(0, 1);
            var sigParam = sig.slice(1);
            var typeCodes = { "i": 127, "p": 127, "j": 126, "f": 125, "d": 124 };
            uleb128Encode(sigParam.length, typeSectionBody);
            for (var i = 0; i < sigParam.length; ++i) {
              assert(sigParam[i] in typeCodes, "invalid signature char: " + sigParam[i]);
              typeSectionBody.push(typeCodes[sigParam[i]]);
            }
            if (sigRet == "v") {
              typeSectionBody.push(0);
            } else {
              typeSectionBody.push(1, typeCodes[sigRet]);
            }
            var bytes = [0, 97, 115, 109, 1, 0, 0, 0, 1];
            uleb128Encode(typeSectionBody.length, bytes);
            bytes.push.apply(bytes, typeSectionBody);
            bytes.push(2, 7, 1, 1, 101, 1, 102, 0, 0, 7, 5, 1, 1, 102, 0, 0);
            var module2 = new WebAssembly.Module(new Uint8Array(bytes));
            var instance = new WebAssembly.Instance(module2, { "e": { "f": func } });
            var wrappedFunc = instance.exports["f"];
            return wrappedFunc;
          }
          function updateTableMap(offset, count) {
            if (functionsInTableMap) {
              for (var i = offset; i < offset + count; i++) {
                var item = getWasmTableEntry(i);
                if (item) {
                  functionsInTableMap.set(item, i);
                }
              }
            }
          }
          var functionsInTableMap = void 0;
          var freeTableIndexes = [];
          function getEmptyTableSlot() {
            if (freeTableIndexes.length) {
              return freeTableIndexes.pop();
            }
            try {
              wasmTable.grow(1);
            } catch (err2) {
              if (!(err2 instanceof RangeError)) {
                throw err2;
              }
              throw "Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.";
            }
            return wasmTable.length - 1;
          }
          function setWasmTableEntry(idx, func) {
            wasmTable.set(idx, func);
            wasmTableMirror[idx] = wasmTable.get(idx);
          }
          var ALLOC_STACK = 1;
          function getCFunc(ident) {
            var func = Module["_" + ident];
            assert(func, "Cannot call unknown function " + ident + ", make sure it is exported");
            return func;
          }
          function ccall(ident, returnType, argTypes, args, opts) {
            var toC = { "string": (str) => {
              var ret2 = 0;
              if (str !== null && str !== void 0 && str !== 0) {
                var len = (str.length << 2) + 1;
                ret2 = stackAlloc(len);
                stringToUTF8(str, ret2, len);
              }
              return ret2;
            }, "array": (arr) => {
              var ret2 = stackAlloc(arr.length);
              writeArrayToMemory(arr, ret2);
              return ret2;
            } };
            function convertReturnValue(ret2) {
              if (returnType === "string") {
                return UTF8ToString(ret2);
              }
              if (returnType === "boolean") return Boolean(ret2);
              return ret2;
            }
            var func = getCFunc(ident);
            var cArgs = [];
            var stack = 0;
            assert(returnType !== "array", 'Return type should not be "array".');
            if (args) {
              for (var i = 0; i < args.length; i++) {
                var converter = toC[argTypes[i]];
                if (converter) {
                  if (stack === 0) stack = stackSave();
                  cArgs[i] = converter(args[i]);
                } else {
                  cArgs[i] = args[i];
                }
              }
            }
            var ret = func.apply(null, cArgs);
            function onDone(ret2) {
              if (stack !== 0) stackRestore(stack);
              return convertReturnValue(ret2);
            }
            ret = onDone(ret);
            return ret;
          }
          embind_init_charCodes();
          BindingError = Module["BindingError"] = extendError(Error, "BindingError");
          InternalError = Module["InternalError"] = extendError(Error, "InternalError");
          init_ClassHandle();
          init_embind();
          init_RegisteredPointer();
          UnboundTypeError = Module["UnboundTypeError"] = extendError(Error, "UnboundTypeError");
          init_emval();
          var ASSERTIONS = true;
          function checkIncomingModuleAPI() {
            ignoredModuleProp("fetchSettings");
          }
          var asmLibraryArg = { "__cxa_allocate_exception": ___cxa_allocate_exception, "__cxa_throw": ___cxa_throw, "_embind_register_bigint": __embind_register_bigint, "_embind_register_bool": __embind_register_bool, "_embind_register_class": __embind_register_class, "_embind_register_class_constructor": __embind_register_class_constructor, "_embind_register_class_function": __embind_register_class_function, "_embind_register_emval": __embind_register_emval, "_embind_register_float": __embind_register_float, "_embind_register_integer": __embind_register_integer, "_embind_register_memory_view": __embind_register_memory_view, "_embind_register_std_string": __embind_register_std_string, "_embind_register_std_wstring": __embind_register_std_wstring, "_embind_register_void": __embind_register_void, "abort": _abort, "emscripten_memcpy_big": _emscripten_memcpy_big, "emscripten_resize_heap": _emscripten_resize_heap, "environ_get": _environ_get, "environ_sizes_get": _environ_sizes_get, "fd_close": _fd_close, "fd_seek": _fd_seek, "fd_write": _fd_write, "strftime_l": _strftime_l };
          var asm = createWasm();
          var ___wasm_call_ctors = Module["___wasm_call_ctors"] = createExportWrapper("__wasm_call_ctors");
          var _malloc = Module["_malloc"] = createExportWrapper("malloc");
          var _free = Module["_free"] = createExportWrapper("free");
          var ___getTypeName = Module["___getTypeName"] = createExportWrapper("__getTypeName");
          var __embind_initialize_bindings = Module["__embind_initialize_bindings"] = createExportWrapper("_embind_initialize_bindings");
          var ___errno_location = Module["___errno_location"] = createExportWrapper("__errno_location");
          var _fflush = Module["_fflush"] = createExportWrapper("fflush");
          var _emscripten_stack_init = Module["_emscripten_stack_init"] = function() {
            return (_emscripten_stack_init = Module["_emscripten_stack_init"] = Module["asm"]["emscripten_stack_init"]).apply(null, arguments);
          };
          var _emscripten_stack_get_free = Module["_emscripten_stack_get_free"] = function() {
            return (_emscripten_stack_get_free = Module["_emscripten_stack_get_free"] = Module["asm"]["emscripten_stack_get_free"]).apply(null, arguments);
          };
          var _emscripten_stack_get_base = Module["_emscripten_stack_get_base"] = function() {
            return (_emscripten_stack_get_base = Module["_emscripten_stack_get_base"] = Module["asm"]["emscripten_stack_get_base"]).apply(null, arguments);
          };
          var _emscripten_stack_get_end = Module["_emscripten_stack_get_end"] = function() {
            return (_emscripten_stack_get_end = Module["_emscripten_stack_get_end"] = Module["asm"]["emscripten_stack_get_end"]).apply(null, arguments);
          };
          var stackSave = Module["stackSave"] = createExportWrapper("stackSave");
          var stackRestore = Module["stackRestore"] = createExportWrapper("stackRestore");
          var stackAlloc = Module["stackAlloc"] = createExportWrapper("stackAlloc");
          var ___cxa_is_pointer_type = Module["___cxa_is_pointer_type"] = createExportWrapper("__cxa_is_pointer_type");
          var dynCall_viijii = Module["dynCall_viijii"] = createExportWrapper("dynCall_viijii");
          var dynCall_ji = Module["dynCall_ji"] = createExportWrapper("dynCall_ji");
          var dynCall_jiji = Module["dynCall_jiji"] = createExportWrapper("dynCall_jiji");
          var dynCall_iiiiij = Module["dynCall_iiiiij"] = createExportWrapper("dynCall_iiiiij");
          var dynCall_iiiiijj = Module["dynCall_iiiiijj"] = createExportWrapper("dynCall_iiiiijj");
          var dynCall_iiiiiijj = Module["dynCall_iiiiiijj"] = createExportWrapper("dynCall_iiiiiijj");
          var unexportedRuntimeSymbols = ["run", "UTF8ArrayToString", "UTF8ToString", "stringToUTF8Array", "stringToUTF8", "lengthBytesUTF8", "addOnPreRun", "addOnInit", "addOnPreMain", "addOnExit", "addOnPostRun", "addRunDependency", "removeRunDependency", "FS_createFolder", "FS_createPath", "FS_createDataFile", "FS_createPreloadedFile", "FS_createLazyFile", "FS_createLink", "FS_createDevice", "FS_unlink", "getLEB", "getFunctionTables", "alignFunctionTables", "registerFunctions", "prettyPrint", "getCompilerSetting", "print", "printErr", "callMain", "abort", "keepRuntimeAlive", "wasmMemory", "stackAlloc", "stackSave", "stackRestore", "getTempRet0", "setTempRet0", "writeStackCookie", "checkStackCookie", "ptrToString", "zeroMemory", "stringToNewUTF8", "exitJS", "getHeapMax", "emscripten_realloc_buffer", "ENV", "ERRNO_CODES", "ERRNO_MESSAGES", "setErrNo", "inetPton4", "inetNtop4", "inetPton6", "inetNtop6", "readSockaddr", "writeSockaddr", "DNS", "getHostByName", "Protocols", "Sockets", "getRandomDevice", "warnOnce", "traverseStack", "UNWIND_CACHE", "convertPCtoSourceLocation", "readAsmConstArgsArray", "readAsmConstArgs", "mainThreadEM_ASM", "jstoi_q", "jstoi_s", "getExecutableName", "listenOnce", "autoResumeAudioContext", "dynCallLegacy", "getDynCaller", "dynCall", "handleException", "runtimeKeepalivePush", "runtimeKeepalivePop", "callUserCallback", "maybeExit", "safeSetTimeout", "asmjsMangle", "asyncLoad", "alignMemory", "mmapAlloc", "writeI53ToI64", "writeI53ToI64Clamped", "writeI53ToI64Signaling", "writeI53ToU64Clamped", "writeI53ToU64Signaling", "readI53FromI64", "readI53FromU64", "convertI32PairToI53", "convertI32PairToI53Checked", "convertU32PairToI53", "getCFunc", "ccall", "cwrap", "uleb128Encode", "sigToWasmTypes", "convertJsFunctionToWasm", "freeTableIndexes", "functionsInTableMap", "getEmptyTableSlot", "updateTableMap", "addFunction", "removeFunction", "reallyNegative", "unSign", "strLen", "reSign", "formatString", "setValue", "getValue", "PATH", "PATH_FS", "intArrayFromString", "intArrayToString", "AsciiToString", "stringToAscii", "UTF16Decoder", "UTF16ToString", "stringToUTF16", "lengthBytesUTF16", "UTF32ToString", "stringToUTF32", "lengthBytesUTF32", "allocateUTF8", "allocateUTF8OnStack", "writeStringToMemory", "writeArrayToMemory", "writeAsciiToMemory", "SYSCALLS", "getSocketFromFD", "getSocketAddress", "JSEvents", "registerKeyEventCallback", "specialHTMLTargets", "maybeCStringToJsString", "findEventTarget", "findCanvasEventTarget", "getBoundingClientRect", "fillMouseEventData", "registerMouseEventCallback", "registerWheelEventCallback", "registerUiEventCallback", "registerFocusEventCallback", "fillDeviceOrientationEventData", "registerDeviceOrientationEventCallback", "fillDeviceMotionEventData", "registerDeviceMotionEventCallback", "screenOrientation", "fillOrientationChangeEventData", "registerOrientationChangeEventCallback", "fillFullscreenChangeEventData", "registerFullscreenChangeEventCallback", "JSEvents_requestFullscreen", "JSEvents_resizeCanvasForFullscreen", "registerRestoreOldStyle", "hideEverythingExceptGivenElement", "restoreHiddenElements", "setLetterbox", "currentFullscreenStrategy", "restoreOldWindowedStyle", "softFullscreenResizeWebGLRenderTarget", "doRequestFullscreen", "fillPointerlockChangeEventData", "registerPointerlockChangeEventCallback", "registerPointerlockErrorEventCallback", "requestPointerLock", "fillVisibilityChangeEventData", "registerVisibilityChangeEventCallback", "registerTouchEventCallback", "fillGamepadEventData", "registerGamepadEventCallback", "registerBeforeUnloadEventCallback", "fillBatteryEventData", "battery", "registerBatteryEventCallback", "setCanvasElementSize", "getCanvasElementSize", "demangle", "demangleAll", "jsStackTrace", "stackTrace", "ExitStatus", "getEnvStrings", "checkWasiClock", "flush_NO_FILESYSTEM", "dlopenMissingError", "setImmediateWrapped", "clearImmediateWrapped", "polyfillSetImmediate", "uncaughtExceptionCount", "exceptionLast", "exceptionCaught", "ExceptionInfo", "exception_addRef", "exception_decRef", "Browser", "setMainLoop", "wget", "FS", "MEMFS", "TTY", "PIPEFS", "SOCKFS", "_setNetworkCallback", "tempFixedLengthArray", "miniTempWebGLFloatBuffers", "heapObjectForWebGLType", "heapAccessShiftForWebGLHeap", "GL", "emscriptenWebGLGet", "computeUnpackAlignedImageSize", "emscriptenWebGLGetTexPixelData", "emscriptenWebGLGetUniform", "webglGetUniformLocation", "webglPrepareUniformLocationsBeforeFirstUse", "webglGetLeftBracePos", "emscriptenWebGLGetVertexAttrib", "writeGLArray", "AL", "SDL_unicode", "SDL_ttfContext", "SDL_audio", "SDL", "SDL_gfx", "GLUT", "EGL", "GLFW_Window", "GLFW", "GLEW", "IDBStore", "runAndAbortIfError", "ALLOC_NORMAL", "ALLOC_STACK", "allocate", "InternalError", "BindingError", "UnboundTypeError", "PureVirtualError", "init_embind", "throwInternalError", "throwBindingError", "throwUnboundTypeError", "ensureOverloadTable", "exposePublicSymbol", "replacePublicSymbol", "extendError", "createNamedFunction", "embindRepr", "registeredInstances", "getBasestPointer", "registerInheritedInstance", "unregisterInheritedInstance", "getInheritedInstance", "getInheritedInstanceCount", "getLiveInheritedInstances", "registeredTypes", "awaitingDependencies", "typeDependencies", "registeredPointers", "registerType", "whenDependentTypesAreResolved", "embind_charCodes", "embind_init_charCodes", "readLatin1String", "getTypeName", "heap32VectorToArray", "requireRegisteredType", "getShiftFromSize", "integerReadValueFromPointer", "enumReadValueFromPointer", "floatReadValueFromPointer", "simpleReadValueFromPointer", "runDestructors", "new_", "craftInvokerFunction", "embind__requireFunction", "tupleRegistrations", "structRegistrations", "genericPointerToWireType", "constNoSmartPtrRawPointerToWireType", "nonConstNoSmartPtrRawPointerToWireType", "init_RegisteredPointer", "RegisteredPointer", "RegisteredPointer_getPointee", "RegisteredPointer_destructor", "RegisteredPointer_deleteObject", "RegisteredPointer_fromWireType", "runDestructor", "releaseClassHandle", "finalizationRegistry", "detachFinalizer_deps", "detachFinalizer", "attachFinalizer", "makeClassHandle", "init_ClassHandle", "ClassHandle", "ClassHandle_isAliasOf", "throwInstanceAlreadyDeleted", "ClassHandle_clone", "ClassHandle_delete", "deletionQueue", "ClassHandle_isDeleted", "ClassHandle_deleteLater", "flushPendingDeletes", "delayFunction", "setDelayFunction", "RegisteredClass", "shallowCopyInternalPointer", "downcastPointer", "upcastPointer", "validateThis", "char_0", "char_9", "makeLegalFunctionName", "emval_handle_array", "emval_free_list", "emval_symbols", "init_emval", "count_emval_handles", "get_first_emval", "getStringOrSymbol", "Emval", "emval_newers", "craftEmvalAllocator", "emval_get_global", "emval_lookupTypes", "emval_allocateDestructors", "emval_methodCallers", "emval_addMethodCaller", "emval_registeredMethods"];
          unexportedRuntimeSymbols.forEach(unexportedRuntimeSymbol);
          var missingLibrarySymbols = ["ptrToString", "zeroMemory", "stringToNewUTF8", "exitJS", "setErrNo", "inetPton4", "inetNtop4", "inetPton6", "inetNtop6", "readSockaddr", "writeSockaddr", "getHostByName", "getRandomDevice", "traverseStack", "convertPCtoSourceLocation", "readAsmConstArgs", "mainThreadEM_ASM", "jstoi_q", "jstoi_s", "listenOnce", "autoResumeAudioContext", "runtimeKeepalivePush", "runtimeKeepalivePop", "callUserCallback", "maybeExit", "safeSetTimeout", "asmjsMangle", "asyncLoad", "alignMemory", "mmapAlloc", "writeI53ToI64", "writeI53ToI64Clamped", "writeI53ToI64Signaling", "writeI53ToU64Clamped", "writeI53ToU64Signaling", "readI53FromI64", "readI53FromU64", "convertI32PairToI53", "convertU32PairToI53", "reallyNegative", "unSign", "strLen", "reSign", "formatString", "getSocketFromFD", "getSocketAddress", "registerKeyEventCallback", "maybeCStringToJsString", "findEventTarget", "findCanvasEventTarget", "getBoundingClientRect", "fillMouseEventData", "registerMouseEventCallback", "registerWheelEventCallback", "registerUiEventCallback", "registerFocusEventCallback", "fillDeviceOrientationEventData", "registerDeviceOrientationEventCallback", "fillDeviceMotionEventData", "registerDeviceMotionEventCallback", "screenOrientation", "fillOrientationChangeEventData", "registerOrientationChangeEventCallback", "fillFullscreenChangeEventData", "registerFullscreenChangeEventCallback", "JSEvents_requestFullscreen", "JSEvents_resizeCanvasForFullscreen", "registerRestoreOldStyle", "hideEverythingExceptGivenElement", "restoreHiddenElements", "setLetterbox", "softFullscreenResizeWebGLRenderTarget", "doRequestFullscreen", "fillPointerlockChangeEventData", "registerPointerlockChangeEventCallback", "registerPointerlockErrorEventCallback", "requestPointerLock", "fillVisibilityChangeEventData", "registerVisibilityChangeEventCallback", "registerTouchEventCallback", "fillGamepadEventData", "registerGamepadEventCallback", "registerBeforeUnloadEventCallback", "fillBatteryEventData", "battery", "registerBatteryEventCallback", "setCanvasElementSize", "getCanvasElementSize", "checkWasiClock", "setImmediateWrapped", "clearImmediateWrapped", "polyfillSetImmediate", "exception_addRef", "exception_decRef", "setMainLoop", "_setNetworkCallback", "heapObjectForWebGLType", "heapAccessShiftForWebGLHeap", "emscriptenWebGLGet", "computeUnpackAlignedImageSize", "emscriptenWebGLGetTexPixelData", "emscriptenWebGLGetUniform", "webglGetUniformLocation", "webglPrepareUniformLocationsBeforeFirstUse", "webglGetLeftBracePos", "emscriptenWebGLGetVertexAttrib", "writeGLArray", "SDL_unicode", "SDL_ttfContext", "SDL_audio", "GLFW_Window", "runAndAbortIfError", "registerInheritedInstance", "unregisterInheritedInstance", "requireRegisteredType", "enumReadValueFromPointer", "validateThis", "getStringOrSymbol", "craftEmvalAllocator", "emval_get_global", "emval_lookupTypes", "emval_allocateDestructors", "emval_addMethodCaller"];
          missingLibrarySymbols.forEach(missingLibrarySymbol);
          var calledRun;
          dependenciesFulfilled = function runCaller() {
            if (!calledRun) run();
            if (!calledRun) dependenciesFulfilled = runCaller;
          };
          function stackCheckInit() {
            _emscripten_stack_init();
            writeStackCookie();
          }
          function run(args) {
            args = args || arguments_;
            if (runDependencies > 0) {
              return;
            }
            stackCheckInit();
            preRun();
            if (runDependencies > 0) {
              return;
            }
            function doRun() {
              if (calledRun) return;
              calledRun = true;
              Module["calledRun"] = true;
              if (ABORT) return;
              initRuntime();
              readyPromiseResolve(Module);
              if (Module["onRuntimeInitialized"]) Module["onRuntimeInitialized"]();
              assert(!Module["_main"], 'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]');
              postRun();
            }
            if (Module["setStatus"]) {
              Module["setStatus"]("Running...");
              setTimeout(function() {
                setTimeout(function() {
                  Module["setStatus"]("");
                }, 1);
                doRun();
              }, 1);
            } else {
              doRun();
            }
            checkStackCookie();
          }
          if (Module["preInit"]) {
            if (typeof Module["preInit"] == "function") Module["preInit"] = [Module["preInit"]];
            while (Module["preInit"].length > 0) {
              Module["preInit"].pop()();
            }
          }
          run();
          return createLazPerf4.ready;
        });
      })();
      if (typeof exports === "object" && typeof module === "object")
        module.exports = createLazPerf3;
      else if (typeof define === "function" && define["amd"])
        define([], function() {
          return createLazPerf3;
        });
      else if (typeof exports === "object")
        exports["createLazPerf"] = createLazPerf3;
    }
  });

  // node_modules/laz-perf/lib/web/index.js
  var require_web = __commonJS({
    "node_modules/laz-perf/lib/web/index.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.LazPerf = exports.create = exports.createLazPerf = void 0;
      var laz_perf_js_1 = __importDefault(require_laz_perf());
      exports.createLazPerf = laz_perf_js_1.default;
      exports.create = laz_perf_js_1.default;
      exports.LazPerf = { create: laz_perf_js_1.default };
    }
  });

  // src/index.js
  var index_exports = {};
  __export(index_exports, {
    create: () => create10,
    default: () => index_default,
    version: () => version
  });

  // node_modules/copc/lib/ept/index.js
  var ept_exports = {};
  __export(ept_exports, {
    Hierarchy: () => Hierarchy
  });

  // node_modules/copc/lib/ept/hierarchy.js
  var Hierarchy = { parse };
  function parse(e) {
    return Object.entries(e).reduce((h, [keystring, pointCount]) => {
      if (pointCount === -1)
        h.pages[keystring] = {};
      else if (pointCount)
        h.nodes[keystring] = { pointCount };
      return h;
    }, { nodes: {}, pages: {} });
  }

  // node_modules/copc/lib/copc/constants.js
  var constants_exports = {};
  __export(constants_exports, {
    hierarchyItemLength: () => hierarchyItemLength,
    infoLength: () => infoLength
  });
  var infoLength = 160;
  var hierarchyItemLength = 32;

  // node_modules/copc/lib/las/index.js
  var las_exports = {};
  __export(las_exports, {
    Constants: () => constants_exports2,
    Dimensions: () => Dimensions,
    ExtraBytes: () => ExtraBytes,
    Extractor: () => Extractor,
    Header: () => Header,
    PointData: () => PointData,
    View: () => View,
    Vlr: () => Vlr
  });

  // node_modules/copc/lib/las/constants.js
  var constants_exports2 = {};
  __export(constants_exports2, {
    evlrHeaderLength: () => evlrHeaderLength,
    minHeaderLength: () => minHeaderLength,
    vlrHeaderLength: () => vlrHeaderLength
  });
  var minHeaderLength = 375;
  var vlrHeaderLength = 54;
  var evlrHeaderLength = 60;

  // node_modules/copc/lib/utils/big-int.js
  function parseBigInt(v) {
    if (v > BigInt(Number.MAX_SAFE_INTEGER) || v < BigInt(-Number.MAX_SAFE_INTEGER)) {
      throw new Error(`Cannot convert bigint to number: ${v}`);
    }
    return Number(v);
  }
  function getBigUint64(dv, byteOffset, littleEndian) {
    if (dv.getBigUint64)
      return dv.getBigUint64(byteOffset, littleEndian);
    const [h, l] = littleEndian ? [4, 0] : [0, 4];
    const wh = BigInt(dv.getUint32(byteOffset + h, littleEndian));
    const wl = BigInt(dv.getUint32(byteOffset + l, littleEndian));
    return (wh << BigInt(32)) + wl;
  }

  // node_modules/copc/lib/utils/binary.js
  var Binary = { toDataView, toCString };
  function toDataView(buffer) {
    return new DataView(buffer.buffer, buffer.byteOffset, buffer.length);
  }
  function toCString(buffer) {
    const dv = toDataView(buffer);
    let s = "";
    for (let i = 0; i < dv.byteLength; ++i) {
      const c = dv.getInt8(i);
      if (c === 0)
        return s;
      s += String.fromCharCode(c);
    }
    return s;
  }

  // node_modules/copc/lib/utils/dimension.js
  var Type = {
    int8: { type: "signed", size: 1 },
    int16: { type: "signed", size: 2 },
    int32: { type: "signed", size: 4 },
    int64: { type: "signed", size: 8 },
    uint8: { type: "unsigned", size: 1 },
    uint16: { type: "unsigned", size: 2 },
    uint32: { type: "unsigned", size: 4 },
    uint64: { type: "unsigned", size: 8 },
    float32: { type: "float", size: 4 },
    float64: { type: "float", size: 8 },
    // Aliases.
    float: { type: "float", size: 4 },
    double: { type: "float", size: 8 },
    // Minimum size of one byte, so this is a convenience for a byte.
    bool: { type: "unsigned", size: 1 },
    boolean: { type: "unsigned", size: 1 }
  };
  var Dimension = { Type, ctype };
  function ctype({ type, size }) {
    switch (type) {
      case "signed": {
        switch (size) {
          case 1:
            return "int8";
          case 2:
            return "int16";
          case 4:
            return "int32";
          case 8:
            return "int64";
        }
      }
      case "unsigned": {
        switch (size) {
          case 1:
            return "uint8";
          case 2:
            return "uint16";
          case 4:
            return "uint32";
          case 8:
            return "uint64";
        }
      }
      case "float": {
        switch (size) {
          case 4:
            return "float";
          case 8:
            return "double";
        }
      }
    }
    throw new Error(`Invalid dimension type/size: ${type}/${size}`);
  }

  // node_modules/copc/lib/utils/getter.js
  var import_cross_fetch = __toESM(require_browser_ponyfill(), 1);
  var Getter = { create, http: getHttpGetter, file: getFsGetter };
  function create(arg) {
    if (typeof arg === "function")
      return arg;
    if (arg.startsWith("http://") || arg.startsWith("https://")) {
      return getHttpGetter(arg);
    }
    return getFsGetter(arg);
  }
  function getHttpGetter(filename) {
    return async function getter(begin, end) {
      if (begin < 0 || end < 0 || begin > end)
        throw new Error("Invalid range");
      const response = await (0, import_cross_fetch.default)(filename, {
        headers: { Range: `bytes=${begin}-${end - 1}` }
      });
      const ab = await response.arrayBuffer();
      return new Uint8Array(ab);
    };
  }
  function getFsGetter(filename) {
    return async function getter(begin, end) {
      const fs = await Promise.resolve().then(() => __toESM(require_fs(), 1));
      async function read2(begin2 = 0, end2 = Infinity) {
        if (begin2 < 0 || end2 < 0 || begin2 > end2)
          throw new Error("Invalid range");
        await fs.promises.access(filename);
        const stream = fs.createReadStream(filename, {
          start: begin2,
          end: end2 - 1,
          autoClose: true
        });
        return drain(stream);
      }
      return read2(begin, end);
    };
  }
  async function drain(stream) {
    return await new Promise((resolve, reject) => {
      const chunks = [];
      stream.on("data", (chunk) => chunks.push(chunk));
      stream.on("error", reject);
      stream.on("end", () => resolve(Buffer.concat(chunks)));
    });
  }

  // node_modules/copc/lib/utils/key.js
  var Key = { create: create2, parse: parse2, toString, step, up, compare, depth };
  function create2(key2, x = 0, y = 0, z = 0) {
    if (typeof key2 !== "number")
      return parse2(key2);
    return [key2, x, y, z];
  }
  function parse2(s) {
    if (typeof s !== "string")
      return s;
    const [d, x, y, z, ...rest] = s.split("-").map((s2) => parseInt(s2, 10));
    const key2 = [d, x, y, z];
    if (rest.length !== 0 || key2.some((v) => typeof v !== "number" || Number.isNaN(v))) {
      throw new Error(`Invalid key: ${s}`);
    }
    return key2;
  }
  function toString(key2) {
    if (typeof key2 === "string")
      return key2;
    return key2.join("-");
  }
  function step(key2, [a, b, c]) {
    const [d, x, y, z] = Key.create(key2);
    return [d + 1, x * 2 + a, y * 2 + b, z * 2 + c];
  }
  function up(key2, n = 1) {
    const [d, x, y, z] = Key.create(key2);
    return [d - n, x >> n, y >> n, z >> n];
  }
  function compare(a, b) {
    for (let i = 0; i < a.length; ++i) {
      if (a[i] < b[i])
        return -1;
      if (a[i] > b[i])
        return 1;
    }
    return 0;
  }
  function depth(key2) {
    return key2[0];
  }

  // node_modules/copc/lib/utils/scale.js
  var Scale = {
    apply: (v, scale = 1, offset = 0) => (v - offset) / scale,
    unapply: (v, scale = 1, offset = 0) => v * scale + offset
  };

  // node_modules/copc/lib/las/extra-bytes.js
  var ExtraBytes = { getDimension, parse: parse3, parseOne };
  var entryLength = 192;
  function getDimension({ type, length: size }) {
    switch (type) {
      case "signed":
      case "unsigned":
        switch (size) {
          case 1:
          case 2:
          case 4:
          case 8:
            return { type, size };
        }
      case "float":
        switch (size) {
          case 4:
          case 8:
            return { type, size };
        }
    }
  }
  function parse3(buffer) {
    if (buffer.byteLength % entryLength !== 0) {
      throw new Error(`Invalid extra bytes VLR length: ${buffer.byteLength}`);
    }
    const result = [];
    for (let offset = 0; offset < buffer.byteLength; offset += entryLength) {
      result.push(parseOne(buffer.slice(offset, offset + entryLength)));
    }
    return result;
  }
  function parseOne(buffer) {
    if (buffer.byteLength !== entryLength) {
      throw new Error(`Invalid extra bytes entry length: ${buffer.byteLength}`);
    }
    const dv = Binary.toDataView(buffer);
    const name = Binary.toCString(buffer.slice(4, 36));
    const description = Binary.toCString(buffer.slice(60, 192));
    const rawtype = dv.getUint8(2);
    const rawoptions = dv.getUint8(3);
    if (rawtype >= 11) {
      throw new Error(`Invalid extra bytes "type" value: ${rawtype}`);
    }
    if (rawtype === 0) {
      const length2 = rawoptions;
      return { name, description, length: length2 };
    }
    const options = parseOptions(rawoptions);
    const dimtype = parseType(rawtype);
    if (!dimtype)
      throw new Error(`Failed to extract dimension type: ${rawtype}`);
    const { type, size: length } = dimtype;
    function extractAnyType(offset) {
      switch (type) {
        case "signed":
          return parseBigInt(dv.getBigInt64(offset, true));
        case "unsigned":
          return parseBigInt(getBigUint64(dv, offset, true));
        case "float":
          return dv.getFloat64(offset, true);
      }
    }
    const eb = { name, description, type, length };
    if (options.hasNodata)
      eb.nodata = extractAnyType(40);
    if (options.hasMin)
      eb.min = extractAnyType(64);
    if (options.hasMax)
      eb.max = extractAnyType(88);
    if (options.hasScale)
      eb.scale = dv.getFloat64(112, true);
    if (options.hasOffset)
      eb.offset = dv.getFloat64(136, true);
    return eb;
  }
  function parseType(typecode) {
    switch (typecode) {
      case 1:
        return Dimension.Type.uint8;
      case 2:
        return Dimension.Type.int8;
      case 3:
        return Dimension.Type.uint16;
      case 4:
        return Dimension.Type.int16;
      case 5:
        return Dimension.Type.uint32;
      case 6:
        return Dimension.Type.int32;
      case 7:
        return Dimension.Type.uint64;
      case 8:
        return Dimension.Type.int64;
      case 9:
        return Dimension.Type.float32;
      case 10:
        return Dimension.Type.float64;
    }
  }
  function parseOptions(v) {
    return {
      hasNodata: Boolean(v & 1),
      hasMin: Boolean(v >> 1 & 1),
      hasMax: Boolean(v >> 2 & 1),
      hasScale: Boolean(v >> 3 & 1),
      hasOffset: Boolean(v >> 4 & 1)
    };
  }

  // node_modules/copc/lib/las/dimensions.js
  var Dimensions = { create: create3 };
  var { Type: Type2 } = Dimension;
  var typemap = {
    X: Type2.float64,
    Y: Type2.float64,
    Z: Type2.float64,
    Intensity: Type2.uint16,
    ReturnNumber: Type2.uint8,
    NumberOfReturns: Type2.uint8,
    ScanDirectionFlag: Type2.boolean,
    EdgeOfFlightLine: Type2.boolean,
    Classification: Type2.uint8,
    Synthetic: Type2.boolean,
    KeyPoint: Type2.boolean,
    Withheld: Type2.boolean,
    Overlap: Type2.boolean,
    ScanAngle: Type2.float32,
    UserData: Type2.uint8,
    PointSourceId: Type2.uint16,
    GpsTime: Type2.float64,
    Red: Type2.uint16,
    Green: Type2.uint16,
    Blue: Type2.uint16,
    ScannerChannel: Type2.uint8,
    Infrared: Type2.uint16
  };
  function create3(extractor, eb = []) {
    return Object.keys(extractor).reduce((map, name) => {
      const type = typemap[name];
      if (type)
        return { ...map, [name]: type };
      const e = eb.find((v) => v.name === name);
      const dimension = e && ExtraBytes.getDimension(e);
      if (dimension)
        return { ...map, [name]: dimension };
      throw new Error(`Failed to look up LAS type: ${name}`);
    }, {});
  }

  // node_modules/copc/lib/las/extractor.js
  var Extractor = { create: create4 };
  function getBasePointLength(pdrf) {
    switch (pdrf) {
      case 0:
        return 20;
      case 1:
        return 28;
      case 2:
        return 26;
      case 3:
        return 34;
      case 6:
        return 30;
      case 7:
        return 36;
      case 8:
        return 38;
      default:
        throw new Error(`Unsupported point data record format: ${pdrf}`);
    }
  }
  function createAbsoluteExtraBytesExtractor(header, offset, { type, length }) {
    const getPointOffset = getPointOffsetGetter(header);
    switch (type) {
      case "signed":
        switch (length) {
          case 1:
            return (dv, index) => dv.getInt8(getPointOffset(index) + offset);
          case 2:
            return (dv, index) => dv.getInt16(getPointOffset(index) + offset, true);
          case 4:
            return (dv, index) => dv.getInt32(getPointOffset(index) + offset, true);
          case 8:
            return (dv, index) => parseBigInt(dv.getBigInt64(getPointOffset(index) + offset, true));
        }
      case "unsigned":
        switch (length) {
          case 1:
            return (dv, index) => dv.getUint8(getPointOffset(index) + offset);
          case 2:
            return (dv, index) => dv.getUint16(getPointOffset(index) + offset, true);
          case 4:
            return (dv, index) => dv.getUint32(getPointOffset(index) + offset, true);
          case 8:
            return (dv, index) => parseBigInt(getBigUint64(dv, getPointOffset(index) + offset, true));
        }
      case "float":
        switch (length) {
          case 4:
            return (dv, index) => dv.getFloat32(getPointOffset(index) + offset, true);
          case 8:
            return (dv, index) => dv.getFloat64(getPointOffset(index) + offset, true);
        }
    }
  }
  function createExtras(header, eb) {
    const basePointLength = getBasePointLength(header.pointDataRecordFormat);
    let position = basePointLength;
    return eb.reduce((map, v) => {
      const offset = position;
      position += v.length;
      const absoluteExtractor = createAbsoluteExtraBytesExtractor(header, offset, v);
      if (!absoluteExtractor)
        return map;
      const extractor = (dv, index) => Scale.unapply(absoluteExtractor(dv, index), v.scale, v.offset);
      return { ...map, [v.name]: extractor };
    }, {});
  }
  function create4(header, eb = []) {
    const extras = createExtras(header, eb);
    const core = (() => {
      const { pointDataRecordFormat: pdrf } = header;
      switch (pdrf) {
        case 0:
          return create0(header);
        case 1:
          return create1(header);
        case 2:
          return create22(header);
        case 3:
          return create32(header);
        case 6:
          return create6(header);
        case 7:
          return create7(header);
        case 8:
          return create8(header);
        default:
          throw new Error(`Unsupported point data record format: ${pdrf}`);
      }
    })();
    return { ...core, ...extras };
  }
  function create0(header) {
    const { scale, offset } = header;
    const getPointOffset = getPointOffsetGetter(header);
    function getScanFlags(dv, index) {
      return dv.getUint8(getPointOffset(index) + 14);
    }
    function getFullClassification(dv, index) {
      return dv.getUint8(getPointOffset(index) + 15);
    }
    function getClassification(dv, index) {
      return getFullClassification(dv, index) & 31;
    }
    return {
      X: (dv, index) => Scale.unapply(dv.getInt32(getPointOffset(index), true), scale[0], offset[0]),
      Y: (dv, index) => Scale.unapply(dv.getInt32(getPointOffset(index) + 4, true), scale[1], offset[1]),
      Z: (dv, index) => Scale.unapply(dv.getInt32(getPointOffset(index) + 8, true), scale[2], offset[2]),
      Intensity: (dv, index) => dv.getUint16(getPointOffset(index) + 12, true),
      ReturnNumber: (dv, index) => getScanFlags(dv, index) & 7,
      NumberOfReturns: (dv, index) => (getScanFlags(dv, index) & 56) >> 3,
      ScanDirectionFlag: (dv, index) => (getScanFlags(dv, index) & 64) >> 6,
      EdgeOfFlightLine: (dv, index) => (getScanFlags(dv, index) & 128) >> 7,
      Classification: (dv, index) => {
        const classification = getClassification(dv, index);
        return classification === 12 ? 0 : classification;
      },
      Synthetic: (dv, index) => (getFullClassification(dv, index) & 32) >> 5,
      KeyPoint: (dv, index) => (getFullClassification(dv, index) & 64) >> 6,
      Withheld: (dv, index) => (getFullClassification(dv, index) & 128) >> 7,
      Overlap: (dv, index) => getClassification(dv, index) === 12 ? 1 : 0,
      ScanAngle: (dv, index) => dv.getInt8(getPointOffset(index) + 16),
      UserData: (dv, index) => dv.getUint8(getPointOffset(index) + 17),
      PointSourceId: (dv, index) => dv.getUint16(getPointOffset(index) + 18, true)
    };
  }
  function create1(header) {
    const getPointOffset = getPointOffsetGetter(header);
    return {
      ...create0(header),
      GpsTime: (dv, index) => dv.getFloat64(getPointOffset(index) + 20, true)
    };
  }
  function create22(header) {
    const getPointOffset = getPointOffsetGetter(header);
    return {
      ...create0(header),
      Red: (dv, index) => dv.getUint16(getPointOffset(index) + 20, true),
      Green: (dv, index) => dv.getUint16(getPointOffset(index) + 22, true),
      Blue: (dv, index) => dv.getUint16(getPointOffset(index) + 24, true)
    };
  }
  function create32(header) {
    const getPointOffset = getPointOffsetGetter(header);
    return {
      ...create0(header),
      GpsTime: (dv, index) => dv.getFloat64(getPointOffset(index) + 20, true),
      Red: (dv, index) => dv.getUint16(getPointOffset(index) + 28, true),
      Green: (dv, index) => dv.getUint16(getPointOffset(index) + 30, true),
      Blue: (dv, index) => dv.getUint16(getPointOffset(index) + 32, true)
    };
  }
  function create6(header) {
    const { scale, offset } = header;
    const getPointOffset = getPointOffsetGetter(header);
    function getFlags(dv, index) {
      return dv.getUint8(getPointOffset(index) + 15);
    }
    return {
      X: (dv, index) => Scale.unapply(dv.getInt32(getPointOffset(index), true), scale[0], offset[0]),
      Y: (dv, index) => Scale.unapply(dv.getInt32(getPointOffset(index) + 4, true), scale[1], offset[1]),
      Z: (dv, index) => Scale.unapply(dv.getInt32(getPointOffset(index) + 8, true), scale[2], offset[2]),
      Intensity: (dv, index) => dv.getUint16(getPointOffset(index) + 12, true),
      ReturnNumber: (dv, index) => dv.getUint16(getPointOffset(index) + 14, true) & 15,
      NumberOfReturns: (dv, index) => (dv.getUint16(getPointOffset(index) + 14, true) & 240) >> 4,
      Synthetic: (dv, index) => getFlags(dv, index) & 1,
      KeyPoint: (dv, index) => (getFlags(dv, index) & 2) >> 1,
      Withheld: (dv, index) => (getFlags(dv, index) & 4) >> 2,
      Overlap: (dv, index) => (getFlags(dv, index) & 8) >> 3,
      ScannerChannel: (dv, index) => (getFlags(dv, index) & 48) >> 4,
      ScanDirectionFlag: (dv, index) => (getFlags(dv, index) & 64) >> 6,
      EdgeOfFlightLine: (dv, index) => (getFlags(dv, index) & 128) >> 7,
      Classification: (dv, index) => dv.getUint8(getPointOffset(index) + 16),
      UserData: (dv, index) => dv.getUint8(getPointOffset(index) + 17),
      ScanAngle: (dv, index) => dv.getInt16(getPointOffset(index) + 18, true) * 6e-3,
      PointSourceId: (dv, index) => dv.getUint16(getPointOffset(index) + 20, true),
      GpsTime: (dv, index) => dv.getFloat64(getPointOffset(index) + 22, true)
    };
  }
  function create7(header) {
    const getPointOffset = getPointOffsetGetter(header);
    return {
      ...create6(header),
      Red: (dv, index) => dv.getUint16(getPointOffset(index) + 30, true),
      Green: (dv, index) => dv.getUint16(getPointOffset(index) + 32, true),
      Blue: (dv, index) => dv.getUint16(getPointOffset(index) + 34, true)
    };
  }
  function create8(header) {
    const getPointOffset = getPointOffsetGetter(header);
    return {
      ...create7(header),
      Infrared: (dv, index) => dv.getUint16(getPointOffset(index) + 36, true)
    };
  }
  function getPointOffsetGetter(header) {
    const { pointDataRecordLength } = header;
    return function getPointOffset(index) {
      return index * pointDataRecordLength;
    };
  }

  // node_modules/copc/lib/las/utils.js
  function parsePoint(buffer) {
    const dv = Binary.toDataView(buffer);
    if (dv.byteLength !== 24) {
      throw new Error(`Invalid tuple buffer length: ${dv.byteLength}`);
    }
    return [
      dv.getFloat64(0, true),
      dv.getFloat64(8, true),
      dv.getFloat64(16, true)
    ];
  }
  function formatGuid(buffer) {
    const dv = Binary.toDataView(buffer);
    if (dv.byteLength !== 16) {
      throw new Error(`Invalid GUID buffer length: ${dv.byteLength}`);
    }
    let s = "";
    for (let i = 0; i < dv.byteLength; i += 4) {
      const c = dv.getUint32(i, true);
      s += c.toString(16).padStart(8, "0");
    }
    return [s.slice(0, 8), s.slice(8, 12), s.slice(12, 16), s.slice(16, 32)].join("-");
  }

  // node_modules/copc/lib/las/header.js
  var Header = { parse: parse4 };
  function parse4(buffer) {
    if (buffer.byteLength < minHeaderLength) {
      throw new Error(`Invalid header: must be at least ${minHeaderLength} bytes`);
    }
    const dv = Binary.toDataView(buffer);
    const fileSignature = Binary.toCString(buffer.slice(0, 4));
    if (fileSignature !== "LASF") {
      throw new Error(`Invalid file signature: ${fileSignature}`);
    }
    const majorVersion = dv.getUint8(24);
    const minorVersion = dv.getUint8(25);
    if (majorVersion !== 1 || minorVersion !== 2 && minorVersion !== 4) {
      throw new Error(`Invalid version (only 1.2 and 1.4 supported): ${majorVersion}.${minorVersion}`);
    }
    const header = {
      fileSignature,
      fileSourceId: dv.getUint16(4, true),
      globalEncoding: dv.getUint16(6, true),
      projectId: formatGuid(buffer.slice(8, 24)),
      majorVersion,
      minorVersion,
      systemIdentifier: Binary.toCString(buffer.slice(26, 58)),
      generatingSoftware: Binary.toCString(buffer.slice(58, 90)),
      fileCreationDayOfYear: dv.getUint16(90, true),
      fileCreationYear: dv.getUint16(92, true),
      headerLength: dv.getUint16(94, true),
      pointDataOffset: dv.getUint32(96, true),
      vlrCount: dv.getUint32(100, true),
      pointDataRecordFormat: dv.getUint8(104) & 15,
      pointDataRecordLength: dv.getUint16(105, true),
      pointCount: dv.getUint32(107, true),
      pointCountByReturn: parseLegacyNumberOfPointsByReturn(buffer.slice(111, 131)),
      scale: parsePoint(buffer.slice(131, 155)),
      offset: parsePoint(buffer.slice(155, 179)),
      min: [
        dv.getFloat64(187, true),
        dv.getFloat64(203, true),
        dv.getFloat64(219, true)
      ],
      max: [
        dv.getFloat64(179, true),
        dv.getFloat64(195, true),
        dv.getFloat64(211, true)
      ],
      waveformDataOffset: 0,
      evlrOffset: 0,
      evlrCount: 0
    };
    if (minorVersion == 2)
      return header;
    return {
      ...header,
      pointCount: parseBigInt(getBigUint64(dv, 247, true)),
      pointCountByReturn: parseNumberOfPointsByReturn(buffer.slice(255, 375)),
      waveformDataOffset: parseBigInt(getBigUint64(dv, 227, true)),
      evlrOffset: parseBigInt(getBigUint64(dv, 235, true)),
      evlrCount: dv.getUint32(243, true)
    };
  }
  function parseNumberOfPointsByReturn(buffer) {
    const dv = Binary.toDataView(buffer);
    const bigs = [];
    for (let offset = 0; offset < 15 * 8; offset += 8) {
      bigs.push(getBigUint64(dv, offset, true));
    }
    return bigs.map((v) => parseBigInt(v));
  }
  function parseLegacyNumberOfPointsByReturn(buffer) {
    const dv = Binary.toDataView(buffer);
    const v = [];
    for (let offset = 0; offset < 5 * 4; offset += 4) {
      v.push(dv.getUint32(offset, true));
    }
    return v;
  }

  // node_modules/copc/lib/las/point-data.js
  var import_laz_perf = __toESM(require_web(), 1);
  var PointData = { createLazPerf: import_laz_perf.createLazPerf, decompressChunk, decompressFile };
  var ourLazPerfPromise = void 0;
  async function getLazPerf(suppliedLazPerf) {
    if (suppliedLazPerf)
      return suppliedLazPerf;
    if (!ourLazPerfPromise)
      ourLazPerfPromise = (0, import_laz_perf.createLazPerf)();
    return ourLazPerfPromise;
  }
  async function decompressChunk(compressed, { pointCount, pointDataRecordFormat, pointDataRecordLength }, suppliedLazPerf) {
    const LazPerf = await getLazPerf(suppliedLazPerf);
    const outBuffer = new Uint8Array(pointCount * pointDataRecordLength);
    let blobPointer = 0;
    let dataPointer = 0;
    let decoder;
    try {
      blobPointer = LazPerf._malloc(compressed.byteLength);
      dataPointer = LazPerf._malloc(pointDataRecordLength);
      decoder = new LazPerf.ChunkDecoder();
      LazPerf.HEAPU8.set(new Uint8Array(compressed.buffer, compressed.byteOffset, compressed.byteLength), blobPointer);
      decoder.open(pointDataRecordFormat, pointDataRecordLength, blobPointer);
      for (let i = 0; i < pointCount; ++i) {
        decoder.getPoint(dataPointer);
        outBuffer.set(new Uint8Array(LazPerf.HEAPU8.buffer, dataPointer, pointDataRecordLength), i * pointDataRecordLength);
      }
    } finally {
      LazPerf._free(blobPointer);
      LazPerf._free(dataPointer);
      decoder == null ? void 0 : decoder.delete();
    }
    return outBuffer;
  }
  async function decompressFile(file, suppliedLazPerf) {
    const LazPerf = await getLazPerf(suppliedLazPerf);
    const header = Header.parse(file);
    const { pointCount, pointDataRecordLength } = header;
    const outBuffer = new Uint8Array(pointCount * pointDataRecordLength);
    let blobPointer = 0;
    let dataPointer = 0;
    let reader;
    try {
      blobPointer = LazPerf._malloc(file.byteLength);
      dataPointer = LazPerf._malloc(pointDataRecordLength);
      reader = new LazPerf.LASZip();
      LazPerf.HEAPU8.set(new Uint8Array(file.buffer, file.byteOffset, file.byteLength), blobPointer);
      reader.open(blobPointer, file.byteLength);
      for (let i = 0; i < pointCount; ++i) {
        reader.getPoint(dataPointer);
        outBuffer.set(new Uint8Array(LazPerf.HEAPU8.buffer, dataPointer, pointDataRecordLength), i * pointDataRecordLength);
      }
    } finally {
      LazPerf._free(blobPointer);
      LazPerf._free(dataPointer);
      reader == null ? void 0 : reader.delete();
    }
    return outBuffer;
  }

  // node_modules/copc/lib/las/view.js
  var View = { create: create5 };
  function create5(buffer, header, eb = [], include) {
    let extractors = Extractor.create(header, eb);
    if (include) {
      const set = /* @__PURE__ */ new Set([...include]);
      extractors = Object.entries(extractors).reduce((extractors2, [name, getter2]) => {
        if (set.has(name))
          extractors2[name] = getter2;
        return extractors2;
      }, {});
    }
    const dimensions = Dimensions.create(extractors, eb);
    const dv = Binary.toDataView(buffer);
    const pointLength = header.pointDataRecordLength;
    if (dv.byteLength % pointLength !== 0) {
      throw new Error(`Invalid buffer length (${dv.byteLength}) for point length ${pointLength}`);
    }
    const pointCount = dv.byteLength / header.pointDataRecordLength;
    function getter(name) {
      const extractor = extractors[name];
      if (!extractor)
        throw new Error(`No extractor for dimension: ${name}`);
      return function(index) {
        if (index >= pointCount) {
          throw new RangeError(`View index (${index}) out of range: ${pointCount}`);
        }
        return extractor(dv, index);
      };
    }
    return { pointCount, dimensions, getter };
  }

  // node_modules/copc/lib/las/vlr.js
  var Vlr = { walk, parse: parse5, find, at, fetch: fetch3 };
  function find(vlrs, userId, recordId) {
    return vlrs.find((v) => v.userId === userId && v.recordId === recordId);
  }
  function at(vlrs, userId, recordId) {
    const vlr = find(vlrs, userId, recordId);
    if (!vlr)
      throw new Error(`VLR not found: ${userId}/${recordId}`);
    return vlr;
  }
  function fetch3(filename, { contentOffset, contentLength }) {
    if (contentLength === 0)
      return new Uint8Array();
    const get2 = Getter.create(filename);
    return get2(contentOffset, contentOffset + contentLength);
  }
  async function walk(filename, header) {
    const get2 = Getter.create(filename);
    const vlrs = await doWalk({
      get: get2,
      startOffset: header.headerLength,
      count: header.vlrCount,
      isExtended: false
    });
    const evlrs = await doWalk({
      get: get2,
      startOffset: header.evlrOffset,
      count: header.evlrCount,
      isExtended: true
    });
    return [...vlrs, ...evlrs];
  }
  function parse5(buffer, isExtended) {
    return (isExtended ? parseExtended : parseNormal)(buffer);
  }
  function parseNormal(buffer) {
    const dv = Binary.toDataView(buffer);
    if (dv.byteLength !== vlrHeaderLength) {
      throw new Error(`Invalid VLR header length (must be ${vlrHeaderLength}): ${dv.byteLength}`);
    }
    return {
      userId: Binary.toCString(buffer.slice(2, 18)),
      recordId: dv.getUint16(18, true),
      contentLength: dv.getUint16(20, true),
      description: Binary.toCString(buffer.slice(22, 54)),
      isExtended: false
    };
  }
  function parseExtended(buffer) {
    const dv = Binary.toDataView(buffer);
    if (dv.byteLength !== evlrHeaderLength) {
      throw new Error(`Invalid EVLR header length (must be ${evlrHeaderLength}): ${dv.byteLength}`);
    }
    return {
      userId: Binary.toCString(buffer.slice(2, 18)),
      recordId: dv.getUint16(18, true),
      contentLength: parseBigInt(getBigUint64(dv, 20, true)),
      description: Binary.toCString(buffer.slice(28, 60)),
      isExtended: true
    };
  }
  async function doWalk({ get: get2, startOffset, count, isExtended }) {
    const vlrs = [];
    let pos = startOffset;
    const length = isExtended ? evlrHeaderLength : vlrHeaderLength;
    for (let i = 0; i < count; ++i) {
      const buffer = length ? await get2(pos, pos + length) : new Uint8Array();
      const { userId, recordId, contentLength, description } = parse5(buffer, isExtended);
      vlrs.push({
        userId,
        recordId,
        contentOffset: pos + length,
        contentLength,
        description,
        isExtended
      });
      pos += length + contentLength;
    }
    return vlrs;
  }

  // node_modules/copc/lib/copc/hierarchy.js
  var Hierarchy2 = { parse: parse6, load };
  function parse6(buffer) {
    const dv = Binary.toDataView(buffer);
    if (dv.byteLength % hierarchyItemLength !== 0) {
      throw new Error(`Invalid hierarchy page length: ${dv.byteLength}`);
    }
    const nodes = {};
    const pages = {};
    for (let i = 0; i < dv.byteLength; i += hierarchyItemLength) {
      const d = dv.getInt32(i + 0, true);
      const x = dv.getInt32(i + 4, true);
      const y = dv.getInt32(i + 8, true);
      const z = dv.getInt32(i + 12, true);
      const offset = parseBigInt(getBigUint64(dv, i + 16, true));
      const length = dv.getInt32(i + 24, true);
      const pointCount = dv.getInt32(i + 28, true);
      const key2 = Key.toString([d, x, y, z]);
      if (pointCount < -1) {
        throw new Error(`Invalid hierarchy point count at key: ${key2}`);
      } else if (pointCount === -1) {
        pages[key2] = {
          pageOffset: offset,
          pageLength: length
        };
      } else {
        nodes[key2] = {
          pointCount,
          pointDataOffset: offset,
          pointDataLength: length
        };
      }
    }
    return { nodes, pages };
  }
  async function load(filename, page) {
    const get2 = Getter.create(filename);
    return parse6(await get2(page.pageOffset, page.pageOffset + page.pageLength));
  }

  // node_modules/copc/lib/copc/info.js
  var Info = { parse: parse7 };
  function parse7(buffer) {
    const dv = Binary.toDataView(buffer);
    if (dv.byteLength !== infoLength) {
      throw new Error(`Invalid COPC info VLR length (should be ${infoLength}): ${dv.byteLength}`);
    }
    const center = [
      dv.getFloat64(0, true),
      dv.getFloat64(8, true),
      dv.getFloat64(16, true)
    ];
    const radius = dv.getFloat64(24, true);
    return {
      cube: [
        center[0] - radius,
        center[1] - radius,
        center[2] - radius,
        center[0] + radius,
        center[1] + radius,
        center[2] + radius
      ],
      spacing: dv.getFloat64(32, true),
      rootHierarchyPage: {
        pageOffset: parseBigInt(getBigUint64(dv, 40, true)),
        pageLength: parseBigInt(getBigUint64(dv, 48, true))
      },
      gpsTimeRange: [dv.getFloat64(56, true), dv.getFloat64(64, true)]
    };
  }

  // node_modules/copc/lib/copc/copc.js
  var Copc = {
    create: create9,
    loadHierarchyPage,
    loadCompressedPointDataBuffer,
    loadPointDataBuffer,
    loadPointDataView
  };
  async function create9(filename) {
    const getRemote = Getter.create(filename);
    const length = 65536;
    const promise = getRemote(0, length);
    async function get2(begin, end) {
      if (end >= length)
        return getRemote(begin, end);
      const head = await promise;
      return head.slice(begin, end);
    }
    const header = Header.parse(await get2(0, constants_exports2.minHeaderLength));
    const vlrs = await Vlr.walk(get2, header);
    const infoVlr = Vlr.find(vlrs, "copc", 1);
    if (!infoVlr)
      throw new Error("COPC info VLR is required");
    const info = Info.parse(await Vlr.fetch(get2, infoVlr));
    let wkt;
    const wktVlr = Vlr.find(vlrs, "LASF_Projection", 2112);
    if (wktVlr && wktVlr.contentLength) {
      wkt = Binary.toCString(await Vlr.fetch(get2, wktVlr));
      if (wkt === "")
        wkt = void 0;
    }
    let eb = [];
    const ebVlr = Vlr.find(vlrs, "LASF_Spec", 4);
    if (ebVlr)
      eb = ExtraBytes.parse(await Vlr.fetch(get2, ebVlr));
    return { header, vlrs, info, wkt, eb };
  }
  async function loadHierarchyPage(filename, page) {
    const get2 = Getter.create(filename);
    return Hierarchy2.load(get2, page);
  }
  async function loadCompressedPointDataBuffer(filename, { pointDataOffset, pointDataLength }) {
    const get2 = Getter.create(filename);
    return get2(pointDataOffset, pointDataOffset + pointDataLength);
  }
  async function loadPointDataBuffer(filename, { pointDataRecordFormat, pointDataRecordLength }, node, lazPerf) {
    const compressed = await loadCompressedPointDataBuffer(filename, node);
    const { pointCount } = node;
    return PointData.decompressChunk(compressed, { pointCount, pointDataRecordFormat, pointDataRecordLength }, lazPerf);
  }
  async function loadPointDataView(filename, copc, node, { lazPerf, include } = {}) {
    const buffer = await loadPointDataBuffer(filename, copc.header, node, lazPerf);
    return View.create(buffer, copc.header, copc.eb, include);
  }

  // src/copc.js
  var import_laz_perf2 = __toESM(require_web(), 1);
  var lazPerfPromise;
  var wasmUrlCourante = "laz-perf.wasm";
  function getLazPerf2() {
    if (!lazPerfPromise) {
      const base = wasmUrlCourante;
      lazPerfPromise = (0, import_laz_perf2.createLazPerf)({
        locateFile: (path) => path.endsWith(".wasm") ? base : path
      });
    }
    return lazPerfPromise;
  }
  function setWasmUrl(url) {
    if (url) {
      wasmUrlCourante = url;
      lazPerfPromise = void 0;
    }
  }
  var rootCache = /* @__PURE__ */ new Map();
  var pageCache = /* @__PURE__ */ new Map();
  var nodeCache = /* @__PURE__ */ new Map();
  async function openRoot(url) {
    let p = rootCache.get(url);
    if (!p) {
      p = (async () => {
        const getter = Getter.http(url);
        const copc = await Copc.create(url);
        const c = copc.info.cube;
        return { copc, rootPage: copc.info.rootHierarchyPage, cube: [c[0], c[1], c[2], c[3], c[4], c[5]], getter };
      })();
      rootCache.set(url, p);
    }
    return p;
  }
  function loadPage(url, page) {
    const k = `${url}|${page.pageOffset}|${page.pageLength}`;
    let p = pageCache.get(k);
    if (!p) {
      p = Copc.loadHierarchyPage(url, page);
      pageCache.set(k, p);
    }
    return p;
  }
  function keyBounds(cube, key2) {
    const parts = key2.split("-").map(Number);
    const d = parts[0];
    const kx = parts[1];
    const ky = parts[2];
    const size = (cube[3] - cube[0]) / Math.pow(2, d);
    const minX = cube[0] + kx * size;
    const minY = cube[1] + ky * size;
    return { minX, minY, maxX: minX + size, maxY: minY + size, depth: d, size };
  }
  async function collectNodes(url, cube, page, x1, y1, x2, y2, out, garde = 0) {
    if (garde > 16) return;
    const sousArbre = await loadPage(url, page);
    const suite = [];
    for (const [key2, node] of Object.entries(sousArbre.nodes)) {
      if (!node || node.pointCount <= 0) continue;
      const b = keyBounds(cube, key2);
      if (b.maxX < x1 || b.minX > x2 || b.maxY < y1 || b.minY > y2) continue;
      out.push({ key: key2, node, depth: b.depth });
    }
    for (const [key2, sub] of Object.entries(sousArbre.pages)) {
      if (!sub) continue;
      const b = keyBounds(cube, key2);
      if (b.maxX < x1 || b.minX > x2 || b.maxY < y1 || b.minY > y2) continue;
      suite.push(collectNodes(url, cube, sub, x1, y1, x2, y2, out, garde + 1));
    }
    await Promise.all(suite);
  }
  async function loadNodePoints(url, root, key2, node, classes) {
    const ck = `${url}|${key2}`;
    let p = nodeCache.get(ck);
    if (!p) {
      p = (async () => {
        let view = null;
        for (let essai = 0; essai < 3 && !view; essai++) {
          try {
            view = await Copc.loadPointDataView(url, root.copc, node, { lazPerf: await getLazPerf2() });
          } catch {
            if (essai < 2) await new Promise((r) => setTimeout(r, 400 * (essai + 1)));
          }
        }
        if (!view) return [];
        const gx = view.getter("X");
        const gy = view.getter("Y");
        const gz = view.getter("Z");
        const out = [];
        for (let i = 0; i < view.pointCount; i++) {
          out.push({ x: gx(i), y: gy(i), z: gz(i) });
        }
        return out;
      })();
      nodeCache.set(ck, p);
    }
    const pts = await p;
    if (!classes) return pts;
    return pts;
  }
  async function fetchPointsInBbox(urlNpl, x1, y1, x2, y2, options = {}) {
    const { maxPoints = 4e5, onProgress } = options;
    if (!urlNpl) return [];
    onProgress && onProgress("Ouverture du fichier LiDAR HD\u2026");
    const root = await openRoot(urlNpl);
    const tous = [];
    await collectNodes(urlNpl, root.cube, root.rootPage, x1, y1, x2, y2, tous);
    if (!tous.length) return [];
    const profondeurMax = Math.max(...tous.map((n) => n.depth));
    let sel = tous.filter((n) => n.depth === profondeurMax);
    const cx = (x1 + x2) / 2;
    const cy = (y1 + y2) / 2;
    sel.sort((a, b) => {
      const ba = keyBounds(root.cube, a.key);
      const bb = keyBounds(root.cube, b.key);
      const da = Math.hypot((ba.minX + ba.maxX) / 2 - cx, (ba.minY + ba.maxY) / 2 - cy);
      const db = Math.hypot((bb.minX + bb.maxX) / 2 - cx, (bb.minY + bb.maxY) / 2 - cy);
      return da - db;
    });
    onProgress && onProgress(`${sel.length} bloc(s) \xE0 lire\u2026`);
    const morceaux = await Promise.all(sel.map((n) => loadNodePoints(urlNpl, root, n.key, n.node)));
    const points = [];
    for (const morceau of morceaux) {
      for (const p of morceau) {
        if (p.x < x1 || p.x > x2 || p.y < y1 || p.y > y2) continue;
        points.push(p);
        if (points.length >= maxPoints) break;
      }
      if (points.length >= maxPoints) break;
    }
    return points;
  }

  // node_modules/proj4/lib/global.js
  function global_default(defs2) {
    defs2("EPSG:4326", "+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees");
    defs2("EPSG:4269", "+title=NAD83 (long/lat) +proj=longlat +a=6378137.0 +b=6356752.31414036 +ellps=GRS80 +datum=NAD83 +units=degrees");
    defs2("EPSG:3857", "+title=WGS 84 / Pseudo-Mercator +proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs");
    for (var i = 1; i <= 60; ++i) {
      defs2("EPSG:" + (32600 + i), "+proj=utm +zone=" + i + " +datum=WGS84 +units=m");
      defs2("EPSG:" + (32700 + i), "+proj=utm +zone=" + i + " +south +datum=WGS84 +units=m");
    }
    defs2("EPSG:5041", "+title=WGS 84 / UPS North (E,N) +proj=stere +lat_0=90 +lon_0=0 +k=0.994 +x_0=2000000 +y_0=2000000 +datum=WGS84 +units=m");
    defs2("EPSG:5042", "+title=WGS 84 / UPS South (E,N) +proj=stere +lat_0=-90 +lon_0=0 +k=0.994 +x_0=2000000 +y_0=2000000 +datum=WGS84 +units=m");
    defs2.WGS84 = defs2["EPSG:4326"];
    defs2["EPSG:3785"] = defs2["EPSG:3857"];
    defs2.GOOGLE = defs2["EPSG:3857"];
    defs2["EPSG:900913"] = defs2["EPSG:3857"];
    defs2["EPSG:102113"] = defs2["EPSG:3857"];
  }

  // node_modules/proj4/lib/constants/values.js
  var PJD_3PARAM = 1;
  var PJD_7PARAM = 2;
  var PJD_GRIDSHIFT = 3;
  var PJD_WGS84 = 4;
  var PJD_NODATUM = 5;
  var SRS_WGS84_SEMIMAJOR = 6378137;
  var SRS_WGS84_SEMIMINOR = 6356752314e-3;
  var SRS_WGS84_ESQUARED = 0.0066943799901413165;
  var SEC_TO_RAD = 484813681109536e-20;
  var HALF_PI = Math.PI / 2;
  var SIXTH = 0.16666666666666666;
  var RA4 = 0.04722222222222222;
  var RA6 = 0.022156084656084655;
  var EPSLN = 1e-10;
  var D2R = 0.017453292519943295;
  var R2D = 57.29577951308232;
  var FORTPI = Math.PI / 4;
  var TWO_PI = Math.PI * 2;
  var SPI = 3.14159265359;

  // node_modules/proj4/lib/constants/PrimeMeridian.js
  var primeMeridian = {};
  primeMeridian.greenwich = 0;
  primeMeridian.lisbon = -9.131906111111;
  primeMeridian.paris = 2.337229166667;
  primeMeridian.bogota = -74.080916666667;
  primeMeridian.madrid = -3.687938888889;
  primeMeridian.rome = 12.452333333333;
  primeMeridian.bern = 7.439583333333;
  primeMeridian.jakarta = 106.807719444444;
  primeMeridian.ferro = -17.666666666667;
  primeMeridian.brussels = 4.367975;
  primeMeridian.stockholm = 18.058277777778;
  primeMeridian.athens = 23.7163375;
  primeMeridian.oslo = 10.722916666667;
  var PrimeMeridian_default = primeMeridian;

  // node_modules/proj4/lib/constants/units.js
  var units_default = {
    mm: { to_meter: 1e-3 },
    cm: { to_meter: 0.01 },
    ft: { to_meter: 0.3048 },
    "us-ft": { to_meter: 1200 / 3937 },
    fath: { to_meter: 1.8288 },
    kmi: { to_meter: 1852 },
    "us-ch": { to_meter: 20.1168402336805 },
    "us-mi": { to_meter: 1609.34721869444 },
    km: { to_meter: 1e3 },
    "ind-ft": { to_meter: 0.30479841 },
    "ind-yd": { to_meter: 0.91439523 },
    mi: { to_meter: 1609.344 },
    yd: { to_meter: 0.9144 },
    ch: { to_meter: 20.1168 },
    link: { to_meter: 0.201168 },
    dm: { to_meter: 0.1 },
    in: { to_meter: 0.0254 },
    "ind-ch": { to_meter: 20.11669506 },
    "us-in": { to_meter: 0.025400050800101 },
    "us-yd": { to_meter: 0.914401828803658 }
  };

  // node_modules/proj4/lib/match.js
  var ignoredChar = /[\s_\-\/\(\)]/g;
  function match(obj, key2) {
    if (obj[key2]) {
      return obj[key2];
    }
    var keys = Object.keys(obj);
    var lkey = key2.toLowerCase().replace(ignoredChar, "");
    var i = -1;
    var testkey, processedKey;
    while (++i < keys.length) {
      testkey = keys[i];
      processedKey = testkey.toLowerCase().replace(ignoredChar, "");
      if (processedKey === lkey) {
        return obj[testkey];
      }
    }
  }

  // node_modules/proj4/lib/projString.js
  function projString_default(defData) {
    var self2 = {};
    var paramObj = defData.split("+").map(function(v) {
      return v.trim();
    }).filter(function(a) {
      return a;
    }).reduce(function(p, a) {
      var split = a.split("=");
      split.push(true);
      p[split[0].toLowerCase()] = split[1];
      return p;
    }, {});
    var paramName, paramVal, paramOutname;
    var params2 = {
      proj: function(v) {
        self2.projName = ["lonlat", "latlon", "latlong"].includes(v) ? "longlat" : v;
      },
      datum: "datumCode",
      rf: function(v) {
        self2.rf = parseFloat(v);
      },
      lat_0: function(v) {
        self2.lat0 = v * D2R;
      },
      lat_1: function(v) {
        self2.lat1 = v * D2R;
      },
      lat_2: function(v) {
        self2.lat2 = v * D2R;
      },
      lat_ts: function(v) {
        self2.lat_ts = v * D2R;
      },
      lon_0: function(v) {
        self2.long0 = v * D2R;
      },
      lon_wrap: function(v) {
        self2.long_wrap = parseFloat(v) * D2R;
      },
      lon_1: function(v) {
        self2.long1 = v * D2R;
      },
      lon_2: function(v) {
        self2.long2 = v * D2R;
      },
      alpha: function(v) {
        self2.alpha = parseFloat(v) * D2R;
      },
      gamma: function(v) {
        self2.rectified_grid_angle = parseFloat(v) * D2R;
      },
      lonc: function(v) {
        self2.longc = v * D2R;
      },
      x_0: function(v) {
        self2.x0 = parseFloat(v);
      },
      y_0: function(v) {
        self2.y0 = parseFloat(v);
      },
      k_0: function(v) {
        self2.k0 = parseFloat(v);
      },
      k: function(v) {
        self2.k0 = parseFloat(v);
      },
      a: function(v) {
        self2.a = parseFloat(v);
      },
      b: function(v) {
        self2.b = parseFloat(v);
      },
      r: function(v) {
        self2.a = self2.b = parseFloat(v);
      },
      r_a: function() {
        self2.R_A = true;
      },
      zone: function(v) {
        self2.zone = parseInt(v, 10);
      },
      south: function() {
        self2.utmSouth = true;
      },
      towgs84: function(v) {
        self2.datum_params = v.split(",").map(function(a) {
          return parseFloat(a);
        });
      },
      to_meter: function(v) {
        self2.to_meter = parseFloat(v);
      },
      units: function(v) {
        self2.units = v;
        var unit = match(units_default, v);
        if (unit) {
          self2.to_meter = unit.to_meter;
        }
      },
      from_greenwich: function(v) {
        self2.from_greenwich = v * D2R;
      },
      pm: function(v) {
        var pm = match(PrimeMeridian_default, v);
        self2.from_greenwich = (pm ? pm : parseFloat(v)) * D2R;
      },
      nadgrids: function(v) {
        if (v === "@null") {
          self2.datumCode = "none";
        } else {
          self2.nadgrids = v;
        }
      },
      axis: function(v) {
        var legalAxis = "ewnsud";
        if (v.length === 3 && legalAxis.indexOf(v.substr(0, 1)) !== -1 && legalAxis.indexOf(v.substr(1, 1)) !== -1 && legalAxis.indexOf(v.substr(2, 1)) !== -1) {
          self2.axis = v;
        }
      },
      approx: function() {
        self2.approx = true;
      },
      over: function() {
        self2.over = true;
      }
    };
    for (paramName in paramObj) {
      paramVal = paramObj[paramName];
      if (paramName in params2) {
        paramOutname = params2[paramName];
        if (typeof paramOutname === "function") {
          paramOutname(paramVal);
        } else {
          self2[paramOutname] = paramVal;
        }
      } else {
        self2[paramName] = paramVal;
      }
    }
    if (typeof self2.datumCode === "string" && self2.datumCode !== "WGS84") {
      self2.datumCode = self2.datumCode.toLowerCase();
    }
    self2["projStr"] = defData;
    return self2;
  }

  // node_modules/wkt-parser/PROJJSONBuilder.js
  var PROJJSONBuilderBase = class {
    static getId(node) {
      const idNode = node.find((child) => Array.isArray(child) && child[0] === "ID");
      if (idNode && idNode.length >= 3) {
        return {
          authority: idNode[1],
          code: parseInt(idNode[2], 10)
        };
      }
      return null;
    }
    static convertUnit(node, type = "unit") {
      if (!node || node.length < 3) {
        return { type, name: "unknown", conversion_factor: null };
      }
      const name = node[1];
      const conversionFactor = parseFloat(node[2]) || null;
      const idNode = node.find((child) => Array.isArray(child) && child[0] === "ID");
      const id = idNode ? {
        authority: idNode[1],
        code: parseInt(idNode[2], 10)
      } : null;
      return {
        type,
        name,
        conversion_factor: conversionFactor,
        id
      };
    }
    static convertAxis(node) {
      const name = node[1] || "Unknown";
      let direction;
      const abbreviationMatch = name.match(/^\((.)\)$/);
      if (abbreviationMatch) {
        const abbreviation = abbreviationMatch[1].toUpperCase();
        if (abbreviation === "E") direction = "east";
        else if (abbreviation === "N") direction = "north";
        else if (abbreviation === "U") direction = "up";
        else if (node[2]) direction = node[2];
        else throw new Error(`Unknown axis abbreviation: ${abbreviation}`);
      } else {
        direction = node[2] || "unknown";
      }
      const orderNode = node.find((child) => Array.isArray(child) && child[0] === "ORDER");
      const order2 = orderNode ? parseInt(orderNode[1], 10) : null;
      const unitNode = node.find(
        (child) => Array.isArray(child) && (child[0] === "LENGTHUNIT" || child[0] === "ANGLEUNIT" || child[0] === "SCALEUNIT")
      );
      const unit = this.convertUnit(unitNode);
      return {
        name,
        direction,
        // Use the valid PROJJSON direction value
        unit,
        order: order2
      };
    }
    static extractAxes(node) {
      return node.filter((child) => Array.isArray(child) && child[0] === "AXIS").map((axis) => this.convertAxis(axis)).sort((a, b) => (a.order || 0) - (b.order || 0));
    }
    static convert(node, result = {}) {
      switch (node[0]) {
        case "PROJCRS":
          result.type = "ProjectedCRS";
          result.name = node[1];
          result.base_crs = node.find((child) => Array.isArray(child) && child[0] === "BASEGEOGCRS") ? this.convert(node.find((child) => Array.isArray(child) && child[0] === "BASEGEOGCRS")) : null;
          result.conversion = node.find((child) => Array.isArray(child) && child[0] === "CONVERSION") ? this.convert(node.find((child) => Array.isArray(child) && child[0] === "CONVERSION")) : null;
          const csNode = node.find((child) => Array.isArray(child) && child[0] === "CS");
          if (csNode) {
            result.coordinate_system = {
              subtype: csNode[1],
              axis: this.extractAxes(node)
            };
          }
          const lengthUnitNode = node.find((child) => Array.isArray(child) && child[0] === "LENGTHUNIT");
          if (lengthUnitNode) {
            const unit2 = this.convertUnit(lengthUnitNode);
            result.coordinate_system.unit = unit2;
          }
          result.id = this.getId(node);
          break;
        case "BASEGEOGCRS":
        case "GEOGCRS":
        case "GEODCRS":
          result.type = node[0] === "GEODCRS" ? "GeodeticCRS" : "GeographicCRS";
          result.name = node[1];
          const datumOrEnsembleNode = node.find(
            (child) => Array.isArray(child) && (child[0] === "DATUM" || child[0] === "ENSEMBLE")
          );
          if (datumOrEnsembleNode) {
            const datumOrEnsemble = this.convert(datumOrEnsembleNode);
            if (datumOrEnsembleNode[0] === "ENSEMBLE") {
              result.datum_ensemble = datumOrEnsemble;
            } else {
              result.datum = datumOrEnsemble;
            }
            const primem = node.find((child) => Array.isArray(child) && child[0] === "PRIMEM");
            if (primem && primem[1] !== "Greenwich") {
              datumOrEnsemble.prime_meridian = {
                name: primem[1],
                longitude: parseFloat(primem[2])
              };
            }
          }
          const geogCsNode = node.find((child) => Array.isArray(child) && child[0] === "CS");
          result.coordinate_system = {
            subtype: geogCsNode ? geogCsNode[1] : "ellipsoidal",
            axis: this.extractAxes(node)
          };
          result.id = this.getId(node);
          break;
        case "DATUM":
          result.type = "GeodeticReferenceFrame";
          result.name = node[1];
          result.ellipsoid = node.find((child) => Array.isArray(child) && child[0] === "ELLIPSOID") ? this.convert(node.find((child) => Array.isArray(child) && child[0] === "ELLIPSOID")) : null;
          break;
        case "ENSEMBLE":
          result.type = "DatumEnsemble";
          result.name = node[1];
          result.members = node.filter((child) => Array.isArray(child) && child[0] === "MEMBER").map((member) => ({
            type: "DatumEnsembleMember",
            name: member[1],
            id: this.getId(member)
            // Extract ID as { authority, code }
          }));
          const accuracyNode = node.find((child) => Array.isArray(child) && child[0] === "ENSEMBLEACCURACY");
          if (accuracyNode) {
            result.accuracy = parseFloat(accuracyNode[1]);
          }
          const ellipsoidNode = node.find((child) => Array.isArray(child) && child[0] === "ELLIPSOID");
          if (ellipsoidNode) {
            result.ellipsoid = this.convert(ellipsoidNode);
          }
          result.id = this.getId(node);
          break;
        case "ELLIPSOID":
          result.type = "Ellipsoid";
          result.name = node[1];
          result.semi_major_axis = parseFloat(node[2]);
          result.inverse_flattening = parseFloat(node[3]);
          const units = node.find((child) => Array.isArray(child) && child[0] === "LENGTHUNIT") ? this.convert(node.find((child) => Array.isArray(child) && child[0] === "LENGTHUNIT"), result) : null;
          break;
        case "CONVERSION":
          result.type = "Conversion";
          result.name = node[1];
          result.method = node.find((child) => Array.isArray(child) && child[0] === "METHOD") ? this.convert(node.find((child) => Array.isArray(child) && child[0] === "METHOD")) : null;
          result.parameters = node.filter((child) => Array.isArray(child) && child[0] === "PARAMETER").map((param) => this.convert(param));
          break;
        case "METHOD":
          result.type = "Method";
          result.name = node[1];
          result.id = this.getId(node);
          break;
        case "PARAMETER":
          result.type = "Parameter";
          result.name = node[1];
          result.value = parseFloat(node[2]);
          result.unit = this.convertUnit(
            node.find(
              (child) => Array.isArray(child) && (child[0] === "LENGTHUNIT" || child[0] === "ANGLEUNIT" || child[0] === "SCALEUNIT")
            )
          );
          result.id = this.getId(node);
          break;
        case "BOUNDCRS":
          result.type = "BoundCRS";
          const sourceCrsNode = node.find((child) => Array.isArray(child) && child[0] === "SOURCECRS");
          if (sourceCrsNode) {
            const sourceCrsContent = sourceCrsNode.find((child) => Array.isArray(child));
            result.source_crs = sourceCrsContent ? this.convert(sourceCrsContent) : null;
          }
          const targetCrsNode = node.find((child) => Array.isArray(child) && child[0] === "TARGETCRS");
          if (targetCrsNode) {
            const targetCrsContent = targetCrsNode.find((child) => Array.isArray(child));
            result.target_crs = targetCrsContent ? this.convert(targetCrsContent) : null;
          }
          const transformationNode = node.find((child) => Array.isArray(child) && child[0] === "ABRIDGEDTRANSFORMATION");
          if (transformationNode) {
            result.transformation = this.convert(transformationNode);
          } else {
            result.transformation = null;
          }
          break;
        case "ABRIDGEDTRANSFORMATION":
          result.type = "Transformation";
          result.name = node[1];
          result.method = node.find((child) => Array.isArray(child) && child[0] === "METHOD") ? this.convert(node.find((child) => Array.isArray(child) && child[0] === "METHOD")) : null;
          result.parameters = node.filter((child) => Array.isArray(child) && (child[0] === "PARAMETER" || child[0] === "PARAMETERFILE")).map((param) => {
            if (param[0] === "PARAMETER") {
              return this.convert(param);
            } else if (param[0] === "PARAMETERFILE") {
              return {
                name: param[1],
                value: param[2],
                id: {
                  "authority": "EPSG",
                  "code": 8656
                }
              };
            }
          });
          if (result.parameters.length === 7) {
            const scaleDifference = result.parameters[6];
            if (scaleDifference.name === "Scale difference") {
              scaleDifference.value = Math.round((scaleDifference.value - 1) * 1e12) / 1e6;
            }
          }
          result.id = this.getId(node);
          break;
        case "AXIS":
          if (!result.coordinate_system) {
            result.coordinate_system = { type: "unspecified", axis: [] };
          }
          result.coordinate_system.axis.push(this.convertAxis(node));
          break;
        case "LENGTHUNIT":
          const unit = this.convertUnit(node, "LinearUnit");
          if (result.coordinate_system && result.coordinate_system.axis) {
            result.coordinate_system.axis.forEach((axis) => {
              if (!axis.unit) {
                axis.unit = unit;
              }
            });
          }
          if (unit.conversion_factor && unit.conversion_factor !== 1) {
            if (result.semi_major_axis) {
              result.semi_major_axis = {
                value: result.semi_major_axis,
                unit
              };
            }
          }
          break;
        default:
          result.keyword = node[0];
          break;
      }
      return result;
    }
  };
  var PROJJSONBuilder_default = PROJJSONBuilderBase;

  // node_modules/wkt-parser/buildPROJJSON.js
  function buildPROJJSON(root) {
    return PROJJSONBuilder_default.convert(root);
  }

  // node_modules/wkt-parser/detectWKTVersion.js
  function detectWKTVersion(wkt) {
    const normalizedWKT = wkt.toUpperCase();
    if (normalizedWKT.includes("PROJCRS") || normalizedWKT.includes("GEOGCRS") || normalizedWKT.includes("BOUNDCRS") || normalizedWKT.includes("VERTCRS") || normalizedWKT.includes("LENGTHUNIT") || normalizedWKT.includes("ANGLEUNIT") || normalizedWKT.includes("SCALEUNIT")) {
      return "WKT2";
    }
    if (normalizedWKT.includes("PROJCS") || normalizedWKT.includes("GEOGCS") || normalizedWKT.includes("LOCAL_CS") || normalizedWKT.includes("VERT_CS") || normalizedWKT.includes("UNIT")) {
      return "WKT1";
    }
    return "WKT1";
  }

  // node_modules/wkt-parser/parser.js
  var parser_default = parseString;
  var NEUTRAL = 1;
  var KEYWORD = 2;
  var NUMBER = 3;
  var QUOTED = 4;
  var AFTERQUOTE = 5;
  var ENDED = -1;
  var whitespace = /\s/;
  var latin = /[A-Za-z]/;
  var keyword = /[A-Za-z84_]/;
  var endThings = /[,\]]/;
  var digets = /[\d\.E\-\+]/;
  function Parser(text) {
    if (typeof text !== "string") {
      throw new Error("not a string");
    }
    this.text = text.trim();
    this.level = 0;
    this.place = 0;
    this.root = null;
    this.stack = [];
    this.currentObject = null;
    this.state = NEUTRAL;
  }
  Parser.prototype.readCharicter = function() {
    var char = this.text[this.place++];
    if (this.state !== QUOTED) {
      while (whitespace.test(char)) {
        if (this.place >= this.text.length) {
          return;
        }
        char = this.text[this.place++];
      }
    }
    switch (this.state) {
      case NEUTRAL:
        return this.neutral(char);
      case KEYWORD:
        return this.keyword(char);
      case QUOTED:
        return this.quoted(char);
      case AFTERQUOTE:
        return this.afterquote(char);
      case NUMBER:
        return this.number(char);
      case ENDED:
        return;
    }
  };
  Parser.prototype.afterquote = function(char) {
    if (char === '"') {
      this.word += '"';
      this.state = QUOTED;
      return;
    }
    if (endThings.test(char)) {
      this.word = this.word.trim();
      this.afterItem(char);
      return;
    }
    throw new Error(`havn't handled "` + char + '" in afterquote yet, index ' + this.place);
  };
  Parser.prototype.afterItem = function(char) {
    if (char === ",") {
      if (this.word !== null) {
        this.currentObject.push(this.word);
      }
      this.word = null;
      this.state = NEUTRAL;
      return;
    }
    if (char === "]") {
      this.level--;
      if (this.word !== null) {
        this.currentObject.push(this.word);
        this.word = null;
      }
      this.state = NEUTRAL;
      this.currentObject = this.stack.pop();
      if (!this.currentObject) {
        this.state = ENDED;
      }
      return;
    }
  };
  Parser.prototype.number = function(char) {
    if (digets.test(char)) {
      this.word += char;
      return;
    }
    if (endThings.test(char)) {
      this.word = parseFloat(this.word);
      this.afterItem(char);
      return;
    }
    throw new Error(`havn't handled "` + char + '" in number yet, index ' + this.place);
  };
  Parser.prototype.quoted = function(char) {
    if (char === '"') {
      this.state = AFTERQUOTE;
      return;
    }
    this.word += char;
    return;
  };
  Parser.prototype.keyword = function(char) {
    if (keyword.test(char)) {
      this.word += char;
      return;
    }
    if (char === "[") {
      var newObjects = [];
      newObjects.push(this.word);
      this.level++;
      if (this.root === null) {
        this.root = newObjects;
      } else {
        this.currentObject.push(newObjects);
      }
      this.stack.push(this.currentObject);
      this.currentObject = newObjects;
      this.state = NEUTRAL;
      return;
    }
    if (endThings.test(char)) {
      this.afterItem(char);
      return;
    }
    throw new Error(`havn't handled "` + char + '" in keyword yet, index ' + this.place);
  };
  Parser.prototype.neutral = function(char) {
    if (latin.test(char)) {
      this.word = char;
      this.state = KEYWORD;
      return;
    }
    if (char === '"') {
      this.word = "";
      this.state = QUOTED;
      return;
    }
    if (digets.test(char)) {
      this.word = char;
      this.state = NUMBER;
      return;
    }
    if (endThings.test(char)) {
      this.afterItem(char);
      return;
    }
    throw new Error(`havn't handled "` + char + '" in neutral yet, index ' + this.place);
  };
  Parser.prototype.output = function() {
    while (this.place < this.text.length) {
      this.readCharicter();
    }
    if (this.state === ENDED) {
      return this.root;
    }
    throw new Error('unable to parse string "' + this.text + '". State is ' + this.state);
  };
  function parseString(txt) {
    var parser = new Parser(txt);
    return parser.output();
  }

  // node_modules/wkt-parser/process.js
  function mapit(obj, key2, value) {
    if (Array.isArray(key2)) {
      value.unshift(key2);
      key2 = null;
    }
    var thing = key2 ? {} : obj;
    var out = value.reduce(function(newObj, item) {
      sExpr(item, newObj);
      return newObj;
    }, thing);
    if (key2) {
      obj[key2] = out;
    }
  }
  function sExpr(v, obj) {
    if (!Array.isArray(v)) {
      obj[v] = true;
      return;
    }
    var key2 = v.shift();
    if (key2 === "PARAMETER") {
      key2 = v.shift();
    }
    if (v.length === 1) {
      if (Array.isArray(v[0])) {
        obj[key2] = {};
        sExpr(v[0], obj[key2]);
        return;
      }
      obj[key2] = v[0];
      return;
    }
    if (!v.length) {
      obj[key2] = true;
      return;
    }
    if (key2 === "TOWGS84") {
      obj[key2] = v;
      return;
    }
    if (key2 === "AXIS") {
      if (!(key2 in obj)) {
        obj[key2] = [];
      }
      obj[key2].push(v);
      return;
    }
    if (!Array.isArray(key2)) {
      obj[key2] = {};
    }
    var i;
    switch (key2) {
      case "UNIT":
      case "PRIMEM":
      case "VERT_DATUM":
        obj[key2] = {
          name: v[0].toLowerCase(),
          convert: v[1]
        };
        if (v.length === 3) {
          sExpr(v[2], obj[key2]);
        }
        return;
      case "SPHEROID":
      case "ELLIPSOID":
        obj[key2] = {
          name: v[0],
          a: v[1],
          rf: v[2]
        };
        if (v.length === 4) {
          sExpr(v[3], obj[key2]);
        }
        return;
      case "EDATUM":
      case "ENGINEERINGDATUM":
      case "LOCAL_DATUM":
      case "DATUM":
      case "VERT_CS":
      case "VERTCRS":
      case "VERTICALCRS":
        v[0] = ["name", v[0]];
        mapit(obj, key2, v);
        return;
      case "COMPD_CS":
      case "COMPOUNDCRS":
      case "FITTED_CS":
      // the followings are the crs defined in
      // https://github.com/proj4js/proj4js/blob/1da4ed0b865d0fcb51c136090569210cdcc9019e/lib/parseCode.js#L11
      case "PROJECTEDCRS":
      case "PROJCRS":
      case "GEOGCS":
      case "GEOCCS":
      case "PROJCS":
      case "LOCAL_CS":
      case "GEODCRS":
      case "GEODETICCRS":
      case "GEODETICDATUM":
      case "ENGCRS":
      case "ENGINEERINGCRS":
        v[0] = ["name", v[0]];
        mapit(obj, key2, v);
        obj[key2].type = key2;
        return;
      default:
        i = -1;
        while (++i < v.length) {
          if (!Array.isArray(v[i])) {
            return sExpr(v, obj[key2]);
          }
        }
        return mapit(obj, key2, v);
    }
  }

  // node_modules/wkt-parser/util.js
  var D2R2 = 0.017453292519943295;
  function d2r(input) {
    return input * D2R2;
  }
  function applyProjectionDefaults(wkt) {
    const normalizedProjName = (wkt.projName || "").toLowerCase().replace(/_/g, " ");
    if (wkt.long0 === void 0 && wkt.longc !== void 0) {
      wkt.long0 = wkt.longc;
    }
    if (!wkt.lat_ts && wkt.lat1 && (normalizedProjName === "stereographic south pole" || normalizedProjName === "polar stereographic (variant b)")) {
      wkt.lat0 = d2r(wkt.lat1 > 0 ? 90 : -90);
      wkt.lat_ts = wkt.lat1;
      delete wkt.lat1;
    } else if (!wkt.lat_ts && wkt.lat0 && (normalizedProjName === "polar stereographic" || normalizedProjName === "polar stereographic (variant a)")) {
      wkt.lat_ts = wkt.lat0;
      wkt.lat0 = d2r(wkt.lat0 > 0 ? 90 : -90);
      delete wkt.lat1;
    }
  }

  // node_modules/wkt-parser/transformPROJJSON.js
  function processUnit(unit) {
    let result = { units: null, to_meter: void 0 };
    if (typeof unit === "string") {
      result.units = unit.toLowerCase();
      if (result.units === "metre") {
        result.units = "meter";
      }
      if (result.units === "meter") {
        result.to_meter = 1;
      }
    } else if (unit && unit.name) {
      result.units = unit.name.toLowerCase();
      if (result.units === "metre") {
        result.units = "meter";
      }
      result.to_meter = unit.conversion_factor;
    }
    return result;
  }
  function toValue(valueOrObject) {
    if (typeof valueOrObject === "object") {
      return valueOrObject.value * valueOrObject.unit.conversion_factor;
    }
    return valueOrObject;
  }
  function calculateEllipsoid(value, result) {
    if (value.ellipsoid.radius) {
      result.a = value.ellipsoid.radius;
      result.rf = 0;
    } else {
      result.a = toValue(value.ellipsoid.semi_major_axis);
      if (value.ellipsoid.inverse_flattening !== void 0) {
        result.rf = value.ellipsoid.inverse_flattening;
      } else if (value.ellipsoid.semi_major_axis !== void 0 && value.ellipsoid.semi_minor_axis !== void 0) {
        result.rf = result.a / (result.a - toValue(value.ellipsoid.semi_minor_axis));
      }
    }
  }
  function transformPROJJSON(projjson, result = {}) {
    if (!projjson || typeof projjson !== "object") {
      return projjson;
    }
    if (projjson.type === "BoundCRS") {
      transformPROJJSON(projjson.source_crs, result);
      if (projjson.transformation) {
        if (projjson.transformation.method && projjson.transformation.method.name === "NTv2") {
          result.nadgrids = projjson.transformation.parameters[0].value;
        } else {
          result.datum_params = projjson.transformation.parameters.map((param) => param.value);
        }
      }
      return result;
    }
    Object.keys(projjson).forEach((key2) => {
      const value = projjson[key2];
      if (value === null) {
        return;
      }
      switch (key2) {
        case "name":
          if (result.srsCode) {
            break;
          }
          result.name = value;
          result.srsCode = value;
          break;
        case "type":
          if (value === "GeographicCRS") {
            result.projName = "longlat";
          } else if (value === "GeodeticCRS") {
            if (projjson.coordinate_system && projjson.coordinate_system.subtype === "Cartesian") {
              result.projName = "geocent";
            } else {
              result.projName = "longlat";
            }
          } else if (value === "ProjectedCRS" && projjson.conversion && projjson.conversion.method) {
            result.projName = projjson.conversion.method.name;
          }
          break;
        case "datum":
        case "datum_ensemble":
          if (value.ellipsoid) {
            result.ellps = value.ellipsoid.name;
            calculateEllipsoid(value, result);
          }
          if (value.prime_meridian) {
            result.from_greenwich = value.prime_meridian.longitude * Math.PI / 180;
          }
          break;
        case "ellipsoid":
          result.ellps = value.name;
          calculateEllipsoid(value, result);
          break;
        case "prime_meridian":
          result.long0 = (value.longitude || 0) * Math.PI / 180;
          break;
        case "coordinate_system":
          if (value.axis) {
            const directionMap = {
              "east": "e",
              "north": "n",
              "west": "w",
              "south": "s",
              "up": "u",
              "down": "d",
              "geocentricx": "e",
              "geocentricy": "n",
              "geocentricz": "u"
            };
            const mapped = value.axis.map((axis) => directionMap[axis.direction.toLowerCase()]);
            if (mapped.every(Boolean)) {
              result.axis = mapped.join("");
              if (result.axis.length === 2) {
                result.axis += "u";
              }
            }
            if (value.unit) {
              const { units, to_meter } = processUnit(value.unit);
              result.units = units;
              result.to_meter = to_meter;
            } else if (value.axis[0] && value.axis[0].unit) {
              const { units, to_meter } = processUnit(value.axis[0].unit);
              result.units = units;
              result.to_meter = to_meter;
            }
          }
          break;
        case "id":
          if (value.authority && value.code) {
            result.title = value.authority + ":" + value.code;
          }
          break;
        case "conversion":
          if (value.method && value.method.name) {
            result.projName = value.method.name;
          }
          if (value.parameters) {
            value.parameters.forEach((param) => {
              const paramName = param.name.toLowerCase().replace(/\s+/g, "_");
              const paramValue = param.value;
              if (param.unit && param.unit.conversion_factor) {
                result[paramName] = paramValue * param.unit.conversion_factor;
              } else if (param.unit === "degree") {
                result[paramName] = paramValue * Math.PI / 180;
              } else {
                result[paramName] = paramValue;
              }
            });
          }
          break;
        case "unit":
          if (value.name) {
            result.units = value.name.toLowerCase();
            if (result.units === "metre") {
              result.units = "meter";
            }
          }
          if (value.conversion_factor) {
            result.to_meter = value.conversion_factor;
          }
          break;
        case "base_crs":
          transformPROJJSON(value, result);
          result.datumCode = value.id ? value.id.authority + "_" + value.id.code : value.name;
          break;
        default:
          break;
      }
    });
    if (!result.datumCode && (projjson.type === "GeographicCRS" || projjson.type === "GeodeticCRS") && projjson.id) {
      result.datumCode = projjson.id.authority + "_" + projjson.id.code;
    }
    if (result.latitude_of_false_origin !== void 0) {
      result.lat0 = result.latitude_of_false_origin;
    }
    if (result.longitude_of_false_origin !== void 0) {
      result.long0 = result.longitude_of_false_origin;
    }
    if (result.latitude_of_standard_parallel !== void 0) {
      result.lat0 = result.latitude_of_standard_parallel;
      result.lat1 = result.latitude_of_standard_parallel;
    }
    if (result.latitude_of_1st_standard_parallel !== void 0) {
      result.lat1 = result.latitude_of_1st_standard_parallel;
    }
    if (result.latitude_of_2nd_standard_parallel !== void 0) {
      result.lat2 = result.latitude_of_2nd_standard_parallel;
    }
    if (result.latitude_of_projection_centre !== void 0) {
      result.lat0 = result.latitude_of_projection_centre;
    }
    if (result.longitude_of_projection_centre !== void 0) {
      result.longc = result.longitude_of_projection_centre;
    }
    if (result.easting_at_false_origin !== void 0) {
      result.x0 = result.easting_at_false_origin;
    }
    if (result.northing_at_false_origin !== void 0) {
      result.y0 = result.northing_at_false_origin;
    }
    if (result.latitude_of_natural_origin !== void 0) {
      result.lat0 = result.latitude_of_natural_origin;
    }
    if (result.longitude_of_natural_origin !== void 0) {
      result.long0 = result.longitude_of_natural_origin;
    }
    if (result.longitude_of_origin !== void 0) {
      result.long0 = result.longitude_of_origin;
    }
    if (result.false_easting !== void 0) {
      result.x0 = result.false_easting;
    }
    if (result.easting_at_projection_centre) {
      result.x0 = result.easting_at_projection_centre;
    }
    if (result.false_northing !== void 0) {
      result.y0 = result.false_northing;
    }
    if (result.northing_at_projection_centre) {
      result.y0 = result.northing_at_projection_centre;
    }
    if (result.standard_parallel_1 !== void 0) {
      result.lat1 = result.standard_parallel_1;
    }
    if (result.standard_parallel_2 !== void 0) {
      result.lat2 = result.standard_parallel_2;
    }
    if (result.scale_factor_at_natural_origin !== void 0) {
      result.k0 = result.scale_factor_at_natural_origin;
    }
    if (result.scale_factor_at_projection_centre !== void 0) {
      result.k0 = result.scale_factor_at_projection_centre;
    }
    if (result.scale_factor_on_pseudo_standard_parallel !== void 0) {
      result.k0 = result.scale_factor_on_pseudo_standard_parallel;
    }
    if (result.azimuth !== void 0) {
      result.alpha = result.azimuth;
    }
    if (result.azimuth_at_projection_centre !== void 0) {
      result.alpha = result.azimuth_at_projection_centre;
    }
    if (result.angle_from_rectified_to_skew_grid) {
      result.rectified_grid_angle = result.angle_from_rectified_to_skew_grid;
    }
    applyProjectionDefaults(result);
    return result;
  }

  // node_modules/wkt-parser/index.js
  var knownTypes = [
    "PROJECTEDCRS",
    "PROJCRS",
    "GEOGCS",
    "GEOCCS",
    "PROJCS",
    "LOCAL_CS",
    "GEODCRS",
    "GEODETICCRS",
    "GEODETICDATUM",
    "ENGCRS",
    "ENGINEERINGCRS"
  ];
  function rename(obj, params2) {
    var outName = params2[0];
    var inName = params2[1];
    if (!(outName in obj) && inName in obj) {
      obj[outName] = obj[inName];
      if (params2.length === 3) {
        obj[outName] = params2[2](obj[outName]);
      }
    }
  }
  function cleanWKT(wkt) {
    var keys = Object.keys(wkt);
    for (var i = 0, ii = keys.length; i < ii; ++i) {
      var key2 = keys[i];
      if (knownTypes.indexOf(key2) !== -1) {
        setPropertiesFromWkt(wkt[key2]);
      }
      if (typeof wkt[key2] === "object") {
        cleanWKT(wkt[key2]);
      }
    }
  }
  function setPropertiesFromWkt(wkt) {
    if (wkt.AUTHORITY) {
      var authority = Object.keys(wkt.AUTHORITY)[0];
      if (authority && authority in wkt.AUTHORITY) {
        wkt.title = authority + ":" + wkt.AUTHORITY[authority];
      }
    }
    if (wkt.type === "GEOGCS") {
      wkt.projName = "longlat";
    } else if (wkt.type === "LOCAL_CS") {
      wkt.projName = "identity";
      wkt.local = true;
    } else {
      if (typeof wkt.PROJECTION === "object") {
        wkt.projName = Object.keys(wkt.PROJECTION)[0];
      } else {
        wkt.projName = wkt.PROJECTION;
      }
    }
    if (wkt.AXIS) {
      var axisOrder = "";
      for (var i = 0, ii = wkt.AXIS.length; i < ii; ++i) {
        var axis = [wkt.AXIS[i][0].toLowerCase(), wkt.AXIS[i][1].toLowerCase()];
        if (axis[0].indexOf("north") !== -1 || (axis[0] === "y" || axis[0] === "lat") && axis[1] === "north") {
          axisOrder += "n";
        } else if (axis[0].indexOf("south") !== -1 || (axis[0] === "y" || axis[0] === "lat") && axis[1] === "south") {
          axisOrder += "s";
        } else if (axis[0].indexOf("east") !== -1 || (axis[0] === "x" || axis[0] === "lon") && axis[1] === "east") {
          axisOrder += "e";
        } else if (axis[0].indexOf("west") !== -1 || (axis[0] === "x" || axis[0] === "lon") && axis[1] === "west") {
          axisOrder += "w";
        }
      }
      if (axisOrder.length === 2) {
        axisOrder += "u";
      }
      if (axisOrder.length === 3) {
        wkt.axis = axisOrder;
      }
    }
    if (wkt.UNIT) {
      wkt.units = wkt.UNIT.name.toLowerCase();
      if (wkt.units === "metre") {
        wkt.units = "meter";
      }
      if (wkt.UNIT.convert) {
        if (wkt.type === "GEOGCS") {
          if (wkt.DATUM && wkt.DATUM.SPHEROID) {
            wkt.to_meter = wkt.UNIT.convert * wkt.DATUM.SPHEROID.a;
          }
        } else {
          wkt.to_meter = wkt.UNIT.convert;
        }
      }
    }
    var geogcs = wkt.GEOGCS;
    if (wkt.type === "GEOGCS") {
      geogcs = wkt;
    }
    if (geogcs) {
      if (geogcs.PRIMEM && geogcs.PRIMEM.convert) {
        wkt.from_greenwich = d2r(geogcs.PRIMEM.convert);
      }
      if (geogcs.DATUM) {
        wkt.datumCode = geogcs.DATUM.name.toLowerCase();
      } else {
        wkt.datumCode = geogcs.name.toLowerCase();
      }
      if (wkt.datumCode.slice(0, 2) === "d_") {
        wkt.datumCode = wkt.datumCode.slice(2);
      }
      if (wkt.datumCode === "new_zealand_1949") {
        wkt.datumCode = "nzgd49";
      }
      if (wkt.datumCode === "wgs_1984" || wkt.datumCode === "world_geodetic_system_1984") {
        if (wkt.PROJECTION === "Mercator_Auxiliary_Sphere") {
          wkt.sphere = true;
        }
        wkt.datumCode = "wgs84";
      }
      if (wkt.datumCode === "belge_1972") {
        wkt.datumCode = "rnb72";
      }
      if (geogcs.DATUM && geogcs.DATUM.SPHEROID) {
        wkt.ellps = geogcs.DATUM.SPHEROID.name.replace("_19", "").replace(/[Cc]larke\_18/, "clrk");
        if (wkt.ellps.toLowerCase().slice(0, 13) === "international") {
          wkt.ellps = "intl";
        }
        wkt.a = geogcs.DATUM.SPHEROID.a;
        wkt.rf = parseFloat(geogcs.DATUM.SPHEROID.rf);
      }
      if (geogcs.DATUM && geogcs.DATUM.TOWGS84) {
        wkt.datum_params = geogcs.DATUM.TOWGS84;
      }
      if (~wkt.datumCode.indexOf("osgb_1936")) {
        wkt.datumCode = "osgb36";
      }
      if (~wkt.datumCode.indexOf("osni_1952")) {
        wkt.datumCode = "osni52";
      }
      if (~wkt.datumCode.indexOf("tm65") || ~wkt.datumCode.indexOf("geodetic_datum_of_1965")) {
        wkt.datumCode = "ire65";
      }
      if (wkt.datumCode === "ch1903+") {
        wkt.datumCode = "ch1903";
      }
      if (~wkt.datumCode.indexOf("israel")) {
        wkt.datumCode = "isr93";
      }
    }
    if (wkt.b && !isFinite(wkt.b)) {
      wkt.b = wkt.a;
    }
    if (wkt.rectified_grid_angle) {
      wkt.rectified_grid_angle = d2r(wkt.rectified_grid_angle);
    }
    function toMeter(input) {
      var ratio = wkt.to_meter || 1;
      return input * ratio;
    }
    var renamer = function(a) {
      return rename(wkt, a);
    };
    var list = [
      ["standard_parallel_1", "Standard_Parallel_1"],
      ["standard_parallel_1", "Latitude of 1st standard parallel"],
      ["standard_parallel_2", "Standard_Parallel_2"],
      ["standard_parallel_2", "Latitude of 2nd standard parallel"],
      ["false_easting", "False_Easting"],
      ["false_easting", "False easting"],
      ["false-easting", "Easting at false origin"],
      ["false_northing", "False_Northing"],
      ["false_northing", "False northing"],
      ["false_northing", "Northing at false origin"],
      ["central_meridian", "Central_Meridian"],
      ["central_meridian", "Longitude of natural origin"],
      ["central_meridian", "Longitude of false origin"],
      ["latitude_of_origin", "Latitude_Of_Origin"],
      ["latitude_of_origin", "Central_Parallel"],
      ["latitude_of_origin", "Latitude of natural origin"],
      ["latitude_of_origin", "Latitude of false origin"],
      ["scale_factor", "Scale_Factor"],
      ["k0", "scale_factor"],
      ["latitude_of_center", "Latitude_Of_Center"],
      ["latitude_of_center", "Latitude_of_center"],
      ["lat0", "latitude_of_center", d2r],
      ["longitude_of_center", "Longitude_Of_Center"],
      ["longitude_of_center", "Longitude_of_center"],
      ["longc", "longitude_of_center", d2r],
      ["x0", "false_easting", toMeter],
      ["y0", "false_northing", toMeter],
      ["long0", "central_meridian", d2r],
      ["lat0", "latitude_of_origin", d2r],
      ["lat0", "standard_parallel_1", d2r],
      ["lat1", "standard_parallel_1", d2r],
      ["lat2", "standard_parallel_2", d2r],
      ["azimuth", "Azimuth"],
      ["alpha", "azimuth", d2r],
      ["srsCode", "name"]
    ];
    list.forEach(renamer);
    applyProjectionDefaults(wkt);
  }
  function wkt_parser_default(wkt) {
    if (typeof wkt === "object") {
      return transformPROJJSON(wkt);
    }
    const version2 = detectWKTVersion(wkt);
    var lisp = parser_default(wkt);
    if (version2 === "WKT2") {
      const projjson = buildPROJJSON(lisp);
      return transformPROJJSON(projjson);
    }
    var type = lisp[0];
    var obj = {};
    sExpr(lisp, obj);
    cleanWKT(obj);
    return obj[type];
  }

  // node_modules/proj4/lib/defs.js
  function defs(name) {
    var that = this;
    if (arguments.length === 2) {
      var def = arguments[1];
      if (typeof def === "string") {
        if (def.charAt(0) === "+") {
          defs[
            /** @type {string} */
            name
          ] = projString_default(arguments[1]);
        } else {
          defs[
            /** @type {string} */
            name
          ] = wkt_parser_default(arguments[1]);
        }
      } else if (def && typeof def === "object" && !("projName" in def)) {
        defs[
          /** @type {string} */
          name
        ] = wkt_parser_default(arguments[1]);
      } else {
        defs[
          /** @type {string} */
          name
        ] = def;
        if (!def) {
          delete defs[
            /** @type {string} */
            name
          ];
        }
      }
    } else if (arguments.length === 1) {
      if (Array.isArray(name)) {
        return name.map(function(v) {
          if (Array.isArray(v)) {
            return defs.apply(that, v);
          } else {
            return defs(v);
          }
        });
      } else if (typeof name === "string") {
        if (name in defs) {
          return defs[name];
        }
      } else if ("EPSG" in name) {
        defs["EPSG:" + name.EPSG] = name;
      } else if ("ESRI" in name) {
        defs["ESRI:" + name.ESRI] = name;
      } else if ("IAU2000" in name) {
        defs["IAU2000:" + name.IAU2000] = name;
      } else {
        console.log(name);
      }
      return;
    }
  }
  global_default(defs);
  var defs_default = defs;

  // node_modules/proj4/lib/parseCode.js
  function testObj(code) {
    return typeof code === "string";
  }
  function testDef(code) {
    return code in defs_default;
  }
  function testWKT(code) {
    return code.indexOf("+") !== 0 && code.indexOf("[") !== -1 || typeof code === "object" && !("srsCode" in code);
  }
  var codes = ["3857", "900913", "3785", "102113"];
  function checkMercator(item) {
    if (item.title) {
      return item.title.toLowerCase().indexOf("epsg:") === 0 && codes.indexOf(item.title.substr(5)) > -1;
    }
    var auth = match(item, "authority");
    if (!auth) {
      return;
    }
    var code = match(auth, "epsg");
    return code && codes.indexOf(code) > -1;
  }
  function checkProjStr(item) {
    var ext = match(item, "extension");
    if (!ext) {
      return;
    }
    return match(ext, "proj4");
  }
  function testProj(code) {
    return code[0] === "+";
  }
  function parse8(code) {
    let out;
    if (testObj(code)) {
      if (testDef(code)) {
        out = defs_default[code];
      } else if (testWKT(code)) {
        out = wkt_parser_default(code);
        var maybeProjStr = checkProjStr(out);
        if (maybeProjStr) {
          out = projString_default(maybeProjStr);
        }
      } else if (testProj(code)) {
        out = projString_default(code);
      }
    } else if (!("projName" in code)) {
      out = wkt_parser_default(code);
    } else {
      out = code;
    }
    return out && checkMercator(out) ? defs_default["EPSG:3857"] : out;
  }
  var parseCode_default = parse8;

  // node_modules/proj4/lib/extend.js
  function extend_default(destination, source) {
    destination = destination || {};
    var value, property;
    if (!source) {
      return destination;
    }
    for (property in source) {
      value = source[property];
      if (value !== void 0) {
        destination[property] = value;
      }
    }
    return destination;
  }

  // node_modules/proj4/lib/common/msfnz.js
  function msfnz_default(eccent, sinphi, cosphi) {
    var con = eccent * sinphi;
    return cosphi / Math.sqrt(1 - con * con);
  }

  // node_modules/proj4/lib/common/sign.js
  function sign_default(x) {
    return x < 0 ? -1 : 1;
  }

  // node_modules/proj4/lib/common/adjust_lon.js
  function adjust_lon_default(x, skipAdjust) {
    if (skipAdjust) {
      return x;
    }
    return Math.abs(x) <= SPI ? x : x - sign_default(x) * TWO_PI;
  }

  // node_modules/proj4/lib/common/tsfnz.js
  function tsfnz_default(eccent, phi, sinphi) {
    var con = eccent * sinphi;
    var com = 0.5 * eccent;
    con = Math.pow((1 - con) / (1 + con), com);
    return Math.tan(0.5 * (HALF_PI - phi)) / con;
  }

  // node_modules/proj4/lib/common/phi2z.js
  function phi2z_default(eccent, ts) {
    var eccnth = 0.5 * eccent;
    var con, dphi;
    var phi = HALF_PI - 2 * Math.atan(ts);
    for (var i = 0; i <= 15; i++) {
      con = eccent * Math.sin(phi);
      dphi = HALF_PI - 2 * Math.atan(ts * Math.pow((1 - con) / (1 + con), eccnth)) - phi;
      phi += dphi;
      if (Math.abs(dphi) <= 1e-10) {
        return phi;
      }
    }
    return -9999;
  }

  // node_modules/proj4/lib/projections/merc.js
  function init() {
    var con = this.b / this.a;
    this.es = 1 - con * con;
    if (!("x0" in this)) {
      this.x0 = 0;
    }
    if (!("y0" in this)) {
      this.y0 = 0;
    }
    this.long0 = this.long0 || 0;
    this.e = Math.sqrt(this.es);
    if (this.lat_ts) {
      if (this.sphere) {
        this.k0 = Math.cos(this.lat_ts);
      } else {
        this.k0 = msfnz_default(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts));
      }
    } else {
      if (!this.k0) {
        if (this.k) {
          this.k0 = this.k;
        } else {
          this.k0 = 1;
        }
      }
    }
  }
  function forward(p) {
    var lon = p.x;
    var lat = p.y;
    if (lat * R2D > 90 && lat * R2D < -90 && lon * R2D > 180 && lon * R2D < -180) {
      return null;
    }
    var x, y;
    if (Math.abs(Math.abs(lat) - HALF_PI) <= EPSLN) {
      return null;
    } else {
      if (this.sphere) {
        x = this.x0 + this.a * this.k0 * adjust_lon_default(lon - this.long0, this.over);
        y = this.y0 + this.a * this.k0 * Math.log(Math.tan(FORTPI + 0.5 * lat));
      } else {
        var sinphi = Math.sin(lat);
        var ts = tsfnz_default(this.e, lat, sinphi);
        x = this.x0 + this.a * this.k0 * adjust_lon_default(lon - this.long0, this.over);
        y = this.y0 - this.a * this.k0 * Math.log(ts);
      }
      p.x = x;
      p.y = y;
      return p;
    }
  }
  function inverse(p) {
    var x = p.x - this.x0;
    var y = p.y - this.y0;
    var lon, lat;
    if (this.sphere) {
      lat = HALF_PI - 2 * Math.atan(Math.exp(-y / (this.a * this.k0)));
    } else {
      var ts = Math.exp(-y / (this.a * this.k0));
      lat = phi2z_default(this.e, ts);
      if (lat === -9999) {
        return null;
      }
    }
    lon = adjust_lon_default(this.long0 + x / (this.a * this.k0), this.over);
    p.x = lon;
    p.y = lat;
    return p;
  }
  var names = ["Mercator", "Popular Visualisation Pseudo Mercator", "Mercator_1SP", "Mercator_Auxiliary_Sphere", "Mercator_Variant_A", "merc"];
  var merc_default = {
    init,
    forward,
    inverse,
    names
  };

  // node_modules/proj4/lib/projections/longlat.js
  function init2() {
  }
  function identity(pt) {
    return pt;
  }
  var names2 = ["longlat", "identity", "lonlat", "latlon", "latlong"];
  var longlat_default = {
    init: init2,
    forward: identity,
    inverse: identity,
    names: names2
  };

  // node_modules/proj4/lib/projections.js
  var projs = [merc_default, longlat_default];
  var names3 = {};
  var projStore = [];
  function add(proj, i) {
    var len = projStore.length;
    if (!proj.names) {
      console.log(i);
      return true;
    }
    projStore[len] = proj;
    proj.names.forEach(function(n) {
      names3[n.toLowerCase()] = len;
    });
    return this;
  }
  function getNormalizedProjName(n) {
    return n.replace(/[-\(\)\s]+/g, " ").trim().replace(/ /g, "_");
  }
  function get(name) {
    if (!name) {
      return false;
    }
    var n = name.toLowerCase();
    if (typeof names3[n] !== "undefined" && projStore[names3[n]]) {
      return projStore[names3[n]];
    }
    n = getNormalizedProjName(n);
    if (n in names3 && projStore[names3[n]]) {
      return projStore[names3[n]];
    }
  }
  function start() {
    projs.forEach(add);
  }
  var projections_default = {
    start,
    add,
    get
  };

  // node_modules/proj4/lib/constants/Ellipsoid.js
  var ellipsoids = {
    MERIT: {
      a: 6378137,
      rf: 298.257,
      ellipseName: "MERIT 1983"
    },
    SGS85: {
      a: 6378136,
      rf: 298.257,
      ellipseName: "Soviet Geodetic System 85"
    },
    GRS80: {
      a: 6378137,
      rf: 298.257222101,
      ellipseName: "GRS 1980(IUGG, 1980)"
    },
    IAU76: {
      a: 6378140,
      rf: 298.257,
      ellipseName: "IAU 1976"
    },
    airy: {
      a: 6377563396e-3,
      b: 635625691e-2,
      ellipseName: "Airy 1830"
    },
    APL4: {
      a: 6378137,
      rf: 298.25,
      ellipseName: "Appl. Physics. 1965"
    },
    NWL9D: {
      a: 6378145,
      rf: 298.25,
      ellipseName: "Naval Weapons Lab., 1965"
    },
    mod_airy: {
      a: 6377340189e-3,
      b: 6356034446e-3,
      ellipseName: "Modified Airy"
    },
    andrae: {
      a: 637710443e-2,
      rf: 300,
      ellipseName: "Andrae 1876 (Den., Iclnd.)"
    },
    aust_SA: {
      a: 6378160,
      rf: 298.25,
      ellipseName: "Australian Natl & S. Amer. 1969"
    },
    GRS67: {
      a: 6378160,
      rf: 298.247167427,
      ellipseName: "GRS 67(IUGG 1967)"
    },
    bessel: {
      a: 6377397155e-3,
      rf: 299.1528128,
      ellipseName: "Bessel 1841"
    },
    bess_nam: {
      a: 6377483865e-3,
      rf: 299.1528128,
      ellipseName: "Bessel 1841 (Namibia)"
    },
    clrk66: {
      a: 63782064e-1,
      b: 63565838e-1,
      ellipseName: "Clarke 1866"
    },
    clrk80: {
      a: 6378249145e-3,
      rf: 293.4663,
      ellipseName: "Clarke 1880 mod."
    },
    clrk80ign: {
      a: 63782492e-1,
      b: 6356515,
      rf: 293.4660213,
      ellipseName: "Clarke 1880 (IGN)"
    },
    clrk58: {
      a: 6378293645208759e-9,
      rf: 294.2606763692654,
      ellipseName: "Clarke 1858"
    },
    CPM: {
      a: 63757387e-1,
      rf: 334.29,
      ellipseName: "Comm. des Poids et Mesures 1799"
    },
    delmbr: {
      a: 6376428,
      rf: 311.5,
      ellipseName: "Delambre 1810 (Belgium)"
    },
    engelis: {
      a: 637813605e-2,
      rf: 298.2566,
      ellipseName: "Engelis 1985"
    },
    evrst30: {
      a: 6377276345e-3,
      rf: 300.8017,
      ellipseName: "Everest 1830"
    },
    evrst48: {
      a: 6377304063e-3,
      rf: 300.8017,
      ellipseName: "Everest 1948"
    },
    evrst56: {
      a: 6377301243e-3,
      rf: 300.8017,
      ellipseName: "Everest 1956"
    },
    evrst69: {
      a: 6377295664e-3,
      rf: 300.8017,
      ellipseName: "Everest 1969"
    },
    evrstSS: {
      a: 6377298556e-3,
      rf: 300.8017,
      ellipseName: "Everest (Sabah & Sarawak)"
    },
    fschr60: {
      a: 6378166,
      rf: 298.3,
      ellipseName: "Fischer (Mercury Datum) 1960"
    },
    fschr60m: {
      a: 6378155,
      rf: 298.3,
      ellipseName: "Fischer 1960"
    },
    fschr68: {
      a: 6378150,
      rf: 298.3,
      ellipseName: "Fischer 1968"
    },
    helmert: {
      a: 6378200,
      rf: 298.3,
      ellipseName: "Helmert 1906"
    },
    hough: {
      a: 6378270,
      rf: 297,
      ellipseName: "Hough"
    },
    intl: {
      a: 6378388,
      rf: 297,
      ellipseName: "International 1909 (Hayford)"
    },
    kaula: {
      a: 6378163,
      rf: 298.24,
      ellipseName: "Kaula 1961"
    },
    lerch: {
      a: 6378139,
      rf: 298.257,
      ellipseName: "Lerch 1979"
    },
    mprts: {
      a: 6397300,
      rf: 191,
      ellipseName: "Maupertius 1738"
    },
    new_intl: {
      a: 63781575e-1,
      b: 63567722e-1,
      ellipseName: "New International 1967"
    },
    plessis: {
      a: 6376523,
      b: 6355863,
      ellipseName: "Plessis 1817 (France)"
    },
    krass: {
      a: 6378245,
      rf: 298.3,
      ellipseName: "Krassovsky, 1942"
    },
    SEasia: {
      a: 6378155,
      b: 63567733205e-4,
      ellipseName: "Southeast Asia"
    },
    walbeck: {
      a: 6376896,
      b: 63558348467e-4,
      ellipseName: "Walbeck"
    },
    WGS60: {
      a: 6378165,
      rf: 298.3,
      ellipseName: "WGS 60"
    },
    WGS66: {
      a: 6378145,
      rf: 298.25,
      ellipseName: "WGS 66"
    },
    WGS7: {
      a: 6378135,
      rf: 298.26,
      ellipseName: "WGS 72"
    },
    WGS84: {
      a: 6378137,
      rf: 298.257223563,
      ellipseName: "WGS 84"
    },
    sphere: {
      a: 6370997,
      b: 6370997,
      ellipseName: "Normal Sphere (r=6370997)"
    }
  };
  var Ellipsoid_default = ellipsoids;

  // node_modules/proj4/lib/deriveConstants.js
  var WGS84 = Ellipsoid_default.WGS84;
  function eccentricity(a, b, rf, R_A) {
    var a2 = a * a;
    var b2 = b * b;
    var es = (a2 - b2) / a2;
    var e = 0;
    if (R_A) {
      a *= 1 - es * (SIXTH + es * (RA4 + es * RA6));
      a2 = a * a;
      es = 0;
    } else {
      e = Math.sqrt(es);
    }
    var ep2 = (a2 - b2) / b2;
    return {
      es,
      e,
      ep2
    };
  }
  function sphere(a, b, rf, ellps, sphere2) {
    if (!a) {
      var ellipse = match(Ellipsoid_default, ellps);
      if (!ellipse) {
        ellipse = WGS84;
      }
      a = ellipse.a;
      b = ellipse.b;
      rf = ellipse.rf;
    }
    if (rf && !b) {
      b = (1 - 1 / rf) * a;
    }
    if (rf === 0 || Math.abs(a - b) < EPSLN) {
      sphere2 = true;
      b = a;
    }
    return {
      a,
      b,
      rf,
      sphere: sphere2
    };
  }

  // node_modules/proj4/lib/constants/Datum.js
  var datums = {
    wgs84: {
      towgs84: "0,0,0",
      ellipse: "WGS84",
      datumName: "WGS84"
    },
    ch1903: {
      towgs84: "674.374,15.056,405.346",
      ellipse: "bessel",
      datumName: "swiss"
    },
    ggrs87: {
      towgs84: "-199.87,74.79,246.62",
      ellipse: "GRS80",
      datumName: "Greek_Geodetic_Reference_System_1987"
    },
    nad83: {
      towgs84: "0,0,0",
      ellipse: "GRS80",
      datumName: "North_American_Datum_1983"
    },
    nad27: {
      nadgrids: "@conus,@alaska,@ntv2_0.gsb,@ntv1_can.dat",
      ellipse: "clrk66",
      datumName: "North_American_Datum_1927"
    },
    potsdam: {
      towgs84: "598.1,73.7,418.2,0.202,0.045,-2.455,6.7",
      ellipse: "bessel",
      datumName: "Potsdam Rauenberg 1950 DHDN"
    },
    carthage: {
      towgs84: "-263.0,6.0,431.0",
      ellipse: "clrk80ign",
      datumName: "Carthage 1934 Tunisia"
    },
    hermannskogel: {
      towgs84: "577.326,90.129,463.919,5.137,1.474,5.297,2.4232",
      ellipse: "bessel",
      datumName: "Hermannskogel"
    },
    mgi: {
      towgs84: "577.326,90.129,463.919,5.137,1.474,5.297,2.4232",
      ellipse: "bessel",
      datumName: "Militar-Geographische Institut"
    },
    osni52: {
      towgs84: "482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",
      ellipse: "airy",
      datumName: "Irish National"
    },
    ire65: {
      towgs84: "482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",
      ellipse: "mod_airy",
      datumName: "Ireland 1965"
    },
    rassadiran: {
      towgs84: "-133.63,-157.5,-158.62",
      ellipse: "intl",
      datumName: "Rassadiran"
    },
    nzgd49: {
      towgs84: "59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993",
      ellipse: "intl",
      datumName: "New Zealand Geodetic Datum 1949"
    },
    osgb36: {
      towgs84: "446.448,-125.157,542.060,0.1502,0.2470,0.8421,-20.4894",
      ellipse: "airy",
      datumName: "Ordnance Survey of Great Britain 1936"
    },
    s_jtsk: {
      towgs84: "589,76,480",
      ellipse: "bessel",
      datumName: "S-JTSK (Ferro)"
    },
    beduaram: {
      towgs84: "-106,-87,188",
      ellipse: "clrk80",
      datumName: "Beduaram"
    },
    gunung_segara: {
      towgs84: "-403,684,41",
      ellipse: "bessel",
      datumName: "Gunung Segara Jakarta"
    },
    rnb72: {
      towgs84: "106.869,-52.2978,103.724,-0.33657,0.456955,-1.84218,1",
      ellipse: "intl",
      datumName: "Reseau National Belge 1972"
    },
    EPSG_5451: {
      towgs84: "6.41,-49.05,-11.28,1.5657,0.5242,6.9718,-5.7649"
    },
    IGNF_LURESG: {
      towgs84: "-192.986,13.673,-39.309,-0.4099,-2.9332,2.6881,0.43"
    },
    EPSG_4614: {
      towgs84: "-119.4248,-303.65872,-11.00061,1.164298,0.174458,1.096259,3.657065"
    },
    EPSG_4615: {
      towgs84: "-494.088,-312.129,279.877,-1.423,-1.013,1.59,-0.748"
    },
    ESRI_37241: {
      towgs84: "-76.822,257.457,-12.817,2.136,-0.033,-2.392,-0.031"
    },
    ESRI_37249: {
      towgs84: "-440.296,58.548,296.265,1.128,10.202,4.559,-0.438"
    },
    ESRI_37245: {
      towgs84: "-511.151,-181.269,139.609,1.05,2.703,1.798,3.071"
    },
    EPSG_4178: {
      towgs84: "24.9,-126.4,-93.2,-0.063,-0.247,-0.041,1.01"
    },
    EPSG_4622: {
      towgs84: "-472.29,-5.63,-304.12,0.4362,-0.8374,0.2563,1.8984"
    },
    EPSG_4625: {
      towgs84: "126.93,547.94,130.41,-2.7867,5.1612,-0.8584,13.8227"
    },
    EPSG_5252: {
      towgs84: "0.023,0.036,-0.068,0.00176,0.00912,-0.01136,0.00439"
    },
    EPSG_4314: {
      towgs84: "597.1,71.4,412.1,0.894,0.068,-1.563,7.58"
    },
    EPSG_4282: {
      towgs84: "-178.3,-316.7,-131.5,5.278,6.077,10.979,19.166"
    },
    EPSG_4231: {
      towgs84: "-83.11,-97.38,-117.22,0.005693,-0.044698,0.044285,0.1218"
    },
    EPSG_4274: {
      towgs84: "-230.994,102.591,25.199,0.633,-0.239,0.9,1.95"
    },
    EPSG_4134: {
      towgs84: "-180.624,-225.516,173.919,-0.81,-1.898,8.336,16.71006"
    },
    EPSG_4254: {
      towgs84: "18.38,192.45,96.82,0.056,-0.142,-0.2,-0.0013"
    },
    EPSG_4159: {
      towgs84: "-194.513,-63.978,-25.759,-3.4027,3.756,-3.352,-0.9175"
    },
    EPSG_4687: {
      towgs84: "0.072,-0.507,-0.245,0.0183,-0.0003,0.007,-0.0093"
    },
    EPSG_4227: {
      towgs84: "-83.58,-397.54,458.78,-17.595,-2.847,4.256,3.225"
    },
    EPSG_4746: {
      towgs84: "599.4,72.4,419.2,-0.062,-0.022,-2.723,6.46"
    },
    EPSG_4745: {
      towgs84: "612.4,77,440.2,-0.054,0.057,-2.797,2.55"
    },
    EPSG_6311: {
      towgs84: "8.846,-4.394,-1.122,-0.00237,-0.146528,0.130428,0.783926"
    },
    EPSG_4289: {
      towgs84: "565.7381,50.4018,465.2904,-0.395026,0.330772,-1.876073,4.07244"
    },
    EPSG_4230: {
      towgs84: "-68.863,-134.888,-111.49,-0.53,-0.14,0.57,-3.4"
    },
    EPSG_4154: {
      towgs84: "-123.02,-158.95,-168.47"
    },
    EPSG_4156: {
      towgs84: "570.8,85.7,462.8,4.998,1.587,5.261,3.56"
    },
    EPSG_4299: {
      towgs84: "482.5,-130.6,564.6,-1.042,-0.214,-0.631,8.15"
    },
    EPSG_4179: {
      towgs84: "33.4,-146.6,-76.3,-0.359,-0.053,0.844,-0.84"
    },
    EPSG_4313: {
      towgs84: "-106.8686,52.2978,-103.7239,0.3366,-0.457,1.8422,-1.2747"
    },
    EPSG_4194: {
      towgs84: "163.511,127.533,-159.789"
    },
    EPSG_4195: {
      towgs84: "105,326,-102.5"
    },
    EPSG_4196: {
      towgs84: "-45,417,-3.5"
    },
    EPSG_4611: {
      towgs84: "-162.619,-276.959,-161.764,0.067753,-2.243648,-1.158828,-1.094246"
    },
    EPSG_4633: {
      towgs84: "137.092,131.66,91.475,-1.9436,-11.5993,-4.3321,-7.4824"
    },
    EPSG_4641: {
      towgs84: "-408.809,366.856,-412.987,1.8842,-0.5308,2.1655,-121.0993"
    },
    EPSG_4643: {
      towgs84: "-480.26,-438.32,-643.429,16.3119,20.1721,-4.0349,-111.7002"
    },
    EPSG_4300: {
      towgs84: "482.5,-130.6,564.6,-1.042,-0.214,-0.631,8.15"
    },
    EPSG_4188: {
      towgs84: "482.5,-130.6,564.6,-1.042,-0.214,-0.631,8.15"
    },
    EPSG_4660: {
      towgs84: "982.6087,552.753,-540.873,6.681627,-31.611492,-19.848161,16.805"
    },
    EPSG_4662: {
      towgs84: "97.295,-263.247,310.882,-1.5999,0.8386,3.1409,13.3259"
    },
    EPSG_3906: {
      towgs84: "577.88891,165.22205,391.18289,4.9145,-0.94729,-13.05098,7.78664"
    },
    EPSG_4307: {
      towgs84: "-209.3622,-87.8162,404.6198,0.0046,3.4784,0.5805,-1.4547"
    },
    EPSG_6892: {
      towgs84: "-76.269,-16.683,68.562,-6.275,10.536,-4.286,-13.686"
    },
    EPSG_4690: {
      towgs84: "221.597,152.441,176.523,2.403,1.3893,0.884,11.4648"
    },
    EPSG_4691: {
      towgs84: "218.769,150.75,176.75,3.5231,2.0037,1.288,10.9817"
    },
    EPSG_4629: {
      towgs84: "72.51,345.411,79.241,-1.5862,-0.8826,-0.5495,1.3653"
    },
    EPSG_4630: {
      towgs84: "165.804,216.213,180.26,-0.6251,-0.4515,-0.0721,7.4111"
    },
    EPSG_4692: {
      towgs84: "217.109,86.452,23.711,0.0183,-0.0003,0.007,-0.0093"
    },
    EPSG_9333: {
      towgs84: "0,0,0,-0.008393,0.000749,-0.010276,0"
    },
    EPSG_9059: {
      towgs84: "0,0,0"
    },
    EPSG_4312: {
      towgs84: "601.705,84.263,485.227,4.7354,1.3145,5.393,-2.3887"
    },
    EPSG_4123: {
      towgs84: "-96.062,-82.428,-121.753,4.801,0.345,-1.376,1.496"
    },
    EPSG_4309: {
      towgs84: "-124.45,183.74,44.64,-0.4384,0.5446,-0.9706,-2.1365"
    },
    ESRI_104106: {
      towgs84: "-283.088,-70.693,117.445,-1.157,0.059,-0.652,-4.058"
    },
    EPSG_4281: {
      towgs84: "-219.247,-73.802,269.529"
    },
    EPSG_4322: {
      towgs84: "0,0,4.5"
    },
    EPSG_4324: {
      towgs84: "0,0,1.9"
    },
    EPSG_4284: {
      towgs84: "43.822,-108.842,-119.585,1.455,-0.761,0.737,0.549"
    },
    EPSG_4277: {
      towgs84: "446.448,-125.157,542.06,0.15,0.247,0.842,-20.489"
    },
    EPSG_4207: {
      towgs84: "-282.1,-72.2,120,-1.529,0.145,-0.89,-4.46"
    },
    EPSG_4688: {
      towgs84: "347.175,1077.618,2623.677,33.9058,-70.6776,9.4013,186.0647"
    },
    EPSG_4689: {
      towgs84: "410.793,54.542,80.501,-2.5596,-2.3517,-0.6594,17.3218"
    },
    EPSG_4720: {
      towgs84: "0,0,4.5"
    },
    EPSG_4273: {
      towgs84: "278.3,93,474.5,7.889,0.05,-6.61,6.21"
    },
    EPSG_4240: {
      towgs84: "204.64,834.74,293.8"
    },
    EPSG_4817: {
      towgs84: "278.3,93,474.5,7.889,0.05,-6.61,6.21"
    },
    ESRI_104131: {
      towgs84: "426.62,142.62,460.09,4.98,4.49,-12.42,-17.1"
    },
    EPSG_4265: {
      towgs84: "-104.1,-49.1,-9.9,0.971,-2.917,0.714,-11.68"
    },
    EPSG_4263: {
      towgs84: "-111.92,-87.85,114.5,1.875,0.202,0.219,0.032"
    },
    EPSG_4298: {
      towgs84: "-689.5937,623.84046,-65.93566,-0.02331,1.17094,-0.80054,5.88536"
    },
    EPSG_4270: {
      towgs84: "-253.4392,-148.452,386.5267,0.15605,0.43,-0.1013,-0.0424"
    },
    EPSG_4229: {
      towgs84: "-121.8,98.1,-10.7"
    },
    EPSG_4220: {
      towgs84: "-55.5,-348,-229.2"
    },
    EPSG_4214: {
      towgs84: "12.646,-155.176,-80.863"
    },
    EPSG_4232: {
      towgs84: "-345,3,223"
    },
    EPSG_4238: {
      towgs84: "-1.977,-13.06,-9.993,0.364,0.254,0.689,-1.037"
    },
    EPSG_4168: {
      towgs84: "-170,33,326"
    },
    EPSG_4131: {
      towgs84: "199,931,318.9"
    },
    EPSG_4152: {
      towgs84: "-0.9102,2.0141,0.5602,0.029039,0.010065,0.010101,0"
    },
    EPSG_5228: {
      towgs84: "572.213,85.334,461.94,4.9732,1.529,5.2484,3.5378"
    },
    EPSG_8351: {
      towgs84: "485.021,169.465,483.839,7.786342,4.397554,4.102655,0"
    },
    EPSG_4683: {
      towgs84: "-127.62,-67.24,-47.04,-3.068,4.903,1.578,-1.06"
    },
    EPSG_4133: {
      towgs84: "0,0,0"
    },
    EPSG_7373: {
      towgs84: "0.819,-0.5762,-1.6446,-0.00378,-0.03317,0.00318,0.0693"
    },
    EPSG_9075: {
      towgs84: "-0.9102,2.0141,0.5602,0.029039,0.010065,0.010101,0"
    },
    EPSG_9072: {
      towgs84: "-0.9102,2.0141,0.5602,0.029039,0.010065,0.010101,0"
    },
    EPSG_9294: {
      towgs84: "1.16835,-1.42001,-2.24431,-0.00822,-0.05508,0.01818,0.23388"
    },
    EPSG_4212: {
      towgs84: "-267.434,173.496,181.814,-13.4704,8.7154,7.3926,14.7492"
    },
    EPSG_4191: {
      towgs84: "-44.183,-0.58,-38.489,2.3867,2.7072,-3.5196,-8.2703"
    },
    EPSG_4237: {
      towgs84: "52.684,-71.194,-13.975,-0.312,-0.1063,-0.3729,1.0191"
    },
    EPSG_4740: {
      towgs84: "-1.08,-0.27,-0.9"
    },
    EPSG_4124: {
      towgs84: "419.3836,99.3335,591.3451,0.850389,1.817277,-7.862238,-0.99496"
    },
    EPSG_5681: {
      towgs84: "584.9636,107.7175,413.8067,1.1155,0.2824,-3.1384,7.9922"
    },
    EPSG_4141: {
      towgs84: "23.772,17.49,17.859,-0.3132,-1.85274,1.67299,-5.4262"
    },
    EPSG_4204: {
      towgs84: "-85.645,-273.077,-79.708,2.289,-1.421,2.532,3.194"
    },
    EPSG_4319: {
      towgs84: "226.702,-193.337,-35.371,-2.229,-4.391,9.238,0.9798"
    },
    EPSG_4200: {
      towgs84: "24.82,-131.21,-82.66"
    },
    EPSG_4130: {
      towgs84: "0,0,0"
    },
    EPSG_4127: {
      towgs84: "-82.875,-57.097,-156.768,-2.158,1.524,-0.982,-0.359"
    },
    EPSG_4149: {
      towgs84: "674.374,15.056,405.346"
    },
    EPSG_4617: {
      towgs84: "-0.991,1.9072,0.5129,0.02579,0.00965,0.01166,0"
    },
    EPSG_4663: {
      towgs84: "-210.502,-66.902,-48.476,2.094,-15.067,-5.817,0.485"
    },
    EPSG_4664: {
      towgs84: "-211.939,137.626,58.3,-0.089,0.251,0.079,0.384"
    },
    EPSG_4665: {
      towgs84: "-105.854,165.589,-38.312,-0.003,-0.026,0.024,-0.048"
    },
    EPSG_4666: {
      towgs84: "631.392,-66.551,481.442,1.09,-4.445,-4.487,-4.43"
    },
    EPSG_4756: {
      towgs84: "-192.873,-39.382,-111.202,-0.00205,-0.0005,0.00335,0.0188"
    },
    EPSG_4723: {
      towgs84: "-179.483,-69.379,-27.584,-7.862,8.163,6.042,-13.925"
    },
    EPSG_4726: {
      towgs84: "8.853,-52.644,180.304,-0.393,-2.323,2.96,-24.081"
    },
    EPSG_4267: {
      towgs84: "-8.0,160.0,176.0"
    },
    EPSG_5365: {
      towgs84: "-0.16959,0.35312,0.51846,0.03385,-0.16325,0.03446,0.03693"
    },
    EPSG_4218: {
      towgs84: "304.5,306.5,-318.1"
    },
    EPSG_4242: {
      towgs84: "-33.722,153.789,94.959,-8.581,-4.478,4.54,8.95"
    },
    EPSG_4216: {
      towgs84: "-292.295,248.758,429.447,4.9971,2.99,6.6906,1.0289"
    },
    ESRI_104105: {
      towgs84: "631.392,-66.551,481.442,1.09,-4.445,-4.487,-4.43"
    },
    ESRI_104129: {
      towgs84: "0,0,0"
    },
    EPSG_4673: {
      towgs84: "174.05,-25.49,112.57"
    },
    EPSG_4202: {
      towgs84: "-124,-60,154"
    },
    EPSG_4203: {
      towgs84: "-117.763,-51.51,139.061,0.292,0.443,0.277,-0.191"
    },
    EPSG_3819: {
      towgs84: "595.48,121.69,515.35,4.115,-2.9383,0.853,-3.408"
    },
    EPSG_8694: {
      towgs84: "-93.799,-132.737,-219.073,-1.844,0.648,-6.37,-0.169"
    },
    EPSG_4145: {
      towgs84: "275.57,676.78,229.6"
    },
    EPSG_4283: {
      towgs84: "0.06155,-0.01087,-0.04019,0.039492,0.032722,0.032898,-0.009994"
    },
    EPSG_4317: {
      towgs84: "2.3287,-147.0425,-92.0802,-0.309248,0.324822,0.497299,5.689063"
    },
    EPSG_4272: {
      towgs84: "59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993"
    },
    EPSG_4248: {
      towgs84: "-307.7,265.3,-363.5"
    },
    EPSG_5561: {
      towgs84: "24,-121,-76"
    },
    EPSG_5233: {
      towgs84: "-0.293,766.95,87.713,0.195704,1.695068,3.473016,-0.039338"
    },
    ESRI_104130: {
      towgs84: "-86,-98,-119"
    },
    ESRI_104102: {
      towgs84: "682,-203,480"
    },
    ESRI_37207: {
      towgs84: "7,-10,-26"
    },
    EPSG_4675: {
      towgs84: "59.935,118.4,-10.871"
    },
    ESRI_104109: {
      towgs84: "-89.121,-348.182,260.871"
    },
    ESRI_104112: {
      towgs84: "-185.583,-230.096,281.361"
    },
    ESRI_104113: {
      towgs84: "25.1,-275.6,222.6"
    },
    IGNF_WGS72G: {
      towgs84: "0,12,6"
    },
    IGNF_NTFG: {
      towgs84: "-168,-60,320"
    },
    IGNF_EFATE57G: {
      towgs84: "-127,-769,472"
    },
    IGNF_PGP50G: {
      towgs84: "324.8,153.6,172.1"
    },
    IGNF_REUN47G: {
      towgs84: "94,-948,-1262"
    },
    IGNF_CSG67G: {
      towgs84: "-186,230,110"
    },
    IGNF_GUAD48G: {
      towgs84: "-467,-16,-300"
    },
    IGNF_TAHI51G: {
      towgs84: "162,117,154"
    },
    IGNF_TAHAAG: {
      towgs84: "65,342,77"
    },
    IGNF_NUKU72G: {
      towgs84: "84,274,65"
    },
    IGNF_PETRELS72G: {
      towgs84: "365,194,166"
    },
    IGNF_WALL78G: {
      towgs84: "253,-133,-127"
    },
    IGNF_MAYO50G: {
      towgs84: "-382,-59,-262"
    },
    IGNF_TANNAG: {
      towgs84: "-139,-967,436"
    },
    IGNF_IGN72G: {
      towgs84: "-13,-348,292"
    },
    IGNF_ATIGG: {
      towgs84: "1118,23,66"
    },
    IGNF_FANGA84G: {
      towgs84: "150.57,158.33,118.32"
    },
    IGNF_RUSAT84G: {
      towgs84: "202.13,174.6,-15.74"
    },
    IGNF_KAUE70G: {
      towgs84: "126.74,300.1,-75.49"
    },
    IGNF_MOP90G: {
      towgs84: "-10.8,-1.8,12.77"
    },
    IGNF_MHPF67G: {
      towgs84: "338.08,212.58,-296.17"
    },
    IGNF_TAHI79G: {
      towgs84: "160.61,116.05,153.69"
    },
    IGNF_ANAA92G: {
      towgs84: "1.5,3.84,4.81"
    },
    IGNF_MARQUI72G: {
      towgs84: "330.91,-13.92,58.56"
    },
    IGNF_APAT86G: {
      towgs84: "143.6,197.82,74.05"
    },
    IGNF_TUBU69G: {
      towgs84: "237.17,171.61,-77.84"
    },
    IGNF_STPM50G: {
      towgs84: "11.363,424.148,373.13"
    },
    EPSG_4150: {
      towgs84: "674.374,15.056,405.346"
    },
    EPSG_4754: {
      towgs84: "-208.4058,-109.8777,-2.5764"
    },
    ESRI_104101: {
      towgs84: "372.87,149.23,585.29"
    },
    EPSG_4693: {
      towgs84: "0,-0.15,0.68"
    },
    EPSG_6207: {
      towgs84: "293.17,726.18,245.36"
    },
    EPSG_4153: {
      towgs84: "-133.63,-157.5,-158.62"
    },
    EPSG_4132: {
      towgs84: "-241.54,-163.64,396.06"
    },
    EPSG_4221: {
      towgs84: "-154.5,150.7,100.4"
    },
    EPSG_4266: {
      towgs84: "-80.7,-132.5,41.1"
    },
    EPSG_4193: {
      towgs84: "-70.9,-151.8,-41.4"
    },
    EPSG_5340: {
      towgs84: "-0.41,0.46,-0.35"
    },
    EPSG_4246: {
      towgs84: "-294.7,-200.1,525.5"
    },
    EPSG_4318: {
      towgs84: "-3.2,-5.7,2.8"
    },
    EPSG_4121: {
      towgs84: "-199.87,74.79,246.62"
    },
    EPSG_4223: {
      towgs84: "-260.1,5.5,432.2"
    },
    EPSG_4158: {
      towgs84: "-0.465,372.095,171.736"
    },
    EPSG_4285: {
      towgs84: "-128.16,-282.42,21.93"
    },
    EPSG_4613: {
      towgs84: "-404.78,685.68,45.47"
    },
    EPSG_4607: {
      towgs84: "195.671,332.517,274.607"
    },
    EPSG_4475: {
      towgs84: "-381.788,-57.501,-256.673"
    },
    EPSG_4208: {
      towgs84: "-157.84,308.54,-146.6"
    },
    EPSG_4743: {
      towgs84: "70.995,-335.916,262.898"
    },
    EPSG_4710: {
      towgs84: "-323.65,551.39,-491.22"
    },
    EPSG_7881: {
      towgs84: "-0.077,0.079,0.086"
    },
    EPSG_4682: {
      towgs84: "283.729,735.942,261.143"
    },
    EPSG_4739: {
      towgs84: "-156,-271,-189"
    },
    EPSG_4679: {
      towgs84: "-80.01,253.26,291.19"
    },
    EPSG_4750: {
      towgs84: "-56.263,16.136,-22.856"
    },
    EPSG_4644: {
      towgs84: "-10.18,-350.43,291.37"
    },
    EPSG_4695: {
      towgs84: "-103.746,-9.614,-255.95"
    },
    EPSG_4292: {
      towgs84: "-355,21,72"
    },
    EPSG_4302: {
      towgs84: "-61.702,284.488,472.052"
    },
    EPSG_4143: {
      towgs84: "-124.76,53,466.79"
    },
    EPSG_4606: {
      towgs84: "-153,153,307"
    },
    EPSG_4699: {
      towgs84: "-770.1,158.4,-498.2"
    },
    EPSG_4247: {
      towgs84: "-273.5,110.6,-357.9"
    },
    EPSG_4160: {
      towgs84: "8.88,184.86,106.69"
    },
    EPSG_4161: {
      towgs84: "-233.43,6.65,173.64"
    },
    EPSG_9251: {
      towgs84: "-9.5,122.9,138.2"
    },
    EPSG_9253: {
      towgs84: "-78.1,101.6,133.3"
    },
    EPSG_4297: {
      towgs84: "-198.383,-240.517,-107.909"
    },
    EPSG_4269: {
      towgs84: "0,0,0"
    },
    EPSG_4301: {
      towgs84: "-147,506,687"
    },
    EPSG_4618: {
      towgs84: "-59,-11,-52"
    },
    EPSG_4612: {
      towgs84: "0,0,0"
    },
    EPSG_4678: {
      towgs84: "44.585,-131.212,-39.544"
    },
    EPSG_4250: {
      towgs84: "-130,29,364"
    },
    EPSG_4144: {
      towgs84: "214,804,268"
    },
    EPSG_4147: {
      towgs84: "-17.51,-108.32,-62.39"
    },
    EPSG_4259: {
      towgs84: "-254.1,-5.36,-100.29"
    },
    EPSG_4164: {
      towgs84: "-76,-138,67"
    },
    EPSG_4211: {
      towgs84: "-378.873,676.002,-46.255"
    },
    EPSG_4182: {
      towgs84: "-422.651,-172.995,84.02"
    },
    EPSG_4224: {
      towgs84: "-143.87,243.37,-33.52"
    },
    EPSG_4225: {
      towgs84: "-205.57,168.77,-4.12"
    },
    EPSG_5527: {
      towgs84: "-67.35,3.88,-38.22"
    },
    EPSG_4752: {
      towgs84: "98,390,-22"
    },
    EPSG_4310: {
      towgs84: "-30,190,89"
    },
    EPSG_9248: {
      towgs84: "-192.26,65.72,132.08"
    },
    EPSG_4680: {
      towgs84: "124.5,-63.5,-281"
    },
    EPSG_4701: {
      towgs84: "-79.9,-158,-168.9"
    },
    EPSG_4706: {
      towgs84: "-146.21,112.63,4.05"
    },
    EPSG_4805: {
      towgs84: "682,-203,480"
    },
    EPSG_4201: {
      towgs84: "-165,-11,206"
    },
    EPSG_4210: {
      towgs84: "-157,-2,-299"
    },
    EPSG_4183: {
      towgs84: "-104,167,-38"
    },
    EPSG_4139: {
      towgs84: "11,72,-101"
    },
    EPSG_4668: {
      towgs84: "-86,-98,-119"
    },
    EPSG_4717: {
      towgs84: "-2,151,181"
    },
    EPSG_4732: {
      towgs84: "102,52,-38"
    },
    EPSG_4280: {
      towgs84: "-377,681,-50"
    },
    EPSG_4209: {
      towgs84: "-138,-105,-289"
    },
    EPSG_4261: {
      towgs84: "31,146,47"
    },
    EPSG_4658: {
      towgs84: "-73,46,-86"
    },
    EPSG_4721: {
      towgs84: "265.025,384.929,-194.046"
    },
    EPSG_4222: {
      towgs84: "-136,-108,-292"
    },
    EPSG_4601: {
      towgs84: "-255,-15,71"
    },
    EPSG_4602: {
      towgs84: "725,685,536"
    },
    EPSG_4603: {
      towgs84: "72,213.7,93"
    },
    EPSG_4605: {
      towgs84: "9,183,236"
    },
    EPSG_4621: {
      towgs84: "137,248,-430"
    },
    EPSG_4657: {
      towgs84: "-28,199,5"
    },
    EPSG_4316: {
      towgs84: "103.25,-100.4,-307.19"
    },
    EPSG_4642: {
      towgs84: "-13,-348,292"
    },
    EPSG_4698: {
      towgs84: "145,-187,103"
    },
    EPSG_4192: {
      towgs84: "-206.1,-174.7,-87.7"
    },
    EPSG_4311: {
      towgs84: "-265,120,-358"
    },
    EPSG_4135: {
      towgs84: "58,-283,-182"
    },
    ESRI_104138: {
      towgs84: "198,-226,-347"
    },
    EPSG_4245: {
      towgs84: "-11,851,5"
    },
    EPSG_4142: {
      towgs84: "-125,53,467"
    },
    EPSG_4213: {
      towgs84: "-106,-87,188"
    },
    EPSG_4253: {
      towgs84: "-133,-77,-51"
    },
    EPSG_4129: {
      towgs84: "-132,-110,-335"
    },
    EPSG_4713: {
      towgs84: "-77,-128,142"
    },
    EPSG_4239: {
      towgs84: "217,823,299"
    },
    EPSG_4146: {
      towgs84: "295,736,257"
    },
    EPSG_4155: {
      towgs84: "-83,37,124"
    },
    EPSG_4165: {
      towgs84: "-173,253,27"
    },
    EPSG_4672: {
      towgs84: "175,-38,113"
    },
    EPSG_4236: {
      towgs84: "-637,-549,-203"
    },
    EPSG_4251: {
      towgs84: "-90,40,88"
    },
    EPSG_4271: {
      towgs84: "-2,374,172"
    },
    EPSG_4175: {
      towgs84: "-88,4,101"
    },
    EPSG_4716: {
      towgs84: "298,-304,-375"
    },
    EPSG_4315: {
      towgs84: "-23,259,-9"
    },
    EPSG_4744: {
      towgs84: "-242.2,-144.9,370.3"
    },
    EPSG_4244: {
      towgs84: "-97,787,86"
    },
    EPSG_4293: {
      towgs84: "616,97,-251"
    },
    EPSG_4714: {
      towgs84: "-127,-769,472"
    },
    EPSG_4736: {
      towgs84: "260,12,-147"
    },
    EPSG_6883: {
      towgs84: "-235,-110,393"
    },
    EPSG_6894: {
      towgs84: "-63,176,185"
    },
    EPSG_4205: {
      towgs84: "-43,-163,45"
    },
    EPSG_4256: {
      towgs84: "41,-220,-134"
    },
    EPSG_4262: {
      towgs84: "639,405,60"
    },
    EPSG_4604: {
      towgs84: "174,359,365"
    },
    EPSG_4169: {
      towgs84: "-115,118,426"
    },
    EPSG_4620: {
      towgs84: "-106,-129,165"
    },
    EPSG_4184: {
      towgs84: "-203,141,53"
    },
    EPSG_4616: {
      towgs84: "-289,-124,60"
    },
    EPSG_9403: {
      towgs84: "-307,-92,127"
    },
    EPSG_4684: {
      towgs84: "-133,-321,50"
    },
    EPSG_4708: {
      towgs84: "-491,-22,435"
    },
    EPSG_4707: {
      towgs84: "114,-116,-333"
    },
    EPSG_4709: {
      towgs84: "145,75,-272"
    },
    EPSG_4712: {
      towgs84: "-205,107,53"
    },
    EPSG_4711: {
      towgs84: "124,-234,-25"
    },
    EPSG_4718: {
      towgs84: "230,-199,-752"
    },
    EPSG_4719: {
      towgs84: "211,147,111"
    },
    EPSG_4724: {
      towgs84: "208,-435,-229"
    },
    EPSG_4725: {
      towgs84: "189,-79,-202"
    },
    EPSG_4735: {
      towgs84: "647,1777,-1124"
    },
    EPSG_4722: {
      towgs84: "-794,119,-298"
    },
    EPSG_4728: {
      towgs84: "-307,-92,127"
    },
    EPSG_4734: {
      towgs84: "-632,438,-609"
    },
    EPSG_4727: {
      towgs84: "912,-58,1227"
    },
    EPSG_4729: {
      towgs84: "185,165,42"
    },
    EPSG_4730: {
      towgs84: "170,42,84"
    },
    EPSG_4733: {
      towgs84: "276,-57,149"
    },
    ESRI_37218: {
      towgs84: "230,-199,-752"
    },
    ESRI_37240: {
      towgs84: "-7,215,225"
    },
    ESRI_37221: {
      towgs84: "252,-209,-751"
    },
    ESRI_4305: {
      towgs84: "-123,-206,219"
    },
    ESRI_104139: {
      towgs84: "-73,-247,227"
    },
    EPSG_4748: {
      towgs84: "51,391,-36"
    },
    EPSG_4219: {
      towgs84: "-384,664,-48"
    },
    EPSG_4255: {
      towgs84: "-333,-222,114"
    },
    EPSG_4257: {
      towgs84: "-587.8,519.75,145.76"
    },
    EPSG_4646: {
      towgs84: "-963,510,-359"
    },
    EPSG_6881: {
      towgs84: "-24,-203,268"
    },
    EPSG_6882: {
      towgs84: "-183,-15,273"
    },
    EPSG_4715: {
      towgs84: "-104,-129,239"
    },
    IGNF_RGF93GDD: {
      towgs84: "0,0,0"
    },
    IGNF_RGM04GDD: {
      towgs84: "0,0,0"
    },
    IGNF_RGSPM06GDD: {
      towgs84: "0,0,0"
    },
    IGNF_RGTAAF07GDD: {
      towgs84: "0,0,0"
    },
    IGNF_RGFG95GDD: {
      towgs84: "0,0,0"
    },
    IGNF_RGNCG: {
      towgs84: "0,0,0"
    },
    IGNF_RGPFGDD: {
      towgs84: "0,0,0"
    },
    IGNF_ETRS89G: {
      towgs84: "0,0,0"
    },
    IGNF_RGR92GDD: {
      towgs84: "0,0,0"
    },
    EPSG_4173: {
      towgs84: "0,0,0"
    },
    EPSG_4180: {
      towgs84: "0,0,0"
    },
    EPSG_4619: {
      towgs84: "0,0,0"
    },
    EPSG_4667: {
      towgs84: "0,0,0"
    },
    EPSG_4075: {
      towgs84: "0,0,0"
    },
    EPSG_6706: {
      towgs84: "0,0,0"
    },
    EPSG_7798: {
      towgs84: "0,0,0"
    },
    EPSG_4661: {
      towgs84: "0,0,0"
    },
    EPSG_4669: {
      towgs84: "0,0,0"
    },
    EPSG_8685: {
      towgs84: "0,0,0"
    },
    EPSG_4151: {
      towgs84: "0,0,0"
    },
    EPSG_9702: {
      towgs84: "0,0,0"
    },
    EPSG_4758: {
      towgs84: "0,0,0"
    },
    EPSG_4761: {
      towgs84: "0,0,0"
    },
    EPSG_4765: {
      towgs84: "0,0,0"
    },
    EPSG_8997: {
      towgs84: "0,0,0"
    },
    EPSG_4023: {
      towgs84: "0,0,0"
    },
    EPSG_4670: {
      towgs84: "0,0,0"
    },
    EPSG_4694: {
      towgs84: "0,0,0"
    },
    EPSG_4148: {
      towgs84: "0,0,0"
    },
    EPSG_4163: {
      towgs84: "0,0,0"
    },
    EPSG_4167: {
      towgs84: "0,0,0"
    },
    EPSG_4189: {
      towgs84: "0,0,0"
    },
    EPSG_4190: {
      towgs84: "0,0,0"
    },
    EPSG_4176: {
      towgs84: "0,0,0"
    },
    EPSG_4659: {
      towgs84: "0,0,0"
    },
    EPSG_3824: {
      towgs84: "0,0,0"
    },
    EPSG_3889: {
      towgs84: "0,0,0"
    },
    EPSG_4046: {
      towgs84: "0,0,0"
    },
    EPSG_4081: {
      towgs84: "0,0,0"
    },
    EPSG_4558: {
      towgs84: "0,0,0"
    },
    EPSG_4483: {
      towgs84: "0,0,0"
    },
    EPSG_5013: {
      towgs84: "0,0,0"
    },
    EPSG_5264: {
      towgs84: "0,0,0"
    },
    EPSG_5324: {
      towgs84: "0,0,0"
    },
    EPSG_5354: {
      towgs84: "0,0,0"
    },
    EPSG_5371: {
      towgs84: "0,0,0"
    },
    EPSG_5373: {
      towgs84: "0,0,0"
    },
    EPSG_5381: {
      towgs84: "0,0,0"
    },
    EPSG_5393: {
      towgs84: "0,0,0"
    },
    EPSG_5489: {
      towgs84: "0,0,0"
    },
    EPSG_5593: {
      towgs84: "0,0,0"
    },
    EPSG_6135: {
      towgs84: "0,0,0"
    },
    EPSG_6365: {
      towgs84: "0,0,0"
    },
    EPSG_5246: {
      towgs84: "0,0,0"
    },
    EPSG_7886: {
      towgs84: "0,0,0"
    },
    EPSG_8431: {
      towgs84: "0,0,0"
    },
    EPSG_8427: {
      towgs84: "0,0,0"
    },
    EPSG_8699: {
      towgs84: "0,0,0"
    },
    EPSG_8818: {
      towgs84: "0,0,0"
    },
    EPSG_4757: {
      towgs84: "0,0,0"
    },
    EPSG_9140: {
      towgs84: "0,0,0"
    },
    EPSG_8086: {
      towgs84: "0,0,0"
    },
    EPSG_4686: {
      towgs84: "0,0,0"
    },
    EPSG_4737: {
      towgs84: "0,0,0"
    },
    EPSG_4702: {
      towgs84: "0,0,0"
    },
    EPSG_4747: {
      towgs84: "0,0,0"
    },
    EPSG_4749: {
      towgs84: "0,0,0"
    },
    EPSG_4674: {
      towgs84: "0,0,0"
    },
    EPSG_4755: {
      towgs84: "0,0,0"
    },
    EPSG_4759: {
      towgs84: "0,0,0"
    },
    EPSG_4762: {
      towgs84: "0,0,0"
    },
    EPSG_4763: {
      towgs84: "0,0,0"
    },
    EPSG_4764: {
      towgs84: "0,0,0"
    },
    EPSG_4166: {
      towgs84: "0,0,0"
    },
    EPSG_4170: {
      towgs84: "0,0,0"
    },
    EPSG_5546: {
      towgs84: "0,0,0"
    },
    EPSG_7844: {
      towgs84: "0,0,0"
    },
    EPSG_4818: {
      towgs84: "589,76,480"
    },
    EPSG_10328: {
      towgs84: "0,0,0"
    },
    EPSG_9782: {
      towgs84: "0,0,0"
    },
    EPSG_9777: {
      towgs84: "0,0,0"
    },
    EPSG_10690: {
      towgs84: "0,0,0"
    },
    EPSG_10639: {
      towgs84: "0,0,0"
    },
    EPSG_10739: {
      towgs84: "0,0,0"
    },
    EPSG_7686: {
      towgs84: "0,0,0"
    },
    EPSG_8900: {
      towgs84: "0,0,0"
    },
    EPSG_5886: {
      towgs84: "0,0,0"
    },
    EPSG_7683: {
      towgs84: "0,0,0"
    },
    EPSG_6668: {
      towgs84: "0,0,0"
    },
    EPSG_20046: {
      towgs84: "0,0,0"
    },
    EPSG_10299: {
      towgs84: "0,0,0"
    },
    EPSG_10310: {
      towgs84: "0,0,0"
    },
    EPSG_10475: {
      towgs84: "0,0,0"
    },
    EPSG_4742: {
      towgs84: "0,0,0"
    },
    EPSG_10671: {
      towgs84: "0,0,0"
    },
    EPSG_10762: {
      towgs84: "0,0,0"
    },
    EPSG_10725: {
      towgs84: "0,0,0"
    },
    EPSG_10791: {
      towgs84: "0,0,0"
    },
    EPSG_10800: {
      towgs84: "0,0,0"
    },
    EPSG_10305: {
      towgs84: "0,0,0"
    },
    EPSG_10941: {
      towgs84: "0,0,0"
    },
    EPSG_10968: {
      towgs84: "0,0,0"
    },
    EPSG_10875: {
      towgs84: "0,0,0"
    },
    EPSG_6318: {
      towgs84: "0,0,0"
    },
    EPSG_10910: {
      towgs84: "0,0,0"
    }
  };
  for (key in datums) {
    datum = datums[key];
    if (!datum.datumName) {
      continue;
    }
    datums[datum.datumName] = datum;
  }
  var datum;
  var key;
  var Datum_default = datums;

  // node_modules/proj4/lib/datum.js
  function datum2(datumCode, datum_params, a, b, es, ep2, nadgrids) {
    var out = {};
    out.datum_type = PJD_NODATUM;
    if (datum_params) {
      out.datum_type = PJD_WGS84;
      out.datum_params = datum_params.map(parseFloat);
      if (out.datum_params[0] !== 0 || out.datum_params[1] !== 0 || out.datum_params[2] !== 0) {
        out.datum_type = PJD_3PARAM;
      }
      if (out.datum_params.length > 3) {
        if (out.datum_params[3] !== 0 || out.datum_params[4] !== 0 || out.datum_params[5] !== 0 || out.datum_params[6] !== 0) {
          out.datum_type = PJD_7PARAM;
          out.datum_params[3] *= SEC_TO_RAD;
          out.datum_params[4] *= SEC_TO_RAD;
          out.datum_params[5] *= SEC_TO_RAD;
          out.datum_params[6] = out.datum_params[6] / 1e6 + 1;
        }
      }
    }
    if (nadgrids) {
      out.datum_type = PJD_GRIDSHIFT;
      out.grids = nadgrids;
    }
    out.a = a;
    out.b = b;
    out.es = es;
    out.ep2 = ep2;
    return out;
  }
  var datum_default = datum2;

  // node_modules/proj4/lib/nadgrid.js
  var loadedNadgrids = {};
  function nadgrid(key2, data, options) {
    if (data instanceof ArrayBuffer) {
      return readNTV2Grid(key2, data, options);
    }
    return { ready: readGeotiffGrid(key2, data) };
  }
  function readNTV2Grid(key2, data, options) {
    var includeErrorFields = true;
    if (options !== void 0 && options.includeErrorFields === false) {
      includeErrorFields = false;
    }
    var view = new DataView(data);
    var isLittleEndian = detectLittleEndian(view);
    var header = readHeader(view, isLittleEndian);
    var subgrids = readSubgrids(view, header, isLittleEndian, includeErrorFields);
    var nadgrid2 = { header, subgrids };
    loadedNadgrids[key2] = nadgrid2;
    return nadgrid2;
  }
  async function readGeotiffGrid(key2, tiff) {
    var subgrids = [];
    var subGridCount = await tiff.getImageCount();
    for (var subgridIndex = subGridCount - 1; subgridIndex >= 0; subgridIndex--) {
      var image = await tiff.getImage(subgridIndex);
      var rasters = await image.readRasters();
      var data = rasters;
      var lim = [image.getWidth(), image.getHeight()];
      var imageBBoxRadians = image.getBoundingBox().map(degreesToRadians);
      var modelPixelScale = typeof image.fileDirectory.getValue === "function" ? image.fileDirectory.getValue("ModelPixelScale") : (
        /** @type {any} */
        image.fileDirectory.ModelPixelScale
      );
      var del = [modelPixelScale[0], modelPixelScale[1]].map(degreesToRadians);
      var maxX = imageBBoxRadians[0] + (lim[0] - 1) * del[0];
      var minY = imageBBoxRadians[3] - (lim[1] - 1) * del[1];
      var latitudeOffsetBand = data[0];
      var longitudeOffsetBand = data[1];
      var nodes = [];
      for (let i = lim[1] - 1; i >= 0; i--) {
        for (let j = lim[0] - 1; j >= 0; j--) {
          var index = i * lim[0] + j;
          nodes.push([-secondsToRadians(longitudeOffsetBand[index]), secondsToRadians(latitudeOffsetBand[index])]);
        }
      }
      subgrids.push({
        del,
        lim,
        ll: [-maxX, minY],
        cvs: nodes
      });
    }
    var tifGrid = {
      header: {
        nSubgrids: subGridCount
      },
      subgrids
    };
    loadedNadgrids[key2] = tifGrid;
    return tifGrid;
  }
  function getNadgrids(nadgrids) {
    if (nadgrids === void 0) {
      return null;
    }
    var grids = nadgrids.split(",");
    return grids.map(parseNadgridString);
  }
  function parseNadgridString(value) {
    if (value.length === 0) {
      return null;
    }
    var optional = value[0] === "@";
    if (optional) {
      value = value.slice(1);
    }
    if (value === "null") {
      return { name: "null", mandatory: !optional, grid: null, isNull: true };
    }
    return {
      name: value,
      mandatory: !optional,
      grid: loadedNadgrids[value] || null,
      isNull: false
    };
  }
  function degreesToRadians(degrees) {
    return degrees * Math.PI / 180;
  }
  function secondsToRadians(seconds) {
    return seconds / 3600 * Math.PI / 180;
  }
  function detectLittleEndian(view) {
    var nFields = view.getInt32(8, false);
    if (nFields === 11) {
      return false;
    }
    nFields = view.getInt32(8, true);
    if (nFields !== 11) {
      console.warn("Failed to detect nadgrid endian-ness, defaulting to little-endian");
    }
    return true;
  }
  function readHeader(view, isLittleEndian) {
    return {
      nFields: view.getInt32(8, isLittleEndian),
      nSubgridFields: view.getInt32(24, isLittleEndian),
      nSubgrids: view.getInt32(40, isLittleEndian),
      shiftType: decodeString(view, 56, 56 + 8).trim(),
      fromSemiMajorAxis: view.getFloat64(120, isLittleEndian),
      fromSemiMinorAxis: view.getFloat64(136, isLittleEndian),
      toSemiMajorAxis: view.getFloat64(152, isLittleEndian),
      toSemiMinorAxis: view.getFloat64(168, isLittleEndian)
    };
  }
  function decodeString(view, start2, end) {
    return String.fromCharCode.apply(null, new Uint8Array(view.buffer.slice(start2, end)));
  }
  function readSubgrids(view, header, isLittleEndian, includeErrorFields) {
    var gridOffset = 176;
    var grids = [];
    for (var i = 0; i < header.nSubgrids; i++) {
      var subHeader = readGridHeader(view, gridOffset, isLittleEndian);
      var nodes = readGridNodes(view, gridOffset, subHeader, isLittleEndian, includeErrorFields);
      var lngColumnCount = Math.round(
        1 + (subHeader.upperLongitude - subHeader.lowerLongitude) / subHeader.longitudeInterval
      );
      var latColumnCount = Math.round(
        1 + (subHeader.upperLatitude - subHeader.lowerLatitude) / subHeader.latitudeInterval
      );
      grids.push({
        ll: [secondsToRadians(subHeader.lowerLongitude), secondsToRadians(subHeader.lowerLatitude)],
        del: [secondsToRadians(subHeader.longitudeInterval), secondsToRadians(subHeader.latitudeInterval)],
        lim: [lngColumnCount, latColumnCount],
        count: subHeader.gridNodeCount,
        cvs: mapNodes(nodes)
      });
      var rowSize = 16;
      if (includeErrorFields === false) {
        rowSize = 8;
      }
      gridOffset += 176 + subHeader.gridNodeCount * rowSize;
    }
    return grids;
  }
  function mapNodes(nodes) {
    return nodes.map(function(r) {
      return [secondsToRadians(r.longitudeShift), secondsToRadians(r.latitudeShift)];
    });
  }
  function readGridHeader(view, offset, isLittleEndian) {
    return {
      name: decodeString(view, offset + 8, offset + 16).trim(),
      parent: decodeString(view, offset + 24, offset + 24 + 8).trim(),
      lowerLatitude: view.getFloat64(offset + 72, isLittleEndian),
      upperLatitude: view.getFloat64(offset + 88, isLittleEndian),
      lowerLongitude: view.getFloat64(offset + 104, isLittleEndian),
      upperLongitude: view.getFloat64(offset + 120, isLittleEndian),
      latitudeInterval: view.getFloat64(offset + 136, isLittleEndian),
      longitudeInterval: view.getFloat64(offset + 152, isLittleEndian),
      gridNodeCount: view.getInt32(offset + 168, isLittleEndian)
    };
  }
  function readGridNodes(view, offset, gridHeader, isLittleEndian, includeErrorFields) {
    var nodesOffset = offset + 176;
    var gridRecordLength = 16;
    if (includeErrorFields === false) {
      gridRecordLength = 8;
    }
    var gridShiftRecords = [];
    for (var i = 0; i < gridHeader.gridNodeCount; i++) {
      var record = {
        latitudeShift: view.getFloat32(nodesOffset + i * gridRecordLength, isLittleEndian),
        longitudeShift: view.getFloat32(nodesOffset + i * gridRecordLength + 4, isLittleEndian)
      };
      if (includeErrorFields !== false) {
        record.latitudeAccuracy = view.getFloat32(nodesOffset + i * gridRecordLength + 8, isLittleEndian);
        record.longitudeAccuracy = view.getFloat32(nodesOffset + i * gridRecordLength + 12, isLittleEndian);
      }
      gridShiftRecords.push(record);
    }
    return gridShiftRecords;
  }

  // node_modules/proj4/lib/Proj.js
  function Projection(srsCode, callback) {
    if (!(this instanceof Projection)) {
      return new Projection(srsCode);
    }
    this.forward = null;
    this.inverse = null;
    this.init = null;
    this.name;
    this.axis;
    this.names = null;
    this.title;
    callback = callback || function(error) {
      if (error) {
        throw error;
      }
    };
    var json = parseCode_default(srsCode);
    if (typeof json !== "object") {
      callback("Could not parse to valid json: " + srsCode);
      return;
    }
    var ourProj = Projection.projections.get(json.projName);
    if (!ourProj) {
      callback("Could not get projection name from: " + srsCode);
      return;
    }
    if (json.datumCode && json.datumCode !== "none") {
      var datumDef = match(Datum_default, json.datumCode);
      if (datumDef) {
        json.datum_params = json.datum_params || (datumDef.towgs84 ? datumDef.towgs84.split(",") : null);
        json.ellps = datumDef.ellipse;
        json.datumName = datumDef.datumName ? datumDef.datumName : json.datumCode;
      }
    }
    json.axis = json.axis || "enu";
    json.ellps = json.ellps || "wgs84";
    json.lat1 = json.lat1 || json.lat0;
    var sphere_ = sphere(json.a, json.b, json.rf, json.ellps, json.sphere);
    var ecc = eccentricity(sphere_.a, sphere_.b, sphere_.rf, json.R_A);
    var nadgrids = getNadgrids(json.nadgrids);
    var datumObj = json.datum || datum_default(
      json.datumCode,
      json.datum_params,
      sphere_.a,
      sphere_.b,
      ecc.es,
      ecc.ep2,
      nadgrids
    );
    extend_default(this, json);
    extend_default(this, ourProj);
    this.a = sphere_.a;
    this.b = sphere_.b;
    this.rf = sphere_.rf;
    this.sphere = sphere_.sphere;
    this.es = ecc.es;
    this.e = ecc.e;
    this.ep2 = ecc.ep2;
    this.datum = datumObj;
    if ("init" in this && typeof this.init === "function") {
      this.init();
    }
    if (!this.k0) {
      this.k0 = 1;
    }
    callback(null, this);
  }
  Projection.projections = projections_default;
  Projection.projections.start();
  var Proj_default = Projection;

  // node_modules/proj4/lib/datumUtils.js
  function compareDatums(source, dest) {
    if (source.datum_type !== dest.datum_type) {
      return false;
    } else if (source.a !== dest.a || Math.abs(source.es - dest.es) > 5e-11) {
      return false;
    } else if (source.datum_type === PJD_3PARAM) {
      return source.datum_params[0] === dest.datum_params[0] && source.datum_params[1] === dest.datum_params[1] && source.datum_params[2] === dest.datum_params[2];
    } else if (source.datum_type === PJD_7PARAM) {
      return source.datum_params[0] === dest.datum_params[0] && source.datum_params[1] === dest.datum_params[1] && source.datum_params[2] === dest.datum_params[2] && source.datum_params[3] === dest.datum_params[3] && source.datum_params[4] === dest.datum_params[4] && source.datum_params[5] === dest.datum_params[5] && source.datum_params[6] === dest.datum_params[6];
    } else {
      return true;
    }
  }
  function geodeticToGeocentric(p, es, a) {
    var Longitude = p.x;
    var Latitude = p.y;
    var Height = p.z ? p.z : 0;
    var Rn;
    var Sin_Lat;
    var Sin2_Lat;
    var Cos_Lat;
    if (Latitude < -HALF_PI && Latitude > -1.001 * HALF_PI) {
      Latitude = -HALF_PI;
    } else if (Latitude > HALF_PI && Latitude < 1.001 * HALF_PI) {
      Latitude = HALF_PI;
    } else if (Latitude < -HALF_PI) {
      return { x: -Infinity, y: -Infinity, z: p.z };
    } else if (Latitude > HALF_PI) {
      return { x: Infinity, y: Infinity, z: p.z };
    }
    if (Longitude > Math.PI) {
      Longitude -= 2 * Math.PI;
    }
    Sin_Lat = Math.sin(Latitude);
    Cos_Lat = Math.cos(Latitude);
    Sin2_Lat = Sin_Lat * Sin_Lat;
    Rn = a / Math.sqrt(1 - es * Sin2_Lat);
    return {
      x: (Rn + Height) * Cos_Lat * Math.cos(Longitude),
      y: (Rn + Height) * Cos_Lat * Math.sin(Longitude),
      z: (Rn * (1 - es) + Height) * Sin_Lat
    };
  }
  function geocentricToGeodetic(p, es, a, b) {
    var genau = 1e-12;
    var genau2 = genau * genau;
    var maxiter = 30;
    var P;
    var RR;
    var CT;
    var ST;
    var RX;
    var RK;
    var RN;
    var CPHI0;
    var SPHI0;
    var CPHI;
    var SPHI;
    var SDPHI;
    var iter;
    var X = p.x;
    var Y = p.y;
    var Z2 = p.z ? p.z : 0;
    var Longitude;
    var Latitude;
    var Height;
    P = Math.sqrt(X * X + Y * Y);
    RR = Math.sqrt(X * X + Y * Y + Z2 * Z2);
    if (P / a < genau) {
      Longitude = 0;
      if (RR / a < genau) {
        Latitude = HALF_PI;
        Height = -b;
        return {
          x: p.x,
          y: p.y,
          z: p.z
        };
      }
    } else {
      Longitude = Math.atan2(Y, X);
    }
    CT = Z2 / RR;
    ST = P / RR;
    RX = 1 / Math.sqrt(1 - es * (2 - es) * ST * ST);
    CPHI0 = ST * (1 - es) * RX;
    SPHI0 = CT * RX;
    iter = 0;
    do {
      iter++;
      RN = a / Math.sqrt(1 - es * SPHI0 * SPHI0);
      Height = P * CPHI0 + Z2 * SPHI0 - RN * (1 - es * SPHI0 * SPHI0);
      RK = es * RN / (RN + Height);
      RX = 1 / Math.sqrt(1 - RK * (2 - RK) * ST * ST);
      CPHI = ST * (1 - RK) * RX;
      SPHI = CT * RX;
      SDPHI = SPHI * CPHI0 - CPHI * SPHI0;
      CPHI0 = CPHI;
      SPHI0 = SPHI;
    } while (SDPHI * SDPHI > genau2 && iter < maxiter);
    Latitude = Math.atan(SPHI / Math.abs(CPHI));
    return {
      x: Longitude,
      y: Latitude,
      z: Height
    };
  }
  function geocentricToWgs84(p, datum_type, datum_params) {
    if (datum_type === PJD_3PARAM) {
      return {
        x: p.x + datum_params[0],
        y: p.y + datum_params[1],
        z: p.z + datum_params[2]
      };
    } else if (datum_type === PJD_7PARAM) {
      var Dx_BF = datum_params[0];
      var Dy_BF = datum_params[1];
      var Dz_BF = datum_params[2];
      var Rx_BF = datum_params[3];
      var Ry_BF = datum_params[4];
      var Rz_BF = datum_params[5];
      var M_BF = datum_params[6];
      return {
        x: M_BF * (p.x - Rz_BF * p.y + Ry_BF * p.z) + Dx_BF,
        y: M_BF * (Rz_BF * p.x + p.y - Rx_BF * p.z) + Dy_BF,
        z: M_BF * (-Ry_BF * p.x + Rx_BF * p.y + p.z) + Dz_BF
      };
    }
  }
  function geocentricFromWgs84(p, datum_type, datum_params) {
    if (datum_type === PJD_3PARAM) {
      return {
        x: p.x - datum_params[0],
        y: p.y - datum_params[1],
        z: p.z - datum_params[2]
      };
    } else if (datum_type === PJD_7PARAM) {
      var Dx_BF = datum_params[0];
      var Dy_BF = datum_params[1];
      var Dz_BF = datum_params[2];
      var Rx_BF = datum_params[3];
      var Ry_BF = datum_params[4];
      var Rz_BF = datum_params[5];
      var M_BF = datum_params[6];
      var x_tmp = (p.x - Dx_BF) / M_BF;
      var y_tmp = (p.y - Dy_BF) / M_BF;
      var z_tmp = (p.z - Dz_BF) / M_BF;
      return {
        x: x_tmp + Rz_BF * y_tmp - Ry_BF * z_tmp,
        y: -Rz_BF * x_tmp + y_tmp + Rx_BF * z_tmp,
        z: Ry_BF * x_tmp - Rx_BF * y_tmp + z_tmp
      };
    }
  }

  // node_modules/proj4/lib/datum_transform.js
  function checkParams(type) {
    return type === PJD_3PARAM || type === PJD_7PARAM;
  }
  function datum_transform_default(source, dest, point) {
    if (compareDatums(source, dest)) {
      return point;
    }
    if (source.datum_type === PJD_NODATUM || dest.datum_type === PJD_NODATUM) {
      return point;
    }
    var source_a = source.a;
    var source_es = source.es;
    if (source.datum_type === PJD_GRIDSHIFT) {
      var gridShiftCode = applyGridShift(source, false, point);
      if (gridShiftCode !== 0) {
        return void 0;
      }
      source_a = SRS_WGS84_SEMIMAJOR;
      source_es = SRS_WGS84_ESQUARED;
    }
    var dest_a = dest.a;
    var dest_b = dest.b;
    var dest_es = dest.es;
    if (dest.datum_type === PJD_GRIDSHIFT) {
      dest_a = SRS_WGS84_SEMIMAJOR;
      dest_b = SRS_WGS84_SEMIMINOR;
      dest_es = SRS_WGS84_ESQUARED;
    }
    if (source_es === dest_es && source_a === dest_a && !checkParams(source.datum_type) && !checkParams(dest.datum_type)) {
      return point;
    }
    point = geodeticToGeocentric(point, source_es, source_a);
    if (checkParams(source.datum_type)) {
      point = geocentricToWgs84(point, source.datum_type, source.datum_params);
    }
    if (checkParams(dest.datum_type)) {
      point = geocentricFromWgs84(point, dest.datum_type, dest.datum_params);
    }
    point = geocentricToGeodetic(point, dest_es, dest_a, dest_b);
    if (dest.datum_type === PJD_GRIDSHIFT) {
      var destGridShiftResult = applyGridShift(dest, true, point);
      if (destGridShiftResult !== 0) {
        return void 0;
      }
    }
    return point;
  }
  function applyGridShift(source, inverse35, point) {
    if (source.grids === null || source.grids.length === 0) {
      console.log("Grid shift grids not found");
      return -1;
    }
    var input = { x: -point.x, y: point.y };
    var output = { x: Number.NaN, y: Number.NaN };
    var attemptedGrids = [];
    outer:
      for (var i = 0; i < source.grids.length; i++) {
        var grid = source.grids[i];
        attemptedGrids.push(grid.name);
        if (grid.isNull) {
          output = input;
          break;
        }
        if (grid.grid === null) {
          if (grid.mandatory) {
            console.log("Unable to find mandatory grid '" + grid.name + "'");
            return -1;
          }
          continue;
        }
        var subgrids = grid.grid.subgrids;
        for (var j = 0, jj = subgrids.length; j < jj; j++) {
          var subgrid = subgrids[j];
          var epsilon = (Math.abs(subgrid.del[1]) + Math.abs(subgrid.del[0])) / 1e4;
          var minX = subgrid.ll[0] - epsilon;
          var minY = subgrid.ll[1] - epsilon;
          var maxX = subgrid.ll[0] + (subgrid.lim[0] - 1) * subgrid.del[0] + epsilon;
          var maxY = subgrid.ll[1] + (subgrid.lim[1] - 1) * subgrid.del[1] + epsilon;
          if (minY > input.y || minX > input.x || maxY < input.y || maxX < input.x) {
            continue;
          }
          output = applySubgridShift(input, inverse35, subgrid);
          if (!isNaN(output.x)) {
            break outer;
          }
        }
      }
    if (isNaN(output.x)) {
      console.log("Failed to find a grid shift table for location '" + -input.x * R2D + " " + input.y * R2D + " tried: '" + attemptedGrids + "'");
      return -1;
    }
    point.x = -output.x;
    point.y = output.y;
    return 0;
  }
  function applySubgridShift(pin, inverse35, ct) {
    var val = { x: Number.NaN, y: Number.NaN };
    if (isNaN(pin.x)) {
      return val;
    }
    var tb = { x: pin.x, y: pin.y };
    tb.x -= ct.ll[0];
    tb.y -= ct.ll[1];
    tb.x = adjust_lon_default(tb.x - Math.PI) + Math.PI;
    var t = nadInterpolate(tb, ct);
    if (inverse35) {
      if (isNaN(t.x)) {
        return val;
      }
      t.x = tb.x - t.x;
      t.y = tb.y - t.y;
      var i = 9, tol = 1e-12;
      var dif, del;
      do {
        del = nadInterpolate(t, ct);
        if (isNaN(del.x)) {
          console.log("Inverse grid shift iteration failed, presumably at grid edge.  Using first approximation.");
          break;
        }
        dif = { x: tb.x - (del.x + t.x), y: tb.y - (del.y + t.y) };
        t.x += dif.x;
        t.y += dif.y;
      } while (i-- && Math.abs(dif.x) > tol && Math.abs(dif.y) > tol);
      if (i < 0) {
        console.log("Inverse grid shift iterator failed to converge.");
        return val;
      }
      val.x = adjust_lon_default(t.x + ct.ll[0]);
      val.y = t.y + ct.ll[1];
    } else {
      if (!isNaN(t.x)) {
        val.x = pin.x + t.x;
        val.y = pin.y + t.y;
      }
    }
    return val;
  }
  function nadInterpolate(pin, ct) {
    var t = { x: pin.x / ct.del[0], y: pin.y / ct.del[1] };
    var indx = { x: Math.floor(t.x), y: Math.floor(t.y) };
    var frct = { x: t.x - 1 * indx.x, y: t.y - 1 * indx.y };
    var val = { x: Number.NaN, y: Number.NaN };
    var inx;
    if (indx.x < 0 || indx.x >= ct.lim[0]) {
      return val;
    }
    if (indx.y < 0 || indx.y >= ct.lim[1]) {
      return val;
    }
    inx = indx.y * ct.lim[0] + indx.x;
    var f00 = { x: ct.cvs[inx][0], y: ct.cvs[inx][1] };
    inx++;
    var f10 = { x: ct.cvs[inx][0], y: ct.cvs[inx][1] };
    inx += ct.lim[0];
    var f11 = { x: ct.cvs[inx][0], y: ct.cvs[inx][1] };
    inx--;
    var f01 = { x: ct.cvs[inx][0], y: ct.cvs[inx][1] };
    var m11 = frct.x * frct.y, m10 = frct.x * (1 - frct.y), m00 = (1 - frct.x) * (1 - frct.y), m01 = (1 - frct.x) * frct.y;
    val.x = m00 * f00.x + m10 * f10.x + m01 * f01.x + m11 * f11.x;
    val.y = m00 * f00.y + m10 * f10.y + m01 * f01.y + m11 * f11.y;
    return val;
  }

  // node_modules/proj4/lib/adjust_axis.js
  var order = ["x", "y", "z"];
  function adjustAxisToEnu(crs, point) {
    const out = {};
    for (let i = 0, ii = crs.axis.length; i < ii; i++) {
      if (i === 2 && point.z === void 0) {
        continue;
      }
      let v = point[order[i]];
      switch (crs.axis[i]) {
        case "e":
          out.x = v;
          break;
        case "w":
          out.x = -v;
          break;
        case "n":
          out.y = v;
          break;
        case "s":
          out.y = -v;
          break;
        case "u":
          out.z = v;
          break;
        case "d":
          out.z = -v;
          break;
        default:
          return null;
      }
    }
    return out;
  }
  function adjustAxisFromEnu(crs, point) {
    const out = (
      /** @type {import("./core").InterfaceCoordinates} */
      {}
    );
    for (let i = 0, ii = crs.axis.length; i < ii; i++) {
      if (i === 2 && point.z === void 0) {
        continue;
      }
      switch (crs.axis[i]) {
        case "e":
          out[order[i]] = point.x;
          break;
        case "w":
          out[order[i]] = -point.x;
          break;
        case "n":
          out[order[i]] = point.y;
          break;
        case "s":
          out[order[i]] = -point.y;
          break;
        case "u":
          out[order[i]] = point.z;
          break;
        case "d":
          out[order[i]] = -point.z;
          break;
        default:
          return null;
      }
    }
    return out;
  }

  // node_modules/proj4/lib/common/toPoint.js
  function toPoint_default(array) {
    var out = {
      x: array[0],
      y: array[1]
    };
    if (array.length > 2) {
      out.z = array[2];
    }
    if (array.length > 3) {
      out.m = array[3];
    }
    return out;
  }

  // node_modules/proj4/lib/checkSanity.js
  function checkSanity_default(point) {
    checkCoord(point.x);
    checkCoord(point.y);
  }
  function checkCoord(num) {
    if (typeof Number.isFinite === "function") {
      if (Number.isFinite(num)) {
        return;
      }
      throw new TypeError("coordinates must be finite numbers");
    }
    if (typeof num !== "number" || num !== num || !isFinite(num)) {
      throw new TypeError("coordinates must be finite numbers");
    }
  }

  // node_modules/proj4/lib/transform.js
  function checkNotWGS(source, dest) {
    return (source.datum.datum_type === PJD_3PARAM || source.datum.datum_type === PJD_7PARAM || source.datum.datum_type === PJD_GRIDSHIFT) && dest.datumCode !== "WGS84" || (dest.datum.datum_type === PJD_3PARAM || dest.datum.datum_type === PJD_7PARAM || dest.datum.datum_type === PJD_GRIDSHIFT) && source.datumCode !== "WGS84";
  }
  function transformInternal(source, dest, point, enforceAxis) {
    var wgs842;
    var hasZ = point.z !== void 0;
    checkSanity_default(point);
    if (source.datum && dest.datum && checkNotWGS(source, dest)) {
      wgs842 = new Proj_default("WGS84");
      point = transformInternal(source, wgs842, point, enforceAxis);
      source = wgs842;
    }
    if (enforceAxis && source.axis !== "enu") {
      point = adjustAxisToEnu(source, point);
    }
    if (source.projName === "longlat") {
      point = {
        x: point.x * D2R,
        y: point.y * D2R,
        z: point.z || 0
      };
    } else {
      if (source.to_meter) {
        point = {
          x: point.x * source.to_meter,
          y: point.y * source.to_meter,
          z: point.z || 0
        };
      }
      point = source.inverse(point);
      if (!point) {
        return;
      }
    }
    if (source.from_greenwich) {
      point.x += source.from_greenwich;
    }
    point = datum_transform_default(source.datum, dest.datum, point);
    if (!point) {
      return;
    }
    point = /** @type {import('./core').InterfaceCoordinates} */
    point;
    if (dest.from_greenwich) {
      point = {
        x: point.x - dest.from_greenwich,
        y: point.y,
        z: point.z || 0
      };
    }
    if (dest.projName === "longlat") {
      if (dest.long_wrap !== void 0) {
        point.x = dest.long_wrap + adjust_lon_default(point.x - dest.long_wrap);
      }
      point = {
        x: point.x * R2D,
        y: point.y * R2D,
        z: point.z || 0
      };
    } else {
      point = dest.forward(point);
      if (dest.to_meter) {
        point = {
          x: point.x / dest.to_meter,
          y: point.y / dest.to_meter,
          z: point.z || 0
        };
      }
    }
    if (enforceAxis && dest.axis !== "enu") {
      return adjustAxisFromEnu(dest, point);
    }
    if (point && !hasZ && dest.projName !== "geocent") {
      delete point.z;
    }
    return point;
  }
  function transform(source, dest, point, enforceAxis) {
    var pt;
    if (Array.isArray(point)) {
      pt = toPoint_default(point);
    } else {
      pt = { x: point.x, y: point.y, z: point.z, m: point.m };
    }
    return transformInternal(source, dest, pt, enforceAxis);
  }

  // node_modules/proj4/lib/core.js
  var wgs84 = Proj_default("WGS84");
  function transformer(from, to, coords, enforceAxis) {
    var out, geocent, keys;
    if (Array.isArray(coords)) {
      out = transformInternal(from, to, toPoint_default(coords), enforceAxis) || { x: NaN, y: NaN };
      if (coords.length > 2) {
        geocent = typeof from.name !== "undefined" && from.name === "geocent" || typeof to.name !== "undefined" && to.name === "geocent";
        if (geocent) {
          if (typeof out.z === "number") {
            return (
              /** @type {T} */
              [out.x, out.y, out.z].concat(coords.slice(3))
            );
          }
          return (
            /** @type {T} */
            [out.x, out.y, coords[2]].concat(coords.slice(3))
          );
        }
        if (enforceAxis && typeof out.z === "number") {
          return (
            /** @type {T} */
            [out.x, out.y, out.z].concat(coords.slice(3))
          );
        }
        return (
          /** @type {T} */
          [out.x, out.y].concat(coords.slice(2))
        );
      }
      return (
        /** @type {T} */
        [out.x, out.y]
      );
    } else {
      out = transformInternal(from, to, { x: coords.x, y: coords.y, z: coords.z, m: coords.m }, enforceAxis) || { x: NaN, y: NaN };
      keys = Object.keys(coords);
      if (keys.length === 2) {
        return (
          /** @type {T} */
          out
        );
      }
      geocent = typeof from.name !== "undefined" && from.name === "geocent" || typeof to.name !== "undefined" && to.name === "geocent";
      keys.forEach(function(key2) {
        if (key2 === "x" || key2 === "y") {
          return;
        }
        if (key2 === "z" && (geocent || enforceAxis)) {
          return;
        }
        out[key2] = coords[key2];
      });
      return (
        /** @type {T} */
        out
      );
    }
  }
  function checkProj(item) {
    if (item instanceof Proj_default) {
      return item;
    }
    if (typeof item === "object" && "oProj" in item) {
      return item.oProj;
    }
    return Proj_default(
      /** @type {string | PROJJSONDefinition} */
      item
    );
  }
  function proj4(fromProjOrToProj, toProjOrCoord, coord) {
    var fromProj;
    var toProj;
    var single = false;
    var obj;
    if (typeof toProjOrCoord === "undefined") {
      toProj = checkProj(fromProjOrToProj);
      fromProj = wgs84;
      single = true;
    } else if (typeof /** @type {?} */
    toProjOrCoord.x !== "undefined" || Array.isArray(toProjOrCoord)) {
      coord = /** @type {T} */
      /** @type {?} */
      toProjOrCoord;
      toProj = checkProj(fromProjOrToProj);
      fromProj = wgs84;
      single = true;
    }
    if (!fromProj) {
      fromProj = checkProj(fromProjOrToProj);
    }
    if (!toProj) {
      toProj = checkProj(
        /** @type {string | PROJJSONDefinition | proj } */
        toProjOrCoord
      );
    }
    if (coord) {
      return transformer(fromProj, toProj, coord);
    } else {
      obj = {
        /**
         * @template {TemplateCoordinates} T
         * @param {T} coords
         * @param {boolean=} enforceAxis
         * @returns {T}
         */
        forward: function(coords, enforceAxis) {
          return transformer(fromProj, toProj, coords, enforceAxis);
        },
        /**
         * @template {TemplateCoordinates} T
         * @param {T} coords
         * @param {boolean=} enforceAxis
         * @returns {T}
         */
        inverse: function(coords, enforceAxis) {
          return transformer(toProj, fromProj, coords, enforceAxis);
        }
      };
      if (single) {
        obj.oProj = toProj;
      }
      return obj;
    }
  }
  var core_default = proj4;

  // node_modules/mgrs/mgrs.js
  var NUM_100K_SETS = 6;
  var SET_ORIGIN_COLUMN_LETTERS = "AJSAJS";
  var SET_ORIGIN_ROW_LETTERS = "AFAFAF";
  var A = 65;
  var I = 73;
  var O = 79;
  var V = 86;
  var Z = 90;
  var mgrs_default = {
    forward: forward2,
    inverse: inverse2,
    toPoint
  };
  function forward2(ll, accuracy) {
    accuracy = accuracy || 5;
    return encode(LLtoUTM({
      lat: ll[1],
      lon: ll[0]
    }), accuracy);
  }
  function inverse2(mgrs) {
    var bbox = UTMtoLL(decode(mgrs.toUpperCase()));
    if (bbox.lat && bbox.lon) {
      return [bbox.lon, bbox.lat, bbox.lon, bbox.lat];
    }
    return [bbox.left, bbox.bottom, bbox.right, bbox.top];
  }
  function toPoint(mgrs) {
    var bbox = UTMtoLL(decode(mgrs.toUpperCase()));
    if (bbox.lat && bbox.lon) {
      return [bbox.lon, bbox.lat];
    }
    return [(bbox.left + bbox.right) / 2, (bbox.top + bbox.bottom) / 2];
  }
  function degToRad(deg) {
    return deg * (Math.PI / 180);
  }
  function radToDeg(rad) {
    return 180 * (rad / Math.PI);
  }
  function LLtoUTM(ll) {
    var Lat = ll.lat;
    var Long = ll.lon;
    var a = 6378137;
    var eccSquared = 669438e-8;
    var k0 = 0.9996;
    var LongOrigin;
    var eccPrimeSquared;
    var N, T, C, A5, M2;
    var LatRad = degToRad(Lat);
    var LongRad = degToRad(Long);
    var LongOriginRad;
    var ZoneNumber;
    ZoneNumber = Math.floor((Long + 180) / 6) + 1;
    if (Long === 180) {
      ZoneNumber = 60;
    }
    if (Lat >= 56 && Lat < 64 && Long >= 3 && Long < 12) {
      ZoneNumber = 32;
    }
    if (Lat >= 72 && Lat < 84) {
      if (Long >= 0 && Long < 9) {
        ZoneNumber = 31;
      } else if (Long >= 9 && Long < 21) {
        ZoneNumber = 33;
      } else if (Long >= 21 && Long < 33) {
        ZoneNumber = 35;
      } else if (Long >= 33 && Long < 42) {
        ZoneNumber = 37;
      }
    }
    LongOrigin = (ZoneNumber - 1) * 6 - 180 + 3;
    LongOriginRad = degToRad(LongOrigin);
    eccPrimeSquared = eccSquared / (1 - eccSquared);
    N = a / Math.sqrt(1 - eccSquared * Math.sin(LatRad) * Math.sin(LatRad));
    T = Math.tan(LatRad) * Math.tan(LatRad);
    C = eccPrimeSquared * Math.cos(LatRad) * Math.cos(LatRad);
    A5 = Math.cos(LatRad) * (LongRad - LongOriginRad);
    M2 = a * ((1 - eccSquared / 4 - 3 * eccSquared * eccSquared / 64 - 5 * eccSquared * eccSquared * eccSquared / 256) * LatRad - (3 * eccSquared / 8 + 3 * eccSquared * eccSquared / 32 + 45 * eccSquared * eccSquared * eccSquared / 1024) * Math.sin(2 * LatRad) + (15 * eccSquared * eccSquared / 256 + 45 * eccSquared * eccSquared * eccSquared / 1024) * Math.sin(4 * LatRad) - 35 * eccSquared * eccSquared * eccSquared / 3072 * Math.sin(6 * LatRad));
    var UTMEasting = k0 * N * (A5 + (1 - T + C) * A5 * A5 * A5 / 6 + (5 - 18 * T + T * T + 72 * C - 58 * eccPrimeSquared) * A5 * A5 * A5 * A5 * A5 / 120) + 5e5;
    var UTMNorthing = k0 * (M2 + N * Math.tan(LatRad) * (A5 * A5 / 2 + (5 - T + 9 * C + 4 * C * C) * A5 * A5 * A5 * A5 / 24 + (61 - 58 * T + T * T + 600 * C - 330 * eccPrimeSquared) * A5 * A5 * A5 * A5 * A5 * A5 / 720));
    if (Lat < 0) {
      UTMNorthing += 1e7;
    }
    return {
      northing: Math.round(UTMNorthing),
      easting: Math.round(UTMEasting),
      zoneNumber: ZoneNumber,
      zoneLetter: getLetterDesignator(Lat)
    };
  }
  function UTMtoLL(utm) {
    var UTMNorthing = utm.northing;
    var UTMEasting = utm.easting;
    var zoneLetter = utm.zoneLetter;
    var zoneNumber = utm.zoneNumber;
    if (zoneNumber < 0 || zoneNumber > 60) {
      return null;
    }
    var k0 = 0.9996;
    var a = 6378137;
    var eccSquared = 669438e-8;
    var eccPrimeSquared;
    var e1 = (1 - Math.sqrt(1 - eccSquared)) / (1 + Math.sqrt(1 - eccSquared));
    var N1, T1, C12, R1, D, M2;
    var LongOrigin;
    var mu, phi1Rad;
    var x = UTMEasting - 5e5;
    var y = UTMNorthing;
    if (zoneLetter < "N") {
      y -= 1e7;
    }
    LongOrigin = (zoneNumber - 1) * 6 - 180 + 3;
    eccPrimeSquared = eccSquared / (1 - eccSquared);
    M2 = y / k0;
    mu = M2 / (a * (1 - eccSquared / 4 - 3 * eccSquared * eccSquared / 64 - 5 * eccSquared * eccSquared * eccSquared / 256));
    phi1Rad = mu + (3 * e1 / 2 - 27 * e1 * e1 * e1 / 32) * Math.sin(2 * mu) + (21 * e1 * e1 / 16 - 55 * e1 * e1 * e1 * e1 / 32) * Math.sin(4 * mu) + 151 * e1 * e1 * e1 / 96 * Math.sin(6 * mu);
    N1 = a / Math.sqrt(1 - eccSquared * Math.sin(phi1Rad) * Math.sin(phi1Rad));
    T1 = Math.tan(phi1Rad) * Math.tan(phi1Rad);
    C12 = eccPrimeSquared * Math.cos(phi1Rad) * Math.cos(phi1Rad);
    R1 = a * (1 - eccSquared) / Math.pow(1 - eccSquared * Math.sin(phi1Rad) * Math.sin(phi1Rad), 1.5);
    D = x / (N1 * k0);
    var lat = phi1Rad - N1 * Math.tan(phi1Rad) / R1 * (D * D / 2 - (5 + 3 * T1 + 10 * C12 - 4 * C12 * C12 - 9 * eccPrimeSquared) * D * D * D * D / 24 + (61 + 90 * T1 + 298 * C12 + 45 * T1 * T1 - 252 * eccPrimeSquared - 3 * C12 * C12) * D * D * D * D * D * D / 720);
    lat = radToDeg(lat);
    var lon = (D - (1 + 2 * T1 + C12) * D * D * D / 6 + (5 - 2 * C12 + 28 * T1 - 3 * C12 * C12 + 8 * eccPrimeSquared + 24 * T1 * T1) * D * D * D * D * D / 120) / Math.cos(phi1Rad);
    lon = LongOrigin + radToDeg(lon);
    var result;
    if (utm.accuracy) {
      var topRight = UTMtoLL({
        northing: utm.northing + utm.accuracy,
        easting: utm.easting + utm.accuracy,
        zoneLetter: utm.zoneLetter,
        zoneNumber: utm.zoneNumber
      });
      result = {
        top: topRight.lat,
        right: topRight.lon,
        bottom: lat,
        left: lon
      };
    } else {
      result = {
        lat,
        lon
      };
    }
    return result;
  }
  function getLetterDesignator(lat) {
    var LetterDesignator = "Z";
    if (84 >= lat && lat >= 72) {
      LetterDesignator = "X";
    } else if (72 > lat && lat >= 64) {
      LetterDesignator = "W";
    } else if (64 > lat && lat >= 56) {
      LetterDesignator = "V";
    } else if (56 > lat && lat >= 48) {
      LetterDesignator = "U";
    } else if (48 > lat && lat >= 40) {
      LetterDesignator = "T";
    } else if (40 > lat && lat >= 32) {
      LetterDesignator = "S";
    } else if (32 > lat && lat >= 24) {
      LetterDesignator = "R";
    } else if (24 > lat && lat >= 16) {
      LetterDesignator = "Q";
    } else if (16 > lat && lat >= 8) {
      LetterDesignator = "P";
    } else if (8 > lat && lat >= 0) {
      LetterDesignator = "N";
    } else if (0 > lat && lat >= -8) {
      LetterDesignator = "M";
    } else if (-8 > lat && lat >= -16) {
      LetterDesignator = "L";
    } else if (-16 > lat && lat >= -24) {
      LetterDesignator = "K";
    } else if (-24 > lat && lat >= -32) {
      LetterDesignator = "J";
    } else if (-32 > lat && lat >= -40) {
      LetterDesignator = "H";
    } else if (-40 > lat && lat >= -48) {
      LetterDesignator = "G";
    } else if (-48 > lat && lat >= -56) {
      LetterDesignator = "F";
    } else if (-56 > lat && lat >= -64) {
      LetterDesignator = "E";
    } else if (-64 > lat && lat >= -72) {
      LetterDesignator = "D";
    } else if (-72 > lat && lat >= -80) {
      LetterDesignator = "C";
    }
    return LetterDesignator;
  }
  function encode(utm, accuracy) {
    var seasting = "00000" + utm.easting, snorthing = "00000" + utm.northing;
    return utm.zoneNumber + utm.zoneLetter + get100kID(utm.easting, utm.northing, utm.zoneNumber) + seasting.substr(seasting.length - 5, accuracy) + snorthing.substr(snorthing.length - 5, accuracy);
  }
  function get100kID(easting, northing, zoneNumber) {
    var setParm = get100kSetForZone(zoneNumber);
    var setColumn = Math.floor(easting / 1e5);
    var setRow = Math.floor(northing / 1e5) % 20;
    return getLetter100kID(setColumn, setRow, setParm);
  }
  function get100kSetForZone(i) {
    var setParm = i % NUM_100K_SETS;
    if (setParm === 0) {
      setParm = NUM_100K_SETS;
    }
    return setParm;
  }
  function getLetter100kID(column, row, parm) {
    var index = parm - 1;
    var colOrigin = SET_ORIGIN_COLUMN_LETTERS.charCodeAt(index);
    var rowOrigin = SET_ORIGIN_ROW_LETTERS.charCodeAt(index);
    var colInt = colOrigin + column - 1;
    var rowInt = rowOrigin + row;
    var rollover = false;
    if (colInt > Z) {
      colInt = colInt - Z + A - 1;
      rollover = true;
    }
    if (colInt === I || colOrigin < I && colInt > I || (colInt > I || colOrigin < I) && rollover) {
      colInt++;
    }
    if (colInt === O || colOrigin < O && colInt > O || (colInt > O || colOrigin < O) && rollover) {
      colInt++;
      if (colInt === I) {
        colInt++;
      }
    }
    if (colInt > Z) {
      colInt = colInt - Z + A - 1;
    }
    if (rowInt > V) {
      rowInt = rowInt - V + A - 1;
      rollover = true;
    } else {
      rollover = false;
    }
    if (rowInt === I || rowOrigin < I && rowInt > I || (rowInt > I || rowOrigin < I) && rollover) {
      rowInt++;
    }
    if (rowInt === O || rowOrigin < O && rowInt > O || (rowInt > O || rowOrigin < O) && rollover) {
      rowInt++;
      if (rowInt === I) {
        rowInt++;
      }
    }
    if (rowInt > V) {
      rowInt = rowInt - V + A - 1;
    }
    var twoLetter = String.fromCharCode(colInt) + String.fromCharCode(rowInt);
    return twoLetter;
  }
  function decode(mgrsString) {
    if (mgrsString && mgrsString.length === 0) {
      throw "MGRSPoint coverting from nothing";
    }
    var length = mgrsString.length;
    var hunK = null;
    var sb = "";
    var testChar;
    var i = 0;
    while (!/[A-Z]/.test(testChar = mgrsString.charAt(i))) {
      if (i >= 2) {
        throw "MGRSPoint bad conversion from: " + mgrsString;
      }
      sb += testChar;
      i++;
    }
    var zoneNumber = parseInt(sb, 10);
    if (i === 0 || i + 3 > length) {
      throw "MGRSPoint bad conversion from: " + mgrsString;
    }
    var zoneLetter = mgrsString.charAt(i++);
    if (zoneLetter <= "A" || zoneLetter === "B" || zoneLetter === "Y" || zoneLetter >= "Z" || zoneLetter === "I" || zoneLetter === "O") {
      throw "MGRSPoint zone letter " + zoneLetter + " not handled: " + mgrsString;
    }
    hunK = mgrsString.substring(i, i += 2);
    var set = get100kSetForZone(zoneNumber);
    var east100k = getEastingFromChar(hunK.charAt(0), set);
    var north100k = getNorthingFromChar(hunK.charAt(1), set);
    while (north100k < getMinNorthing(zoneLetter)) {
      north100k += 2e6;
    }
    var remainder = length - i;
    if (remainder % 2 !== 0) {
      throw "MGRSPoint has to have an even number \nof digits after the zone letter and two 100km letters - front \nhalf for easting meters, second half for \nnorthing meters" + mgrsString;
    }
    var sep = remainder / 2;
    var sepEasting = 0;
    var sepNorthing = 0;
    var accuracyBonus, sepEastingString, sepNorthingString, easting, northing;
    if (sep > 0) {
      accuracyBonus = 1e5 / Math.pow(10, sep);
      sepEastingString = mgrsString.substring(i, i + sep);
      sepEasting = parseFloat(sepEastingString) * accuracyBonus;
      sepNorthingString = mgrsString.substring(i + sep);
      sepNorthing = parseFloat(sepNorthingString) * accuracyBonus;
    }
    easting = sepEasting + east100k;
    northing = sepNorthing + north100k;
    return {
      easting,
      northing,
      zoneLetter,
      zoneNumber,
      accuracy: accuracyBonus
    };
  }
  function getEastingFromChar(e, set) {
    var curCol = SET_ORIGIN_COLUMN_LETTERS.charCodeAt(set - 1);
    var eastingValue = 1e5;
    var rewindMarker = false;
    while (curCol !== e.charCodeAt(0)) {
      curCol++;
      if (curCol === I) {
        curCol++;
      }
      if (curCol === O) {
        curCol++;
      }
      if (curCol > Z) {
        if (rewindMarker) {
          throw "Bad character: " + e;
        }
        curCol = A;
        rewindMarker = true;
      }
      eastingValue += 1e5;
    }
    return eastingValue;
  }
  function getNorthingFromChar(n, set) {
    if (n > "V") {
      throw "MGRSPoint given invalid Northing " + n;
    }
    var curRow = SET_ORIGIN_ROW_LETTERS.charCodeAt(set - 1);
    var northingValue = 0;
    var rewindMarker = false;
    while (curRow !== n.charCodeAt(0)) {
      curRow++;
      if (curRow === I) {
        curRow++;
      }
      if (curRow === O) {
        curRow++;
      }
      if (curRow > V) {
        if (rewindMarker) {
          throw "Bad character: " + n;
        }
        curRow = A;
        rewindMarker = true;
      }
      northingValue += 1e5;
    }
    return northingValue;
  }
  function getMinNorthing(zoneLetter) {
    var northing;
    switch (zoneLetter) {
      case "C":
        northing = 11e5;
        break;
      case "D":
        northing = 2e6;
        break;
      case "E":
        northing = 28e5;
        break;
      case "F":
        northing = 37e5;
        break;
      case "G":
        northing = 46e5;
        break;
      case "H":
        northing = 55e5;
        break;
      case "J":
        northing = 64e5;
        break;
      case "K":
        northing = 73e5;
        break;
      case "L":
        northing = 82e5;
        break;
      case "M":
        northing = 91e5;
        break;
      case "N":
        northing = 0;
        break;
      case "P":
        northing = 8e5;
        break;
      case "Q":
        northing = 17e5;
        break;
      case "R":
        northing = 26e5;
        break;
      case "S":
        northing = 35e5;
        break;
      case "T":
        northing = 44e5;
        break;
      case "U":
        northing = 53e5;
        break;
      case "V":
        northing = 62e5;
        break;
      case "W":
        northing = 7e6;
        break;
      case "X":
        northing = 79e5;
        break;
      default:
        northing = -1;
    }
    if (northing >= 0) {
      return northing;
    } else {
      throw "Invalid zone letter: " + zoneLetter;
    }
  }

  // node_modules/proj4/lib/Point.js
  function Point(x, y, z) {
    if (!(this instanceof Point)) {
      return new Point(x, y, z);
    }
    if (Array.isArray(x)) {
      this.x = x[0];
      this.y = x[1];
      this.z = x[2] || 0;
    } else if (typeof x === "object") {
      this.x = x.x;
      this.y = x.y;
      this.z = x.z || 0;
    } else if (typeof x === "string" && typeof y === "undefined") {
      var coords = x.split(",");
      this.x = parseFloat(coords[0]);
      this.y = parseFloat(coords[1]);
      this.z = parseFloat(coords[2]) || 0;
    } else {
      this.x = x;
      this.y = y;
      this.z = z || 0;
    }
    console.warn("proj4.Point will be removed in version 3, use proj4.toPoint");
  }
  Point.fromMGRS = function(mgrsStr) {
    return new Point(toPoint(mgrsStr));
  };
  Point.prototype.toMGRS = function(accuracy) {
    return forward2([this.x, this.y], accuracy);
  };
  var Point_default = Point;

  // node_modules/proj4/lib/common/pj_enfn.js
  var C00 = 1;
  var C02 = 0.25;
  var C04 = 0.046875;
  var C06 = 0.01953125;
  var C08 = 0.01068115234375;
  var C22 = 0.75;
  var C44 = 0.46875;
  var C46 = 0.013020833333333334;
  var C48 = 0.007120768229166667;
  var C66 = 0.3645833333333333;
  var C68 = 0.005696614583333333;
  var C88 = 0.3076171875;
  function pj_enfn_default(es) {
    var en = [];
    en[0] = C00 - es * (C02 + es * (C04 + es * (C06 + es * C08)));
    en[1] = es * (C22 - es * (C04 + es * (C06 + es * C08)));
    var t = es * es;
    en[2] = t * (C44 - es * (C46 + es * C48));
    t *= es;
    en[3] = t * (C66 - es * C68);
    en[4] = t * es * C88;
    return en;
  }

  // node_modules/proj4/lib/common/pj_mlfn.js
  function pj_mlfn_default(phi, sphi, cphi, en) {
    cphi *= sphi;
    sphi *= sphi;
    return en[0] * phi - cphi * (en[1] + sphi * (en[2] + sphi * (en[3] + sphi * en[4])));
  }

  // node_modules/proj4/lib/common/pj_inv_mlfn.js
  var MAX_ITER = 20;
  function pj_inv_mlfn_default(arg, es, en) {
    var k = 1 / (1 - es);
    var phi = arg;
    for (var i = MAX_ITER; i; --i) {
      var s = Math.sin(phi);
      var t = 1 - es * s * s;
      t = (pj_mlfn_default(phi, s, Math.cos(phi), en) - arg) * (t * Math.sqrt(t)) * k;
      phi -= t;
      if (Math.abs(t) < EPSLN) {
        return phi;
      }
    }
    return phi;
  }

  // node_modules/proj4/lib/projections/tmerc.js
  function init3() {
    this.x0 = this.x0 !== void 0 ? this.x0 : 0;
    this.y0 = this.y0 !== void 0 ? this.y0 : 0;
    this.long0 = this.long0 !== void 0 ? this.long0 : 0;
    this.lat0 = this.lat0 !== void 0 ? this.lat0 : 0;
    if (this.es) {
      this.en = pj_enfn_default(this.es);
      this.ml0 = pj_mlfn_default(this.lat0, Math.sin(this.lat0), Math.cos(this.lat0), this.en);
    }
  }
  function forward3(p) {
    var lon = p.x;
    var lat = p.y;
    var delta_lon = adjust_lon_default(lon - this.long0, this.over);
    var con;
    var x, y;
    var sin_phi = Math.sin(lat);
    var cos_phi = Math.cos(lat);
    if (!this.es) {
      var b = cos_phi * Math.sin(delta_lon);
      if (Math.abs(Math.abs(b) - 1) < EPSLN) {
        return 93;
      } else {
        x = 0.5 * this.a * this.k0 * Math.log((1 + b) / (1 - b)) + this.x0;
        y = cos_phi * Math.cos(delta_lon) / Math.sqrt(1 - Math.pow(b, 2));
        b = Math.abs(y);
        if (b >= 1) {
          if (b - 1 > EPSLN) {
            return 93;
          } else {
            y = 0;
          }
        } else {
          y = Math.acos(y);
        }
        if (lat < 0) {
          y = -y;
        }
        y = this.a * this.k0 * (y - this.lat0) + this.y0;
      }
    } else {
      var al = cos_phi * delta_lon;
      var als = Math.pow(al, 2);
      var c = this.ep2 * Math.pow(cos_phi, 2);
      var cs = Math.pow(c, 2);
      var tq = Math.abs(cos_phi) > EPSLN ? Math.tan(lat) : 0;
      var t = Math.pow(tq, 2);
      var ts = Math.pow(t, 2);
      con = 1 - this.es * Math.pow(sin_phi, 2);
      al = al / Math.sqrt(con);
      var ml = pj_mlfn_default(lat, sin_phi, cos_phi, this.en);
      x = this.a * (this.k0 * al * (1 + als / 6 * (1 - t + c + als / 20 * (5 - 18 * t + ts + 14 * c - 58 * t * c + als / 42 * (61 + 179 * ts - ts * t - 479 * t))))) + this.x0;
      y = this.a * (this.k0 * (ml - this.ml0 + sin_phi * delta_lon * al / 2 * (1 + als / 12 * (5 - t + 9 * c + 4 * cs + als / 30 * (61 + ts - 58 * t + 270 * c - 330 * t * c + als / 56 * (1385 + 543 * ts - ts * t - 3111 * t)))))) + this.y0;
    }
    p.x = x;
    p.y = y;
    return p;
  }
  function inverse3(p) {
    var con, phi;
    var lat, lon;
    var x = (p.x - this.x0) * (1 / this.a);
    var y = (p.y - this.y0) * (1 / this.a);
    if (!this.es) {
      var f = Math.exp(x / this.k0);
      var g = 0.5 * (f - 1 / f);
      var temp = this.lat0 + y / this.k0;
      var h = Math.cos(temp);
      con = Math.sqrt((1 - Math.pow(h, 2)) / (1 + Math.pow(g, 2)));
      lat = Math.asin(con);
      if (y < 0) {
        lat = -lat;
      }
      if (g === 0 && h === 0) {
        lon = 0;
      } else {
        lon = adjust_lon_default(Math.atan2(g, h) + this.long0, this.over);
      }
    } else {
      con = this.ml0 + y / this.k0;
      phi = pj_inv_mlfn_default(con, this.es, this.en);
      if (Math.abs(phi) < HALF_PI) {
        var sin_phi = Math.sin(phi);
        var cos_phi = Math.cos(phi);
        var tan_phi = Math.abs(cos_phi) > EPSLN ? Math.tan(phi) : 0;
        var c = this.ep2 * Math.pow(cos_phi, 2);
        var cs = Math.pow(c, 2);
        var t = Math.pow(tan_phi, 2);
        var ts = Math.pow(t, 2);
        con = 1 - this.es * Math.pow(sin_phi, 2);
        var d = x * Math.sqrt(con) / this.k0;
        var ds = Math.pow(d, 2);
        con = con * tan_phi;
        lat = phi - con * ds / (1 - this.es) * 0.5 * (1 - ds / 12 * (5 + 3 * t - 9 * c * t + c - 4 * cs - ds / 30 * (61 + 90 * t - 252 * c * t + 45 * ts + 46 * c - ds / 56 * (1385 + 3633 * t + 4095 * ts + 1574 * ts * t))));
        lon = adjust_lon_default(this.long0 + d * (1 - ds / 6 * (1 + 2 * t + c - ds / 20 * (5 + 28 * t + 24 * ts + 8 * c * t + 6 * c - ds / 42 * (61 + 662 * t + 1320 * ts + 720 * ts * t)))) / cos_phi, this.over);
      } else {
        lat = HALF_PI * sign_default(y);
        lon = 0;
      }
    }
    p.x = lon;
    p.y = lat;
    return p;
  }
  var names4 = ["Fast_Transverse_Mercator", "Fast Transverse Mercator"];
  var tmerc_default = {
    init: init3,
    forward: forward3,
    inverse: inverse3,
    names: names4
  };

  // node_modules/proj4/lib/common/sinh.js
  function sinh_default(x) {
    var r = Math.exp(x);
    r = (r - 1 / r) / 2;
    return r;
  }

  // node_modules/proj4/lib/common/hypot.js
  function hypot_default(x, y) {
    x = Math.abs(x);
    y = Math.abs(y);
    var a = Math.max(x, y);
    var b = Math.min(x, y) / (a ? a : 1);
    return a * Math.sqrt(1 + Math.pow(b, 2));
  }

  // node_modules/proj4/lib/common/log1py.js
  function log1py_default(x) {
    var y = 1 + x;
    var z = y - 1;
    return z === 0 ? x : x * Math.log(y) / z;
  }

  // node_modules/proj4/lib/common/asinhy.js
  function asinhy_default(x) {
    var y = Math.abs(x);
    y = log1py_default(y * (1 + y / (hypot_default(1, y) + 1)));
    return x < 0 ? -y : y;
  }

  // node_modules/proj4/lib/common/gatg.js
  function gatg_default(pp, B) {
    var cos_2B = 2 * Math.cos(2 * B);
    var i = pp.length - 1;
    var h1 = pp[i];
    var h2 = 0;
    var h;
    while (--i >= 0) {
      h = -h2 + cos_2B * h1 + pp[i];
      h2 = h1;
      h1 = h;
    }
    return B + h * Math.sin(2 * B);
  }

  // node_modules/proj4/lib/common/clens.js
  function clens_default(pp, arg_r) {
    var r = 2 * Math.cos(arg_r);
    var i = pp.length - 1;
    var hr1 = pp[i];
    var hr2 = 0;
    var hr;
    while (--i >= 0) {
      hr = -hr2 + r * hr1 + pp[i];
      hr2 = hr1;
      hr1 = hr;
    }
    return Math.sin(arg_r) * hr;
  }

  // node_modules/proj4/lib/common/cosh.js
  function cosh_default(x) {
    var r = Math.exp(x);
    r = (r + 1 / r) / 2;
    return r;
  }

  // node_modules/proj4/lib/common/clens_cmplx.js
  function clens_cmplx_default(pp, arg_r, arg_i) {
    var sin_arg_r = Math.sin(arg_r);
    var cos_arg_r = Math.cos(arg_r);
    var sinh_arg_i = sinh_default(arg_i);
    var cosh_arg_i = cosh_default(arg_i);
    var r = 2 * cos_arg_r * cosh_arg_i;
    var i = -2 * sin_arg_r * sinh_arg_i;
    var j = pp.length - 1;
    var hr = pp[j];
    var hi1 = 0;
    var hr1 = 0;
    var hi = 0;
    var hr2;
    var hi2;
    while (--j >= 0) {
      hr2 = hr1;
      hi2 = hi1;
      hr1 = hr;
      hi1 = hi;
      hr = -hr2 + r * hr1 - i * hi1 + pp[j];
      hi = -hi2 + i * hr1 + r * hi1;
    }
    r = sin_arg_r * cosh_arg_i;
    i = cos_arg_r * sinh_arg_i;
    return [r * hr - i * hi, r * hi + i * hr];
  }

  // node_modules/proj4/lib/projections/etmerc.js
  function init4() {
    if (!this.approx && (isNaN(this.es) || this.es <= 0)) {
      throw new Error('Incorrect elliptical usage. Try using the +approx option in the proj string, or PROJECTION["Fast_Transverse_Mercator"] in the WKT.');
    }
    if (this.approx) {
      tmerc_default.init.apply(this);
      this.forward = tmerc_default.forward;
      this.inverse = tmerc_default.inverse;
    }
    this.x0 = this.x0 !== void 0 ? this.x0 : 0;
    this.y0 = this.y0 !== void 0 ? this.y0 : 0;
    this.long0 = this.long0 !== void 0 ? this.long0 : 0;
    this.lat0 = this.lat0 !== void 0 ? this.lat0 : 0;
    this.k0 = this.k0 !== void 0 ? this.k0 : 1;
    this.cgb = [];
    this.cbg = [];
    this.utg = [];
    this.gtu = [];
    var f = this.es / (1 + Math.sqrt(1 - this.es));
    var n = f / (2 - f);
    var np = n;
    this.cgb[0] = n * (2 + n * (-2 / 3 + n * (-2 + n * (116 / 45 + n * (26 / 45 + n * (-2854 / 675))))));
    this.cbg[0] = n * (-2 + n * (2 / 3 + n * (4 / 3 + n * (-82 / 45 + n * (32 / 45 + n * (4642 / 4725))))));
    np = np * n;
    this.cgb[1] = np * (7 / 3 + n * (-8 / 5 + n * (-227 / 45 + n * (2704 / 315 + n * (2323 / 945)))));
    this.cbg[1] = np * (5 / 3 + n * (-16 / 15 + n * (-13 / 9 + n * (904 / 315 + n * (-1522 / 945)))));
    np = np * n;
    this.cgb[2] = np * (56 / 15 + n * (-136 / 35 + n * (-1262 / 105 + n * (73814 / 2835))));
    this.cbg[2] = np * (-26 / 15 + n * (34 / 21 + n * (8 / 5 + n * (-12686 / 2835))));
    np = np * n;
    this.cgb[3] = np * (4279 / 630 + n * (-332 / 35 + n * (-399572 / 14175)));
    this.cbg[3] = np * (1237 / 630 + n * (-12 / 5 + n * (-24832 / 14175)));
    np = np * n;
    this.cgb[4] = np * (4174 / 315 + n * (-144838 / 6237));
    this.cbg[4] = np * (-734 / 315 + n * (109598 / 31185));
    np = np * n;
    this.cgb[5] = np * (601676 / 22275);
    this.cbg[5] = np * (444337 / 155925);
    np = Math.pow(n, 2);
    this.Qn = this.k0 / (1 + n) * (1 + np * (1 / 4 + np * (1 / 64 + np / 256)));
    this.utg[0] = n * (-0.5 + n * (2 / 3 + n * (-37 / 96 + n * (1 / 360 + n * (81 / 512 + n * (-96199 / 604800))))));
    this.gtu[0] = n * (0.5 + n * (-2 / 3 + n * (5 / 16 + n * (41 / 180 + n * (-127 / 288 + n * (7891 / 37800))))));
    this.utg[1] = np * (-1 / 48 + n * (-1 / 15 + n * (437 / 1440 + n * (-46 / 105 + n * (1118711 / 3870720)))));
    this.gtu[1] = np * (13 / 48 + n * (-3 / 5 + n * (557 / 1440 + n * (281 / 630 + n * (-1983433 / 1935360)))));
    np = np * n;
    this.utg[2] = np * (-17 / 480 + n * (37 / 840 + n * (209 / 4480 + n * (-5569 / 90720))));
    this.gtu[2] = np * (61 / 240 + n * (-103 / 140 + n * (15061 / 26880 + n * (167603 / 181440))));
    np = np * n;
    this.utg[3] = np * (-4397 / 161280 + n * (11 / 504 + n * (830251 / 7257600)));
    this.gtu[3] = np * (49561 / 161280 + n * (-179 / 168 + n * (6601661 / 7257600)));
    np = np * n;
    this.utg[4] = np * (-4583 / 161280 + n * (108847 / 3991680));
    this.gtu[4] = np * (34729 / 80640 + n * (-3418889 / 1995840));
    np = np * n;
    this.utg[5] = np * (-20648693 / 638668800);
    this.gtu[5] = np * (212378941 / 319334400);
    var Z2 = gatg_default(this.cbg, this.lat0);
    this.Zb = -this.Qn * (Z2 + clens_default(this.gtu, 2 * Z2));
  }
  function forward4(p) {
    var Ce = adjust_lon_default(p.x - this.long0, this.over);
    var Cn = p.y;
    Cn = gatg_default(this.cbg, Cn);
    var sin_Cn = Math.sin(Cn);
    var cos_Cn = Math.cos(Cn);
    var sin_Ce = Math.sin(Ce);
    var cos_Ce = Math.cos(Ce);
    Cn = Math.atan2(sin_Cn, cos_Ce * cos_Cn);
    Ce = Math.atan2(sin_Ce * cos_Cn, hypot_default(sin_Cn, cos_Cn * cos_Ce));
    Ce = asinhy_default(Math.tan(Ce));
    var tmp = clens_cmplx_default(this.gtu, 2 * Cn, 2 * Ce);
    Cn = Cn + tmp[0];
    Ce = Ce + tmp[1];
    var x;
    var y;
    if (Math.abs(Ce) <= 2.623395162778) {
      x = this.a * (this.Qn * Ce) + this.x0;
      y = this.a * (this.Qn * Cn + this.Zb) + this.y0;
    } else {
      x = Infinity;
      y = Infinity;
    }
    p.x = x;
    p.y = y;
    return p;
  }
  function inverse4(p) {
    var Ce = (p.x - this.x0) * (1 / this.a);
    var Cn = (p.y - this.y0) * (1 / this.a);
    Cn = (Cn - this.Zb) / this.Qn;
    Ce = Ce / this.Qn;
    var lon;
    var lat;
    if (Math.abs(Ce) <= 2.623395162778) {
      var tmp = clens_cmplx_default(this.utg, 2 * Cn, 2 * Ce);
      Cn = Cn + tmp[0];
      Ce = Ce + tmp[1];
      Ce = Math.atan(sinh_default(Ce));
      var sin_Cn = Math.sin(Cn);
      var cos_Cn = Math.cos(Cn);
      var sin_Ce = Math.sin(Ce);
      var cos_Ce = Math.cos(Ce);
      Cn = Math.atan2(sin_Cn * cos_Ce, hypot_default(sin_Ce, cos_Ce * cos_Cn));
      Ce = Math.atan2(sin_Ce, cos_Ce * cos_Cn);
      lon = adjust_lon_default(Ce + this.long0, this.over);
      lat = gatg_default(this.cgb, Cn);
    } else {
      lon = Infinity;
      lat = Infinity;
    }
    p.x = lon;
    p.y = lat;
    return p;
  }
  var names5 = ["Extended_Transverse_Mercator", "Extended Transverse Mercator", "etmerc", "Transverse_Mercator", "Transverse Mercator", "Gauss Kruger", "Gauss_Kruger", "tmerc"];
  var etmerc_default = {
    init: init4,
    forward: forward4,
    inverse: inverse4,
    names: names5
  };

  // node_modules/proj4/lib/common/adjust_zone.js
  function adjust_zone_default(zone, lon) {
    if (zone === void 0) {
      zone = Math.floor((adjust_lon_default(lon) + Math.PI) * 30 / Math.PI) + 1;
      if (zone < 0) {
        return 0;
      } else if (zone > 60) {
        return 60;
      }
    }
    return zone;
  }

  // node_modules/proj4/lib/projections/utm.js
  var dependsOn = "etmerc";
  function init5() {
    var zone = adjust_zone_default(this.zone, this.long0);
    if (zone === void 0) {
      throw new Error("unknown utm zone");
    }
    this.lat0 = 0;
    this.long0 = (6 * Math.abs(zone) - 183) * D2R;
    this.x0 = 5e5;
    this.y0 = this.utmSouth ? 1e7 : 0;
    this.k0 = 0.9996;
    etmerc_default.init.apply(this);
    this.forward = etmerc_default.forward;
    this.inverse = etmerc_default.inverse;
  }
  var names6 = ["Universal Transverse Mercator System", "utm"];
  var utm_default = {
    init: init5,
    names: names6,
    dependsOn
  };

  // node_modules/proj4/lib/common/srat.js
  function srat_default(esinp, exp) {
    return Math.pow((1 - esinp) / (1 + esinp), exp);
  }

  // node_modules/proj4/lib/projections/gauss.js
  var MAX_ITER2 = 20;
  function init6() {
    var sphi = Math.sin(this.lat0);
    var cphi = Math.cos(this.lat0);
    cphi *= cphi;
    this.rc = Math.sqrt(1 - this.es) / (1 - this.es * sphi * sphi);
    this.C = Math.sqrt(1 + this.es * cphi * cphi / (1 - this.es));
    this.phic0 = Math.asin(sphi / this.C);
    this.ratexp = 0.5 * this.C * this.e;
    this.K = Math.tan(0.5 * this.phic0 + FORTPI) / (Math.pow(Math.tan(0.5 * this.lat0 + FORTPI), this.C) * srat_default(this.e * sphi, this.ratexp));
  }
  function forward5(p) {
    var lon = p.x;
    var lat = p.y;
    p.y = 2 * Math.atan(this.K * Math.pow(Math.tan(0.5 * lat + FORTPI), this.C) * srat_default(this.e * Math.sin(lat), this.ratexp)) - HALF_PI;
    p.x = this.C * lon;
    return p;
  }
  function inverse5(p) {
    var DEL_TOL = 1e-14;
    var lon = p.x / this.C;
    var lat = p.y;
    var num = Math.pow(Math.tan(0.5 * lat + FORTPI) / this.K, 1 / this.C);
    for (var i = MAX_ITER2; i > 0; --i) {
      lat = 2 * Math.atan(num * srat_default(this.e * Math.sin(p.y), -0.5 * this.e)) - HALF_PI;
      if (Math.abs(lat - p.y) < DEL_TOL) {
        break;
      }
      p.y = lat;
    }
    if (!i) {
      return null;
    }
    p.x = lon;
    p.y = lat;
    return p;
  }
  var names7 = ["gauss"];
  var gauss_default = {
    init: init6,
    forward: forward5,
    inverse: inverse5,
    names: names7
  };

  // node_modules/proj4/lib/projections/sterea.js
  function init7() {
    gauss_default.init.apply(this);
    if (!this.rc) {
      return;
    }
    this.sinc0 = Math.sin(this.phic0);
    this.cosc0 = Math.cos(this.phic0);
    this.R2 = 2 * this.rc;
    if (!this.title) {
      this.title = "Oblique Stereographic Alternative";
    }
  }
  function forward6(p) {
    var sinc, cosc, cosl, k;
    p.x = adjust_lon_default(p.x - this.long0, this.over);
    gauss_default.forward.apply(this, [p]);
    sinc = Math.sin(p.y);
    cosc = Math.cos(p.y);
    cosl = Math.cos(p.x);
    k = this.k0 * this.R2 / (1 + this.sinc0 * sinc + this.cosc0 * cosc * cosl);
    p.x = k * cosc * Math.sin(p.x);
    p.y = k * (this.cosc0 * sinc - this.sinc0 * cosc * cosl);
    p.x = this.a * p.x + this.x0;
    p.y = this.a * p.y + this.y0;
    return p;
  }
  function inverse6(p) {
    var sinc, cosc, lon, lat, rho;
    p.x = (p.x - this.x0) / this.a;
    p.y = (p.y - this.y0) / this.a;
    p.x /= this.k0;
    p.y /= this.k0;
    if (rho = hypot_default(p.x, p.y)) {
      var c = 2 * Math.atan2(rho, this.R2);
      sinc = Math.sin(c);
      cosc = Math.cos(c);
      lat = Math.asin(cosc * this.sinc0 + p.y * sinc * this.cosc0 / rho);
      lon = Math.atan2(p.x * sinc, rho * this.cosc0 * cosc - p.y * this.sinc0 * sinc);
    } else {
      lat = this.phic0;
      lon = 0;
    }
    p.x = lon;
    p.y = lat;
    gauss_default.inverse.apply(this, [p]);
    p.x = adjust_lon_default(p.x + this.long0, this.over);
    return p;
  }
  var names8 = ["Stereographic_North_Pole", "Oblique_Stereographic", "sterea", "Oblique Stereographic Alternative", "Double_Stereographic"];
  var sterea_default = {
    init: init7,
    forward: forward6,
    inverse: inverse6,
    names: names8
  };

  // node_modules/proj4/lib/projections/stere.js
  function ssfn_(phit, sinphi, eccen) {
    sinphi *= eccen;
    return Math.tan(0.5 * (HALF_PI + phit)) * Math.pow((1 - sinphi) / (1 + sinphi), 0.5 * eccen);
  }
  function init8() {
    this.x0 = this.x0 || 0;
    this.y0 = this.y0 || 0;
    this.lat0 = this.lat0 || 0;
    this.long0 = this.long0 || 0;
    this.coslat0 = Math.cos(this.lat0);
    this.sinlat0 = Math.sin(this.lat0);
    if (this.sphere) {
      if (!isNaN(this.lat_ts) && Math.abs(this.coslat0) <= EPSLN) {
        this.k0 = 0.5 * (1 + sign_default(this.lat0) * Math.sin(this.lat_ts));
      }
    } else {
      if (Math.abs(this.coslat0) <= EPSLN) {
        if (this.lat0 > 0) {
          this.con = 1;
        } else {
          this.con = -1;
        }
      }
      this.cons = Math.sqrt(Math.pow(1 + this.e, 1 + this.e) * Math.pow(1 - this.e, 1 - this.e));
      if (!isNaN(this.lat_ts) && Math.abs(this.coslat0) <= EPSLN && Math.abs(Math.cos(this.lat_ts)) > EPSLN) {
        this.k0 = 0.5 * this.cons * msfnz_default(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts)) / tsfnz_default(this.e, this.con * this.lat_ts, this.con * Math.sin(this.lat_ts));
      }
      this.ms1 = msfnz_default(this.e, this.sinlat0, this.coslat0);
      this.X0 = 2 * Math.atan(ssfn_(this.lat0, this.sinlat0, this.e)) - HALF_PI;
      this.cosX0 = Math.cos(this.X0);
      this.sinX0 = Math.sin(this.X0);
    }
  }
  function forward7(p) {
    var lon = p.x;
    var lat = p.y;
    var sinlat = Math.sin(lat);
    var coslat = Math.cos(lat);
    var A5, X, sinX, cosX, ts, rh;
    var dlon = adjust_lon_default(lon - this.long0, this.over);
    if (Math.abs(Math.abs(lon - this.long0) - Math.PI) <= EPSLN && Math.abs(lat + this.lat0) <= EPSLN) {
      p.x = NaN;
      p.y = NaN;
      return p;
    }
    if (this.sphere) {
      A5 = 2 * this.k0 / (1 + this.sinlat0 * sinlat + this.coslat0 * coslat * Math.cos(dlon));
      p.x = this.a * A5 * coslat * Math.sin(dlon) + this.x0;
      p.y = this.a * A5 * (this.coslat0 * sinlat - this.sinlat0 * coslat * Math.cos(dlon)) + this.y0;
      return p;
    } else {
      X = 2 * Math.atan(ssfn_(lat, sinlat, this.e)) - HALF_PI;
      cosX = Math.cos(X);
      sinX = Math.sin(X);
      if (Math.abs(this.coslat0) <= EPSLN) {
        ts = tsfnz_default(this.e, lat * this.con, this.con * sinlat);
        rh = 2 * this.a * this.k0 * ts / this.cons;
        p.x = this.x0 + rh * Math.sin(lon - this.long0);
        p.y = this.y0 - this.con * rh * Math.cos(lon - this.long0);
        return p;
      } else if (Math.abs(this.sinlat0) < EPSLN) {
        A5 = 2 * this.a * this.k0 / (1 + cosX * Math.cos(dlon));
        p.y = A5 * sinX;
      } else {
        A5 = 2 * this.a * this.k0 * this.ms1 / (this.cosX0 * (1 + this.sinX0 * sinX + this.cosX0 * cosX * Math.cos(dlon)));
        p.y = A5 * (this.cosX0 * sinX - this.sinX0 * cosX * Math.cos(dlon)) + this.y0;
      }
      p.x = A5 * cosX * Math.sin(dlon) + this.x0;
    }
    return p;
  }
  function inverse7(p) {
    p.x -= this.x0;
    p.y -= this.y0;
    var lon, lat, ts, ce, Chi;
    var rh = Math.sqrt(p.x * p.x + p.y * p.y);
    if (this.sphere) {
      var c = 2 * Math.atan(rh / (2 * this.a * this.k0));
      lon = this.long0;
      lat = this.lat0;
      if (rh <= EPSLN) {
        p.x = lon;
        p.y = lat;
        return p;
      }
      lat = Math.asin(Math.cos(c) * this.sinlat0 + p.y * Math.sin(c) * this.coslat0 / rh);
      if (Math.abs(this.coslat0) < EPSLN) {
        if (this.lat0 > 0) {
          lon = adjust_lon_default(this.long0 + Math.atan2(p.x, -1 * p.y), this.over);
        } else {
          lon = adjust_lon_default(this.long0 + Math.atan2(p.x, p.y), this.over);
        }
      } else {
        lon = adjust_lon_default(this.long0 + Math.atan2(p.x * Math.sin(c), rh * this.coslat0 * Math.cos(c) - p.y * this.sinlat0 * Math.sin(c)), this.over);
      }
      p.x = lon;
      p.y = lat;
      return p;
    } else {
      if (Math.abs(this.coslat0) <= EPSLN) {
        if (rh <= EPSLN) {
          lat = this.lat0;
          lon = this.long0;
          p.x = lon;
          p.y = lat;
          return p;
        }
        p.x *= this.con;
        p.y *= this.con;
        ts = rh * this.cons / (2 * this.a * this.k0);
        lat = this.con * phi2z_default(this.e, ts);
        lon = this.con * adjust_lon_default(this.con * this.long0 + Math.atan2(p.x, -1 * p.y), this.over);
      } else {
        ce = 2 * Math.atan(rh * this.cosX0 / (2 * this.a * this.k0 * this.ms1));
        lon = this.long0;
        if (rh <= EPSLN) {
          Chi = this.X0;
        } else {
          Chi = Math.asin(Math.cos(ce) * this.sinX0 + p.y * Math.sin(ce) * this.cosX0 / rh);
          lon = adjust_lon_default(this.long0 + Math.atan2(p.x * Math.sin(ce), rh * this.cosX0 * Math.cos(ce) - p.y * this.sinX0 * Math.sin(ce)), this.over);
        }
        lat = -1 * phi2z_default(this.e, Math.tan(0.5 * (HALF_PI + Chi)));
      }
    }
    p.x = lon;
    p.y = lat;
    return p;
  }
  var names9 = ["stere", "Stereographic_South_Pole", "Polar_Stereographic_variant_A", "Polar_Stereographic_variant_B", "Polar_Stereographic"];
  var stere_default = {
    init: init8,
    forward: forward7,
    inverse: inverse7,
    names: names9,
    ssfn_
  };

  // node_modules/proj4/lib/projections/somerc.js
  function init9() {
    if (!this.k0) {
      this.k0 = 1;
    }
    var phy0 = this.lat0;
    this.lambda0 = this.long0;
    var sinPhy0 = Math.sin(phy0);
    var semiMajorAxis = this.a;
    var invF = this.rf;
    var flattening = 1 / invF;
    var e2 = 2 * flattening - Math.pow(flattening, 2);
    var e = this.e = Math.sqrt(e2);
    this.R = this.k0 * semiMajorAxis * Math.sqrt(1 - e2) / (1 - e2 * Math.pow(sinPhy0, 2));
    this.alpha = Math.sqrt(1 + e2 / (1 - e2) * Math.pow(Math.cos(phy0), 4));
    this.b0 = Math.asin(sinPhy0 / this.alpha);
    var k1 = Math.log(Math.tan(Math.PI / 4 + this.b0 / 2));
    var k2 = Math.log(Math.tan(Math.PI / 4 + phy0 / 2));
    var k3 = Math.log((1 + e * sinPhy0) / (1 - e * sinPhy0));
    this.K = k1 - this.alpha * k2 + this.alpha * e / 2 * k3;
  }
  function forward8(p) {
    var Sa1 = Math.log(Math.tan(Math.PI / 4 - p.y / 2));
    var Sa2 = this.e / 2 * Math.log((1 + this.e * Math.sin(p.y)) / (1 - this.e * Math.sin(p.y)));
    var S = -this.alpha * (Sa1 + Sa2) + this.K;
    var b = 2 * (Math.atan(Math.exp(S)) - Math.PI / 4);
    var I2 = this.alpha * (p.x - this.lambda0);
    var rotI = Math.atan(Math.sin(I2) / (Math.sin(this.b0) * Math.tan(b) + Math.cos(this.b0) * Math.cos(I2)));
    var rotB = Math.asin(Math.cos(this.b0) * Math.sin(b) - Math.sin(this.b0) * Math.cos(b) * Math.cos(I2));
    p.y = this.R / 2 * Math.log((1 + Math.sin(rotB)) / (1 - Math.sin(rotB))) + this.y0;
    p.x = this.R * rotI + this.x0;
    return p;
  }
  function inverse8(p) {
    var Y = p.x - this.x0;
    var X = p.y - this.y0;
    var rotI = Y / this.R;
    var rotB = 2 * (Math.atan(Math.exp(X / this.R)) - Math.PI / 4);
    var b = Math.asin(Math.cos(this.b0) * Math.sin(rotB) + Math.sin(this.b0) * Math.cos(rotB) * Math.cos(rotI));
    var I2 = Math.atan(Math.sin(rotI) / (Math.cos(this.b0) * Math.cos(rotI) - Math.sin(this.b0) * Math.tan(rotB)));
    var lambda = this.lambda0 + I2 / this.alpha;
    var S = 0;
    var phy = b;
    var prevPhy = -1e3;
    var iteration = 0;
    while (Math.abs(phy - prevPhy) > 1e-7) {
      if (++iteration > 20) {
        return;
      }
      S = 1 / this.alpha * (Math.log(Math.tan(Math.PI / 4 + b / 2)) - this.K) + this.e * Math.log(Math.tan(Math.PI / 4 + Math.asin(this.e * Math.sin(phy)) / 2));
      prevPhy = phy;
      phy = 2 * Math.atan(Math.exp(S)) - Math.PI / 2;
    }
    p.x = lambda;
    p.y = phy;
    return p;
  }
  var names10 = ["somerc"];
  var somerc_default = {
    init: init9,
    forward: forward8,
    inverse: inverse8,
    names: names10
  };

  // node_modules/proj4/lib/projections/omerc.js
  var TOL = 1e-7;
  function isTypeA(P) {
    var typeAProjections = ["Hotine_Oblique_Mercator", "Hotine_Oblique_Mercator_variant_A", "Hotine_Oblique_Mercator_Azimuth_Natural_Origin"];
    var projectionName = typeof P.projName === "object" ? Object.keys(P.projName)[0] : P.projName;
    return "no_uoff" in P || "no_off" in P || typeAProjections.indexOf(projectionName) !== -1 || typeAProjections.indexOf(getNormalizedProjName(projectionName)) !== -1;
  }
  function init10() {
    var con, com, cosph0, D, F, H, L, sinph0, p, J, gamma = 0, gamma0, lamc = 0, lam1 = 0, lam2 = 0, phi1 = 0, phi2 = 0, alpha_c = 0;
    if (!this.k0) {
      this.k0 = 1;
    }
    this.no_off = isTypeA(this);
    this.no_rot = "no_rot" in this;
    var alp = false;
    if ("alpha" in this) {
      alp = true;
    }
    var gam = false;
    if ("rectified_grid_angle" in this) {
      gam = true;
    }
    if (alp) {
      alpha_c = this.alpha;
    }
    if (gam) {
      gamma = this.rectified_grid_angle;
      if (!alp) {
        alpha_c = 0;
        alp = true;
      }
    }
    if (alp || gam) {
      lamc = this.longc;
    } else {
      lam1 = this.long1;
      phi1 = this.lat1;
      lam2 = this.long2;
      phi2 = this.lat2;
      if (Math.abs(phi1 - phi2) <= TOL || (con = Math.abs(phi1)) <= TOL || Math.abs(con - HALF_PI) <= TOL || Math.abs(Math.abs(this.lat0) - HALF_PI) <= TOL || Math.abs(Math.abs(phi2) - HALF_PI) <= TOL) {
        throw new Error();
      }
    }
    var one_es = 1 - this.es;
    com = Math.sqrt(one_es);
    if (Math.abs(this.lat0) > EPSLN) {
      sinph0 = Math.sin(this.lat0);
      cosph0 = Math.cos(this.lat0);
      con = 1 - this.es * sinph0 * sinph0;
      this.B = cosph0 * cosph0;
      this.B = Math.sqrt(1 + this.es * this.B * this.B / one_es);
      this.A = this.B * this.k0 * com / con;
      D = this.B * com / (cosph0 * Math.sqrt(con));
      F = D * D - 1;
      if (F <= 0) {
        F = 0;
      } else {
        F = Math.sqrt(F);
        if (this.lat0 < 0) {
          F = -F;
        }
      }
      this.E = F += D;
      this.E *= Math.pow(tsfnz_default(this.e, this.lat0, sinph0), this.B);
    } else {
      this.B = 1 / com;
      this.A = this.k0;
      this.E = D = F = 1;
    }
    if (alp || gam) {
      if (alp) {
        gamma0 = Math.asin(Math.sin(alpha_c) / D);
        if (!gam) {
          gamma = alpha_c;
        }
      } else {
        gamma0 = gamma;
        alpha_c = Math.asin(D * Math.sin(gamma0));
      }
      this.lam0 = lamc - Math.asin(0.5 * (F - 1 / F) * Math.tan(gamma0)) / this.B;
    } else {
      H = Math.pow(tsfnz_default(this.e, phi1, Math.sin(phi1)), this.B);
      L = Math.pow(tsfnz_default(this.e, phi2, Math.sin(phi2)), this.B);
      F = this.E / H;
      p = (L - H) / (L + H);
      J = this.E * this.E;
      J = (J - L * H) / (J + L * H);
      con = lam1 - lam2;
      if (con < -Math.PI) {
        lam2 -= TWO_PI;
      } else if (con > Math.PI) {
        lam2 += TWO_PI;
      }
      this.lam0 = adjust_lon_default(0.5 * (lam1 + lam2) - Math.atan(J * Math.tan(0.5 * this.B * (lam1 - lam2)) / p) / this.B, this.over);
      gamma0 = Math.atan(2 * Math.sin(this.B * adjust_lon_default(lam1 - this.lam0, this.over)) / (F - 1 / F));
      gamma = alpha_c = Math.asin(D * Math.sin(gamma0));
    }
    this.singam = Math.sin(gamma0);
    this.cosgam = Math.cos(gamma0);
    this.sinrot = Math.sin(gamma);
    this.cosrot = Math.cos(gamma);
    this.rB = 1 / this.B;
    this.ArB = this.A * this.rB;
    this.BrA = 1 / this.ArB;
    if (this.no_off) {
      this.u_0 = 0;
    } else {
      this.u_0 = Math.abs(this.ArB * Math.atan(Math.sqrt(D * D - 1) / Math.cos(alpha_c)));
      if (this.lat0 < 0) {
        this.u_0 = -this.u_0;
      }
    }
    F = 0.5 * gamma0;
    this.v_pole_n = this.ArB * Math.log(Math.tan(FORTPI - F));
    this.v_pole_s = this.ArB * Math.log(Math.tan(FORTPI + F));
  }
  function forward9(p) {
    var coords = {};
    var S, T, U, V2, W, temp, u, v;
    p.x = p.x - this.lam0;
    if (Math.abs(Math.abs(p.y) - HALF_PI) > EPSLN) {
      W = this.E / Math.pow(tsfnz_default(this.e, p.y, Math.sin(p.y)), this.B);
      temp = 1 / W;
      S = 0.5 * (W - temp);
      T = 0.5 * (W + temp);
      V2 = Math.sin(this.B * p.x);
      U = (S * this.singam - V2 * this.cosgam) / T;
      if (Math.abs(Math.abs(U) - 1) < EPSLN) {
        throw new Error();
      }
      v = 0.5 * this.ArB * Math.log((1 - U) / (1 + U));
      temp = Math.cos(this.B * p.x);
      if (Math.abs(temp) < TOL) {
        u = this.A * p.x;
      } else {
        u = this.ArB * Math.atan2(S * this.cosgam + V2 * this.singam, temp);
      }
    } else {
      v = p.y > 0 ? this.v_pole_n : this.v_pole_s;
      u = this.ArB * p.y;
    }
    if (this.no_rot) {
      coords.x = u;
      coords.y = v;
    } else {
      u -= this.u_0;
      coords.x = v * this.cosrot + u * this.sinrot;
      coords.y = u * this.cosrot - v * this.sinrot;
    }
    coords.x = this.a * coords.x + this.x0;
    coords.y = this.a * coords.y + this.y0;
    if (p.z !== void 0) {
      coords.z = p.z;
    }
    if (p.m !== void 0) {
      coords.m = p.m;
    }
    return coords;
  }
  function inverse9(p) {
    var u, v, Qp, Sp, Tp, Vp, Up;
    var coords = {};
    p.x = (p.x - this.x0) * (1 / this.a);
    p.y = (p.y - this.y0) * (1 / this.a);
    if (this.no_rot) {
      v = p.y;
      u = p.x;
    } else {
      v = p.x * this.cosrot - p.y * this.sinrot;
      u = p.y * this.cosrot + p.x * this.sinrot + this.u_0;
    }
    Qp = Math.exp(-this.BrA * v);
    Sp = 0.5 * (Qp - 1 / Qp);
    Tp = 0.5 * (Qp + 1 / Qp);
    Vp = Math.sin(this.BrA * u);
    Up = (Vp * this.cosgam + Sp * this.singam) / Tp;
    if (Math.abs(Math.abs(Up) - 1) < EPSLN) {
      coords.x = 0;
      coords.y = Up < 0 ? -HALF_PI : HALF_PI;
    } else {
      coords.y = this.E / Math.sqrt((1 + Up) / (1 - Up));
      coords.y = phi2z_default(this.e, Math.pow(coords.y, 1 / this.B));
      if (coords.y === Infinity) {
        throw new Error();
      }
      coords.x = -this.rB * Math.atan2(Sp * this.cosgam - Vp * this.singam, Math.cos(this.BrA * u));
    }
    coords.x += this.lam0;
    if (p.z !== void 0) {
      coords.z = p.z;
    }
    if (p.m !== void 0) {
      coords.m = p.m;
    }
    return coords;
  }
  var names11 = ["Hotine_Oblique_Mercator", "Hotine Oblique Mercator", "Hotine_Oblique_Mercator_variant_A", "Hotine_Oblique_Mercator_Variant_B", "Hotine_Oblique_Mercator_Azimuth_Natural_Origin", "Hotine_Oblique_Mercator_Two_Point_Natural_Origin", "Hotine_Oblique_Mercator_Azimuth_Center", "Oblique_Mercator", "omerc"];
  var omerc_default = {
    init: init10,
    forward: forward9,
    inverse: inverse9,
    names: names11
  };

  // node_modules/proj4/lib/projections/lcc.js
  function init11() {
    if (!this.lat2) {
      this.lat2 = this.lat1;
    }
    if (!this.k0) {
      this.k0 = 1;
    }
    this.x0 = this.x0 || 0;
    this.y0 = this.y0 || 0;
    this.long0 = this.long0 || 0;
    if (Math.abs(this.lat1 + this.lat2) < EPSLN) {
      return;
    }
    var temp = this.b / this.a;
    this.e = Math.sqrt(1 - temp * temp);
    var sin1 = Math.sin(this.lat1);
    var cos1 = Math.cos(this.lat1);
    var ms1 = msfnz_default(this.e, sin1, cos1);
    var ts1 = tsfnz_default(this.e, this.lat1, sin1);
    var sin2 = Math.sin(this.lat2);
    var cos2 = Math.cos(this.lat2);
    var ms2 = msfnz_default(this.e, sin2, cos2);
    var ts2 = tsfnz_default(this.e, this.lat2, sin2);
    var ts0 = tsfnz_default(this.e, this.lat0, Math.sin(this.lat0));
    if (Math.abs(this.lat1 - this.lat2) > EPSLN) {
      this.ns = Math.log(ms1 / ms2) / Math.log(ts1 / ts2);
    } else {
      this.ns = sin1;
    }
    if (isNaN(this.ns)) {
      this.ns = sin1;
    }
    this.f0 = ms1 / (this.ns * Math.pow(ts1, this.ns));
    this.rh = Math.abs(Math.abs(this.lat0) - HALF_PI) < EPSLN ? 0 : this.a * this.f0 * Math.pow(ts0, this.ns);
    if (!this.title) {
      this.title = "Lambert Conformal Conic";
    }
  }
  function forward10(p) {
    var lon = p.x;
    var lat = p.y;
    if (Math.abs(2 * Math.abs(lat) - Math.PI) <= EPSLN) {
      lat = sign_default(lat) * (HALF_PI - 2 * EPSLN);
    }
    var con = Math.abs(Math.abs(lat) - HALF_PI);
    var ts, rh1;
    if (con > EPSLN) {
      ts = tsfnz_default(this.e, lat, Math.sin(lat));
      rh1 = this.a * this.f0 * Math.pow(ts, this.ns);
    } else {
      con = lat * this.ns;
      if (con <= 0) {
        return null;
      }
      rh1 = 0;
    }
    var theta = this.ns * adjust_lon_default(lon - this.long0, this.over);
    p.x = this.k0 * (rh1 * Math.sin(theta)) + this.x0;
    p.y = this.k0 * (this.rh - rh1 * Math.cos(theta)) + this.y0;
    return p;
  }
  function inverse10(p) {
    var rh1, con, ts;
    var lat, lon;
    var x = (p.x - this.x0) / this.k0;
    var y = this.rh - (p.y - this.y0) / this.k0;
    if (this.ns > 0) {
      rh1 = Math.sqrt(x * x + y * y);
      con = 1;
    } else {
      rh1 = -Math.sqrt(x * x + y * y);
      con = -1;
    }
    var theta = 0;
    if (rh1 !== 0) {
      theta = Math.atan2(con * x, con * y);
    }
    if (rh1 !== 0 || this.ns > 0) {
      con = 1 / this.ns;
      ts = Math.pow(rh1 / (this.a * this.f0), con);
      lat = phi2z_default(this.e, ts);
      if (lat === -9999) {
        return null;
      }
    } else {
      lat = -HALF_PI;
    }
    lon = adjust_lon_default(theta / this.ns + this.long0, this.over);
    p.x = lon;
    p.y = lat;
    return p;
  }
  var names12 = [
    "Lambert Tangential Conformal Conic Projection",
    "Lambert_Conformal_Conic",
    "Lambert_Conformal_Conic_1SP",
    "Lambert_Conformal_Conic_2SP",
    "lcc",
    "Lambert Conic Conformal (1SP)",
    "Lambert Conic Conformal (2SP)"
  ];
  var lcc_default = {
    init: init11,
    forward: forward10,
    inverse: inverse10,
    names: names12
  };

  // node_modules/proj4/lib/projections/krovak.js
  function init12() {
    this.a = 6377397155e-3;
    this.es = 0.006674372230614;
    this.e = Math.sqrt(this.es);
    if (!this.lat0) {
      this.lat0 = 0.863937979737193;
    }
    if (!this.long0) {
      this.long0 = 0.7417649320975901 - 0.308341501185665;
    }
    if (!this.k0) {
      this.k0 = 0.9999;
    }
    this.s45 = 0.785398163397448;
    this.s90 = 2 * this.s45;
    this.fi0 = this.lat0;
    this.e2 = this.es;
    this.e = Math.sqrt(this.e2);
    this.alfa = Math.sqrt(1 + this.e2 * Math.pow(Math.cos(this.fi0), 4) / (1 - this.e2));
    this.uq = 1.04216856380474;
    this.u0 = Math.asin(Math.sin(this.fi0) / this.alfa);
    this.g = Math.pow((1 + this.e * Math.sin(this.fi0)) / (1 - this.e * Math.sin(this.fi0)), this.alfa * this.e / 2);
    this.k = Math.tan(this.u0 / 2 + this.s45) / Math.pow(Math.tan(this.fi0 / 2 + this.s45), this.alfa) * this.g;
    this.k1 = this.k0;
    this.n0 = this.a * Math.sqrt(1 - this.e2) / (1 - this.e2 * Math.pow(Math.sin(this.fi0), 2));
    this.s0 = 1.37008346281555;
    this.n = Math.sin(this.s0);
    this.ro0 = this.k1 * this.n0 / Math.tan(this.s0);
    this.ad = this.s90 - this.uq;
  }
  function forward11(p) {
    var gfi, u, deltav, s, d, eps, ro;
    var lon = p.x;
    var lat = p.y;
    var delta_lon = adjust_lon_default(lon - this.long0, this.over);
    gfi = Math.pow((1 + this.e * Math.sin(lat)) / (1 - this.e * Math.sin(lat)), this.alfa * this.e / 2);
    u = 2 * (Math.atan(this.k * Math.pow(Math.tan(lat / 2 + this.s45), this.alfa) / gfi) - this.s45);
    deltav = -delta_lon * this.alfa;
    s = Math.asin(Math.cos(this.ad) * Math.sin(u) + Math.sin(this.ad) * Math.cos(u) * Math.cos(deltav));
    d = Math.asin(Math.cos(u) * Math.sin(deltav) / Math.cos(s));
    eps = this.n * d;
    ro = this.ro0 * Math.pow(Math.tan(this.s0 / 2 + this.s45), this.n) / Math.pow(Math.tan(s / 2 + this.s45), this.n);
    p.y = ro * Math.cos(eps) / 1;
    p.x = ro * Math.sin(eps) / 1;
    if (!this.czech) {
      p.y *= -1;
      p.x *= -1;
    }
    return p;
  }
  function inverse11(p) {
    var u, deltav, s, d, eps, ro, fi1;
    var ok;
    var tmp = p.x;
    p.x = p.y;
    p.y = tmp;
    if (!this.czech) {
      p.y *= -1;
      p.x *= -1;
    }
    ro = Math.sqrt(p.x * p.x + p.y * p.y);
    eps = Math.atan2(p.y, p.x);
    d = eps / Math.sin(this.s0);
    s = 2 * (Math.atan(Math.pow(this.ro0 / ro, 1 / this.n) * Math.tan(this.s0 / 2 + this.s45)) - this.s45);
    u = Math.asin(Math.cos(this.ad) * Math.sin(s) - Math.sin(this.ad) * Math.cos(s) * Math.cos(d));
    deltav = Math.asin(Math.cos(s) * Math.sin(d) / Math.cos(u));
    p.x = this.long0 - deltav / this.alfa;
    fi1 = u;
    ok = 0;
    var iter = 0;
    do {
      p.y = 2 * (Math.atan(Math.pow(this.k, -1 / this.alfa) * Math.pow(Math.tan(u / 2 + this.s45), 1 / this.alfa) * Math.pow((1 + this.e * Math.sin(fi1)) / (1 - this.e * Math.sin(fi1)), this.e / 2)) - this.s45);
      if (Math.abs(fi1 - p.y) < 1e-10) {
        ok = 1;
      }
      fi1 = p.y;
      iter += 1;
    } while (ok === 0 && iter < 15);
    if (iter >= 15) {
      return null;
    }
    return p;
  }
  var names13 = ["Krovak", "Krovak Modified", "Krovak (North Orientated)", "Krovak Modified (North Orientated)", "krovak"];
  var krovak_default = {
    init: init12,
    forward: forward11,
    inverse: inverse11,
    names: names13
  };

  // node_modules/proj4/lib/common/mlfn.js
  function mlfn_default(e0, e1, e2, e3, phi) {
    return e0 * phi - e1 * Math.sin(2 * phi) + e2 * Math.sin(4 * phi) - e3 * Math.sin(6 * phi);
  }

  // node_modules/proj4/lib/common/e0fn.js
  function e0fn_default(x) {
    return 1 - 0.25 * x * (1 + x / 16 * (3 + 1.25 * x));
  }

  // node_modules/proj4/lib/common/e1fn.js
  function e1fn_default(x) {
    return 0.375 * x * (1 + 0.25 * x * (1 + 0.46875 * x));
  }

  // node_modules/proj4/lib/common/e2fn.js
  function e2fn_default(x) {
    return 0.05859375 * x * x * (1 + 0.75 * x);
  }

  // node_modules/proj4/lib/common/e3fn.js
  function e3fn_default(x) {
    return x * x * x * (35 / 3072);
  }

  // node_modules/proj4/lib/common/gN.js
  function gN_default(a, e, sinphi) {
    var temp = e * sinphi;
    return a / Math.sqrt(1 - temp * temp);
  }

  // node_modules/proj4/lib/common/adjust_lat.js
  function adjust_lat_default(x) {
    return Math.abs(x) < HALF_PI ? x : x - sign_default(x) * Math.PI;
  }

  // node_modules/proj4/lib/common/imlfn.js
  function imlfn_default(ml, e0, e1, e2, e3) {
    var phi;
    var dphi;
    phi = ml / e0;
    for (var i = 0; i < 15; i++) {
      dphi = (ml - (e0 * phi - e1 * Math.sin(2 * phi) + e2 * Math.sin(4 * phi) - e3 * Math.sin(6 * phi))) / (e0 - 2 * e1 * Math.cos(2 * phi) + 4 * e2 * Math.cos(4 * phi) - 6 * e3 * Math.cos(6 * phi));
      phi += dphi;
      if (Math.abs(dphi) <= 1e-10) {
        return phi;
      }
    }
    return NaN;
  }

  // node_modules/proj4/lib/projections/cass.js
  function init13() {
    if (!this.sphere) {
      this.e0 = e0fn_default(this.es);
      this.e1 = e1fn_default(this.es);
      this.e2 = e2fn_default(this.es);
      this.e3 = e3fn_default(this.es);
      this.ml0 = this.a * mlfn_default(this.e0, this.e1, this.e2, this.e3, this.lat0);
    }
  }
  function forward12(p) {
    var x, y;
    var lam = p.x;
    var phi = p.y;
    lam = adjust_lon_default(lam - this.long0, this.over);
    if (this.sphere) {
      x = this.a * Math.asin(Math.cos(phi) * Math.sin(lam));
      y = this.a * (Math.atan2(Math.tan(phi), Math.cos(lam)) - this.lat0);
    } else {
      var sinphi = Math.sin(phi);
      var cosphi = Math.cos(phi);
      var nl = gN_default(this.a, this.e, sinphi);
      var tl = Math.tan(phi) * Math.tan(phi);
      var al = lam * Math.cos(phi);
      var asq = al * al;
      var cl = this.es * cosphi * cosphi / (1 - this.es);
      var ml = this.a * mlfn_default(this.e0, this.e1, this.e2, this.e3, phi);
      x = nl * al * (1 - asq * tl * (1 / 6 - (8 - tl + 8 * cl) * asq / 120));
      y = ml - this.ml0 + nl * sinphi / cosphi * asq * (0.5 + (5 - tl + 6 * cl) * asq / 24);
    }
    p.x = x + this.x0;
    p.y = y + this.y0;
    return p;
  }
  function inverse12(p) {
    p.x -= this.x0;
    p.y -= this.y0;
    var x = p.x / this.a;
    var y = p.y / this.a;
    var phi, lam;
    if (this.sphere) {
      var dd = y + this.lat0;
      phi = Math.asin(Math.sin(dd) * Math.cos(x));
      lam = Math.atan2(Math.tan(x), Math.cos(dd));
    } else {
      var ml1 = this.ml0 / this.a + y;
      var phi1 = imlfn_default(ml1, this.e0, this.e1, this.e2, this.e3);
      if (Math.abs(Math.abs(phi1) - HALF_PI) <= EPSLN) {
        p.x = this.long0;
        p.y = HALF_PI;
        if (y < 0) {
          p.y *= -1;
        }
        return p;
      }
      var nl1 = gN_default(this.a, this.e, Math.sin(phi1));
      var rl1 = nl1 * nl1 * nl1 / this.a / this.a * (1 - this.es);
      var tl1 = Math.pow(Math.tan(phi1), 2);
      var dl = x * this.a / nl1;
      var dsq = dl * dl;
      phi = phi1 - nl1 * Math.tan(phi1) / rl1 * dl * dl * (0.5 - (1 + 3 * tl1) * dl * dl / 24);
      lam = dl * (1 - dsq * (tl1 / 3 + (1 + 3 * tl1) * tl1 * dsq / 15)) / Math.cos(phi1);
    }
    p.x = adjust_lon_default(lam + this.long0, this.over);
    p.y = adjust_lat_default(phi);
    return p;
  }
  var names14 = ["Cassini", "Cassini_Soldner", "cass"];
  var cass_default = {
    init: init13,
    forward: forward12,
    inverse: inverse12,
    names: names14
  };

  // node_modules/proj4/lib/common/qsfnz.js
  function qsfnz_default(eccent, sinphi) {
    var con;
    if (eccent > 1e-7) {
      con = eccent * sinphi;
      return (1 - eccent * eccent) * (sinphi / (1 - con * con) - 0.5 / eccent * Math.log((1 - con) / (1 + con)));
    } else {
      return 2 * sinphi;
    }
  }

  // node_modules/proj4/lib/common/authset.js
  var P00 = 0.3333333333333333;
  var P01 = 0.17222222222222222;
  var P02 = 0.10257936507936508;
  var P10 = 0.06388888888888888;
  var P11 = 0.0664021164021164;
  var P20 = 0.016415012942191543;
  function authset(es) {
    var t;
    var APA = [];
    APA[0] = es * P00;
    t = es * es;
    APA[0] += t * P01;
    APA[1] = t * P10;
    t *= es;
    APA[0] += t * P02;
    APA[1] += t * P11;
    APA[2] = t * P20;
    return APA;
  }

  // node_modules/proj4/lib/common/authlat.js
  function authlat(beta, APA) {
    var t = beta + beta;
    return beta + APA[0] * Math.sin(t) + APA[1] * Math.sin(t + t) + APA[2] * Math.sin(t + t + t);
  }

  // node_modules/proj4/lib/projections/laea.js
  var S_POLE = 1;
  var N_POLE = 2;
  var EQUIT = 3;
  var OBLIQ = 4;
  function init14() {
    var t = Math.abs(this.lat0);
    if (Math.abs(t - HALF_PI) < EPSLN) {
      this.mode = this.lat0 < 0 ? S_POLE : N_POLE;
    } else if (Math.abs(t) < EPSLN) {
      this.mode = EQUIT;
    } else {
      this.mode = OBLIQ;
    }
    if (this.es > 0) {
      var sinphi;
      this.qp = qsfnz_default(this.e, 1);
      this.mmf = 0.5 / (1 - this.es);
      this.apa = authset(this.es);
      switch (this.mode) {
        case N_POLE:
          this.dd = 1;
          break;
        case S_POLE:
          this.dd = 1;
          break;
        case EQUIT:
          this.rq = Math.sqrt(0.5 * this.qp);
          this.dd = 1 / this.rq;
          this.xmf = 1;
          this.ymf = 0.5 * this.qp;
          break;
        case OBLIQ:
          this.rq = Math.sqrt(0.5 * this.qp);
          sinphi = Math.sin(this.lat0);
          this.sinb1 = qsfnz_default(this.e, sinphi) / this.qp;
          this.cosb1 = Math.sqrt(1 - this.sinb1 * this.sinb1);
          this.dd = Math.cos(this.lat0) / (Math.sqrt(1 - this.es * sinphi * sinphi) * this.rq * this.cosb1);
          this.ymf = (this.xmf = this.rq) / this.dd;
          this.xmf *= this.dd;
          break;
      }
    } else {
      if (this.mode === OBLIQ) {
        this.sinph0 = Math.sin(this.lat0);
        this.cosph0 = Math.cos(this.lat0);
      }
    }
  }
  function forward13(p) {
    var x, y, coslam, sinlam, sinphi, q, sinb, cosb, b, cosphi;
    var lam = p.x;
    var phi = p.y;
    lam = adjust_lon_default(lam - this.long0, this.over);
    if (this.sphere) {
      sinphi = Math.sin(phi);
      cosphi = Math.cos(phi);
      coslam = Math.cos(lam);
      if (this.mode === this.OBLIQ || this.mode === this.EQUIT) {
        y = this.mode === this.EQUIT ? 1 + cosphi * coslam : 1 + this.sinph0 * sinphi + this.cosph0 * cosphi * coslam;
        if (y <= EPSLN) {
          return null;
        }
        y = Math.sqrt(2 / y);
        x = y * cosphi * Math.sin(lam);
        y *= this.mode === this.EQUIT ? sinphi : this.cosph0 * sinphi - this.sinph0 * cosphi * coslam;
      } else if (this.mode === this.N_POLE || this.mode === this.S_POLE) {
        if (this.mode === this.N_POLE) {
          coslam = -coslam;
        }
        if (Math.abs(phi + this.lat0) < EPSLN) {
          return null;
        }
        y = FORTPI - phi * 0.5;
        y = 2 * (this.mode === this.S_POLE ? Math.cos(y) : Math.sin(y));
        x = y * Math.sin(lam);
        y *= coslam;
      }
    } else {
      sinb = 0;
      cosb = 0;
      b = 0;
      coslam = Math.cos(lam);
      sinlam = Math.sin(lam);
      sinphi = Math.sin(phi);
      q = qsfnz_default(this.e, sinphi);
      if (this.mode === this.OBLIQ || this.mode === this.EQUIT) {
        sinb = q / this.qp;
        cosb = Math.sqrt(1 - sinb * sinb);
      }
      switch (this.mode) {
        case this.OBLIQ:
          b = 1 + this.sinb1 * sinb + this.cosb1 * cosb * coslam;
          break;
        case this.EQUIT:
          b = 1 + cosb * coslam;
          break;
        case this.N_POLE:
          b = HALF_PI + phi;
          q = this.qp - q;
          break;
        case this.S_POLE:
          b = phi - HALF_PI;
          q = this.qp + q;
          break;
      }
      if (Math.abs(b) < EPSLN) {
        return null;
      }
      switch (this.mode) {
        case this.OBLIQ:
        case this.EQUIT:
          b = Math.sqrt(2 / b);
          if (this.mode === this.OBLIQ) {
            y = this.ymf * b * (this.cosb1 * sinb - this.sinb1 * cosb * coslam);
          } else {
            y = (b = Math.sqrt(2 / (1 + cosb * coslam))) * sinb * this.ymf;
          }
          x = this.xmf * b * cosb * sinlam;
          break;
        case this.N_POLE:
        case this.S_POLE:
          if (q >= 0) {
            x = (b = Math.sqrt(q)) * sinlam;
            y = coslam * (this.mode === this.S_POLE ? b : -b);
          } else {
            x = y = 0;
          }
          break;
      }
    }
    p.x = this.a * x + this.x0;
    p.y = this.a * y + this.y0;
    return p;
  }
  function inverse13(p) {
    p.x -= this.x0;
    p.y -= this.y0;
    var x = p.x / this.a;
    var y = p.y / this.a;
    var lam, phi, cCe, sCe, q, rho, ab;
    if (this.sphere) {
      var cosz = 0, rh, sinz = 0;
      rh = Math.sqrt(x * x + y * y);
      phi = rh * 0.5;
      if (phi > 1) {
        return null;
      }
      phi = 2 * Math.asin(phi);
      if (this.mode === this.OBLIQ || this.mode === this.EQUIT) {
        sinz = Math.sin(phi);
        cosz = Math.cos(phi);
      }
      switch (this.mode) {
        case this.EQUIT:
          phi = Math.abs(rh) <= EPSLN ? 0 : Math.asin(y * sinz / rh);
          x *= sinz;
          y = cosz * rh;
          break;
        case this.OBLIQ:
          phi = Math.abs(rh) <= EPSLN ? this.lat0 : Math.asin(cosz * this.sinph0 + y * sinz * this.cosph0 / rh);
          x *= sinz * this.cosph0;
          y = (cosz - Math.sin(phi) * this.sinph0) * rh;
          break;
        case this.N_POLE:
          y = -y;
          phi = HALF_PI - phi;
          break;
        case this.S_POLE:
          phi -= HALF_PI;
          break;
      }
      lam = y === 0 && (this.mode === this.EQUIT || this.mode === this.OBLIQ) ? 0 : Math.atan2(x, y);
    } else {
      ab = 0;
      if (this.mode === this.OBLIQ || this.mode === this.EQUIT) {
        x /= this.dd;
        y *= this.dd;
        rho = Math.sqrt(x * x + y * y);
        if (rho < EPSLN) {
          p.x = this.long0;
          p.y = this.lat0;
          return p;
        }
        sCe = 2 * Math.asin(0.5 * rho / this.rq);
        cCe = Math.cos(sCe);
        x *= sCe = Math.sin(sCe);
        if (this.mode === this.OBLIQ) {
          ab = cCe * this.sinb1 + y * sCe * this.cosb1 / rho;
          q = this.qp * ab;
          y = rho * this.cosb1 * cCe - y * this.sinb1 * sCe;
        } else {
          ab = y * sCe / rho;
          q = this.qp * ab;
          y = rho * cCe;
        }
      } else if (this.mode === this.N_POLE || this.mode === this.S_POLE) {
        if (this.mode === this.N_POLE) {
          y = -y;
        }
        q = x * x + y * y;
        if (!q) {
          p.x = this.long0;
          p.y = this.lat0;
          return p;
        }
        ab = 1 - q / this.qp;
        if (this.mode === this.S_POLE) {
          ab = -ab;
        }
      }
      lam = Math.atan2(x, y);
      phi = authlat(Math.asin(ab), this.apa);
    }
    p.x = adjust_lon_default(this.long0 + lam, this.over);
    p.y = phi;
    return p;
  }
  var names15 = ["Lambert Azimuthal Equal Area", "Lambert_Azimuthal_Equal_Area", "laea"];
  var laea_default = {
    init: init14,
    forward: forward13,
    inverse: inverse13,
    names: names15,
    S_POLE,
    N_POLE,
    EQUIT,
    OBLIQ
  };

  // node_modules/proj4/lib/common/asinz.js
  function asinz_default(x) {
    if (Math.abs(x) > 1) {
      x = x > 1 ? 1 : -1;
    }
    return Math.asin(x);
  }

  // node_modules/proj4/lib/projections/aea.js
  function init15() {
    if (Math.abs(this.lat1 + this.lat2) < EPSLN) {
      return;
    }
    this.temp = this.b / this.a;
    this.es = 1 - Math.pow(this.temp, 2);
    this.e3 = Math.sqrt(this.es);
    this.sin_po = Math.sin(this.lat1);
    this.cos_po = Math.cos(this.lat1);
    this.t1 = this.sin_po;
    this.con = this.sin_po;
    this.ms1 = msfnz_default(this.e3, this.sin_po, this.cos_po);
    this.qs1 = qsfnz_default(this.e3, this.sin_po);
    this.sin_po = Math.sin(this.lat2);
    this.cos_po = Math.cos(this.lat2);
    this.t2 = this.sin_po;
    this.ms2 = msfnz_default(this.e3, this.sin_po, this.cos_po);
    this.qs2 = qsfnz_default(this.e3, this.sin_po);
    this.sin_po = Math.sin(this.lat0);
    this.cos_po = Math.cos(this.lat0);
    this.t3 = this.sin_po;
    this.qs0 = qsfnz_default(this.e3, this.sin_po);
    if (Math.abs(this.lat1 - this.lat2) > EPSLN) {
      this.ns0 = (this.ms1 * this.ms1 - this.ms2 * this.ms2) / (this.qs2 - this.qs1);
    } else {
      this.ns0 = this.con;
    }
    this.c = this.ms1 * this.ms1 + this.ns0 * this.qs1;
    this.rh = this.a * Math.sqrt(this.c - this.ns0 * this.qs0) / this.ns0;
  }
  function forward14(p) {
    var lon = p.x;
    var lat = p.y;
    this.sin_phi = Math.sin(lat);
    this.cos_phi = Math.cos(lat);
    var qs = qsfnz_default(this.e3, this.sin_phi);
    var rh1 = this.a * Math.sqrt(this.c - this.ns0 * qs) / this.ns0;
    var theta = this.ns0 * adjust_lon_default(lon - this.long0, this.over);
    var x = rh1 * Math.sin(theta) + this.x0;
    var y = this.rh - rh1 * Math.cos(theta) + this.y0;
    p.x = x;
    p.y = y;
    return p;
  }
  function inverse14(p) {
    var rh1, qs, con, theta, lon, lat;
    p.x -= this.x0;
    p.y = this.rh - p.y + this.y0;
    if (this.ns0 >= 0) {
      rh1 = Math.sqrt(p.x * p.x + p.y * p.y);
      con = 1;
    } else {
      rh1 = -Math.sqrt(p.x * p.x + p.y * p.y);
      con = -1;
    }
    theta = 0;
    if (rh1 !== 0) {
      theta = Math.atan2(con * p.x, con * p.y);
    }
    con = rh1 * this.ns0 / this.a;
    if (this.sphere) {
      lat = Math.asin((this.c - con * con) / (2 * this.ns0));
    } else {
      qs = (this.c - con * con) / this.ns0;
      lat = this.phi1z(this.e3, qs);
    }
    lon = adjust_lon_default(theta / this.ns0 + this.long0, this.over);
    p.x = lon;
    p.y = lat;
    return p;
  }
  function phi1z(eccent, qs) {
    var sinphi, cosphi, con, com, dphi;
    var phi = asinz_default(0.5 * qs);
    if (eccent < EPSLN) {
      return phi;
    }
    var eccnts = eccent * eccent;
    for (var i = 1; i <= 25; i++) {
      sinphi = Math.sin(phi);
      cosphi = Math.cos(phi);
      con = eccent * sinphi;
      com = 1 - con * con;
      dphi = 0.5 * com * com / cosphi * (qs / (1 - eccnts) - sinphi / com + 0.5 / eccent * Math.log((1 - con) / (1 + con)));
      phi = phi + dphi;
      if (Math.abs(dphi) <= 1e-7) {
        return phi;
      }
    }
    return null;
  }
  var names16 = ["Albers_Conic_Equal_Area", "Albers_Equal_Area", "Albers", "aea"];
  var aea_default = {
    init: init15,
    forward: forward14,
    inverse: inverse14,
    names: names16,
    phi1z
  };

  // node_modules/proj4/lib/projections/gnom.js
  function init16() {
    this.sin_p14 = Math.sin(this.lat0);
    this.cos_p14 = Math.cos(this.lat0);
    this.infinity_dist = 1e3 * this.a;
    this.rc = 1;
  }
  function forward15(p) {
    var sinphi, cosphi;
    var dlon;
    var coslon;
    var ksp;
    var g;
    var x, y;
    var lon = p.x;
    var lat = p.y;
    dlon = adjust_lon_default(lon - this.long0, this.over);
    sinphi = Math.sin(lat);
    cosphi = Math.cos(lat);
    coslon = Math.cos(dlon);
    g = this.sin_p14 * sinphi + this.cos_p14 * cosphi * coslon;
    ksp = 1;
    if (g > 0 || Math.abs(g) <= EPSLN) {
      x = this.x0 + this.a * ksp * cosphi * Math.sin(dlon) / g;
      y = this.y0 + this.a * ksp * (this.cos_p14 * sinphi - this.sin_p14 * cosphi * coslon) / g;
    } else {
      x = this.x0 + this.infinity_dist * cosphi * Math.sin(dlon);
      y = this.y0 + this.infinity_dist * (this.cos_p14 * sinphi - this.sin_p14 * cosphi * coslon);
    }
    p.x = x;
    p.y = y;
    return p;
  }
  function inverse15(p) {
    var rh;
    var sinc, cosc;
    var c;
    var lon, lat;
    p.x = (p.x - this.x0) / this.a;
    p.y = (p.y - this.y0) / this.a;
    p.x /= this.k0;
    p.y /= this.k0;
    if (rh = Math.sqrt(p.x * p.x + p.y * p.y)) {
      c = Math.atan2(rh, this.rc);
      sinc = Math.sin(c);
      cosc = Math.cos(c);
      lat = asinz_default(cosc * this.sin_p14 + p.y * sinc * this.cos_p14 / rh);
      lon = Math.atan2(p.x * sinc, rh * this.cos_p14 * cosc - p.y * this.sin_p14 * sinc);
      lon = adjust_lon_default(this.long0 + lon, this.over);
    } else {
      lat = this.phic0;
      lon = 0;
    }
    p.x = lon;
    p.y = lat;
    return p;
  }
  var names17 = ["gnom"];
  var gnom_default = {
    init: init16,
    forward: forward15,
    inverse: inverse15,
    names: names17
  };

  // node_modules/proj4/lib/common/iqsfnz.js
  function iqsfnz_default(eccent, q) {
    var temp = 1 - (1 - eccent * eccent) / (2 * eccent) * Math.log((1 - eccent) / (1 + eccent));
    if (Math.abs(Math.abs(q) - temp) < 1e-6) {
      if (q < 0) {
        return -1 * HALF_PI;
      } else {
        return HALF_PI;
      }
    }
    var phi = Math.asin(0.5 * q);
    var dphi;
    var sin_phi;
    var cos_phi;
    var con;
    for (var i = 0; i < 30; i++) {
      sin_phi = Math.sin(phi);
      cos_phi = Math.cos(phi);
      con = eccent * sin_phi;
      dphi = Math.pow(1 - con * con, 2) / (2 * cos_phi) * (q / (1 - eccent * eccent) - sin_phi / (1 - con * con) + 0.5 / eccent * Math.log((1 - con) / (1 + con)));
      phi += dphi;
      if (Math.abs(dphi) <= 1e-10) {
        return phi;
      }
    }
    return NaN;
  }

  // node_modules/proj4/lib/projections/cea.js
  function init17() {
    if (!this.sphere) {
      this.k0 = msfnz_default(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts));
    }
  }
  function forward16(p) {
    var lon = p.x;
    var lat = p.y;
    var x, y;
    var dlon = adjust_lon_default(lon - this.long0, this.over);
    if (this.sphere) {
      x = this.x0 + this.a * dlon * Math.cos(this.lat_ts);
      y = this.y0 + this.a * Math.sin(lat) / Math.cos(this.lat_ts);
    } else {
      var qs = qsfnz_default(this.e, Math.sin(lat));
      x = this.x0 + this.a * this.k0 * dlon;
      y = this.y0 + this.a * qs * 0.5 / this.k0;
    }
    p.x = x;
    p.y = y;
    return p;
  }
  function inverse16(p) {
    p.x -= this.x0;
    p.y -= this.y0;
    var lon, lat;
    if (this.sphere) {
      lon = adjust_lon_default(this.long0 + p.x / this.a / Math.cos(this.lat_ts), this.over);
      lat = Math.asin(p.y / this.a * Math.cos(this.lat_ts));
    } else {
      lat = iqsfnz_default(this.e, 2 * p.y * this.k0 / this.a);
      lon = adjust_lon_default(this.long0 + p.x / (this.a * this.k0), this.over);
    }
    p.x = lon;
    p.y = lat;
    return p;
  }
  var names18 = ["cea"];
  var cea_default = {
    init: init17,
    forward: forward16,
    inverse: inverse16,
    names: names18
  };

  // node_modules/proj4/lib/projections/eqc.js
  function init18() {
    this.x0 = this.x0 || 0;
    this.y0 = this.y0 || 0;
    this.lat0 = this.lat0 || 0;
    this.long0 = this.long0 || 0;
    this.lat_ts = this.lat_ts || 0;
    this.title = this.title || "Equidistant Cylindrical (Plate Carre)";
    this.rc = Math.cos(this.lat_ts);
  }
  function forward17(p) {
    var lon = p.x;
    var lat = p.y;
    var dlon = adjust_lon_default(lon - this.long0, this.over);
    var dlat = adjust_lat_default(lat - this.lat0);
    p.x = this.x0 + this.a * dlon * this.rc;
    p.y = this.y0 + this.a * dlat;
    return p;
  }
  function inverse17(p) {
    var x = p.x;
    var y = p.y;
    p.x = adjust_lon_default(this.long0 + (x - this.x0) / (this.a * this.rc), this.over);
    p.y = adjust_lat_default(this.lat0 + (y - this.y0) / this.a);
    return p;
  }
  var names19 = ["Equirectangular", "Equidistant_Cylindrical", "Equidistant_Cylindrical_Spherical", "eqc"];
  var eqc_default = {
    init: init18,
    forward: forward17,
    inverse: inverse17,
    names: names19
  };

  // node_modules/proj4/lib/projections/poly.js
  var MAX_ITER3 = 20;
  function init19() {
    this.temp = this.b / this.a;
    this.es = 1 - Math.pow(this.temp, 2);
    this.e = Math.sqrt(this.es);
    this.e0 = e0fn_default(this.es);
    this.e1 = e1fn_default(this.es);
    this.e2 = e2fn_default(this.es);
    this.e3 = e3fn_default(this.es);
    this.ml0 = this.a * mlfn_default(this.e0, this.e1, this.e2, this.e3, this.lat0);
  }
  function forward18(p) {
    var lon = p.x;
    var lat = p.y;
    var x, y, el;
    var dlon = adjust_lon_default(lon - this.long0, this.over);
    el = dlon * Math.sin(lat);
    if (this.sphere) {
      if (Math.abs(lat) <= EPSLN) {
        x = this.a * dlon;
        y = -1 * this.a * this.lat0;
      } else {
        x = this.a * Math.sin(el) / Math.tan(lat);
        y = this.a * (adjust_lat_default(lat - this.lat0) + (1 - Math.cos(el)) / Math.tan(lat));
      }
    } else {
      if (Math.abs(lat) <= EPSLN) {
        x = this.a * dlon;
        y = -1 * this.ml0;
      } else {
        var nl = gN_default(this.a, this.e, Math.sin(lat)) / Math.tan(lat);
        x = nl * Math.sin(el);
        y = this.a * mlfn_default(this.e0, this.e1, this.e2, this.e3, lat) - this.ml0 + nl * (1 - Math.cos(el));
      }
    }
    p.x = x + this.x0;
    p.y = y + this.y0;
    return p;
  }
  function inverse18(p) {
    var lon, lat, x, y, i;
    var al, bl;
    var phi, dphi;
    x = p.x - this.x0;
    y = p.y - this.y0;
    if (this.sphere) {
      if (Math.abs(y + this.a * this.lat0) <= EPSLN) {
        lon = adjust_lon_default(x / this.a + this.long0, this.over);
        lat = 0;
      } else {
        al = this.lat0 + y / this.a;
        bl = x * x / this.a / this.a + al * al;
        phi = al;
        var tanphi;
        for (i = MAX_ITER3; i; --i) {
          tanphi = Math.tan(phi);
          dphi = -1 * (al * (phi * tanphi + 1) - phi - 0.5 * (phi * phi + bl) * tanphi) / ((phi - al) / tanphi - 1);
          phi += dphi;
          if (Math.abs(dphi) <= EPSLN) {
            lat = phi;
            break;
          }
        }
        lon = adjust_lon_default(this.long0 + Math.asin(x * Math.tan(phi) / this.a) / Math.sin(lat), this.over);
      }
    } else {
      if (Math.abs(y + this.ml0) <= EPSLN) {
        lat = 0;
        lon = adjust_lon_default(this.long0 + x / this.a, this.over);
      } else {
        al = (this.ml0 + y) / this.a;
        bl = x * x / this.a / this.a + al * al;
        phi = al;
        var cl, mln, mlnp, ma;
        var con;
        for (i = MAX_ITER3; i; --i) {
          con = this.e * Math.sin(phi);
          cl = Math.sqrt(1 - con * con) * Math.tan(phi);
          mln = this.a * mlfn_default(this.e0, this.e1, this.e2, this.e3, phi);
          mlnp = this.e0 - 2 * this.e1 * Math.cos(2 * phi) + 4 * this.e2 * Math.cos(4 * phi) - 6 * this.e3 * Math.cos(6 * phi);
          ma = mln / this.a;
          dphi = (al * (cl * ma + 1) - ma - 0.5 * cl * (ma * ma + bl)) / (this.es * Math.sin(2 * phi) * (ma * ma + bl - 2 * al * ma) / (4 * cl) + (al - ma) * (cl * mlnp - 2 / Math.sin(2 * phi)) - mlnp);
          phi -= dphi;
          if (Math.abs(dphi) <= EPSLN) {
            lat = phi;
            break;
          }
        }
        cl = Math.sqrt(1 - this.es * Math.pow(Math.sin(lat), 2)) * Math.tan(lat);
        lon = adjust_lon_default(this.long0 + Math.asin(x * cl / this.a) / Math.sin(lat), this.over);
      }
    }
    p.x = lon;
    p.y = lat;
    return p;
  }
  var names20 = ["Polyconic", "American_Polyconic", "poly"];
  var poly_default = {
    init: init19,
    forward: forward18,
    inverse: inverse18,
    names: names20
  };

  // node_modules/proj4/lib/projections/nzmg.js
  var iterations = 1;
  function init20() {
    this.A = [];
    this.A[1] = 0.6399175073;
    this.A[2] = -0.1358797613;
    this.A[3] = 0.063294409;
    this.A[4] = -0.02526853;
    this.A[5] = 0.0117879;
    this.A[6] = -55161e-7;
    this.A[7] = 26906e-7;
    this.A[8] = -1333e-6;
    this.A[9] = 67e-5;
    this.A[10] = -34e-5;
    this.B_re = [];
    this.B_im = [];
    this.B_re[1] = 0.7557853228;
    this.B_im[1] = 0;
    this.B_re[2] = 0.249204646;
    this.B_im[2] = 3371507e-9;
    this.B_re[3] = -1541739e-9;
    this.B_im[3] = 0.04105856;
    this.B_re[4] = -0.10162907;
    this.B_im[4] = 0.01727609;
    this.B_re[5] = -0.26623489;
    this.B_im[5] = -0.36249218;
    this.B_re[6] = -0.6870983;
    this.B_im[6] = -1.1651967;
    this.C_re = [];
    this.C_im = [];
    this.C_re[1] = 1.3231270439;
    this.C_im[1] = 0;
    this.C_re[2] = -0.577245789;
    this.C_im[2] = -7809598e-9;
    this.C_re[3] = 0.508307513;
    this.C_im[3] = -0.112208952;
    this.C_re[4] = -0.15094762;
    this.C_im[4] = 0.18200602;
    this.C_re[5] = 1.01418179;
    this.C_im[5] = 1.64497696;
    this.C_re[6] = 1.9660549;
    this.C_im[6] = 2.5127645;
    this.D = [];
    this.D[1] = 1.5627014243;
    this.D[2] = 0.5185406398;
    this.D[3] = -0.03333098;
    this.D[4] = -0.1052906;
    this.D[5] = -0.0368594;
    this.D[6] = 7317e-6;
    this.D[7] = 0.0122;
    this.D[8] = 394e-5;
    this.D[9] = -13e-4;
  }
  function forward19(p) {
    var n;
    var lon = p.x;
    var lat = p.y;
    var delta_lat = lat - this.lat0;
    var delta_lon = lon - this.long0;
    var d_phi = delta_lat / SEC_TO_RAD * 1e-5;
    var d_lambda = delta_lon;
    var d_phi_n = 1;
    var d_psi = 0;
    for (n = 1; n <= 10; n++) {
      d_phi_n = d_phi_n * d_phi;
      d_psi = d_psi + this.A[n] * d_phi_n;
    }
    var th_re = d_psi;
    var th_im = d_lambda;
    var th_n_re = 1;
    var th_n_im = 0;
    var th_n_re1;
    var th_n_im1;
    var z_re = 0;
    var z_im = 0;
    for (n = 1; n <= 6; n++) {
      th_n_re1 = th_n_re * th_re - th_n_im * th_im;
      th_n_im1 = th_n_im * th_re + th_n_re * th_im;
      th_n_re = th_n_re1;
      th_n_im = th_n_im1;
      z_re = z_re + this.B_re[n] * th_n_re - this.B_im[n] * th_n_im;
      z_im = z_im + this.B_im[n] * th_n_re + this.B_re[n] * th_n_im;
    }
    p.x = z_im * this.a + this.x0;
    p.y = z_re * this.a + this.y0;
    return p;
  }
  function inverse19(p) {
    var n;
    var x = p.x;
    var y = p.y;
    var delta_x = x - this.x0;
    var delta_y = y - this.y0;
    var z_re = delta_y / this.a;
    var z_im = delta_x / this.a;
    var z_n_re = 1;
    var z_n_im = 0;
    var z_n_re1;
    var z_n_im1;
    var th_re = 0;
    var th_im = 0;
    for (n = 1; n <= 6; n++) {
      z_n_re1 = z_n_re * z_re - z_n_im * z_im;
      z_n_im1 = z_n_im * z_re + z_n_re * z_im;
      z_n_re = z_n_re1;
      z_n_im = z_n_im1;
      th_re = th_re + this.C_re[n] * z_n_re - this.C_im[n] * z_n_im;
      th_im = th_im + this.C_im[n] * z_n_re + this.C_re[n] * z_n_im;
    }
    for (var i = 0; i < this.iterations; i++) {
      var th_n_re = th_re;
      var th_n_im = th_im;
      var th_n_re1;
      var th_n_im1;
      var num_re = z_re;
      var num_im = z_im;
      for (n = 2; n <= 6; n++) {
        th_n_re1 = th_n_re * th_re - th_n_im * th_im;
        th_n_im1 = th_n_im * th_re + th_n_re * th_im;
        th_n_re = th_n_re1;
        th_n_im = th_n_im1;
        num_re = num_re + (n - 1) * (this.B_re[n] * th_n_re - this.B_im[n] * th_n_im);
        num_im = num_im + (n - 1) * (this.B_im[n] * th_n_re + this.B_re[n] * th_n_im);
      }
      th_n_re = 1;
      th_n_im = 0;
      var den_re = this.B_re[1];
      var den_im = this.B_im[1];
      for (n = 2; n <= 6; n++) {
        th_n_re1 = th_n_re * th_re - th_n_im * th_im;
        th_n_im1 = th_n_im * th_re + th_n_re * th_im;
        th_n_re = th_n_re1;
        th_n_im = th_n_im1;
        den_re = den_re + n * (this.B_re[n] * th_n_re - this.B_im[n] * th_n_im);
        den_im = den_im + n * (this.B_im[n] * th_n_re + this.B_re[n] * th_n_im);
      }
      var den2 = den_re * den_re + den_im * den_im;
      th_re = (num_re * den_re + num_im * den_im) / den2;
      th_im = (num_im * den_re - num_re * den_im) / den2;
    }
    var d_psi = th_re;
    var d_lambda = th_im;
    var d_psi_n = 1;
    var d_phi = 0;
    for (n = 1; n <= 9; n++) {
      d_psi_n = d_psi_n * d_psi;
      d_phi = d_phi + this.D[n] * d_psi_n;
    }
    var lat = this.lat0 + d_phi * SEC_TO_RAD * 1e5;
    var lon = this.long0 + d_lambda;
    p.x = lon;
    p.y = lat;
    return p;
  }
  var names21 = ["New_Zealand_Map_Grid", "nzmg"];
  var nzmg_default = {
    init: init20,
    forward: forward19,
    inverse: inverse19,
    names: names21,
    iterations
  };

  // node_modules/proj4/lib/projections/mill.js
  function init21() {
  }
  function forward20(p) {
    var lon = p.x;
    var lat = p.y;
    var dlon = adjust_lon_default(lon - this.long0, this.over);
    var x = this.x0 + this.a * dlon;
    var y = this.y0 + this.a * Math.log(Math.tan(Math.PI / 4 + lat / 2.5)) * 1.25;
    p.x = x;
    p.y = y;
    return p;
  }
  function inverse20(p) {
    p.x -= this.x0;
    p.y -= this.y0;
    var lon = adjust_lon_default(this.long0 + p.x / this.a, this.over);
    var lat = 2.5 * (Math.atan(Math.exp(0.8 * p.y / this.a)) - Math.PI / 4);
    p.x = lon;
    p.y = lat;
    return p;
  }
  var names22 = ["Miller_Cylindrical", "mill"];
  var mill_default = {
    init: init21,
    forward: forward20,
    inverse: inverse20,
    names: names22
  };

  // node_modules/proj4/lib/projections/sinu.js
  var MAX_ITER4 = 20;
  function init22() {
    this.long0 = this.long0 || 0;
    if (!this.sphere) {
      this.en = pj_enfn_default(this.es);
    } else {
      this.n = 1;
      this.m = 0;
      this.es = 0;
      this.C_y = Math.sqrt((this.m + 1) / this.n);
      this.C_x = this.C_y / (this.m + 1);
    }
  }
  function forward21(p) {
    var x, y;
    var lon = p.x;
    var lat = p.y;
    lon = adjust_lon_default(lon - this.long0, this.over);
    if (this.sphere) {
      if (!this.m) {
        lat = this.n !== 1 ? Math.asin(this.n * Math.sin(lat)) : lat;
      } else {
        var k = this.n * Math.sin(lat);
        for (var i = MAX_ITER4; i; --i) {
          var V2 = (this.m * lat + Math.sin(lat) - k) / (this.m + Math.cos(lat));
          lat -= V2;
          if (Math.abs(V2) < EPSLN) {
            break;
          }
        }
      }
      x = this.a * this.C_x * lon * (this.m + Math.cos(lat));
      y = this.a * this.C_y * lat;
    } else {
      var s = Math.sin(lat);
      var c = Math.cos(lat);
      y = this.a * pj_mlfn_default(lat, s, c, this.en);
      x = this.a * lon * c / Math.sqrt(1 - this.es * s * s);
    }
    p.x = x;
    p.y = y;
    return p;
  }
  function inverse21(p) {
    var lat, temp, lon, s;
    p.x -= this.x0;
    lon = p.x / this.a;
    p.y -= this.y0;
    lat = p.y / this.a;
    if (this.sphere) {
      lat /= this.C_y;
      lon = lon / (this.C_x * (this.m + Math.cos(lat)));
      if (this.m) {
        lat = asinz_default((this.m * lat + Math.sin(lat)) / this.n);
      } else if (this.n !== 1) {
        lat = asinz_default(Math.sin(lat) / this.n);
      }
      lon = adjust_lon_default(lon + this.long0, this.over);
      lat = adjust_lat_default(lat);
    } else {
      lat = pj_inv_mlfn_default(p.y / this.a, this.es, this.en);
      s = Math.abs(lat);
      if (s < HALF_PI) {
        s = Math.sin(lat);
        temp = this.long0 + p.x * Math.sqrt(1 - this.es * s * s) / (this.a * Math.cos(lat));
        lon = adjust_lon_default(temp, this.over);
      } else if (s - EPSLN < HALF_PI) {
        lon = this.long0;
      }
    }
    p.x = lon;
    p.y = lat;
    return p;
  }
  var names23 = ["Sinusoidal", "sinu"];
  var sinu_default = {
    init: init22,
    forward: forward21,
    inverse: inverse21,
    names: names23
  };

  // node_modules/proj4/lib/projections/eck6.js
  function init23() {
    this.sphere = true;
    this.b = this.a;
    this.m = 1;
    this.n = 2.5707963267948966;
    this.es = 0;
    this.C_y = Math.sqrt((this.m + 1) / this.n);
    this.C_x = this.C_y / (this.m + 1);
  }
  var forward22 = forward21;
  var inverse22 = inverse21;
  var names24 = ["Eckert_VI", "eck6"];
  var eck6_default = {
    init: init23,
    forward: forward22,
    inverse: inverse22,
    names: names24
  };

  // node_modules/proj4/lib/projections/moll.js
  function init24() {
    this.x0 = this.x0 !== void 0 ? this.x0 : 0;
    this.y0 = this.y0 !== void 0 ? this.y0 : 0;
    this.long0 = this.long0 !== void 0 ? this.long0 : 0;
  }
  function forward23(p) {
    var lon = p.x;
    var lat = p.y;
    var delta_lon = adjust_lon_default(lon - this.long0, this.over);
    var theta = lat;
    var con = Math.PI * Math.sin(lat);
    while (true) {
      var delta_theta = -(theta + Math.sin(theta) - con) / (1 + Math.cos(theta));
      theta += delta_theta;
      if (Math.abs(delta_theta) < EPSLN) {
        break;
      }
    }
    theta /= 2;
    if (Math.PI / 2 - Math.abs(lat) < EPSLN) {
      delta_lon = 0;
    }
    var x = 0.900316316158 * this.a * delta_lon * Math.cos(theta) + this.x0;
    var y = 1.4142135623731 * this.a * Math.sin(theta) + this.y0;
    p.x = x;
    p.y = y;
    return p;
  }
  function inverse23(p) {
    var theta;
    var arg;
    p.x -= this.x0;
    p.y -= this.y0;
    arg = p.y / (1.4142135623731 * this.a);
    if (Math.abs(arg) > 0.999999999999) {
      arg = 0.999999999999;
    }
    theta = Math.asin(arg);
    var lon = adjust_lon_default(this.long0 + p.x / (0.900316316158 * this.a * Math.cos(theta)), this.over);
    if (lon < -Math.PI) {
      lon = -Math.PI;
    }
    if (lon > Math.PI) {
      lon = Math.PI;
    }
    arg = (2 * theta + Math.sin(2 * theta)) / Math.PI;
    if (Math.abs(arg) > 1) {
      arg = 1;
    }
    var lat = Math.asin(arg);
    p.x = lon;
    p.y = lat;
    return p;
  }
  var names25 = ["Mollweide", "moll"];
  var moll_default = {
    init: init24,
    forward: forward23,
    inverse: inverse23,
    names: names25
  };

  // node_modules/proj4/lib/projections/eqdc.js
  function init25() {
    if (Math.abs(this.lat1 + this.lat2) < EPSLN) {
      return;
    }
    this.lat2 = this.lat2 || this.lat1;
    this.temp = this.b / this.a;
    this.es = 1 - Math.pow(this.temp, 2);
    this.e = Math.sqrt(this.es);
    this.e0 = e0fn_default(this.es);
    this.e1 = e1fn_default(this.es);
    this.e2 = e2fn_default(this.es);
    this.e3 = e3fn_default(this.es);
    this.sin_phi = Math.sin(this.lat1);
    this.cos_phi = Math.cos(this.lat1);
    this.ms1 = msfnz_default(this.e, this.sin_phi, this.cos_phi);
    this.ml1 = mlfn_default(this.e0, this.e1, this.e2, this.e3, this.lat1);
    if (Math.abs(this.lat1 - this.lat2) < EPSLN) {
      this.ns = this.sin_phi;
    } else {
      this.sin_phi = Math.sin(this.lat2);
      this.cos_phi = Math.cos(this.lat2);
      this.ms2 = msfnz_default(this.e, this.sin_phi, this.cos_phi);
      this.ml2 = mlfn_default(this.e0, this.e1, this.e2, this.e3, this.lat2);
      this.ns = (this.ms1 - this.ms2) / (this.ml2 - this.ml1);
    }
    this.g = this.ml1 + this.ms1 / this.ns;
    this.ml0 = mlfn_default(this.e0, this.e1, this.e2, this.e3, this.lat0);
    this.rh = this.a * (this.g - this.ml0);
  }
  function forward24(p) {
    var lon = p.x;
    var lat = p.y;
    var rh1;
    if (this.sphere) {
      rh1 = this.a * (this.g - lat);
    } else {
      var ml = mlfn_default(this.e0, this.e1, this.e2, this.e3, lat);
      rh1 = this.a * (this.g - ml);
    }
    var theta = this.ns * adjust_lon_default(lon - this.long0, this.over);
    var x = this.x0 + rh1 * Math.sin(theta);
    var y = this.y0 + this.rh - rh1 * Math.cos(theta);
    p.x = x;
    p.y = y;
    return p;
  }
  function inverse24(p) {
    p.x -= this.x0;
    p.y = this.rh - p.y + this.y0;
    var con, rh1, lat, lon;
    if (this.ns >= 0) {
      rh1 = Math.sqrt(p.x * p.x + p.y * p.y);
      con = 1;
    } else {
      rh1 = -Math.sqrt(p.x * p.x + p.y * p.y);
      con = -1;
    }
    var theta = 0;
    if (rh1 !== 0) {
      theta = Math.atan2(con * p.x, con * p.y);
    }
    if (this.sphere) {
      lon = adjust_lon_default(this.long0 + theta / this.ns, this.over);
      lat = adjust_lat_default(this.g - rh1 / this.a);
      p.x = lon;
      p.y = lat;
      return p;
    } else {
      var ml = this.g - rh1 / this.a;
      lat = imlfn_default(ml, this.e0, this.e1, this.e2, this.e3);
      lon = adjust_lon_default(this.long0 + theta / this.ns, this.over);
      p.x = lon;
      p.y = lat;
      return p;
    }
  }
  var names26 = ["Equidistant_Conic", "eqdc"];
  var eqdc_default = {
    init: init25,
    forward: forward24,
    inverse: inverse24,
    names: names26
  };

  // node_modules/proj4/lib/projections/vandg.js
  function init26() {
    this.R = this.a;
  }
  function forward25(p) {
    var lon = p.x;
    var lat = p.y;
    var dlon = adjust_lon_default(lon - this.long0, this.over);
    var x, y;
    if (Math.abs(lat) <= EPSLN) {
      x = this.x0 + this.R * dlon;
      y = this.y0;
      p.x = x;
      p.y = y;
      return p;
    }
    var theta = asinz_default(2 * Math.abs(lat / Math.PI));
    if (Math.abs(dlon) <= EPSLN || Math.abs(Math.abs(lat) - HALF_PI) <= EPSLN) {
      x = this.x0;
      if (lat >= 0) {
        y = this.y0 + Math.PI * this.R * Math.tan(0.5 * theta);
      } else {
        y = this.y0 + Math.PI * this.R * -Math.tan(0.5 * theta);
      }
      p.x = x;
      p.y = y;
      return p;
    }
    var al = 0.5 * Math.abs(Math.PI / dlon - dlon / Math.PI);
    var asq = al * al;
    var sinth = Math.sin(theta);
    var costh = Math.cos(theta);
    var g = costh / (sinth + costh - 1);
    var gsq = g * g;
    var m = g * (2 / sinth - 1);
    var msq = m * m;
    var con = Math.PI * this.R * (al * (g - msq) + Math.sqrt(asq * (g - msq) * (g - msq) - (msq + asq) * (gsq - msq))) / (msq + asq);
    if (dlon < 0) {
      con = -con;
    }
    x = this.x0 + con;
    var q = asq + g;
    con = Math.PI * this.R * (m * q - al * Math.sqrt((msq + asq) * (asq + 1) - q * q)) / (msq + asq);
    if (lat >= 0) {
      y = this.y0 + con;
    } else {
      y = this.y0 - con;
    }
    p.x = x;
    p.y = y;
    return p;
  }
  function inverse25(p) {
    var lon, lat;
    var xx, yy, xys, c1, c2, c3;
    var a1;
    var m1;
    var con;
    var th1;
    var d;
    p.x -= this.x0;
    p.y -= this.y0;
    con = Math.PI * this.R;
    xx = p.x / con;
    yy = p.y / con;
    xys = xx * xx + yy * yy;
    c1 = -Math.abs(yy) * (1 + xys);
    c2 = c1 - 2 * yy * yy + xx * xx;
    c3 = -2 * c1 + 1 + 2 * yy * yy + xys * xys;
    d = yy * yy / c3 + (2 * c2 * c2 * c2 / c3 / c3 / c3 - 9 * c1 * c2 / c3 / c3) / 27;
    a1 = (c1 - c2 * c2 / 3 / c3) / c3;
    m1 = 2 * Math.sqrt(-a1 / 3);
    con = 3 * d / a1 / m1;
    if (Math.abs(con) > 1) {
      if (con >= 0) {
        con = 1;
      } else {
        con = -1;
      }
    }
    th1 = Math.acos(con) / 3;
    if (p.y >= 0) {
      lat = (-m1 * Math.cos(th1 + Math.PI / 3) - c2 / 3 / c3) * Math.PI;
    } else {
      lat = -(-m1 * Math.cos(th1 + Math.PI / 3) - c2 / 3 / c3) * Math.PI;
    }
    if (Math.abs(xx) < EPSLN) {
      lon = this.long0;
    } else {
      lon = adjust_lon_default(this.long0 + Math.PI * (xys - 1 + Math.sqrt(1 + 2 * (xx * xx - yy * yy) + xys * xys)) / 2 / xx, this.over);
    }
    p.x = lon;
    p.y = lat;
    return p;
  }
  var names27 = ["Van_der_Grinten_I", "VanDerGrinten", "Van_der_Grinten", "vandg"];
  var vandg_default = {
    init: init26,
    forward: forward25,
    inverse: inverse25,
    names: names27
  };

  // node_modules/proj4/lib/common/vincenty.js
  function vincentyInverse(lat1, lon1, lat2, lon2, a, f) {
    const L = lon2 - lon1;
    const U1 = Math.atan((1 - f) * Math.tan(lat1));
    const U2 = Math.atan((1 - f) * Math.tan(lat2));
    const sinU1 = Math.sin(U1), cosU1 = Math.cos(U1);
    const sinU2 = Math.sin(U2), cosU2 = Math.cos(U2);
    let lambda = L, lambdaP, iterLimit = 100;
    let sinLambda, cosLambda, sinSigma, cosSigma, sigma, sinAlpha, cos2Alpha, cos2SigmaM, C;
    let uSq, A5, B, deltaSigma, s;
    do {
      sinLambda = Math.sin(lambda);
      cosLambda = Math.cos(lambda);
      sinSigma = Math.sqrt(
        cosU2 * sinLambda * (cosU2 * sinLambda) + (cosU1 * sinU2 - sinU1 * cosU2 * cosLambda) * (cosU1 * sinU2 - sinU1 * cosU2 * cosLambda)
      );
      if (sinSigma === 0) {
        return { azi1: 0, s12: 0 };
      }
      cosSigma = sinU1 * sinU2 + cosU1 * cosU2 * cosLambda;
      sigma = Math.atan2(sinSigma, cosSigma);
      sinAlpha = cosU1 * cosU2 * sinLambda / sinSigma;
      cos2Alpha = 1 - sinAlpha * sinAlpha;
      cos2SigmaM = cos2Alpha !== 0 ? cosSigma - 2 * sinU1 * sinU2 / cos2Alpha : 0;
      C = f / 16 * cos2Alpha * (4 + f * (4 - 3 * cos2Alpha));
      lambdaP = lambda;
      lambda = L + (1 - C) * f * sinAlpha * (sigma + C * sinSigma * (cos2SigmaM + C * cosSigma * (-1 + 2 * cos2SigmaM * cos2SigmaM)));
    } while (Math.abs(lambda - lambdaP) > 1e-12 && --iterLimit > 0);
    if (iterLimit === 0) {
      return { azi1: NaN, s12: NaN };
    }
    uSq = cos2Alpha * (a * a - a * (1 - f) * (a * (1 - f))) / (a * (1 - f) * (a * (1 - f)));
    A5 = 1 + uSq / 16384 * (4096 + uSq * (-768 + uSq * (320 - 175 * uSq)));
    B = uSq / 1024 * (256 + uSq * (-128 + uSq * (74 - 47 * uSq)));
    deltaSigma = B * sinSigma * (cos2SigmaM + B / 4 * (cosSigma * (-1 + 2 * cos2SigmaM * cos2SigmaM) - B / 6 * cos2SigmaM * (-3 + 4 * sinSigma * sinSigma) * (-3 + 4 * cos2SigmaM * cos2SigmaM)));
    s = a * (1 - f) * A5 * (sigma - deltaSigma);
    const azi1 = Math.atan2(cosU2 * sinLambda, cosU1 * sinU2 - sinU1 * cosU2 * cosLambda);
    return { azi1, s12: s };
  }
  function vincentyDirect(lat1, lon1, azi1, s12, a, f) {
    const U1 = Math.atan((1 - f) * Math.tan(lat1));
    const sinU1 = Math.sin(U1), cosU1 = Math.cos(U1);
    const sinAlpha1 = Math.sin(azi1), cosAlpha1 = Math.cos(azi1);
    const sigma1 = Math.atan2(sinU1, cosU1 * cosAlpha1);
    const sinAlpha = cosU1 * sinAlpha1;
    const cos2Alpha = 1 - sinAlpha * sinAlpha;
    const uSq = cos2Alpha * (a * a - a * (1 - f) * (a * (1 - f))) / (a * (1 - f) * (a * (1 - f)));
    const A5 = 1 + uSq / 16384 * (4096 + uSq * (-768 + uSq * (320 - 175 * uSq)));
    const B = uSq / 1024 * (256 + uSq * (-128 + uSq * (74 - 47 * uSq)));
    let sigma = s12 / (a * (1 - f) * A5), sigmaP, iterLimit = 100;
    let cos2SigmaM, sinSigma, cosSigma, deltaSigma;
    do {
      cos2SigmaM = Math.cos(2 * sigma1 + sigma);
      sinSigma = Math.sin(sigma);
      cosSigma = Math.cos(sigma);
      deltaSigma = B * sinSigma * (cos2SigmaM + B / 4 * (cosSigma * (-1 + 2 * cos2SigmaM * cos2SigmaM) - B / 6 * cos2SigmaM * (-3 + 4 * sinSigma * sinSigma) * (-3 + 4 * cos2SigmaM * cos2SigmaM)));
      sigmaP = sigma;
      sigma = s12 / (a * (1 - f) * A5) + deltaSigma;
    } while (Math.abs(sigma - sigmaP) > 1e-12 && --iterLimit > 0);
    if (iterLimit === 0) {
      return { lat2: NaN, lon2: NaN };
    }
    const tmp = sinU1 * sinSigma - cosU1 * cosSigma * cosAlpha1;
    const lat2 = Math.atan2(
      sinU1 * cosSigma + cosU1 * sinSigma * cosAlpha1,
      (1 - f) * Math.sqrt(sinAlpha * sinAlpha + tmp * tmp)
    );
    const lambda = Math.atan2(
      sinSigma * sinAlpha1,
      cosU1 * cosSigma - sinU1 * sinSigma * cosAlpha1
    );
    const C = f / 16 * cos2Alpha * (4 + f * (4 - 3 * cos2Alpha));
    const L = lambda - (1 - C) * f * sinAlpha * (sigma + C * sinSigma * (cos2SigmaM + C * cosSigma * (-1 + 2 * cos2SigmaM * cos2SigmaM)));
    const lon2 = lon1 + L;
    return { lat2, lon2 };
  }

  // node_modules/proj4/lib/projections/aeqd.js
  function init27() {
    this.sin_p12 = Math.sin(this.lat0);
    this.cos_p12 = Math.cos(this.lat0);
    this.x0 = this.x0 || 0;
    this.y0 = this.y0 || 0;
    this.long0 = this.long0 || 0;
    this.f = this.es / (1 + Math.sqrt(1 - this.es));
  }
  function forward26(p) {
    var lon = p.x;
    var lat = p.y;
    var sinphi = Math.sin(p.y);
    var cosphi = Math.cos(p.y);
    var dlon = adjust_lon_default(lon - this.long0, this.over);
    var e0, e1, e2, e3, Mlp, Ml, c, kp, cos_c, vars, azi1;
    if (this.sphere) {
      if (Math.abs(this.sin_p12 - 1) <= EPSLN) {
        p.x = this.x0 + this.a * (HALF_PI - lat) * Math.sin(dlon);
        p.y = this.y0 - this.a * (HALF_PI - lat) * Math.cos(dlon);
        return p;
      } else if (Math.abs(this.sin_p12 + 1) <= EPSLN) {
        p.x = this.x0 + this.a * (HALF_PI + lat) * Math.sin(dlon);
        p.y = this.y0 + this.a * (HALF_PI + lat) * Math.cos(dlon);
        return p;
      } else {
        cos_c = this.sin_p12 * sinphi + this.cos_p12 * cosphi * Math.cos(dlon);
        c = Math.acos(cos_c);
        kp = c ? c / Math.sin(c) : 1;
        p.x = this.x0 + this.a * kp * cosphi * Math.sin(dlon);
        p.y = this.y0 + this.a * kp * (this.cos_p12 * sinphi - this.sin_p12 * cosphi * Math.cos(dlon));
        return p;
      }
    } else {
      e0 = e0fn_default(this.es);
      e1 = e1fn_default(this.es);
      e2 = e2fn_default(this.es);
      e3 = e3fn_default(this.es);
      if (Math.abs(this.sin_p12 - 1) <= EPSLN) {
        Mlp = this.a * mlfn_default(e0, e1, e2, e3, HALF_PI);
        Ml = this.a * mlfn_default(e0, e1, e2, e3, lat);
        p.x = this.x0 + (Mlp - Ml) * Math.sin(dlon);
        p.y = this.y0 - (Mlp - Ml) * Math.cos(dlon);
        return p;
      } else if (Math.abs(this.sin_p12 + 1) <= EPSLN) {
        Mlp = this.a * mlfn_default(e0, e1, e2, e3, HALF_PI);
        Ml = this.a * mlfn_default(e0, e1, e2, e3, lat);
        p.x = this.x0 + (Mlp + Ml) * Math.sin(dlon);
        p.y = this.y0 + (Mlp + Ml) * Math.cos(dlon);
        return p;
      } else {
        if (Math.abs(lon) < EPSLN && Math.abs(lat - this.lat0) < EPSLN) {
          p.x = this.x0;
          p.y = this.y0;
          return p;
        }
        vars = vincentyInverse(this.lat0, this.long0, lat, lon, this.a, this.f);
        azi1 = vars.azi1;
        p.x = this.x0 + vars.s12 * Math.sin(azi1);
        p.y = this.y0 + vars.s12 * Math.cos(azi1);
        return p;
      }
    }
  }
  function inverse26(p) {
    p.x -= this.x0;
    p.y -= this.y0;
    var rh, z, sinz, cosz, lon, lat, con, e0, e1, e2, e3, Mlp, M2, azi1, s12, vars;
    if (this.sphere) {
      rh = Math.sqrt(p.x * p.x + p.y * p.y);
      if (rh > 2 * HALF_PI * this.a) {
        return;
      }
      z = rh / this.a;
      sinz = Math.sin(z);
      cosz = Math.cos(z);
      lon = this.long0;
      if (Math.abs(rh) <= EPSLN) {
        lat = this.lat0;
      } else {
        lat = asinz_default(cosz * this.sin_p12 + p.y * sinz * this.cos_p12 / rh);
        con = Math.abs(this.lat0) - HALF_PI;
        if (Math.abs(con) <= EPSLN) {
          if (this.lat0 >= 0) {
            lon = adjust_lon_default(this.long0 + Math.atan2(p.x, -p.y), this.over);
          } else {
            lon = adjust_lon_default(this.long0 - Math.atan2(-p.x, p.y), this.over);
          }
        } else {
          lon = adjust_lon_default(this.long0 + Math.atan2(p.x * sinz, rh * this.cos_p12 * cosz - p.y * this.sin_p12 * sinz), this.over);
        }
      }
      p.x = lon;
      p.y = lat;
      return p;
    } else {
      e0 = e0fn_default(this.es);
      e1 = e1fn_default(this.es);
      e2 = e2fn_default(this.es);
      e3 = e3fn_default(this.es);
      if (Math.abs(this.sin_p12 - 1) <= EPSLN) {
        Mlp = this.a * mlfn_default(e0, e1, e2, e3, HALF_PI);
        rh = Math.sqrt(p.x * p.x + p.y * p.y);
        M2 = Mlp - rh;
        lat = imlfn_default(M2 / this.a, e0, e1, e2, e3);
        lon = adjust_lon_default(this.long0 + Math.atan2(p.x, -1 * p.y), this.over);
        p.x = lon;
        p.y = lat;
        return p;
      } else if (Math.abs(this.sin_p12 + 1) <= EPSLN) {
        Mlp = this.a * mlfn_default(e0, e1, e2, e3, HALF_PI);
        rh = Math.sqrt(p.x * p.x + p.y * p.y);
        M2 = rh - Mlp;
        lat = imlfn_default(M2 / this.a, e0, e1, e2, e3);
        lon = adjust_lon_default(this.long0 + Math.atan2(p.x, p.y), this.over);
        p.x = lon;
        p.y = lat;
        return p;
      } else {
        azi1 = Math.atan2(p.x, p.y);
        s12 = Math.sqrt(p.x * p.x + p.y * p.y);
        vars = vincentyDirect(this.lat0, this.long0, azi1, s12, this.a, this.f);
        p.x = vars.lon2;
        p.y = vars.lat2;
        return p;
      }
    }
  }
  var names28 = ["Azimuthal_Equidistant", "aeqd"];
  var aeqd_default = {
    init: init27,
    forward: forward26,
    inverse: inverse26,
    names: names28
  };

  // node_modules/proj4/lib/projections/ortho.js
  function init28() {
    this.sin_p14 = Math.sin(this.lat0 || 0);
    this.cos_p14 = Math.cos(this.lat0 || 0);
  }
  function forward27(p) {
    var sinphi, cosphi;
    var dlon;
    var coslon;
    var ksp;
    var g, x, y;
    var lon = p.x;
    var lat = p.y;
    dlon = adjust_lon_default(lon - (this.long0 || 0), this.over);
    sinphi = Math.sin(lat);
    cosphi = Math.cos(lat);
    coslon = Math.cos(dlon);
    g = this.sin_p14 * sinphi + this.cos_p14 * cosphi * coslon;
    ksp = 1;
    if (g > 0 || Math.abs(g) <= EPSLN) {
      x = (this.x0 || 0) + this.a * ksp * cosphi * Math.sin(dlon);
      y = (this.y0 || 0) + this.a * ksp * (this.cos_p14 * sinphi - this.sin_p14 * cosphi * coslon);
    }
    p.x = x;
    p.y = y;
    return p;
  }
  function inverse27(p) {
    var rh;
    var z;
    var sinz, cosz;
    var con;
    var lon, lat;
    var long0, lat0;
    p.x -= this.x0 || 0;
    p.y -= this.y0 || 0;
    rh = Math.sqrt(p.x * p.x + p.y * p.y);
    z = asinz_default(rh / this.a);
    sinz = Math.sin(z);
    cosz = Math.cos(z);
    long0 = this.long0 || 0;
    lat0 = this.lat0 || 0;
    lon = long0;
    if (Math.abs(rh) <= EPSLN) {
      lat = lat0;
      p.x = lon;
      p.y = lat;
      return p;
    }
    lat = asinz_default(cosz * this.sin_p14 + p.y * sinz * this.cos_p14 / rh);
    con = Math.abs(lat0) - HALF_PI;
    if (Math.abs(con) <= EPSLN) {
      if (lat0 >= 0) {
        lon = adjust_lon_default(long0 + Math.atan2(p.x, -p.y), this.over);
      } else {
        lon = adjust_lon_default(long0 - Math.atan2(-p.x, p.y), this.over);
      }
      p.x = lon;
      p.y = lat;
      return p;
    }
    lon = adjust_lon_default(long0 + Math.atan2(p.x * sinz, rh * this.cos_p14 * cosz - p.y * this.sin_p14 * sinz), this.over);
    p.x = lon;
    p.y = lat;
    return p;
  }
  var names29 = ["ortho"];
  var ortho_default = {
    init: init28,
    forward: forward27,
    inverse: inverse27,
    names: names29
  };

  // node_modules/proj4/lib/projections/qsc.js
  var FACE_ENUM = {
    FRONT: 1,
    RIGHT: 2,
    BACK: 3,
    LEFT: 4,
    TOP: 5,
    BOTTOM: 6
  };
  var AREA_ENUM = {
    AREA_0: 1,
    AREA_1: 2,
    AREA_2: 3,
    AREA_3: 4
  };
  function init29() {
    this.x0 = this.x0 || 0;
    this.y0 = this.y0 || 0;
    this.lat0 = this.lat0 || 0;
    this.long0 = this.long0 || 0;
    this.lat_ts = this.lat_ts || 0;
    this.title = this.title || "Quadrilateralized Spherical Cube";
    if (this.lat0 >= HALF_PI - FORTPI / 2) {
      this.face = FACE_ENUM.TOP;
    } else if (this.lat0 <= -(HALF_PI - FORTPI / 2)) {
      this.face = FACE_ENUM.BOTTOM;
    } else if (Math.abs(this.long0) <= FORTPI) {
      this.face = FACE_ENUM.FRONT;
    } else if (Math.abs(this.long0) <= HALF_PI + FORTPI) {
      this.face = this.long0 > 0 ? FACE_ENUM.RIGHT : FACE_ENUM.LEFT;
    } else {
      this.face = FACE_ENUM.BACK;
    }
    if (this.es !== 0) {
      this.one_minus_f = 1 - (this.a - this.b) / this.a;
      this.one_minus_f_squared = this.one_minus_f * this.one_minus_f;
    }
  }
  function forward28(p) {
    var xy = { x: 0, y: 0 };
    var lat, lon;
    var theta, phi;
    var t, mu;
    var area = { value: 0 };
    p.x -= this.long0;
    if (this.es !== 0) {
      lat = Math.atan(this.one_minus_f_squared * Math.tan(p.y));
    } else {
      lat = p.y;
    }
    lon = p.x;
    if (this.face === FACE_ENUM.TOP) {
      phi = HALF_PI - lat;
      if (lon >= FORTPI && lon <= HALF_PI + FORTPI) {
        area.value = AREA_ENUM.AREA_0;
        theta = lon - HALF_PI;
      } else if (lon > HALF_PI + FORTPI || lon <= -(HALF_PI + FORTPI)) {
        area.value = AREA_ENUM.AREA_1;
        theta = lon > 0 ? lon - SPI : lon + SPI;
      } else if (lon > -(HALF_PI + FORTPI) && lon <= -FORTPI) {
        area.value = AREA_ENUM.AREA_2;
        theta = lon + HALF_PI;
      } else {
        area.value = AREA_ENUM.AREA_3;
        theta = lon;
      }
    } else if (this.face === FACE_ENUM.BOTTOM) {
      phi = HALF_PI + lat;
      if (lon >= FORTPI && lon <= HALF_PI + FORTPI) {
        area.value = AREA_ENUM.AREA_0;
        theta = -lon + HALF_PI;
      } else if (lon < FORTPI && lon >= -FORTPI) {
        area.value = AREA_ENUM.AREA_1;
        theta = -lon;
      } else if (lon < -FORTPI && lon >= -(HALF_PI + FORTPI)) {
        area.value = AREA_ENUM.AREA_2;
        theta = -lon - HALF_PI;
      } else {
        area.value = AREA_ENUM.AREA_3;
        theta = lon > 0 ? -lon + SPI : -lon - SPI;
      }
    } else {
      var q, r, s;
      var sinlat, coslat;
      var sinlon, coslon;
      if (this.face === FACE_ENUM.RIGHT) {
        lon = qsc_shift_lon_origin(lon, +HALF_PI);
      } else if (this.face === FACE_ENUM.BACK) {
        lon = qsc_shift_lon_origin(lon, +SPI);
      } else if (this.face === FACE_ENUM.LEFT) {
        lon = qsc_shift_lon_origin(lon, -HALF_PI);
      }
      sinlat = Math.sin(lat);
      coslat = Math.cos(lat);
      sinlon = Math.sin(lon);
      coslon = Math.cos(lon);
      q = coslat * coslon;
      r = coslat * sinlon;
      s = sinlat;
      if (this.face === FACE_ENUM.FRONT) {
        phi = Math.acos(q);
        theta = qsc_fwd_equat_face_theta(phi, s, r, area);
      } else if (this.face === FACE_ENUM.RIGHT) {
        phi = Math.acos(r);
        theta = qsc_fwd_equat_face_theta(phi, s, -q, area);
      } else if (this.face === FACE_ENUM.BACK) {
        phi = Math.acos(-q);
        theta = qsc_fwd_equat_face_theta(phi, s, -r, area);
      } else if (this.face === FACE_ENUM.LEFT) {
        phi = Math.acos(-r);
        theta = qsc_fwd_equat_face_theta(phi, s, q, area);
      } else {
        phi = theta = 0;
        area.value = AREA_ENUM.AREA_0;
      }
    }
    mu = Math.atan(12 / SPI * (theta + Math.acos(Math.sin(theta) * Math.cos(FORTPI)) - HALF_PI));
    t = Math.sqrt((1 - Math.cos(phi)) / (Math.cos(mu) * Math.cos(mu)) / (1 - Math.cos(Math.atan(1 / Math.cos(theta)))));
    if (area.value === AREA_ENUM.AREA_1) {
      mu += HALF_PI;
    } else if (area.value === AREA_ENUM.AREA_2) {
      mu += SPI;
    } else if (area.value === AREA_ENUM.AREA_3) {
      mu += 1.5 * SPI;
    }
    xy.x = t * Math.cos(mu);
    xy.y = t * Math.sin(mu);
    xy.x = xy.x * this.a + this.x0;
    xy.y = xy.y * this.a + this.y0;
    p.x = xy.x;
    p.y = xy.y;
    return p;
  }
  function inverse28(p) {
    var lp = { lam: 0, phi: 0 };
    var mu, nu, cosmu, tannu;
    var tantheta, theta, cosphi, phi;
    var t;
    var area = { value: 0 };
    p.x = (p.x - this.x0) / this.a;
    p.y = (p.y - this.y0) / this.a;
    nu = Math.atan(Math.sqrt(p.x * p.x + p.y * p.y));
    mu = Math.atan2(p.y, p.x);
    if (p.x >= 0 && p.x >= Math.abs(p.y)) {
      area.value = AREA_ENUM.AREA_0;
    } else if (p.y >= 0 && p.y >= Math.abs(p.x)) {
      area.value = AREA_ENUM.AREA_1;
      mu -= HALF_PI;
    } else if (p.x < 0 && -p.x >= Math.abs(p.y)) {
      area.value = AREA_ENUM.AREA_2;
      mu = mu < 0 ? mu + SPI : mu - SPI;
    } else {
      area.value = AREA_ENUM.AREA_3;
      mu += HALF_PI;
    }
    t = SPI / 12 * Math.tan(mu);
    tantheta = Math.sin(t) / (Math.cos(t) - 1 / Math.sqrt(2));
    theta = Math.atan(tantheta);
    cosmu = Math.cos(mu);
    tannu = Math.tan(nu);
    cosphi = 1 - cosmu * cosmu * tannu * tannu * (1 - Math.cos(Math.atan(1 / Math.cos(theta))));
    if (cosphi < -1) {
      cosphi = -1;
    } else if (cosphi > 1) {
      cosphi = 1;
    }
    if (this.face === FACE_ENUM.TOP) {
      phi = Math.acos(cosphi);
      lp.phi = HALF_PI - phi;
      if (area.value === AREA_ENUM.AREA_0) {
        lp.lam = theta + HALF_PI;
      } else if (area.value === AREA_ENUM.AREA_1) {
        lp.lam = theta < 0 ? theta + SPI : theta - SPI;
      } else if (area.value === AREA_ENUM.AREA_2) {
        lp.lam = theta - HALF_PI;
      } else {
        lp.lam = theta;
      }
    } else if (this.face === FACE_ENUM.BOTTOM) {
      phi = Math.acos(cosphi);
      lp.phi = phi - HALF_PI;
      if (area.value === AREA_ENUM.AREA_0) {
        lp.lam = -theta + HALF_PI;
      } else if (area.value === AREA_ENUM.AREA_1) {
        lp.lam = -theta;
      } else if (area.value === AREA_ENUM.AREA_2) {
        lp.lam = -theta - HALF_PI;
      } else {
        lp.lam = theta < 0 ? -theta - SPI : -theta + SPI;
      }
    } else {
      var q, r, s;
      q = cosphi;
      t = q * q;
      if (t >= 1) {
        s = 0;
      } else {
        s = Math.sqrt(1 - t) * Math.sin(theta);
      }
      t += s * s;
      if (t >= 1) {
        r = 0;
      } else {
        r = Math.sqrt(1 - t);
      }
      if (area.value === AREA_ENUM.AREA_1) {
        t = r;
        r = -s;
        s = t;
      } else if (area.value === AREA_ENUM.AREA_2) {
        r = -r;
        s = -s;
      } else if (area.value === AREA_ENUM.AREA_3) {
        t = r;
        r = s;
        s = -t;
      }
      if (this.face === FACE_ENUM.RIGHT) {
        t = q;
        q = -r;
        r = t;
      } else if (this.face === FACE_ENUM.BACK) {
        q = -q;
        r = -r;
      } else if (this.face === FACE_ENUM.LEFT) {
        t = q;
        q = r;
        r = -t;
      }
      lp.phi = Math.acos(-s) - HALF_PI;
      lp.lam = Math.atan2(r, q);
      if (this.face === FACE_ENUM.RIGHT) {
        lp.lam = qsc_shift_lon_origin(lp.lam, -HALF_PI);
      } else if (this.face === FACE_ENUM.BACK) {
        lp.lam = qsc_shift_lon_origin(lp.lam, -SPI);
      } else if (this.face === FACE_ENUM.LEFT) {
        lp.lam = qsc_shift_lon_origin(lp.lam, +HALF_PI);
      }
    }
    if (this.es !== 0) {
      var invert_sign;
      var tanphi, xa;
      invert_sign = lp.phi < 0 ? 1 : 0;
      tanphi = Math.tan(lp.phi);
      xa = this.b / Math.sqrt(tanphi * tanphi + this.one_minus_f_squared);
      lp.phi = Math.atan(Math.sqrt(this.a * this.a - xa * xa) / (this.one_minus_f * xa));
      if (invert_sign) {
        lp.phi = -lp.phi;
      }
    }
    lp.lam += this.long0;
    p.x = lp.lam;
    p.y = lp.phi;
    return p;
  }
  function qsc_fwd_equat_face_theta(phi, y, x, area) {
    var theta;
    if (phi < EPSLN) {
      area.value = AREA_ENUM.AREA_0;
      theta = 0;
    } else {
      theta = Math.atan2(y, x);
      if (Math.abs(theta) <= FORTPI) {
        area.value = AREA_ENUM.AREA_0;
      } else if (theta > FORTPI && theta <= HALF_PI + FORTPI) {
        area.value = AREA_ENUM.AREA_1;
        theta -= HALF_PI;
      } else if (theta > HALF_PI + FORTPI || theta <= -(HALF_PI + FORTPI)) {
        area.value = AREA_ENUM.AREA_2;
        theta = theta >= 0 ? theta - SPI : theta + SPI;
      } else {
        area.value = AREA_ENUM.AREA_3;
        theta += HALF_PI;
      }
    }
    return theta;
  }
  function qsc_shift_lon_origin(lon, offset) {
    var slon = lon + offset;
    if (slon < -SPI) {
      slon += TWO_PI;
    } else if (slon > +SPI) {
      slon -= TWO_PI;
    }
    return slon;
  }
  var names30 = ["Quadrilateralized Spherical Cube", "Quadrilateralized_Spherical_Cube", "qsc"];
  var qsc_default = {
    init: init29,
    forward: forward28,
    inverse: inverse28,
    names: names30
  };

  // node_modules/proj4/lib/projections/robin.js
  var COEFS_X = [
    [1, 22199e-21, -715515e-10, 31103e-10],
    [0.9986, -482243e-9, -24897e-9, -13309e-10],
    [0.9954, -83103e-8, -448605e-10, -986701e-12],
    [0.99, -135364e-8, -59661e-9, 36777e-10],
    [0.9822, -167442e-8, -449547e-11, -572411e-11],
    [0.973, -214868e-8, -903571e-10, 18736e-12],
    [0.96, -305085e-8, -900761e-10, 164917e-11],
    [0.9427, -382792e-8, -653386e-10, -26154e-10],
    [0.9216, -467746e-8, -10457e-8, 481243e-11],
    [0.8962, -536223e-8, -323831e-10, -543432e-11],
    [0.8679, -609363e-8, -113898e-9, 332484e-11],
    [0.835, -698325e-8, -640253e-10, 934959e-12],
    [0.7986, -755338e-8, -500009e-10, 935324e-12],
    [0.7597, -798324e-8, -35971e-9, -227626e-11],
    [0.7186, -851367e-8, -701149e-10, -86303e-10],
    [0.6732, -986209e-8, -199569e-9, 191974e-10],
    [0.6213, -0.010418, 883923e-10, 624051e-11],
    [0.5722, -906601e-8, 182e-6, 624051e-11],
    [0.5322, -677797e-8, 275608e-9, 624051e-11]
  ];
  var COEFS_Y = [
    [-520417e-23, 0.0124, 121431e-23, -845284e-16],
    [0.062, 0.0124, -126793e-14, 422642e-15],
    [0.124, 0.0124, 507171e-14, -160604e-14],
    [0.186, 0.0123999, -190189e-13, 600152e-14],
    [0.248, 0.0124002, 710039e-13, -224e-10],
    [0.31, 0.0123992, -264997e-12, 835986e-13],
    [0.372, 0.0124029, 988983e-12, -311994e-12],
    [0.434, 0.0123893, -369093e-11, -435621e-12],
    [0.4958, 0.0123198, -102252e-10, -345523e-12],
    [0.5571, 0.0121916, -154081e-10, -582288e-12],
    [0.6176, 0.0119938, -241424e-10, -525327e-12],
    [0.6769, 0.011713, -320223e-10, -516405e-12],
    [0.7346, 0.0113541, -397684e-10, -609052e-12],
    [0.7903, 0.0109107, -489042e-10, -104739e-11],
    [0.8435, 0.0103431, -64615e-9, -140374e-14],
    [0.8936, 969686e-8, -64636e-9, -8547e-9],
    [0.9394, 840947e-8, -192841e-9, -42106e-10],
    [0.9761, 616527e-8, -256e-6, -42106e-10],
    [1, 328947e-8, -319159e-9, -42106e-10]
  ];
  var FXC = 0.8487;
  var FYC = 1.3523;
  var C1 = R2D / 5;
  var RC1 = 1 / C1;
  var NODES = 18;
  var poly3_val = function(coefs, x) {
    return coefs[0] + x * (coefs[1] + x * (coefs[2] + x * coefs[3]));
  };
  var poly3_der = function(coefs, x) {
    return coefs[1] + x * (2 * coefs[2] + x * 3 * coefs[3]);
  };
  function newton_rapshon(f_df, start2, max_err, iters) {
    var x = start2;
    for (; iters; --iters) {
      var upd = f_df(x);
      x -= upd;
      if (Math.abs(upd) < max_err) {
        break;
      }
    }
    return x;
  }
  function init30() {
    this.x0 = this.x0 || 0;
    this.y0 = this.y0 || 0;
    this.long0 = this.long0 || 0;
    this.es = 0;
    this.title = this.title || "Robinson";
  }
  function forward29(ll) {
    var lon = adjust_lon_default(ll.x - this.long0, this.over);
    var dphi = Math.abs(ll.y);
    var i = Math.floor(dphi * C1);
    if (i < 0) {
      i = 0;
    } else if (i >= NODES) {
      i = NODES - 1;
    }
    dphi = R2D * (dphi - RC1 * i);
    var xy = {
      x: poly3_val(COEFS_X[i], dphi) * lon,
      y: poly3_val(COEFS_Y[i], dphi)
    };
    if (ll.y < 0) {
      xy.y = -xy.y;
    }
    xy.x = xy.x * this.a * FXC + this.x0;
    xy.y = xy.y * this.a * FYC + this.y0;
    if (ll.z !== void 0) {
      xy.z = ll.z;
    }
    if (ll.m !== void 0) {
      xy.m = ll.m;
    }
    return xy;
  }
  function inverse29(xy) {
    var ll = {
      x: (xy.x - this.x0) / (this.a * FXC),
      y: Math.abs(xy.y - this.y0) / (this.a * FYC)
    };
    if (ll.y >= 1) {
      ll.x /= COEFS_X[NODES][0];
      ll.y = xy.y < 0 ? -HALF_PI : HALF_PI;
    } else {
      var i = Math.floor(ll.y * NODES);
      if (i < 0) {
        i = 0;
      } else if (i >= NODES) {
        i = NODES - 1;
      }
      for (; ; ) {
        if (COEFS_Y[i][0] > ll.y) {
          --i;
        } else if (COEFS_Y[i + 1][0] <= ll.y) {
          ++i;
        } else {
          break;
        }
      }
      var coefs = COEFS_Y[i];
      var t = 5 * (ll.y - coefs[0]) / (COEFS_Y[i + 1][0] - coefs[0]);
      t = newton_rapshon(function(x) {
        return (poly3_val(coefs, x) - ll.y) / poly3_der(coefs, x);
      }, t, EPSLN, 100);
      ll.x /= poly3_val(COEFS_X[i], t);
      ll.y = (5 * i + t) * D2R;
      if (xy.y < 0) {
        ll.y = -ll.y;
      }
    }
    ll.x = adjust_lon_default(ll.x + this.long0, this.over);
    if (xy.z !== void 0) {
      ll.z = xy.z;
    }
    if (xy.m !== void 0) {
      ll.m = xy.m;
    }
    return ll;
  }
  var names31 = ["Robinson", "robin"];
  var robin_default = {
    init: init30,
    forward: forward29,
    inverse: inverse29,
    names: names31
  };

  // node_modules/proj4/lib/projections/geocent.js
  function init31() {
    this.name = "geocent";
  }
  function forward30(p) {
    var point = geodeticToGeocentric(p, this.es, this.a);
    return point;
  }
  function inverse30(p) {
    var point = geocentricToGeodetic(p, this.es, this.a, this.b);
    return point;
  }
  var names32 = ["Geocentric", "geocentric", "geocent", "Geocent"];
  var geocent_default = {
    init: init31,
    forward: forward30,
    inverse: inverse30,
    names: names32
  };

  // node_modules/proj4/lib/projections/tpers.js
  var mode = {
    N_POLE: 0,
    S_POLE: 1,
    EQUIT: 2,
    OBLIQ: 3
  };
  var params = {
    h: { def: 1e5, num: true },
    // default is Karman line, no default in PROJ.7
    azi: { def: 0, num: true, degrees: true },
    // default is North
    tilt: { def: 0, num: true, degrees: true },
    // default is Nadir
    long0: { def: 0, num: true },
    // default is Greenwich, conversion to rad is automatic
    lat0: { def: 0, num: true }
    // default is Equator, conversion to rad is automatic
  };
  function init32() {
    Object.keys(params).forEach(function(p) {
      if (typeof this[p] === "undefined") {
        this[p] = params[p].def;
      } else if (params[p].num && isNaN(this[p])) {
        throw new Error("Invalid parameter value, must be numeric " + p + " = " + this[p]);
      } else if (params[p].num) {
        this[p] = parseFloat(this[p]);
      }
      if (params[p].degrees) {
        this[p] = this[p] * D2R;
      }
    }.bind(this));
    if (Math.abs(Math.abs(this.lat0) - HALF_PI) < EPSLN) {
      this.mode = this.lat0 < 0 ? mode.S_POLE : mode.N_POLE;
    } else if (Math.abs(this.lat0) < EPSLN) {
      this.mode = mode.EQUIT;
    } else {
      this.mode = mode.OBLIQ;
      this.sinph0 = Math.sin(this.lat0);
      this.cosph0 = Math.cos(this.lat0);
    }
    this.pn1 = this.h / this.a;
    if (this.pn1 <= 0 || this.pn1 > 1e10) {
      throw new Error("Invalid height");
    }
    this.p = 1 + this.pn1;
    this.rp = 1 / this.p;
    this.h1 = 1 / this.pn1;
    this.pfact = (this.p + 1) * this.h1;
    this.es = 0;
    var omega = this.tilt;
    var gamma = this.azi;
    this.cg = Math.cos(gamma);
    this.sg = Math.sin(gamma);
    this.cw = Math.cos(omega);
    this.sw = Math.sin(omega);
  }
  function forward31(p) {
    p.x -= this.long0;
    var sinphi = Math.sin(p.y);
    var cosphi = Math.cos(p.y);
    var coslam = Math.cos(p.x);
    var x, y;
    switch (this.mode) {
      case mode.OBLIQ:
        y = this.sinph0 * sinphi + this.cosph0 * cosphi * coslam;
        break;
      case mode.EQUIT:
        y = cosphi * coslam;
        break;
      case mode.S_POLE:
        y = -sinphi;
        break;
      case mode.N_POLE:
        y = sinphi;
        break;
    }
    y = this.pn1 / (this.p - y);
    x = y * cosphi * Math.sin(p.x);
    switch (this.mode) {
      case mode.OBLIQ:
        y *= this.cosph0 * sinphi - this.sinph0 * cosphi * coslam;
        break;
      case mode.EQUIT:
        y *= sinphi;
        break;
      case mode.N_POLE:
        y *= -(cosphi * coslam);
        break;
      case mode.S_POLE:
        y *= cosphi * coslam;
        break;
    }
    var yt, ba;
    yt = y * this.cg + x * this.sg;
    ba = 1 / (yt * this.sw * this.h1 + this.cw);
    x = (x * this.cg - y * this.sg) * this.cw * ba;
    y = yt * ba;
    p.x = x * this.a;
    p.y = y * this.a;
    return p;
  }
  function inverse31(p) {
    p.x /= this.a;
    p.y /= this.a;
    var r = { x: p.x, y: p.y };
    var bm, bq, yt;
    yt = 1 / (this.pn1 - p.y * this.sw);
    bm = this.pn1 * p.x * yt;
    bq = this.pn1 * p.y * this.cw * yt;
    p.x = bm * this.cg + bq * this.sg;
    p.y = bq * this.cg - bm * this.sg;
    var rh = hypot_default(p.x, p.y);
    if (Math.abs(rh) < EPSLN) {
      r.x = 0;
      r.y = p.y;
    } else {
      var cosz, sinz;
      sinz = 1 - rh * rh * this.pfact;
      sinz = (this.p - Math.sqrt(sinz)) / (this.pn1 / rh + rh / this.pn1);
      cosz = Math.sqrt(1 - sinz * sinz);
      switch (this.mode) {
        case mode.OBLIQ:
          r.y = Math.asin(cosz * this.sinph0 + p.y * sinz * this.cosph0 / rh);
          p.y = (cosz - this.sinph0 * Math.sin(r.y)) * rh;
          p.x *= sinz * this.cosph0;
          break;
        case mode.EQUIT:
          r.y = Math.asin(p.y * sinz / rh);
          p.y = cosz * rh;
          p.x *= sinz;
          break;
        case mode.N_POLE:
          r.y = Math.asin(cosz);
          p.y = -p.y;
          break;
        case mode.S_POLE:
          r.y = -Math.asin(cosz);
          break;
      }
      r.x = Math.atan2(p.x, p.y);
    }
    p.x = r.x + this.long0;
    p.y = r.y;
    return p;
  }
  var names33 = ["Tilted_Perspective", "tpers"];
  var tpers_default = {
    init: init32,
    forward: forward31,
    inverse: inverse31,
    names: names33
  };

  // node_modules/proj4/lib/projections/geos.js
  function init33() {
    this.flip_axis = this.sweep === "x" ? 1 : 0;
    this.h = Number(this.h);
    this.radius_g_1 = this.h / this.a;
    if (this.radius_g_1 <= 0 || this.radius_g_1 > 1e10) {
      throw new Error();
    }
    this.radius_g = 1 + this.radius_g_1;
    this.C = this.radius_g * this.radius_g - 1;
    if (this.es !== 0) {
      var one_es = 1 - this.es;
      var rone_es = 1 / one_es;
      this.radius_p = Math.sqrt(one_es);
      this.radius_p2 = one_es;
      this.radius_p_inv2 = rone_es;
      this.shape = "ellipse";
    } else {
      this.radius_p = 1;
      this.radius_p2 = 1;
      this.radius_p_inv2 = 1;
      this.shape = "sphere";
    }
    if (!this.title) {
      this.title = "Geostationary Satellite View";
    }
  }
  function forward32(p) {
    var lon = p.x;
    var lat = p.y;
    var tmp, v_x, v_y, v_z;
    lon = lon - this.long0;
    if (this.shape === "ellipse") {
      lat = Math.atan(this.radius_p2 * Math.tan(lat));
      var r = this.radius_p / hypot_default(this.radius_p * Math.cos(lat), Math.sin(lat));
      v_x = r * Math.cos(lon) * Math.cos(lat);
      v_y = r * Math.sin(lon) * Math.cos(lat);
      v_z = r * Math.sin(lat);
      if ((this.radius_g - v_x) * v_x - v_y * v_y - v_z * v_z * this.radius_p_inv2 < 0) {
        p.x = Number.NaN;
        p.y = Number.NaN;
        return p;
      }
      tmp = this.radius_g - v_x;
      if (this.flip_axis) {
        p.x = this.radius_g_1 * Math.atan(v_y / hypot_default(v_z, tmp));
        p.y = this.radius_g_1 * Math.atan(v_z / tmp);
      } else {
        p.x = this.radius_g_1 * Math.atan(v_y / tmp);
        p.y = this.radius_g_1 * Math.atan(v_z / hypot_default(v_y, tmp));
      }
    } else if (this.shape === "sphere") {
      tmp = Math.cos(lat);
      v_x = Math.cos(lon) * tmp;
      v_y = Math.sin(lon) * tmp;
      v_z = Math.sin(lat);
      tmp = this.radius_g - v_x;
      if (this.flip_axis) {
        p.x = this.radius_g_1 * Math.atan(v_y / hypot_default(v_z, tmp));
        p.y = this.radius_g_1 * Math.atan(v_z / tmp);
      } else {
        p.x = this.radius_g_1 * Math.atan(v_y / tmp);
        p.y = this.radius_g_1 * Math.atan(v_z / hypot_default(v_y, tmp));
      }
    }
    p.x = p.x * this.a;
    p.y = p.y * this.a;
    return p;
  }
  function inverse32(p) {
    var v_x = -1;
    var v_y = 0;
    var v_z = 0;
    var a, b, det, k;
    p.x = p.x / this.a;
    p.y = p.y / this.a;
    if (this.shape === "ellipse") {
      if (this.flip_axis) {
        v_z = Math.tan(p.y / this.radius_g_1);
        v_y = Math.tan(p.x / this.radius_g_1) * hypot_default(1, v_z);
      } else {
        v_y = Math.tan(p.x / this.radius_g_1);
        v_z = Math.tan(p.y / this.radius_g_1) * hypot_default(1, v_y);
      }
      var v_zp = v_z / this.radius_p;
      a = v_y * v_y + v_zp * v_zp + v_x * v_x;
      b = 2 * this.radius_g * v_x;
      det = b * b - 4 * a * this.C;
      if (det < 0) {
        p.x = Number.NaN;
        p.y = Number.NaN;
        return p;
      }
      k = (-b - Math.sqrt(det)) / (2 * a);
      v_x = this.radius_g + k * v_x;
      v_y *= k;
      v_z *= k;
      p.x = Math.atan2(v_y, v_x);
      p.y = Math.atan(v_z * Math.cos(p.x) / v_x);
      p.y = Math.atan(this.radius_p_inv2 * Math.tan(p.y));
    } else if (this.shape === "sphere") {
      if (this.flip_axis) {
        v_z = Math.tan(p.y / this.radius_g_1);
        v_y = Math.tan(p.x / this.radius_g_1) * Math.sqrt(1 + v_z * v_z);
      } else {
        v_y = Math.tan(p.x / this.radius_g_1);
        v_z = Math.tan(p.y / this.radius_g_1) * Math.sqrt(1 + v_y * v_y);
      }
      a = v_y * v_y + v_z * v_z + v_x * v_x;
      b = 2 * this.radius_g * v_x;
      det = b * b - 4 * a * this.C;
      if (det < 0) {
        p.x = Number.NaN;
        p.y = Number.NaN;
        return p;
      }
      k = (-b - Math.sqrt(det)) / (2 * a);
      v_x = this.radius_g + k * v_x;
      v_y *= k;
      v_z *= k;
      p.x = Math.atan2(v_y, v_x);
      p.y = Math.atan(v_z * Math.cos(p.x) / v_x);
    }
    p.x = p.x + this.long0;
    return p;
  }
  var names34 = ["Geostationary Satellite View", "Geostationary_Satellite", "geos"];
  var geos_default = {
    init: init33,
    forward: forward32,
    inverse: inverse32,
    names: names34
  };

  // node_modules/proj4/lib/projections/eqearth.js
  var A1 = 1.340264;
  var A2 = -0.081106;
  var A3 = 893e-6;
  var A4 = 3796e-6;
  var M = Math.sqrt(3) / 2;
  function init34() {
    this.long0 = this.long0 !== void 0 ? this.long0 : 0;
    this.x0 = this.x0 !== void 0 ? this.x0 : 0;
    this.y0 = this.y0 !== void 0 ? this.y0 : 0;
    if (this.es !== 0) {
      this.apa = authset(this.es);
      this.qp = qsfnz_default(this.e, 1);
      this.rqda = Math.sqrt(0.5 * this.qp);
    }
  }
  function forward33(p) {
    var lam = adjust_lon_default(p.x - this.long0, this.over);
    var phi = p.y;
    var sinphi = Math.sin(phi);
    if (this.es !== 0) {
      sinphi = qsfnz_default(this.e, sinphi) / this.qp;
    }
    var paramLat = Math.asin(M * sinphi), paramLatSq = paramLat * paramLat, paramLatPow6 = paramLatSq * paramLatSq * paramLatSq;
    p.x = lam * Math.cos(paramLat) / (M * (A1 + 3 * A2 * paramLatSq + paramLatPow6 * (7 * A3 + 9 * A4 * paramLatSq)));
    p.y = paramLat * (A1 + A2 * paramLatSq + paramLatPow6 * (A3 + A4 * paramLatSq));
    if (this.es !== 0) {
      p.x *= this.rqda;
      p.y *= this.rqda;
    }
    p.x = this.a * p.x + this.x0;
    p.y = this.a * p.y + this.y0;
    return p;
  }
  function inverse33(p) {
    p.x = (p.x - this.x0) / this.a;
    p.y = (p.y - this.y0) / this.a;
    if (this.es !== 0) {
      p.x /= this.rqda;
      p.y /= this.rqda;
    }
    var EPS = 1e-9, NITER = 12, paramLat = p.y, paramLatSq, paramLatPow6, fy, fpy, dlat, i;
    for (i = 0; i < NITER; ++i) {
      paramLatSq = paramLat * paramLat;
      paramLatPow6 = paramLatSq * paramLatSq * paramLatSq;
      fy = paramLat * (A1 + A2 * paramLatSq + paramLatPow6 * (A3 + A4 * paramLatSq)) - p.y;
      fpy = A1 + 3 * A2 * paramLatSq + paramLatPow6 * (7 * A3 + 9 * A4 * paramLatSq);
      paramLat -= dlat = fy / fpy;
      if (Math.abs(dlat) < EPS) {
        break;
      }
    }
    paramLatSq = paramLat * paramLat;
    paramLatPow6 = paramLatSq * paramLatSq * paramLatSq;
    p.x = M * p.x * (A1 + 3 * A2 * paramLatSq + paramLatPow6 * (7 * A3 + 9 * A4 * paramLatSq)) / Math.cos(paramLat);
    p.y = Math.asin(Math.sin(paramLat) / M);
    if (this.es !== 0) {
      p.y = authlat(p.y, this.apa);
    }
    p.x = adjust_lon_default(p.x + this.long0, this.over);
    return p;
  }
  var names35 = ["eqearth", "Equal Earth", "Equal_Earth"];
  var eqearth_default = {
    init: init34,
    forward: forward33,
    inverse: inverse33,
    names: names35
  };

  // node_modules/proj4/lib/projections/bonne.js
  var EPS10 = 1e-10;
  function init35() {
    var c;
    this.phi1 = this.lat1;
    if (Math.abs(this.phi1) < EPS10) {
      throw new Error();
    }
    if (this.es) {
      this.en = pj_enfn_default(this.es);
      this.m1 = pj_mlfn_default(
        this.phi1,
        this.am1 = Math.sin(this.phi1),
        c = Math.cos(this.phi1),
        this.en
      );
      this.am1 = c / (Math.sqrt(1 - this.es * this.am1 * this.am1) * this.am1);
      this.inverse = e_inv;
      this.forward = e_fwd;
    } else {
      if (Math.abs(this.phi1) + EPS10 >= HALF_PI) {
        this.cphi1 = 0;
      } else {
        this.cphi1 = 1 / Math.tan(this.phi1);
      }
      this.inverse = s_inv;
      this.forward = s_fwd;
    }
  }
  function e_fwd(p) {
    var lam = adjust_lon_default(p.x - (this.long0 || 0), this.over);
    var phi = p.y;
    var rh, E, c;
    rh = this.am1 + this.m1 - pj_mlfn_default(phi, E = Math.sin(phi), c = Math.cos(phi), this.en);
    E = c * lam / (rh * Math.sqrt(1 - this.es * E * E));
    p.x = rh * Math.sin(E);
    p.y = this.am1 - rh * Math.cos(E);
    p.x = this.a * p.x + (this.x0 || 0);
    p.y = this.a * p.y + (this.y0 || 0);
    return p;
  }
  function e_inv(p) {
    p.x = (p.x - (this.x0 || 0)) / this.a;
    p.y = (p.y - (this.y0 || 0)) / this.a;
    var s, rh, lam, phi;
    rh = hypot_default(p.x, p.y = this.am1 - p.y);
    phi = pj_inv_mlfn_default(this.am1 + this.m1 - rh, this.es, this.en);
    if ((s = Math.abs(phi)) < HALF_PI) {
      s = Math.sin(phi);
      lam = rh * Math.atan2(p.x, p.y) * Math.sqrt(1 - this.es * s * s) / Math.cos(phi);
    } else if (Math.abs(s - HALF_PI) <= EPS10) {
      lam = 0;
    } else {
      throw new Error();
    }
    p.x = adjust_lon_default(lam + (this.long0 || 0), this.over);
    p.y = adjust_lat_default(phi);
    return p;
  }
  function s_fwd(p) {
    var lam = adjust_lon_default(p.x - (this.long0 || 0), this.over);
    var phi = p.y;
    var E, rh;
    rh = this.cphi1 + this.phi1 - phi;
    if (Math.abs(rh) > EPS10) {
      p.x = rh * Math.sin(E = lam * Math.cos(phi) / rh);
      p.y = this.cphi1 - rh * Math.cos(E);
    } else {
      p.x = p.y = 0;
    }
    p.x = this.a * p.x + (this.x0 || 0);
    p.y = this.a * p.y + (this.y0 || 0);
    return p;
  }
  function s_inv(p) {
    p.x = (p.x - (this.x0 || 0)) / this.a;
    p.y = (p.y - (this.y0 || 0)) / this.a;
    var lam, phi;
    var rh = hypot_default(p.x, p.y = this.cphi1 - p.y);
    phi = this.cphi1 + this.phi1 - rh;
    if (Math.abs(phi) > HALF_PI) {
      throw new Error();
    }
    if (Math.abs(Math.abs(phi) - HALF_PI) <= EPS10) {
      lam = 0;
    } else {
      lam = rh * Math.atan2(p.x, p.y) / Math.cos(phi);
    }
    p.x = adjust_lon_default(lam + (this.long0 || 0), this.over);
    p.y = adjust_lat_default(phi);
    return p;
  }
  var names36 = ["bonne", "Bonne (Werner lat_1=90)"];
  var bonne_default = {
    init: init35,
    names: names36
  };

  // node_modules/proj4/lib/projections/ob_tran.js
  var projectionType = {
    OBLIQUE: {
      forward: forwardOblique,
      inverse: inverseOblique
    },
    TRANSVERSE: {
      forward: forwardTransverse,
      inverse: inverseTransverse
    }
  };
  var paramSets = {
    ROTATE: {
      o_alpha: "oAlpha",
      o_lon_c: "oLongC",
      o_lat_c: "oLatC"
    },
    NEW_POLE: {
      o_lat_p: "oLatP",
      o_lon_p: "oLongP"
    },
    NEW_EQUATOR: {
      o_lon_1: "oLong1",
      o_lat_1: "oLat1",
      o_lon_2: "oLong2",
      o_lat_2: "oLat2"
    }
  };
  function init36() {
    this.x0 = this.x0 || 0;
    this.y0 = this.y0 || 0;
    this.long0 = this.long0 || 0;
    this.title = this.title || "General Oblique Transformation";
    this.isIdentity = names2.includes(this.o_proj);
    if (!this.o_proj) {
      throw new Error("Missing parameter: o_proj");
    }
    if (this.o_proj === `ob_tran`) {
      throw new Error("Invalid value for o_proj: " + this.o_proj);
    }
    const newProjStr = this.projStr.replace("+proj=ob_tran", "").replace("+o_proj=", "+proj=").trim();
    const oProj = Proj_default(newProjStr);
    if (!oProj) {
      throw new Error("Invalid parameter: o_proj. Unknown projection " + this.o_proj);
    }
    oProj.long0 = 0;
    this.obliqueProjection = oProj;
    let matchedSet;
    const paramSetsKeys = Object.keys(paramSets);
    const parseParam = (name) => {
      if (typeof this[name] === `undefined`) {
        return void 0;
      }
      const val = parseFloat(this[name]) * D2R;
      if (isNaN(val)) {
        throw new Error("Invalid value for " + name + ": " + this[name]);
      }
      return val;
    };
    for (let i = 0; i < paramSetsKeys.length; i++) {
      const setKey = paramSetsKeys[i];
      const set = paramSets[setKey];
      const params2 = Object.entries(set);
      const setHasParams = params2.some(
        ([p]) => typeof this[p] !== "undefined"
      );
      if (!setHasParams) {
        continue;
      }
      matchedSet = set;
      for (let ii = 0; ii < params2.length; ii++) {
        const [inputParam, param] = params2[ii];
        const val = parseParam(inputParam);
        if (typeof val === "undefined") {
          throw new Error("Missing parameter: " + inputParam + ".");
        }
        this[param] = val;
      }
      break;
    }
    if (!matchedSet) {
      throw new Error("No valid parameters provided for ob_tran projection.");
    }
    const { lamp, phip } = createRotation(this, matchedSet);
    this.lamp = lamp;
    if (Math.abs(phip) > EPSLN) {
      this.cphip = Math.cos(phip);
      this.sphip = Math.sin(phip);
      this.projectionType = projectionType.OBLIQUE;
    } else {
      this.projectionType = projectionType.TRANSVERSE;
    }
  }
  function forward34(p) {
    return this.projectionType.forward(this, p);
  }
  function inverse34(p) {
    return this.projectionType.inverse(this, p);
  }
  function createRotation(params2, how) {
    let phip, lamp;
    if (how === paramSets.ROTATE) {
      let lamc = params2.oLongC;
      let phic = params2.oLatC;
      let alpha = params2.oAlpha;
      if (Math.abs(Math.abs(phic) - HALF_PI) <= EPSLN) {
        throw new Error("Invalid value for o_lat_c: " + params2.o_lat_c + " should be < 90\xB0");
      }
      lamp = lamc + Math.atan2(-1 * Math.cos(alpha), -1 * Math.sin(alpha) * Math.sin(phic));
      phip = Math.asin(Math.cos(phic) * Math.sin(alpha));
    } else if (how === paramSets.NEW_POLE) {
      lamp = params2.oLongP;
      phip = params2.oLatP;
    } else {
      let lam1 = params2.oLong1;
      let phi1 = params2.oLat1;
      let lam2 = params2.oLong2;
      let phi2 = params2.oLat2;
      let con = Math.abs(phi1);
      if (Math.abs(phi1) > HALF_PI - EPSLN) {
        throw new Error("Invalid value for o_lat_1: " + params2.o_lat_1 + " should be < 90\xB0");
      }
      if (Math.abs(phi2) > HALF_PI - EPSLN) {
        throw new Error("Invalid value for o_lat_2: " + params2.o_lat_2 + " should be < 90\xB0");
      }
      if (Math.abs(phi1 - phi2) < EPSLN) {
        throw new Error("Invalid value for o_lat_1 and o_lat_2: o_lat_1 should be different from o_lat_2");
      }
      if (con < EPSLN) {
        throw new Error("Invalid value for o_lat_1: o_lat_1 should be different from zero");
      }
      lamp = Math.atan2(
        Math.cos(phi1) * Math.sin(phi2) * Math.cos(lam1) - Math.sin(phi1) * Math.cos(phi2) * Math.cos(lam2),
        Math.sin(phi1) * Math.cos(phi2) * Math.sin(lam2) - Math.cos(phi1) * Math.sin(phi2) * Math.sin(lam1)
      );
      phip = Math.atan(-1 * Math.cos(lamp - lam1) / Math.tan(phi1));
    }
    return { lamp, phip };
  }
  function forwardOblique(self2, lp) {
    let { x: lam, y: phi } = lp;
    lam = adjust_lon_default(lam - self2.long0, self2.over);
    const coslam = Math.cos(lam);
    const sinphi = Math.sin(phi);
    const cosphi = Math.cos(phi);
    lp.x = adjust_lon_default(
      Math.atan2(
        cosphi * Math.sin(lam),
        self2.sphip * cosphi * coslam + self2.cphip * sinphi
      ) + self2.lamp
    );
    lp.y = Math.asin(
      self2.sphip * sinphi - self2.cphip * cosphi * coslam
    );
    const result = self2.obliqueProjection.forward(lp);
    if (self2.isIdentity) {
      result.x *= R2D;
      result.y *= R2D;
    }
    return result;
  }
  function forwardTransverse(self2, lp) {
    let { x: lam, y: phi } = lp;
    lam = adjust_lon_default(lam - self2.long0, self2.over);
    const cosphi = Math.cos(phi);
    const coslam = Math.cos(lam);
    lp.x = adjust_lon_default(
      Math.atan2(
        cosphi * Math.sin(lam),
        Math.sin(phi)
      ) + self2.lamp
    );
    lp.y = Math.asin(-1 * cosphi * coslam);
    const result = self2.obliqueProjection.forward(lp);
    if (self2.isIdentity) {
      result.x *= R2D;
      result.y *= R2D;
    }
    return result;
  }
  function inverseOblique(self2, lp) {
    if (self2.isIdentity) {
      lp.x *= D2R;
      lp.y *= D2R;
    }
    const innerLp = self2.obliqueProjection.inverse(lp);
    let { x: lam, y: phi } = innerLp;
    if (lam < Number.MAX_VALUE) {
      lam -= self2.lamp;
      const coslam = Math.cos(lam);
      const sinphi = Math.sin(phi);
      const cosphi = Math.cos(phi);
      lp.x = Math.atan2(
        cosphi * Math.sin(lam),
        self2.sphip * cosphi * coslam - self2.cphip * sinphi
      );
      lp.y = Math.asin(
        self2.sphip * sinphi + self2.cphip * cosphi * coslam
      );
    }
    lp.x = adjust_lon_default(lp.x + self2.long0);
    return lp;
  }
  function inverseTransverse(self2, lp) {
    if (self2.isIdentity) {
      lp.x *= D2R;
      lp.y *= D2R;
    }
    const innerLp = self2.obliqueProjection.inverse(lp);
    let { x: lam, y: phi } = innerLp;
    if (lam < Number.MAX_VALUE) {
      const cosphi = Math.cos(phi);
      lam -= self2.lamp;
      lp.x = Math.atan2(
        cosphi * Math.sin(lam),
        -1 * Math.sin(phi)
      );
      lp.y = Math.asin(
        cosphi * Math.cos(lam)
      );
    }
    lp.x = adjust_lon_default(lp.x + self2.long0);
    return lp;
  }
  var names37 = ["General Oblique Transformation", "General_Oblique_Transformation", "ob_tran"];
  var ob_tran_default = {
    init: init36,
    forward: forward34,
    inverse: inverse34,
    names: names37
  };

  // node_modules/proj4/projs.js
  function projs_default(proj43) {
    proj43.Proj.projections.add(tmerc_default);
    proj43.Proj.projections.add(etmerc_default);
    proj43.Proj.projections.add(utm_default);
    proj43.Proj.projections.add(sterea_default);
    proj43.Proj.projections.add(stere_default);
    proj43.Proj.projections.add(somerc_default);
    proj43.Proj.projections.add(omerc_default);
    proj43.Proj.projections.add(lcc_default);
    proj43.Proj.projections.add(krovak_default);
    proj43.Proj.projections.add(cass_default);
    proj43.Proj.projections.add(laea_default);
    proj43.Proj.projections.add(aea_default);
    proj43.Proj.projections.add(gnom_default);
    proj43.Proj.projections.add(cea_default);
    proj43.Proj.projections.add(eqc_default);
    proj43.Proj.projections.add(poly_default);
    proj43.Proj.projections.add(nzmg_default);
    proj43.Proj.projections.add(mill_default);
    proj43.Proj.projections.add(sinu_default);
    proj43.Proj.projections.add(eck6_default);
    proj43.Proj.projections.add(moll_default);
    proj43.Proj.projections.add(eqdc_default);
    proj43.Proj.projections.add(vandg_default);
    proj43.Proj.projections.add(aeqd_default);
    proj43.Proj.projections.add(ortho_default);
    proj43.Proj.projections.add(qsc_default);
    proj43.Proj.projections.add(robin_default);
    proj43.Proj.projections.add(geocent_default);
    proj43.Proj.projections.add(tpers_default);
    proj43.Proj.projections.add(geos_default);
    proj43.Proj.projections.add(eqearth_default);
    proj43.Proj.projections.add(bonne_default);
    proj43.Proj.projections.add(ob_tran_default);
  }

  // node_modules/proj4/lib/index.js
  var proj42 = Object.assign(core_default, {
    defaultDatum: "WGS84",
    Proj: Proj_default,
    WGS84: new Proj_default("WGS84"),
    Point: Point_default,
    toPoint: toPoint_default,
    defs: defs_default,
    nadgrid,
    transform,
    mgrs: mgrs_default,
    version: "__VERSION__"
  });
  projs_default(proj42);
  var lib_default = proj42;

  // src/ign.js
  var WFS = "https://data.geopf.fr/wfs/ows";
  var REPERES = {
    "EPSG:2154": "+proj=lcc +lat_0=46.5 +lon_0=3 +lat_1=49 +lat_2=44 +x_0=700000 +y_0=6600000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
    "EPSG:2975": "+proj=utm +zone=40 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
    "EPSG:5490": "+proj=utm +zone=20 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
    "EPSG:2972": "+proj=utm +zone=22 +north +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
    "EPSG:4467": "+proj=utm +zone=21 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs"
  };
  for (const [code, def] of Object.entries(REPERES)) {
    lib_default.defs(code, def);
  }
  lib_default.defs("EPSG:4326", "+proj=longlat +datum=WGS84 +no_defs");
  function depuisWgs84(lon, lat, epsg) {
    const cle = "EPSG:" + String(epsg).replace(/[^0-9]/g, "");
    const def = REPERES[cle];
    if (!def) return [lon, lat];
    const [x, y] = lib_default("EPSG:4326", cle, [lon, lat]);
    return [x, y];
  }
  function pointDansGeometrie(pt, geom) {
    if (!geom) return false;
    const polys = geom.type === "Polygon" ? [geom.coordinates] : geom.type === "MultiPolygon" ? geom.coordinates : [];
    for (const poly of polys) {
      const anneau = poly[0] || [];
      let dedans = false;
      for (let i = 0, j = anneau.length - 1; i < anneau.length; j = i++) {
        const [xi, yi] = anneau[i];
        const [xj, yj] = anneau[j];
        if (yi > pt[1] !== yj > pt[1] && pt[0] < (xj - xi) * (pt[1] - yi) / (yj - yi) + xi) dedans = !dedans;
      }
      if (dedans) return true;
    }
    return false;
  }
  function parametre(url, cle) {
    try {
      return new URL(url).searchParams.get(cle);
    } catch {
      const m = String(url).match(new RegExp(`[?&]${cle}=([^&]+)`, "i"));
      return m ? decodeURIComponent(m[1]) : null;
    }
  }
  async function resolveTile(bbox) {
    const [minLon, minLat, maxLon, maxLat] = bbox;
    const cx = (minLon + maxLon) / 2;
    const cy = (minLat + maxLat) / 2;
    const url = `${WFS}?SERVICE=WFS&VERSION=2.0.0&REQUEST=GetFeature&TYPENAME=IGNF_LIDAR-HD_METADONNEE:metadata&outputFormat=application/json&SRSName=epsg:4326&count=20&BBOX=${minLat},${minLon},${maxLat},${maxLon}`;
    const r = await fetch(url);
    if (!r.ok) throw new Error(`Service IGN indisponible (HTTP ${r.status})`);
    const d = await r.json();
    const dalles = (d.features || []).filter((f) => f.properties && f.properties.url_npl);
    if (!dalles.length) {
      throw new Error("Aucune dalle LiDAR HD pour cette emprise (zone non couverte, ou hors France).");
    }
    let choisie = dalles[0];
    const contenante = dalles.find((f) => pointDansGeometrie([cx, cy], f.geometry));
    if (contenante) choisie = contenante;
    const urlNpl = choisie.properties.url_npl;
    const crs = parametre(urlNpl, "CRS") || parametre(choisie.properties.url_mns || "", "CRS") || "EPSG:2154";
    const epsg = parseInt(String(crs).replace(/[^0-9]/g, ""), 10) || 2154;
    return { urlNpl, epsg, dalle: choisie.properties.coordonnees_nw || "" };
  }
  function bboxDepuisCentre(lon, lat, largeurM = 150) {
    const dLon = largeurM / 2 / (111320 * Math.cos(lat * Math.PI / 180));
    const dLat = largeurM / 2 / 110540;
    return [lon - dLon, lat - dLat, lon + dLon, lat + dLat];
  }

  // src/gl.js
  var VS = `
attribute vec3 aPos;
uniform mat4 uMVP;
uniform float uDensity;
void main() {
  vec4 vue = uMVP * vec4(aPos, 1.0);
  gl_Position = vue;
  float dist = max(length(vue.xyz), 0.001);
  gl_PointSize = clamp(uDensity / dist, 1.2, 7.0);
}`;
  var FS = `
precision mediump float;
uniform vec3 uColor;
void main() {
  vec2 d = gl_PointCoord - vec2(0.5);
  float r = dot(d, d);
  if (r > 0.25) discard;
  float alpha = smoothstep(0.25, 0.12, r);
  gl_FragColor = vec4(uColor, alpha);
}`;
  function perspective(fov, aspect, near, far) {
    const f = 1 / Math.tan(fov / 2);
    const nf = 1 / (near - far);
    return new Float32Array([
      f / aspect,
      0,
      0,
      0,
      0,
      f,
      0,
      0,
      0,
      0,
      (far + near) * nf,
      -1,
      0,
      0,
      2 * far * near * nf,
      0
    ]);
  }
  function lookAt(oeil, cible2, haut) {
    let z = [oeil[0] - cible2[0], oeil[1] - cible2[1], oeil[2] - cible2[2]];
    const lz = Math.hypot(...z) || 1;
    z = z.map((v) => v / lz);
    let x = [haut[1] * z[2] - haut[2] * z[1], haut[2] * z[0] - haut[0] * z[2], haut[0] * z[1] - haut[1] * z[0]];
    const lx = Math.hypot(...x) || 1;
    x = x.map((v) => v / lx);
    const y = [z[1] * x[2] - z[2] * x[1], z[2] * x[0] - z[0] * x[2], z[0] * x[1] - z[1] * x[0]];
    return new Float32Array([
      x[0],
      y[0],
      z[0],
      0,
      x[1],
      y[1],
      z[1],
      0,
      x[2],
      y[2],
      z[2],
      0,
      -(x[0] * oeil[0] + x[1] * oeil[1] + x[2] * oeil[2]),
      -(y[0] * oeil[0] + y[1] * oeil[1] + y[2] * oeil[2]),
      -(z[0] * oeil[0] + z[1] * oeil[1] + z[2] * oeil[2]),
      1
    ]);
  }
  function multiplier(a, b) {
    const out = new Float32Array(16);
    for (let c = 0; c < 4; c++) {
      for (let r = 0; r < 4; r++) {
        out[c * 4 + r] = a[r] * b[c * 4] + a[4 + r] * b[c * 4 + 1] + a[8 + r] * b[c * 4 + 2] + a[12 + r] * b[c * 4 + 3];
      }
    }
    return out;
  }
  var VisionneusePoints = class {
    /**
     * @param {HTMLCanvasElement} canvas
     * @param {{ couleur?: string, fond?: string, density?: number }} options
     */
    constructor(canvas, options = {}) {
      this.canvas = canvas;
      this.fond = options.fond || "#0b1220";
      this.couleur = hexVersRgb(options.couleur || "#e2e8f0");
      this.density = options.density || 1;
      const gl = canvas.getContext("webgl", { antialias: true, alpha: false, preserveDrawingBuffer: true });
      if (!gl) throw new Error("WebGL indisponible dans ce navigateur.");
      this.gl = gl;
      this.programme = this._programme(VS, FS);
      this.aPos = gl.getAttribLocation(this.programme, "aPos");
      this.uMVP = gl.getUniformLocation(this.programme, "uMVP");
      this.uDensity = gl.getUniformLocation(this.programme, "uDensity");
      this.uColor = gl.getUniformLocation(this.programme, "uColor");
      this.buffer = gl.createBuffer();
      this.nb = 0;
      this.rayon = 1;
      this.centre = [0, 0, 0];
      this.azimut = -0.9;
      this.elevation = 0.62;
      this.distance = 2.7;
      this._lierEvenements();
      this.redimensionner();
    }
    _programme(vsSrc, fsSrc) {
      const gl = this.gl;
      const creer = (type, src) => {
        const s = gl.createShader(type);
        gl.shaderSource(s, src);
        gl.compileShader(s);
        if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s));
        return s;
      };
      const p = gl.createProgram();
      gl.attachShader(p, creer(gl.VERTEX_SHADER, vsSrc));
      gl.attachShader(p, creer(gl.FRAGMENT_SHADER, fsSrc));
      gl.linkProgram(p);
      if (!gl.getProgramParameter(p, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(p));
      return p;
    }
    _lierEvenements() {
      const c = this.canvas;
      let x0 = 0;
      let y0 = 0;
      let actif = false;
      const debut = (x, y) => {
        actif = true;
        x0 = x;
        y0 = y;
      };
      const mouvement = (x, y) => {
        if (!actif) return;
        this.azimut -= (x - x0) * 8e-3;
        this.elevation = Math.max(-1.35, Math.min(1.45, this.elevation + (y - y0) * 6e-3));
        x0 = x;
        y0 = y;
        this.dessiner();
      };
      c.addEventListener("pointerdown", (e) => {
        c.setPointerCapture(e.pointerId);
        debut(e.clientX, e.clientY);
      });
      c.addEventListener("pointermove", (e) => mouvement(e.clientX, e.clientY));
      c.addEventListener("pointerup", () => {
        actif = false;
      });
      c.addEventListener("pointercancel", () => {
        actif = false;
      });
      c.addEventListener(
        "wheel",
        (e) => {
          e.preventDefault();
          this.distance = Math.max(0.35, Math.min(12, this.distance * (1 + Math.sign(e.deltaY) * 0.12)));
          this.dessiner();
        },
        { passive: false }
      );
      let pince = 0;
      const doigts = /* @__PURE__ */ new Map();
      c.addEventListener("pointerdown", (e) => doigts.set(e.pointerId, null));
      c.addEventListener(
        "pointermove",
        (e) => {
          if (!doigts.has(e.pointerId)) return;
          doigts.set(e.pointerId, e);
          if (doigts.size === 2) {
            const [a, b] = [...doigts.values()];
            if (a && b) {
              const d = Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
              if (pince) {
                this.distance = Math.max(0.35, Math.min(12, this.distance * (pince / d)));
                this.dessiner();
              }
              pince = d;
            }
          }
        },
        { passive: true }
      );
      const relacher = (e) => {
        doigts.delete(e.pointerId);
        if (doigts.size < 2) pince = 0;
      };
      c.addEventListener("pointerup", relacher);
      c.addEventListener("pointercancel", relacher);
      this._observer = new ResizeObserver(() => this.redimensionner());
      this._observer.observe(c);
    }
    /** Charge un nuage de points : [{x, y, z}, …] en coordonnées réelles. */
    setPoints(points) {
      const gl = this.gl;
      const n = points.length;
      this.nb = n;
      if (!n) {
        this.donnees = new Float32Array(0);
        this.dessiner();
        return;
      }
      let minX = Infinity;
      let minY = Infinity;
      let minZ = Infinity;
      let maxX = -Infinity;
      let maxY = -Infinity;
      let maxZ = -Infinity;
      for (const p of points) {
        if (p.x < minX) minX = p.x;
        if (p.y < minY) minY = p.y;
        if (p.z < minZ) minZ = p.z;
        if (p.x > maxX) maxX = p.x;
        if (p.y > maxY) maxY = p.y;
        if (p.z > maxZ) maxZ = p.z;
      }
      this.centre = [(minX + maxX) / 2, (minY + maxY) / 2, (minZ + maxZ) / 2];
      this.rayon = Math.max(maxX - minX, maxY - minY, maxZ - minZ) / 2 || 1;
      this.etendue = { x: maxX - minX, y: maxY - minY, z: maxZ - minZ };
      const data = new Float32Array(n * 3);
      for (let i = 0; i < n; i++) {
        data[i * 3] = (points[i].x - this.centre[0]) / this.rayon;
        data[i * 3 + 1] = (points[i].y - this.centre[1]) / this.rayon;
        data[i * 3 + 2] = (points[i].z - this.centre[2]) / this.rayon;
      }
      this.donnees = data;
      gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
      gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
      this.dessiner();
    }
    redimensionner() {
      const c = this.canvas;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const l = Math.max(1, Math.round(c.clientWidth * dpr));
      const h = Math.max(1, Math.round(c.clientHeight * dpr));
      if (c.width !== l || c.height !== h) {
        c.width = l;
        c.height = h;
      }
      this.dessiner();
    }
    /** Replace la caméra sur la vue d'ensemble. */
    recadrer() {
      this.azimut = -0.9;
      this.elevation = 0.62;
      this.distance = 2.7;
      this.dessiner();
    }
    dessiner() {
      const gl = this.gl;
      const c = this.canvas;
      if (!c.width || !c.height) return;
      gl.viewport(0, 0, c.width, c.height);
      const f = hexVersRgb(this.fond);
      gl.clearColor(f[0], f[1], f[2], 1);
      gl.clearDepth(1);
      gl.enable(gl.DEPTH_TEST);
      gl.depthFunc(gl.LEQUAL);
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      if (!this.nb) return;
      gl.useProgram(this.programme);
      const aspect = c.width / c.height;
      const proj = perspective(50 * Math.PI / 180, aspect, 0.02, 60);
      const ce = Math.cos(this.elevation);
      const oeil = [
        Math.cos(this.azimut) * ce * this.distance,
        Math.sin(this.azimut) * ce * this.distance,
        Math.sin(this.elevation) * this.distance
      ];
      const mvp = multiplier(proj, lookAt(oeil, [0, 0, 0], [0, 0, 1]));
      gl.uniformMatrix4fv(this.uMVP, false, mvp);
      gl.uniform1f(this.uDensity, c.height / 2 * 0.019 * this.density);
      gl.uniform3f(this.uColor, this.couleur[0], this.couleur[1], this.couleur[2]);
      gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
      gl.enableVertexAttribArray(this.aPos);
      gl.vertexAttribPointer(this.aPos, 3, gl.FLOAT, false, 0, 0);
      gl.drawArrays(gl.POINTS, 0, this.nb);
    }
    destroy() {
      if (this._observer) this._observer.disconnect();
      const gl = this.gl;
      if (gl) {
        gl.deleteBuffer(this.buffer);
        gl.deleteProgram(this.programme);
        const perte = gl.getExtension("WEBGL_lose_context");
        if (perte) perte.loseContext();
      }
    }
  };
  function hexVersRgb(hex) {
    const h = hex.replace("#", "");
    const v = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
    const n = parseInt(v, 16);
    return [(n >> 16 & 255) / 255, (n >> 8 & 255) / 255, (n & 255) / 255];
  }

  // src/index.js
  var VERSION = "1.0.0";
  var SITE = "https://www.simulateur-toiture.fr";
  var STYLE_ID = "lidar-viewer-style";
  function baseDuScript() {
    try {
      const courant = document.currentScript;
      const src = courant && courant.src ? courant.src : [...document.scripts].map((s) => s.src).find((s) => /lidar-viewer(\.min)?\.js/.test(s));
      if (src) return new URL(".", src).href;
    } catch {
    }
    return "./";
  }
  var FEUILLE = `
.lv-cadre{position:relative;width:100%;background:#0b1220;border-radius:12px;overflow:hidden;font-family:Inter,system-ui,-apple-system,'Segoe UI',sans-serif}
.lv-canvas{display:block;width:100%;height:100%;cursor:grab;touch-action:none}
.lv-canvas:active{cursor:grabbing}
.lv-etat,.lv-aide,.lv-credit{position:absolute;z-index:2;font-size:12px;line-height:1.35;border-radius:999px;padding:5px 10px;backdrop-filter:blur(6px)}
.lv-etat{top:10px;left:10px;background:rgba(15,23,42,.72);color:#e2e8f0;transition:opacity .8s}
.lv-etat--erreur{background:rgba(127,29,29,.85);color:#fee2e2}
.lv-aide{bottom:10px;left:10px;background:rgba(15,23,42,.6);color:#94a3b8;transition:opacity .6s}
.lv-aide--cache{opacity:0}
/* cr\xE9dit : discret, mais pr\xE9sent \u2014 c'est le lien qui fait vivre la librairie */
.lv-credit{bottom:8px;right:8px;background:rgba(15,23,42,.5);color:rgba(226,232,240,.62);font-size:11px;padding:4px 9px}
.lv-credit a{color:rgba(226,232,240,.78);text-decoration:none;border-bottom:1px solid rgba(226,232,240,.28)}
.lv-credit a:hover{color:#fff;border-bottom-color:#fff}
`;
  function injecterFeuille() {
    if (document.getElementById(STYLE_ID)) return;
    const s = document.createElement("style");
    s.id = STYLE_ID;
    s.textContent = FEUILLE;
    document.head.appendChild(s);
  }
  function cible(container) {
    if (!container) throw new Error("lidar-viewer : option `container` manquante.");
    const el = typeof container === "string" ? document.querySelector(container) : container;
    if (!el) throw new Error(`lidar-viewer : conteneur introuvable (${container}).`);
    return el;
  }
  function create10(options = {}) {
    injecterFeuille();
    const hote = cible(options.container);
    const hauteur = options.height || 360;
    const cadre = document.createElement("div");
    cadre.className = "lv-cadre";
    cadre.style.height = hauteur + "px";
    const canvas = document.createElement("canvas");
    canvas.className = "lv-canvas";
    cadre.appendChild(canvas);
    const etat = document.createElement("div");
    etat.className = "lv-etat";
    etat.textContent = "Pr\xE9paration\u2026";
    cadre.appendChild(etat);
    const aide = document.createElement("div");
    aide.className = "lv-aide";
    aide.textContent = "glisser pour pivoter \xB7 molette pour zoomer";
    cadre.appendChild(aide);
    if (options.credit !== false) {
      const credit = document.createElement("div");
      credit.className = "lv-credit";
      const lien = document.createElement("a");
      lien.href = options.creditUrl || SITE;
      lien.target = "_blank";
      lien.rel = "noopener";
      lien.textContent = "simulateur-toiture.fr";
      credit.append("LiDAR HD (IGN) \xB7 visionneuse ", lien);
      cadre.appendChild(credit);
    }
    hote.appendChild(cadre);
    if (options.wasmUrl) setWasmUrl(options.wasmUrl);
    else setWasmUrl(baseDuScript() + "laz-perf.wasm");
    let visionneuse = null;
    const dire = (texte) => {
      etat.className = "lv-etat";
      etat.textContent = texte;
      options.onStatus && options.onStatus(texte);
    };
    try {
      visionneuse = new VisionneusePoints(canvas, {
        couleur: options.couleur || "#e2e8f0",
        fond: options.fond || "#0b1220"
      });
    } catch (e) {
      etat.className = "lv-etat lv-etat--erreur";
      etat.textContent = e.message;
      options.onError && options.onError(e);
      return { destroy: () => cadre.remove(), ready: Promise.reject(e) };
    }
    setTimeout(() => aide.classList.add("lv-aide--cache"), 5e3);
    const lire = async (bbox) => {
      try {
        dire("Recherche de la dalle LiDAR HD\u2026");
        const { urlNpl, epsg, dalle } = await resolveTile(bbox);
        dire("T\xE9l\xE9chargement des points\u2026");
        const [x1, y1] = depuisWgs84(bbox[0], bbox[1], epsg);
        const [x2, y2] = depuisWgs84(bbox[2], bbox[3], epsg);
        const xmin = Math.min(x1, x2);
        const xmax = Math.max(x1, x2);
        const ymin = Math.min(y1, y2);
        const ymax = Math.max(y1, y2);
        const points = await fetchPointsInBbox(urlNpl, xmin, ymin, xmax, ymax, {
          maxPoints: options.maxPoints || 4e5,
          onProgress: dire
        });
        if (!points.length) throw new Error("Aucun point LiDAR dans cette emprise.");
        visionneuse.setPoints(points);
        dire(`${points.length.toLocaleString("fr-FR")} points`);
        setTimeout(() => etat.style.opacity = "0.35", 2500);
        options.onReady && options.onReady({ points: points.length, epsg, dalle, urlNpl });
        return points;
      } catch (e) {
        etat.className = "lv-etat lv-etat--erreur";
        etat.textContent = e.message;
        options.onError && options.onError(e);
        throw e;
      }
    };
    const api = {
      version: VERSION,
      canvas,
      cadre,
      visionneuse,
      recadrer: () => visionneuse.recadrer(),
      setPoints: (points) => visionneuse.setPoints(points),
      setBbox: (bbox) => lire(bbox),
      setCenter: (centre, span) => lire(bboxDepuisCentre(centre[0], centre[1], span || options.span || 150)),
      destroy: () => {
        visionneuse.destroy();
        cadre.remove();
      }
    };
    const premier = options.bbox ? options.bbox : options.center ? bboxDepuisCentre(options.center[0], options.center[1], options.span || 150) : null;
    api.ready = premier ? lire(premier) : Promise.resolve(null);
    return api;
  }
  var version = VERSION;
  var index_default = { create: create10, version: VERSION };
  return __toCommonJS(index_exports);
})();
