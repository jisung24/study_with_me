'use strict';
const input = require('fs').readFileSync(0).toString().trim().split('\n')
.map((value) => +value);

let chooseQuadrant = (x, y) => {
    // 참고로 x, y 둘 다 0은 안 된다고 문제에 있음. 
    if((x > 0) && (y > 0)) {
        return 1;
    }else if((x > 0) && (y < 0)) {
        return 4;
    }else if((x < 0) && (y > 0)) {
        return 2;
    }else {
        return 3;
    }
}

let [xDot, yDot] = input; 
console.log(chooseQuadrant(xDot, yDot));

// 입력받는 파일 위치를 dev/stdin으로 했더니 run time error가 뜸. 
// 그래서 0으로 바꿔줌