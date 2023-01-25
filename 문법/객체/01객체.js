'use strict';
// ❗️객체의 필요성❗️
// 브라우져 상에서 javascript를 돌리려면 객체를 무조건 알아야한다. 
// 브라우져 자체가 객체로 이루어져있기 때문이다. 
// 전체가 window > document 이런식으로!

// 그리고 서버 data를 주고 받을 때 객체가 반드시 필요하다.
// 연관된 객체를 key : value식으로 묶어서 여러 데이터를 묶은 데이터타입이다.
// ❗️서랍장을 생각하자❗️

// ✨✨tip✨✨
// => 모든 변수를 서랍장이라고 생각하자 
// => ❗️객체는 여러 서랍장이 뭉쳐있는 하나의 데이터타입❗️

// ⭐️객체 만드는 법(❗️2가지❗️)⭐️
// 1. 객체 리터럴 (✨ 가장 많이 사용됨 ✨)
// => 중괄호를 사용해서 객체를 만드는 방법 

let user = { // 서랍장 2개가 뭉쳐있다고 생각해보자! => 연관된 data를 모아둠.
    name : 'james',
    age : 26,
    isHere : true,
    myGrade : ['a', 'a+', 'c', 'b'],
    contact : { // 서랍장안에 또 서랍장이 존재함.
        phone : '010-9287-6446',
        email : "jisung4012@naver.com",
    },
    "1" : 100, 
}

// 서랍장을 추가, 삭제할 수 있음.
user.addPro = "프로퍼티추가됨";
// 삭제 
delete user.addPro;

// in 연산자로 프로퍼티 존재여부 확인하기! (해당 서랍장이 있는지 확인!)
console.log("isHere" in user); // true
console.log("ages" in user); // false (age는 있지만 ages는 없음)

let value = false;
let value2 = true;
console.log(value || 3); // value가 false면 3
console.log(value2 && 10); // value2가 true면 10

function add(num1, num2) {
    return num2 || 10; // num1이 undefined즉 false라면 10을 출력해줘!
}
console.log(add(10, undefined)); // 10 출력

// ⭐️ for in을 활용해서 객체의 모든 key돌아보기!! 
for(let keys in user) {
    console.log(keys);
}


// 과제 
let users = {
    name : 'John',
    surname : 'Smith',
}
users.name = "Pete";
delete users.surname;
console.log(users);

// 빈 객체인지 확인 
// -1) Object.keys.length === 0 

    let obj1 = {};
    Object.keys(obj1).length === 0 ? console.log('빈객체') : console.log('비어있지않음');
// -2) for..in에서 확인하기
    let keyArr = [];
    for(let keys in obj1) {
        keyArr.push(keys);
    }
    keyArr.length === 0 ? console.log('빈 객체') : console.log('비어있지않음');

    let salaries = {
        John: 100,
        Ann: 160,
        Pete: 130
    }
    console.log(Object.values(salaries).reduce((acc, cur) => acc + cur));

// 객체 함수 
// 1. key값을 배열로 가져오기 
    let obj2 = {
        name : "dwdw",
        age : 26,
        height : 242424,
        weight : 24242,
    }
    let keysArr = Object.keys(obj2);
    console.log(keysArr);
    // for in도 사용가능 

// 2. value값 가져오기 
    let valuesArr = Object.values(obj2);
    console.log(valuesArr);

// 3. [key, value]쌍으로 가져오기! 
    let entriesArr = Object.entries(obj2);
    console.log(entriesArr);
    let key = entriesArr.filter((ele) => {
        return ele[0]
    });
    console.log(key);