const squadreCalcio = [
    {
        nome: "Milan",
        punti: 0,
        falli: 0,
    },
    {
        nome:"Inter",
        punti: 0,
        falli: 0,
    },
    {
        nome: "Juventus",
        punti: 0,
        falli: 0,
    },
    {
        nome:"Roma",
        punti: 0,
        falli: 0,
    },
    {
        nome: "Napoli",
        punti: 0,
        falli: 0,
    },
    {
        nome:"Sampdoria",
        punti: 0,
        falli: 0,
    },
];



for (let i=0; i<squadreCalcio.length; i++){
    squadreCalcio[i].punti = Math.floor(Math.random()*20);
    squadreCalcio[i].falli = Math.floor(Math.random()*10);
}
console.log(squadreCalcio);    



