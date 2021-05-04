// https://www.youtube.com/watch?v=f7BozmhiCtU&t=3429s
// 1분 퀴즈 
// 구구단을 출력하되 결과에 짝수가 하나도 나오지 않게 해보세요. continue문 활용
// 힌트 : 짝수인지 아닌지는 % 연산자를 사용하면 알 수 있음 
/*
for (let i = 2; i <= 9; i++) {
    console.log(`${i} 단 시작!`)
    for (let j = 1; j < 10 ; j++) {
        if(!((i*j)%2)) continue;
        console.log(`${i} x ${j} = ${i * j}`); 
    } 
}

for (let i = 1; i <= 9; i+=2) {
    console.log(`--------------${i} 단 시작!`)
    for (let j = 1; j < 10 ; j+=2) {        
        console.log(`${i} x ${j} = ${i * j}`); 
    } 
}
*/ 


// 별찍기
/*

for (let i = 0; i <= 5; i++) {
    for (let j = 0; j < i; j++) {
        document.write('*');        
    }
    document.write('<br>');   
}
*/ 

// 별찍기 
// *
// ** 
// *** 
// ****
// ***** 
// for (let i = 0; i <5 ; i++) {
//     console.log("*".repeat(i+1));
// }

// 별찍기 
// ***** 
// ****
// *** 
// ** 
// *
// for (let i = 5; i > 0 ; i--) {
//     console.log("*".repeat(i));
// }


// 별찍기 
// *
// ***
// ***** 
// *******
// *********

// for (let i = 1; i < 10 ; i+=2) {
//     console.log("*".repeat(i));
// }
 
// console.log('1--------------');

// // 별찍기 
// // *********
// // *******
// // ***** 
// // ***
// // *
// for (let i = 10; i > 0 ; i-=2) {
//     console.log("*".repeat(i));
// }

// console.log('2--------------');
// // 별찍기 
// // *****
// //  ****
// //   ***
// //    **
// //     *


// for (let i = 0; i <5  ; i++) {
//     console.log(" ".repeat(i) + "*".repeat(5-i) );
// }

// console.log('3--------------');
// // 별찍기 
// //     *
// //    **
// //   ***
// //  ****
// // *****

// for (let i = 0; i <5  ; i++) {
//     console.log(" ".repeat(4-i) + "*".repeat(i+1) );
// }



 // 별찍기 
//     *
//    ***
//   ***** 
//    ***
//     *

for (let i = 0; i <= 5  ; i+=1) {
    if(i<=3)
        console.log(" ".repeat(4-i) + "*".repeat(i+1) );
    else    
        console.log('test');
 }