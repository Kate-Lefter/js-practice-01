const min = 6;
const max = 20;
let price = 0;

for (let i =min; i <= max; i += 1) {
    console.log(i);
    if (i % 2 !== 0) {
        console.log('Не четное число', i);
       continue;
    }
    console.log('четное число', i);
    price += i;
}
console.log('price', price);

// switch (star) {

//     case 1:
//     price = 20;
//      break ;

//      case 2:
//      price = 30;
//      break ;

//     case 3:
//      price = 40;
//      break;
    
// } console.log(price);

// if (star === 1 || star === 2) {
//     price = 20;
// } else if (star === 3 || star === 4) {
//     price = 50;
// } else if (star === 5 || star === 6) {
//     price = 70;
// } else if (star === 7 || star === 8) {
//     price = 200;
// } else {
//  console.log("Нет резельтата ");
// }console.log(price);