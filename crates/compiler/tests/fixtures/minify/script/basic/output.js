//index.js:
 (function(modules,entryModule){var cache={};function require(id){if(cache[id])return cache[id].exports;var module={id:id,exports:{}};modules[id](module,module.exports,require);cache[id]=module;return module.exports;}require(entryModule);})({"ec853507":function(module,exports,require,dynamicRequire){"use strict";console.log("runtime/index.js");__farm_global_this__.__farm_module_system__.setPlugins([]);}},"ec853507");!function(e){for(var t in e)(globalThis||window||global||self).__farm_module_system__.register(t,e[t]);}({"05ee5ec7":function(e,t,n,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"dep_a",{enumerable:!0,get:function(){return o;}});let o=1;},b5d64806:function(e,t,n,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("05ee5ec7");document.body.innerHTML="a = "+o.dep_a;}});var __farm_global_this__=globalThis||window||global||self;var farmModuleSystem=__farm_global_this__.__farm_module_system__;farmModuleSystem.bootstrap();var entry=farmModuleSystem.require("b5d64806");