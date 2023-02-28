// object literals
const player = {};
player.name = 'nirob afrin';
player.speciality = 'batsman';
player.bat = () =>{
    console.log('I am inside the method property');
}
// console.log(player);
// player.bat();
const student = {
    name: 'pande',
    job: 'khai ande',
    ball: ()=>{
        console.log('Throw the ball');
    },
    salaray: 250000,

}
const person = new Object();
// console.log(person);
const atel = Object.create(student);
// console.log(atel.name);


// class object creating 
class person2{
    name = 'abul';
    address = 'sadar ghat';
    constructor(age){
        this.age = age;
    }
}
const person3 = new person2(56);
console.log(person3);