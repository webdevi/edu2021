
// 날짜 생성하기
// 중요도: 5
// 2012년 2월 20일, 오전 3시 12분을 나타내는 Date 객체를 만들어보세요(시간대는 로컬).

// 그리고 alert 함수를 이용해 생성한 객체를 출력하세요.
let t = new Date(2012, 2, 20, 3, 12 );
console.log(t);



// 요일 보여주기
// 중요도: 5
// 날짜를 입력하면 ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’ 형식으로 요일을 보여주는 함수 getWeekDay(date)를 만들어보세요.

// 예시:

// let date = new Date(2012, 0, 3);  // 2012년 1월 3일
// alert( getWeekDay(date) );        // "TU"가 출력되어야 합니다.
// 테스트 코드가 담긴 샌드박스를 열어 정답을 작성해보세요.

let date2 = new Date(2021, 2, 7);  // 2012년 1월 3일
console.log(getWeekDay(date2) );        // "TU"가 출력되어야 합니다.
 
// function getWeekDay(dt){
//     console.log(dt.getDay());
//     let d ;
//     switch (dt.getDay().) {
//         case 0:
//             d = 'SU';
//             break;
//         case 1:
//             d = '‘MO’';
//             break;
//         case 2:
//             d = 'TU';
//             break;
//         case 3:
//             d = 'WE';
//             break;
//         case 4:
//             d = 'TH';
//             break;
//         case 5:
//             d = 'FR';
//             break;
//         case 6:
//             d = 'SA';
//             break;
//     }

//     return d; 
// }

//정답 코드가 지혜롭군.... *** 배우자 
function getWeekDay(date) {
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
  
    return days[date.getDay()];
  }
  

// 유럽 기준 달력
// 중요도: 5
// 유럽국가의 달력은 월요일부터 시작합니다(월요일-1, 화요일-2, … 일요일-7). ‘유럽’ 기준 숫자를 반환해주는 함수 getLocalDay(date)를 만들어보세요.

// let date = new Date(2019, 11, 5);  // 2019년 11월 5일
// alert( getLocalDay(date) );       // 금요일이므로, 5가 출력되어야 함
// 테스트 코드가 담긴 샌드박스를 열어 정답을 작성해보세요.

// 해답
// n일 전 '일' 출력하기
// 중요도: 4
// date를 기준으로 days일 전 '일’을 반환하는 함수 getDateAgo(date, days)를 만들어보세요,

// 오늘이 20일이라면 getDateAgo(new Date(), 1)는 19를, getDateAgo(new Date(), 2)는 18을 반환해야 합니다.

// days가 365일 때도 제대로 동작해야 합니다.

// let date = new Date(2015, 0, 2); // 2015년 1월 2일

// alert( getDateAgo(date, 1) ); // 1, (2015년 1월 1일)
// alert( getDateAgo(date, 2) ); // 31, (2014년 12월 31일)
// alert( getDateAgo(date, 365) ); // 2, (2014년 1월 2일)
// 주의: 함수는 date를 변경하지 않아야 합니다.

// 테스트 코드가 담긴 샌드박스를 열어 정답을 작성해보세요.

// 해답
// 달의 마지막 일
// 중요도: 5
// 특정 달의 마지막 일을 반환하는 함수 getLastDayOfMonth(year, month)를 작성해보세요. 반환 값은 30이나 31, 29(2월), 28(2월)이 될 겁니다.

// 매개변수:

// year – 숫자 4개로 구성된 연(예: 2012)
// month – 월(0부터 11)
// 윤년인 2012년의 2월은 29가 반환되어야 합니다. getLastDayOfMonth(2012, 1) = 29

// 테스트 코드가 담긴 샌드박스를 열어 정답을 작성해보세요.

// 해답
// 몇 초나 지났을까요?
// 중요도: 5
// 오늘 하루가 시작된 이후 몇 초나 지났는지 반환하는 함수 getSecondsToday()를 만들어보세요.

// 현재 시각이 10:00 am이고, 서머타임이 적용되지 않은 경우라면 아래와 같은 결과가 나와야 합니다.

// getSecondsToday() == 36000 // (3600 * 10)
// 주의: 어떤 날이든 함수를 호출했을 때, 원하는 결과가 반환되어야 합니다. '오늘’을 나타내는 값을 하드 코딩하지 마세요.

// 해답
// 몇 초나 남았을까요?
// 중요도: 5
// 오늘 하루가 끝날 때까지 남은 초를 반환해주는 함수 getSecondsToTomorrow()를 만들어보세요.

// 현재 시각이 23:00이라면 아래와 같은 결과가 나와야 합니다.

// getSecondsToTomorrow() == 3600
// 주의: 어떤 날이든 함수를 호출했을 때, 원하는 결과가 반환되어야 합니다. '오늘’을 나타내는 값을 하드 코딩하지 마세요.

// 해답
// 상대 날짜 출력하기
// 중요도: 4
// date를 아래와 같은 형식으로 변경해주는 함수 formatDate(date)를 만들어보세요.

// date가 지금으로부터 1초 미만 전의 날짜를 나타내면 "현재"를 반환해야 합니다.
// 그렇지 않고, date가 지금으로부터 1분 이하 전의 날짜를 나타내면 "n초 전"을 반환해야 합니다.
// 그렇지 않고, date가 지금으로부터 1시간 미만 전의 날짜를 나타내면 "n분 전"을 반환해야 합니다.
// 이 외의 경우는 전체 날짜를 "DD.MM.YY HH:mm"형식("일.월.연 시:분")으로 반환해야 합니다(예시: 31.12.16 10:00).
// 예시:

// alert( formatDate(new Date(new Date - 1)) ); // "현재"

// alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30초 전"

// alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5분 전"

// // 어제를 나타내는 날짜를 "일.월.연 시:분" 포맷으로 출력
// alert( formatDate(new Date(new Date - 86400 * 1000)) );
// 테스트 코드가 담긴 샌드박스를 열어 정답을 작성해보세요.