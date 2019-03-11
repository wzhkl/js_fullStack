 # weui
   来自于微信的前端开发框架，
   - 微信生态 公众号 小程序 
   weui.css 在基础上做开发
   - APP 生态
   内嵌的HTML
   - PC 传统网站 Bootstrap

   - 界面的编写过程
     - html 结构，独立于样式
       DOM文档流 从左到右，从上到下
       - 取类名很重要 
       BEM规范
       Block 区块 weui-cell weui-button 30-50个利用的组件
       Element 元素 weui-cell__hd  weui-cell__bd  weui-cell__ft
       通用的词汇 hd + bd + ft 
     - 再写样式

    - 离开文档流 
      里面的元素不再受其影响，before absolute 脱离了正常的文档流，如果在weui-cells中添加border-top使用盒子模型，元素在页面上的占位，是需要综合考虑内容w*h padding border margin position