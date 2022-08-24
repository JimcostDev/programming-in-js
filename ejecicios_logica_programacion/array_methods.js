// Method slice()
console.log('Method slice()');
//                 idx = 0,      1,       2,         3,     4
const participants = ['Carla', 'Kevin', 'Ronaldo', 'Lee', 'Manu'];
const winners = participants.slice(2, 4); //since (idx) - until(idx)
console.log(winners);

// Method indexOf()
console.log('Method indexOf()');
//         idx = 0,  1, 2,  3, 4
const numbers = [7, 12, 3, 12, 5];
const result = numbers.indexOf(12, 2) // find(item), since(idx)
console.log(result);