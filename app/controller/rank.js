
import { ranking3, ranking7, randking, rankbase } from './../urlConfig'

module.exports= app =>{
  class HomeController extends app.Controller{
    // 排行
    // 三日排行
    async ranking3(ctx){
      const data = await ctx.curl(ranking3);
      this.ctx.body = data;
    }
    // // 一周排行
    // async ranking7(ctx){
    //   const data = await ctx.curl(ranking7);
    //   this.ctx.body = data;
    // }
    // // 昨日排行
    // async randking(ctx){
    //   const data = await ctx.curl(randking);
    //   this.ctx.body = data;
    // }
    // // contentrank -分类下三日排行
    // async contentrank(ctx){
    //   const body = ctx.request.body
    //   let categoryId = body.categoryId
      
    //   let url = rankbase + categoryId + '-3day.json'
    //   const data = await ctx.curl(url);
    //   this.ctx.body = data;
    // }
    // // contentrank -分类下一周排行
    // async contentrankweek(ctx){
    //   const body = ctx.request.body
    //   let categoryId = body.categoryId
      
    //   let url = rankbase + categoryId + '-week.json'
    //   const data = await ctx.curl(url);
    //   this.ctx.body = data;
    // }
  }
  return HomeController
}