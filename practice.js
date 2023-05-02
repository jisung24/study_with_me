"use strict";
{
  let pickOddNumber = (...numbers) => {
    let answer = [];
    // we can use filter... instead of using answer + push
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 1) answer.push(numbers[i]);
    }

    // return answer.reduce((acc, cur) => acc + cur);
    return numbers.filter((e) => e % 2 === 1);
  };

  console.log(pickOddNumber(1, 2, 3, 4, 5, 6, 7, 8));
}

{
  let arr = ["abxc", "bjij", "pqow", "nmvx"];
  // 각 배열 원소에서 홀수번째만 대문자로....!
  let map = arr.map((v) =>
    v
      .split("")
      .map((e, i) => (i % 2 === 0 ? e.toUpperCase() : e.toLowerCase()))
      .join("")
  );
  console.log(map);
}

{
  // 어떤 원소라고 지정해주기
  let arr = [1, 2, 3, 4, 5];
  let filterOne = arr.filter((e) => e % 2 === 1); // only odd numbers!
  let idx = arr.filter((e, i) => i <= 3); // 4번째 수 까지..!
  console.log(idx);
}
{
  let arr = [];
  for (let i = 0; i <= 5; i++) {
    arr[i] = new Array(4).fill(i); // 4개 넣어준다.!
  }
  console.log(arr);
}

{
  let arr = [10, 20, 30, 40, 50, 60, 70];
  let filter = arr.filter((e) => e >= 60);
  console.log(filter);
}

{
  let arr = [45, 235, 78, 77, 44, 56, 89];
  arr = arr
    .sort((a, b) => {
      if (a < b) return -1;
      else if (a > b) return 1;
    })
    .filter((e) => e >= 50);
  console.log(`정렬하고 >> ${arr}`);
}
