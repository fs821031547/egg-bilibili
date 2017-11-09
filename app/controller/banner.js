
module.exports= app =>{
  const { banner } = app.config;
  class HomeController extends app.Controller{
    async banner(ctx){
      const data = await ctx.curl(banner,{
        method: 'GET',
        dataType: 'json',
      });
      console.log('banner:',data);
      this.ctx.body = data.data;
    }
  }
  return HomeController
}