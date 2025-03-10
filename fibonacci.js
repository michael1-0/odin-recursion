function fib(n) {
  let vibArr = [0, 1];
  let vibIndex = vibArr.length;
  while (true) {
    if (vibArr.length > n) {
      break;
    }

    vibArr.push(vibArr[vibIndex - 1] + vibArr[vibIndex - 2]);
    vibIndex++;
  }
  return vibArr;
}

function fibRecursive(n, arr = [0, 1]) {
  if (arr.length > n) {
    return;
  }
  arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  fibRecursive(n, arr);
}

const vibArrs = fib(9);

for (let i = 0; i < vibArrs.length; i++) {
  console.log(vibArrs[i]);
}
