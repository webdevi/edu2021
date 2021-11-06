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

<pre>
function add1(x, y){
  return x + y; 
}
// 함수의 이름을 변수명으로 
// 화살표 함수를 넣으면 간결해짐 
const add2 = (x, y)=>{
  return x + y;
};
// { 다음에 return 이 바로 나오면 아래 처럼 더 간단히 줄일 수 있따. }
const add3 = (x, y) => x + y;
const add4 = (x, y) => (x + y); 


function not1(x){
  return !x; 
}
const not2 = x => !x; 


const obj = (x, y) =>{
  return {x, y}; 
}
// 객체를 리턴하는 경우는 소괄호가 필수 
const obj = (x, y) =>({x, y});  
</pre>

<pre>
var relationship1= {
  name:'zero', 
  friends:['nero' , 'hero', 'xero'], 
  logFriends :fucntion(){
    var that = this; // relationship1을 가리키는 this를 that에 저장 
    this.friends.forEach(function(friend){
      console.log(that.name, friend);
    }); 
  }, 
};
</pre>
>> 화살표 함수가 기존 function(){}를 대체하는 것은 아님(this가 달라짐)
* logFriends 메서드의 this값에 주목
* forEach의 function의 this와 logFriends의 this는 다름 
* that 이라는 중간변수를 이용하여 logFriends의 this를 전달. 
* `function마다 본인의 this를 가지고 있음`

<pre>
const relationship2={
  name:'zero', 
  friends:['nero' , 'hero', 'xero'], 
  logFriends(){
    this.friends.forEach(friend=>{
      console.log(this.name, friend);
    }); 
  }, 
};
relationshipw.logFriends(); 
</pre>
>> forEach의 인자로 화살표 함수가 들어간 것에 주목
* forEach의 화살표 함수의 this와 logFriends의 this가 같아짐
* 화살표 함수는 자신을 포함하는 함수의 this를 물려받음
* 물려받고 싶지 않을 때 : function(){}를 사용

---------------------------
## 6. 비구조화 할당
<pre>
const example = {a:123, b:{c:135, d:146}};
const a = example.a; 
const d = example.b.d; 

// 아래같이 변수 할당을 할 수 있음 
// 객체는 키가 같아야 함 
const example = {a:123, b:{c:135, d:146}};
const {a, b:{d}} = example;
</pre>

<pre>
arr =[1, 2, 3, 4, 5]; 
const x = arr[0];
const y = arr[1];
const z = arr[4];

// 아래와 같이 배열도 할당 가능 
// 배열은 자리가 똑같아야 함 
const [x, y, , , z] = arr; 
</pre>
 
<pre>
var candyMachine = {
  status: {
    name :'node', 
    count : 5, 
  }, 
  getCandy: function(){
    //thisf를 사용하는 경우 구조분해 할당을 사용하면 문제가 됨
    this.status.count--;    
  }, 
};
var getCandy = candyMachine.getCandy;
var count = candyMachine.status.count; 
</pre>
> var getCandy와 var count에 주목
* candyMachine부터 시작해서 속성을 찾아 들어가야 함.
---------------------------
## 7. 클래스
* 프로토타입 문법을 깔끔하게 작성할 수 있는 class문법 도입
  * Constructor(생성자), Extends(상속) 등을 깔끔하게 처리할 수 있음. 
  * 코드가 그룹화되어 가독성이 향상됨
---------------------------
## 8. Promise, async/await

> 콜백 헬이라고 불리는 지저분한 자바스크립트 코드의 해결책 

### `프로미스` : 내용이 실행되되었지만 결과를 아직 반환하지 않은 객체 
  * `then을 붙이면 결과를 반환`함
  * 실행이 완료되지 않았으면 완료된 후에 then 내부함수가 실행됨
  * `resolve`(성공리턴값) -> then으로 연결 
  * `reject`(실패리턴값) -> catch로 연결 
  * finally 부분은 무조건 실행됨 

실행을 해놓고 변수에 저장해두었다가, 필요할 때 then을 붙여서 결과를 가지고 올 수 있다. `코드를 분리`할 수 있다는 것이 장점

