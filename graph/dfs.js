let input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let [node, edge] = input[0].split(" ").map(Number);
console.log(node, edge);
