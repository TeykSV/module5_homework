let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'slovo', null, 'expo'];
let chet = 0;
let nechet = 0;
let drugoe = 0;

for (let i = 0; i < arr.length; i++){
    if ((arr[i] === 0) || (typeof(arr[i]) != 'number')) {
        drugoe++;
    } else {
        if (arr[i] % 2 === 0) {
            chet++;
        } else {
            nechet++;
        }
    }
}

console.log("Even is " + chet);
console.log("Odd is " + nechet);
console.log("Other is " + drugoe);