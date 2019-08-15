var arr = [1, 2, 1, 1, '1']
function set_unique(arr) {
  // return [...new Set(arr)];
  const map = new Map();
  return arr.filter((a) => !map.has(a) && map.set(a, 1));
}