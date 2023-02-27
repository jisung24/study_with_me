"use strict";
// 장르별로 가장 많이 재생된 노래를 2개씩 모아서 출범한다.
// 고유엘범!

let genres = ["classic", "pop", "classic", "classic", "pop"];
let plays = [500, 600, 150, 800, 2500];
let setGenres = Array.from(new Set(genres));
// ["classic", "pop"]
let hash = {};
for (let i = 0; i < genres.length; i++) {
  hash[i] = plays[i];
}
// 각 0 1 2 3 4가 어떤 장르인 지 알아야 해...!

let genHash = {};
setGenres.forEach((value) => {
  genHash[value] = 0;
});

console.log(genHash);
for (let i = 0; i < genres.length; i++) {
  if (genres[i] in genHash) {
    genHash[genres[i]] += plays[i];
  }
}
console.log(genHash);

let totalPlays = Object.values(genHash).sort((a, b) => b - a); // 3100 1450
// 속성별 1 2 3 등 이런식으로 rank를 정하자...!
console.log(totalPlays);
let keysArr = [];
for (let value of totalPlays) {
  let key = Object.keys(genHash).filter((ele) => genHash[ele] === value);
  keysArr.push(key);
}

console.log(keysArr);
