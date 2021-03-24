//"use strict";

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
// console.log(counter());



// Does a function pickup latest changes?
// 중요도: 5
// The function sayHi uses an external variable name. When the function runs, which value is it going to use?

// let name = "John";

// function sayHi() {
//   alert("Hi, " + name);
// }

// name = "Pete";

// sayHi(); // what will it show: "John" or "Pete"?
// Such situations are common both in browser and server-side development. A function may be scheduled to execute later than it is created, for instance after a user action or a network request.

// So, the question is: does it pick up the latest changes?\

let name2 = "John";

function sayHi() {
  console.log("------> Hi, " + name2);
}

name2 = "Pete"; 
// sayHi();   // 나의 답@ pete!!!


// Which variables are available?
// 중요도: 5
// The function makeWorker below makes another function and returns it. That new function can be called from somewhere else.

// Will it have access to the outer variables from its creation place, or the invocation place, or both?

function makeWorker() {
  let name3 = "Pete";

  return function() {
    console.log(`--------------> ${name3}`);
  };
}

let name3 = "John";

// create a function
let work = makeWorker();  

// // call it
work(); // what will it show?// 나의 답@pete 
// Which value it will show? “Pete” or “John”?


// counter는 독립적일까요?
// 중요도: 5
// makeCounter를 사용해 두 개의 conuter counter와 counter2를 만들었습니다.

// 두 counter는 독립적일까요? 두 번째 카운터는 0, 1이나 2, 3중 어떤 숫자를 얼럿창에 띄워줄까요? 다른 결과가 출력될까요?

function makeCounter3() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter3 = makeCounter3();
let counter4 = makeCounter3();

console.log( counter3() ); // 0
console.log( counter3() ); // 1

console.log( counter4() ); // 0
console.log( counter4() ); // 1  // 두 함수는 독립적인 렉시컬 환경을 갖게되므로 함수는 자신만의 count를 갖게 됩니다. 



// counter 객체
// 중요도: 5
// 생성자 함수를 이용해 counter 객체를 만들어보았습니다.

// 아래 예시는 잘 작동할까요? 결과는 어떨까요?

function Counter5() {
  let count = 0;

  this.up = function() {
    return ++count;
  };
  this.down = function() {
    return --count;
  };
}

let counter5 = new Counter5();

console.log( counter5.up() ); // 1
console.log( counter5.up() ); // 2
console.log( counter5.down() ); // 1



// if 문 안의 함수
// 아래 예시의 실행 결과를 예측해보세요.

let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}
console.log(`......if 문 안의 함수.........`);

sayHi();  // Hello John (X)

// @@정답 
// 에러가 발생합니다.
// sayHi는 if문 안에서 정의했기 때문에, 오직 if문 안에서만 접근할 수 있습니다. if문 밖엔 sayHi가 없습니다.



// 클로저를 이용하여 합 구하기
// 중요도: 4
// sum(a)(b) = a+b와 같은 연산을 해주는 함수 sum을 만들어보세요.

// 두 개의 괄호를 사용해서 말이죠.

// 예시:

// sum(1)(2) = 3
// sum(5)(-1) = 4

