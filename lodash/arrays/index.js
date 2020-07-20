console.log(_.compact([1, 2, "", null]));
console.log(_.chunk(["a", "b", "c", "d"], 2));
console.log(_.chunk(["a", "b", "c", "d"], 3));

var array = [1];
var other = _.concat(array, 2, [[[22]]], [3], [[4]]);
console.log(other);
// => [1, 2, 3, [4]]
console.log(array);
// => [1]

console.log(_.difference([2, 1, 3, 44], [2, 3]));
const arr1 = [2, 1, 3, 44];
const arr2 = [2, 3];
console.log(_.difference(arr1, arr2));
console.log(arr1);
console.log(arr2);

console.log(_.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor));
console.log(_.differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], "x"));

var objects = [
  { x: 1, y: 2 },
  { x: 2, y: 1 },
];

console.log(_.differenceWith(objects, [{ x: 1, y: 2 }], _.isEqual));
console.log("\n");
console.log("\n");
console.log(_.drop([1, 2, 3]));
console.log(_.drop([1, 2, 3], 2));
console.log(_.drop([1, 2, 3], 5));
console.log(_.drop([1, 2, 3], 0));
console.log(_.drop([1, 2, 3], 1));

console.log("\n");
console.log(_.dropRight([1, 2, 3]));
console.log(_.dropRight([1, 2, 3], 2));
console.log(_.dropRight([1, 2, 3], 5));
console.log(_.dropRight([1, 2, 3], 0));
console.log(_.dropRight([1, 2, 3], 1));

console.log("\n", "function dropRightWhile");
var users1 = [
  { user: "barney", active: true },
  { user: "fred", active: false },
  { user: "fredyy", active: true },
  { user: "pebbles", active: false },
];
console.log(
  _.dropRightWhile(users1, function (o) {
    return !o.active;
  })
);
var users11 = [
  { user: "barney", active: true },
  { user: "fred", active: false },
  { user: "fredyy", active: true },
  { user: "pebbles", active: false },
  { user: "pebbl", active: false },
  { user: "pebbl", active: false },
];
console.log(
  _.dropRightWhile(users11, function (o) {
    return !o.active;
  })
);
console.log("\n", "obj dropRightWhile");
var users2 = [
  { user: "barney", active: true },
  { user: "fred", active: false },
  { user: "frediii", active: true },
  { user: "pebbles", active: false },
  // { user: "pebbles", active: true },//здесь не сребатывает
];
console.log(_.dropRightWhile(users2, { user: "pebbles", active: false }));
var users21 = [
  { user: "barney", active: true },
  { user: "fred", active: false },
  { user: "frediii", active: true },
  { user: "pebbles", active: true },
  { user: "pebbles", active: false },
];
console.log(_.dropRightWhile(users21, { user: "pebbles", active: true }));
var users3 = [
  { user: "barney", active: true },
  { user: "fred", active: false },
  { user: "pebbles", active: false },
];
console.log(_.dropRightWhile(users3, { user: "pebbles", active: false }));
var users4 = [
  { user: "barney", active: true },
  { user: "fred", active: false },
  { user: "pebbles", active: false },
  { user: "pebblesiii", active: false },
];
console.log(_.dropRightWhile(users4, { user: "pebbles", active: false }));

console.log("\n", "function dropWhile");
var users5 = [
  { user: "barney", active: false },
  { user: "fred", active: false },
  { user: "pebbles", active: true },
];
console.log(
  _.dropWhile(users5, function (o) {
    return !o.active;
  })
);
var users6 = [
  { user: "barney", active: false },
  { user: "barney", active: true },
  { user: "pebbles", active: true },
  { user: "fred", active: false },
  { user: "pebbles", active: false },
];
console.log(
  _.dropWhile(users6, function (o) {
    return !o.active;
  })
);

