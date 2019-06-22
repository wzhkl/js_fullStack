- json格式 是标准的数据交换 
- 前后端开发， /api  json格式来交流
- 全栈 fullstack

- restful 一切皆资源
  路由：暴露资源
- 设计良好的URL
  /posts
  /posts/:id
  /comments
  /comments/:id
  /posts/1/comments

http 动词：
  GET 查询

  加一条评论 -> 增加一个资源
  POST 新增  提交表单到 /comments

  DELETE 删除资源  /posts/2

  修改 PUT/PATCH
    /comments/2   body 最美不过夕阳红

  PUT 把全新的所有的内容，去替换掉旧的内容
  PATCH 部分更新

- restful 考点
  restful 认为一切皆资源，URL是唯一定位资源的符号，它有一定的设计原则
  HTTP动词 是web资源的状态转换动词

  操作      SQL方法      HTTP动词
  CREATE    INSERT      POST
  READ      SELECT      GET
  UPDATE    UPDATE      PUT/PATCH
  DELETE    DELETE      DELETE