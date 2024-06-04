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
  //if only one element in array then its sorted
  //sort left half of nums
  //sort right half of nums
  //merge the sorted halves
  if (arr.length === 1) return arr;

  let midPoint = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, midPoint);
  let rightArr = arr.slice(midPoint, arr.length);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

let sortedArr = [1, 2, 3, 4, 5];
let unsortedArr = [5, 2, 1, 4, 3, 8, 9];
console.log(mergeSort(unsortedArr));
