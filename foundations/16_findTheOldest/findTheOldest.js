const people = [
    {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
]

people.forEach(person => {
    person.age = person.yearOfDeath - person.yearOfBirth
})

const findTheOldest = function(arr) {
    return arr.map(person => {
        const age = person.yearOfDeath - person.yearOfBirth;
        return {...person,age};
    })
    .sort((a,b) => b.age - a.age)[0]
   
};

findTheOldest(people)
// Do not edit below this line
module.exports = findTheOldest;
