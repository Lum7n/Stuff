"use strict";
var BillardTurnier;
(function (BillardTurnier) {
    window.addEventListener("load", handleLoad);
    let screenType;
    let mobileTable;
    function handleLoad() {
        sizeTest();
        let input = document.getElementById("selection");
        input.addEventListener("change", handleSelection);
        BillardTurnier.summarizePoints();
        BillardTurnier.transferPartisipantsToFinals();
        buildTree();
        buildGroupTables();
    }
    function sizeTest() {
        let screenWidth = screen.width;
        let screenHeight = screen.height;
        console.log("Width: ", screenWidth);
        console.log("Height: ", screenHeight);
        if (screenWidth < screenHeight) {
            // console.log("vertical");
            screenType = "vertical";
            verticalAdjustments();
        }
        else if (screenWidth > screenHeight) {
            // console.log("horizontal");
            screenType = "horizontal";
            horizontalAdjustments();
        }
        else {
            console.log("fehler");
        }
        console.log(screenType);
    }
    function verticalAdjustments() {
        let selection = document.getElementById("selection");
        selection.style.display = "";
        let tree = document.getElementById("tree");
        tree.style.display = "none";
        // tree.innerHTML = "";
        let groupTable = document.getElementById("groupTable");
        groupTable.style.display = "none";
        // groupTable.innerHTML = "";
        let headline = document.getElementById("headline");
        headline.style.textAlign = "left";
        headline.style.fontSize = "28px";
        headline.style.margin = "20px 0px 10px 0px";
    }
    function horizontalAdjustments() {
        let selection = document.getElementById("selection");
        selection.style.display = "none";
        let tree = document.getElementById("tree");
        tree.style.display = "";
        let groupTable = document.getElementById("groupTable");
        groupTable.style.display = "";
    }
    function handleSelection(_event) {
        let target = _event.target;
        console.log(target.value);
        let value = target.value;
        // get Div
        mobileTable = document.getElementById("mobileTable");
        mobileTable.innerHTML = "";
        switch (value) {
            case "Gruppe A":
                console.log("A-Selected");
                for (let part in BillardTurnier.matches) {
                    if (part == "A") {
                        addMatchTable(part, value);
                    }
                }
                for (let group in BillardTurnier.data) {
                    if (group == "A") {
                        addGroupTable(group);
                    }
                }
                break;
            case "Gruppe B":
                console.log("B-Selected");
                for (let part in BillardTurnier.matches) {
                    if (part == "B") {
                        addMatchTable(part, value);
                    }
                }
                for (let group in BillardTurnier.data) {
                    if (group == "B") {
                        addGroupTable(group);
                    }
                }
                break;
            case "Gruppe C":
                console.log("C-Selected");
                for (let part in BillardTurnier.matches) {
                    if (part == "C") {
                        addMatchTable(part, value);
                    }
                }
                for (let group in BillardTurnier.data) {
                    if (group == "C") {
                        addGroupTable(group);
                    }
                }
                break;
            case "Gruppe D":
                console.log("D-Selected");
                for (let part in BillardTurnier.matches) {
                    if (part == "D") {
                        addMatchTable(part, value);
                    }
                }
                for (let group in BillardTurnier.data) {
                    if (group == "D") {
                        addGroupTable(group);
                    }
                }
                break;
            case "Viertelfinale":
                console.log("VF-Selected");
                for (let part in BillardTurnier.matches) {
                    if (part == "VF1") {
                        addMatchTable(part, value);
                        addMatchTable("VF2", "");
                    }
                }
                break;
            case "Halbfinale":
                console.log("HF-Selected");
                for (let part in BillardTurnier.matches) {
                    if (part == "HF") {
                        addMatchTable(part, value);
                    }
                }
                break;
            case "Finale":
                console.log("F-Selected");
                for (let part in BillardTurnier.matches) {
                    if (part == "Final") {
                        addMatchTable(part, value);
                    }
                }
                break;
            default:
                break;
        }
    }
    function addMatchTable(part, value) {
        let match = BillardTurnier.matches[part];
        //create Table-Elements
        let table = document.createElement("table");
        let trHeader = document.createElement("tr");
        let th = document.createElement("th");
        //get Div
        mobileTable = document.getElementById("mobileTable");
        //add Content to Table-Elements & them to Group-Div
        th.innerText = value;
        trHeader.appendChild(th);
        table.appendChild(trHeader);
        for (let index = 0; index < match.length; index++) {
            let tr = document.createElement("tr");
            let date = document.createElement("tr");
            let tdMatch = document.createElement("td");
            let tdScore = document.createElement("td");
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
    function addGroupTable(group) {
        let participants = BillardTurnier.data[group];
        //create Table-Elements
        let table = document.createElement("table");
        let trHeader = document.createElement("tr");
        let th = document.createElement("th");
        //get Group-Div
        mobileTable = document.getElementById("mobileTable");
        //add Content to Table-Elements & them to Group-Div
        th.innerText = "Gruppe " + group;
        trHeader.appendChild(th);
        table.appendChild(trHeader);
        for (let index = 0; index < participants.length; index++) {
            let tr = document.createElement("tr");
            let tdName = document.createElement("td");
            let tdPoints = document.createElement("td");
            let tdFouls = document.createElement("td");
            let groupOfParticipants = BillardTurnier.sortParticipantsByPoints(participants[0], participants[1], participants[2]);
            tdName.innerText = groupOfParticipants[index].name;
            tr.appendChild(tdName);
            tdPoints.innerText = groupOfParticipants[index].points + " P.";
            tr.appendChild(tdPoints);
            tdFouls.innerText = groupOfParticipants[index].fouls + " Fouls";
            tr.appendChild(tdFouls);
            table.appendChild(tr);
        }
        table.style.marginTop = "20px";
        mobileTable.appendChild(table);
    }
    function buildTree() {
        buildMatches();
    }
    function buildMatches() {
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
                    //get Group-Div
                    tableGroup = document.querySelector(".treeG" + part);
                    //add Content to Table-Elements & them to Group-Div
                    th.innerText = "Gruppe " + part;
                    trHeader.appendChild(th);
                    table.appendChild(trHeader);
                    for (let index = 0; index < match.length; index++) {
                        let tr = document.createElement("tr");
                        let date = document.createElement("tr");
                        let tdMatch = document.createElement("td");
                        let tdScore = document.createElement("td");
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
                    let date = document.createElement("tr");
                    //get Div
                    tableGroup = document.querySelector(".tree" + part);
                    //add Content to Table-Elements & them to Div
                    //the different parts
                    switch (part) {
                        case "VF1":
                            th.innerText = "Viertelfinale 1";
                            trHeader.appendChild(th);
                            table.appendChild(trHeader);
                            date.innerText = "Samstag, 12:00 Uhr";
                            table.appendChild(date);
                            break;
                        case "VF2":
                            th.innerText = "Viertelfinale 2";
                            trHeader.appendChild(th);
                            table.appendChild(trHeader);
                            date.innerText = "Samstag, 13:00 Uhr";
                            table.appendChild(date);
                            break;
                        case "HF":
                            th.innerText = "Halbfinale";
                            trHeader.appendChild(th);
                            table.appendChild(trHeader);
                            date.innerText = "Samstag, ab 15:00 Uhr";
                            table.appendChild(date);
                            break;
                        case "Final":
                            th.innerText = part + "e";
                            trHeader.appendChild(th);
                            table.appendChild(trHeader);
                            date.innerText = "Samstag, ab 17:00 Uhr";
                            table.appendChild(date);
                            break;
                        default:
                            break;
                    }
                    //the same parts
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
            // console.log(group);
            // console.log(participants);
            //sort Participants by Points
            let groupOfParticipants = BillardTurnier.sortParticipantsByPoints(participants[0], participants[1], participants[2]);
            // console.log(participants);
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
            for (let index = 0; index < groupOfParticipants.length; index++) {
                let tr = document.createElement("tr");
                let tdName = document.createElement("td");
                let tdPoints = document.createElement("td");
                let tdFouls = document.createElement("td");
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
})(BillardTurnier || (BillardTurnier = {}));
//# sourceMappingURL=script.js.map