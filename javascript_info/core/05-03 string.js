// 첫 글자를 대문자로 변경하기
// 중요도: 5
// str의 첫 글자를 대문자로 바꿔 반환하는 함수, ucFirst(str)를 만들어보세요. 함수 실행 결과는 아래 예시를 충족해야 합니다.


function ucFirst(str){
    console.log(str[0].toUpperCase() +str.substring(1, str.length));
    return str[0].toUpperCase() +str.substring(1, str.length);

}

//console.log(ucFirst("john") == "John");

// function ucFirst(str) {
//     if (!str) return str;
  
//     return str[0].toUpperCase() + str.slice(1);
//   }
  
//   alert( ucFirst("john") ); // John


// 스팸 문자열 걸러내기
// 중요도: 5
// str에 'viagra’나 'XXX’라는 문자열이 있으면 true를 반환해주는 함수 checkSpam(str)을 만들어보세요. 해당 문자열이 없으면 false를 반환하면 됩니다.

// 함수는 대·소문자 관계없이 해당 단어를 걸러주어야 합니다.

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false

function checkSpam(Str){
    //console.log(Str.toLowerCase().indexOf('xxx') > -1 );
    if(Str.toLowerCase().indexOf('xxx') > -1){
        console.log(`사용할 수 없는 문자가 있습니다."xxx" `); 
        return false;
    }
    if(Str.toLowerCase().indexOf('viagra') > -1){
        console.log(`사용할 수 없는 문자가 있습니다."viagra" `); 
        return false;
    }
    return true;
}

// function checkSpam(str) {
//     let lowerStr = str.toLowerCase();
  
//     return lowerStr.includes('viagra') || lowerStr.includes('xxx');
//   }


// 문자열 줄이기
// 중요도: 5
// str의 길이를 확인하고, 최대 길이 maxlength를 초과하는 경우 str의 끝을 생략 부호 ("…")로 대체해주는 함수 truncate(str, maxlength)를 만들어봅시다. 새로 만든 문자열의 길이는 maxlength가 되어야 합니다.

// 함수의 반환 값은 원하는 길이로 줄여진 문자열이 되어야 합니다.

 

// truncate("What I'd like to tell on this topic is:", 20) = "What I'd like to te…"

// truncate("Hi everyone!", 20) = "Hi everyone!"

// console.log(truncate("Hi everyone!", 20)) ;
// console.log(truncate("What I'd like to tell on this topic is:", 20)) ;
function truncate(str, maxlength){
    if(str.length <= maxlength){
        return str; 
    } 
    else{
        return str.substring(0, maxlength)+'…' ;
    }

}

// function truncate(str, maxlength) {
//     return (str.length > maxlength) ?
//       str.slice(0, maxlength - 1) + '…' : str;
//   }


// 숫자만 추출하기
// 중요도: 4
// 달러 표시가 먼저 나오고 그 뒤에 숫자가 나오는 문자열 "$120"가 있다고 가정해 봅시다.

// 위와 같은 문자열에서 숫자만 뽑아내는 함수 extractCurrencyValue(str)를 작성해 봅시다.

// 실행 결과는 아래와 같아야 합니다.

// alert( extractCurrencyValue('$120') === 120 ); 

function extractCurrencyValue(str){
    
    let pos =0;
    let tempStr = "";
    do {  
        // console.log(pos, str.length); 
        // console.log(pos,str.charAt(pos)); 
        // console.log(isNaN(+str.charAt(pos)))
        if(!isNaN(+str.charAt(pos))){
            tempStr += str.charAt(pos);
        } 
        pos++;
    } while (pos < str.length);
    return +tempStr;
}

// function extractCurrencyValue(str) {
//     return +str.slice(1);
//   }
  
console.log(extractCurrencyValue('$aaa120'));