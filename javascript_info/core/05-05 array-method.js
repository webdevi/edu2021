let arr = ["I", "study", "JavaScript"];

// 인덱스 2부터
// 0개의 요소를 삭제합니다.
// 그 후, "complex"와 "language"를 추가합니다.
// arr.splice(2, 0, "complex", "language");

// console.log("splice :", arr); // 잘라내기
 
// arr.slice(2,4 );

// console.log("slice :", arr.slice(2,4 ));
// console.log("slice :", arr); //그대로 



// border-left-width를 borderLeftWidth로 변경하기
// 중요도: 5
// "my-short-string"같이 여러 단어를 대시(-)로 구분한 문자열을 카멜 표기법을 사용한 문자열 "myShortString"로 변경해주는 함수를 작성해보세요.

// 대시는 모두 지우고 각 단어의 첫 번째 글자는 대문자로 써주면 됩니다.

// 예시:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// 힌트: split을 사용해 문자열을 배열로 바꾼 다음 join을 사용해 다시 합치면 됩니다.

// 테스트 코드가 담긴 샌드박스를 열어 정답을 작성해보세요.

function camelize(str){ 
    let arr = str.split("-") ;
    for (let i = 1 ; i < arr.length ; i++ ) { 
        arr[i] = arr[i].substring(0,1).toUpperCase() + arr[i].substring(1, arr[i].length);
    }
    return arr.join("");
}

// console.log(camelize("background-color") == 'backgroundColor');
// console.log(camelize("list-style-image") == 'listStyleImage');
// console.log(camelize("-webkit-transition") == 'WebkitTransition');

 
//  해답코드 - map/reduce를 공부하자 

//  function camelize(str) {
//     return str
//       .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
//       .map(
//         // capitalizes first letters of all array items except the first one
//         // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
//         (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//       )
//       .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
//   }
 


// 특정 범위에 속하는 요소 찾기
// 중요도: 4
// 배열 arr의 요소 중 a이상 b 이하 범위에 속하는 요소만 골라 새로운 배열에 집어넣고, 해당 요소를 출력해주는 함수 filterRange(arr, a, b)를 작성해봅시다.

// 새로 작성하는 함수는 기존 배열 arr을 변경하면 안 되고, 반환되는 함수는 새로운 배열이어야 합니다.

// 예시:

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // 3,1 (조건에 맞는 요소)

// alert( arr ); // 5,3,8,1 (기존 배열은 변경되지 않았습니다.)
// 테스트 코드가 담긴 샌드박스를 열어 정답을 작성해보세요.
 
function filterRange(arr, a, b){
    let newarr = [];
    arr.map(num=>{  
        if(num >= a && num <= b ){
            newarr.push(num);
        }
    });
    return newarr;
}

// [해답코드]  *** filter를 잘 활용하자 
// function filterRange(arr, a, b) {
//     // 가독성을 위해 표현식을 괄호로 감싸주었습니다.
//     return arr.filter(item => (a <= item && item <= b));
// }

let arr2 = [5, 3, 8, 1];

let filtered = filterRange(arr2, 1, 4);

// console.log( filtered ); // 3,1 (조건에 맞는 요소)

// console.log( arr2 ); // 5,3,8,1 (기존 배열은 변경되지 않았습니다.)



// 특정 범위에 속하는 요소 찾기(배열 변경하기)
// 중요도: 4
// 배열 arr의 요소 중 a와 b 사이에 속하지 않는 요소는 삭제해주는 함수 filterRangeInPlace(arr, a, b)를 작성해보세요. 배열의 모든 요소(i)는 다음 조건을 만족해야 합니다. a ≤ arr[i] ≤ b

// 작성한 함수는 기존 배열을 변경하기만 하고 아무것도 반환하지 않아야 합니다.

// 예시:

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); // 1과 4 사이에 있지 않은 요소는 모두 제거함

// alert( arr ); // [3, 1]
// 테스트 코드가 담긴 샌드박스를 열어 정답을 작성해보세요.

function filterRangeInPlace(arr, a, b){
    // arr = arr.filter(item => (a > item || item < b)) ;
    // return arr;  // 이건 제거는 아니긴 함

    for(let i = 0 ; i < arr.length ; i++ ){
        console.log(arr[i]);
        if(arr[i] < 1 || arr[i] > 4){
            arr.splice(i, 1);
        }
    }
    return arr;
}

