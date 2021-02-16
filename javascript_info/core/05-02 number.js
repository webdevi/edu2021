// 수를 입력받아 덧셈하기
// 중요도: 5
// 사용자에게 두 수를 입력받고, 두 수의 합을 출력해주는 스크립트를 작성해보세요.
// let a = +prompt("첫번째 수");
// let b = +prompt("두번째 수");

// console.log(a+b);

// P.S. 자료형에 주의하여 함정에 빠지지 않도록 하세요.

 
// 6.35.toFixed(1) == 6.3인 이유는 무엇일까요?
// 중요도: 4
// 이 문서에 따르면 Math.round와 toFixed는 둘 다 가장 가까운 어림수를 구해줍니다. 0..4는 버림하고, 5..9는 올림합니다.

// 예시: 
// alert( 1.35.toFixed(1) ); // 1.4
// 위 예시와 유사한 아래의 경우, 6.35가 6.4가 아닌 6.3으로 반올림되는 이유는 무엇일까요?

// alert( 6.35.toFixed(1) ); // 6.3
// 어떻게 하면 6.35를 제대로 반올림할 수 있을까요?
 
// console.log(Math.round(6.35 * 10) / 10); 

// 숫자를 입력할 때까지 반복하기
// 중요도: 5
// 사용자가 유효한 숫자형 값을 입력할 때까지 계속 입력받는 함수 readNumber 를 만들어보세요.

// 반환되는 값은 꼭 숫자형 값이어야 합니다.

// 사용자가 아무 입력도 하지 않거나 '취소’를 누르면 입력받기를 멈추고 null을 반환하세요.

 
function readNumber(){
    let i = prompt("숫자를 입력하세요", ); 
    console.log(parseInt(i), i  );
   
    if(i== null) return;
    if (isNaN(parseInt(i)) &&  i.length > 0 ){
        readNumber();
    }
}

//readNumber();

//해답코드 
// function readNumber() {
//     let num;
  
//     do {
//       num = prompt("Enter a number please?", 0);
//     } while ( !isFinite(num) );
  
//     if (num === null || num === '') return null;
  
//     return +num;
//   }
  
//   alert(`Read: ${readNumber()}`);




// An occasional infinite loop
// 중요도: 4
// This loop is infinite. It never ends. Why?

// let i = 0;
// while (i != 10) {
//   i += 0.2;
// }

// 0.2씩 증가하여 10이 되지 않음 
// 숫자의 부정확성 때문임. 

// let i = 0;
// while (i != 100) {
//  i += 2;  //정수로 하면 나을 수 있음 
//  console.log(i);
// } 

// 해답의 코드 
// let i = 0;
// while (i < 11) {
//   i += 0.2;
//   if (i > 9.8 && i < 10.2) alert( i );
// }




// A random number from min to max
// 중요도: 2
// The built-in function Math.random() creates a random value from 0 to 1 (not including 1).

// Write the function random(min, max) to generate a random floating-point number from min to max (not including max).

// Examples of its work:

// alert( random(1, 5) ); // 1.2345623452
// alert( random(1, 5) ); // 3.7894332423
// alert( random(1, 5) ); // 4.3435234525
 
function random(min, max){
    return Math.random() * (max - min) + min;
}
console.log(random(1, 5));



// A random integer from min to max
// 중요도: 2
// Create a function randomInteger(min, max) that generates a random integer number from min to max including both min and max as possible values.

// Any number from the interval min..max must appear with the same probability.

// Examples of its work:

// alert( randomInteger(1, 5) ); // 1
// alert( randomInteger(1, 5) ); // 3
// alert( randomInteger(1, 5) ); // 5
// You can use the solution of the previous task as the base.

function randomInteger(min, max){
    return parseInt(Math.random() * (max - min) + min);
}
console.log(randomInteger(1, 5));

//해답 
// function randomInteger(min, max) {
//     // now rand is from  (min-0.5) to (max+0.5)
//     let rand = min - 0.5 + Math.random() * (max - min + 1);
//     return Math.round(rand);
//   }
  
//   alert( randomInteger(1, 3) );
//   function randomInteger(min, max) {
//     // here rand is from min to (max+1)
//     let rand = min + Math.random() * (max + 1 - min);
//     return Math.floor(rand);
//   }
  
//   alert( randomInteger(1, 3) )