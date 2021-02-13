// Q1 객체 리터럴에서 'this' 사용하기
// 중요도: 5
// 함수 makeUser는 객체를 반환합니다. 
// 이 객체의 ref에 접근하면 어떤 결과가 발생하고, 그 이유는 뭘까요?

function makeUser() {
  return {
    name: "John",
    ref: this
  };
};

let user = makeUser();

// console.log( user.ref.name ); // 결과가 어떻게 될까요?  
// 에러가 납니다. 
//user.ref의 this는 window 객체를 가리킵니다. 


// Q2 계산기 만들기
// 중요도: 5
// calculator라는 객체를 만들고 세 메서드를 구현해 봅시다.

// read()에선 프롬프트 창을 띄우고 더할 값 두 개를 입력받습니다. 입력받은 값은 객체의 프로퍼티에 저장합니다.
// sum()은 저장된 두 값의 합을 반환합니다.
// mul()은 저장된 두 값의 곱을 반환합니다.
let calculator = {
  // ... 여기에 답안 작성 ...
  num1 : 0 , 
  num2 : 0 , 
  read() {
       // num1 = parseInt(prompt("어떤 값을 더할꺼에요?", 0));
       // num2 = parseInt(prompt("어떤 값을 더할꺼에요?", 0)); 

        num1 = +(prompt("어떤 값을 더할꺼에요?", 0));
        num2 = +(prompt("어떤 값을 더할꺼에요?", 0)); 
  },
  sum() { 
        return (num1+num2);
  },
  mul() { 
        return (num1*num2);
    }, 
};

//calculator.read();
//console.log( calculator.sum() );
//console.log( calculator.mul() );



// Q3 체이닝
// 중요도: 2
// 올라가기(up)와 내려가기(down) 메서드를 제공하는 객체 ladder가 있습니다.

let ladder = {
  step: 0,
  up() {
    this.step++;
    console.log('up :', this.step );
    return this;
  },
  down() {
    this.step--;
    console.log('down :', this.step );
    return this;
  },
  showStep: function() { // 사다리에서 몇 번째 단에 올라와 있는지 보여줌
    console.log('showStep :' ,this.step );
    return this;
  }
};
// 메서드를 연이어 호출하고자 한다면 아래와 같이 코드를 작성할 수 있습니다.

//ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// up, down, showStep을 수정해 아래처럼 메서드 호출 체이닝이 가능하도록 해봅시다.
ladder.up().up().down().showStep(); // 1