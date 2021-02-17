// 배열은 복사가 될까요?
// 중요도: 3
// 아래 코드를 실행하면 어떤 결과가 나올까요?

let fruits = ["사과", "배", "오렌지"];

// 배열을 '복사'한 후, push 메서드를 이용해 새로운 값을 추가합니다.
let shoppingCart = fruits;
shoppingCart.push("바나나");

// fruits에 어떤 값이 들어 있을까요?
//alert( fruits.length ); // ? 

//  정답 4 
  


// 배열과 관련된 연산
// 중요도: 5
// 배열과 관련된 다섯 가지 연산을 해봅시다.

// 요소 “Jazz”, "Blues"가 있는 styles 배열을 생성합니다.
// "Rock-n-Roll"을 배열 끝에 추가합니다.
// 배열 정 중앙에 있는 요소를 "Classics"로 바꿉니다. 가운데 요소를 찾는 코드는 요소가 홀수 개인 배열에서도 잘 작동해야 합니다.
// 배열의 첫 번째 요소를 꺼내서 출력합니다.
// "Rap"과 "Reggae"를 배열의 앞에 추가합니다.
// 단계를 하나씩 거칠 때마다 배열 모습은 아래와 같이 변해야 합니다.

// Jazz, Blues
// Jazz, Blues, Rock-n-Roll
// Jazz, Classics, Rock-n-Roll
// Classics, Rock-n-Roll
// Rap, Reggae, Classics, Rock-n-Roll

let styles = ["Jazz", "Blues"];
console.log(styles);
styles.push("Rock-n-Roll"); 
console.log(styles); 
styles[Math.trunc(styles.length /2)] = "Classics";
console.log(styles);
styles.shift();
console.log(styles);
styles.unshift("Rap","Reggae");
console.log(styles);

 


// 배열 컨텍스트에서 함수 호출하기
// 중요도: 5
// 아래 코드를 실행하면 어떤 결과가 나올까요? 그리고 그 이유는 무엇일까요?

let arr = ["a", "b"];

arr.push(function() {
  alert( this );
})

console.log(arr);
// arr[2](); // ?





// 입력한 숫자의 합 구하기
// 중요도: 4
// 아래 조건을 만족하는 함수 sumInput()을 작성해 봅시다.

// prompt 창을 띄워 사용자에게 숫자를 입력해 달라고 요청한 후, 입력받은 값들을 배열에 저장합니다.
// 숫자가 아닌 값, 혹은 빈 문자열을 입력하거나 ‘Cancel’ 버튼을 누르면 질문을 멈춥니다.
// 배열 요소의 합을 계산하고 리턴합니다.
// 주의: 숫자 0은 유효한 숫자이므로, 사용자가 0을 입력하더라도 질문이 멈추지 말아야 합니다.
 
// while ( +prompt("숫자를 입력하세요") ? 1 : 0){
//    // num = prompt("숫자를 입력하세요") ;
     
//    // if(isNaN(+num)) break; 
//     arr2.push(num);
//     console.log(arr2);

// }  // num != null );
  
function sumInput(){
  
    let no = prompt("숫자를 입력하세요");
    let arr2 = [];
    while (!(isNaN(+no) || no === null || no ==="")){
        arr2.push(no);
        console.log(arr2);
        no = prompt("숫자를 입력하세요");
    }; 

    let sum = 0;
    console.log(arr2);
    for (let key of arr2) {
        console.log("....", key);
        sum += +key;
    }
    console.log(`sum is ${sum}`);

    return sum;
}

sumInput();

 
// 최대합 부분 배열
// 중요도: 2
// 입력값은 arr = [1, -2, 3, 4, -9, 6] 같이 숫자로만 구성된 배열이라고 가정해봅시다.

// 우리가 해야 할 일은 인접한 요소의 총합이 최대인 arr의 부분 배열을 찾는 것입니다.

// 부분 배열 요소들의 합을 리턴하는 함수 getMaxSubSum(arr)를 작성해 봅시다.

// 예시:

// getMaxSubSum([-1, 2, 3, -9]) == 5 (강조 표시된 요소들의 합)
// getMaxSubSum([2, -1, 2, 3, -9]) == 6
// getMaxSubSum([-1, 2, 3, -9, 11]) == 11
// getMaxSubSum([-2, -1, 1, 2]) == 3
// getMaxSubSum([100, -9, 2, -3, 5]) == 100
// getMaxSubSum([1, 2, 3]) == 6 (모든 요소)
// 요소 전체가 음수라면 아무런 요소도 선택하지 않아야 최댓값이 됩니다(부분 배열은 빈 배열). 그리고 합은 0이 됩니다.

// getMaxSubSum([-1, -2, -3]) = 0;
// 가능하다면 성능을 고려하여 답안을 작성해 봅시다. 답안은 O(n2) 또는 O(n)까지 가능합니다.

let arr3 = [1, -2, 3, 4, -9, 6] ; 