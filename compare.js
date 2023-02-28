
// const third = second;
// if(second === third){
//     // console.log('They are same');
// }
// else{
//     // console.log('They are different');
// }

const first = {a:2,b:3,d:5};
const second = {a:2,c:5,b:3};

const firstString = JSON.stringify(first);
const secondString = JSON.stringify(second);

// // console.log(firstString,secondString);
// if(firstString === secondString){
//     // console.log('same');
// }
// else{
//     // console.log('different');
// }

// // Compare an objects

function compareObject(first,second){
    const firstKeys = Object.keys(first);
    const secondKeys = Object.keys(second);
    if (firstKeys.length === secondKeys.length) {
       for (const key of firstKeys) {
        if (first[key] !== second[key]) {
            return false;
        } 
    }
    return true;
    }

}
const isSame = compareObject(first,second);
console.log(isSame);
