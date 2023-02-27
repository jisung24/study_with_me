"use strict";
let str = "tge0a1h205er";
// 정규식 이용해서 숫자만 replace해주자...!

str = str.replace(/[a-z]/g, ""); // 영문자를 빈문자열로 replace한다.
// 그래서 결국 숫자를 제외하고 싹 다 빈문자열로!

console.log(str);

// 01205에서 parseInt하면 앞에 0이 자동으로 빠져!
// 0이 몇 개가 있던간에 싹 다 날아간다.
console.log(parseInt(str));
