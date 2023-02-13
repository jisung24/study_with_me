function solution(n) {
  let compositNumberArray = [];
  for (let i = 2; i <= n; i++) {
    // i의 약수 구하는 부분!
    let divisorCount = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        divisorCount++;
      }
    }

    if (divisorCount >= 3) {
      compositNumberArray.push(i);
    }
  }

  return compositNumberArray.length;
}
