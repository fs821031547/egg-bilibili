// import { promote, promoteAd } from './../urlConfig'

module.exports= app =>{
  const {  promote, promoteAd  } = app.config;
  class HomeController extends app.Controller{
    // 推广
    async promote(ctx){
      const data = await ctx.curl(promote,{
        method: 'GET',
        dataType: 'json',
      });
      this.ctx.body = data.data;
    }
    // 推广
    async promoteAd(ctx){
      const data = await ctx.curl(promoteAd,{
        method: 'GET',
        dataType: 'json',
      });
      this.ctx.body = data.data;
    }
  }
  return HomeController
}