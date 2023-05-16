
// Understandind arrow functions



const name = 'kajal';
let age = 21;
const HasHobbies = true;




age = 26;


// Remove the function keyword and using arrow 

     const summarizeUser = (userName, userAge, userHasHobby) => {
        return (
            'Name is ' +
            userName +
            ' , age is ' +
            userAge +
            ' and the user has hobbies: ' +
            userHasHobby
        );
    };

    // const add = (a,b) =>{
    //     return a+b;
    // }
// or 
// const add = (a,b) => a+b;
// const addOne = (a)=> a+1;

const addOne = () => 1+2;

console.log(addOne());



// console.log(addOne(1));


    // console.log(add(1,2));

console.log(summarizeUser(name, age, HasHobbies));