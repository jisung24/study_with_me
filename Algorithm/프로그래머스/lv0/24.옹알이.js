"use strict";
let babbling = ["ayaye", "uuuma", "ye", "yemawoo", "ayaa"];
let word = ["aya", "ye", "woo", "ma"];
let count = 0;
// word를 최대 한 개씩 섞어서 만든 단어가 babbling인데 그에 속한 단어를 골라라...!

for (let i = 0; i < babbling.length; i++) {
  console.log(`${i}번쨰 탐색 단어 >> ${babbling[i]}`);

  let newWords = babbling[i];
  for (let j = 0; j < word.length; j++) {
    // 여기서 계속 split을 해준다...! 그래서 만약 빈거면 count++
    // 일단 indexOf로 속해있다면 split을 떄려준다...!! 아니면 continue!
    if (babbling[i].indexOf(word[j]) !== -1) {
      // 속해있다면??
      console.log(word[j]);
      newWords = newWords.split(word[j]).join("").trim();

      console.log(newWords);
    }
  }

  if (newWords.trim().length === 0) {
    // console.log(`${babbling[i]}는 true임!`);
    count++;
  }
}
console.log(count);

// split으로만 한다면 그.. 띄어쓰는 단어들이 마음대로 조합이 됨.

// 완전히 그 문자인지 확인하는 법!!

// 푸는 이론은 맞음!
// 근데 여기서 join('')를 잘 몰랐던 것 같아.
// join('')를 하면 새로운 단어가 조합될 수 있다.
// 그냥 단어를 2번째 5번째 단어가 합쳐질 수 있다는 의미.
// => 이러면 안 된다.
