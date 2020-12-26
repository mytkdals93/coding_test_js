import { createInterface } from "readline";
const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log("이름을 입력해 주세요.");

rl.on("line", function (line) {
  console.log(`안녕하세요. 저는 ${line}입니다.`);
  rl.close();
}).on("close", function () {
  process.exit();
});
