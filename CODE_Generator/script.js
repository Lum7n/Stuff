"use strict";
var CodeGenerator;
(function (CodeGenerator) {
    window.addEventListener("load", handleLoad);
    let optionsDIV;
    let form;
    let startButton;
    let playerAmount;
    let codePlayer = "";
    let codeArray = [];
    let div;
    function handleLoad() {
        optionsDIV = document.querySelector(".options");
        form = document.querySelector("form");
        optionsDIV.addEventListener("change", displayOptions);
        optionsDIV.addEventListener("input", displayOptions);
        startButton = document.getElementById("startButton");
        startButton.addEventListener("click", applyOptions);
    }
    function displayOptions(_event) {
        //console.log(_event);
        let target = _event.target;
        let quantitySetting = document.getElementById("quantitySetting");
        if (target.name == "quantity") {
            quantitySetting.innerText = target.value;
        }
        else if (target.name == "mode") {
            switch (target.value) {
                case "einfach":
                    console.log(target.value);
                    break;
                case "mittel":
                    console.log(target.value);
                    break;
                case "schwer":
                    console.log(target.value);
                    break;
                default:
                    break;
            }
        }
    }
    function applyOptions() {
        let formData = new FormData(form);
        for (let entry of formData) {
            let selector = "[name='" + entry[0] + "']";
            let item = document.querySelector(selector);
            if (item != null) {
                switch (entry[0]) {
                    case "quantity":
                        playerAmount = parseFloat(item.value);
                        generatePlayerDIVs(playerAmount);
                        break;
                    case "mode":
                        //console.log(item.value);
                        switch (item.value) {
                            case "opt1":
                                console.log(item.value);
                                break;
                            case "opt2":
                                console.log(item.value);
                                break;
                            case "opt3":
                                console.log(item.value);
                                break;
                            default:
                                break;
                        }
                        break;
                    default:
                }
            }
        }
        optionsDIV.style.display = "none";
        startButton.style.display = "none";
    }
    async function generatePlayerDIVs(playerAmount) {
        let mainDIV = document.querySelector(".mainDIV");
        console.log(mainDIV);
        codeArray = generateCodeArray();
        console.log(codeArray);
        shuffleArray(codeArray);
        for (let index = 1; index <= playerAmount; index++) {
            let newDIV = document.createElement("Div");
            newDIV.classList.add("code");
            codePlayer = codeArray.splice(0, 1).toString();
            newDIV.innerText = "Player " + index + ": " + codePlayer;
            mainDIV.appendChild(newDIV);
            let newbutton = document.createElement("Button");
            newbutton.classList.add("next");
            newbutton.innerText = "next Player";
            mainDIV.appendChild(newbutton);
            newbutton.addEventListener("click", next);
            await new Promise(resolve => setTimeout(resolve, 2000));
        }
    }
    // das timeout durch einen button für den nächsten Spieler ersetzen, beim letzten Button um codes anzuzeigen für Endkontrolle
    // function hier mit den funktionalitäten der funktion von ChatGPT vervollständigen
    // außerdem bei jedem Spieler einen "re-roll" Button hinzufügen, falls er den Restart gelegt bekommen hat
    function next() {
    }
    function generateDivsStepByStep() {
        const container = document.getElementById("container");
        const totalDivs = 5;
        let currentIndex = 0;
        function createNextDiv() {
            if (currentIndex >= totalDivs || !container)
                return;
            const div = document.createElement("div");
            div.textContent = `Div Nummer ${currentIndex + 1}`;
            const button = document.createElement("button");
            button.textContent = "Weiter";
            button.addEventListener("click", () => {
                createNextDiv(); // Erstelle das nächste Div
            });
            div.appendChild(button);
            container.appendChild(div);
            currentIndex++;
        }
        // Starte mit dem ersten Div
        createNextDiv();
    }
    function generateCodeArray() {
        const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        const result = [];
        function combine(start, path) {
            if (path.length === 4) {
                result.push(path.join(""));
                return;
            }
            for (let i = start; i < digits.length; i++) {
                path.push(digits[i]);
                combine(i + 1, path);
                path.pop();
            }
        }
        combine(0, []);
        return result;
    }
    function shuffleArray(array) {
        for (let i = array.length - 1; i >= 1; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
})(CodeGenerator || (CodeGenerator = {}));
//# sourceMappingURL=script.js.map