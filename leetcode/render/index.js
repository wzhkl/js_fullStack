// {{name}} {{age}} 被编译
function render(tpl, data) {
  // 1. 找到所有的{{}} regExp /{\{\(.+)\}\}/g全局匹配
  return tpl.replace(/\{\{(.+?)\}\}/g, function($1, $2) {
    console.log('$1',$1);
    console.log('$2',$2);
    return data[$2]
  })
}
let tmpl = `
  <div>
    <p>{{name}}</p>
    <p>{{age}}</p>
  </div>
`
var result = render(tmpl, {name: '小行家', age: 18})
console.log(result)