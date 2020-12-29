function average(...score) {
  let s = 0;
  score.forEach((element) => {
    if (typeof element != "number") {
      element = parseInt(element, 10);
    }
    s += element;
  });
  return s / score.length;
}

console.log(Math.floor(average("20", 30, 40)));
