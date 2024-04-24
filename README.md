Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
    - il prezzo del biglietto è definito in base ai km (0.21 € al km)
    - va applicato uno sconto del 20% per i minorenni
    - va applicato uno sconto del 40% per gli over 65.

L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
Questo richiederà un minimo di ricerca.

- definisco una cosante per il prezzo al kilometro (kilometerPrice) = 0.21
- definisco le costanti youngPrice = 0.8, youngAge = 17 e elderPrice = 0.6, elderAge = 66
- creo le variabili per gestire gli input del cliente: 
    desiredKilometers (conterrà i kilometri)
    passangerAge (età del passeggero)

- richiedo all'utente il numero di kilometri
- valido l'input:
    deve essere un numero
    deve essere un numero intero
    deve essere maggiore di 0
    deve essere minore di 1000 ('non esistono nella Nostra linea tratte così lunghe')

- richiedo all'utente l'età del passeggero nel formato gg-mm-aaaa
- valido l'input:
    il formato deve essere gg-mm-aaaa
    la data deve antecedere oggi
    mm deve essere un valore tra 1 e 12 estremi inclusi
    gg in base al mese deve andare tra un minimo di 1 e un massimo di 28/29/30/31

- creo una variabile prezzoBiglietto
- prezzoBiglietto sarà uguale al prodotto tra desiredKilometers e kilometerPrice

- controllo se l'utente ha meno di 18 anni e nel caso applico il prezzo youngPrice * prezzoBiglietto

- controllo se l'utente ha più di 