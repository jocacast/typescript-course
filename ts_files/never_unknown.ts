let userInput : unknown;
let userName: string;

userInput = 32;
userInput = 'Jorge'

if(typeof userInput === 'string'){
    userName = userInput;
    console.log(userName);
}

function generateError(message:string, code:number):never{ //It never returns anything.
    //while(true) // Function that never returns
    throw{
        message: message,
        errorCode: code
    }
}

generateError('An error ocurred', 500);

