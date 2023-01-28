'use strict';
// 1. push : 가장 뒤에 값을 출력한다. <=> unshift : 가장 앞에다가 값을 추가한다. 
// 2. pop : 가장 마지막 item을 제거한다. <=> shift : 가장 앞에값을 제거한다. 
// ==> pop이랑 shift는 삭제한 값을 반환을 해서 그 삭제한 값으로 뭘 하고싶을 때 
// 파라미터로 쓰이기도한다! 

function solution(numbers, direction) {
    direction === "right" ? numbers.unshift(numbers.pop()) : numbers.push(numbers.shift());
    // 얕은 복사라서 원본이 바로 바뀐다. 
    return numbers;
}

let arr = [1,2,3]; 
// 오른쪽 3 1 2 
// 왼쪽 2 3 1 
let shiftArr = (arr, direction) => {
    direction === "right" ? arr.unshift(arr.pop()) : arr.push(arr.shift());
    // callback함수야...
}

function go() {
    return 9;
}

function getNumber(number) {
    return number || (number = 10);
    // number 즉, 파라미터가 undefined나 null이면 number을 10으로 설정해준다!
}
console.log(getNumber(go()));
// 함수속에 또 함수가 인자로 들어간다? ==> callback함수는 아닌거같은데...? 

// 저건 함수의 return값 => 4를 인자로 준거니까 인자로 함수를 준게 아니야!! 
// 함수의 주소값을 넘겨야 실제 callback함수지!!!!! 

function callback1(number, callback) {
    callback(); // 함수 내부에서 호출해주는거야! 
    // 함수 주소값을 받아서 함수 호출을 다른 함수 내에서 해주는거!!! 
}

function callback2() {
    console.log('hello');
}
callback1(4, callback2); // 이런식으로 인자로 전달되는 함수 호출이 저 함수 내부에서 일어나야 callback함수야. 
// 즉 callback2의 호출이 callback함수 안에서 일어나는 거!! 
// 파라미터로 함수의 return값이 들어가는건 그냥 return value가 인자로 전달되는거고, 
// 인자로 함수의 주소값을 넘겨줘야 그게 callback함수가 되는거야! 

// 즉 callback함수란, 다른 함수가 호출될 때 인자로 전달되는 함수를 의미하며,
// 그 함수는 다른 함수 안에서 호출이 된다. 

function printValue(value, callback) {
    console.log(`value >> ${value}`);
    callback(); // 인자로 전달된 이 함수는 printValue내부에서 실행이 돼!
}


// 계산기! 
// 즉 받는 값에 따라서 여러 callback함수 중 하나를 선택할 수 있는거.
let calculation = (operator, plus, minus, mul) => {
    if(operator === "+") {
        plus();
    }else if(operator === "-") {
        minus();
    }else if(operator === "*"){
        mul();
    }else {
        console.log('계산기에 없는 연산자를 입력하셨습니다!!')
    }
}

