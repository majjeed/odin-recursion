function fibs(n) {
  let fibSequence = [0, 1];
  if (n <= 0) return [];
  if (n === 1) return [0];
  for (let i = 2; i < n; i++) {
    fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
  }

  return fibSequence;
}

console.log("fibs: ", fibs(8));

function fibsRec(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];

  function fibHelper(num) {
    if (num <= 0) return [0];
    if (num === 1) return [0, 1];

    const sequence = fibHelper(num - 1);
    sequence.push(
      sequence[sequence.length - 1] + sequence[sequence.length - 2]
    );
    return sequence;
  }

  return fibHelper(n - 1);
}

console.log("fibsRec: ", fibsRec(8));