console.log("\n", "obj dropWhile");
var users7 = [
  { user: "barney", active: false },
  { user: "fred", active: false },
  // { user: "barney", active: false },главное, чтобю первый элемент не соответсвовал
  { user: "pebbles", active: true },
];
console.log(_.dropWhile(users7, { user: "barney", active: false }));
var users7 = [
  { user: "barney", active: false },
  { user: "fred", active: true },
  { user: "fred", active: false },
  // { user: "barney", active: false },главное, чтобю первый элемент не соответсвовал
  { user: "pebbles", active: true },
];
console.log(_.dropWhile(users7, ["active", false]));

console.log("\n");
console.log("\n");
console.log("\n", "fill");
var array1 = [1, 2, 3];
_.fill(array1, "a");
console.log(array1);
console.log(_.fill(Array(3), 2));
console.log(_.fill([4, 6, 8, 10], "*", 1, 3));

console.log("\n", "findIndex");
var users8 = [
  { user: "barey", active: true },
  { user: "barney", active: false },
  { user: "fred", active: false },
  { user: "pebbles", active: true },
];
console.log(
  _.findIndex(users8, function (o) {
    return o.user == "barney";
  })
);
console.log(_.findIndex(users8, { user: "fred", active: false }));
console.log(_.findIndex(users8, ["active", false]));
console.log(_.findIndex(users8, "active"));

console.log("\n", "findLastIndex");
var users9 = [
  { user: "barney", active: true },
  { user: "fred", active: false },
  { user: "pebbles", active: false },
];
console.log(
  _.findLastIndex(users9, function (o) {
    return o.user == "pebbles";
  })
);
console.log(_.findLastIndex(users9, { user: "barney", active: true }));
console.log(_.findLastIndex(users9, ["active", false]));
console.log(_.findLastIndex(users9, "active"));

console.log("\n");
console.log("\n", "flatten");
console.log(_.flatten([1, [2, [3, [4]], 5]]));
console.log("\n", "flattenDeep");
console.log(_.flattenDeep([1, [2, [3, [4]], 5]]));
console.log("\n", "flattenDepth");
var array2 = [1, [2, [3, [4]], 5]];
console.log(_.flattenDepth(array2, 1));
console.log(_.flattenDepth(array2, 2));

console.log("\n");
console.log("\n", "fromPairs");
console.log(
  _.fromPairs([
    ["a", 1],
    ["b", 2],
    ["c", 5, 3],
  ])
);
console.log("\n", "head");
console.log(_.head([1, 2, 3]));
console.log(_.head([]));

console.log("\n", "indexOf");
console.log(_.indexOf([1, 2, 1, 2], 2));
console.log(_.indexOf([1, 2, 1, 2], 2, 2));

console.log("\n", "initial");
console.log(_.initial([1, 2, 3]));

console.log("\n", "intersection");
console.log(_.intersection([2, 1], [2, 3]));
console.log("intersectioBy");
console.log(_.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor));
console.log(_.intersectionBy([{ x: 1 }], [{ x: 2 }, { x: 1 }], "x"));
console.log("intersectionWith");
var objects2 = [
  { x: 1, y: 2 },
  { x: 2, y: 1 },
];
var others2 = [
  { x: 1, y: 1 },
  { x: 1, y: 2 },
];
console.log(_.intersectionWith(objects2, others2, _.isEqual));

console.log("\n", "join");
console.log(_.join(["a", "b", "c"], "~"));

console.log("\n", "last");
console.log(_.last([1, 2, 3]));

console.log("\n", "lastIndexOf");
console.log(_.lastIndexOf([1, 2, 1, 2], 2)); //последнее вхождение
console.log(_.indexOf([1, 2, 1, 2], 2)); //первое вхождение
console.log(_.lastIndexOf([1, 2, 1, 2], 2, 2));

console.log("\n", "nth");
var array3 = ["a", "b", "c", "d"];
console.log(_.nth(array3, 1));
console.log(_.nth(array3, -2));

