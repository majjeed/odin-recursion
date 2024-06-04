function merge(left, right) {
  let resultArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return resultArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}

function mergeSort(arr) {
  if (arr.length === 1) return arr;

  let midPoint = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, midPoint);
  let rightArr = arr.slice(midPoint);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

console.log(mergeSort([5, 4, 27, 8, 1]));
