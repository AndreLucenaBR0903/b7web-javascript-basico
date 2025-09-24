function calcPercentual(total, parcial) {
    return (parcial / total) * 100;
}

let parcial = 20;
let total = 200;

let percentual = calcPercentual(total, parcial);
console.log(`O percentual de ${parcial} em relação a ${total} é ${percentual}%`);