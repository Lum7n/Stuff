"use strict";
var BillardTurnier;
(function (BillardTurnier) {
    // Matches
    BillardTurnier.matches = {
        A: [
            { name1: "Max", points1: 2, fouls1: 3, name2: "Simon", points2: 0, fouls2: 4, date: "Dienstag, 10:00 Uhr" },
            { name1: "Simon", points1: 2, fouls1: 7, name2: "Justin", points2: 0, fouls2: 6, date: "Dienstag, 10:40 Uhr" },
            { name1: "Justin", points1: 0, fouls1: 2, name2: "Max", points2: 2, fouls2: 3, date: "Dienstag, 14:00 Uhr" }
        ],
        B: [
            { name1: "Vincent", points1: 2, fouls1: 1, name2: "Ben", points2: 0, fouls2: 4, date: "Mittwoch, 16:00 Uhr" },
            { name1: "Ben", points1: 0, fouls1: 3, name2: "Luis", points2: 2, fouls2: 2, date: "Mittwoch, 17:00 Uhr" },
            { name1: "Luis", points1: 2, fouls1: 5, name2: "Vincent", points2: 1, fouls2: 4, date: "Mittwoch, 18:00 Uhr" }
        ],
        C: [
            { name1: "Sigi", points1: 2, fouls1: 4, name2: "Jan", points2: 0, fouls2: 3, date: "Mittwoch, 12:00 Uhr" },
            { name1: "Jan", points1: 2, fouls1: 6, name2: "Ulla", points2: 1, fouls2: 9, date: "Mittwoch, 13:00 Uhr" },
            { name1: "Ulla", points1: 2, fouls1: 5, name2: "Sigi", points2: 1, fouls2: 3, date: "Mittwoch, 14:00 Uhr" }
        ],
        D: [
            { name1: "Linda", points1: 1, fouls1: 11, name2: "Alex", points2: 2, fouls2: 5, date: "Dienstag, 15:50 Uhr" },
            { name1: "Alex", points1: 2, fouls1: 5, name2: "Valentin", points2: 1, fouls2: 6, date: "Dienstag, 18:00 Uhr" },
            { name1: "Valentin", points1: 1, fouls1: 9, name2: "Linda", points2: 2, fouls2: 9, date: "Dienstag, 20:00 Uhr" }
        ],
        VF1: [
            { name1: "Max", points1: 2, fouls1: 1, name2: "Vincent", points2: 0, fouls2: 5, date: "Samstag, 12:00 Uhr" },
            { name1: "Luis", points1: 2, fouls1: 2, name2: "Simon", points2: 0, fouls2: 1, date: "Samstag, 12:30 Uhr" }
        ],
        VF2: [
            { name1: "Sigi", points1: 2, fouls1: 3, name2: "Linda", points2: 1, fouls2: 3, date: "Samstag, 13:00 Uhr" },
            { name1: "Alex", points1: 2, fouls1: 12, name2: "Jan", points2: 1, fouls2: 7, date: "Samstag, 13:30 Uhr" }
        ],
        HF: [
            { name1: "Max", points1: 0, fouls1: 1, name2: "Sigi", points2: 2, fouls2: 3, date: "Samstag, 15:00 Uhr" },
            { name1: "Luis", points1: 2, fouls1: 2, name2: "Alex", points2: 1, fouls2: 3, date: "Samstag, 16:00 Uhr" }
        ],
        Final: [
            { name1: "Sigi", points1: 2, fouls1: 5, name2: "Luis", points2: 3, fouls2: 1, date: "Samstag, 17:00 Uhr" }
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
                    let participants = [0, 0, 0];
                    for (let index = 0; index < 3; index++) {
                        if (match[index].points1 - match[index].points2 > 0) {
                            participants[index]++;
                        }
                        else if (match[index].points1 - match[index].points2 < 0) {
                            participants[(index + 1) % 3]++;
                        }
                        else {
                            console.log("leer");
                        }
                    }
                    // console.log(participants);
                    let fouls1 = match[0].fouls1 + match[2].fouls2;
                    let fouls2 = match[0].fouls2 + match[1].fouls1;
                    let fouls3 = match[1].fouls2 + match[2].fouls1;
                    let groups = ["A", "B", "C", "D"];
                    if (groups[index] == "A") {
                        BillardTurnier.data.A[0].points = participants[0];
                        BillardTurnier.data.A[1].points = participants[1];
                        BillardTurnier.data.A[2].points = participants[2];
                        BillardTurnier.data.A[0].fouls = fouls1;
                        BillardTurnier.data.A[1].fouls = fouls2;
                        BillardTurnier.data.A[2].fouls = fouls3;
                        // console.log(data.A[0]);
                        // console.log(data.A[1]);
                        // console.log(data.A[2]);
                    }
                    else if (groups[index] == "B") {
                        BillardTurnier.data.B[0].points = participants[0];
                        BillardTurnier.data.B[1].points = participants[1];
                        BillardTurnier.data.B[2].points = participants[2];
                        BillardTurnier.data.B[0].fouls = fouls1;
                        BillardTurnier.data.B[1].fouls = fouls2;
                        BillardTurnier.data.B[2].fouls = fouls3;
                        // console.log(data.B[0]);
                        // console.log(data.B[1]);
                        // console.log(data.B[2]);
                    }
                    else if (groups[index] == "C") {
                        BillardTurnier.data.C[0].points = participants[0];
                        BillardTurnier.data.C[1].points = participants[1];
                        BillardTurnier.data.C[2].points = participants[2];
                        BillardTurnier.data.C[0].fouls = fouls1;
                        BillardTurnier.data.C[1].fouls = fouls2;
                        BillardTurnier.data.C[2].fouls = fouls3;
                        // console.log(data.C[0]);
                        // console.log(data.C[1]);
                        // console.log(data.C[2]);
                    }
                    else if (groups[index] == "D") {
                        BillardTurnier.data.D[0].points = participants[0];
                        BillardTurnier.data.D[1].points = participants[1];
                        BillardTurnier.data.D[2].points = participants[2];
                        BillardTurnier.data.D[0].fouls = fouls1;
                        BillardTurnier.data.D[1].fouls = fouls2;
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
    function transferPartisipantsToFinals() {
        for (let group in BillardTurnier.data) {
            let participants = BillardTurnier.data[group];
            let groupOfParticipants = sortParticipantsByPoints(participants[0], participants[1], participants[2]);
            console.log(groupOfParticipants);
            let groups = ["A", "B", "C", "D"];
            if (groups[index] == "A") {
                // data.A[0].points = participants[0];
                // data.A[0].fouls = fouls1;
            }
        }
    }
    BillardTurnier.transferPartisipantsToFinals = transferPartisipantsToFinals;
    function sortParticipantsByPoints(participant1, participant2, participant3) {
        if (participant2.points > participant1.points || participant2.points == participant1.points && participant2.fouls < participant1.fouls) {
            let switchingNumbers = participant1;
            participant1 = participant2;
            participant2 = switchingNumbers;
            console.log(BillardTurnier.data.A[0]);
            console.log(participant2);
        }
        if (participant3.points > participant2.points || participant3.points == participant2.points && participant3.fouls < participant2.fouls) {
            let switchingNumbers = participant2;
            participant2 = participant3;
            participant3 = switchingNumbers;
        }
        if (participant2.points > participant1.points || participant2.points == participant1.points && participant2.fouls < participant1.fouls) {
            let switchingNumbers = participant1;
            participant1 = participant2;
            participant2 = switchingNumbers;
        }
        // console.log(participant1);
        // console.log(participant2);
        // console.log(participant3);
        let groupOfParticipants = [participant1, participant2, participant3];
        return groupOfParticipants;
    }
    BillardTurnier.sortParticipantsByPoints = sortParticipantsByPoints;
})(BillardTurnier || (BillardTurnier = {}));
//# sourceMappingURL=data.js.map