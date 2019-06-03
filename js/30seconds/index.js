const htmlStr = '<p><em>lorem</em><strong>ipsum</strong></p>'
// 正则 replace splice
// []表示范围匹配  ^ 表示非 
// * 号代表字符可以不出现，也可以出现一次或者多次
const stripHTMLTags = str => str.replace(/<[^>]*>/g, '');