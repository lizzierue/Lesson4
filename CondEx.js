/*1 Create a function that takes 3 parameters called floor, ceiling and num. All 3 parameters should be numbers. Return true if num is between floor and ceiling. Otherwise return false
function isBetween(floor, ceiling, num) {
    if(num > floor && num < ceiling) {
        return true;
    } else {
        return false;
    }
}
let dimensions = isBetween(12,15,13);
console.log(dimensions); 
 Create a function that takes 1 parameter that is an object with 2 properties, name and age. Return true if the person's age is greater than 30 or their name contains the letter x (case insensitive). Otherwise return false

function NameAndAge(person) {
    let isOver30 = person.age > 30;
    let foundX = false;
    for (let i = 0; i < person.name.length; i++) {
        let letter = person.name[i].toLowerCase();
        if(letter == "x") {
            foundX = true;
            break;
        }
    }
    if(isOver30 || foundX) {
        return true;
    } else {
        return false;
    }
}

let person1 = {
    name: "Xara",
    age: 29
}


let person2 = {
    name: "Xanathar",
    age: 45
} 


 3 Create a function that takes 3 parameters. The first should be an object with two properties name and age. The second should be a number, the third should be a string. The function should return true if the age of the object is equal to the second parameter AND the name is not equal to the third parameter. Otherwise return false

function checkExactNameAndAge(person, ageToBe, nameToNotBe) {
    // if the age of the person is equal to the second parameter
    let equalAge = ageToBe == person.age;

    // if the name of the person is NOT equal to the thrid parameter
    let notEqualName = nameToNotBe != person.name;

    if(equalAge && notEqualName) {
        return true;
    } else {
        return false;
    }
}

console.log(checkExactNameAndAge({
    name: "Luke",
    age: 23
}, 23, "David"));

console.log(checkExactNameAndAge({
    name: "Dan",
    age: 22
}, 23, "Sinclair"));

*/