## 1. 노드의 정의 
### - 공식 홈페이지의 설명 
Node.js는 v8 자바스크립트 엔진으로 빌드된 `자바스크립트 런타임`입니다.  
`런타임` - 실행기 / Node가 없는 경우는 브라우저가 실행했었음.

* 서버의 역할도 수행할 수 있는 자바스크립트 런타임 
* 노드로 자바스크립트로 작성된 서버를 실행할 수 있음. 
* 서버 실행을 위해 필요한 http/https/http2 모듈을 제공 

### - 내부구조 
내부적으로는 c++ 
`libuv` : 노드의 특성인 이벤트 기반, 논블로킹 I/O 모델을 구현한 라이브러리. `비동기`

------------
## 2. 노드의 특성 

### - 이벤트 기반 
      이벤트가 발생할 때 미리 지정해둔 작업을 수정하는 방식
* 이벤트의 예 : 클릭, 네트워크 요청, 타이머등 
* 이벤트 리스너 : 이벤트를 등록하는 함수 
* 콜백 함수 : 이벤트가 발생했을 대 실행될 함수 

### - 논블로킹 I/O 
* Node는 블로킹이면서 동기, 비동기면서 논블로킹 두 개만 있음
* 비동기면서 논블로킹인 경우 `동시`라고 오해하는 경우가 있으나 노드에서 동시를 구현하는 것은 상당히 어려움
* 블로킹은 동기, 논블로킹은 비동기라고 이해해도 무리없음.
  - 동기이면 코드가 순서대로 대부분 실행 
  - 비동기면 코드가 순서대로 실행되지 않을 수도 있다. 
  
* `논블로킹` : 오래걸리는 함수를 백그라운드로 보내서 다음 코드가 먼저 실행되게 하고, 나중에 오래 걸리는 함수를 실행. 
  - 논블로킹 방식 하에서 일부 코드는 백그라운드에서 병렬로 실행됨
  - 일부코드 : I/O 작업(파일시스템 접근, 네트워크 요청), 압축, 암호화등 
  - 나머지 코드는 블로킹 방식으로 실행됨 

### - 프로세스 vs 스레드
* 프로세스와 스레드 
  * **`프로세스`** : **운영체제에서 할당**하는 작업의 단위, 프로세스 간에 자원 공유 X
  * **`스레드`** : **프로세스 내에서 실행**되는 작업의 단위, 부모 프로세스 자원 공유 
* 노드 프로세스는 멀티 스레드지만 **직접 다룰 수 있는 스레드는 하나이**기 때문에 싱글스레드라고 표현 
* 노드는 주로 멀티 스레드 대신 멀티 프로세스 활용
* 노드는 14버전 부터 멀티스레드 사용 가능
### - 싱글 스레드 
* 주어진 일을 하나밖에 처리 못함 
  - 블로킹이 발생하는 경우 나머지 작업은 모두 대기해야 하는 비효율 발생 
### - 멀티스레드 모델과의 비교 
* 싱글 스레드 모델은 에러를 처리하지 못하는 경우 멈춤 
  * 프로그래밍 난이도 쉽고, CPU, 메모리 자원 적게 사용
* 멀티 스레드 모델은 에러 발생시 새로운 스레드를 생성하여 극복
  * 단, 새로운 스레드 생성이나 놀고 있는 스레드 처리에 비용발생
  * 프로그래밍 난이도 어려움 
  * 스레드 수 만큼 자원을 많이 사용함 
### - 싱글스레드 
* 대신 논블로킹 모델을 채택하여 일부코드(I/O)를 백그라운드(다른 프로세스)에서 실행가능 
  * 요청을 먼저 받고, 완료될 때 응답함. 
  * I/O 관련 코드가 아닌 경우 싱글 스레드, 블로킹 모델과 같아짐

|멀티 스레딩|멀티 프로세싱|
|-----|-----|
|하나의 프로세스 안에서 여러개의 스레드 사용|여러개의 프로세스 사용|
|CPU작업이 많을 때 사용 |I/O요청이 많을 때 사용 | 
|프로그래밍이 어려움|프로그래밍이 비교적 쉬움|
 
------------
## 3. 서버로서의 노드 
### - 노드 서버의 장단점 
|장점|단점|
|-----|-----|
|멀티 스레드 방식에 비해 컴퓨터 자원을 적게 사용함|싱글 스레드라서 cpu코어를 하나만 사용|
|i/o작업이 많은 서버로 적합|CPU작업(이미지 리사이징, 암호화 등)이 많은 서버로 부적함|
|멀티 스레드 방식이 쉬움|하나뿐인 스레드가 멈추지 않도록 관리해야 함|
|웹 서버가 내장되어 있음|서버 규모가 커졌을 때 서버를 관리하기 어려움|
|자바스크립트를 사용함|어중간한 성능|
|json형식과 호환하기 쉬움||

* CPU작업을 위해 AWS Lambda나 Google Cloud Functions 같은 별도 서비스 사용 
* 페이팔, 넷플릭스, 나사, 월마트, 링크드인, 우버 등에서 메인 또는 서브 서버로 사용.

### - 서버 외의 노드 
* 자바스크립트 런타임이기 때문에 용도가 서버에만 한정되지 않음
* 웹, 모바일, 데스크탑 어플리케이션에도 사용
  * 웹 프레임워크 : Angular, React, Vue, Meteor 등
  * 모바일 앱 프레임워크 : React Native 
  * 데스크탑 개발 도구 : `Electron`(Atom, Slack, VSCode, Discord등 제작)
* 위 프레임워크가 노드 기반으로 동작함 
------------
## 4. 노드, VS Code 설치하기 
* 폴더명, 사용자명이 한국어가 되지 않도록 

<code>
node -v
npm -v
</code> 
------------
## 5. FAQ

