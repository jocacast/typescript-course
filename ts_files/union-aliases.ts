type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text'
function combine(input1: Combinable, input2: Combinable, resultConversion: ConversionDescriptor){
    let result;
    if(typeof input1 === 'number' && typeof input2==='number'){
        result = input1 + input2;
    }else{
        result = input1.toString() + " " + input2.toString();
    }
    if(resultConversion === 'as-number'){
        result = +result;
    }else{
        result = result.toString();
    }
    return result;
}

const combineNumbers = combine(10,22, 'as-number');
const combineStrings = combine("Jorge", "Castillo", 'as-text');
const combineNumbersInString = combine(10,22,'as-text');

console.log(combineStrings, combineNumbers); // Jorge Castillo 32 
console.log(typeof combineNumbersInString);//string
console.log(typeof combineNumbers); //number


//Types with objects
type User = {name: string, age:number};

function getUserName(user : User){
    return user.name;
}
function isAdult(user: User){
    return user.age >=18;
}

let userJorge : User = {
    name: 'Jorge',
    age: 32, 
}

console.log(getUserName(userJorge)); //Jorge
console.log(isAdult(userJorge)); //true
