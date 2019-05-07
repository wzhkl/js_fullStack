// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'codingdream-55e0b1'

cloud.init()
// 获取数据库句柄
const db = cloud.database({ env })

// 云函数入口函数
exports.main = async (event, context) => {
  // const wxContext = cloud.getWXContext()

  // return {
  //   event,
  //   openid: wxContext.OPENID,
  //   appid: wxContext.APPID,
  //   unionid: wxContext.UNIONID,
  // }
  const userInfo = event.userInfo 
  return await db.collection('group').add({
    data: {
      name: event.groupName,
      createBy: userInfo.openId,
      createTime: new Date(),
      delete: false,
      updateTime: new Date()
    }
  })
}