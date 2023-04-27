"use strict";
// AAA => JAZ
// 1번째 글자 => 위로 9칸해서 J만듦
// 2번째 글자 => A니까 이동 안 해도 돼!
// 3번째 글자 => 왼쪽으로 이동(바로 마지막으로 감) + 아래로 한 칸 => 바로 Z로 감

// ABCDEFGHIJKLMNOPQRSTUVWXYZ
// A - N까지는 위로 정방향으로 이동하는게 빨라.
// O - Z까지는 아래로 이동하는 게 빨라.

// AAA => JAN
// 1. 9칸
// 2. 왼쪽으로 이동 => 아래로 13칸(즉, 중간보다 뒤에있으면...! )
// 일단 다음 문자를 확인한다...

// 1. 만약 A에서
console.log("Z".codePointAt(0) - "A".codePointAt(0));
// 이렇게 계산하는거야!
let name = "JEROAN";
