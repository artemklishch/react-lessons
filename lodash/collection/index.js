console.log("countBy");
console.log(_.countBy([6.1, 4.2, 6.3], Math.floor)); // => { '4': 1, '6': 2 }
console.log(_.countBy([6.1, 4.2, 4.5, 6.3, 6.6], Math.floor));
console.log(_.countBy(["one", "two", "three"], "length")); // => { '3': 2, '5': 1 }

console.log("\n", "every");
console.log(_.every([true, 1, null, "yes"], Boolean)); //false
var users1 = [
  { user: "barney", age: 36, active: false },
  { user: "fred", age: 40, active: false }, //если убрать эту строку, то вернет true
];
console.log(_.every(users1, { user: "barney", active: false })); //false
console.log(_.every(users1, ["active", false])); // true
console.log(_.every(users1, "active")); //false

console.log("\n", "filter");
var users2 = [
  { user: "barney", age: 36, active: true },
  { user: "fred", age: 40, active: false },
];
console.log(
  _.filter(users2, function (o) {
    return !o.active;
  })
); // => objects for ['fred']
console.log(_.filter(users2, { age: 36, active: true })); // => objects for ['barney']
console.log(_.filter(users2, ["active", false])); // => objects for ['fred']
console.log(_.filter(users2, "active")); // => objects for ['barney']

console.log("\n", "find");
var users3 = [
  { user: "barney", age: 36, active: true },
  { user: "fred", age: 40, active: false },
  { user: "pebbles", age: 1, active: true },
];
console.log(
  _.find(users3, function (o) {
    return o.age < 40;
  })
); // => object for 'barney'
console.log(_.find(users3, { age: 1, active: true })); // => object for 'pebbles'
console.log(_.find(users3, ["active", false])); // => object for 'fred'
console.log(_.find(users3, "active")); // => object for 'barney'
console.log("findLast");
console.log(
  _.findLast([1, 2, 3, 4], function (n) {
    return n % 2 == 1;
  })
); // => 3

console.log("\n", "flatMap");
function duplicate1(n) {
  return [n, n];
}
console.log(_.flatMap([1, 2], duplicate1)); // => [1, 1, 2, 2]
console.log("flatMapDeep");
function duplicate2(n) {
  return [[[n, n]]];
}
console.log(_.flatMapDeep([[1], 2], duplicate2)); // => [1, 1, 2, 2]
console.log("flatMapDepth");
function duplicate3(n) {
  return [[[n, n]]];
}
console.log(_.flatMapDepth([1, 2], duplicate3, 2)); // => [[1, 1], [2, 2]]

console.log("\n", "forEach");
console.log(
  _.forEach([1, 2], function (value) {
    console.log(value);
  })
); // => Logs `1` then `2`.
console.log(
  _.forEach({ a: 1, b: 2 }, function (value, key) {
    console.log(key);
  })
); // => Logs 'a' then 'b' (iteration order is not guaranteed).
console.log("forEachRight");
console.log(
  _.forEachRight([1, 2], function (value) {
    console.log(value);
  })
); // => Logs `2` then `1`.)

console.log("\n", "groupBy");
console.log(_.groupBy([6.1, 4.2, 6.3], Math.floor)); // => { '4': [4.2], '6': [6.1, 6.3] }
console.log(_.groupBy(["one", "two", "three"], "length")); // => { '3': ['one', 'two'], '5': ['three'] }

console.log("\n", "includes");
console.log(_.includes([1, 2, 3], 1)); // => true
console.log(_.includes([1, 2, 3], 1, 2)); // => false
console.log(_.includes({ a: 1, b: 2 }, 1)); // => true
console.log(_.includes("abcd", "bc")); // => true

console.log("\n", "invokeMap");
console.log(
  _.invokeMap(
    [
      [5, 1, 7],
      [3, 2, 1],
    ],
    "sort"
  )
); // => [[1, 5, 7], [1, 2, 3]]
console.log(_.invokeMap([123, 456], String.prototype.split, "")); // => [['1', '2', '3'], ['4', '5', '6']]

