// 1. 두 수 중 가장 큰 수를 반환한다.
// - 만약 크기가 같다면 [0]번을 그냥 반환한다.

// [1, 2]
// ❗️ 둘 같은 경우는 제외함 => 같지 않기 때문이다.
// 2가 더 크니까

// 👉 2가 가장 큰 수 일 때..!
// 길이가 0이 될 순 없으니까 1부터 rest까지 반복한다...!!
// 1 + rest > 2 && rest >= 2
// 이 사이에 든 수를 return
// 2

// 👉 rest가 가장 큰 수 일 때!!
// 0이 될 순 없어...!
// rest의 범위 2(둘 중 큰 수) <= rest && rest < 1 + 2;
// 2

// [6, 6] (❗️ 두 수가 같을 때 ❗️)
// 👉 가장 큰 수가 [0] => 즉, 6일 때!
// rest + 6 > 6
// 1 <= rest <= 6
// 1, 2, 3, 4, 5, 6(정삼각형도 가능하다!)

// 👉 나머지가 가장 큰 수 일 때..!
// 6 + 6 > 나머지
// 나머지 >= 6
// 나머지 6 7 8 9 10 11
let solution = (sides) => {
  // 1000이면 10의 3제곱이니까 O(N^2)로 풀 수 있으니까 그냥 정렬을 사용하자..!
  let [bigger, smaller] = sides.sort((a, b) => b - a); // 내림차순으로 정렬!
  let sidesArr = [];

  // bigger가 가장 큰 경우...! (같은 경우에도 포함 돼.,!)
  for (let i = 1; i <= bigger; i++) {
    // 1부터 bigger보단 커져서 안 돼..!
    // smaller + i > bigger
    // i <= bigger
    if (smaller + i > bigger && i <= bigger) {
      sidesArr.push(i); // 가능한 원소를 넣어주자..!
    }
  }

  // 나머지가 가장 큰 경우..!
  // smaller가 가장 크게 되는 경우는 당연히 없어...!
  // 6 6 6보다 크거나 같고...
  for (let i = bigger; i < bigger + smaller; i++) {
    sidesArr.push(i);
  }

  let sidesSet = Array.from(new Set(sidesArr));

  return sidesSet.length;
};
