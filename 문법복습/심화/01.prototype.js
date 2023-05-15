"use strict";
// prototype은 클래스, 객체의 내용 복사 없이도 상속을 구현할 수 있게 해주는 방법

// ⭐️ 1. 자바스크립트에 클래스는 없다.
// -> 자바스크립트는 실제로 class를 통해서 객체를 찍어내는 기능이 없다.
// => 함수를 사용해서 진행된다.
// ❗️즉, js에서는 함수만을 사용해서 객체를 찍어낸다
{
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    intro() {
      console.log(`제 이름 >> ${this.name} 나이 >> ${this.age}`);
    }
  }
}
{
  // 설명서 : 이 생성자 함수는 클래스 선언으로 변환될 수 있습니다.
  function Person(name, age) {
    this.name = name;
    this.age = age;

    // return이 없다면 this객체가 return된다.
  }

  // 위의 class와 아래 function은 같은 코드이다! => 사실상 함수로 생성되는 객체인데 class인 척 하는 문법을 만든거야!
  let person = new Person("지성", 26);
  // 자 그럼 저 함수는 어떻게 작동을 할까?
  // 👉 우선 함수를 호출할 때 new 연산자를 사용해서 호출한다.
  // 👉 new 연산자가 새로운 🔴this라는 빈 객체🔴를 메모리 상에 생성한다.
  // 👉 이후 this.name, this.age로 this라는 빈 객체를 하나씩 채워나가는 거!

  // ✨ 결론, new를 사용하면 this라는 빈 객체가 생성되고, 저 this를 하나씩 채워나간다.
  // ✨ 이렇게 해서 return이 없다면 this자체가 return되게 된다.
  // 결론! => 자바스크립트에서 객체 생성은 그냥 this안에서 하나씩 속성을 채워나가는 과정임!
}

{
  function Notebook(name, price) {
    this.name = name;
    this.price = price;
    // return이 없다면 this return!
    // 즉, 객체를 자동으로 return 해서 mac이란 변수안에 넣어준다.
  }

  const mac = new Notebook("mac pro", 200);
  // mac안에는 this객체가 들어가게 된다!
  console.log(mac);
}

{
  // 상속 : 자바스크립트에서는 연결하는 의미의 상속을 사용한다.
  // .__proto__ 라는 속성을 사용하는데,
  // 따라서 모든 객체는 전부 저 속성을 갖고있다.

  
}
