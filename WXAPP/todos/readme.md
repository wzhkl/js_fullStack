- wxml 是模板，{{}} 是要被编译的，用户看到的不是wxml，是 wxml 被 js data 填充编译后的页面 看到的是 Page 不是 wxml  是 wxml + js + wxss 合体  compile 

- setData({
    相应数据时
})   触发重新compile

- 我们会在wxml里把所有的逻辑及对数据的渴求都表达出来，在某一刻页面只会显示当前状态的页面状态 跟数据息息相关
    状态 由数据决定 
    改变数据， setData之后，界面自动改变
    数据驱动的界面 MVVM
    数据要和界面状态一一对应

- todos
    健身 
    表单
    js dom 加 todos [] appendChild
    data: {
        todos: []
    }
    form submit 时 this.setData()

- {{ js的运行区域 }}
