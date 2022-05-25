let listNumber = [0, ];

let somma = 0;
let validation = true;
let btn = document.getElementById("btn")

btn.addEventListener ("click", function() {
    while (validation) {
        let userInput = prompt("inserisci un numero");
        let userNumber = parseInt(userInput);
        listNumber.push(userNumber);
        somma += userNumber

        if (somma >= 50) {
            validation = false;
        }
        
        console.log(somma)
    }
})
