class user{
    _name = "";
    constructor (name){
        this._name = name;
    }
    dis(){
        console.log(this._name);
    }
}

var obj = new user("Prateek");
obj.dis();