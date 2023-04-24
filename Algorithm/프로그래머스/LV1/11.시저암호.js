"use strict";
// 알파벳 증가!
// 아스키코드 => 숫자로 바꾸기

let arr = "z"; // 3씩 증가..!
// 문자를 숫자로 바꾸기
let number = arr.charCodeAt() + 3;
console.log(number);

if ((number >= 65 && number <= 90) || (number >= 97 && number <= 122)) {
  let str = String.fromCharCode(number);
  // 이 범위에 있다면...!
  console.log(str);
} else {
  // 없다면....!
  number -= 26;
  let str = String.fromCharCode(number);
  console.log(str);
}

{
  let s = "z";
  let n = 1;
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") answer += " ";
    else {
      // 빈칸이 아닌 경우...! => 계산한다.
      let number = s[i].charCodeAt() + n; // 4를 더해..!
      if ((number >= 65 && number <= 90) || (number >= 97 && number <= 122)) {
        // 이 사이에 있다면...!
        answer += String.fromCharCode(number);
      } else {
        number -= 26; // 26만큼을 빼준다.
        answer += String.fromCharCode(number);
      }
    }
  }

  console.log(answer);
}

{
  // 콜라문제
  let n = 20;
  let a = 2;
  let b = 1;

  let totalGet = 0;
  let i = 0;
  while (n >= a) {
    // 아 각 단계에서 내가 얻어온 병을 또 구해줘야 돼...!
    let get = 0; // 내가 이번 단계에서 얻어온 병 수!
    get = parseInt(n / a) * b;
    totalGet += get; // 내가 얻어온 총 병의 수..!
    // 나한테 남은 총 병의 수 이제 줄여주자..!
    n = get + (n % a);
    console.log("이제 남은 총 병의 수 >> ", n);
    i += 1;
    if (i === 7) break;
  }

  console.log("totalGet >> ", totalGet);
}

{
  // 가장 가까운 글자.
  let s = "banana";
  let map = new Map();

  //   for(let i = 0; i < s.length; i++) {
  //     if(!map.has(s[i]))
  //   }
  //   map.set(1, 1);
  //   if (map.has(1)) map.set(1, 4);
  //   console.log(map);
}

{
  // 추억점수
  let name = ["may", "kein", "kain", "radi"];
  let yearning = [5, 10, 1, 3];
  let photo = [
    ["may", "kein", "kain", "radi"],
    ["may", "kein", "brin", "deny"],
    ["kon", "kain", "may", "coni"],
  ];

  // 계속 찾는거니까... hash를 사용해보자!
  let map = new Map();
  for (let i = 0; i < name.length; i++) {
    map.set(name[i], yearning[i]);
  }
  let answer = [];

  for (let i = 0; i < photo.length; i++) {
    // 모든 배열을 map돌려주자..!
    let score = photo[i].map((v) => map.get(v) || 0);
    console.log(score);
    answer.push(score.reduce((acc, cur) => acc + cur));
  }

  console.log(answer);
}

{
  // 소수찾기 : 이건 그냥 외우자..!
  // => Math.sqrt(x)까지만 찾아주면 돼!
  function isPrime(number) {
    for (let i = 2; i <= Math.sqrt(number); i++) {
      // 2와 반 사이에서 나눠지는게 1개라도 있으면 안 돼!
      // 왜냐면 소수는 1과 자기 자신으로만 나눠저야 해!
      // 즉, 2와 절반 사이의 수와는 나눠떨어지면 안 돼!
      if (number % i === 0) return false;
    }
    return true;
  }
}

{
  // 명예의 전당
  // 생각보다 차이점이 별로 없다는 걸 알아야 돼...!!!!!
  let k = 3;
  let score = [10, 100, 20, 150, 1, 100, 200];
  let answer = [];
  let rank = []; // 정렬을 해도 상관없는 answer의 복사본...!
  let min = score[0]; // 일단 가장 작은 값...!
  for (let i = 0; i < score.length; i++) {
    rank.push(score[i]);
    rank = rank.sort((a, b) => {
      if (a > b) return -1;
      else if (a < b) return 1;
    });

    if (i < k) {
      answer.push(rank[rank.length - 1]);
    } else {
      // 가장 먼저 하나를 빼준다....!
      rank.pop();
      answer.push(rank[rank.length - 1]);
    }
  }
}

{
}
