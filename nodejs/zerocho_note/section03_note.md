# 섹션 3. http 모듈로 서버 만들기 1시간 31분
## 1. HTTP 서버 만들기 11:26
### 서버와 클라이언트의 관계
* 클라이언트가 서버로 요청(request)을 보냄
* 서버는 요청을 처리 
* 처리 후 클라이언트로 응답(response)을 보냄

### http요청에 응답하는 노드 서버 
* createServer로 요청 이벤트에 대기
* req 객체는 요청에 관한정보가, res객체는 응답에 관한 정보가 담겨 있음

```javascript
const http = request('http'); 
//비동기이므로, 항상 에러처리를 잊지말자
const server = http.createServer((req, res)=>{
  // 여기에 어떻게 응답할지 적습니다. 
  res.write('hello'); 
  res.write('server'); 
  res.end('wow');   
})
  .listen(8080); 
  // 위의 콜백을 아래로 뺄 수 있다. 
server.on('listening',()=>{
  console.log('8080번 포트에서 서버 대기중입니다.')); 
}); 
server.on('error',(error)=>{
  console.error(error); 
}); // 코드 수정 후 서버 재시작 해야됨
```

### localhost는 컴퓨터 내부 주소
  * 외부에서는 접근 불가능

### 포트는 서버 내에서 프로세스를 구분하는 번호 
  * 기본적으로 http서버는 80번 포트 사용(생략가능 https 443)
  * 다른 포트로 데이터베이스나 다른 서버 동시 연결 가능 
----------------------------
## 2. fs로 HTML 읽어 제공하기 05:41 
```javascript
  ... (중략)
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'}); 
  ... (중략)
```

HTML 파일을 만들어서 서버에서 읽어오는 방식으로 
```javascript
const http= require('http');
const fs= require('fs').promises;

const server = http.createServer(async (req, res)=>{
  // await(비동기)의 경우 try catch를 
  try{
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'  }); 
    const data = await fs.readFile('./server2.html'); 
    res.end(data); 
  }catch(err){
    console.error(err); 
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'}); 
    res.end(err.message);
  }
})
  .listen(8080); 
server.on('listening', ()=>{
  console.log('8080번 포트에서 서버 대기중입니다.'); 
}); 
server.on('error', (error)=>{
  console.error(error); 
})
```

----------------------------
## 3. REST API 서버 만들기 15:59

### REST API
1. 서버에 요청을 보낼 때에는 주소를 통해 요청의 내용을 표현
    - /index.html이면 index.html을 보내달라는 뜻
    - 항상 html을 요구할 필요는 없음
    - 서버가 이해하기 쉬운 주소가 좋음
1. REST API(Representational State Transfer)
    - 서버의 자원을 정의하고 자원에 대한 주소를 지정하는 방식
    - /user이면 사용자 정보에 관한 정보를 요청하는 것 
    - /post면 게시글에 관련된 자원을 요청하는 것 
1. HTTP요청 메서드
    - `GET` : 서버 자원을 가져오려고 할 때 사용
    - `POST` : 서버에 자원을 새로 등록하고자 할 때 사용(혹은 뭘 써야할지 애매할 때 )    
    - `PUT` : 서버의 자원을 요청에 들어있는 자원으로 치환하고자 할 때 => `전체 수정`  
    - `PATCH` : 서버 자원의 일부만 수정하고자 할 때 => `부분수정`
    - `DELETE` : 서버의 자원을 삭제하고자 할 때 

### HTTP 프로토콜 
1. 클라이언트가 누구든 서버와 HTTP 프로토콜로 소통 가능 
    * IOS, 안드로이드, 웹이 모두 같은 주소로 요청을 보낼 수 있음
    * 서버와 클라이언트의 분리 
1. RESTFul
    * REST API를 사용한 주소 체계를 이용하는 서버 
    * GET /user는 사용자를 조회하는 요청, POST /user는 사용자를 등록하는 요청 

### REST 서버 만들기
1. GitHub 저장소 : https://github.com/zerocho/nodejs-book) `ch4`소스 참고 
1. restServer.js에 주목 
    * GET 메서드에서 /, /about요청 주소는 페이지를 요청하는 것이므로 HTML 파일을 읽어서 전송합니다. AJAX 요청을 처리하는 /users에서는 users데이터를 전송합니다. JSON형식으로 보내기 위해 JSON.stringify를 해주었습니다. 그 외의 GET요청은 CSS나 JS 파일을 요청하는 것이므로 찾아서 보내주고, 없다면 404 NOT FOUND 에러를 응답합니다. 
    * POST와 PUT메서드는 클라이언트로부터 데이터를 받으므로 특별한 처리가 필요합니다. req.on('data', 콜백)과 req.on('end', 콜백) 부분인데요. 3.6.2절의 버퍼와 스트림에서 배웠던 readStream입니다. readStream으로 요청과 같이 들어오는 요청 본문을 받을 수 있습니다. 단, 문자열이므로 JSON으로 만드는 JSON.parse 과정이 한번 필요합니다 .
    * DELETE 메서드로 요청이 오면 주소에 들어 있는 키에 해당하는 사용자를 제거합니다. 
    * 해당하는 주소가 없을 경우 404 NOT FOUND에러를 응답합니다. 