let arr3 = [5, 3, 8, 1, 2, 10];
// console.log(`filterRangeInPlace(arr3, 1, 4) = ${filterRangeInPlace(arr3, 1, 4)}`);
// console.log(arr3);



// 내림차순으로 정렬하기
// 중요도: 4
// let arr = [5, 2, 1, -10, 8];

// // 요소를 내림차순으로 정렬해주는 코드를 여기에 작성해보세요.

// alert( arr ); // 8, 5, 2, 1, -10
// 해답
// 배열 복사본을 정렬하기
// 중요도: 5
// 문자열이 담긴 배열 arr을 복사한 다음 해당 배열을 정렬해봅시다. 단 이때 arr은 변경되면 안 됩니다.

// 함수 copySorted(arr)는 복사 후 정렬된 배열을 반환해야 합니다.

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (no changes)

function copySorted(arr){
    let arr_t =  [];
    for(let key of arr){
        // console.log(`key = ${key}`);
        arr_t.push(key);
    } 
     
    return arr_t.sort(); 
}
// // 해답코드 --- 역시 해답코드라 깔꿈하군
// function copySorted(arr) {
//     return arr.slice().sort();
//   }

let arr4 = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr4);

// console.log( sorted ); // CSS, HTML, JavaScript
// console.log( arr4 ); // HTML, JavaScript, CSS (no changes)




// 확장 가능한 계산기
// 중요도: 5
// 기능을 "확장"할 수 있는 계산기 객체를 만들어 주는 생성자 함수 Calculator를 작성해봅시다.

// Calculator는 두 단계를 거쳐 만들 수 있습니다.

// 첫 번째 단계는 "1 + 2"와 같은 문자열을 받아서 “숫자 연산자 숫자” 형태(공백으로 구분)로 바꿔주는 메서드 calculate(str)를 구현하는 것입니다. 
// 이 함수는 +와 -를 처리할 수 있어야 하고, 연산 결과를 반환해야 합니다.

// 예시:

// let calc = new Calculator;

// alert( calc.calculate("3 + 7") ); // 10


// 두 번째 단계는 계산기가 새로운 연산을 학습할 수 있도록 해주는 메서드 addMethod(name, func)를 추가해 주는 것입니다. 
// 연산자 이름을 나타내는 name과 인수가 두개인 익명 함수 func(a,b)를 받는 새 메서드를 구현해야 하죠.

// 구현된 메서드를 이용해 곱셈 *과 나눗셈 /, 거듭제곱 **연산자를 추가해주는 예시는 아래와 같습니다.

// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate("2 ** 3");
// alert( result ); // 8
// 참고사항:

// 괄호나 복잡한 표현식 없이도 본 과제를 풀 수 있습니다.
// 숫자와 연산자는 공백 하나로 구분합니다.
// 에러 핸들링을 위한 코드를 추가해도 좋습니다(선택 사항).
// 테스트 코드가 담긴 샌드박스를 열어 정답을 작성해보세요.

// let calc = new Calculator;
// calc.addMethod  =function(name, func){
//     console.log("test");
// }


// calc.calculate = function(str){
    
//     console.log(str);
//     let stradr = {};
//     stradr= str.split(" ");
//     console.log(stradr);

//     this.addMethod(stradr[1], (stradr[0], stradr[2]))k;

//     return this; 
    
// }

// function Calculator() {
    
// } 


// // let powerCalc = new Calculator;
// // powerCalc.addMethod("*", (a, b) => a * b);
// // powerCalc.addMethod("/", (a, b) => a / b);
// // powerCalc.addMethod("**", (a, b) => a ** b)



// [ 해답코드 ]

function Calculator() {

    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b
    };
  
    this.calculate = function(str) {
  
      let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2];
  
      if (!this.methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
      }
  
      return this.methods[op](a, b);
    };
  
    this.addMethod = function(name, func) {
      this.methods[name] = func;
    };
  }
 
  //let calc = new Calculator;
 
  //console.log(calc.calculate("3 + 7"));


// 이름 매핑하기
// 중요도: 5
// name을 나타내는 프로퍼티를 가진 객체 user가 담긴 배열이 있습니다. name의 값만 담은 새로운 배열을 만들어주는 코드를 작성해보세요.

// 예시:

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// let names = /* 여기에 코드를 작성하세요. */

// alert( names ); // John, Pete, Mary


let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];
 
 
// 1) 최초 
// users.forEach(element => {
//   names.push(element.name) ;
// }) ; 

