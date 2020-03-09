function wrapValue(n){
    let local = n;
    return ()=>local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue("dongus")
console.log(wrap1());
console.log(wrap2());


function multi(factor){
    return num =>num*factor;
}
let twice = multi(2)
console.log(twice(5));
console.log(multi(5));