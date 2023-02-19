"use strict";
var BillardTurnier;
(function (BillardTurnier) {
    BillardTurnier.A1 = ["Max", 0, 0];
    BillardTurnier.A2 = ["Simon", 0, 0];
    BillardTurnier.A3 = ["Justin", 0, 0];
    BillardTurnier.B1 = ["Vincent", 0, 0];
    BillardTurnier.B2 = ["Ben", 0, 0];
    BillardTurnier.B3 = ["Luis", 0, 0];
    BillardTurnier.C1 = ["Sigi", 0, 0];
    BillardTurnier.C2 = ["Jan", 0, 0];
    BillardTurnier.C3 = ["Ulla", 0, 0];
    BillardTurnier.D1 = ["Linda", 0, 0];
    BillardTurnier.D2 = ["Alex", 0, 0];
    BillardTurnier.D3 = ["Valentin", 0, 0];
    BillardTurnier.matches = {
        A: [
            { name1: "Max", points1: 5, fouls1: 10, name2: "Simon", points2: 1, fouls2: 0 },
            { name1: "Simon", points1: 1, fouls1: 0, name2: "Justin", points2: 10, fouls2: 0 },
            { name1: "Justin", points1: 10, fouls1: 0, name2: "Max", points2: 3, fouls2: 1 }
        ],
        B: [
            { name1: "Vincent", points1: 0, fouls1: 0, name2: "Ben", points2: 0, fouls2: 0 },
            { name1: "Ben", points1: 0, fouls1: 0, name2: "Luis", points2: 5, fouls2: 0 },
            { name1: "Luis", points1: 50, fouls1: 0, name2: "Vincent", points2: 0, fouls2: 0 }
        ],
        C: [
            { name1: "Sigi", points1: 0, fouls1: 0, name2: "Jan", points2: 0, fouls2: 0 },
            { name1: "Jan", points1: 0, fouls1: 0, name2: "Ulla", points2: 0, fouls2: 0 },
            { name1: "Ulla", points1: 0, fouls1: 0, name2: "Sigi", points2: 0, fouls2: 0 }
        ],
        D: [
            { name1: "Linda", points1: 0, fouls1: 0, name2: "Alex", points2: 0, fouls2: 0 },
            { name1: "Alex", points1: 0, fouls1: 0, name2: "Valentin", points2: 0, fouls2: 0 },
            { name1: "Valentin", points1: 0, fouls1: 0, name2: "Linda", points2: 0, fouls2: 0 }
        ]
    };
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
    let index = 0;
    function summarizePoints() {
        for (let part in BillardTurnier.matches) {
            let match = BillardTurnier.matches[part];
            let points1 = match[0].points1 + match[2].points2;
            let fouls1 = match[0].fouls1 + match[2].fouls2;
            let points2 = match[0].points2 + match[1].points1;
            let fouls2 = match[0].fouls2 + match[1].fouls1;
            let points3 = match[1].points2 + match[2].points1;
            let fouls3 = match[1].fouls2 + match[2].fouls1;
            let groups = ["A", "B", "C", "D"];
            if (groups[index] == "A") {
                BillardTurnier.A1[1] = points1;
                BillardTurnier.A1[2] = fouls1;
                BillardTurnier.A2[1] = points2;
                BillardTurnier.A2[2] = fouls2;
                BillardTurnier.A3[1] = points3;
                BillardTurnier.A3[2] = fouls3;
                console.log(BillardTurnier.A1);
                console.log(BillardTurnier.A2);
                console.log(BillardTurnier.A3);
            }
            else if (groups[index] == "B") {
                BillardTurnier.B1[1] = points1;
                BillardTurnier.B1[2] = fouls1;
                BillardTurnier.B2[1] = points2;
                BillardTurnier.B2[2] = fouls2;
                BillardTurnier.B3[1] = points3;
                BillardTurnier.B3[2] = fouls3;
                console.log(BillardTurnier.B1);
                console.log(BillardTurnier.B2);
                console.log(BillardTurnier.B3);
            }
            else if (groups[index] == "C") {
                BillardTurnier.C1[1] = points1;
                BillardTurnier.C1[2] = fouls1;
                BillardTurnier.C2[1] = points2;
                BillardTurnier.C2[2] = fouls2;
                BillardTurnier.C3[1] = points3;
                BillardTurnier.C3[2] = fouls3;
                console.log(BillardTurnier.C1);
                console.log(BillardTurnier.C2);
                console.log(BillardTurnier.C3);
            }
            else if (groups[index] == "D") {
                BillardTurnier.D1[1] = points1;
                BillardTurnier.D1[2] = fouls1;
                BillardTurnier.D2[1] = points2;
                BillardTurnier.D2[2] = fouls2;
                BillardTurnier.D3[1] = points3;
                BillardTurnier.D3[2] = fouls3;
                console.log(BillardTurnier.D1);
                console.log(BillardTurnier.D2);
                console.log(BillardTurnier.D3);
            }
            else {
                break;
            }
            index++;
        }
        // let data: Data = {};
        // data.A = [
        //     { name: match[0].name1, points: points1 },
        //     { name: match[1].name1, points: points2 },
        //     { name: match[2].name1, points: points3 }
        // ];
        // console.log(data);
    }
    BillardTurnier.summarizePoints = summarizePoints;
})(BillardTurnier || (BillardTurnier = {}));
//# sourceMappingURL=data.js.map