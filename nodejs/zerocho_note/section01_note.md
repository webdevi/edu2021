# 섹션 1. 알아두어야 할 자바스크립트

## 1. 호출스택 알아보기
### 1) 호출스택 
<pre>
  function first(){
    second(); 
    console.log('첫번째'); 
  }
  function second(){
    thrid(); 
    console.log('두번째');
  }
  function third(){
    console.log('세번째');
  }
  first(); 
</pre>
> 호출순서 : 세번째 -> 두번째 -> 첫번째 
 
* 호출스택(함수의 호출, 자료구조의 스택)
  * Anonymous은 가상의 전역 컨텍스트(항상 있다고 생각하는 것이 좋음)
  * 함수 소출 순서대로 쌓이고 역순으로 실행됨
  * 함수 실행이 완료되면 스택에서 빠짐
  * LIFO 구조라서 스택이라고 불림

<pre>
function run(){
  console.log('3초후에 실행'); 
}
console.log('시작');
setTimeout(run, 3000); 
console.log('끝'); 
</pre>
> 순서 : 시작->끝->3초후 실행

* 호출스택만으로는 설명이 안됨(Run은 호출안했는데..)
* 호출스택 + 이벤트 루프로 설명 가능 

---------------------------
## 2. 이벤트루프 알아보기
<pre>
function one(){
  console.log('1')'
}
function run(){
  console.log('run')'
  setTimeout(()=>{
    console.log('wow');
  }, 0); 
  new Promise((resolve)=>{
    resolve('hi');
  })
    .then(console.log); 
  one(); 
}
setTimeout(run, 5000);
</pre>
* 순서 
1. 파일 실행하면 Anonymouse 쌓임
1. 호출스택 -> setTimeout(run, 5000) ->끝나고 나감
1. 백그라운드에 -> 타이머(run, 5)보내줌
1. 파일 실행이 끝났은 Anonymouse 빠짐
1. 5초... 셈 
1. run함수를 태스크 큐로 보냄
1. 호출 스택이 비어있을 때 run을 보내줌 ( 이벤트 루프에 의해 )
1. run 실행, 다시 나감
1. setTimeout(익명, 0); 호출스택 쌓임/ 시간이 0이라 바로 실행한다고 오해할 수 있으나 무조건 백그라운드로 보냄
1. new Promise 호출스택 쌓임-> Promise는 내부까지는 동기로 실행되므로 
1. resolve('hi')가 그 위에 쌓이고 실행 
1. promise는 then을 만나는 순간 비동기로 동작함 ->  백그라운드 쌓임
1. one실행 -> console.log실행 -> run나감 
1. 백그라운드는 누가 먼저 실행될지 모름 ->태스크큐 쌓임
1. setTimer가 먼저 쌓였으나, Promise우선순위가 높아서 먼저 실행됨 

* 호출스택만 javascript, 백그라운드, 태스크 큐는 다른언어

---------------------------
## 3. var, const, let 
1. ES2015이전에는 var로 변수 선언
1. 이후에는 const와 let이 대체 
1. 차이점 : 블록스코프(cf. var는 함수 스코프)
<pre>
if(true){
  var x = 3; 
}
console.log(x); // 3 
if(true){
  const y = 3; 
}
console.log(y); // error 
</pre>
### 기존: 함수 스코프(function(){}이 스코프의 기준점)
  * 다른 언어와달리 if나 for, while은 영향을 미치지 않음 
  * const, let은 함수 및 블록({})에도 별도의 스코프를 가짐
### const는 상수 
  * 상수에 할당한 값은 다른값으로 변경 불가 
  * 변경하고자 할 때에는 let으로 변수 선언
  * 상수 선언 시부터 초기화가 필요함
  * 초기화를 하지 않고 선언하면 에러 
---------------------------
## 4. 템플릿 문자열, 객체 리터럴
<pre>
const result = `이 과자는 ${won}원입니다`;
</pre>
### ` - 백틱, 템플릿 문자열
<pre>
function a() {

}
a(); 
a'';  // 태그드 탬플릿 리터널 (최신문법)
</pre>

### 객체 리터널 
  - 훨씬 간결한 문법으로 객체리터럴 표현 가능
    * 객체의 메서드에 : function을 붙이지 않아도 됨
    * {sayNode:sayNode}와 같은 것을 {sayNode}로 축약가능 
    * [변수 + 값]등으로 동적 속성명을 객체 속성명으로 사용 가능 
  
---------------------------
## 5. 화살표 함수 
---------------------------
## 6. 비구조화 할당
---------------------------
## 7. 클래스 
---------------------------
## 8. Promise, async/await
---------------------------
## 9. 프런트엔드 자바스크립트 
---------------------------
