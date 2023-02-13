"use strict";
let input = require("fs").readFileSync("dev/stdin").toString();

let countOfSpell = (str, spell) => {
  let value = str.indexOf(spell); // 처음에 찾지?
  let count = 1;
  while (value !== -1) {
    count += 1;
    value = str.indexOf(spell, value + 1);
    // 마지막 넘쳐흐르는거까지 세지더라고...
  }

  return count - 1;
};
console.log(countOfSpell("hellol", "l"));
