namespace BillardTurnier {

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

}