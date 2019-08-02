var a = 'aba';
// function a(str) {
//   var strSplit = str.split('');
//   console.log(strSplit);
//   var strRoll = strSplit.reverse().join('')
//   return strRoll === str
// }
// a('aba');

// function validPalindrome(str) {
//   if (!str || typeof str !== 'String') return false;
//   return str.split("").reverse().join("") == str;
// }
// validPalindrome(a)
// 大小写、空、特殊符号忽略
// 输入: "A man, a plan, a canal: Panama"
// 输出: true

var isValidChar = (c) => {
  return /^[\w]$/.test(c);
}
var isPalindrome = (s) => {
  s = s.toLowerCase();
  let left = 0,
  right = s.length- 1;
  while(left < right) {
    if (!isValidChar(s[left])) {
      left++;
      continue;
    }
    if (!isValidChar(s[right])) {
      right--;
      continue;
    }
    if (s[left] == s[right]) {
      left++;
      right--;
    }else {
      break;
    }
  }
  return right <= left;
}