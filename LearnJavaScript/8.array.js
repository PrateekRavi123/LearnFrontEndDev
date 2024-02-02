var arr = new Array(); 
// var arr = [];
var arr = ["first","second","third"];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
arr[2]="fourth";
console.log(arr[2]);
arr[3]="fifth";
console.log(arr.length);
console.log(arr);

//pop, push
arr.pop();  
console.log(arr);
arr.push("sixth");
console.log(arr);

//shift,unshift
arr.unshift("zero");
console.log(arr);
arr.shift();
console.log(arr);

//For loop
var num = [];
for(let i = 1;i<=20;i++){
    num.push(i);
}
for(let n of num){
    if(n%2===0){
        console.log(`${n} is even`);
    }else{
        console.log(`${n} is odd`);
    }
}
for(var i=1;i<=20;i++){
    if(i%2==0){
        console.log(`${i} is even`)
    }else{
        console.log(`${i} is odd`)
    }
}

//Rest operator
function rest(a,b,...args){
    console.log(a);
    console.log(b);
    console.log(args);
}
rest("one","two","three","four","five");


const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 },
    { name: 'David', age: 28 },
  ];
//Filter function
const older = people.filter(pep => pep.age>25);
console.log(older);
//Map function
const Caps = people.map(pep => pep.name.toUpperCase());
console.log(Caps);
//Reduce function
const sumage = people.reduce((sum,pep) => sum+pep.age,0);
console.log(sumage/people.length);

//Destructuring
const pep = {
    name:'Prateek',
    age: 21,
}

let {name,age} = pep;
console.log(name);
console.log(age);