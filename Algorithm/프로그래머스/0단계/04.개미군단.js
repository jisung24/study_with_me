'use strict';
// 그리디. 

// 23을 사냥하러 갈 때 가장 적은 개미를 데려갈 수 있는 방법.
let typeOfAnt = [5, 3, 1];
let needAttack = 23;
let antCnt = 0;
for(let value of typeOfAnt) {
    if(value > needAttack) {
        continue;
    }else {
        // 개미의 공격력이 필요한 전체 공격력보다 작아야 개미 숫자가 늘어남.
        antCnt += Math.floor(needAttack / value); // 개미 수 늘리고.. 
        needAttack -= (value * Math.floor(needAttack / value));
        console.log(`필요한 개미 수 >> ${antCnt}`);
        console.log(`남은 공격력 >> ${needAttack}`);
    }
}