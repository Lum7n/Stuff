namespace BillardTurnier {

    export let A1: [name: string, points: number, fouls: number] = ["Max", 0, 0];
    export let A2: [name: string, points: number, fouls: number] = ["Simon", 0, 0];
    export let A3: [name: string, points: number, fouls: number] = ["Justin", 0, 0];

    export let B1: [name: string, points: number, fouls: number] = ["Vincent", 0, 0];
    export let B2: [name: string, points: number, fouls: number] = ["Ben", 0, 0];
    export let B3: [name: string, points: number, fouls: number] = ["Luis", 0, 0];

    export let C1: [name: string, points: number, fouls: number] = ["Sigi", 0, 0];
    export let C2: [name: string, points: number, fouls: number] = ["Jan", 0, 0];
    export let C3: [name: string, points: number, fouls: number] = ["Ulla", 0, 0];

    export let D1: [name: string, points: number, fouls: number] = ["Linda", 0, 0];
    export let D2: [name: string, points: number, fouls: number] = ["Alex", 0, 0];
    export let D3: [name: string, points: number, fouls: number] = ["Valentin", 0, 0];

    // Matches

    export interface Match {
        name1: string;
        points1: number;
        fouls1: number;
        name2: string;
        points2: number;
        fouls2: number;
    }

    export interface Matches {
        [part: string]: Match[];
    }

    export let matches: Matches = {
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


    // Participants

    export interface Participants {
        name: string;
        points: number;
    }

    export interface Data {
        [group: string]: Participants[];
    }

    export let data: Data = {
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

    let index: number = 0;

    export function summarizePoints(): void {

        for (let part in matches) {
            let match: Match[] = matches[part];

            let points1: number = match[0].points1 + match[2].points2;
            let fouls1: number = match[0].fouls1 + match[2].fouls2;

            let points2: number = match[0].points2 + match[1].points1;
            let fouls2: number = match[0].fouls2 + match[1].fouls1;

            let points3: number = match[1].points2 + match[2].points1;
            let fouls3: number = match[1].fouls2 + match[2].fouls1;

            let groups: string[] = ["A", "B", "C", "D"];

            if (groups[index] == "A") {

                A1[1] = points1;
                A1[2] = fouls1;
    
                A2[1] = points2;
                A2[2] = fouls2;
    
                A3[1] = points3;
                A3[2] = fouls3;

                console.log(A1);
                console.log(A2);
                console.log(A3);

            } else if (groups[index] == "B") {

                B1[1] = points1;
                B1[2] = fouls1;
    
                B2[1] = points2;
                B2[2] = fouls2;
    
                B3[1] = points3;
                B3[2] = fouls3;

                console.log(B1);
                console.log(B2);
                console.log(B3);

            } else if (groups[index] == "C") {

                C1[1] = points1;
                C1[2] = fouls1;
    
                C2[1] = points2;
                C2[2] = fouls2;
    
                C3[1] = points3;
                C3[2] = fouls3;

                console.log(C1);
                console.log(C2);
                console.log(C3);

            } else if (groups[index] == "D") {

                D1[1] = points1;
                D1[2] = fouls1;
    
                D2[1] = points2;
                D2[2] = fouls2;
    
                D3[1] = points3;
                D3[2] = fouls3;

                console.log(D1);
                console.log(D2);
                console.log(D3);

            } else {

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

}