// - definisco una cosante per il prezzo al kilometro (kilometerPrice) = 0.21
const kilometerPrice = 0.21;
// - definisco le costanti youngPrice = 0.8, youngAge = 17 e elderPrice = 0.6, elderAge = 66
const youngPrice = 0.8;
const elderPrice = 0.6;

const youngAge = 17;
const elderAge = 66;


// - creo le variabili per gestire gli input del cliente: 
//     desiredKilometers (conterrà i kilometri)
//     passangerAge (età del passeggero)
let desiredKilometers
let passangerAge


window.alert("BENVENUTO NEL PORTALE RICCARDOTRENIMERAVIGLIA.IT")

// - richiedo all'utente il numero di kilometri
// - valido l'input:
//     deve essere un numero
//     deve essere un numero intero
//     deve essere maggiore di 0
//     deve essere minore di 1000 ('non esistono nella Nostra linea tratte così lunghe')

desiredKilometers = window.prompt("Quanti chilometri vuoi percorrere?")

function validateKilometers(userInput){
    let localNumber = Number(userInput);
    if (isNaN(localNumber)){
        window.alert("Perfavore inserire solamente numeri evitare lettere o segni di punteggiatura")
        return false;
    }

    if (localNumber%1 != 0){
        window.alert("perfavore inserire solo numeri interi senza virgole")
        return false
    }

    if (localNumber <= 0){
        window.alert("Perfavore inserire solo numeri maggiori di 0")
        return false;
    }

    return true;
}


while (!validateKilometers(desiredKilometers)){
    desiredKilometers = window.prompt("Quanti chilometri vuoi percorrere?")
}
// - richiedo all'utente l'età del passeggero nel formato gg-mm-aaaa
// - valido l'input:
//     il formato deve essere gg-mm-aaaa
//     la data deve antecedere oggi
//     mm deve essere un valore tra 1 e 12 estremi inclusi
//     gg in base al mese deve andare tra un minimo di 1 e un massimo di 28/29/30/31

function inputToDate(userInput=String){
    // returns false on wrong input or float number indicating the user age
    if (userInput.length !== 10 || userInput[2] !== "-" || userInput[5] !== "-"){
        window.alert("Perfavore inserire la data nel formato gg-mm-aaaa")
        return false
    }
    let localDay = Number(userInput.substring(0,2))
    let localMonth = Number(userInput.substring(3,5))
    let localYear = Number(userInput.substring(6, ))
    if (isNaN(localDay) || isNaN(localMonth) || isNaN(localYear) || localDay <= 0 || localMonth <= 0 || localYear <= 1901 || localMonth > 12 ){
        window.alert("Perfavore inserire solo numeri validi per i valori di giorno mese e anno")
        return false
    }
    const localMonthsList = ['Gen', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    userInput = userInput.replace('-'+(localMonth).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})+'-',' '+localMonthsList[localMonth-1]+' ')
    let localUserDate = Date.parse(userInput)
    if (isNaN(localUserDate)){
        window.alert("Data non valida, ricontrollare i dati e riprovare")
        return false
    }
    localUserDate = new Date(localUserDate)
    const localToday = new Date()
    if (localUserDate > localToday){
        window.alert("Inserire una data di nascia valida.")
        return false
    }

    return (localToday - localUserDate)/1000 /3600 /24 /365
}

passangerAge = window.prompt("Inserire l'età del passeggero nel formato gg-mm-aaaa")
passangerAge = inputToDate(passangerAge)

while(passangerAge === false){
    passangerAge = window.prompt("Inserire l'età del passeggero nel formato gg-mm-aaaa")
    passangerAge = inputToDate(passangerAge)
}
console.log(passangerAge)

// - creo una variabile prezzoBiglietto
// - prezzoBiglietto sarà uguale al prodotto tra desiredKilometers e kilometerPrice
let prezzoBiglietto = desiredKilometers * kilometerPrice
// - controllo se l'utente ha un età minore o uguale a youngAge e nel caso applico il prezzo youngPrice * prezzoBiglietto
if (passangerAge <= youngAge){
    prezzoBiglietto = prezzoBiglietto * youngPrice
}
// - controllo se l'utente ha un età maggiore o uguale a elderAge se si applico il prezzo elderPrice * prezzoBiglietto
if (passangerAge >= elderAge){
    prezzoBiglietto = prezzoBiglietto * elderPrice
}

// - normalizzo l'output per fare in modo che il mio numero abbia al massimo 2 decimali
prezzoBiglietto = (Math.floor(prezzoBiglietto * 100) / 100).toFixed(2);

document.getElementById("kilometers").innerHTML = desiredKilometers;
document.getElementById("age").innerHTML = `${Math.floor(passangerAge)} anni e ${Math.floor((passangerAge%1) * 12)} mesi`;
document.getElementById("price").innerHTML = prezzoBiglietto;

console.log(prezzoBiglietto, desiredKilometers)


function buyTicket(){
    document.getElementById("main-container").style.display = "None";
    document.getElementById("title").innerHTML = "Biglietto Acquistato con successo" 
    setTimeout(function() {
        window.location.reload()
    }, (3 * 1000));
}
console.log("fine")