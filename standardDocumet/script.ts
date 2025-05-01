namespace NamespaceName {

    window.addEventListener("load", handleLoad);

    let code: number = 0;

    function handleLoad(): void {

        let codeDIV: HTMLDivElement = <HTMLDivElement>document.querySelector(".code");
        codeDIV.innerHTML = "" + code;
    }
}
