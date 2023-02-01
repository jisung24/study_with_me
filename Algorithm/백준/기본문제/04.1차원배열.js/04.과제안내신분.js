'use strict';
const input = require('fs').readFileSync('dev/stdin').toString().split('\n')
.map(Number)
.sort((a,b) => a - b);
let stuCnt = 30; 

// 배열에서 없는 수 찾기! 
// 1. 1부터 30까지 중 없는 수 찾기! 
// 학생 수 만큼 반복문을 돌려서 includes가 false인 것만 return하기!!
let notExistNumber = (didStu) => {
    let didntStu = [];
    for(let i = 1; i <= stuCnt; i++) {
        didStu.includes(i) === false && didntStu.push(i);
    }

    return didntStu.join('\n');
}
console.log(notExistNumber(input));