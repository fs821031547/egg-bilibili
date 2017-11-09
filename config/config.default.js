exports.keys='fs';
exports.view={
  defaultViewEngine:'nunjucks',
  mapping:{
    'tpl':'nunjucks',
  }
};
exports.news={
  pageSize:5,
};
// exports.middleware=['robot','hello'];

// exports.robot={
//   ua:[
//     /curl/i,
//     /Baiduspider/i,]
// }
// exports.hello={
//   text: 'hello world'
// }

exports.security = {
  csrf: {
    ignoreJSON: true, // 默认为 false，当设置为 true 时，将会放过所有 content-type 为 `application/json` 的请求
  },
  domainWhiteList: [ 'localhost:8080' ]
    // ctoken: false,
}

// exports.cors = {

// };
exports.cors={
  enable: true,
  package: 'egg-cors',
  origin: '*',
  allowMethods:'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  // credentials:true,
}

// 各分类内容
exports.ding = 'http://www.bilibili.com/index/ding.json'

// 轮播图
exports.banner = 'http://api.bilibili.com/x/web-show/res/loc?pf=0&id=23'

// 默认搜索单词
exports.getSearchDefaultWords = 'http://www.bilibili.com/widget/getSearchDefaultWords'

// 主站头部背景图
exports.topbg = 'http://api.bilibili.com/x/web-show/res/loc?pf=0&id=142'

// 各分类热门内容
exports.hot = 'http://api.bilibili.com/x/web-show/res/locs?pf=0&ids=1550,1554,1556,1558,1560,1562,1564,1566,1568,1570,1572,1574,1624,1636'

// 推广
exports.promote = 'http://api.bilibili.com/x/web-show/res/loc?pf=0&id=34'

// 推广右侧广告
exports.promoteAd = 'http://api.bilibili.com/x/web-show/res/loc?pf=0&id=29'

// 直播
exports.liveXhr = 'http://api.live.bilibili.com/bili/recom'

// 番剧下方更新列表右侧新番放送表上侧
exports.slideshow = 'http://www.bilibili.com/index/slideshow/41.json'
// 番剧下方更新列表右侧新番放送表下侧
exports.season = 'http://www.bilibili.com/api_proxy?app=bangumi&action=get_season_by_tag&page=1&tag_id=101&pagesize=4'


// 轮播图右边总排行
// 3日排行
exports.ranking3 = 'http://www.bilibili.com/index/ranking-3day.json'
// // 7日排行
// exports.ranking7 = 'http://www.bilibili.com/index/ranking-week.json'
// // 昨日排行
// exports.randking = 'http://www.bilibili.com/index/ranking.json'

// // 最底部特别推荐
// exports.recommend = 'http://www.bilibili.com/index/recommend.json'

// exports.rankbase = 'http://www.bilibili.com/index/catalogy/'

