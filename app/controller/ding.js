// import { ding } from './../urlConfig'

module.exports= app =>{
  const { ding } = app.config;
  class HomeController extends app.Controller{
    async ding(ctx){
      const data = await ctx.curl(ding,{
        method: 'GET',
        dataType: 'json',
      });
      this.ctx.body = data;
    }
  }
  return HomeController
}