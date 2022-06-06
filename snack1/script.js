const containerDiv = document.querySelector(".container");
const element = document.createElement("div");
containerDiv.append(element);

const elencoBiciclette = [
    {
        nome: "Bianchi",
        peso: 5,
    },
    {
        nome: "Cinelli",
        peso: 6,
    },
    {
        nome: "Colnago",
        peso: 8,
    },
    {
        nome: "Rossignoli",
        peso: 10,
    },
    {
        nome: "Carrera",
        peso: 12,
    },
    {
        nome: "Decathlon",
        peso: 13,
    }
];

const {nome, peso} = elencoBiciclette[0];

let biciPiuLeggera = {
    nome,
    peso,
};

for (let i=1; i<elencoBiciclette.length; i++){
    const {nome, peso} = elencoBiciclette[i];

    if (biciPiuLeggera.peso > peso){
        biciPiuLeggera = {
            nome,
            peso,
        }
    }
    
}

console.log(biciPiuLeggera)

element.innerHTML = `<h1>La bicletta più leggera è</h1> \n <h2>${biciPiuLeggera.nome}</h2> \n <h2>${biciPiuLeggera.peso} Kg</h2>`;





