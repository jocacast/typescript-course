function add(n1: number, n2:number){
    return n1 + n2;
}

function printResult(num: number): void{
    console.log(`Result ${num}`);
}

// Function types
let combineValues : (a: number, b:number)=>number;
combineValues = add;

console.log(combineValues(10,10)); //20

function addAndHandle(n1: number, n2:number, cb:(result:number)=>void){
    const result = n1 + n2;
    cb(result);
}


addAndHandle(10,10, printResult); //Run with an existing named function.
addAndHandle(10,10, (res)=>{ //Run wit an anonymus function
    console.log(res);
});
