const fs=require('fs')
const request=require('request')
module.exports= app =>{
  const { banner } = app.config;
  class HomeController extends app.Controller{
    async banner(ctx){
      const data = await ctx.curl(banner,{
        method: 'GET',
        dataType: 'json',
      });
      // console.log('banner:',data);
      
      // data.data.data.forEach(x=>{
      //   let url=x.pic.split('/')[5];
      //   request(x.pic).pipe(fs.createWriteStream('./image/'+url))
      // })
      this.ctx.body = data.data;
    }
  }
  return HomeController
}