namespace CodeGenerator {

    window.addEventListener("load", handleLoad);

    let codePlayer: string = "";
    let codeArray: string[] = [];
    let index: number = 0;

    let dupes: boolean = false;

    let div: HTMLDivElement;

    async function handleLoad(): Promise<void> {

        let codeDIVs: HTMLCollectionOf<HTMLDivElement> = <HTMLCollectionOf<HTMLDivElement>>document.getElementsByClassName("code");

        for (div of codeDIVs) {
            //console.log(div);
            codePlayer = createUniqueCodes();
            div.innerHTML += codePlayer;
            await new Promise(resolve => setTimeout(resolve, 2000));
            hideCode(div);
        }
    }

    function hideCode(currentPlayerDiv: HTMLDivElement): void {
        console.log(currentPlayerDiv);
        //currentPlayerDiv.style.color = "white";
        let text: string = currentPlayerDiv.innerText;
        currentPlayerDiv.innerText = text.slice(0, 10) + "****";
        console.log("Code verschlüsselt !");
    }

    function createUniqueCodes(): string {
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

        return codePlayer
    }

    function generateCode(): void {
        const numberArray: string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        shuffleArray(numberArray);
        codeArray[index] = numberArray[0] + numberArray[1] + numberArray[2] + numberArray[3];
        codePlayer = codeArray[index];
    }

    function shuffleArray(array: string[]) {
        for (let i = array.length - 1; i >= 1; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function compareCodesOfcodeArray(strings: string[]): boolean {
        const extractNumbers = (input: string): Set<string> => {
          const matches = input.match(/\b\d{4}\b/g) || [];
          return new Set(matches.map(num => [...num].sort().join("")));
        };
      
        const seen = new Set<string>();
      
        for (const str of strings) {
          const normalizedSet = extractNumbers(str);
          for (const num of normalizedSet) {
            if (seen.has(num)) {
                console.log("Übereinstimmenden Nummern gefunden: " + num);
                dupes = true;
            } else {
                dupes = false;
            }
            seen.add(num);
          }
        }
        console.log(dupes);
        return dupes;
    }
}