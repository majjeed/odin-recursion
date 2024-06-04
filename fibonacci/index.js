function fibs(n) {
  if (n < 2) return n;
  else {
    return fibs(n - 1) + fibs(n - 2);
  }
}

function arrFibs(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(fibs(i));
  }
  return arr;
}

console.log(arrFibs(1));
