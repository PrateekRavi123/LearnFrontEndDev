let x=1;
var y =2;
if(true){
    let x=10; //block scope
    var y =20;
}

console.log(x);
console.log(y);