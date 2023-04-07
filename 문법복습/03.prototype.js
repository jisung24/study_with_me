"use strict";
// Q1) 클래스가 자바스크립트에는 없다. => 객체를 찍어내는 방법은?
// ❗️ 함수를 활용해서 class를 흉내낸다 ❗️
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }
function Person(name) {
  // arrow를 사용하면 this( ❌ )
  this.name = name;
}
const jisung = new Person("지성");
// 자 함수를 호출하는데 new는 왜 붙였지?
// const jisung = person(); return값이 들어가야 하는데...!
// 이런식으로 함수를 사용해서 class를 흉내낼 수 있어!

function add(number) {
  return number || 0;
}
const add1 = add(); // 0이 return값으로 들어감.!

// Q2) 함수에 return값이 없는데 어떻게 값이 나오는 지!
// 함수 + new가 만나면 자바스크립트에서 신기한 일 들이 일어남.
// 👉 새로운 빈 객체를 new가 생성해줌

function empty() {
  // new의 빈 객체는 this에 할당이 돼!
  // 그럼 {}에 name과 me라는 속성을 추가해주는 형식으로!
  // 그리구 그 채워진 객체가 return된다.
  this.name = "지성";
  this.me = "dwdwadaw";
}

let hello = new empty();
console.log(hello);

// 즉 객체를 채워서 return해주는 거!

// 클래스는 객체를 만들어주는 기계 => 따라서 객체를 return해주는 함수!
class Me {
  constructor() {
    // 기초 공사!
    this.arr = [];
  }
}
let me = new Me();
console.log(me);

// 👉 Q3) 복사 없이 상속을 수행할 수 있는 방법 ( 자바스크립트에서는 ❌ )
// - 원래는 부모 class의 내용이 자식 class에 그대로 복사돼서 반영된다.
// - 마치 객체 복사해서 합치듯이...
{
  let obj1 = {
    name: "지성",
    age: 26,
  };
  let obj2 = { ...obj1, copy: "dddd" };
  //   let obj2 = JSON.parse(JSON.stringify(obj1));
  // 처럼 class도 객체를 return하는 함수니까 객체 자체가 복사되는 거!
  // class는 빈 객체에 값을 계속 채워나가는 형태!
}

// 자바스크립트에서는 연결을 이용한다.
// __proto__ : 객체와 객체를 연결하는 Link
// 모든 생성된 객체는 __proto__라는 속성을 지님
// 그래서 객체의 속성을 찾는데, 객체가 갖고 있으면,
// 그냥 출력을 해 주고,
// 없다면, __proto__ 에 들어가서 찾는다.

// 우리는 arr = []도 역시 객체
// arr.map은 우리가 속성에 정의 안 해놨는데, __proto__에서 찾아서 실행!
{
  let obj = {
    name: "지성",
    age: 26,
  };
  console.log(obj.addwdfges); // undefined!
}

{
  // prototype :
}
