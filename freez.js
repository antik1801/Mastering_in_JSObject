const obj = {
    name: "Gazi Ehsanul Haque",
    age: 25,
    gender: function(age){
    console.log(`${this.name} is now ${age} years old`)
    }
    }
// console.log(obj);
const keys = Object.keys(obj);
const values = Object.values(obj);
// console.log(keys);
// console.log(values);
const paires = Object.entries(obj);
// console.log(paires);


class information{
    subjeects=["Bangla","Engliash"];
    constructor(name,age){
    this.name = name;
    this.age = age;
    }
}
const info= new information("Antik",50);
// console.log(info);

const car ={
    color : 'yellow',
    isClean: true,
    name : 'Nissan GTR 350i',
    capacity: '100L'
}
// const retrive = car.map(element=> console.log(element));
const twoDimentional = Object.entries(obj);
// console.log(twoDimentional);
console.log(car);
// Seal and object 
// Object.seal(car);
Object.freeze(car);
car.isClean = false;
// Delete an existing property inside cars
delete car.isClean;

console.log(car);
