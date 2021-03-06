// 구조 분해 할당
// 중요도: 5
// 아래와 같은 객체가 있다고 가정해봅시다.

// let user = {
//   name: "John",
//   years: 30
// };
// 구조 분해 할당을 사용해 아래 미션을 수행해 보세요.

// name 프로퍼티의 값을 변수 name에 할당하세요.
// years 프로퍼티의 값을 변수 age에 할당하세요.
// isAdmin 프로퍼티의 값을 변수 isAdmin에 할당하세요. isAdmin이라는 프로퍼티가 없으면 false를 할당하세요.
// 미션을 달성하면 아래 예시를 제대로 실행할 수 있게 됩니다.

// let user = { name: "John", years: 30 };

// // 할당 연산자 좌측에 답안을 작성하시면 되겠죠?
// // ... = user

// alert( name ); // John
// alert( age ); // 30
// alert( isAdmin ); // false

let user = {
  name: "John",
  years: 30
};

let {name  , years : age, isAdmin = false} = user;

console.log(name);
console.log(age);
console.log(isAdmin);

console.log('--------------------');

// 최대 급여 계산하기
// 중요도: 5
// 급여 관련 정보가 저장된 객체 salaries가 있다고 가정해 봅시다.

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };
// 가장 많은 급여를 받는 사람의 이름을 반환해주는 함수 topSalary(salaries)를 만들어봅시다. 조건은 아래와 같습니다.

// salaries가 비어있으면 함수는 null을 반환해야 합니다.
// 최대 급여를 받는 사람이 여러 명이라면 그 중 아무나 한 명 반환하면 됩니다.
// 힌트: Object.entries와 구조 분해를 사용해 키-값 쌍을 순회하는 방식을 사용해보세요.
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary(arr){ 
    if(Object.keys(arr).length===0) return null; 
    return Object.entries(arr).sort((a, b)=>{
          if (a[1] > b[1]) {
            return 1;
          }
          if (a[1] < b[1]) {
            return -1;
          } 
          return 0;
    }).pop()[0];
     
}

console.log(topSalary(salaries));

// 해답코드 
// function topSalary(salaries) {

//     let max = 0;
//     let maxName = null;
  
//     for(const [name, salary] of Object.entries(salaries)) {
//       if (max < salary) {
//         max = salary;
//         maxName = name;
//       }
//     }
  
//     return maxName;
//   }
 