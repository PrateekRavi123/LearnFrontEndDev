class emp{
    _firstName = "";
    _lastName = "";
    constructor(fn,ln){
        this._firstName = fn;
        this._lastName = ln;
    }
    getfirstname (){
        console.log(this._firstName);
    }
    getlastname(){
        console.log(this._lastName);
    }
    dis(){
        console.log(`${this._firstName} is the first name`);
    }
    
}

var user = new emp ("Prateek","Ravi");
user.getfirstname();
user.getlastname();
user.dis();