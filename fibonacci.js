function fibanocci(n) {
  let arr = [0, 1];

  if (n <= 2) return 1;

  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }

  return arr[n];
}

var input = 10;
var result = fibanocci(input);
console.log(`Fibaocci series of ${input} numbers :${result}`);
