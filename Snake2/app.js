let btn = document.getElementById("btn");

let numeroUtente;

let arrayN = [];

btn.addEventListener ("click", function() {

    while (numeroUtente === undefined) {
        let userInput = prompt("Inserisci un numero tra 5 e 10.");
        let userNumber = parseInt(userInput);

        let arrayN = [];
    
    
        if (userNumber >= 5 && userNumber <= 10) {
            numeroUtente = userNumber;
        } else {
            alert('inserisci un numero compreso tra 5 e 10')
        }

        for (let i = 0; i < userNumber; i++) {

            for (let j = 0; j < 10; j++) {
                arrayN.push(Math.floor((Math.random() * 100) + 1));
            }
        }
        console.log(arrayN)
        console.log()
    }

    
});

