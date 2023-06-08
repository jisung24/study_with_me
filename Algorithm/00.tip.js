"use strict";

// call by reference

// call by value

// 종류
// var let const => 변수 선언 키워드
// function => 함수 선언 키워드
// 선언!! => 메모리에 알려주는거..! => 이런 이름의 변수나 함수를 사용할 것.!

// a = 4; // 할당

//
{
  function printNumber(arr) {
    // Ox111
    arr = [199, 9, 9, 9]; // Ox222
  }

  // let real = 5; // 5 => 인자 (옷)
  let arr = [1, 2, 3, 4]; // (주소값)
  console.log(printNumber(arr)); // 함수호출
  console.log(arr); // 원본
  // 파라미터 :
  // 인자 :

  // call by value : 값을
  // call by refer

  // 메모리 ㅁㅁㅁㅁ => 값 숫자가
  // 값, 주소값. ㅈ
}

{
  // 인자로 값이 call
  // 값 자체를 새로 복사해서 따로 보는건지.
  // 주소값 위치 자체를 공유를 해서 2명이서 1개의 옷을 나눠갖는..
  // 객체가 아닌 값
  // 객체
}

{
  //
}
