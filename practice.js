"use strict";
let a = 10;
console.log(a);

{
  /**
   * ⭐️두 수를 더해주는 함수⭐️
   * @param {*} num1 : 첫 번째 숫자
   * @param {*} num2 : 두 번째 숫자
   * @returns : 두 수를 더한 값
   */
  function add(num1, num2) {
    return num1 + num2;
  }

  /**
   * ⭐️ 숫자를 입력받아서 배열로 만들어줌 ⭐️
   * @param  {...any} numbers : 입력받을 숫자들
   * @returns : 숫자들을 배열로 만들어서 return
   */
  let arr = (...numbers) => {
    let nums = numbers;
    return nums;
  };
  console.log(arr(1, 2, 3, 4, 5, 6, 7, 8));
}

{
  // 배열 함수
  // 1. arr.length : 배열의 길이
  {
    let arr = [1, 2, 3];
    console.log(arr.length); // 3
    let arr2 = ["dawdaw", "dawdwadaw", 3, 4, "nba"];
    console.log(arr2.length); // 5
  }

  // ⭐️ 배열 원본을 변경하는 함수 ⭐️
  {
    // 2. push : 배열 맨 뒤에다가 새로운 값 삽입
    let arr = [1, 2, 3];
    arr.push(4); // [1, 2, 3, 4]
    console.log(arr);

    // 3. pop : 배열 맨 뒤 값을 빼고, 그 뺀 값을 return
    arr.pop(); // 4
    console.log(arr); // [1, 2, 3]

    // 4. shift() : 배열 맨 앞의 값을 뺀다.
    arr.shift();
    console.log(arr); // [2, 3]

    // 5. unshift() : 배열 맨 앞에다 값을 추갛나다.
    arr.unshift(111);
    console.log(arr);

    // 6. splice(n, m, 값..들) : index n번부터 m-1번까지 삭제하고, 저 값들을 넣는다.
    let spliceArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    spliceArr.splice(0, 3, "a", "b", "c");

    console.log(spliceArr);

    // 7. reverse() : 원본배열 뒤집어줌
    let reversedArr = [1, 2, 3];
    reversedArr.reverse();
    console.log(reversedArr);

    {
      let newArr = [4, 5, 6, 7];
      // ❗️❗️❗️❗️ let copy = newArr.toReversed(); // 아직 적용 안 됨
      console.log(copy);
    }
    // 8. sort() : 원본을 정렬해줌!
    let sortedArr = [152, 77, 201, 9, 91, 1, 840];
    sortedArr.sort((a, b) => {
      if (a > b) return -1;
      else if (a < b) return 1;
    });

    console.log(sortedArr); // [3, 2, 1]
  }
}
