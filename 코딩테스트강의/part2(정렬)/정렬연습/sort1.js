// sort()
// ⭐️ 1. 숫자 정렬 ⭐️
{
  let arr = [10, 20, 1, 224, 2, 227, 15, 4];
  console.log(arr.sort()); // [ 1, 10, 15, 20, 22, 4 ]

  // 분명 숫자 크기대로 정렬이 되지 않고, 앞에서부터 정렬이 됨
  // sort는 저 배열 즉, 정렬대상을 문자열로 보기 때문이다.
}

{
  // sort의 원리
  // 양수면 바꾸고, 음수면 위치를 바꾸지 않고 그대로 간다.
  let nums = [1, 4, 10, 33, 7, 22];
  let copy = [...nums];

  // 👉 오름차순 : 앞에 값이 더 작아야 함
  let sortedNums = nums.sort((a, b) => {
    return a <= b ? -1 : 1;
  });
  console.log(sortedNums);

  // 👉 내림차순
  let decSort = copy.sort((a, b) => {
    return a > b ? -1 : 1;
    // 클 땐, 바꾸지 않고, 아니라면 바꾼다.
    // 만약 같다면 그냥 그대로 둔다(굳이 작업을 1번 더 시키지마)
  });
  console.log(decSort);
}

// ⭐️ 2. 영어 스펠링 정렬 ⭐️
{
  let animals = [
    { name: "dog" },
    { name: "tiger" },
    { name: "elephant" },
    { name: "lion" },
    { name: "graffe" },
    { name: "mouse" },
  ];

  let sortAnimalsName = animals.sort((a, b) => {
    return a.name > b.name ? 1 : -1;
    // 내림차순
  });
  console.log(sortAnimalsName);

  // ⭐️ 3. 한글 정렬 ⭐️
  let names = ["김지성", "이재혁", "김지선", "조홍래"];
  let sortNames = names.sort((a, b) => {
    return a > b ? 1 : -1;
    // 무조건 이런식으로 정렬 해줘야 한다.
    // 모든 정렬에 다 이걸 적용해보자..!
    // a - b로 하면 이건 문자열 정렬이 안 돼!
    // 그냥 무조건 저렇게 정렬하면 돼!!!
  });
  console.log(sortNames);
}

// 🔴 정리 🔴
// 조건은 다양하지만, return을 저런식으로 해 주면,
// 모두 정렬이 잘 된다...!
// 그니까 조건을 잘 살펴보는 것이 중요하다.
// 숫자같은 경우엔 어떤 조건일 때 어떤 수가 클 때 1 -1 이런식으로..!

// 문제
// 프로그래머스 가장 큰 수!

// 1. 숫자 앞 자리로 먼저 내림차순 정렬..!
let numbers = [3, 30, 34, 5, 9];
// 지금 해야 할 것들은
// 숫자를 이어 붙이는거야...
// 9 5 등등은 사실 앞 자리로 비교하는 거 알겠는데...

// 앞 자리가 같을 때

// 3 30끼리는 어떻게 비교해야 할 까?
// 1. 문자열을 늘려준다.
// 2. 330 - 303 했을 때 양수이면... 자리 그대로
// 음수이면,,,

// 3과 30을 비교하기 3이 더 앞으로 가야 돼..!

// 이어붙일 수 있는 가장 큰 수... => 그럼 숫자를 이어붙이는 걸 생각해야 돼!!
// [5, 30, 3] => 5330
// 이어붙이는 한에서 30 3정렬
// 303 vs 330

{
  let arr = [30, 3, 5];
  let sort = arr
    .map(String)
    .sort((a, b) => {
      return a + b - (b + a) > 0 ? -1 : 1;
    })
    .join("");

  console.log(sort); // 5330 출력..!
}