// 2)map 이용 
let names = users.map(function(person){
  return person.name;
  // console.log(person.name);
});
// console.log(names);
// 3) map에서 익명함수 
let names2 = users.map((person) =>  person.name);
// console.log(names2);

 


// 객체 매핑하기
// 중요도: 5
// 세 개의 프로퍼티 name과 surname, id를 가진 객체 user가 담긴 배열이 있습니다.

// name과 surname을 조합해 fullName을 만들고, 이를 이용해 두 개의 프로퍼티 id와 fullName을 가진 객체를 담은 새로운 배열을 반환해주는 코드를 작성해보세요.

// 예시:

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// let usersMapped = /* 여기에 코드를 작성하세요. */

// /*
// usersMapped = [
//   { fullName: "John Smith", id: 1 },
//   { fullName: "Pete Hunt", id: 2 },
//   { fullName: "Mary Key", id: 3 }
// ]
// */

// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // John Smith
// 문제를 해결하려면 배열을 새로운 배열로 매핑해야 합니다. 힌트를 하나 드리자면 =>를 이용하는 것입니다.
 
let john2 = { name: "John", surname: "Smith", id: 1 };
let pete2 = { name: "Pete", surname: "Hunt", id: 2 };
let mary2 = { name: "Mary", surname: "Key", id: 3 };

let users10 = [ john2, pete2, mary2 ];

let usersMapped = users10.map((person )=>{
    // console.log(person); 
    // console.log(person.name + " " + person.surname); 
    let arr10 = {};  
    arr10["fullName"] = person.name + " " + person.surname;
    arr10["id"] = person.id;
    return arr10;  
});   /* 여기에 코드를 작성하세요. */

// 해답 코드 **** 깔끔하군 
// let usersMapped = users.map(user => ({
//   fullName: `${user.name} ${user.surname}`,
//   id: user.id
// }));

// /*
// usersMapped = [
//   { fullName: "John Smith", id: 1 },
//   { fullName: "Pete Hunt", id: 2 },
//   { fullName: "Mary Key", id: 3 }
// ]
// */

// console.log( usersMapped[0].id ) // 1
// console.log( usersMapped[0].fullName ) // 

 



// 나이를 기준으로 객체 정렬하기
// 중요도: 5
// 프로퍼티 age가 있는 객체가 담긴 배열이 있습니다. 이 배열을 age를 기준으로 정렬해주는 함수 sortByAge(users)를 만들어보세요.

// 예시:

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [ pete, john, mary ];

// sortByAge(arr);

// // now: [john, mary, pete]
// alert(arr[0].name); // John
// alert(arr[1].name); // Mary
// alert(arr[2].name); // Pete


let john11 = { name: "John", age: 25 };
let pete11 = { name: "Pete", age: 30 };
let mary11 = { name: "Mary", age: 28 };

let arr12 = [ pete11, john11, mary11 ];

 
// function sortByAge(arr){ 
//    return arr.sort(function (a, b) {
//     if (a.age > b.age) {
//       return 1;
//     }
//     if (a.age < b.age) {
//       return -1;
//     }
//     // a must be equal to b
//     return 0;
//   }); 
  
// }

// 해답코드  *** 깔꼼하군 
function sortByAge(arr) {
  arr.sort((a, b) => a.age - b.age);
}


sortByAge(arr12);

// // now: [john, mary, pete]
// console.log(arr12[0].name); // John
// console.log(arr12[1].name); // Mary
// console.log(arr12[2].name); // Pete

 


// 배열 요소 무작위로 섞기
// 중요도: 3
// 배열의 요소를 무작위로 섞어주는 함수 shuffle(array)을 작성해 보세요.

// shuffle을 여러 번 실행하면 요소의 정렬 순서가 달라야 합니다. 예시를 살펴봅시다.

// let arr = [1, 2, 3];

// shuffle(arr);
// // arr = [3, 2, 1]

// shuffle(arr);
// // arr = [2, 1, 3]

// shuffle(arr);
// // arr = [3, 1, 2]
// // ...
// 문제를 풀 때 주의할 점은 모든 순열이 동일한 확률로 일어나야 한다는 점입니다. 
// 예를 들어 [1,2,3] 은 [1,2,3]이나 [1,3,2], [3,1,2]로 재정렬 될 수 있는데, 이 배열들이 만들어지는 빈도는 같아야 합니다.

 
// 1) 가장 간단한 방법 
//    그런데 배열이 일정하지 않고, 결과가 한쪽으로 쏠림 
// function shuffle(array) {
//   array.sort(() => Math.random() - 0.5);
// }

