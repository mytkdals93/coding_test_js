const num = ["7", "2"];

let val1 = Math.floor(parseInt(num[0]) / parseInt(num[1]));
let val2 = Math.floor(parseInt(num[0]) % parseInt(num[1]));

console.log(`몫: ${val1}, 나머지 ${val2}`);
