'use strict';

// 1. 동기 vs 비동기(서버에 요청하는 무거운 작업, 언제 시작할 지 모르는 코드) 
// 원래 자바스크립트는 동기적으로만 코드가 작동한다. 
// 모든 코드가 순서대로만 실행된다. 

// 비동기 : 언제 코드가 실행되는지 알 수 없음. 
// => 예를들면 우리가 click을 해야만 실행되는 코드 
// -> 우리가 click을 언제할지 어떻게 알아..? => 모름 => 즉, 언제 실행될 지 몰라. 
// setTimeout(function, 밀리초)
// => 밀리초 뒤에 우리가 전달한 callback함수가 실행되게하는 코드이다.!

// 비동기 callback함수
console.log(1);
console.log(2);
setTimeout(() => console.log(3), 3000); // 3초뒤에 저 함수 실행. => 브라우져에 요청! => 일단 다음꺼 먼저 하고있어. 
// 3초뒤에 브라우져가 실행해줘야 함 => 3초 지났다~ 저거 해줘! 라고. 
// 이처럼 browser APi는 브라우져한테 실행해달라고 해.
console.log(4); // 일단 아래코드 먼저 진행을 시키고나서 비동기 함수가 실행된다. 

// 동기 callback함수! 
// 즉각적으로 동기적으로 실행하는 동기적인 callback함수가 있음.
// ✨tip : 함수 선언문은 hoisting이 돼서 가장 위로 올라간다✨
let printStr = () => console.log('hello');
let sync = (func) => {
    console.log('이거 먼저 실행');
    func(); // return값이 여기 들어옴.
    console.log('동기적 코드 맞아');
}
console.log(sync(printStr));

let printImmidiately = (callback) => {
    console.log('hello');
    callback();
} 
printImmidiately(() => console.log('동기 callback!'))

let printWithDelay = (callback, timeOut) => {
    // callback(); // 비동기 함수를 써야돼!!
    setTimeout(callback, timeOut);
    console.log('비동기 callback');
}

printWithDelay(() => console.log('hello'), 2000)