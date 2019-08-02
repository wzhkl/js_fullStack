var a = [3, 1, 6]
// 在无序数组中求第k大的数
function getKthLargest(arr, k) {
  if (k < 0 || k > arr.length - 1) return NaN;
  return arr.sort((a, b) => {
    return b - a;
  })[k-1]
}

console.log(getKthLargest(a, 1))