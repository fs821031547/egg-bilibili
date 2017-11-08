import { ding } from './../urlConfig'

module.exports= app =>{
  class HomeController extends app.Controller{
    async ding(ctx){
      const data = await ctx.curl(ding);
      this.ctx.body = data;
    }
  }
  return HomeController
}