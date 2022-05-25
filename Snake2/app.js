let btn = document.getElementById("btn");

let numeroUtente;

let arrayN = [];



btn.addEventListener ("click", function() {

    while (numeroUtente === undefined) {
        let userInput = prompt("Inserisci un numero tra 5 e 10.");
        let userNumber = parseInt(userInput);

        
        
    
    
        if (userNumber >= 5 && userNumber <= 10) {
            numeroUtente = userNumber;
        } else {
            alert('inserisci un numero compreso tra 5 e 10')
        }

        // faccio n volte
        for (let i = 0; i < userNumber; i++) {
            // creo un nuovo array
            let arrayN = [];
            // creo una stringa vuota
            let testoArray = "";
            
        
            for (let j = 0; j < 10; j++) {
                // creo un numero random da 1 a 100
                let randomNumber = Math.floor((Math.random() * 100) + 1);
                // pusho il numero random dentro arrayN
                arrayN.push(randomNumber)
                // aggiungo all fine della stringa il numero random
                testoArray = testoArray + randomNumber + ", "

            }
            
            console.log(arrayN.join(", "));

        }
        
    }

    
});

