// #1 2016년 a월 b일은 무슨 요일일까요? 

    // ## 나의풀이
    const dayname = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']; 
    const date = (a, b)=>{

      let date1 = new Date('2021', a-1, b); 
      return dayname[date1.getDay()]; 
    }; 
    console.log(date(6,4)); 

    // ## 제로초풀이
    function daynamef(a, b){
      return ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'][new Date('2021', 5, 4).getDay()]; 
    }
    console.log(daynamef(6, 4));


// ## 2 가운데 글자 가져오기
// abcde에서는 c를 가져오고 qwer에서는 we 두 글자를 가져오는 문제입니다.
    function solution2(s) {
      let answer = ''; 
      if(s.length % 2 === 0 ){
          let st = s.length/2-1; 
          let ed = s.length/2+1; 
          answer = s.slice(st, ed);      
      }else{
          let md = (s.length+1)/2-1;
          answer = s[md];  
      }    
      return answer;
    }

    console.log(solution2('abcde'))
    console.log(solution2('qwer'))
    // 제로초 풀이 
    function solution2j(s) {
      return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
    }

    console.log(solution2('abcde'))
    console.log(solution2('qwer'))

    console.log('------------------------------------'); 
    function solution2o(s) {
      let mid = Math.floor(s.length / 2);
      console.log(mid);
      
      if (s % 2 !== 0) {
          return s[mid];
      } else {
          return s.slice(mid - 1, mid + 1);
      }
    }

    console.log(solution2o('abcdeff'))
    console.log(solution2o('qwer'))
