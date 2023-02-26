// 1. 순위 매기기
let arr = [
  1, 2, 2, 3, 2, 2, 1, 1, 3, 3, 2, 1, 1, 1, 1, 2, 3, 3, 1, 1, 2, 3, 3, 1, 1, 2,
  2, 3, 3, 1, 2, 3, 1, 4,
];

// 1 2 3의 각각의 순위를 매기자...!!! (❗️동률이 있을 때는 그 만큼 2 3 위가 사라지고 4위가 바로 되는거야...!)
let hash = {};
for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
  hash[i] = 0;
}

for (let i = 0; i < arr.length; i++) {
  if (arr[i] in hash) {
    hash[arr[i]] += 1;
  }
}

// 값들만 가져오기..!
let voteResult = Object.values(hash).sort((a, b) => b - a);
let setVote = Array.from(new Set(voteResult));
console.log(setVote);
let rank = 1;
for (let i = 0; i < setVote.length; i++) {
  let findKey = Object.keys(hash).filter((ele) => hash[ele] === setVote[i]);
  console.log(findKey); // 1    2,3    4

  console.log(`${rank}위 >> ${findKey}    득표수 >> ${setVote[i]}`);

  rank += findKey.length;
}
