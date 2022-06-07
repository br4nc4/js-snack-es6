let students = [
    { 
        name: "Marco", 
        id: 213, 
        grades: 78 
    },
    { 
        name: "Paola", 
        id: 110, 
        grades: 96 
    },
    { 
        name: "Andrea", 
        id: 250, 
        grades: 48 
    },
    { 
        name: "Gaia", 
        id: 145, 
        grades: 74 
    },
    { 
        name: "Luigi", 
        id: 196, 
        grades: 68 
    },
    { 
        name: "Piero", 
        id: 102, 
        grades: 50 
    },
    { 
        name: "Francesca", 
        id: 120, 
        grades: 84 
    },
];


/* PUNTO 1 */
const targheStudents = students.map(({name}) => {
    return name.toUpperCase();
});

console.log(targheStudents);


/* PUNTO 2 */
const filteredStudentsGrades = students.filter(({grades}) => {
    return grades > 70;
});

console.table(filteredStudentsGrades);

/* PUNTO 3 */



