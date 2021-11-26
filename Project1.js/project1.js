//Number one
function addition(A,B){
    return A+B
}
let numberofaddition=addition(3,2)
console.log(numberofaddition)
let numberofaddition2=addition(-3,-6)
console.log(numberofaddition2)
//Number two
function area(R){
    let pi=3.14159265359
    return R*R*pi
}
let thecircle=area(2)
console.log(thecircle)
let thecircle2=area(10)
console.log(thecircle2)
//Number three
function argument(a,b){
    if (a+b<100){return true
     }  else {
         return false
    }
}
let B=argument(22,15)
console.log(B)
//Number four
function argument2(a){
    if (a%4===0){return true
    }   else {
        return false
    }
}
let A=argument2(2021)
console.log(A)
//Number five
function argument3(a,b){
    if (a+b===10){
        return true
}   else if(a===10) {
    return true
}   else if(b===10){
    return true
}   else {return false}
}
let D=argument3(9,10)
console.log(D)
   
