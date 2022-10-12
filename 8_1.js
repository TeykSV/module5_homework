let a = prompt ("input");
a = +a;
alert (typeof a);

if (a% 2 ===0) {
  alert (a + "четное");
  
}
else if (a%1 ===0) {
  alert (a + "нечетное");
  
}
else {
  alert("Упс, кажется вы ошиблись")
}

if (isNaN(a)) {
  alert('Вы ввели неверные данные')
}
