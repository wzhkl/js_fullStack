- readdir
    读取目录里的内容  IO操作异步
    readdirSync   Async 异步   sync 同步

    JS单线程的，用回调或Promise，释放线程的控制权  主要因为js是前端DOM编程，用户交互比较多，等到执行完再通过event-loop机制，拿回控制权（callback resolve）
    来到了node， js获取了服务器端的能力，readdirSync()