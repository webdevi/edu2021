// 주어진 숫자까지의 모든 숫자 더하기
// 중요도: 5
// 숫자 1 + 2 + ... + n을 계산하는 함수 sumTo (n)을 만들어보세요.

// 예시:

// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
// 아래 방법을 사용해 세 가지 답안을 만들어보세요.

// for 반복문 사용하기

function sumTo(n){
    let sum = 0;
    for (let i = 0; i <= n; i++) {
       sum += i ;  
    }
    return sum;
}



// console.log(sumTo(1)) ;//= 1
// console.log(sumTo(2));//= 2 + 1 = 3
// console.log(sumTo(3)) ;//= 3 + 2 + 1 = 6
// console.log(sumTo(4)) ;///= 4 + 3 + 2 + 1 = 10


// 재귀 사용하기(n > 1일 때 sumTo(n) = n + sumTo(n-1))
function sumTo2(n) {
    if (n == 1) return 1;
    return n + sumTo2(n - 1);
  }
  

// console.log(sumTo2(1)) ;//= 1
// console.log(sumTo2(2));//= 2 + 1 = 3
// console.log(sumTo2(3)) ;//= 3 + 2 + 1 = 6
// console.log(sumTo2(4)) ;///= 4 + 3 + 2 + 1 = 10


// 등차수열 공식 사용하기 // https://www.youtube.com/watch?v=5cYZX47w7gQ
// a_{n}=a_{1}+(n-1)d 
// a4 = a3 + (4-1)
function sumTo3(n){
    return n* (2+(n-1))/2;
}
 

// console.log(sumTo3(1)) ;//= 1
// console.log(sumTo3(2));//= 2 + 1 = 3
// console.log(sumTo3(3)) ;//= 3 + 2 + 1 = 6
// console.log(sumTo3(4)) ;///= 4 + 3 + 2 + 1 = 10


// 예시:

// function sumTo(n) { /*... 답안은 여기에 작성 ... */ }

// alert( sumTo(100) ); // 5050
// 더 생각해보기 1: 세 가지 방법 중 어떤 방법이 가장 빠른가요? 어떤 방법이 가장 느린가요? 이유도 함께 제시해주세요.

// 더 생각해보기 2: 재귀를 사용해 sumTo (100000)를 계산할 수 있을까요?



// let s_dt = new Date();
// console.log(sumTo(100000));
// let e_dt = new Date();

// console.log(`1번내용 ---- ${s_dt - e_dt}`);

// let s_dt2 = new Date();
// console.log(sumTo2(100000));
// let e_dt2 = new Date();

// console.log(`2번내용 ---- ${s_dt2 - e_dt2}`);


// let s_dt3 = new Date();
// console.log(sumTo3(100000));
// let e_dt3 = new Date();

// console.log(`3번내용 ---- ${s_dt3 - e_dt3}`);


// 팩토리얼 계산하기
// 중요도: 4
// 팩토리얼(factorial)은 n이 자연수일 때, 1부터 n까지의 모든 자연수의 곱을 의미합니다. n 팩토리얼은 n!으로 표시합니다.

// 팩토리얼은 아래와 같이 정의할 수도 있습니다.

// n! = n * (n - 1) * (n - 2) * ...*1
// 자연수 n에 대한 n 팩토리얼:

// 1! = 1
// 2! = 2 * 1 = 2
// 3! = 3 * 2 * 1 = 6
// 4! = 4 * 3 * 2 * 1 = 24
// 5! = 5 * 4 * 3 * 2 * 1 = 120
// 재귀를 사용하여 n!을 계산하는 함수, factorial(n)을 만들어보세요.

// alert( factorial(5) ); // 120
// 힌트: n!은 n * (n-1)!입니다. 3! = 3 * 2! = 3 * 2 * 1! = 6같이 말이죠.


function factorial(n){
    if(n == 1) return 1; 
    else{
        return n * factorial(n-1);
    }
}
//해답 코드 -- 간단하균
// function factorial(n) {
//     return (n != 1) ? n * factorial(n - 1) : 1;
//   }

// console.log(factorial(5));





// 피보나치 수 계산하기
// 중요도: 5
// 피보나치 수는 첫째와 둘째 항이 1이며 그 뒤의 모든 항은 바로 앞 두 항의 합인 수열로, Fn = Fn-1 + Fn-2라는 공식으로 표현할 수 있습니다.

// 처음 두 항은 1이고, 그다음 항들은 2(1+1),3(1+2),5(2+3)이므로 전체 수열은 1, 1, 2, 3, 5 , 8, 13, 21 ... 형태를 띱니다.

// 피보나치 수는 황금 비율 등 우리 주변을 둘러싼 수많은 자연 현상과 관련이 있습니다.

// n 번째 피보나치 수를 반환하는 함수 fib(n)을 작성해보세요.

// 예시:

// function fib(n) { /* 답안은 여기에 작성 */ }

// alert(fib(3)); // 2
// alert(fib(7)); // 13
// alert(fib(77)); // 5527939700884757
// 주의: fib (77)를 호출했을 때 연산 시간이 1초 이상 되면 안 됩니다.

function fib(n){
    console.log(`n = ${n}    ${n-1} + ${n-2} = ${n+n-3}`);
   return ( (n==1 || n== 2) ? 1 : (n+ n-3));
}
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));
console.log(fib(7));

console.log(fib(77));

























// 단일 연결 리스트 출력하기
// 중요도: 5
// 재귀와 스택에서 설명한 바 있는, 단일 연결 리스트(single-linked list)가 있다고 가정해 봅시다.

// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };
// 리스트 내 항목을 차례대로 하나씩 출력해주는 함수 printList(list)를 만들어보세요.

// 반복문과 재귀를 사용한 답안을 각각 만들어봅시다.

// 그리고 재귀를 사용한 것과 재귀를 사용하지 않은 것 중 어떤 게 더 좋은 코드인지 생각해봅시다.

// 해답
// 단일 연결 리스트를 역순으로 출력하기
// 중요도: 5
// 위 문제(단일 연결 리스트 출력하기)에 있는 단일 연결 리스트의 항목을 역순으로 출력해주는 함수를 만들어봅시다.

// 반복문과 재귀를 사용한 답안을 각각 만들어보세요.

// 해답