let factorial = (number) => {
  if (number === 0) return 0;
  if (number === 1 || number === 2) return number;
  else {
    return number * factorial(number - 1);
  }
};

console.log(factorial(4));
// 5! 은 5 * 4!

// 자스 배열 비어있는 지 확인!@
{
  let arr = [];
  if (arr.length) {
    // 양수는 truthy값!
    console.log("dwdwdwd");
  } else {
    console.log("비어있습니다!");
  }
}
