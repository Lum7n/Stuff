namespace BillardTurnier {

    window.addEventListener("load", handleLoad);

    function handleLoad(): void {

        summarizePoints();

        buildTree();
        buildGroupTables();

    }

    function buildTree(): void {

        groupMatches();
        // quarterMatches();
        // halfMatches();
        // finalMatches();

    }

    function groupMatches(): void {

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

                    console.log(part);

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

                    console.log("leerMatches: " + part);

                    let date: HTMLTableRowElement = document.createElement("tr");

                    //get Div
                    tableGroup = <HTMLElement>document.querySelector(".tree" + part);

                    //add Content to Table-Elements & them to Div
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
            console.log(group);
            console.log(participants[0]);
            console.log(participants[1]);
            console.log(participants[2]);

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

            tableGroup.appendChild(table);
        }

    }


}