console.log("\n", "pull");
var array4 = ["a", "b", "c", "a", "b", "c"];
console.log(_.pull(array4, "a", "c"));
console.log("pullAll");
console.log(_.pullAll(array4, ["a", "c"]));
console.log("pullAllBy");
var array5 = [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 1 }];
console.log(_.pullAllBy(array5, [{ x: 1 }, { x: 3 }], "x"));
console.log("pullAllWith");
var array6 = [
  { x: 1, y: 2 },
  { x: 3, y: 4 },
  { x: 5, y: 6 },
];
console.log(_.pullAllWith(array6, [{ x: 3, y: 4 }], _.isEqual));

console.log("pullAt");
var array7 = ["a", "b", "c", "d"];
var pulled = _.pullAt(array7, [1, 3]);
console.log(array7); //['a','c']
console.log(pulled); //['b','d']

console.log("\n", "remove");
var array8 = [1, 2, 3, 4];
var evens = _.remove(array8, function (n) {
  return n % 2 == 0;
});
console.log(array8); // => [1, 3]
console.log(evens); // => [2, 4]

console.log("\n", "reverse");
console.log(_.reverse([1, 2, 3]));

console.log("\n", "slice");
console.log(_.slice([1, 2, 3, 4, 5, 6], 1, 4));

console.log("\n", "sortedIndex");
console.log(_.sortedIndex([30, 50], 40));
console.log("sortedIndexByArray");
var objects3 = [{ x: 3 }, { x: 4 }, { x: 5 }];
console.log(
  _.sortedIndexBy(objects3, { x: 4 }, function (o) {
    return o.x;
  })
);
console.log(_.sortedIndexBy(objects3, { x: 4 }, "x")); //сперва массив отсортировать а потом получать индекс
console.log("sortedIndexOf");
console.log(_.sortedIndexOf([4, 0, 5, 5, 6], 5)); //2
console.log("sortedLastIndex");
console.log(_.sortedLastIndex([4, 5, 5, 5, 6], 5)); //4
console.log(_.sortedIndexOf([4, 0, 5, 6], 5)); //2
console.log(_.sortedLastIndex([4, 0, 5, 6], 5)); //3
console.log("sortedLastIndexBy");
var objects4 = [{ x: 4 }, { x: 5 }, { x: 10 }];
console.log(
  _.sortedLastIndexBy(objects4, { x: 4 }, function (o) {
    return o.x;
  })
); // => 1
console.log(_.sortedLastIndexBy(objects4, { x: 4 }, "x")); // => 1
console.log("sortedLastIndexOf");
console.log(_.sortedLastIndexOf([4, 5, 5, 5, 6], 5));
console.log("sortedUniq");
console.log(_.sortedUniq([1, 1, 2]));
console.log("sortedUniqBy");
console.log(_.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor)); //[1.1, 2.3]

console.log("\n", "tail");
console.log(_.tail([1, 2, 3]));

console.log("\n", "take");
console.log(_.take([1, 2, 3])); //[1]
console.log(_.take([1, 2, 3], 2)); //[1,2]
console.log(_.take([1, 2, 3], 5)); //[1,2,3]
console.log(_.take([1, 2, 3], 0)); //[]
console.log("takeRight");
console.log(_.takeRight([1, 2, 3])); //[3]
console.log(_.takeRight([1, 2, 3], 2)); //[2,3]
console.log(_.takeRight([1, 2, 3], 5)); //[1,2,3]
console.log(_.takeRight([1, 2, 3], 0)); //[]
console.log("takeRightWhile");
var users12 = [
  { user: "barney", active: true },
  { user: "fred", active: false },
  { user: "pebbles", active: false },
  // { user: "barney", active: true },// до значения true
];
console.log(
  _.takeRightWhile(users12, function (o) {
    return !o.active;
  })
);
console.log(_.takeRightWhile(users12, { user: "pebbles", active: false }));
console.log(_.takeRightWhile(users12, ["active", false]));
console.log(_.takeRightWhile(users12, "active"));
console.log("takeWhile");
var users13 = [
  { user: "barney", active: false },
  { user: "fred", active: false },
  { user: "pebbles", active: true },
];
console.log(
  _.takeWhile(users13, function (o) {
    return !o.active;
  })
);
console.log(_.takeWhile(users13, { user: "barney", active: false }));
console.log(_.takeWhile(users13, ["active", false]));
console.log(_.takeWhile(users13, "active"));

