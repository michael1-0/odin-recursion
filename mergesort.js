let arr = [42, 17, 93, 58, 23, 84, 5, 76, 31, 12];

function mergeSort(arr, low, high) {
  if (low === high) return;
  let mid = Math.trunc((low + high) / 2);
  mergeSort(arr, low, mid);
  mergeSort(arr, mid + 1, high);
  merge(arr, low, mid, high);
}

function merge(arr, low, mid, high) {
  const tempArr = [];

  let left = low;
  let right = mid + 1;

  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      tempArr.push(arr[left++]);
    } else {
      tempArr.push(arr[right++]);
    }
  }
  // If there are still elements for the left half
  while (left <= mid) {
    tempArr.push(arr[left++]);
  }
  // If there are still elements for the right half
  while (right <= high) {
    tempArr.push(arr[right++]);
  }
  // Copy the elements of tempArr to the original array
  for (let i = low; i <= high; i++) {
    arr[i] = tempArr[i - low];
  }
}

mergeSort(arr, 0, arr.length - 1);
console.log(...arr);
