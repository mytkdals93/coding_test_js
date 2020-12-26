import { createInterface } from "readline";
const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  try {
    let num = parseInt(line);
    if (num == NaN || num < 0) {
      throw new Error("유효하지 않은 숫자");
    }
    if (num % 3 == 0) {
      console.log("짝");
    } else {
      console.log(num);
    }
  } catch (error) {
    console.error(error);
  } finally {
    rl.close();
  }
}).on("close", function () {
  process.exit();
});
