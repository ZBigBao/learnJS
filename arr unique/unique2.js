// more efficiently
var arr = ['qw', 'qw', 'qw', 'bao', 'qwe', 'qw', 'are', 'going', 'to'];

// 构建一个新的对象，数组中出现的值设置为对象的 key，
// 如果重复出现则 不能在重复设置
function unique(arr) {
  var prims = {};
  var objs = [];
  return arr.filter(function (item) {
    if (item in prims) {
      return false;
    } else {
      prims[item] = true;
      return true;
    }
  });
}

var newArr = unique(arr);
console.log('after unique:', newArr);