* promise.resolve(성공리턴값):바로 resolve하는 프로미스 
* promise.reject(실패리턴값):바로 reject하는 프로미스 
* promise.all(배열):여러개의 프로미스를 동시에 실행
  - 하나라도 실패하면 catch로 감  
  - `allSettled`로 실패한 것만 추려낼 수 있음

### async / await 
  * 변수 = await 프로미스; 인 경우 프로미스가 resolve된 값이 변수에 저장 
  * 변수 await값;인 경우 그 값이 변수에 저장
<pre>
async function findAndSaveUser(Users){
  // await가 then이라고 생각하면 됨
  // 오른쪽에서 실행해서 왼쪽으로 간다고 보면 됨 
  let user = await Users.findOne({}); 
  user.naem = 'zero';
  user = await user.save(); 
  user = await Users.findOne({gender:'m'}); 
}
</pre> 

* for await (변수 of 프로미스 배열)
  * resolve된 프로미스가 변수에 담겨 나옴
  * await를 사용하기 때문에 async함수안에서 해야됨
   
---------------------------
## 9. 프런트엔드 자바스크립트 
### AJAX 
* 서버로 요청을 보내는 코드 
  * 라이브러리 없이는 브라우저가 지원하는 XMLHttpRequest 객체 이용
  * AJAX 요청시 Axios라이브러리를 사용하는 것이 편함
  * HTML에 아래 스크립트를 추가하면 사용할 수 있음.
<pre>
  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
  <script>
    .... // 여기에 코드를 넣으세요.
  </script>
</pre>  

#### GET요청 보내기 
  * axios.get 함수의 인수로 요청을 보낼 주소를 넣으면 됨. 
  * 프로미스 기반 코드라 async/await사용 가능.
<pre>
axios.get('https://www.zerocho.com/api/get')
  .then((result)=>{
    console.log(result); 
    console.log(result.data);
  })
  //비동기는 실패할 가능성을 대비해야됨.  
  .catch((error)=>{
    consolo.log(error);
  }); 


// axios가 프로미스를 지원하기 때문에 아래와같이도 할수 있다. 
async()=>{
  try{
    const result = await axios.get('https://www.zerocho.com/api/get');
    console.log(result);
    console.log(result.data);
  }catch(error){..}
}
</pre>

#### POST요청을 하는 코드 (데이터를 담아 서버로 보내는 경우 )
  * 전체적인 구조는 비슷하나 두번째 인수로 데이터를 넣어 보냄 
  * 로그인 등... 
<pre>
(async()=>{
  try{
    const result = await axios.get('https://www.zerocho.com/api/post/json', {name:'zerocho', birth:1994});
  }catch(error){
    console.log(error);
  }
})(); 
</pre>

### FormData 
* HTML form 태그에 담긴 데이터를 AJAX 요청으로 보내고 싶은 경우 
* FormData 메서드
  * append로 데이터를 하나씩 추가 
  * has로 데이터 존재 여부 확인
  * get으로 데이터 조회
  * getAll로 데이터 모두 조회
  * delete로 데이터 삭제 
  * set으로 데이터 수정 

<pre>
const formData = new FormData(); 
formData.append('name', 'zerocho'); 
formData.append('name', 'zerocho'); 
..... 
// 이렇게 추가한 후 axios로 전송
</pre>

### encodeURIComponent, decodeURIComponent
* 가끔 주소창에 한글 입력하면 서버가 처리하지 못하는 경우 발생 
  * encodeURIComponenent로 한글 감싸줘서 처리 

### `data attribute와 dataset`
#### HTML 태그에 데이터를 저장하는 방법 
  * 서버의 데이터를 프론트엔드로 내려줄때 사용 (공개된 데이터만/보안안됨)
  * 태그 속성으로 `data-속성명`
  * 자바스크립트에서 `태그.dataset.속성명`으로 접근 가능 
    > data-user-job => dataset.user.job

    > data-id -> dataset.id 
  * 반대로 자바스크립트에서 dataset에 값을 넣으면 `data-속성`이 생김 
    > dataset.monthSalary = 1000 -> data-month-salary='1000'
---------------------------