// 2) 해답 -  피셔-예이츠 셔플(Fisher-Yates shuffle)은 “정렬” 연산도 없기 때문에 성능상 이점도 있습니다.
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// // 1, 2, 3으로 만들 수 있는 모든 순열의 빈도를 세줍니다.
// let count = {
//   '123': 0,
//   '132': 0,
//   '213': 0,
//   '231': 0,
//   '321': 0,
//   '312': 0
// };

// for (let i = 0; i < 1000000; i++) {
//   let array = [1, 2, 3];
//   shuffle(array);
//   count[array.join('')]++;
// }

// // 만들 수 있는 모든 순열의 생성 빈도를 세서 출력해줍니다.
// for (let key in count) {
//   console.log(`${key}: ${count[key]}`);
// }

 

// //  피셔-예이츠 셔플(Fisher-Yates shuffle) 알고리즘 - 애 안되는걸까?
// function shuffle(arr){
  
//   const strikeOut = [];
//   while(arr.length){
//     const lastIdx = arr.length-1;
//     let roll = Math.floor(Math.random()*arr.length);
//     let temp = arr[lastIdx];
//     arr[lastIdx] = arr[roll];
//     arr[roll] = temp;
//     strikeOut.push(arr.pop());
//   }
// return strikeOut;
// }

// function shuffle(array) {
//   let tmparr = [];
  
//   Object.assign(tmparr, array);
//   for (let i = tmparr.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1));
//     [tmparr[i], tmparr[j]] = [tmparr[j], tmparr[i]];
//   }
//   return tmparr;
// }

// // shuffle(arr5);
// console.log(shuffle(arr5));

// // shuffle(arr5);
// console.log(shuffle(arr5));

// // shuffle(arr5);
// console.log(shuffle(arr5));
// // // arr = [3, 2, 1]

// // console.log(shuffle(arr5));
// // // arr = [2, 1, 3]

// console.log(shuffle(arr5));

 




// 평균 나이 구하기
// 중요도: 4
// age를 나타내는 프로퍼티를 가진 객체가 여러 개 담긴 배열이 있습니다. 평균 나이를 반환해주는 함수 getAverageAge(users)를 작성해보세요.

// 평균을 구하는 공식은 (age1 + age2 + ... + ageN) / N 입니다.

// 예시:

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [ john, pete, mary ];

// alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28


// function getAverageAge(users){
//     let sum =0 ;
//     for (let user of users) {
//       sum += user.age; 
//     }
//     return sum / users.length; 
// }
// 해답코드 
// function getAverageAge(users) {
//   return users.reduce((prev, user) => prev + user.age, 0) / users.length;
// }

 
function getAverageAge(users){
  
  return users.reduce((sum, val) => sum + val.age, 0) / users.length; // 객체인 경우 초기값(0)을 넣으면됨.

}

let johns = { name: "John", age: 30 };
let petes = { name: "Pete", age: 20 };
let marys = { name: "Mary", age: 10 };

let arr_users = [ johns, petes, marys ];

// console.log( Math.floor(getAverageAge(arr_users)) );





// 중복 없는 요소 찾아내기
// 중요도: 4
// arr은 배열입니다.

// 배열 내 유일한 요소를 찾아주는 함수 unique(arr)를 작성해보세요.

// 예시:

// function unique(arr) {
//   /* your code */
// }

// let strings = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// alert( unique(strings) ); // Hare, Krishna, :-O
// 테스트 코드가 담긴 샌드박스를 열어 정답을 작성해보세요.

function unique(arr){
  
}




// Create keyed object from array
// 중요도: 4
// Let’s say we received an array of users in the form {id:..., name:..., age... }.

// Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.

// For example:

// let users = [
//   {id: 'john', name: "John Smith", age: 20},
//   {id: 'ann', name: "Ann Smith", age: 24},
//   {id: 'pete', name: "Pete Peterson", age: 31},
// ];

// let usersById = groupById(users);

// /*
// // after the call we should have:

// usersById = {
//   john: {id: 'john', name: "John Smith", age: 20},
//   ann: {id: 'ann', name: "Ann Smith", age: 24},
//   pete: {id: 'pete', name: "Pete Peterson", age: 31},
// }
// */
// Such function is really handy when working with server data.

// In this task we assume that id is unique. There may be no two array items with the same id.

// Please use array .reduce method in the solution.

// 테스트 코드가 담긴 샌드박스를 열어 정답을 작성해보세요.

// 해답
// 댓글