// function reverse(text) {
//   const array = text.split("");
//   for (let i = 0, j = array.length - 1; i < array.length / 2; i++, j--) {
//     let temp = text[i];
//     array[i] = array[j];
//     array[j] = temp;
//   }
//   return array.join("");
// }

// console.log(reverse("꺼꾸로"));

let str = "거꾸로";
console.log(str.split("").reverse().join(""));
