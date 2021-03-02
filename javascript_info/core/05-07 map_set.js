// 배열에서 중복 요소 제거하기
// 중요도: 5
// arr은 배열이라 가정합시다.

// arr에서 중복 값을 제거해 주는 함수 unique(arr)를 만들어보세요.

// 예시:

// function unique(arr) {
//   /* 제출 답안 */
// }

// let values = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// alert( unique(values) ); // 얼럿창엔 `Hare, Krishna, :-O`만 출력되어야 합니다.
// 참고 1: 여기선 배열 안의 요소가 모두 문자열이지만 제출 답안을 작성할 땐, 배열 내 어떤 자료형이 들어와도 동작할 수 있어야 합니다.

// 참고 2: Set을 사용해보세요.

// 테스트 코드가 담긴 샌드박스를 열어 정답을 작성해보세요.
 

// function unique(arr) {
//     let set = new Set(arr);
//     let ret = [];
//     set.forEach((val, val2, set)=>{
//         ret.push(val);
//     })
//     return ret; 
// }

// 해답코드 
/* 
Array.from() 메서드는 유사 배열 객체(array-like object)나반복 가능한 객체(iterable object)를 얕게 복사해새로운Array 객체를 만듭니다.
다음과 같은 경우에 Array.from()으로새Array를 만들 수 있습니다.

* 유사 배열 객체 (length 속성과 인덱싱된 요소를 가진 객체)
* 순회 가능한 객체 (Map, Set 등객체의 요소를 얻을 수 있는 객체)
*/
function unique(arr) { 
    return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
]; 

console.log(unique(values) );
 


// 애너그램 걸러내기
// 중요도: 4
// 애너그램(어구전철)은 단어나 문장을 구성하고 있는 문자의 순서를 바꾸어 다른 단어나 문장을 만드는 놀이입니다.

// 예시:

// nap - pan
// ear - are - era
// cheaters - hectares - teachers
// 애너그램으로 만든 단어를 걸러내는 함수 aclean(arr)을 만들어보세요.

// 예시:

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// alert( aclean(arr) ); // "nap,teachers,ear"나 "PAN,cheaters,era"이 출력되어야 합니다.
// 애너그램 그룹에서 한 단어는 남아있어야 합니다.

// 테스트 코드가 담긴 샌드박스를 열어 정답을 작성해보세요.

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr){
     let m = new Map(); 
     arr.map((val, index, arr)=>{
        // console.log("test", arr[index].split("").slice().sort()); 
         
        let sorted = arr[index].toLowerCase().split("").sort().join("");
        m.set(sorted, val);  // key가 같으면 update를 하고, 최종 것만 남겠지~
         
     });

    // arr.map((val, index, arr)=>{
    //     // console.log("test", arr[index].split("").slice().sort()); 
    //     m.set( arr[index].split("").slice().sort(), index);   
    // });
    // console.log("------------------------");

    // m.forEach((val, key, m) =>{
    //     console.log(m.get(key).size);
    // })
    // let s = new Set(arr.for);
    // arr.map((val, index, arr)=>{
    //     // console.log("test", arr[index].split("").slice().sort()); 
    //     s.add( arr[index].split("").slice().sort());   
    // });
    // m.forEach((val, key, m) =>{
    //     for (let v of m.values()) {
    //         if(m.size === 1) return m.get(key).join("");
    //         if(val === v){
    //             m.delete(key);
    //             break;
    //         }
    //     }
    // }) 

    //console.log(    `m = ${m}`);
    // arr.map((val, index, arr)=>{
    //    console.log("test", arr[index].split("").slice().sort());    
    // });

    return Array.from(m.values()).join(',') ;
}
 //aclean(arr);
  console.log(aclean(arr)); 
 
  //해답코드 
//   function aclean(arr) {
//     let map = new Map();
  
//     for (let word of arr) {
//       // 단어를 글자 단위로 쪼갠 후, 알파벳 순으로 정렬한 다음에 다시 합칩니다.
//       let sorted = word.toLowerCase().split('').sort().join(''); // (*)
//       map.set(sorted, word);
//     }
  
//     return Array.from(map.values());
//   }





// 반복 가능한 객체의 키
// 중요도: 5
// map.keys()를 사용해 배열을 반환받고, 이 배열을 변수에 저장해 .push와 같은 배열 메서드를 적용하고 싶다고 해봅시다.

// 작동하지 않네요.

// let map = new Map();

// map.set("name", "John");

// let keys = map.keys();

// // Error: keys.push is not a function
// keys.push("more");
// 이유가 무엇일까요? keys.push가 작동하게 하려면 어떻게 코드를 고쳐야 할까요?


let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");
console.log(keys);

