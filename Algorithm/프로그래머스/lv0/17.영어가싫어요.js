let str = "onetwothreefourfivesixseveneightnine";
let eng = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

// str에서 그대로 바꿔주면 돼...!!!
eng.forEach((value, index) => {
  // zero , 0
  console.log(value, index);
  str = str.replace(value, index);

  console.log(str);
});
