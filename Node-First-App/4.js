// Arrays and array method

const person = {
    name: 'kajal',
    age: 21,

    greet (){
        console.log('Hi, I am ' + this.name);

    }

};


const printName = ({name}) =>{
    console.log(name);
}
printName(person);

// destructuring

const { name, age} = person;
console.log(name, age);

// spread operators
// const copiedPerson = {...person};
// console.log(copiedPerson);


 const hobbies =['Sports', 'Cooking'];
 const [hobby1, hobby2] = hobbies;
 console.log(hobby1, hobby2);
// for(let hobby of hobbies){
//     console.log(hobby);
// }
// console.log(hobbies.map(hobby =>  'Hobby: ' + hobby));
// console.log(hobbies);
// const copiedArray = [...hobbies];
// console.log(copiedArray);

// rest operator
// const toArray = (arg1, arg2, arg3) => {
//     return [arg1, arg2, arg3];
// };

// console.log(toArray(1,2 ,3));

// spread oprators

// const toArray = (...args) => {
//     return args;
// };

// console.log(toArray(1,2 ,3,4,5));


