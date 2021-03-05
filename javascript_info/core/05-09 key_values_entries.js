// let prices = {
//     banana: 1,
//     orange: 2,
//     meat: 4,
//   };
  
//   let doublePrices = Object.fromEntries(
//     // 객체를 배열로 변환해서 배열 전용 메서드인 map을 적용하고 fromEntries를 사용해 배열을 다시 객체로 되돌립니다.
//     Object.entries(prices).map(([key, value]) => [key, value * 2])
//   );
  
//   alert(doublePrices.meat); // 8

// 프로퍼티 값 더하기
// 중요도: 5
// 급여 정보가 저장되어있는 객체 salaries가 있습니다.

// Object.values 와 for..of 반복문을 사용해 모든 급여의 합을 반환하는 함수 sumSalaries(salaries)를 만들어보세요.

// salaries가 빈 객체라면, 0이 반환되어야 합니다.

// 예시:

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };

// alert( sumSalaries(salaries) ); // 650
// 테스트 코드가 담긴 샌드박스를 열어 정답을 작성해보세요.

   
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

// console.log( sumSalaries(salaries) );

console.log(Object.values(salaries));
console.log(salaries);
function sumSalaries(obj){
   
   let sum = 0 ;
  // for(let key of Object.values(salaries)){
    for(let key of Object.values(salaries)){
        sum+=key || 0; 
   }
   return sum; 
}






// 프로퍼티 개수 세기
// 중요도: 5
// 객체 프로퍼티 개수를 반환하는 함수 count(obj)를 만들어보세요.

// let user = {
//   name: 'John',
//   age: 30
// };

// alert( count(user) ); // 2
// 가능한 짧게 코드를 작성해 보세요.

// 주의: 심볼형 프로퍼티는 무시하고 ‘일반’ 프로퍼티 개수만 세주세요.

// 테스트 코드가 담긴 샌드박스를 열어 정답을 작성해보세요.

let user = {
  name: 'John',
  age: 30
};

// function count(obj){
//   let cnt = 0 ;
//   for (let key in obj) {
//     //console.log(key);
//     cnt++;
//   }
//   return cnt; 
// }
function count(obj){
    return Object.keys(obj).length; 
  }


console.log(count(user));
