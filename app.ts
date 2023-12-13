type Admin = {
    name: string,
    privileges: string[]
}

type Employee = {
    name: string,
    startDate: Date,
}

type ElevatedEmployee = Admin & Employee;

let employee1: ElevatedEmployee ={
    name: 'Jorge',
    privileges:['Admin'],
    startDate: new Date(),  
}

let employee2: Employee = {
    name: 'José',
    startDate: new Date(),
}

type Combinable = string | number;

function add(a:number, b:number):number; //Overloading the function (this allows to control the input and output types)
function add(a:string, b:string):string;
function add (a:Combinable, b:Combinable){
    if(typeof a === 'string' || typeof b === 'string'){
        return a.toString() + b.toString();
    }
    return a+b;
}

//Optional chaining
 type Job = {
    title: string,
    description:string
 }


const fetchedUserData:{
    id : string,
    name : string,
    job: Job
}={
    id: "u01",
    name: "Jorge",
    job:{
        title: "Software developer",
        description: "Program a lot"
    }
}

console.log("fetchedUserData: " + fetchedUserData?.job?.title);

const userInformation = '';

const result = userInformation ?? 'DEFAULT'; // Will return DEFAULT only if userInformation is null or undefined.
const result2 = userInformtion || 'DEFAULT'; // Will return DEFAULT only if userInformation is falsy.

type UnknownEmployee = Admin | Employee;

function printEmployeeInformation(emp: UnknownEmployee){
    if('privileges' in emp){
        console.log('Priveleges: ' + emp.privileges);
    }
    if('startDate' in emp){
        console.log('Start Date ' + emp.startDate);
    }
}

printEmployeeInformation(employee1); // Prints the info of Admin (includes priveleges)
printEmployeeInformation(employee2); // Prints the info of Employee

class Car {
    drive(){
        console.log('Driving car'); 
    }
}

class Truck{
    drive(){
        console.log('Driving truck'); 
    }
    loadCargo(cargo:number){
        console.log(`Loading cargo of ${cargo}`);
    }
}

type Vehicle = Truck | Car;

function useVehicle(vehicle: Vehicle){
    vehicle.drive();
    if(vehicle instanceof Truck){
        vehicle.loadCargo(1000);
    }
}
useVehicle(new Car()); 
useVehicle(new Truck()); 

interface Bird {
    type:'bird';
    flySpeed:number;
}

interface Horse{
    type:'horse',
    runSpeed:number
}

type Animal = Bird | Horse;

function getSpeed(animal:Animal){
    let speed;
    switch(animal.type){
        case 'bird' : 
            speed = animal.flySpeed;
            break;
        case 'horse':
            speed = animal.runSpeed;
            break;
    }
    console.log("Animal speed " + speed);
}

const myHorse:Animal= {
    type:'horse',
    runSpeed:100
}

console.log(getSpeed(myHorse));

const userInputElement = document.getElementById('user-input')! as HTMLInputElement; //Casting
//const userInputElement = <HTMLInputElement>document.getElementById('user-input')!; //Another way of casting

userInputElement.value = "Type your text here";

interface ErrorContainer{
    [prop:string]:string
}

const errorBag: ErrorContainer = {
    propertyOne: "Error type one",
    property2: "Error type two"
}