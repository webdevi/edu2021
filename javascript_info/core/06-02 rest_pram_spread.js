function sum(a, b){
    return a+b;
}

// console.log(sum(1, 2 ,3, 4, 5, 6));


function sum2(...args){
    let sum = 0 ;

    for (let arg of args)  sum += arg; 
    return sum;
}

// console.log(sum2(1, 2 ,3, 4, 5, 6));
// console.log(sum2(1, 2 ,3, 4, 5, 6, 7, 8, 9));


// 나머지 매개변수는 항상 마지막에 있어야 합니다. 
function showName(firstname , lastname, ...titles){
    console.log(firstname + ' ' + lastname ); 

    console.log(titles[0]);
    console.log(titles[1]);
    console.log(titles.length);
}

// showName("Julius", "caesar", "Consul", "Imperator");



function showName2() {
    console.log( arguments.length );
    console.log( arguments[0] );
    console.log( arguments[1] );
  
    // arguments는 이터러블 객체이기 때문에
    // for(let arg of arguments) alert(arg); 를 사용해 인수를 나열할 수 있습니다.
  }
//   showName2("Julius", "Caesar");

// 함수를 호출 할 때 
let arr = [3, 5, 1];

// alert( Math.max(...arr) );

let str = "Hello";
// console.log([...str]);

[...str].forEach((val, index, array)=>{
    //console.log(`val = ${val}, index =${index}, array= ${array}`);
}); 



let str2 = "Hello";

// Array.from은 이터러블을 배열로 바꿔줍니다.
// console.log( Array.from(str2) ); // H,e,l,l,o // 이게 더 보편적임 
// console.log(...Array.from(str2) );
// console.log(...str2 );

let arr2 = [1, 2, 3];
let arr2Copy = [...arr2]; // spread the array into a list of parameters
                        // then put the result into a new array

// do the arrays have the same contents?
console.log(JSON.stringify(arr2) === JSON.stringify(arr2Copy)); // true
console.log(typeof JSON.stringify(arr2));

console.log(arr2  === arr2Copy ); // true