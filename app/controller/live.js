// import { liveXhr } from './../urlConfig'

module.exports= app =>{
  const { liveXhr } = app.config;
  class HomeController extends app.Controller{
    // 直播
    async liveXhr(ctx){
      const data = await ctx.curl(liveXhr,{
        method: 'GET',
        dataType: 'json',
      });
      this.ctx.body = data.data;
    }
  }
  return HomeController
}