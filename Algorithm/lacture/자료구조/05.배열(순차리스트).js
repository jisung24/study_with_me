"use strict";
// 자료구조에서 말 하는 배열
// - 동일한 크기의 메모리 공간이 빈틈없이 연속적으로 나열되는 자료구조이다

// javascript에서의 배열
// - 자료들이 여러 type올 수 있어서 크기가 동일하지 않다.
// - 연속적이지 않을 수 있다.

// ❗️ 자바스크립트의 배열은 배열(자료구조에서 말 하는 배열)을 흉내낸 객체이다 ❗️
// 일단은 그냥 배열을 공부한다고 생각을 하자!

// 자료구조 배열의 특징 2가지
// 👉 고정된 저장 공간 => 배열을 선언 할 때 미리 크기를 고정을 해준다.
// -> js, python은 할당 할 때 배열의 크기가 동적으로 늘어나는 dynamic array이다.
// -> 배열의 이름은 배열의 첫 번째 값의 1byte의 주소값이다. (javascript도 마찬가지)

// 👉 연속적
// - ❗️random access가 가능하게 했다❗️
//
let arr = [1, 2, 3, 4];
console.log(arr[3]); // arr은 저 배열의 시작점을 뜻 한다. => 아 저 배열로 가면 되겠구나.
// 근데 [3]이라네 => 저 배열의 시작점에서 3번째 값을 찾으면 되겠구나...!
// 1바이트 만 큼 3번 떨어져있는 원소를 찾으면 돼!
// 이런 뜻이야.
// => 근데 배열은 random access가 있어서, O(1)임! -> 매우 빠름.
// 즉, 배열의 이름이나 변수의 이름은 그 값의 위치를 찾기위해서 쓰인다..!

// Random access
// 랜덤으로 접근하려면 배열의 주소값을 알아야한다.(배열의 이름으로 접근이 가능하다.)
// 배열은 ❗️연속적❗️으로 저장이 되어 있어서 어떤 index에도 즉시 접근이 가능하다.
// 즉 배열의 이름(주소값)을 알면,
// 1번째 index는 메모리 크기 * 1번쨰고,
// 10000번째 index는 메모리 크기 * 10000이다. 이런식으로 바로 접근이 가능해.
// 즉 계산을 바로 한 번만 해도 되니까 상수 시간이 바로 나오는거야!

// 하지만 연결리스트는 index라는 게 없어. 연속적이지 않아서 하나하나 다 다리를 건너줘야 돼!
// 단 연결리스트 같은 경우엔 불연속적이기 때문에, 접근하는데 O(n)이 걸린다.
// 즉, 바로 접근이 불가능하고 head부터 n까지 연산을 해줘야하기 때문이다.
// 그래서 5번째 원소에 단순 보려고 접근을 해도, 5번의 연산이 필요하다.

// static Array한계
// 데이터의 개수가 정해져있는 경우엔 static array가 좋은 방법
// 하지만, size를 모르는 배열을 선언 할 경우, 문제가 발생한다.
// 매 번 큰 size의 배열을 재선언을 하기엔 메모리를 너무 많이 차지해.
// 그래서 나온 자료구조가 dynamic Array이다.
