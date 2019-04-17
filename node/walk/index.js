// const fs = require('fs');
// const files = [];
// // 一步步 目录走下去  
// const walk = function(path) {
//     fs
//       .readdirSync(path)
//       .forEach(item => {
//           console.log(item);
//       })
// }

// walk('./src');
// console.log(files);

const fs = require('fs');
const files = [];
// 一步步 目录走下去  
const walk = function(path) {
    fs
      .readdirSync(path)
      .forEach(item => {
        //   console.log(item);
        //   文件？
        //       js文件? 正则
        //    或  目录？
        //           递归
        const newPath = path + '/' + files;
        const stat = fs.statSync(newPath);
        console.log(stat);
        if (stat.isFile()) {
            if (/\.js$/.test(file)) {
                files.push(file);
            }
        }else if(stat.isDirectory()) {
            walk(newPath);
        }
      })
    // fs.readdir(path, function(err, items) {
    //     console.log(items);
    // })
    // console.log('safdqefc测');
}

walk('./src');
console.log(files);