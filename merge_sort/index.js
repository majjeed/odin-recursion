function mergeSort(arr) {
  //if only one element in array then its sorted
  //sort left half of nums
  //sort right half of nums
  //merge the sorted halves
  let emptArr = [];
  if (arr.length === 0) return [];
  if (arr.length === 1) return arr[0];
  let midPoint = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, midPoint);
  let rightArr = arr.slice(midPoint, arr.length);
  let a = mergeSort(leftArr);
  let b = mergeSort(rightArr);
  if (a < b) return emptArr.push(a);
  return emptArr.push(b);
}

let sortedArr = [1, 2, 3, 4, 5];
let unsortedArr = [5, 2, 1, 4, 3];
console.log(unsortedArr);
