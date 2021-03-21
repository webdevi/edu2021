function sum(a, b){
    return a+b;
}

// console.log(sum(1, 2 ,3, 4, 5, 6));


function sum2(...args){
    let sum = 0 ;

    for (let arg of args)  sum += arg; 
    return sum;
}

// console.log(sum2(1, 2 ,3, 4, 5, 6));
// console.log(sum2(1, 2 ,3, 4, 5, 6, 7, 8, 9));



function showName(firstname , lastname, ... titles){
    console.log(firstname + ' ' + lastname ); 

    console.log(titles[0]);
    console.log(titles[1]);
    console.log(titles.length);
}

//showName("Julius", "caesar", "Consul", "Imperator");



function showName2() {
    console.log( arguments.length );
    console.log( arguments[0] );
    console.log( arguments[1] );
  
    // arguments는 이터러블 객체이기 때문에
    // for(let arg of arguments) alert(arg); 를 사용해 인수를 나열할 수 있습니다.
  }
  showName2("Julius", "Caesar");