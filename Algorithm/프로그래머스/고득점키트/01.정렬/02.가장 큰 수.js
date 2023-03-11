"use strict";
// 3 30
// 330  not 303

// 7 79
// 797 즉.. 앞 자리가 같은 수가 있을 때,
// 뒷 자리의 수가 앞 자리보다 크면, 2자릿수가 먼저오고,
// 77 79
// 뒷 자리수랑 비교해봐야지...

// 32 3
// => 332 323
// 3이 앞으로 와야 돼

// 30 3
// 330  => 3이 앞으로 와야 돼

// 35 3
// 353 => 3이 뒤로가야 돼

// 34 38
// 38 34 => 34가 뒤로 가야 돼

// 34 33
// ==> 33이 뒤로 가야 돼...

// 앞 자리가 같으면 무조건 제일 뒷 자리 수랑 비교를해서
// 큰 수가 앞으로...
// 1자리 수면 본인이겠지...!
// arr[arr.length - 1]이랑 비교한다..!


let numbers1 = [770, 340, 7, 5, 9];
let numbers2 = [6, 10, 2];

let solution = (numbers) => {
    let answer = "";
    let sortArr = numbers.sort((a, b) => {
      let aArr = a.toString().split("").map(Number);
      let bArr = b.toString().split("").map(Number);
// 아니 오늘 벌써 목요일이야? 

      if (aArr[0] !== bArr[0]) {
        // 첫 째 자리로 내림차순 정렬!
        return bArr[0] - aArr[0];
      } else {
        // 여기는 처음 값은 무조건 같은 수 들의 비교야...!
        // 길이가 더 긴 게 무조건 큰 수일거아니야...!!
        console.log(aArr);
        console.log(bArr);
        let bigger = aArr.length > bArr.length ? aArr : bArr;
        console.log(`더 큰 수 >> ${bigger}`); // [7, 7, 0]
        // 7까지는 똑같아... 앞 자리!
        // 7767 777
        // 337 32
      }
    });

  return sortArr.join("");
};
console.log(solution(numbers1));

// 770 7
// 7이 앞으로 가.... 2번째 자리 까지 같으니까 마지막이랑 비교를 해...

// 245  24
// 24까지 같으니까... 24랑 5랑 비교를 해...!

// 24577 2434

// 단위가 더 큰 수를 기준으로...
// 값이 달라지는 수가 나올 때 까지 반복문을 돌리다가 달라지는 수가 나오면,, 그 때 그 수랑 비교하는거지..!

// 7 vs 76
let arr = [761, 773, 7, 32, 3];
let sortArr = arr.sort((a, b) => {
  let strA = a.toString().repeat(3);
  let strB = b.toString().repeat(3);

  if (+strA[0] !== +strB[0]) {
    return +strB[0] - +strA[0];
  } else {
    // 첫 번째 수가 같아...
    if (+strA[1] !== +strB[1]) {
      // 2번째 수가 다르다면...!
      return +strB[1] - strA[1];
    } else {
      // 2번째 수가 같다면 세 번째 수...
      return +strB[2] - strA[2];
    }
  }
});

console.log(sortArr);
