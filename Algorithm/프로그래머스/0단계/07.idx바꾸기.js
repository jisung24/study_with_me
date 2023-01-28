'use strict';
// my_string	   num1	  num2	result
// "hello"	         1	   2	"hlelo"
// "I love you"	3	   6	"I l veoyou"

// ❗️자바스크립트 문자열은 불변성이라서 값을 막 바꿀 수 없어❗️
// ==> 그래서 새로운 빈 문자열을 만들어서 += 로 계속해서 값을 push해야함.

let newArr = '';
let solution = (my_string, num1, num2) => {
    for(let i=0; i < my_string.length; i++) {
        if(i === num1) {
            newArr += my_string[num2];
        }
        else if(i === num2) {
            newArr += my_string[num1];
        }else {
            newArr += my_string[i];
        }
    }

    return newArr;
}
console.log(solution("I love you", 3, 6));