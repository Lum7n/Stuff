"use strict";
var BillardTurnier;
(function (BillardTurnier) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        console.log("start");
        buildGroupTables();
    }
    function buildGroupTables() {
        console.log("table");
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
})(BillardTurnier || (BillardTurnier = {}));
//# sourceMappingURL=script.js.map