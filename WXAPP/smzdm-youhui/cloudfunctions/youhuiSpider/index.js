// 云函数入口文件
const cloud = require('wx-server-sdk')
const request = require('request')
const cheerio = require('cheerio')

cloud.init()

function spiderYouhui() {
  return new Promise((resolve, reject) => {
    request('https://www.smzdm.com/youhui/', (err, res) => {
      if(err) {
        reject(err);
      }
      if(!err) {
          // console.log(res.body);
          // 要不要解析 html entity
          const $ = cheerio.load(res.body, {
              decodeEntities: false
          })
          let list = [];
          $('.list.list_preferential').each(function() {
              let title = $('.itemName a',this).html();
              title = title.replace(/<.*>.*<\/.*>/g, '');
              const price = $('.listTitle .red',this).text();
              const img = $('.picLeft img',this).attr('src');
              const desc = $('.lrInfo p',this).text().trim();
              console.log({
                  title,price,img,desc
              });
              list.push({
                title,price,img,desc
              })
          })
          resolve(list);
      }
  })
  })

}

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext();
  // await 后面接 promise 返回promise resolve 时候的值
  // 执行爬虫
  try {
    const youhuiList = await spiderYouhui();
    return{
      code: 200,
      youhuiList
    }
  }
  catch(err) {
    return{
      code: 500
    }
  }
}