
const convert=require('koa-convert');
const cors=require('koa-cors');

module.exports  = app =>{
  // let router={};  //路由对象
  // let arr = [];   //路由名称数组
  // const contro=app.controller;
  // router.banner=contro.banner;
  // router.extra=contro.extra;
  // router.live=contro.live;
  // router.promote=contro.promote;
  // router.rank=contro.rank;
  // for(let i in router){
  //   arr=arr.concat(Object.keys(router[i]));
  // }
  // console.log(arr);
  // app.use(convert(cors()));
  // arr.forEach(x=>{
  //   app.get('/'+x,);
  // })
  // app.get('/get',app.controller.home.index);
  app.get('/ding',app.controller.ding.ding);
  app.get('/search',app.controller.extra.search);
  app.get('/banner',app.controller.banner.banner);
  app.get('/live',app.controller.live.liveXhr);
  app.get('/promote',app.controller.promote.promote);
  app.get('/promoteAd',app.controller.promote.promoteAd);
  app.get('/ranking3',app.controller.rank.ranking3);
  // app.get('/time',app.controller.helper.index);
}