'use strict';
// 마찬가지로 또 시계계산.. => 분 먼저 고려한다.!

let input = require('fs').readFileSync('dev/stdin').toString().split('\n');
let [hour, min] = input[0].split(' ') // hour : 입력받는 시간, min : 입력받는 분
.map(Number);
let addedTime = Number(input[1]); // 더해지는 분 


/**
 * 
 * @param {*} hour : 입력받는 시간
 * @param {*} min : 입력받는 분
 * @param {*} addedTime : 더해지는 분
 * @returns : 시간과 분을 배열로 리턴해줌. => 백준에선 join(" ")를 이용해서 문자열로 출력해야함.
 */
let setOvenAlert = (hour, min, addedTime) => {
    if(min + addedTime >= 60) { // 분 + 추가된 분이 60이상이면, 
        let addedHour = Math.floor((min + addedTime) / 60); // 예를들어, 130분이 더해졌어. 
        // 그럼 2시간 10분이지? 2시간은 몫을 정수화시킨 저 코드. 
        // 그러니 2시간을 입력받은 hour에다가 더해줘. 

        min = (min + addedTime) % 60; // 이게 분이 돼! 
        hour += addedHour; // 시간을 더 해주고
        hour > 23 && (hour -= 24); // 만약에 시간이 23시를 넘어가면 기존 시간에서 24시간을 빼줘! 
        //  26시 34시 이런건 없으니까. 
    }else {
        // 분이 60이 안 넘는다면, 분은 그냥 addedTIme에 더해주기만 하면 되고,
        // 시간도 ++를 시켜줄 필요가 없다.  
        min = (min + addedTime);
        hour = hour;
    }

    return [hour, min];
} 

console.log(setOvenAlert(hour, min, addedTime).join(' '));

// tip 
// 값이 ++될 때 마다 반복문을 해주는 방법도 있지만, 
// 그 오르는 값이 한 번에 정해질 수 있다면, 몫, 나머지 연산자를 이용하는 방법도 매우 좋음.
