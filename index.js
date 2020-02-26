
//first exercise
const coffes = [
    {
        name: "El Meson",
        lat: 42.002439,
        long: -87.672339,
        neighborhood: "Rogers Park",
        ambiance: "4/5",
        flavor: "5/5",
        comments: "Best cappuccino and croissant I’ve ever had."
    },
    {
        name: "Wormhole",
        lat: 41.908415,
        long: -87.674605,
        neighborhood: "Wicker Park",
        ambiance: "5/5",
        flavor: "4/5",
        comments:
            "Cute ambiance with a Nintendo that actually works properly and the best games (including FF1!)."
    },
    {
        name: "Ipsento",
        lat: 41.918639,
        long: -87.687247,
        neighborhood: "Wicker Park",
        ambiance: "4/5",
        flavor: "5/5",
        comments: "Really great spicy latte. Nice ambiance."
    }
];


//ex1 const allComments = coffes.map(coffe => {
//     coffe.comments = "random comment"
//     return coffe
// });

//ex2 const changeNameComments = coffes.map((coffe) =>  ({name : coffe.name , comments : coffe.comments}));

//ex3 const findName = coffes.find(coffe => coffe.name === "Wormhole");

//ex4 const obj = coffes.reduce((coffe,{name,lat,long}) => {
//         return {
//             ...coffe,
//             [name] : {
//                 lat,
//                 long
//             }
//         }
// },{});



//new exercise
const students = [
    { name: "Quincy", grade: 96 },
    { name: " Jason", grade: 84 },
    { name: "Alexis", grade: 100 },
    { name: "Sam", grade: 65 },
    { name: " Katie", grade: 90 }
];

//ex1 const bestStudents = students.filter(student => student.grade >= 90)


//new exercise
const numbers = [1, 10, 7, 6, 5];

//ex1 const sumNumbers = numbers.reduce((accumulator ,curr) => accumulator + curr, 0);

//ex2 const startFive = numbers.reduce((accumulator, curr) => (accumulator + curr),5);

//ex3 const sumEachNumber = numbers.map(number => number + 1);

//new exercise
// const pets = ["dog", "chicken", "cat", "dog", "chicken", "chicken", "rabbit"];

// const newPets = pets.reduce((accumulator, currentValue) => {
//       if (currentValue in accumulator) {
//         accumulator[currentValue]++;
//       }
//       else {
//         accumulator[currentValue] = 1
//       }
//       return accumulator;
//      }
// ,{}
// );
