exports.keys='fs';
exports.view={
  defaultViewEngine:'nunjucks',
  mapping:{
    'tpl':'nunjucks',
  }
};
exports.news={
  pageSize:5,
};
exports.middleware=['robot','hello'];

exports.robot={
  ua:[
    /curl/i,
    /Baiduspider/i,]
}
exports.hello={
  text: 'hello world'
}

