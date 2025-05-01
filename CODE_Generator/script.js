"use strict";
var CodeGenerator;
(function (CodeGenerator) {
    window.addEventListener("load", handleLoad);
    let codePlayer = "";
    let codeArray = [];
    let index = 0;
    let dupes = false;
    let div;
    async function handleLoad() {
        let codeDIVs = document.getElementsByClassName("code");
        for (div of codeDIVs) {
            //console.log(div);
            codePlayer = createUniqueCodes();
            div.innerHTML += codePlayer;
            await new Promise(resolve => setTimeout(resolve, 2000));
            hideCode(div);
        }
    }
    function hideCode(currentPlayerDiv) {
        console.log(currentPlayerDiv);
        //currentPlayerDiv.style.color = "white";
        let text = currentPlayerDiv.innerText;
        currentPlayerDiv.innerText = text.slice(0, 10) + "****";
        console.log("Code verschlüsselt !");
    }
    function createUniqueCodes() {
        if (dupes == false) {
            generateCode();
            compareCodesOfcodeArray(codeArray);
        }
        while (dupes == true) {
            codeArray.pop();
            generateCode();
            compareCodesOfcodeArray(codeArray);
        }
        console.log(codeArray);
        index++;
        return codePlayer;
    }
    function generateCode() {
        const numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        shuffleArray(numberArray);
        codeArray[index] = numberArray[0] + numberArray[1] + numberArray[2] + numberArray[3];
        codePlayer = codeArray[index];
    }
    function shuffleArray(array) {
        for (let i = array.length - 1; i >= 1; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    function compareCodesOfcodeArray(strings) {
        const extractNumbers = (input) => {
            const matches = input.match(/\b\d{4}\b/g) || [];
            return new Set(matches.map(num => [...num].sort().join("")));
        };
        const seen = new Set();
        for (const str of strings) {
            const normalizedSet = extractNumbers(str);
            for (const num of normalizedSet) {
                if (seen.has(num)) {
                    console.log("Übereinstimmenden Nummern gefunden: " + num);
                    dupes = true;
                }
                else {
                    dupes = false;
                }
                seen.add(num);
            }
        }
        console.log(dupes);
        return dupes;
    }
})(CodeGenerator || (CodeGenerator = {}));
//# sourceMappingURL=script.js.map