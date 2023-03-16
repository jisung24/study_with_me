// let combinations = (arr, number) => {
//   if (number === 1) return arr.map((v) => [v]); // 각각 원소로 만들어준다.

//   let result = [];
//   arr.forEach((value, index, origin) => {
//     let fixed = value;
//     let rest = origin.slice(index + 1);
//     // 이제 나머지에서 조합을 구한다..!
//     let combin = combinations(rest, number - 1); // fixed가 1개를 먹고있기 때문이다.
//     // 이제 fixed랑 붙인다...!
//     let attach = combin.map((v) => [fixed, ...v]);

//     result.push(...attach);
//   });
//   return result;
// };

// console.log(combinations([5, 6, 7, 8, 9], 3));

// 배열이 주어졌을 때 무조건 3개를 골라서 그 합이 0인 개수를 구하자..!
