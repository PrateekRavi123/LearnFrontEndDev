class first{
    _name ="";
    constructor(name){
        this.name = name;
    }
    firstfn(){
        console.log(this.name);
    }
}

class second extends first{
    _name="";
    constructor(name){
        this._name = name;
    }
    secondfn(){
        console.log(this._name);
    }
}

var obj = new second("Prateek");
// obj.firstfn();
obj.secondfn();