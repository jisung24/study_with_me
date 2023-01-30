'use strict';
// chess : 원래 체스에서 필요한 말의 수 
let chess = [1, 1, 2, 2, 2, 8]; // 원래 chess의 개수! 

// input : 지금 내가 갖고있는 말의 수 
let input = require('fs').readFileSync('dev/stdin').toString().split(' ')
.map((value) => +value);

// need : 내가 필요한 혹은 버려야 할 말의 수
// 필요하면 양수, 더 갖고있어서 버려야하면 마이너스로 

// for(let i = 0; i < chess.length; i++) {
    //     // 똑같은 index의 위치의 수를 뺴는 반복문 
    //     need.push(chess[i] - input[i]); // i를 통일 시킨다. 
    // }
    // 혹은 index가 같으면 그냥 map을 써도 돼!!!!

let need = chess.map((value, index) => 
    // 결국 index만 통일시키면 되는거야!
    value - input[index]
)

console.log(need.join(' '));
// 배열을 문자열로 출력을 했어야해서 틀림. (join을 써줌)