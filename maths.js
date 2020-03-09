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


const power = function(base, exponent){
    let result =1;
    for (let count =0; count<exponent; count++){
result*=base;
    }
    return result;
}
console.log(2,10);