"use strict";
var NamespaceName;
(function (NamespaceName) {
    window.addEventListener("load", handleLoad);
    let code = 0;
    function handleLoad() {
        let codeDIV = document.querySelector(".code");
        codeDIV.innerHTML = "" + code;
    }
})(NamespaceName || (NamespaceName = {}));
//# sourceMappingURL=script.js.map