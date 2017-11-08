import { liveXhr } from './../urlConfig'

module.exports= app =>{
  class HomeController extends app.Controller{
    // 直播
    async liveXhr(ctx){
      const data = await ctx.curl(liveXhr);
      this.ctx.body = data;
    }
  }
  return HomeController
}