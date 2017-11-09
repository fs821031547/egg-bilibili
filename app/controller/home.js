// import { ding } from './../urlConfig'

module.exports= app =>{
  class HomeController extends app.Controller{
    async index(ctx){
      const data = await ctx.curl('https://httpbin.org/get?foo=bar',{
        method: 'GET',
        dataType: 'json',
      });
      this.ctx.body = data.data;
    }
  }
  return HomeController
}