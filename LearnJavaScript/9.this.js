//this keyword
"use strict"
function printthis(){
    console.log(this);
}

printthis();

//Nested Object
const stu = {
    name:'Prateek',
    age: 21,
    dis(){
        console.log(`${this.name} is ${this.age} years old.`);
    },
    subject:{
        subname: 'Maths',
        dissub(){
            console.log(`${this.subname} is the subject name.`);
        },
    }
}

stu.subject.dissub();


//function object
function emp(name,age){
    this.name = name;
    this.age = age;
    this.dis=function(){
        console.log(`${this.name} is ${this.age} years old.`);
    }
}

const student = new emp('Prateek',21);
student.dis();


//Class object
class dev{
    constructor(name,role){
        this.name = name;
        this.role = role;
    }
    disp(){
        console.log(`${this.name} has the role of ${this.role} .`);
    }
}

const emp1 = new dev('Prateek','GET');

emp1.disp();

//Function expression

function add1(a,b){
    return a+b;
}

const add2 = function (a,b){
    return a+b;
};

const add3 = (a,b) => a+b;


console.log(add1(1,2));
console.log(add2(2,3));
console.log(add2(3,4));


//Reguar function VS Arrow function

const myname = {
    name: 'Prateek',
    regular: function(){
        console.log(this.name);
    },
    arrow: ()=>{
        console.log(this.name);
    }, 
}

myname.regular();
myname.arrow();

