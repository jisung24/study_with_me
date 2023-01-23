'use strict';
let [tc, ...restOfMoney] = require('fs').readFileSync('test.txt').toString().trim().split('\n');
console.log(tc, restOfMoney);
let typeOfMoney = restOfMoney.map((value) => +value).sort((a, b) => b - a);
console.log(typeOfMoney)

let [moneyTypeCnt, restMoney] = tc.split(' ').map(value => +value);
// 10 
// restMoney
let totalMoneyCnt = 0;
// for(let i = 0; i < moneyTypeCnt; i++) {
//     if()
// } 도 괜찮지만 for of를 쓰면 훨씬 편하다!
for(let value of typeOfMoney) {
    if(value > restMoney) {
        continue;
    }else { // 4790원 보다 작은 돈으로만 계산할 수 있음.
        // console.log(`========== << ${restMoney}won >> ==========`)
        // console.log(`========== << ${value}won >> ==========`);
        totalMoneyCnt += (Math.floor(restMoney / value)); // 개수! 
        // console.log('돈 사용 개수 >> ', totalMoneyCnt);
        restMoney -= (value * Math.floor(restMoney / value));
        // console.log('남은 돈 >> ', restMoney);
    }
}
console.log(`총 동전 개수 >> ${totalMoneyCnt}`);