let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
// stack으로 한 번 풀어보자..!
let sum = 0; // 최종 합!!
let oneCount = 0;
for (let i = 0; i < arr.length; i++) {
  // 여기서 중간 합들을 더해서 sum에 더해준다..!
  if (arr[i] === 1) {
    oneCount += 1; // 1의 누적 합을 계속 쌓아준다!
  } else {
    // 반복해서 돌다가 0이 나왔을 때!
    for (let i = 1; i <= oneCount; i++) {
      sum += i; // 3개면 1 2 3이 sum에 더해짐
    }
    oneCount = 0; // 이게 핵심이야!!! => oneCount를 다시 0으로 만들어서 1의 개수를 0부터 다시 셀 수 있게!
  }
}