console.log("\n", "keyBy");
var array1 = [
  { dir: "left", code: 97 },
  { dir: "right", code: 100 },
];
console.log(
  _.keyBy(array1, function (o) {
    return String.fromCharCode(o.code);
  })
); // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
console.log(_.keyBy(array1, "dir")); // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }

console.log("\n", "map");
function square(n) {
  return n * n;
}
console.log(_.map([4, 8], square)); // => [16, 64]
console.log(_.map({ a: 4, b: 8 }, square)); // => [16, 64] (iteration order is not guaranteed)
var users1 = [{ user: "barney" }, { user: "fred" }];
console.log(_.map(users1, "user")); // => ['barney', 'fred']

console.log("\n", "orderBy");
var users2 = [
  { user: "fred", age: 48 },
  { user: "barney", age: 34 },
  { user: "fred", age: 40 },
  { user: "barney", age: 36 },
];
console.log(_.orderBy(users2, ["user", "age"], ["asc", "desc"])); // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
console.log(_.orderBy(users2, ["user", "age"], ["desc", "asc"]));

console.log("\n", "partitition");
var users3 = [
  { user: "barney", age: 36, active: false },
  { user: "fred", age: 40, active: true },
  { user: "pebbles", age: 1, active: false },
];
console.log(
  _.partition(users3, function (o) {
    return o.active;
  })
); // => objects for [['fred'], ['barney', 'pebbles']]
console.log(_.partition(users3, { age: 1, active: false })); // => objects for [['pebbles'], ['barney', 'fred']]
console.log(_.partition(users3, ["active", false])); // => objects for [['barney', 'pebbles'], ['fred']]
console.log(_.partition(users3, "active")); // => objects for [['fred'], ['barney', 'pebbles']]

console.log("\n", "reduce");
console.log(
  _.reduce(
    [1, 2],
    function (sum, n) {
      return sum + n;
    },
    0
  )
); // => 3
console.log(
  _.reduce(
    { a: 1, b: 2, c: 1 },
    function (result, value, key) {
      (result[value] || (result[value] = [])).push(key);
      return result;
    },
    {}
  )
); // => { '1': ['a', 'c'], '2': ['b'] }
console.log("reduceRight");
var array2 = [
  [0, 1],
  [2, 3],
  [4, 5],
];
console.log(
  _.reduceRight(
    array2,
    function (flattened, other) {
      return flattened.concat(other);
    },
    []
  )
); // => [4, 5, 2, 3, 0, 1]

console.log("\n", "reject");
var users4 = [
  { user: "barney", age: 36, active: false },
  { user: "fred", age: 40, active: true },
];
console.log(
  _.reject(users4, function (o) {
    return !o.active;
  })
); // => objects for ['fred']
console.log(_.reject(users4, { age: 40, active: true })); // => objects for ['barney']
console.log(_.reject(users4, ["active", false])); // => objects for ['fred']
console.log(_.reject(users4, "active")); // => objects for ['barney']

console.log("\n", "sample");
console.log(_.sample([1, 2, 3, 4]));
console.log("sampleSize");
console.log(_.sampleSize([1, 2, 3], 2));
console.log(_.sampleSize([1, 2, 3], 4)); //здесь второй аргумент означает более, чем число элементов массива, поетому выводит максимальное число, в данном слекучае - три элемента

console.log("\n", "shuffle");
console.log(_.shuffle([1, 2, 3, 4]));

console.log("\n", "size");
console.log(_.size([1, 2, 3])); // => 3
console.log(_.size({ a: 1, b: 2 })); // => 2
console.log(_.size("pebbles")); // => 7

console.log("\n", "some");
console.log(_.some([null, 0, "yes", false], Boolean)); // => true
var users5 = [
  { user: "barney", active: true },
  { user: "fred", active: false },
];
console.log(_.some(users5, { user: "barney", active: false })); // => false
console.log(_.some(users5, ["active", false])); // => true
console.log(_.some(users5, "active")); // => true

console.log("\n", "sortBy");
var users6 = [
  { user: "fred", age: 48 },
  { user: "barney", age: 36 },
  { user: "fred", age: 40 },
  { user: "barney", age: 34 },
];
console.log(
  _.sortBy(users6, [
    function (o) {
      return o.user;
    },
  ])
); // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
console.log(_.sortBy(users6, ["user", "age"])); // => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]
