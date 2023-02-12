"use strict";

let s = "1111111";
let newStr = "";
let i = 0;
let zeroCnt = 0; // 0의 개수..!
let count = 0;
while (s !== "1") {
  // 1단계 (0의 개수를 지워주고 지워진 개수만큼 zeroCnt++)
  count++;
  newStr = newStr.replace(newStr, "");

  for (let value of s) {
    if (value === "0") {
      value = value.replace("0", ""); // 비워주겠다..!
      newStr += value;
      zeroCnt += 1; // 0의 개수를 ++해준다.
    } else {
      newStr += value; // 0이 아닐경우 그냥 더해준다...!
    }
  }
  // 2단계
  var decimal = newStr.length; // 6
  var binary = decimal.toString(2); // "110"
  s = s.replace(s, binary);
}
console.log("총 횟수 >> ", count);
console.log(`0의 개수 >> ${zeroCnt}`);
