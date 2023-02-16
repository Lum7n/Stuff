namespace BillardTurnier {

    window.addEventListener("load", handleLoad);

    function handleLoad(): void {

        console.log("start");

        buildGroupTables();



    }

    function buildGroupTables(): void {

        console.log("table");

        let table: HTMLTableElement = document.createElement("table");
        let tr1: HTMLTableRowElement = document.createElement("tr");
        let tr2: HTMLTableRowElement = document.createElement("tr");
        let tr3: HTMLTableRowElement = document.createElement("tr");
        let tr4: HTMLTableRowElement = document.createElement("tr");
        let th: HTMLElement = document.createElement("th");
        let td1Name: HTMLTableCellElement = document.createElement("td");
        let td1Points: HTMLTableCellElement = document.createElement("td");
        let td2Name: HTMLTableCellElement = document.createElement("td");
        let td2Points: HTMLTableCellElement = document.createElement("td");
        let td3Name: HTMLTableCellElement = document.createElement("td");
        let td3Points: HTMLTableCellElement = document.createElement("td");



    // <div class="groupA">
    //     <table>
    //         <tr>
    //             <th>Gruppe A</th>
    //         </tr>
    //         <tr>
    //             <td>Max</td>
    //             <td>0 P.</td>
    //         </tr>
    //         <tr>
    //             <td>Simon</td>
    //             <td>0 P.</td>
    //         </tr>
    //         <tr>
    //             <td>Justin</td>
    //             <td>0 P.</td>
    //         </tr>
    //     </table>
    // </div>



    }

    
}