----------------------------
## 4. POST, PUT, DELETE 요청 보내기 13:23
1. REST 요청 확인하기
    * 개발자도구(F12) Network 탭에서 요청 내용 실시간 확인 가능 
    * Name은 요청주소, Method는 요청 메소드, Status는 HTTP응답코드
    * Protocol은 HTTP프로토콜, Type은 요청종류 (xhr은 AJAX 요청)
----------------------------
## 5. 쿠키 이해하기 20:30

### 쿠키의 필요성 
* 요청에는 한 가지 단점이 있음 
    * 누가 요청을 보냈는지 모름(IP주소와 브라우저 정보 정도만 암)
    * 로그인을 구현하면 됨
    * 쿠키와 세션이 필요 
* 쿠키 : `키=값`의 쌍 
    * name=zerocho 
    * 매 요청마다 서버에 동봉해서 보냄
    * 서버는 쿠키를 읽어 누구인지 파악 
```javascript 
const http = require('http'); 

http.createServer((req, res)=>{
  console.log(req.url, req.headers.cookie); 
  res.writeHead(200, {'Set-Cookie': 'mycookie=test'}); 
  res.end('Hello cookie'); 
})
  .listen(8083, ()=>{
    console.log('8083번 포트에서 서버 대기 중입니다!');
  })
```
### 헤더와 본문 
* http 요청과 응답은 헤더와 본문을 가짐
    * 헤더는 요청 또는 응답에 대한 정보를 가짐
    * 본문은 주고 받는 실제 데이터 
    * 쿠키는 부가적인 정보이므로 헤더에 저장 

### 쿠키로 나를 식별하기 
* 쿠키에 내 정보를 입력 
    * parseCookies : 쿠키 문자열을 객체로 변환
    * 주소가 /login인 경우와 /인 경우로 나뉨
    * /login인 경우 쿼리스트링으로 온 이름을 쿠키로 저장
    * 그외의 경우 쿠키가 있는지 없는지 판단
        * 있으면 환영인사
        * 없으면 로그인 페이지로 리다이렉트

### 쿠키 옵션 
* Set-Cookie 시 다양한 옵션이 있음 
    * 쿠키명= 쿠키값 : 기본적인 쿠키의 값입니다. mycookie=test또는 name=zerocho같이 설정합니다. 
    * Expires=날짜:만료기한입니다. 이 기한이 지나면 쿠키가 제거됩니다. 기본값은 클라이언트가 종료될 때 까지입니다. 
    * Max-age=초:Expires와 비슷하지만 날짜 대신 초를 입력할 수 있습니다. 해당 초가 지나면 쿠키가 제거됩니다. Expires보다 우선합니다. 
    * Domain=도메인명: 쿠키가 전송될 때 도메인을 특정할 수 있습니다. 기본값은 현재 도메인입니다. 
    * Path=URL : 쿠키가 전송될 url을 특정할 수 있습니다. 기본값은 '/'이고 이 경우 모든url에서 쿠키를 전송할 수 있습니다. 
    * Secure: https인 경우에만 쿠키가 전송됩니다. 
    * HttpOnly : 설정시 자바스크립트에서 쿠키에 접근할 수 없습니다. 쿠키 조작을 방지하기 위해 설정하는 것이 좋습니다. 
----------------------------
## 6. 세션 사용하기 06:37
중요한 정보는 서버에 들고, 브라우저에서는 그 정보를 알 수 있는 암호화된 키만 저장하고, 브라우저에서 그 정보에 접근할 수 없도록 (세션)

### 세션 사용하기 
* 쿠키의 정보는 노출되고 수정되는 위험이 있음 
    * 중요한 정보는 서버에서 관리하고 클라이언트에는 세션키만 제공
    * 서버에 세션객체(Session)생성 후, uniqueInt(키)를 만들어 속성명으로 사용
    * 속성 값에 정보 저장하고 uniqueInt를 클라이언트에 보냄
    

----------------------------
## 7. https, http2  07:22
----------------------------
## 8. cluster 10:37 
----------------------------