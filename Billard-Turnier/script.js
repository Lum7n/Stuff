"use strict";
var BillardTurnier;
(function (BillardTurnier) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        BillardTurnier.summarizePoints();
        buildTree();
        buildGroupTables();
    }
    function buildTree() {
        groupMatches();
        // quarterMatches();
        // halfMatches();
        // finalMatches();
    }
    function groupMatches() {
        for (let part in BillardTurnier.matches) {
            let match = BillardTurnier.matches[part];
            //create Table-Elements
            let table = document.createElement("table");
            let trHeader = document.createElement("tr");
            let th = document.createElement("th");
            let tableGroup = document.querySelector(".tree" + part);
            switch (part) {
                case "A":
                case "B":
                case "C":
                case "D":
                    console.log(part);
                    //get Group-Div
                    tableGroup = document.querySelector(".treeG" + part);
                    //add Content to Table-Elements & them to Group-Div
                    th.innerText = "Gruppe " + part;
                    trHeader.appendChild(th);
                    table.appendChild(trHeader);
                    for (let index = 0; index < match.length; index++) {
                        let tr = document.createElement("tr");
                        let tdMatch = document.createElement("td");
                        let tdScore = document.createElement("td");
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
                case "VF1":
                case "VF2":
                case "HF":
                case "Final":
                    console.log("leerMatches: " + part);
                    //get Div
                    tableGroup = document.querySelector(".tree" + part);
                    //add Content to Table-Elements & them to Div
                    th.innerText = part;
                    trHeader.appendChild(th);
                    table.appendChild(trHeader);
                    for (let index = 0; index < match.length; index++) {
                        let tr = document.createElement("tr");
                        let tdMatch = document.createElement("td");
                        let tdScore = document.createElement("td");
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
    function buildGroupTables() {
        for (let group in BillardTurnier.data) {
            let participants = BillardTurnier.data[group];
            console.log(group);
            console.log(participants[0]);
            console.log(participants[1]);
            console.log(participants[2]);
            //create Table-Elements
            let table = document.createElement("table");
            let trHeader = document.createElement("tr");
            let th = document.createElement("th");
            //get Group-Div
            let tableGroup = document.querySelector(".group" + group);
            //add Content to Table-Elements & them to Group-Div
            th.innerText = "Gruppe " + group;
            trHeader.appendChild(th);
            table.appendChild(trHeader);
            for (let index = 0; index < participants.length; index++) {
                let tr = document.createElement("tr");
                let tdName = document.createElement("td");
                let tdPoints = document.createElement("td");
                let tdFouls = document.createElement("td");
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
})(BillardTurnier || (BillardTurnier = {}));
//# sourceMappingURL=script.js.map