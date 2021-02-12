// // Q1 코드 한 줄로 아래 문제를 각각 풀어보세요.

// // 빈 객체 user를 만듭니다.
// let user = {};
// // user에 키가 name, 값이 John인 프로퍼티를 추가하세요.
// user["name"] ="John";
// // user에 키가 surname, 값이 Smith인 프로퍼티를 추가하세요.
// user["surname"] ="Smith";
// // name의 값을 Pete로 수정해보세요.
// user["name"] = "Pete";
// // user에서 프로퍼티 name을 삭제하세요.
// delete user["name"];

// // 같은 내용임  (정답 )
// let user2 = {}; 
// user2.name ="John"; 
// user2.surname ="Smith"; 
// user2.name  = "Pete"; 
// delete user2.name; 



//Q2 객체에 프로퍼티가 하나도 없는 경우 true, 
// 그렇지 않은 경우 false를 반환해주는 함수 isEmpty(obj)를 만들어 보세요.
// 아래와 같이 동작해야 합니다.

let schedule = {};

//console.log( isEmpty(schedule) ); // true 
schedule["8:30"] = "get up"; 
//console.log( isEmpty(schedule) ); // false

/* my code 
function isEmpty(obj){
    let cnt = 0;
    for(let key in schedule)
    cnt ++; 

    if(cnt === 0) 
        return true;
    else    
        return false; 
}
*/ 
// 해답 
function isEmpty(obj){ 
    for(let key in schedule){
        return false; 
    }
    return true;   
}


//Q3. 프로퍼티 합계구하기 
// 모든 팀원의 월급에 대한 정보를 담고 있는 객체가 있다고 해봅시다. 

let salaries = {
    John : 100, 
    Ann:160, 
    Pete :130 
}
let sum = (obj)=>{
    let sum = 0 ;
    for(let key in obj){
     //   console.log(obj[key]);
        sum += obj[key];
    } 
    return sum;
}
//sum(salaries);
//console.log(sum(salaries));

//Q4 프로퍼티 값 두배로 부풀리기 
// 함수 호출 전
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  console.log(menu);
  multiplyNumeric(menu);
  console.log(menu);
  // 함수 호출 후
//   menu = {
//     width: 400,
//     height: 600,
//     title: "My menu"
//   };

 //mycode 
//   function multiplyNumeric(obj){ 
//     for(let key in obj){ 
//         if(!isNaN(Number(obj[key]))){
//         obj[key] *= 2;
//         // console.log(obj[key]);
//         }
//       } 
//   }
  //해답
  function multiplyNumeric(obj){
    for(let key in obj){
        //typeof를 사용하면 프로퍼티 값이 숫자인지 확인할 수 있습니다.
        if(typeof obj[key] =='number') { 
            obj[key]*= 2; 
        }
    }
  }