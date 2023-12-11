module.exports = [
  {text: '首页', link: '/'},
  {
    text: '前端',
    link: '/web/',  //目录页，vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      {text: '前端文章', items: [
        {text: 'JavaScript', link: '/pages/8143cc480faf9a11/'}, // 注意link结尾有斜杠和没有斜杠的区别
        {text: 'Vue', link: '/pages/802a1ca6f7b71c59/'},
      ]},
      {text: '学习笔记', items:[
        {text: '《JavaScript教程》笔记', link: '/note/javascript/'},
        {text: '《ES6 教程》笔记', link: '/note/es6/'},
        {text: '《Vue》笔记', link: '/note/vue/'},
        {text: '《TypeScript 从零实现 axios》', link: '/note/typescript-axios/'},
        {text: '小程序笔记', link: '/note/wx-miniprogram/'},
        {text: 'JavaScript 基础', link: '/note/javascriptbasics/'}
      ]}
    ]
  },
  {
    text: '后端', 
    link: '/engineer/',
    items: [
      {text: '后端笔记', items: [
        {text: 'Java', link: '/pages/7fae73/'},
        {text: 'Spring', link: '/pages/fa6492/'},
        {text: '算法', link: '/pages/37120b/'}
      ]},
      {text: '工作问题', items:[
        {text: '问题记录', link: '/pages/79637f/'}
      ]}
    ]
  },
  {
    text: '技术',
    link: '/technology/',
    items: [
      {text: '各类工具使用', link: '/pages/9a7ee40fc232253e/'},
      {text: 'GitHub技巧', link: '/pages/4c778760be26d8b3/'},
      {text: '博客搭建', link: '/pages/41f87d890d0a02af/'},
    ]
  },
  {
    text: '面试',
    link: '/interview/',
    items: [
      {text: '面试题库', items: [
        {text: '零碎', link: '/pages/a134b2/'},
        {text: '面试常见题目汇总', link: '/note/mianshi/'}
      ]}
      ,
      {text: '面试心得', items: [
        {text: '面试集锦', link: '/pages/aea6571b7a8bae86/'},
        {text: '杂言碎语', link: '/pages/331dbf/'},
      ]}
    ]
  },
  {
    text: '读书派', 
    link: '/bookssent/',
    items: [
      {text: '摘抄收录', items: [
        {text: '☆ 励志鸡汤', link: '/ChickenSoup/'},
        {text: '❀ 人间烟火', link: '/PassionLife/'},
        {text: '☣ 万物沦丧', link: '/ThingsLost/'},
        {text: '✌ 关掉烦恼', link: '/NoTrouble/'},
        {text: '✲ 小酒馆', link: '/Bistro/'}
      ]}, //link: '/pages/wordsof/'}
      {text: '读书笔记', items: [
        {text: '《小狗钱钱》', link: '/note/xgqq/'},
        {text: '《穷爸爸富爸爸》', link: '/note/qbbfbb/'},
        {text: '《聪明人使用方格笔记本》', link: '/note/cmrsyfgbjb/'}
      ]}
    ]
  },
  {
    text: '更多', 
    link: '/more/',
    items: [
      {text: '学习', link: '/pages/f2a556/'},
      {text: '心情杂货', link: '/pages/2d615df9a36a98ed/'},
      {text: '友情链接', link: '/friends/'},
    ]
  },
  {text: '关于', link: '/about/'},
  {
    text: '收藏',
    link: '/pages/beb6c0bd8a66cea6/',
    items: [
      {text: '网站', link: '/pages/beb6c0bd8a66cea6/'},
      {text: '资源', link: '/pages/eee83a9211a70f9d/'},
      {text: 'Vue资源', link: '/pages/12df8ace52d493f6/'},
    ]
  },
  {
    text: '索引',
    link: '/archives/',
    items: [
      {text: '分类', link: '/categories/'},
      {text: '标签', link: '/tags/'},
      {text: '归档', link: '/archives/'},
    ]
  }
]