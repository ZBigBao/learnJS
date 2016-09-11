'use strict';
// A string or symbol representing a property name or array index
// (non-symbols will be coerced to strings).
// 在数组中可以用来判断一个数组是否有特定的索引项
var arr = ['a', 'b', 'm', 'e'];
console.log('array in');
if (2 in arr) {
  console.log('has item arr[2]');
} else {
  console.log('has not item arr[2]');
}


// 在对象中可以用来判断一个对象是否有特定的属性或者方法
// is an object has the specially property or function
var obj = {
  name: 'bao',
  age: 12,
  add: 'shanghai'
}
console.log('object in');
if ('name' in obj) {
  console.log('has name in obj');
} else  {
  console.log('has no name in obj');
}

if ('toString' in {}) {
  console.log('toString in object');
}
