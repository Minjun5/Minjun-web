let Racenumber=(Math.floor(Math.random()*1000))
console.log(Racenumber)
let numeral=true
let A=4
if(A>18&&numeral===true){
    Racenumber+=1000
}
if(A>18&&numeral===true){
    console.log(`you will race at 9:30 am. ${Racenumber}`)
}
else if(A>18&&numeral===false){
    console.log(`You will race at 11:00 am.${Racenumber}`)
}
else if(A<18){
    console.log(`you will race at 12:30.${Racenumber}`)
}
else{
    console.log(`You will see at registration desk.${Racenumber}`)
}



