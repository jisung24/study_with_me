// 5
// 1 3 8 -2 2

// 1. 산술평균 : 그냥 평균 (소수점 첫 째 자리에서 반올림한다) => 소수부분이 없겠네

// 2. 중앙값 : 가장 중앙에 위치하는 값 (N은 무조건 홀수겠네)

// ⭐️ 3. 최빈값 : N개의 수 중 가장 많이 나타나는 값 ⭐️
// ❗️만약 여러개면 key중 2번째로 작은 key를 출력한다(정렬하면 됨)

// 4. 범위 : 최댓값과, 최솟값의 차이

/**
 * 1. 평균 구하기
 * @param {*} arr : 입력받은 배열
 * @returns : 배열의 평균을 소수점 1번째 자리에서 반올림 한 값을 return
 */
let avg = (arr) => {
  return (arr.reduce((acc, cur) => acc + cur) / arr.length).toFixed(0);
  // toFixed가 0이면 소수점 0번째 자리까지 고정해라..! 즉, 1번째에서 반올림해주자..!
};

/**
 * 2. 중앙값 산출 함수
 * @param {*} arr : 입력받은 배열
 * @returns : 배열의 중앙값을 retur
 */
let printCenterValue = (arr) => {
  return arr.sort((a, b) => {
    return a > b ? 1 : -1;
  })[Math.floor(arr.length / 2)];
  // 내림차순 정렬 후, 중앙값 산출!
};

/**
 * 3. 범위(최댓값과 최솟값의 차이)
 * @param {*} arr : 입력받은 배열
 * @returns : 최댓값과 최솟값을 구해 빼준다.
 */
let range = (arr) => {
  return Math.max(...arr) - Math.min(...arr);
};

let often = (arr) => {
  let value = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in value) {
      // 나왔다면 +=1 해줌
      value[arr[i]] += 1;
    } else {
      // 처음 나왔다면 1로 초기화
      value[arr[i]] = 1;
    }
  }
  // 가장 많이 나온 key를 출력한다...!
  let values = Object.values(value);
  let maxFre = Math.max(...values); // 가장 많이 나온 표...!

  let findKey = Object.keys(value).filter((ele) => value[ele] === maxFre);
  //   return values;
  return findKey.length === 1
    ? findKey[0]
    : findKey.sort((a, b) => {
        return a > b ? 1 : -1; // 오름차순 정렬 후,,,!
      })[1]; // index 1번이 2번째 값이다.
  //   return values;
  //   return value;
};

// 객체 value로 key찾기..!
let findKey = console.log(often([1, 3, 8, -2, 2]));
