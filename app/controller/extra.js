// import { getSearchDefaultWords, topbg, hot, slideshow, season, recommend } from './../urlConfig'

module.exports= app =>{
  const { getSearchDefaultWords, topbg, hot, slideshow, season, recommend } = app.config;
  class HomeController extends app.Controller{
    // 默认搜索词
    async search(ctx){
      const data = await ctx.curl(getSearchDefaultWords,{
        method: 'GET',
        dataType: 'json',
      });
      this.ctx.body = data.data;
    }
    // 顶部背景图
    // async topbg(ctx){
    //   const data = await ctx.curl(topbg);
    //   this.ctx.body = data;
    // }
    // // 各分类热门
    // async slideshow(ctx){
    //   const data = await ctx.curl(slideshow);
    //   this.ctx.body = data;
    // }
    // // 番剧下方更新列表右侧新番放送表上侧
    // async hot(ctx){
    //   const data = await ctx.curl(hot);
    //   this.ctx.body = data;
    // }
    // // 番剧下方更新列表右侧新番放送表下侧
    // async season(ctx){
    //   const data = await ctx.curl(season);
    //   this.ctx.body = data;
    // }
    // // 最底部特别推荐
    // async recommend(ctx){
    //   const data = await ctx.curl(recommend);
    //   this.ctx.body = data;
    // }
  }
  return HomeController
}