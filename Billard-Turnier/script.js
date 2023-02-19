"use strict";
var BillardTurnier;
(function (BillardTurnier) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
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
        for (let group in BillardTurnier.data) {
            let participants = BillardTurnier.data[group];
            //create Table-Elements
            let table = document.createElement("table");
            let trHeader = document.createElement("tr");
            let th = document.createElement("th");
            //get Group-Div
            let tableGroup = document.querySelector(".treeG" + group);
            //add Content to Table-Elements & them to Group-Div
            th.innerText = "Gruppe " + group;
            trHeader.appendChild(th);
            table.appendChild(trHeader);
            let extraIndex = 1;
            for (let index = 0; index < participants.length; index++) {
                let tr = document.createElement("tr");
                let tdMatch = document.createElement("td");
                let tdTime = document.createElement("td");
                let tdScore = document.createElement("td");
                if (extraIndex == participants.length) {
                    extraIndex = 0;
                }
                console.log(extraIndex);
                tdMatch.innerHTML = "<p>" + participants[index].name + "</p> : <p>" + participants[extraIndex].name + "</p>";
                tdMatch.className = "match";
                tr.appendChild(tdMatch);
                tdTime.innerText = "8:00";
                tr.appendChild(tdTime);
                tdScore.innerText = "0:0";
                tr.appendChild(tdScore);
                table.appendChild(tr);
                extraIndex++;
            }
            tableGroup.appendChild(table);
        }
    }
    function buildGroupTables() {
        for (let group in BillardTurnier.data) {
            let participants = BillardTurnier.data[group];
            console.log(group);
            console.log(participants[0]);
            // console.log(participants[0].name);
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
                tdName.innerText = participants[index].name;
                tr.appendChild(tdName);
                tdPoints.innerText = participants[index].points + " P.";
                tr.appendChild(tdPoints);
                table.appendChild(tr);
            }
            tableGroup.appendChild(table);
        }
    }
})(BillardTurnier || (BillardTurnier = {}));
//# sourceMappingURL=script.js.map