import { fail } from "assert";
import { createInterface } from "readline";
const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});
const planets = [
  "수성",
  "금성",
  "지구",
  "화성",
  "목성",
  "토성",
  "천왕성",
  "해왕성",
];

rl.on("line", function (line) {
  try {
    let num = parseInt(line);
    if (num == NaN || num < 1 || num > 8) {
      throw new Error("유효하지 않은 숫자");
    }
    console.log("input:", line, planets[num - 1]);
  } catch (error) {
    console.error(error);
  } finally {
    rl.close();
  }
}).on("close", function () {
  process.exit();
});
