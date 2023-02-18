"use strict";
var BillardTurnier;
(function (BillardTurnier) {
    let groupA = ["max", "simon", "justin"];
    let max = ["Max", 0];
    let simon = ["Simon", 0];
    let justin = ["Justin", 0];
    BillardTurnier.data = {
        A: [
            { name: "Max", points: 0 },
            { name: "Simon", points: 0 },
            { name: "Justin", points: 0 }
        ],
        B: [
            { name: "Vincent", points: 0 },
            { name: "Ben", points: 0 },
            { name: "Luis", points: 0 }
        ],
        C: [
            { name: "Sigi", points: 0 },
            { name: "Jan", points: 0 },
            { name: "Ulla", points: 0 }
        ],
        D: [
            { name: "Linda", points: 0 },
            { name: "Alex", points: 0 },
            { name: "Valentin", points: 0 }
        ]
    };
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        buildGroupTables();
    }
    function buildGroupTables() {
        // function generateContent(_data: Data): void {
        for (let category in BillardTurnier.data) {
            let participants = BillardTurnier.data[category];
            console.log(participants[0]);
            console.log(participants[0].name);
        }
        // }
        let groupArray = ["A", "B", "C", "D"];
        for (let index = 0; index < groupArray.length; index++) {
            console.log(groupArray[index]);
            //create Table-Elements
            let table = document.createElement("table");
            let tr1 = document.createElement("tr");
            let tr2 = document.createElement("tr");
            let tr3 = document.createElement("tr");
            let tr4 = document.createElement("tr");
            let th = document.createElement("th");
            let td1Name = document.createElement("td");
            let td1Points = document.createElement("td");
            let td2Name = document.createElement("td");
            let td2Points = document.createElement("td");
            let td3Name = document.createElement("td");
            let td3Points = document.createElement("td");
            //get Group-Div
            let tableGroup = document.querySelector(".group" + groupArray[index]);
            console.log(tableGroup);
            //add Content to Table-Elements & them to Group-Div
            th.innerText = "Gruppe " + groupArray[index];
            tr1.appendChild(th);
            table.appendChild(tr1);
            td1Name.innerText = max[0];
            tr2.appendChild(td1Name);
            td1Points.innerText = max[1] + " P.";
            tr2.appendChild(td1Points);
            table.appendChild(tr2);
            td2Name.innerText = simon[0];
            tr3.appendChild(td2Name);
            td2Points.innerText = simon[1] + " P.";
            tr3.appendChild(td2Points);
            table.appendChild(tr3);
            td3Name.innerText = justin[0];
            tr4.appendChild(td3Name);
            td3Points.innerText = justin[1] + " P.";
            tr4.appendChild(td3Points);
            table.appendChild(tr4);
            tableGroup.appendChild(table);
        }
    }
})(BillardTurnier || (BillardTurnier = {}));
//# sourceMappingURL=script.js.map