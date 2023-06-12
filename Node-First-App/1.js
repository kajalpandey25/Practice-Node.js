
// diff b/w let and const


const name = 'kajal';
let age = 21;
const HasHobbies = true;




age = 26;




    function summarizeUser(userName, userAge, userHasHobby) {
        return (
            'Name is ' +
            userName +
            ' , age is ' +
            userAge +
            ' and the user has hobbies: ' +
            userHasHobby
        );
    }

console.log(summarizeUser(name, age, HasHobbies));