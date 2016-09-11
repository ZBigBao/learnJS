'use strict';

var dir = {
  name: 'BigBao',
  age: 12,
  add: '上海'
};

var template = '#name#是一个大学毕业生，今年#age#岁了，现在住在#add#';
// 写在 括号内的 部分 可以 做为参数传递到 function 内
var temp = template.replace(/#([a-zA-Z]*)#/g, function (match, $1) {
  console.log('match', match, '$1', $1);
  return dir[$1];
});
console.log('after replace', temp);
