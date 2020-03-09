const sum = function(x,y){
    return x+y;
}
console.log(sum(3, 5));


const multi = function(x,y){
    return x*y;
}
console.log(multi(3, 5));

const divide = function(x,y){
    return x/y
}
console.log(divide(3,6));

const minus = function(x,y){
   return x-y
}
console.log(minus(3,5));
// same  but arrow-----------------------------------------------------------------------------------------------------------------
// same but 

const power = function(base, exponent){
    let result =1;
    for (let count =0; count<exponent; count++){
result*=base;
    }
    return result;
}
console.log(power(2,10));

const powerow = (base,exponent) => {
    let result =1;
    for(let count=0; count < exponent; count++){
        result*=base
    }
    return result;
};
console.log(powerow(2,10));
// same  but arrow-----------------------------------------------------------------------------------------------------------------