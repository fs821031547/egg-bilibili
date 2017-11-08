module.exports=app=>{
  class helpController extends app.Controller{
    async index(){
      await this.ctx.render('news/helper.tpl');
    }
  }
  return helpController;
}