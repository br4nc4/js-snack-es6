const myArray = [
    "Michele", 
    "Fabio", 
    "Roberto", 
    "Giovanni", 
    "Simone",
    "Chiara"
];

//numeri che indicano l'indice minimo e il massimo
const numMin = 2;
const numMax = 4;

const nuovoArray =[];

myArray.forEach((guest, i) =>{
    //se il valore di i è compreso tra nummin e nummax
    //pushiamo l'elemento nel nuovo array

    if(i>= numMin && i <= numMax){
        nuovoArray.push(guest);
    }
})

console.log(nuovoArray);

const nuovoArrayFilter = myArray.filter((guest, i) =>{
    if(i>= numMin && i <= numMax){
        return true
    }
});

console.log(nuovoArrayFilter);