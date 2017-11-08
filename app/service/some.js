module.exports=app=>{
  class someService extends app.Service{
    * list(){
      const rule = this.app.config.robot.ua;
    } 
  }
  return someService
}