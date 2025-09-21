
let table = document.getElementById("transaction-table");
function addValues() {
    let date = document.getElementsByClassName("dateInput")[0].value;
    let amount = document.getElementsByClassName("amountInput")[0].value;
    let type = document.getElementsByClassName("transactionType")[0].value;
    if(date&&amount&&type){
    let row = document.createElement("tr");

    let amountCell = document.createElement("td");
    amountCell.innerText = amount;

    let transactionTypeCell = document.createElement("td");
    transactionTypeCell.innerText = type;

    let dateCell = document.createElement("td");
    dateCell.innerText = date;

    let binCell = document.createElement("td");
    let binButton = document.createElement("button");
    let binImage = document.createElement("img");
    binImage.src = "./img/recycle-bin.png";
    binImage.style.cursor = "pointer";
    binImage.style.width = "20px";
    binImage.styleheight = "20px";
    binButton.classList.add("delete-button");
    binButton.appendChild(binImage);

    binCell.appendChild(binButton);
    binButton.onclick = function () {
        table.removeChild(row);
    }


    row.appendChild(amountCell);
    row.appendChild(transactionTypeCell);
    row.appendChild(dateCell);
    row.appendChild(binCell);
    table.appendChild(row);

    }

    let totalIncome = document.getElementById("totalIncome").innerText;
    let totalExpense = document.getElementById("totalExpense").innerText;
    let totalBalance = document.getElementById("totalBalance").innerText;
    if (type === "income") {
        if (totalIncome == "0") {
            document.getElementById("totalIncome").innerText = amount;
        } else {
            document.getElementById("totalIncome").innerText = parseInt(totalIncome) + parseInt(amount);
        }
        if (totalBalance == "0") {
            document.getElementById("totalBalance").innerText = amount;
        } else {
            document.getElementById("totalBalance").innerText = parseInt(totalBalance) + parseInt(amount);
        }
    } else if (type === "expense") {
        if (totalExpense == "0") {
            document.getElementById("totalExpense").innerText = amount;
        } else {
            document.getElementById("totalExpense").innerText = parseInt(totalExpense) + parseInt(amount);
        }
        if (totalBalance == "0") {
            document.getElementById("totalBalance").innerText = amount;
        } else {
            document.getElementById("totalBalance").innerText = parseInt(totalBalance) - parseInt(amount);
        }
    }
}

