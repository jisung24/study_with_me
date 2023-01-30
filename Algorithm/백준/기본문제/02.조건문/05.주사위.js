'use strict';
const input = require('fs').readFileSync('dev/stdin').toString().split(' ')
.map(Number);

let chooseMoney = (diceNum1, diceNum2, diceNum3) => {
    // let money = 0;
    if((diceNum1 === diceNum2) && (diceNum2 === diceNum3) ) { // 전부 같은 눈일 떄
        return (10000 + diceNum1 * 1000);
    }
    else if((diceNum1 === diceNum2) || (diceNum1 === diceNum3) || (diceNum2 === diceNum3)) {
        if(diceNum1 === diceNum2) {// 1과 2가 같을 때!
            return (1000 + diceNum1 * 100);
        }else if(diceNum2 === diceNum3) { // 2와 3이 같을 떄! 
            return (1000 + diceNum2 * 100);
        }else{// 1과 3이 같을 때
            return (1000 + diceNum3 * 100);
        }
    }else {
        // 셋이 다 다를 때! 
        let arr = [diceNum1, diceNum2, diceNum3];
        let maxValue = Math.max(...arr);
        return maxValue * 100;
    }
}

let [diceNum1, diceNum2, diceNum3] = input;
console.log(chooseMoney(diceNum1, diceNum2, diceNum3));