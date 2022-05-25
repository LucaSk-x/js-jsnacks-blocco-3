let listNumber = [0, ];

let somma = 0;
let validation = true;
let btn = document.getElementById("btn")
let insert = document.getElementById("insert")

btn.addEventListener ("click", function() {
    let somma = 0;
    for (let i = 0; i < 5; i++) {
        let userInput = prompt("inserisci un numero");
        let userNumber = parseInt(userInput);
        listNumber.push(userNumber);
        somma += userNumber

    }

    insert.innerHTML = `La somma dei tuoi numeri è ${somma}`
})