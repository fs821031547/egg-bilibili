module.exports  = app =>{
  app.get('/',app.controller.home.index);
  app.get('/news',app.controller.news.list);
  app.get('/time',app.controller.helper.index);
}