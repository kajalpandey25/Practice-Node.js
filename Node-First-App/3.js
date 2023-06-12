//  Working with objecs, properties and method

const person = {
    name: 'kajal',
    age: 21,

    greet (){
        console.log('Hi, I am ' + this.name);

    }

};

person.greet();
