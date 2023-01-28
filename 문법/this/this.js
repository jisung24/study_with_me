'use strict';

// this는 함수가 호출할 떄 결정이 된다. 
// 즉, 누가 함수를 호출해줬는가? ❗️모든 함수에 적용된다❗️
// => this는 함수를 호출해준 주체를 의미한다. 
// 객체의 메서드에서의 this는 객체가 되고,
// 일반 함수는 window가 된다. 

// 즉 this란? => 함수를 호출한 친구~~~ 

// this를 전역에서 사용한 경우! 
// window의 프로퍼티 중에 우리가 전역으로 선언한 변수도 당연히 들어가!!! 

// 함수 밖에서 선언된 전역변수는 실제로 => window.변수
// 즉, window의 프로퍼티로 사용됨.

// 전역변수에서 this는 window객체가 call했으니까 this === window맞음. 
console.log(this === window); // true

// ❗️ this를 함수 내부에서 사용한 경우 
// => 전역함수 vs 메서드 
// => 전역함수도 결국 window의 메서드이다! 

let hello = () => {
    console.log(this);
    // ❗️전역함수도 window객체의 메서드이다. 
    // ⭕️ 그래서 전역함수에서 불린 this는 window가 맞다. 
}
hello();

// ⭐️ 전역에서 선언한 모든 변수 함수들은 window의 프로퍼티이다 ⭐️