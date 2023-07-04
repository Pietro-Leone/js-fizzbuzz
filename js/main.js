// Dichiaro le variabili
const blockContainer = document.querySelector(".block-container");


// Ciclo FOR che stampa tutti i numeri tra 0 e 100
for (let i = 1; i <= 100; i++) {

    let singleBlock = document.createElement("div");
    singleBlock.classList.add("block");
    singleBlock.innerHTML = i.toString();
    blockContainer.append(singleBlock);

    // Blocco IF 
    if (i % 3 === 0) {  //Controllo se i è divisibile per 3
        if (i % 5 === 0) {  //Controllo se i è divisibile anche per 5
            console.log(i + " " + "FizzBuzz")   //Se è divisibile per entrambi stampo FizzBuzz
            singleBlock.style.backgroundColor = "#f0466f";
            singleBlock.innerHTML = "Fizz Buzz";
        }
        else { //se è divisibile solo per 3 stampo solo Fizz
            console.log(i + " " + "Fizz")
            singleBlock.style.backgroundColor = "#0cd6a1";
            singleBlock.innerHTML = "Fizz";
        }
    }
    else if (i % 5 === 0) { //Controllo se i è divisibile per 5
        console.log(i + " " + "Buzz") //Se è divisibile per 5 stampo Buzz
        singleBlock.style.backgroundColor = "#ffd166";
        singleBlock.innerHTML = "Buzz";
    }
    else { //Se non è divisibile n'è per 3 n'è per 5 allora stampo i
        console.log(i)
        singleBlock.style.backgroundColor = "#1389b2";
    }

}