'use strict';

let arr = [8, 4, 23, 42, 16, 15];

function insertionSort() {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    let temp = arr[i];
    while (j >= 0 && temp < arr[j]) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = temp;
  }
  return arr;
}
console.log(arr);
console.log(insertionSort());
