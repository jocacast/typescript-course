class Department{
    id:number;
    name:string;
    constructor(id: number, name:string){
        this.id = id;
        this.name = name;
    }
    describe(this:Department) : void {
        console.log(`Department ${this.id}: ${this.name}`)
    }
}

const accounting: Department = new Department(1, 'Accounting');
//const departmentCopy = {describe : accounting.describe};
//departmentCopy.describe(); //This does not work since we are expecting a name and an id (Department objects must have a name and an id property)
const departmentCopy2 = {id:2, name:'IT', describe: accounting.describe}; // Here we are defining an object that has a Department-like object (it must have id, name and describe)
departmentCopy2.describe();

accounting.describe();