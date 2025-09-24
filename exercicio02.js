function calculateProperty(footage, bedrooms) {
    let m2 = 3000;
    if (bedrooms == 1) {
        return footage * m2;
    } else if (bedrooms ==2) {
        return (footage * m2) * 1.2;
    } else {
        return (footage * m2) * 1.5;
    }
}

let prizeProperty = calculateProperty(100, 2);
console.log(`O valor do imóvel é R$${prizeProperty}`);