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
----------------------------
## 6. 세션 사용하기 06:37
----------------------------
## 7. https, http2  07:22
----------------------------
## 8. cluster 10:37 
----------------------------