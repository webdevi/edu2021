// 함수 표현식을 사용해 만든 아래 함수를 화살표 함수로 바꿔보세요.
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
//   ask(
//     "동의하십니까?", 
//     function() { alert("동의하셨습니다."); },   <---함수 표현식 사용 
//     function() { alert("취소 버튼을 누르셨습니다."); }
//   );
 

ask("동의하십니까?"
    , ()=>alert("동의하셨습니다.")
    , ()=>alert("취소버튼을 누르셨습니다."));