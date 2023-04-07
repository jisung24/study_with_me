ㅍ;

console.log(factorial(4));
// 5! 은 5 * 4!

// 자스 배열 비어있는 지 확인!@
{
  let arr = [];
  if (arr.length) {
    // 양수는 truthy값!
    console.log("dwdwdwd");
  } else {
    console.log("비어있습니다!");
  }
}

// 몇 번 등장하는 지는 map을 사용하면 끝!
let map = new Map();
let s = "fwfwfad";
for (let i = 0; i < s.length; i++) {
  if (map.has(s[i]) === false) {
    // 갖고있지 않다면!
    map.set(s[i], 1);
  } else {
    // 갖고있다면..!
    map.set(s[i], map.get(s[i]) + 1); // 기존 s[i]속성을 +1 해주는 식!
  }
}

map.forEach((value, key) => {
  console.log(value, key);
});

{
  let str = "1001";
  let str2 = "1010";
  console.log(str.toString(2) + str2.toString(2));
  console.log(parseInt(str, 2));
}

{
  // arr에서 서로 다른 n개를 뽑는 경우의 수!

  // 1. arr = [1,2,3,4]면
  // [[1], [2], [3], [4]] 이다.  => map으로 씌워주면 돼!
  let combinations = (arr, n) => {
    // 1개만 뽑는 경우의 수!
    if (n === 1) return arr.map((v) => [v]); // [[1],[2],[3]]

    const result = [];
    // 2개 이상! => 1개를 고정시켜놓을 숫자가 필요해!
    arr.forEach((fixed, idx, arr) => {
      // 각각 해당되는 숫자가 fixed!
      const rest = arr.slice(idx + 1); // 선택한 숫자 이후부터 끝까지
      // 이전 숫자는 신경 안 써줘도 돼! 어차피 해 줌!
      const combis = combinations(rest, n - 1); // 또 나머지 숫자 중 n-1개를 고른다.
      const combine = combis.map((v) => [fixed, ...v]);

      result.push(...combine);
    });

    return result;
  };
}

// let factorial = (number) => {
//     // 무조건 1이상만 들어옴 걱정하지말고!
//     if (number === 1 || number === 2) return number;
//     else {
//         // 다른 숫자라면!
//         return number * factorial(number - 1);
//     }
// }

{
  /**
   * 🔴 중복을 허용하지 않는 조합 🔴
   * @param {*} arr : 선택 할 배열
   * @param {*} n : n개를 뽑는다 (조합 : 13과 31은 같다.)
   * @returns
   */
  let combinations = (arr, n) => {
    // 1개를 선택했을 떄!
    if (n === 1) return arr.map((v) => [v]);

    let answer = []; // 배열을 return함
    arr.forEach((value, index, arr) => {
      // 이미 선택 됨! => 앞에서 부터 그 수를 선택 할 경우의 수를 정함.
      let fixed = value; // 선택 할 원소!
      let rest = arr.slice(index + 1); // 배열을 잘라준다!
      let combi = combinations(rest, n - 1); // 재귀로 호출!
      let combinations = combi.map((v) => [fixed, ...v]); // fixed를 전부 다 넣어준다!
      // [ [1,2], [3,4] ] 이런 느낌...!
      answer.push();
    });
  };
}

{
  let arr = [
    [1, 2],
    [3, 4],
  ];
  console.log(...arr);
}
