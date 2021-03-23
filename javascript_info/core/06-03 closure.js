// 코드 블록 
// : 코드 블록{...} 안에 선언한 변수는 블록 안에서만 사용할 수 있다 .
{
    let message = "Hello"; 
   // console.log(message);
}

{
    let message = "Good bye"; 
    // console.log(message);
}

function sayHiBye(firstname, lastname){
    function getFullName(){
        return firstname + " " + lastname; 
    }

    console.log(`Hello, ${getFullName()}`);
    console.log(`Bye, ${getFullName()}`);
}

sayHiBye("황", "혜경");

function makeCounter(){
    let count= 0 ;
    return function(){
        return count++;
    };
}

let counter = makeCounter(); 
console.log(counter());

