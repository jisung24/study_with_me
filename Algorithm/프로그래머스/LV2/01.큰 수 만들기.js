'use strict';
// number	    k	return
// "1924"	    2	 "94"          4 2 9 1 // 2자리 ==> 2번째 자리 => idx2번째 부터 끝까지 => 1번째 자리 => idx 첫 번째 자리부터 선택된 숫자 전까지! 

// "1231234"	3	"3234"
// "4177252841"	4	"775841"
let emptyArr = [];
let k = 4;
let number = 4177252841;
let numStr = number.toString().split('').reverse().map(value => +value);
console.log(numStr);
// 처음엔 
// 6자리 수 
// idx 6 - 1번부터 끝까지 

// 5자리 수 
// idx 5 - 1 부터 6번째 수 전까지

