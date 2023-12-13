abstract class Department{
    /*
    // This can be done in one line(check the constructor)
    private readonly id: number;
    private name: string;
    constructor(id:number, name:string, employees: string[]){
        this.id = id;
        this.name = name;
    }
    */
   static fiscalYear = 2020;
   protected employees : string[] = []; //Protected key word makes the property available from within the class AND from the classes that extend this class.
    constructor(private readonly id: number, private name:string){}

    describe(this:Department) : void {
        console.log(`Department ${this.id}: ${this.name}`)
    }
    addEmployee(employeeName:string){
        this.sendWelcomeMessage(employeeName);
        this.employees.push(employeeName);
    }
    printEmployeeInfo(this: Department):void{
        console.log(`Number of employees: ${this.employees.length}`);
        this.employees.forEach((employee:string)=>{
            console.log(employee);
        })
    }
    static get getFiscalYear(){
        return this.fiscalYear;
    }

    abstract sendWelcomeMessage(newEmployeeName:string):void
}

class ITDepartment extends Department{
    constructor(id:number, private admins: string[]){
        super(id, 'IT');
    }

    //Override
    addEmployee(employeeName: string){
        if(employeeName==='Jorge') return;
        this.employees.push(employeeName);
    }

    getAdmins():string[]{
        return this.admins;
    }
    sendWelcomeMessage(newEmployeeName:string){
        console.log(`Welcome to the Best Department ${newEmployeeName}`);
    }
}

class AccountingDepartment extends Department{

    private lastDocument: string;

    constructor(id:number, private documents: string[]){
        super(id, 'Accounting');
    }

    get mostRecentDocument(){
        if(this.documents){
            this.lastDocument = this.documents[this.documents.length-1];
            return this.lastDocument;
        }
        throw new Error('No documents found'); 
    }

    set setLastDocument(name: string){
        if(name===''){
            throw new Error('Please send a valid value');
        }
        this.addDocument(name);
    }

    addDocument(documentName: string){
        this.documents.push(documentName);
    }
    getAllDocuments(){
        this.documents.forEach((document:string)=>console.log(document));
    }
    getLastDocument(){
        return this.documents[0];
    }

    sendWelcomeMessage(newEmployeeName:string){
        console.log(`Welcome to the most boring department ${newEmployeeName}`);
    }
}

class SingletonDepartment extends Department{
    private static instance : SingletonDepartment;
    private constructor(id:number){
        super(id, 'Singleton Department');
    }
    static createInstance(id:number){
        if(SingletonDepartment.instance){
            return this.instance
        }
        this.instance = new SingletonDepartment(id);
        return this.instance;
    }
    sendWelcomeMessage(newEmployeeName:string){
        console.log(`Welcome to the singleton department ${newEmployeeName}`);
    }
}


const ITDept: ITDepartment = new ITDepartment(2,['Jorge']);
ITDept.addEmployee('Jorge');
ITDept.addEmployee('Pablo');
ITDept.addEmployee('Esa');
ITDept.printEmployeeInfo();
console.log(ITDept.getAdmins());
ITDepartment.fiscalYear;


const accountingDept: AccountingDepartment = new AccountingDepartment(2, []);
accountingDept.describe();
accountingDept.addEmployee('Celestino');
accountingDept.addEmployee('Javier');
accountingDept.addEmployee('Luan');
accountingDept.printEmployeeInfo();
accountingDept.addDocument('Accounting Document 1');
accountingDept.addDocument('Accounting Document 2');
accountingDept.addDocument('Accounting Document 3');
accountingDept.addDocument('Accounting Document 4');
accountingDept.getAllDocuments();
console.log(AccountingDepartment.getFiscalYear);
console.log(accountingDept.mostRecentDocument);

const singletonDept = SingletonDepartment.createInstance(3);
const singletonDept2 = SingletonDepartment.createInstance(4);

console.log(singletonDept); // Will return object with id 3 
console.log(singletonDept2);//// Will return object with id 3 since we have created a singleton object





