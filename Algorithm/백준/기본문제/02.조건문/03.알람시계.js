'use strict';
const input = require('fs').readFileSync('dev/stdin').toString().split(' ')
.map(Number);

/**
 * 
 * @param {*} hour : 입력받는 시간
 * @param {*} min : 입력받는 분
 */
let alertTimeSetting = (hour, min) => {
    min = min - 45;
    if(min < 0) {
        hour--; // 1시간 떨어뜨린다.
        min += 60 // 60분을 더해준다. 
        // 1시간 떨어뜨렸는데, 만약 시간이 음수라면? 
        hour < 0 && (hour += 24); // 24시간을 더해줌. 
        console.log(hour, min);
    }else{
        console.log(hour, min);
    }
}

let [hour, min] = input;
alertTimeSetting(hour, min);