function createTable(){

    const start = Number(document.getElementById("start").value);
    const end = Number(document.getElementById("end").value);
    let theadRow = document.getElementById("thead-row");
    let tbody = document.getElementById("tbody");
    theadRow.innerHTML = "";
    for(let num = start; num <= end; num++){
            theadRow.innerHTML += `<th>${num}단</th>`;
    }


    tbody.innerHTML = "";
    for(let num = 1; num <= 9; num++){
        let str = "<tr>";
        for(let num2 = start; num2<=end; num2++ ){
            str += `<td>${num2} x ${num} = ${num2*num}</td>`;
        }
        str += "</tr>"
        tbody.innerHTML += str;
    }
}