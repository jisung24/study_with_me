let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

input = input[0];

solution(input);

function solution(str) {
  let croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

  for (let alphabet of croatia) {
    str = str.split(alphabet).join("Q"); //이 부분이 가장 핵심.
  }
  /* for문 안에서 str이 어떻게 변하는지의 과정.
    ljes=njak
	ljes=njak
	ljes=njak
	ljes=njak
	Qes=njak
	Qes=Qak
	QeQQak
	QeQQak
   */
  console.log(str.length);
}
