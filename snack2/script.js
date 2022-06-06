const squadreCalcio = [
    {
        nome: "Milan",
        punti: "",
        falli: 0,
    },
    {
        nome:"Inter",
        punti: "",
        falli: 0,
    },
    {
        nome: "Juventus",
        punti: "",
        falli: 0,
    },
    {
        nome:"Roma",
        punti: "",
        falli: 0,
    },
    {
        nome: "Napoli",
        punti: "",
        falli: 0,
    },
    {
        nome:"Sampdoria",
        punti: "",
        falli: 0,
    },
];



for (let i=0; i<squadreCalcio.length; i++){
    squadreCalcio[i].punti = Math.floor(Math.random()*20);
}
console.log(squadreCalcio);
}    



