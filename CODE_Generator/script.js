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
    let usedCcodesArray = [];
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
    function generatePlayerDIVs(_playerAmount) {
        let mainDIV = document.querySelector(".mainDIV");
        console.log(mainDIV);
        let index = 1;
        codeArray = generateCodeArray();
        console.log(codeArray);
        shuffleArray(codeArray);
        function createNextDiv(_event) {
            if (index > _playerAmount || !mainDIV) {
                let lastButton = document.createElement("Button");
                lastButton.classList.add("open");
                lastButton.innerText = "Codes aufdecken";
                lastButton.addEventListener("click", openCodes);
                mainDIV.appendChild(lastButton);
            }
            const target = _event.target;
            if (target instanceof HTMLElement) {
                target.style.display = "none";
            }
            if (index > _playerAmount || !mainDIV)
                return;
            let newDIV = document.createElement("Div");
            newDIV.classList.add("code");
            codePlayer = codeArray.splice(0, 1).toString();
            usedCcodesArray.push(codePlayer);
            newDIV.innerText = "Player " + index + ": " + codePlayer;
            mainDIV.appendChild(newDIV);
            let newbutton = document.createElement("Button");
            newbutton.classList.add("hide");
            newbutton.innerText = "Code verstecken";
            newbutton.addEventListener("click", nextPlayer);
            mainDIV.appendChild(newbutton);
            index++;
        }
        let event = new Event("test");
        createNextDiv(event);
        function nextPlayer(_event) {
            let target = _event.target;
            if (target instanceof HTMLElement) {
                target.classList.remove("hide");
                target.classList.add("next");
                target.innerText = "nächster Spieler";
                target.addEventListener("click", createNextDiv);
                const previous = target.previousElementSibling;
                if (previous instanceof HTMLElement) {
                    previous.style.backgroundColor = "yellow"; // Beispielaktion
                    previous.innerText = "Player " + (index - 1);
                }
            }
        }
    }
    // außerdem bei jedem Spieler einen "re-roll" Button hinzufügen, falls er den Restart gelegt bekommen hat
    function openCodes() {
        console.log(usedCcodesArray);
        let index = 0;
        let playerDivs = document.getElementsByClassName("code");
        for (let div of playerDivs) {
            div.innerHTML += ": " + usedCcodesArray[index];
            index++;
        }
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
    function shuffleArray(_array) {
        for (let i = _array.length - 1; i >= 1; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [_array[i], _array[j]] = [_array[j], _array[i]];
        }
    }
})(CodeGenerator || (CodeGenerator = {}));
//# sourceMappingURL=script.js.map