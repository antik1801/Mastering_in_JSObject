const numbers = [12, 54, 65, 54];
for (const number of numbers) {
    // console.log(number);
}
// For of can't be used in objects

// option 1 - loop through the object
const bottle = {color: 'yellow', isClean: true, company:'Rfl', price: 250}
const keys = Object.keys(bottle);
// console.log(keys);
for (const key of keys) {
    // console.log(key,bottle[key]);
}
for (const key in bottle) {
    // console.log(key);
}
for(const value in bottle){
    console.log(bottle[value]);
}
for (const [iterator1,iterator2] of Object.entries(bottle)) {
    // console.log(iterator1,iterator2);
}
