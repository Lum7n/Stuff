"use strict";
var BillardTurnier;
(function (BillardTurnier) {
    // Matches
    BillardTurnier.matches = {
        A: [
            { name1: "Max", points1: 2, fouls1: 3, name2: "Simon", points2: 0, fouls2: 4, date: "Dienstag, 10:00 Uhr" },
            { name1: "Simon", points1: 2, fouls1: 7, name2: "Justin", points2: 0, fouls2: 6, date: "Dienstag, 10:40 Uhr" },
            { name1: "Justin", points1: 0, fouls1: 0, name2: "Max", points2: 0, fouls2: 0, date: "Dienstag, 14:00 Uhr" }
        ],
        B: [
            { name1: "Vincent", points1: 0, fouls1: 0, name2: "Ben", points2: 0, fouls2: 0, date: "Mittwoch, 16:00 Uhr" },
            { name1: "Ben", points1: 0, fouls1: 0, name2: "Luis", points2: 0, fouls2: 0, date: "Mittwoch, 18:00 Uhr" },
            { name1: "Luis", points1: 0, fouls1: 0, name2: "Vincent", points2: 0, fouls2: 0, date: "Mittwoch, 20:00 Uhr" }
        ],
        C: [
            { name1: "Sigi", points1: 0, fouls1: 0, name2: "Jan", points2: 0, fouls2: 0, date: "Mittwoch, 10:00 Uhr" },
            { name1: "Jan", points1: 0, fouls1: 0, name2: "Ulla", points2: 0, fouls2: 0, date: "Mittwoch, 12:00 Uhr" },
            { name1: "Ulla", points1: 0, fouls1: 0, name2: "Sigi", points2: 0, fouls2: 0, date: "Mittwoch, 14:00 Uhr" }
        ],
        D: [
            { name1: "Linda", points1: 0, fouls1: 0, name2: "Alex", points2: 0, fouls2: 0, date: "Dienstag, 16:00 Uhr" },
            { name1: "Alex", points1: 0, fouls1: 0, name2: "Valentin", points2: 0, fouls2: 0, date: "Dienstag, 18:00 Uhr" },
            { name1: "Valentin", points1: 0, fouls1: 0, name2: "Linda", points2: 0, fouls2: 0, date: "Dienstag, 20:00 Uhr" }
        ],
        VF1: [
            { name1: "A1", points1: 0, fouls1: 0, name2: "B2", points2: 0, fouls2: 0, date: "Samstag, 8:00 Uhr" },
            { name1: "B1", points1: 0, fouls1: 0, name2: "A2", points2: 0, fouls2: 0, date: "Samstag, 10:00 Uhr" }
        ],
        VF2: [
            { name1: "C1", points1: 0, fouls1: 0, name2: "D2", points2: 0, fouls2: 0, date: "Samstag, 12:00 Uhr" },
            { name1: "D1", points1: 0, fouls1: 0, name2: "C2", points2: 0, fouls2: 0, date: "Samstag, 14:00 Uhr" }
        ],
        HF: [
            { name1: "VF1", points1: 0, fouls1: 0, name2: "VF3", points2: 0, fouls2: 0, date: "Samstag, 16:00 Uhr" },
            { name1: "VF2", points1: 0, fouls1: 0, name2: "VF4", points2: 0, fouls2: 0, date: "Samstag, 18:00 Uhr" }
        ],
        Final: [
            { name1: "HF1", points1: 0, fouls1: 0, name2: "HF2", points2: 0, fouls2: 0, date: "Samstag, 20:00 Uhr" }
        ]
    };
    BillardTurnier.data = {
        A: [
            { name: "Max", points: 0, fouls: 0 },
            { name: "Simon", points: 0, fouls: 0 },
            { name: "Justin", points: 0, fouls: 0 }
        ],
        B: [
            { name: "Vincent", points: 0, fouls: 0 },
            { name: "Ben", points: 0, fouls: 0 },
            { name: "Luis", points: 0, fouls: 0 }
        ],
        C: [
            { name: "Sigi", points: 0, fouls: 0 },
            { name: "Jan", points: 0, fouls: 0 },
            { name: "Ulla", points: 0, fouls: 0 }
        ],
        D: [
            { name: "Linda", points: 0, fouls: 0 },
            { name: "Alex", points: 0, fouls: 0 },
            { name: "Valentin", points: 0, fouls: 0 }
        ]
    };
    let index = 0;
    function summarizePoints() {
        for (let part in BillardTurnier.matches) {
            let match = BillardTurnier.matches[part];
            switch (part) {
                case "A":
                case "B":
                case "C":
                case "D":
                    // console.log(part);
                    let points1 = match[0].points1 + match[2].points2;
                    let fouls1 = match[0].fouls1 + match[2].fouls2;
                    let points2 = match[0].points2 + match[1].points1;
                    let fouls2 = match[0].fouls2 + match[1].fouls1;
                    let points3 = match[1].points2 + match[2].points1;
                    let fouls3 = match[1].fouls2 + match[2].fouls1;
                    let groups = ["A", "B", "C", "D"];
                    if (groups[index] == "A") {
                        BillardTurnier.data.A[0].points = points1;
                        BillardTurnier.data.A[0].fouls = fouls1;
                        BillardTurnier.data.A[1].points = points2;
                        BillardTurnier.data.A[1].fouls = fouls2;
                        BillardTurnier.data.A[2].points = points3;
                        BillardTurnier.data.A[2].fouls = fouls3;
                        // console.log(data.A[0]);
                        // console.log(data.A[1]);
                        // console.log(data.A[2]);
                    }
                    else if (groups[index] == "B") {
                        BillardTurnier.data.B[0].points = points1;
                        BillardTurnier.data.B[0].fouls = fouls1;
                        BillardTurnier.data.B[1].points = points2;
                        BillardTurnier.data.B[1].fouls = fouls2;
                        BillardTurnier.data.B[2].points = points3;
                        BillardTurnier.data.B[2].fouls = fouls3;
                        // console.log(data.B[0]);
                        // console.log(data.B[1]);
                        // console.log(data.B[2]);
                    }
                    else if (groups[index] == "C") {
                        BillardTurnier.data.C[0].points = points1;
                        BillardTurnier.data.C[0].fouls = fouls1;
                        BillardTurnier.data.C[1].points = points2;
                        BillardTurnier.data.C[1].fouls = fouls2;
                        BillardTurnier.data.C[2].points = points3;
                        BillardTurnier.data.C[2].fouls = fouls3;
                        // console.log(data.C[0]);
                        // console.log(data.C[1]);
                        // console.log(data.C[2]);
                    }
                    else if (groups[index] == "D") {
                        BillardTurnier.data.D[0].points = points1;
                        BillardTurnier.data.D[0].fouls = fouls1;
                        BillardTurnier.data.D[1].points = points2;
                        BillardTurnier.data.D[1].fouls = fouls2;
                        BillardTurnier.data.D[2].points = points3;
                        BillardTurnier.data.D[2].fouls = fouls3;
                        // console.log(data.D[0]);
                        // console.log(data.D[1]);
                        // console.log(data.D[2]);
                    }
                    else {
                        break;
                    }
                    index++;
                    break;
                case "VF1":
                case "VF2":
                case "HF":
                case "Final":
                    // console.log("emptySummarize: " + part);
                    break;
                default:
                    break;
            }
        }
    }
    BillardTurnier.summarizePoints = summarizePoints;
})(BillardTurnier || (BillardTurnier = {}));
//# sourceMappingURL=data.js.map