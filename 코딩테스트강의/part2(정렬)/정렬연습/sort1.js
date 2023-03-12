// 값을 바꾸려면.. 무조건 배열로 넘겨줘야 돼..!
// let swap = (arr) => {
//   // 조건은 main에서 따져주고, swap은 무조건 swap만 해주는 단어...!
//   // 그냥 배열 뒤집어주면 됨..!
//   return arr.reverse();
// };

// 2개니까 그냥 배열 뒤집어주면 돼..!
// 스프레드 연산자로 사용하면 돼..!

let arr = [12, 54, 63, 11, 7, 3, 1, 88];
let swap = 0;
let i = 0;

// 결국 모든 수의 위치를 싹 다 바꿔줘야 한다면 버블 정렬의 시간복잡도는 O(N^2)이 된다.
// 따라서 N이 많아질수록 엄청나게 N이 커진다... 시간복잡도상 좋지는 않은 방법!

while (true) {
  console.log(`${i}회차 버블정렬 >> `);
  let swapCnt = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) {
      // 배열 앞 뒤로 비교하기
      swap = arr[i - 1];
      arr[i - 1] = arr[i];
      arr[i] = swap;
      swapCnt += 1;
    } // 버블 정렬이 됐어...!
    // continue 굳이 안 해줘도 돼!
    // 생략 아무것도 조건이 없다는 건 아무짓도 안 한다는 뜻..!
  }
  console.log("이번 버블졍렬 >> ", swapCnt, "번 일어남..!");
  if (swapCnt === 0) {
    break;
  }
  // 어차피 0으로 초기화는 계속 된다..!
  i += 1;
  console.log(arr);
}

console.log(arr);
// 버블 정렬
// 👉 장점
// => 메모리를 초과하지 않고, 그대로 앞 뒤에서만 비교하기 때문에, 메모리가 절약된다.

// 👉 단점
// 시간복잡도가 최대 O(N^2)어서 성능이 매우 떨어진다

// 선택 정렬
// 가장 작은 수와 첫 번째 값을 교채한다
// 그리고 index 0번이 제일 작은 값이니까
// 그 1번부터 끝까지 중에 가장 작은 값과 1번을 교체

// 또 2번을 교체 3번을 교체... 이런시긍로...!

// 삽입 정렬..!
// 각 i를 계속 배열의 맨 앞에서 부터 비교해서 내가 더 작으면 그 앞으로 들어가고 나머지 원소들 뒤로 싹 다 밀어준다.
// {
//   let insertEle = 4;
//   let arr = [32, 17, 6, 47, 100, 22, 58];

//   for (let i = 1; i < arr.length; i++) {
//     // 삽입 검사받을 원소 >>
//     console.log("삽입 검사받을 원소 >> ", arr[i]);

//     for(let j = 0; j < arr.length; j++){
//         if(arr[i] <= arr[j]) {

//         }
//     }
//   }
// }

{
  // index 0번은 정렬되어있다고 가정하고
  // 1번부터 시작한다.
  // 1번이 이제.. 내 왼쪽 값 보다 작으면

  // 내가 왼쪽에 있는 수 보다 커지커나
  // 내 인덱스가 0이 될 때 까지..! (내가 제일 작으면 계속 교체니까...)
  arr = [5, 3, 4, 1, 2];

  for (let i = 1; i < arr.length; i++) {
    console.log("검사해야 할 값 >> ", i, "번쨰 값 >> ", arr[i]);
    // 현재 그 값의 idx
    let idx = i; // 지금 이 i를 계속 -- 하면서 검사해줘야 하는데,
    // 결국 원본을 바꾸면 안 되고.....
    // 오른쪽 값이 더 작고, 0이 아니라면 계속 반복하자..!
    while (arr[idx] < arr[idx - 1] && idx !== 0) {
      // swap하는 코드
      swap = arr[idx];
      arr[idx] = arr[idx - 1];
      arr[idx - 1] = swap;

      console.log("1번 순회 끝남!");
      //   console.log(arr);
      idx -= 1; // 순회가 끝났다면. 다음을 대비해서 -1해준다.
      // 그럼 i는 그대로 유지가 되고 idx만 계속 줄어든다.
    }

    console.log(arr);
  }
}

// 내가 어떤 값을 변경하고 싶을 때..!
// 원본을 유지하면서 그 값을 복사해서 쓰고 싶은 지,
// 원본을 바꿔가면서 코딩을 해야하는 지 무조건 느끼면서 코딩해야 돼!

// 양수인지 확인

console.log(parseInt("-1400") * 2);

let str = "dawdwdawd1141443ee1";
// 그냥 접근하면 안 돼!!

for (let value of str) {
  console.log(Number.isInteger(parseInt(value)));
}

// isInteger은 소수인지 정수인지 구별!
// 숫자인지 문자인지 구별은 Number.integer(parseInt(str)) 하면 돼!
// 어차피 자연수 << 정수이기 때문에
// 자연수도 그냥 Number.isInteger()해주면 돼!!
// 자연수도 정수에 포함이 돼!

console.log(Number.isInteger(1.444)); // 소수여서 false
console.log(Number.isInteger(3333)); // 정수여서 true
