'use strict';

let str = "hello my name is jisung!";

// ❗️문자열은 수정이 불가능하다❗️ 
// ✨특정 문자에 접근하기 
// -1) idx로 접근 : 문자열이 없다면 undefined
// -2) charAt(idx) : 문자열이 없다면 ''을 return 

    let result = str.charAt(1000) || 'hello';
    // 빈문자열은 false이다. 

    console.log(result);
// ✨for..of로 문자열 모든 value에 접근하기! 

// ❗️문자열은 절대 값을 바꿀 수 없다❗️
// => 바꾸려면 새로운 문자열을 만든다음 할당한다. 
let str2 = "hi";
str = str2 + ' gogo'; // 재할당한다!! 
// 기존 주소값의 문자열은 못 바꾸니까... 
// 새로운 메모리에다가 재할당을 해서 새로운 값을 넣어주자! 
console.log(str);

// 즉, 바꾸려면 새로운 메모리에 재할당을 해주자!!!!! 

// ⭐️ 문자열 함수 ⭐️ 
// -1) str.length : 문자열 길이(즉, 문자 개수)
    let str3 = "dwdwdwdw";
    console.log(str3.length);
    let str4 = '';
    for(let i=0; i<str3.length; i++){
        i === 0 && str3[i].toUpperCase();
        str4 += str3[i];
    }
    console.log(str4);
// -2) 특정 위치 접근 : 배열 idx || charAt()

// -3) str.toUpperCase(), str.toLowerCase() : 대소문자로 바꾸기.

// -4) str.indexOf(문자) : 몇 번째 idx인지 return 


// 배열은 push 문자열은  += 
let hello = "I love you";
let num1 = 3; 
let num2 = 6;
// idx number끼리 바꾸자...! 
let newArr = '';
for(let i = 0; i < hello.length; i++) {
    if(i === num1) {
        newArr += hello[num2];
    }
    else if(i === num2) {
        newArr += hello[num1];
    }else {
        newArr += hello[i];
    }
}
console.log(newArr);