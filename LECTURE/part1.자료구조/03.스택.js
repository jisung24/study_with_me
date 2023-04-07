"use strict";

// STACK : 사용빈도 매우 높음
// - 나중에 들어온 data가 먼저 처리돼야 하는 자료구조!
// - 🔴 가장 끝 값 만 신경 써주면 돼서, O(1)로 배열로 구현 가능 🔴

// - 뒤로가기 (가장 최근 작업으로 돌아간다.)

{
  // 스택의 여러가지 연산
  let stack = [4, 5, 6, 7, 9, 3, 2];

  // 👉 1.push : stack에 값 넣기
  // ⭐️ O(1) ⭐️
  stack.push(1);

  // 👉 2.pop : stack에서 값 빼기 (가장 마지막 원소만 빼면 된다)
  // O(1)
  console.log(stack.pop()); // 1

  // 👉 3. top : 최상위 원소, 즉, 가장 마지막에 있는 원소를 확인하는 연산!
  console.log(stack[stack.length - 1]);

  // 👉 4. Empty : 스택이 비어있는 지 확인!
  let isEmpty = stack.length === 0 ? "empty" : `길이 >> ${stack.length}`;
  console.log(isEmpty);

  // 거꾸로 복사 한 번 해보자!
  // 🔴 reverse는 원본을 변경하기 때문에, 복사를 따로 해줘야 한다 🔴
  // slice, spread연산자
  let reversed = stack.slice().reverse();
  console.log(reversed, stack);

  let spread = [...stack].reverse();
  console.log(stack, spread);

  
}
