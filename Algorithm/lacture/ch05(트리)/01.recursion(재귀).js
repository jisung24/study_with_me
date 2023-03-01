"use strict";
// return 할 때 자기 자신을 호출하는 함수...!

let faactorial = (n) => {
  if (n === 1) {
    return 1;
  } else {
    return n * faactorial(n - 1);
  }
};

console.log(faactorial(4));

// ❗️작동하는 방식❗️
// 1. 처음에 4가 인자로 들어간다.
// return 4 * factorial(3) 을 호출...!
// 4 * 6;

// 3이 인자로 들어감
// return 3 * factorial(2) 가 2 * factorial(1) 니까.. 결과로 3 * 2 = 6

// return 2 * factorial(1); => 2가 되고....

// factorial(1)은 1이야!

//

// 결과적으로
// 4 * factorial(3)(3 * factorial(2)(2 * factorial(1))  )
// 4 * 3 * 2 * 1;

// ❗️나 자신을 호출해도 결국...n이 1까지 내려감 => 그제서야 숫자로 싹 바뀜❗️

// ⭐️피보나치 : 첫 째 둘 째 항이 1이고 그 뒤에 모든 항들은 바로 앞 두 항의 합이다.
let fibonacci = (n) => {
  if (n === 1 || n === 2) {
    console.log(`n >> ${n}`);
    return 1;
  } else {
    // 그 나머지 항은...!
    console.log(`n >> ${n}`);
    console.log(fibonacci(n - 1) + fibonacci(n - 2));

    return fibonacci(n - 1) + fibonacci(n - 2);
  }
};

console.log(fibonacci(5));
// f1 => 1
// f2 => 1
// f3 -> f1 + f2
// f4 => f2 + f3
// f5 => f3 + f4 => 즉, 자기 자신을 계속 호출하잖아..!
// 즉, 자기가 계속 호출이 된다...!
// 본인의 함수가 return할 때 또 쓰이면 재귀를 쓰면 된다..!

// ⭐️❗️재귀함수(나 자신을 호출하는 함수) 구성요소❗️⭐️
// 1. 점화식
// -> 나 자신을 호출하는데, 어떤 식으로 나를 호출하는지에 대한 식을 써줌
// -> ✨즉 규칙을 찾아야 해 => 피보나치는 1 2일 땐 1이고 나머지 수에 대해선 무조건 이전 두 항의 합으로 나타낸다.✨
// ex) fibonacci(n - 1) + fibonacci(n - 2);
// ex) n * factorial(n - 1);
// ex) f(n,m) = f(n-1, m-1) + f(n-1,m);

// 2. base case
// 얘기 없이 그냥 점화식만 있으면.. 계속 무한 반복을 돌게 됨.
// 원래 재귀식은 계속 호출하다가 base case를 만나서 실제 값을 반환을 하는 덕분에 실제적인 값이
// 입력이 되면서 끝난다.
// ❗️basecase가 1이다? n >= 1일 가능성 매우 높다❗️ => 그래야 무한루프에서 빠져나옴.

// 팁!! 점화식은 무조건 입력받은 n에서 계속 작아진다.
// 그래야 basecase에 도달하고 결국, 호출을 끝내고 값을 낼 수 있기 때문이다..!

// f4 = f3 * 4
// f3 = f2 * 3
// f2 = f1 * 2
// 여기서 f1은 이제 1 이라는 base case를 만남..!
{
  let factorial = (n) => {
    if (n === 1) return 1;
    else {
      return factorial(n - 1) * n;
      // 이렇게 n에서 점차 basecase로 낮아져야 반복문이 끝나..!
    }
  };

  console.log(factorial(5));
}
