interface Named{ //Ensures a name must be provided
    name:string; 
    nickname?: string //Optional value
}
interface Person extends Named{ //Since this interface extends Named, a name is enforced
    age : number,
    greet(phrase:string):void;
}

class Employee implements Person{
    constructor(public name:string, public age:number, private employeeId: number,  public nickname?: string){
        if(this.nickname) this.nickname = nickname;
    }
    greet(phrase:string){
        console.log(phrase +' my name is ' + this.name);
    }
    printEmployeeInfo():void{
        let greeting = this.nickname ? `Name: ${this.name} ID: ${this.employeeId} Nickname: ${this.nickname}`:  `Name: ${this.name} ID: ${this.employeeId}`;
        console.log(greeting);
    }
}

//type AddFn = (n1: number, n2: number) => number;
interface AddFn{ //Interfaces can be used as an alternative to types
    (n1: number, n2: number) :number;
}

let add :AddFn = (n1: number, n2:number)=>{
    return n1 + n2;
}

let user1: Employee = new Employee('Jorge', 32, 0, 'Brocoli');
user1.greet('Hello');
user1.printEmployeeInfo();
