const t={btnStartRefs:document.querySelector("[data-start]"),btnStopRefs:document.querySelector("[data-stop]"),bodyRef:document.body};t.btnStartRefs.addEventListener("click",(function(){e=setInterval((()=>{t.bodyRef.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3,t.btnStartRefs.setAttribute("disabled",!0))})),t.btnStopRefs.addEventListener("click",(function(){clearInterval(e),t.btnStartRefs.removeAttribute("disabled",!0)}));let e=null;
//# sourceMappingURL=01-color-switcher.ea2facd1.js.map