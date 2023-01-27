'use strict';

// promise를 리턴한다. 
// => 서버에 요청하는 무거운 작업을 한 결과와, 서버에서 준 data를 받아온다! 
// 성공했을 시 resolve에다가 값을 주는데 이게 return값이고 
// then함수를 이용해서 꺼내와야한다. 

// 즉, promise를 return하는 함수는 return값을 resolve안에 넣어두고있고,
// then으로 꺼내줘야한다. 
// let user = {
//     name : '지성',
//     age : 26,
// }
// let asyncPromise = () => {
//     return new Promise((resolve, reject) => {
//         return resolve(user);
//         // resolve에다가 user를 받아온다.1!! 
//     })
// }
// asyncPromise() // 이미 promise를 return하는 함수를 call했고, 
// // resolve안에 user가 들어가 있음.
// // 즉 서버는 줬어 값을!!!! 
// .then((value) => console.log(value))
// // 그럼 then을 통해서 값을 받아와야하는거야!


// // async함수 => 무조건 promise resolve값을 return해준다!! 
// let asyncFunction = async() => {
//     return user;
//     // 즉, return값을 then을 이용해서 접근할 수 있다.!!!
// }
// asyncFunction()
// .then((value) => console.log(value))


// let newUser = {
//     isNew : true,
//     contact : {
//         phone : '010-9287-6446',
//         email : 'jisung4012@naver.com'
//     },
//     intro() {
//         return `${this.contact.phone}폰 번호입니다!`
//     },
// }    
// let fetchUser = () => {
//     return new Promise((resolve, reject) => {
//         return resolve(newUser); 
//         // 즉 통신에 성공하면 newUser를 받아오는 함수!!
//     })
// }
// fetchUser().then((value) => console.log(value))

// let newFetchUser = async() => {
//     return newUser; 
//     // 무조건 promise return이니까 resolve(newUser)와 같음.
// }
// newFetchUser().then((value) => console.log(value)) //
// 정리  
// promise : 통신 결과와 값을 받아온다. 
// 값은 resolve안에 있는데, 그 값은 then함수를 통해 접근할 수 있다. 
// 그니까 promise를 return하면 resolve(값)을 딱 생각해!!!!! 
// 저 값을 추출하려면 then을 써야하니까 then을 생각하면 되고,

// function hello1() {
//     return new Promise((resolve, reject) => {
//         return resolve('안녕하세요!');
//     })
// }

// let ramSize = [8, 16, 32];
// // ramSize를 서버에서 받아와서 단축평가 쓰는 코드! => 순서 보장! 

// let ramFetch = () => {
//     return new Promise((resolve, reject) => {
//         resolve(ramSize);
//     })
// }
// ramFetch().then((value) => {
//     return value[0] === 8 && console.log(value[0]);
// }); // ramsize받아옴.

// let ramAwait = async() => {
//     let ramSize = await ramFetch(); // 비동기 함수의 return값을 then을 안 쓰고도 가져옴. 
//     // 즉 저 비동기함수의 then값을 바로 ramSize에다가 넣어줌
//     return ramSize; // promise로 리텅하니까 저 받아온 값을 resolve에다가 넣어줌! 

// }
// let ram2 = async() => {
//     let ramSize = await ramAwait(); // [8, 16, 32];
//     // await뒤에는 promise return함수가 오는데, then을 쓰지않아도 바로 resolve값을 return해줘!
//     return ramSize; // promise에 감싸서.. 즉 resolve안에 있어서,
//     // then으로 접근해야한다!
// }
// console.log(ramAwait().then((value) => console.log(value)));
// console.log(ram2().then((value) => console.log(value)));


// // fetch('data/data.json')
// let getFetch = async() => {
//     let value = await fetch() // fetch에서 resolve로 받아온 값이 value안에 담긴다니까? 
//     return value;
// }


// ❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️ << 2회차 반복 >> ❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️ 
// fetch함수를 통해서 data를 받아오는 코드 한 번 짜보자!
let myData = {
    name : 'jisung',
    email : 'jisung4012@naver.com',
}

function fetchUser() {
    return new Promise((resolve, reject) => {
        return resolve(myData);
    })
}
// promise return함수는 반드시 이렇게 resolve안에 있는 값을 then으로 접근해줘야 돼! 
fetchUser().then((value) => console.log(value));

async function fetchUser2() {
    return myData; // async함수의 return값은 무조건 promise값으로 변해! 
    // 즉, resolve(myData)로 바뀜. 
}

let newFetch = async() => {
    let getMyData = await fetchUser(); // then을 쓰지않아도 
    // await을 쓰게 되면 promise return값을 then을 쓰지 않고도 바로 resolve값이 저장 됨. 
    console.log(getMyData);
}
newFetch();

// 정리 
// 1. promise()
// -> 비동기 함수는 promise를 return해야하고, promise를 return한다는 뜻은 ❗️resolve안에 값이 담긴다❗️
// 근데 resolve안에 있는 값을 then이라는 함수의 콜백함수 파라미터를 통해서 접근할 수 있다. 
// -> catch만으로 error handling이 가능하다! 
// => ❗️단 async await은 error handling을 try-catch로 해야한다.
// 

// 2. async 
// 무조건 프로미스를 return하게 해준다. 
// 즉, resolve(서버에서 받아온 값) 
// 그래서 마찬가지로 then을 사용하면 return값을 알 수 있다. 

// 3. await 
// ❗️async함수 안에서만 사용할 수 있다❗️
// await (promise return하는 함수)
// await 비동기함수이름 => 이렇게 사용되는데, 
// promise를 return하면 보통은 then이렇게 접근하는데, 
// 앞에 await을 붙여주면 then을 사용하지 않아도 저절로 그 값이 return된다.

// let getFetch = await fetch() 면 resolve안에 있는 값이 getFetch로 들어간다.
// 즉, 원래라면 then을 사용해야만 접근할 수 잇는 값을 then을 사용하지 않고, 한 번에 보일 수 있게해준다.


// 에러핸들링 
let getPromise = () => {
    return new Promise((resolve, reject) => {
        return resolve('프로미스 에러핸들링');
    })
}

let getAsync = async() => {
    try{
        let promise = await getPromise(); // resolve안에 있는 것이 담긴다.!! 
        //getPromise의 resolve값이 바로 담긴다.!!!!!!!!!!!! 
        // 즉 무조건 일단 resolve값이 제일 중요해!!!
        return promise;
    }catch(e) {
        return console.log(e); // 실패했을 때! 
    }
}

console.log(getAsync().then((value) => console.log(value)));
