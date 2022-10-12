//*переворачивает только заданное слово*//

let s = "Hello";
let rez = "";
for (let i = s.length-1; i >= 0; i--){
    rez += s[i];
}
console.log(rez);

//*Переворачивает рандомное слово или набор цифр, заданное пользователем*//

s = prompt("Введите слово или число");
function reverse(s){
    return s.split("").reverse().join("");
}
console.log(reverse(s));