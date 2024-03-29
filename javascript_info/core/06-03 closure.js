"use strict";

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

    // console.log(`Hello, ${getFullName()}`);
    // console.log(`Bye, ${getFullName()}`);
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
  // console.log("------> Hi, " + name2);
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
    // console.log(`--------------> ${name3}`);
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

// console.log( counter3() ); // 0
// console.log( counter3() ); // 1

// console.log( counter4() ); // 0
// console.log( counter4() ); // 1  // 두 함수는 독립적인 렉시컬 환경을 갖게되므로 함수는 자신만의 count를 갖게 됩니다. 



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

// console.log( counter5.up() ); // 1
// console.log( counter5.up() ); // 2
// console.log( counter5.down() ); // 1



// if 문 안의 함수
// 아래 예시의 실행 결과를 예측해보세요.

let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    // alert(`${phrase}, ${user}`);
  }
}
// console.log(`......if 문 안의 함수.........`);

sayHi();  // Hello John (X)

// @@정답 
// 에러가 발생합니다.
// sayHi는 if문 안에서 정의했기 때문에, 오직 if문 안에서만 접근할 수 있습니다. if문 밖엔 sayHi가 없습니다.
 

 
// 클로저를 이용하여 합 구하기
// 중요도: 4
// sum(a)(b) = a+b와 같은 연산을 해주는 함수 sum을 만들어보세요.

// 두 개의 괄호를 사용해서 말이죠.

// 예시:

// sum(1)(2) ;  // = 3
// sum(5)(-1) ; //   = 4
console.log(`...... 클로저를 이용하여 합 구하기.........`);

function sum(a){
   return function(b){
    console.log(` a+b  = ${ a+b}`);
    return a+b;
  }
}

sum(1)(2);


console.log(`...... Is variable visible?.........`);

// Is variable visible?
// 중요도: 4
// What will be the result of this code?

let x = 1; 
function func() {
   console.log(x); // ?

  //  let x = 2;
}
func();
// P.S. There’s a pitfall in this task. The solution is not obvious.


console.log(`...... 함수를 이용해 원하는 값만 걸러내기 .........`);

// 중요도: 5
// 배열에 사용할 수 있는 내장 메서드 arr.filter(f)는 함수 f의 반환 값을 true로 만드는 모든 요소를 배열로 반환해줍니다.

// filter에 넘겨서 사용할 수 있는 함수 두 가지를 만들어봅시다.

// inBetween(a, b) – a 이상 b 이하
// inArray([...]) – 배열 안에 있는 값인가
// 위 함수를 활용하면 다음과 같은 결과가 나와야 합니다.

// arr.filter(inBetween(3,6)) – 3과 6 사이에 있는 값만 반환함
// arr.filter(inArray([1,2,3])) – [1,2,3] 안에 있는 값과 일치하는 값만 반환함
// 예시:

// /* ... 여기에 두 함수 inBetween과 inArray을 만들어주세요 ...*/
let arr = [1, 2, 3, 4, 5, 6, 7];
// inBetween(3, 6);
console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6 
console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2

function inBetween(a, b){
    return function(x){
      return x >= a  && x <=b;
    };
} 

function inArray(arr){
  return function(x){
    return arr.includes(x);
  };
}

console.log(`...... 필드를 기준으로 정렬하기.........`);

// 중요도: 5
// 객체가 담긴 배열을 정렬해야 한다고 가정해봅시다.

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];

// users.sort((a,b) => a.name > b.name ? 1 : -1 );

// 아래와 같은 방법을 사용해 정렬할 수 있을 겁니다.

// // 이름을 기준으로 정렬(Ann, John, Pete)
// users.sort((a, b) => a.name > b.name ? 1 : -1);

// // 나이를 기준으로 정렬(Pete, Ann, John)
// users.sort((a, b) => a.age > b.age ? 1 : -1);
// 그런데, 아래와 같이 함수를 하나 만들어서 정렬하면 더 깔끔해질 것 같네요.

// users.sort(byField('name'));
// users.sort(byField('age'));
// 함수를 직접 만들어 sort에 넘기는 것보다 byField(fieldName)를 넘기는 것처럼 말이죠.

// 필드를 기준으로 정렬을 도와주는 함수 byField를 만들어봅시다.

function byField(param){
  return function(a, b){
    return a[param] > b[param] ? 1 : -1;
  };
}

// users.sort(byField('name'));
// console.log(users);
 users.sort(byField('age'));
 console.log(users);


console.log(`...... 함수를 사용해 군대 만들기.........`);
// 중요도: 5
// 아래 코드는 shooters가 요소인 배열을 만들어줍니다.

// 모든 함수는 몇 번째 shooter인지 출력해줘야 하는데 뭔가 잘못되었습니다.

function makeArmy() {
  let shooters = [];

  // let i = 0;
  // while (i < 10) {
  //   let shooter = function() { // shooter 함수
  //     console.log( i ); // 몇 번째 shooter인지 출력해줘야 함
  //   };
  //   shooters.push(shooter);
  //   i++;
  // }
  let i = 0;
  while (i < 10) {
    let j = i ; 
    let shooter = function() { // shooter 함수
      console.log( j ); // 몇 번째 shooter인지 출력해줘야 함
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

let army = makeArmy();
console.log(army);

 army[0](); // 0번째 shooter가 10을 출력함
army[5](); // 5번째 shooter 역시 10을 출력함
// // 모든 shooter가 자신의 번호 대신 10을 출력하고 있음
  // --> 반복문과 클로저는 잘 사용이 안됨. 

// 왜 모든 shooter가 동일한 숫자를 출력하는 걸까요? 제대로 된 번호가 출력될 수 있게 코드를 수정해 보세요.


