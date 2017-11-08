import { banner } from './../urlConfig'

module.exports= app =>{
  class HomeController extends app.Controller{
    async banner(ctx){
      const data = await ctx.curl(banner);
      this.ctx.body = data;
    }
  }
  return HomeController
}