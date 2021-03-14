// 객체를 JSON으로 바꾼 후 다시 객체로 바꾸기
// 중요도: 5
// user를 JSON 형태의 문자열로 바꾼 다음 이를 다시 객체로 바꾼 후 제2의 변수에 저장해보세요.

// let user = {
//   name: "John Smith",
//   age: 35
// };
let user = {
    name: "John Smith",
    age: 35
  };

let user2 = JSON.parse(JSON.stringify(user));
// console.log(user2);
// console.log(typeof user2);

let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  wife: null
};

let json = JSON.stringify(student);

// console.log(typeof json); // string 문자열이네요!


// 역참조 배제하기
// 중요도: 5
// 순환 참조가 있는 경우 프로퍼티 이름을 사용해 순환 참조를 만드는 프로퍼티를 직렬화에서 배제할 수 있습니다.

// 그런데 이 프로퍼티가 순환참조도 만들면서 일반 프로퍼티 역할을 하는 경우라면 단순히 이런 식으로 직렬화에서 배제할 수 없습니다. 
// 이럴 땐 값을 이용해 해당 프로퍼티를 확인할 수밖에 없습니다.

// meetup을 참조하는 프로퍼티를 제외한 모든 프로퍼티를 직렬화해주는 replacer 함수를 작성해보세요.

let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  occupiedBy: [{name: "John"}, {name: "Alice"}],
  place: room
};

// 순환 참조
room.occupiedBy = meetup;
meetup.self = meetup;

console.log( JSON.stringify(meetup, function replacer(key, value) {
  /* 코드를 작성할 곳 */
  // console.log(`${key} = ${value}`);
  //return (key == "occupiedBy" || key == "self") ? undefined : value;
  return (key != "" && value == meetup) ? undefined : value;  // 정답코드  
    // 순환참조를 배제하기 위해서는 value값을 체크하는 것이 지혜로움 
}));

/* 얼럿창엔 아래와 같은 결과가 출력되어야 합니다.
{
  "title":"Conference",
  "occupiedBy":[{"name":"John"},{"name":"Alice"}],
  "place":{"number":23}
}
*/
