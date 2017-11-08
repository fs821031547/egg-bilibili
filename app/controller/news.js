module.exports = app => {
  class NewsController extends app.Controller{
    * list(){
      // const dataList = {
      //   list:[
      //     { id: 1, title: 'this is news 1', url: '/news/1' },
      //     { id: 2, title: 'this is news 2', url: '/news/2' }
      //   ]
      // }
      const ctx =this.ctx;
      const page =ctx.query.page || 1;
      const newsList = yield ctx.service.news.list(page);
      yield ctx.render('news/list.tpl',{list: newsList});
    }
  
  }
  return NewsController
};