console.log("\n");
console.log("\n", "union");
console.log(_.union([2], [1, 2]));
console.log("unionBy");
console.log(_.unionBy([2.1], [1.2, 2.3], Math.floor));
console.log(_.unionBy([{ x: 1 }], [{ x: 2 }, { x: 1 }], "x"));
console.log("inionWith");
var objects5 = [
  { x: 1, y: 2 },
  { x: 2, y: 1 },
];
var others5 = [
  { x: 1, y: 1 },
  { x: 1, y: 2 },
];
console.log(_.unionWith(objects5, others5, _.isEqual));

console.log("\n");
console.log("\n", "uniq");
console.log(_.uniq([2, 1, 2]));
console.log("uniqBy");
console.log(_.uniqBy([2.1, 1.2, 2.3], Math.floor));
console.log(_.uniqBy([{ x: 1 }, { x: 2 }, { x: 1 }], "x"));
console.log("uniqWith");
var objects6 = [
  { x: 1, y: 2 },
  { x: 2, y: 1 },
  { x: 1, y: 2 },
];
console.log(_.uniqWith(objects6, _.isEqual));

console.log("\n", "unzip");
var zipped1 = _.zip(["a", "b"], [1, 2], [true, false]); // => [['a', 1, true], ['b', 2, false]]
console.log(_.unzip(zipped1)); // => [['a', 'b'], [1, 2], [true, false]]
var zipped2 = _.zip([1, 2], [10, 20], [100, 200]); // => [[1, 10, 100], [2, 20, 200]]
console.log(_.unzipWith(zipped2, _.add)); // => [3, 30, 300]

console.log("\n", "without");
console.log(_.without([2, 1, 2, 3], 1, 2)); //[3]

console.log("\n", "xor");
console.log(_.xor([2, 1], [2, 3]));
console.log("xorBy");
console.log(_.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor));
console.log(_.xorBy([2.1, 1.2], [2.3, 3.4, 1.5], Math.floor));
console.log(_.xorBy([{ x: 1 }], [{ x: 2 }, { x: 1 }], "x"));
console.log("xorWith");
var objects7 = [
  { x: 1, y: 2 },
  { x: 2, y: 1 },
];
var others7 = [
  { x: 1, y: 1 },
  { x: 1, y: 2 },
];
console.log(_.xorWith(objects7, others7, _.isEqual));

console.log("\n");
console.log("\n", "zip");
console.log(_.zip(["a", "b"], [1, 2], [true, false]));
console.log(_.zip([1, 2], [true, false], ["a", "b"]));
console.log("zipObject");
console.log(_.zipObject(["a", "b"], [1, 2]));
console.log(_.zipObject(["a", "b", "c"], [1, 2]));
console.log(_.zipObject(["a", "b"], [1, 2, 3]));
console.log("zipObjectDeep");
console.log(_.zipObjectDeep(["a.b[0].c", "a.b[1].d"], [1, 2])); // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
console.log("zipWith");
console.log(
  _.zipWith([1, 2], [10, 20], [100, 200], function (a, b, c) {
    return a + b + c;
  })
); //[111, 222]
console.log(
  _.zipWith([1, 2], [33, 45], [10, 20], [100, 200], function (a, b, c) {
    return a + b + c;
  })
); //[44,67]
