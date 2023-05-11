"use strict";
// 2차원 배열!
{
  let arr = new Array(3).fill([1, 2, 3]); // 배열 안에 fill로 원소를 채워준다.!

  let arr2 = new Array(8).fill([1]);
  console.log(arr);
  console.log(arr2);

  const add = (num1 = 0, num2 = 0) => num1 + num2;
  console.log(add());
  console.log(add(1));
  console.log(add(2, 3));

  const add2 = (num1, num2) => num1 + num2 || 0;
  console.log(add2()); // 아무것도 입력받지 못 했을 때 undefined를 출력해주는 단축평가 문법도 존재!
}
