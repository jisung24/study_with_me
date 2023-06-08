"use strict";
// priorities	location	return
// [2, 1, 3, 2]	2	        1
// [1, 1, 9, 1, 1, 1]	0	  5

let genre = ["classic", "pop", "classic", "classic", "pop"];
let plays = [500, 600, 150, 800, 2500];

const map = new Map();

for (let i = 0; i < genre.length; i++) {
  if (!map.has(genre[i])) map.set(genre[i], [[plays[i], i]]);
  else map.set(genre[i], [...map.get(genre[i]), [plays[i], i]]);
}
let allValues = Array.from(map.values());

for (let i = 0; i < allValues.length; i++) {
  allValues[i].sort((a, b) => {
    if (a[0] > b[0]) return -1;
    else return 1;
  });
}

console.log(allValues);
