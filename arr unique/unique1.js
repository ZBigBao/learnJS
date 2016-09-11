var arr = ['qw', 'qw', 'qw', 'bao', 'qwe', 'qw', 'are', 'going', 'to'];

function unique(arr) {
  var prims = {'boolean': {}, 'number': {}, 'string': {}};
  var objs = [];
  return arr.filter(function (item) {
    var type = typeof item;
    if (type in prims) {
      return prims[type].hasOwnProperty(item) ? false : (prims[type][item] = true);
    } else {
      return objs.indexOf(item) >= 0 ? false : objs.push(item);
    }
  });
}

var newArr = unique(arr);
console.log('after unique:', newArr);
