{
  // 없는 숫자 찾기!
  let map = new Map();

  for (let i = 0; i <= 9; i++) {
    map.set(i, false);
  }

  let numbers = [1, 2, 3, 4, 6, 7, 8, 0];

  for (let i = 0; i < numbers.length; i++) {
    map.set(numbers[i], true);
  }
  let answer = [];
  map.forEach((value, key) => {
    if (value === false) {
      answer.push(key);
    }
  });

  console.log(answer.reduce((acc, cur) => acc + cur));
}
