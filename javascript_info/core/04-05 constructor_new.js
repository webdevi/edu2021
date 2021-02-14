// Q1 함수 두 개로 동일한 객체 만들기
// 중요도: 2
// new A()==new B()가 성립 가능한 함수 A와 B를 만드는 게 가능할까요?

let sample = {}; 

function A() { 
   return sample;
 }
function B() { 
   return sample;
}

let a = new A;
let b = new B;

console.log( a == b ); // true
// 만약 가능하다면, 실행 가능한 예시를 작성해 보세요.

// 두 함수 모두 this 대신에 객체를 반환하게 하면 됩니다. 
// 아래 예시에선 함수 외부에서 정의한 객체 obj를 반환하도록 했습니다.



// q2 계산기 만들기
// 중요도: 5
// 아래와 같은 세 개의 메서드를 가진 생성자 함수, Calculator를 만들어보세요.

// read() – prompt 함수를 이용해 사용자로부터 값 두 개를 받고, 이를 객체 프로퍼티에 저장합니다.
// sum() – 프로퍼티에 저장된 값 두 개를 더한 후 반환합니다.
// mul() – 프로퍼티에 저장된 값 두 개를 곱한 후 반환합니다.
// 예시:

let calculator = new Calculator();
 
//calculator.read(); 
//console.log( "Sum=" + calculator.sum() );
//console.log( "Mul=" + calculator.mul() );
  
function Calculator(){
    this.a = 0; 
    this.b = 0;
    this.read = function() {
        a  = +prompt("첫번째 인자를 입력하세요" );
        b = +prompt("두번째 인자를 입력하세요" ); 
    }, 
    this.sum = function() {
        return a+b; 
    }
    this.mul = function() {
        return a*b;
    }
}


// Q3 누산기 만들기
// 중요도: 5
// 생성자 함수 Accumulator(startingValue)를 만들어 보세요.

// Accumulator(startingValue)를 이용해 만드는 객체는 아래와 같은 요건을 충족해야 합니다.

// 프로퍼티 value에 현재 값(current value)을 저장합니다. 최초 호출 시엔 생성자 함수의 인수, startingValue에서 시작값(starting value)을 받아옵니다.
// 메서드 read()에선 prompt 함수를 사용해 사용자로부터 숫자를 받아오고, 받은 숫자를 value에 더해줍니다.
// 프로퍼티 value엔 startingValue와 사용자가 입력한 모든 값의 총합이 더해져 저장됩니다.

// 데모를 위한 코드는 다음과 같습니다.
 
let accumulator = new Accumulator(1); // 최초값: 1

accumulator.read(); // 사용자가 입력한 값을 더해줌
accumulator.read(); // 사용자가 입력한 값을 더해줌

console.log(accumulator.val ); 

function Accumulator(startingValue){ 
    this.val = startingValue; 
    this.read = function(){
        this.val += +prompt("숫자를 추가");     
    }
}
