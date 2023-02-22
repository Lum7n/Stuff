namespace BillardTurnier {

    window.addEventListener("load", handleLoad);

    let screenType: string;
    let mobileTable: HTMLElement;

    function handleLoad(): void {

        sizeTest();

        let input: HTMLInputElement = <HTMLInputElement>document.getElementById("selection");
        input.addEventListener("change", handleSelection);

        summarizePoints();
        transferPartisipantsToFinals();
        
        buildTree();
        buildGroupTables();

    }

    function sizeTest(): void {

        let screenWidth: number = screen.width;
        let screenHeight: number = screen.height;

        console.log("Width: ", screenWidth);
        console.log("Height: ", screenHeight);

        if (screenWidth < screenHeight) {
            // console.log("vertical");
            screenType = "vertical";

            verticalAdjustments();


        } else if (screenWidth > screenHeight) {
            // console.log("horizontal");
            screenType = "horizontal";

            horizontalAdjustments();


        } else {
            console.log("fehler");
        }

        console.log(screenType);

    }

    function verticalAdjustments(): void {

        let selection: HTMLDivElement = <HTMLDivElement>document.getElementById("selection");
        selection.style.display = "";

        let tree: HTMLDivElement = <HTMLDivElement>document.getElementById("tree");
        tree.style.display = "none";
        // tree.innerHTML = "";

        let groupTable: HTMLDivElement = <HTMLDivElement>document.getElementById("groupTable");
        groupTable.style.display = "none";
        // groupTable.innerHTML = "";

        let headline: HTMLDivElement = <HTMLDivElement>document.getElementById("headline");
        headline.style.textAlign = "left";
        headline.style.fontSize = "28px";
        headline.style.margin = "20px 0px 10px 0px";

    }

    function horizontalAdjustments(): void {

        let selection: HTMLDivElement = <HTMLDivElement>document.getElementById("selection");
        selection.style.display = "none";

        let tree: HTMLDivElement = <HTMLDivElement>document.getElementById("tree");
        tree.style.display = "";

        let groupTable: HTMLDivElement = <HTMLDivElement>document.getElementById("groupTable");
        groupTable.style.display = "";

    }

    function handleSelection(_event: Event): void {

        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        console.log(target.value);
        let value: string = target.value;

        // get Div
        mobileTable = <HTMLElement>document.getElementById("mobileTable");
        mobileTable.innerHTML = "";

        switch (value) {
            case "Gruppe A":
                console.log("A-Selected");

                for (let part in matches) {

                    if (part == "A") {

                        addMatchTable(part, value);
                    }
                }

                for (let group in data) {

                    if (group == "A") {

                        addGroupTable(group);
                    }
                }
                break;

            case "Gruppe B":
                console.log("B-Selected");

                for (let part in matches) {

                    if (part == "B") {

                        addMatchTable(part, value);
                    }
                }

                for (let group in data) {

                    if (group == "B") {

                        addGroupTable(group);
                    }
                }
                break;

            case "Gruppe C":
                console.log("C-Selected");

                for (let part in matches) {

                    if (part == "C") {

                        addMatchTable(part, value);
                    }
                }

                for (let group in data) {

                    if (group == "C") {

                        addGroupTable(group);
                    }
                }
                break;

            case "Gruppe D":
                console.log("D-Selected");

                for (let part in matches) {

                    if (part == "D") {

                        addMatchTable(part, value);
                    }
                }

                for (let group in data) {

                    if (group == "D") {

                        addGroupTable(group);
                    }
                }
                break;

            case "Viertelfinale":
                console.log("VF-Selected");

                for (let part in matches) {

                    if (part == "VF1") {

                        addMatchTable(part, value);
                        addMatchTable("VF2", "");
                    }
                }

                break;

            case "Halbfinale":
                console.log("HF-Selected");

                for (let part in matches) {

                    if (part == "HF") {

                        addMatchTable(part, value);
                    }
                }

                break;

            case "Finale":
                console.log("F-Selected");

                for (let part in matches) {

                    if (part == "Final") {

                        addMatchTable(part, value);
                    }
                }

                break;

            default:
                break;
        }

    }

    function addMatchTable(part: string, value: string): void {
        let match: Match[] = matches[part];

        //create Table-Elements
        let table: HTMLTableElement = document.createElement("table");
        let trHeader: HTMLTableRowElement = document.createElement("tr");
        let th: HTMLElement = document.createElement("th");

        //get Div
        mobileTable = <HTMLElement>document.getElementById("mobileTable");

        //add Content to Table-Elements & them to Group-Div
        th.innerText = value;
        trHeader.appendChild(th);
        table.appendChild(trHeader);

        for (let index: number = 0; index < match.length; index++) {

            let tr: HTMLTableRowElement = document.createElement("tr");
            let date: HTMLTableRowElement = document.createElement("tr");

            let tdMatch: HTMLTableCellElement = document.createElement("td");
            let tdScore: HTMLTableCellElement = document.createElement("td");
            // let tdFouls: HTMLTableCellElement = document.createElement("td");

            date.innerText = match[index].date;
            table.appendChild(date);

            tdMatch.innerHTML = "<p>" + match[index].name1 + "</p> : <p>" + match[index].name2 + "</p>";
            tdMatch.className = "match";
            tr.appendChild(tdMatch);

            tdScore.innerText = match[index].points1 + " : " + match[index].points2;
            tr.appendChild(tdScore);

            // tdFouls.innerText = match[index].fouls1 + " Fouls";
            // tr.appendChild(tdFouls);

            table.appendChild(tr);

        }

        mobileTable.appendChild(table);

    }

    function addGroupTable(group: string): void {
        let participants: Participants[] = data[group];

        //create Table-Elements
        let table: HTMLTableElement = document.createElement("table");
        let trHeader: HTMLTableRowElement = document.createElement("tr");
        let th: HTMLElement = document.createElement("th");

        //get Group-Div
        mobileTable = <HTMLElement>document.getElementById("mobileTable");

        //add Content to Table-Elements & them to Group-Div
        th.innerText = "Gruppe " + group;
        trHeader.appendChild(th);
        table.appendChild(trHeader);

        for (let index: number = 0; index < participants.length; index++) {

            let tr: HTMLTableRowElement = document.createElement("tr");
            let tdName: HTMLTableCellElement = document.createElement("td");
            let tdPoints: HTMLTableCellElement = document.createElement("td");
            let tdFouls: HTMLTableCellElement = document.createElement("td");

            tdName.innerText = participants[index].name;
            tr.appendChild(tdName);
            tdPoints.innerText = participants[index].points + " P.";
            tr.appendChild(tdPoints);
            tdFouls.innerText = participants[index].fouls + " Fouls";
            tr.appendChild(tdFouls);
            table.appendChild(tr);

        }
        table.style.marginTop = "20px";
        mobileTable.appendChild(table);
    }

    function buildTree(): void {

        buildMatches();

    }

    function buildMatches(): void {

        for (let part in matches) {
            let match: Match[] = matches[part];

            //create Table-Elements
            let table: HTMLTableElement = document.createElement("table");
            let trHeader: HTMLTableRowElement = document.createElement("tr");
            let th: HTMLElement = document.createElement("th");

            let tableGroup: HTMLElement = <HTMLElement>document.querySelector(".tree" + part);

            switch (part) {
                case "A":
                case "B":
                case "C":
                case "D":

                    //get Group-Div
                    tableGroup = <HTMLElement>document.querySelector(".treeG" + part);

                    //add Content to Table-Elements & them to Group-Div
                    th.innerText = "Gruppe " + part;
                    trHeader.appendChild(th);
                    table.appendChild(trHeader);

                    for (let index: number = 0; index < match.length; index++) {

                        let tr: HTMLTableRowElement = document.createElement("tr");
                        let date: HTMLTableRowElement = document.createElement("tr");

                        let tdMatch: HTMLTableCellElement = document.createElement("td");
                        let tdScore: HTMLTableCellElement = document.createElement("td");
                        // let tdFouls: HTMLTableCellElement = document.createElement("td");

                        date.innerText = match[index].date;
                        table.appendChild(date);

                        tdMatch.innerHTML = "<p>" + match[index].name1 + "</p> : <p>" + match[index].name2 + "</p>";
                        tdMatch.className = "match";
                        tr.appendChild(tdMatch);

                        tdScore.innerText = match[index].points1 + " : " + match[index].points2;
                        tr.appendChild(tdScore);

                        // tdFouls.innerText = match[index].fouls1 + " Fouls";
                        // tr.appendChild(tdFouls);

                        table.appendChild(tr);
                    }

                    break;

                case "VF1":
                case "VF2":
                case "HF":
                case "Final":

                    let date: HTMLTableRowElement = document.createElement("tr");

                    //get Div
                    tableGroup = <HTMLElement>document.querySelector(".tree" + part);

                    //add Content to Table-Elements & them to Div
                    //the different parts
                    switch (part) {
                        case "VF1":

                            th.innerText = "Viertelfinale 1";
                            trHeader.appendChild(th);
                            table.appendChild(trHeader);

                            date.innerText = "Samstag, ab 12:00 Uhr";
                            table.appendChild(date);
                            break;

                        case "VF2":

                            th.innerText = "Viertelfinale 2";
                            trHeader.appendChild(th);
                            table.appendChild(trHeader);

                            date.innerText = "Samstag, ab 8:00 Uhr";
                            table.appendChild(date);

                            break;

                        case "HF":

                            th.innerText = "Halbfinale";
                            trHeader.appendChild(th);
                            table.appendChild(trHeader);

                            date.innerText = "Samstag, ab 16:00 Uhr";
                            table.appendChild(date);

                            break;

                        case "Final":

                            th.innerText = part + "e";
                            trHeader.appendChild(th);
                            table.appendChild(trHeader);

                            date.innerText = "Samstag, ab 20:00 Uhr";
                            table.appendChild(date);

                            break;

                        default:
                            break;
                    }

                    //the same parts
                    for (let index: number = 0; index < match.length; index++) {

                        let tr: HTMLTableRowElement = document.createElement("tr");

                        let tdMatch: HTMLTableCellElement = document.createElement("td");
                        let tdScore: HTMLTableCellElement = document.createElement("td");
                        // let tdFouls: HTMLTableCellElement = document.createElement("td");

                        tdMatch.innerHTML = "<p>" + match[index].name1 + "</p> : <p>" + match[index].name2 + "</p>";
                        tdMatch.className = "match";
                        tr.appendChild(tdMatch);

                        tdScore.innerText = match[index].points1 + " : " + match[index].points2;
                        tr.appendChild(tdScore);

                        // tdFouls.innerText = match[index].fouls1 + " Fouls";
                        // tr.appendChild(tdFouls);

                        table.appendChild(tr);
                    }

                    break;

                default:
                    break;
            }



            tableGroup.appendChild(table);
        }

    }

    function buildGroupTables(): void {

        for (let group in data) {
            let participants: Participants[] = data[group];
            // console.log(group);
            // console.log(participants);

            //sort Participants by Points
            let groupOfParticipants: Participants[] = sortParticipantsByPoints(participants[0], participants[1], participants[2]);

            // console.log(participants);

            //create Table-Elements
            let table: HTMLTableElement = document.createElement("table");
            let trHeader: HTMLTableRowElement = document.createElement("tr");
            let th: HTMLElement = document.createElement("th");

            //get Group-Div
            let tableGroup: HTMLElement = <HTMLElement>document.querySelector(".group" + group);

            //add Content to Table-Elements & them to Group-Div
            th.innerText = "Gruppe " + group;
            trHeader.appendChild(th);
            table.appendChild(trHeader);

            for (let index: number = 0; index < groupOfParticipants.length; index++) {

                let tr: HTMLTableRowElement = document.createElement("tr");
                let tdName: HTMLTableCellElement = document.createElement("td");
                let tdPoints: HTMLTableCellElement = document.createElement("td");
                let tdFouls: HTMLTableCellElement = document.createElement("td");

                tdName.innerText = groupOfParticipants[index].name;
                tr.appendChild(tdName);
                tdPoints.innerText = groupOfParticipants[index].points + " P.";
                tr.appendChild(tdPoints);
                tdFouls.innerText = groupOfParticipants[index].fouls + " Fouls";
                tr.appendChild(tdFouls);
                table.appendChild(tr);
            }

            tableGroup.appendChild(table);
        }
    }


}