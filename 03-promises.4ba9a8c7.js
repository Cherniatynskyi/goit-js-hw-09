!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},r=n.parcelRequire7bc7;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},n.parcelRequire7bc7=r);var i=r("iU1Pc"),u=document.querySelector(".form"),a=document.querySelector('[name="delay"]'),c=document.querySelector('[name="step"]'),l=document.querySelector('[name="amount"]');function d(e,n){var o=Math.random()>.3;return new Promise((function(t,r){setTimeout((function(){o?t({position:e,delay:n}):r({position:e,delay:n})}),n)}))}u.addEventListener("submit",(function(n){n.preventDefault();for(var o=Number(a.value),t=Number(c.value),r=Number(l.value),u=o,f=1;f<=r;f+=1)d(f,u).then((function(n){var o=n.position,t=n.delay;return e(i).Notify.success("✅ Fulfilled promise ".concat(o," in ").concat(t,"ms"))})).catch((function(n){var o=n.position,t=n.delay;return e(i).Notify.failure("❌ Rejected promise ".concat(o," in ").concat(t,"ms"))})),u+=t}))}();
//# sourceMappingURL=03-promises.4ba9a8c7.js.map
