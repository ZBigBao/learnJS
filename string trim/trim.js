'use strict';

// delete the space in the both ends of a string
var str = '   aaasdfas  sadf ddsd  ';

function trim(str) {
  return str.replace(/(^\s*)|(\s$)/g, '');
}

console.log(trim(str));
