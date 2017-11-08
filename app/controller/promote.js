import { promote, promoteAd } from './../urlConfig'

module.exports= app =>{
  class HomeController extends app.Controller{
    // 推广
    async promote(ctx){
      const data = await ctx.curl(promote);
      this.ctx.body = data;
    }
    // 推广
    async promoteAd(ctx){
      const data = await ctx.curl(promoteAd);
      this.ctx.body = data;
    }
  }
  return HomeController
}