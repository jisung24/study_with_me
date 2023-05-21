"use strict";
// es6이후 최신 문법

// ⭐️ 1. shorthand property name
{
  const name = "지성";
  const age = 26;
  const jisung = { name, age }; // 속성과 값이 똑같은 변수일 때 한 개만 사용할 수 있다.
}

// ⭐️ 2. 구조분해할당 (descructing assignment)
// - 배열이나 객체에서 값이나 프로퍼티를 분해하여 새로운 변수에 넣어주는 문법
// - 🔴 값을 분리해서 담아주는 방식을 뜻함 🔴
{
  // 👉 Array
  let arr = [1, 2, 3, 4];
  let [a, b, c, d] = [1, 2, 3, 4];
  // 만약 더 적거나 많다면?
  {
    let arr = [1, 2, 3, 4];
    let [a, b] = [1, 2, 3, 4];
    console.log(a, b); // 있는 만큼만 담긴다.!

    let [c, d, e, f, g] = [1, 2, 3, 4]; // 변수가 더 많다면..? undefined!
    console.log(g); // undefined

    let [num1, ...num2] = [1, 2, 3, 4, 5, 6]; // spread연산자와 같이쓰임!
    console.log(num1, num2); //
  }

  // 👉 Object =>
  const jisung = { name: "jisung", age: 26 };
  const { name, age } = jisung; // 왼쪽에 {}가 있으면 구조분해할당, 오른쪽에 {}가 있으면 단축속성!
}

// ⭐️ 3. spread operator
// => 배열이나 객체의 값, 속성값들을 퍼뜨린다.
{
  // ✨ copy : 1차원 깊은 복사 => 2차원은 얕은복사..!
  let arr = [1, 2, 3, 4];
  let copyArr = [...arr]; // 1차원만 깊은 복사...!
  copyArr[2] = 10000;
  console.log(arr, copyArr); // [ 1, 2, 3, 4 ] [ 1, 2, 10000, 4 ]

  let obj = { name: "hello", age: 20 };
  let copyObj = { ...obj, contact: "010-xxxx-xxxx" }; // name: "hello", age: 20를 새로운 {}에 담아준다.
  copyObj.name = "지성!";
  console.log(obj, copyObj);

  // ✨ concatenate : 합치기!
  // 👉 array
  {
    let arr1 = [1, 2, 3];
    let arr2 = [4, 5, 6];
    const arr3 = [...arr1, ...arr2]; // [ 1, 2, 3, 4, 5, 6 ]
    const arr4 = [...arr2, ...arr1]; // [ 4, 5, 6, 1, 2, 3 ]
    console.log(arr3, arr4);
  }

  // 👉 object
  {
    let obj1 = { name: "John", age: 30 };
    let obj2 = { contact: "010-xxxx-xxxx" };
    const obj3 = { ...obj1, ...obj2 };
    console.log(obj3); // { name: 'John', age: 30, contact: '010-xxxx-xxxx' }
  }
}

// ⭐️ 4. default parameters
// 함수를 호출할 때, 파라미터를 인자로 넘겨주지 않으면 원래는 undefined인데, 기본 default값을 undefined말고 다른 값으로 설정해줄 수 있다!
{
  let printUserName = (name = "이름 입력해주세요!") => `${name}`;
  console.log(printUserName("김지성"));
  console.log(printUserName()); // "이름 입력해주세요!"

  // 단축평가로 default값을 설정해줘도 된다!
  // 어차피 입력을 안 받으면 undefined가 되는데,,, 이 때 || 뒤에 "입력해주세요!"를 쓰면 default값 처럼 작동된다.
  let printAge = (age) => age || "입력해주세요!";

  let addNumbers = (num1 = 0, num2 = 0) => num1 + num2;
}

{
  // ⭐️ 5. 단축평가
  let number = 1;
  console.log(number && "참입니다!"); // & 앞이 참이면 뒤에 값을 출력

  let number2 = undefined;
  console.log(number2 || "falsy!"); // || 앞이 falsy면 뒷 값을 출력!

  // ❗️ falsy vs truthy (important!) ❗️
  // falsy values
  // 0, -0, undefined, null, ''(빈 문자열)

  // truthy values
  // - falsy값 이외에 모든 값!
  console.log(!!0); // false
  console.log(!!-0); // false
  console.log(!!undefined); // false
  console.log(!!""); // false
  console.log(!!null); // false
  console.log(!!Infinity); // true
  console.log(!!-Infinity); // true
}

{
  // ⭐️ 6.Template literals
}

{
  // ⭐️ 7. Optional chaining
  // - 주로 2차원 이상의 객체에서 사용됨!
  let obj1 = {
    name: "지성",
    contact: {
      phone: {
        myphone: "010",
      },
    },
  };
  const obj2 = {
    name: "hjello!",
  };
  // console.log(obj2.contact.phone); // 없는 속성을 접근하면
  // TypeError: Cannot read properties of undefined (reading 'phone') Error을 띄움!

  // 1차원 속성이 없으면 undefined를 띄우는데, 2차원 이상은 속성이 없다면 typeError를 띄운다.
  // 그래서 2차원 부터는 error대신 undefined를 띄울 수 있게 optional chaining이라는 문법을 사용한다.
  console.log(obj2?.age?.name); // undefined
  // console.log(obj2.age.name); // typeError (optional chaining을 사용하지 않음!)
}

{
  let printAge = (age) => {
    return age >= 0 ? age : "나이가 음수일 수 없습니다.";
  };

  console.log(printAge(-3));
  console.log(printAge(+3)); // 고의적으로 + 한 번 붙여봄...
  console.log(printAge(+3));
  console.log(printAge(+3));
}

{
  // 1. JAVASCRIPT 문법 (심화)
  // - closure
  // - prototype
  // - this
  // - scope
  // - class
}
