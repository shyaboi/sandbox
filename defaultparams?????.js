function power(base, exponent =2){
    let result =1;
    for (let count = 0; count < exponent; count++){
        result *= base;
    }
    return result;
}
console.log(power(4));
console.log(power(4,4));


function power2(base2, exponent2){
    let result2 =1;
    for (let count2 = 0; count2 < exponent2; count2++){
        result2 *= base2;
    }
    return result2;
}
console.log(power2(4));
console.log(power2(4,4));