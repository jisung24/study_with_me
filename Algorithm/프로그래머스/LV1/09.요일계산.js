"use strict";
// 2016년 1월 1일 금
//
let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
// 이것도 hash로 풀 수 있어...!!!
let startM = 1;
let startD = 1;
// 1월 1일부터 시작...!
let dayCount = 1;
let day = 1;

let a = 5;
let b = 24;
for (let month = 1; month <= a; month++) {
  //   console.log(`이번 달 >> ${month}`);
  //   console.log(`날짜 >> ${dayCount}`);
  if (month < a) {
    // 바로 다음 달 1일로 간다...! 31일만 더해주면 돼!
    // 1월 1일부터 시작이니까...!
    console.log(`달 >> ${month}`);
    switch (month) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        dayCount += 31;
        console.log(`31일 증가함 >> ${dayCount} 지금까지..! ${dayCount}`);
        break;

      case 2:
        dayCount += 29; // 바로 다음달 1일로!
        console.log(`2월임!!! ${dayCount}`);
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        dayCount += 30;
        console.log(`30일 증가함 >> ${dayCount} 지금까지..! ${dayCount}`);
        break;
    }
  } else if (month === a) {
    // 같아졌다면...!
    // 1일부터...!
    dayCount = dayCount + b - 1;
    console.log(`이번 달 >> ${month}`);
    console.log(`날짜 >> ${dayCount}`);
  }
}

console.log((6 + dayCount - 1) % 7);
// 1월 1일부터 시작...!
//
// 7일 후면 index 6 + 14 % 7

// 1월 1일부터 7일 후의 날짜..!
// index 6번이 나와야 해!
// 6 + (7 % days.length)

// 7일 후의 날짜...!

// index 6부터 나왔음...!
