// Ciclo FOR che stampa tutti i numeri tra 0 e 100
for (let i = 1; i <= 100; i++) {

    // Blocco IF 
    if (i % 3 === 0) {  //Controllo se i è divisibile per 3
        if (i % 5 === 0) {  //Controllo se i è divisibile anche per 5
            console.log(i + " " + "FizzBuzz")   //Se è divisibile per entrambi stampo FizzBuzz
        }
        else { //se è divisibile solo per 3 stampo solo Fizz
            console.log(i + " " + "Fizz")
        }
    }
    else if (i % 5 === 0) { //Controllo se i è divisibile per 5
        console.log(i + " " + "Buzz") //Se è divisibile per 5 stampo Buzz
    }
    else { //Se non è divisibile n'è per 3 n'è per 5 allora stampo i
        console.log(i)
    }
}