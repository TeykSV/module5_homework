let numberX;
if (typeof(numberX) === 'string'){
  console.log(numberX + ' - строка');
} else if (typeof(numberX) === 'boolean') {
  console.log(numberX + ' - логический тип');
} else if (typeof(numberX) === 'number') {
  console.log(numberX + ' - число');
} else {
  console.log('Тип а не определен');
}