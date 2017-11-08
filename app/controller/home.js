// import { ding } from './../urlConfig'

module.exports= app =>{
  class HomeController extends app.Controller{
    async index(ctx){
      const data = await ctx.curl('http://www.bilibili.com/index/ding.json');
      this.ctx.body = data;
    }
  }
  return HomeController
}