!function(){var t={btnStartRefs:document.querySelector("[data-start]"),btnStopRefs:document.querySelector("[data-stop]"),bodyRef:document.body};t.btnStartRefs.addEventListener("click",(function(){e=setInterval((function(){t.bodyRef.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),t.btnStopRefs.addEventListener("click",(function(){clearInterval(e)})),console.log(t);var e=null}();
//# sourceMappingURL=01-color-switcher.25231deb.js.map