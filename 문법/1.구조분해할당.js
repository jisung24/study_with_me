'use strict';
// 아주아주 중요!! ==> 객체 
// 프로그램 짤 떄 내가 필요한 data를 연관된 data끼리 묶어서 막 데이터가 오간다. 

// 만드는 방법 

// key : value로 이루어져 있음 => 즉, 비슷한 변수끼리 모여있는 걸 뜻 함. 

let cpu = "cpu"
const notebook = {
    // 1. 일반 key선언 
    name : 'm1 mac-pro 14',
    size : 14,
    [cpu] : "m1", // 선언해둔 변수로 key값을 선언하고 싶을 때!
    price : 250,
    "1" : 16, // 변수 이름이 될 수 없는 key name은 문자열로 감싸자! 
    printNotebook() {
        return `${this.name}출력!`
    }
}
console.log(notebook.printNotebook());

// 정리 
// 키 선언 방법 3가지 
// 1. 일반 변수 : naming이 가능하면
// 2. 문자열 : "1"같이 naiming이 불가능하면! 
// 3. ["문자열"] : 어떤 key가 올 지 불분명하거나, 위쪽에 선언된 변수로 적어주고 싶을 때! 

const makeObj = (key, value) => {
    return {
        [key] : value, 
        // 어떤 key가 올 지 모른다면 key를 반드시 3번선언 대괄호로 선언을 해야돼! 
        // !!!!! 반드시 key파라미터 인자로 문자열이 와야 돼! 
    }
} 
console.log(makeObj("name", "지성이가 만든 객체!"));


// 객체에서 function과 arrow function 프로퍼티 어떤게 다른지! 
let obj4 = {
    hello : "안녕!",
    hi : "hellowdwdwd",
    printObj4 : function() {
        // console.log(`function에서의 this >> ${this}`);
        // 객체를 출력할 때 ``방식을 사용하면 출력 안 됨. 
        console.log("function에서의 this >> ", this);
        // function에서의 this >>  {
        //     hello: '안녕!',
        //     hi: 'hellowdwdwd',
        //     printObj4: [Function: printObj4],
        //     printArrow: [Function: printArrow]
        //   }
    },
    printArrow : () => {
        console.log("arrow function에서의 this >> ", this);

    }
}
obj4.printObj4(); // 즉 객체 안에서의 this는 저 객체 자신을 가리킴. 
// this.hello = "안녕" 이렇게 나옴.
obj4.printArrow(); // arrow function은 사용하지 말자!! 



// 구조분해할당!! 

// -1) 객체에서의 구조분해할당 => 말 그대로 객체를 분해해서 따로 저장한다!
let jisung = {
    id : "지성1",
    pw : "ddwdwdw",
    age : 26,
}
let { id, pw, age } = jisung; 
console.log(id, pw, age);

// -2) 배열에서의 구조분해할당 
// - 객체니까 중괄호를 쓴거고 배열에서는 대괄호를 쓰면 됨. 
let ramSize = [8, 16, 32, 64];
let [size8, size16, size32, size64] = ramSize;
console.log(size8, size16, size32, size64);
// 배열의 값을 따로 분리해주고 싶을 때 사용한다!! 
// tip : spread연산자와 같이 사용하기!! 
let [size1, ...size2] = ramSize;
// size1에 1개 담기고 size2에 배열로 담긴다.

let jisungKim = {
    ...jisung, // 원본 객체를 손상시키지 않고 복사해줌! 
    gogo : function() {
        return `${this.id}입니다!`;
    }
}
console.log(jisungKim.gogo()); // 제대로 동작함! 