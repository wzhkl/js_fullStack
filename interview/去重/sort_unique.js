function unique(arr) {
  var res = [];
  var sortedArray = arr.concat.sort();
  var seen;
  for (let i = 0; i < sortedArray.length; i++) {
    if(!i || seen !== sortedArray[i]) {
      res.push(sortedArray[i])
    }
    seen = sortedArray[i];
  }
  return res;
}