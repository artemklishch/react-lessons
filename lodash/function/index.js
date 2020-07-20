// console.log("after");
// var saves1 = ["profile", "settings"];
// var done1 = _.after(saves1.length, function () {
//   console.log("done saving!");
// });
// console.log(
//   _.forEach(saves1, function (type) {
//     asyncSave({ type: type, complete: done1 });
//   })
// ); // => Logs 'done saving!' after the two async saves have completed.

console.log("\n", "ari");
console.log(_.map(["6", "8", "10"], _.ary(parseInt, 1))); // => [6, 8, 10])

// console.log("\n", "before");
// console.log(jQuery(element).on("click", _.before(5, addContactToList))); // => Allows adding up to 4 contacts to the list.)

console.log("\n", "bind");
function greet(greeting, punctuation) {
  //   return greeting + " " + this.user + punctuation;
  console.log(greeting + " " + this.user + punctuation);
}
var object1 = { user: "fred" };
var bound1 = _.bind(greet, object1, "hi");
bound1("!"); // => 'hi fred!'
var bound11 = _.bind(greet, object1, _, "!");
bound11("hi"); // => 'hi fred!'
var bound12 = _.bind(greet, object1, "hi", "!");
bound12(); // => 'hi fred!'
console.log("bindKey");
var object2 = {
  user: "fred",
  greet: function (greeting, punctuation) {
    //   return greeting + ' ' + this.user + punctuation;
    console.log(greeting + " " + this.user + punctuation);
  },
};
var bound2 = _.bindKey(object2, "greet", "hi");
bound2("!"); // => 'hi fred!'
object2.greet = function (greeting, punctuation) {
  //   return greeting + "ya " + this.user + punctuation;
  console.log(greeting + "ya " + this.user + punctuation);
};
bound2("!"); // => 'hiya fred!'
var bound21 = _.bindKey(object2, "greet", _, "!");
bound21("hi"); // => 'hiya fred!'

console.log("\n", "curry");
var abc1 = function (a, b, c) {
  return [a, b, c];
};
var curried1 = _.curry(abc1);
console.log(curried1(1)(2)(3)); // => [1, 2, 3]
console.log(curried1(1, 2)(3)); // => [1, 2, 3]
console.log(curried1(1, 2, 3)); // => [1, 2, 3]
console.log(curried1(1, 2, 3)); // => [1, 2, 3]
console.log(curried1(1)(_, 3)(2)); // => [1, 2, 3]
console.log("curryRight");
var abc2 = function (a, b, c) {
  return [a, b, c];
};
var curried2 = _.curryRight(abc2);
console.log(curried2(3)(2)(1)); // => [1, 2, 3]
console.log(curried2(2, 3)(1)); // => [1, 2, 3]
console.log(curried2(1, 2, 3)); // => [1, 2, 3]
console.log(curried2(3)(1, _)(2)); // => [1, 2, 3]

// console.log('\n', 'debounce')
// // Avoid costly calculations while the window size is in flux.
// jQuery(window).on('resize', _.debounce(calculateLayout, 150));
// // Invoke `sendMail` when clicked, debouncing subsequent calls.
// jQuery(element).on('click', _.debounce(sendMail, 300, {
//   'leading': true,
//   'trailing': false
// }));
// // Ensure `batchLog` is invoked once after 1 second of debounced calls.
// var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
// var source = new EventSource('/stream');
// jQuery(source).on('message', debounced);
// // Cancel the trailing debounced invocation.
// jQuery(window).on('popstate', debounced.cancel);

console.log("\n", "defer");
console.log(
  _.defer(function (text) {
    console.log(text);
  }, "deferred")
); // => Logs 'deferred' after one millisecond.

console.log("\n", "delay");
console.log(
  _.delay(
    function (text) {
      console.log(text);
    },
    1000,
    "later"
  )
); // => Logs 'later' after one second.

console.log("\n", "flip");
var flipped1 = _.flip(function () {
  return _.toArray(arguments);
});
console.log(flipped1("a", "b", "c", "d")); // => ['d', 'c', 'b', 'a']

// console.log("\n", "memoize");
// var object3 = { a: 1, b: 2 };
// var other3 = { c: 3, d: 4 };
// var values3 = _.memoize(_.values3);
// console.log(values3(object3)); // => [1, 2]
// console.log(values3(other3)); // => [3, 4]
// object3.a = 2;
// console.log(values(object3)); // => [1, 2]
// values3.cache.set(object3, ["a", "b"]);
// console.log(values3(object3)); // => ['a', 'b']
//  _.memoize.Cache = WeakMap;

console.log("\n", "negate");
function isEven(n) {
  return n % 2 == 0;
}
console.log(_.filter([1, 2, 3, 4, 5, 6], _.negate(isEven))); // => [1, 3, 5]

console.log("\n", "once");
var num = 0;
function numa() {
  console.log(num++);
}
var initialize = _.once(numa);
initialize();
initialize();
console.log(num); //1 прибалвется только один раз, независимо от к-ва вызовов

console.log("\n", "overArgs");
function doubled1(n) {
  // return n * 2;
  console.log(n * 2);
}
function square1(n) {
  // return n * n;
  console.log(n * n);
}
var func1 = _.overArgs(
  function (x, y) {
    return [x, y];
  },
  [square1, doubled1]
);
func1(9, 3); // => [81, 6]
func1(10, 5); // => [100, 10]

console.log("\n", "partial");
function greet1(greeting, name) {
  return greeting + " " + name;
}
var sayHelloTo = _.partial(greet1, "hello");
console.log(sayHelloTo("fred")); // => 'hello fred'
var greetFred = _.partial(greet1, _, "fred");
console.log(greetFred("hi")); // => 'hi fred'
console.log("partialRight");
var greetFred = _.partialRight(greet1, "fred");
console.log(greetFred("hi")); // => 'hi fred'
var sayHelloTo = _.partialRight(greet1, "hello", _);
console.log(sayHelloTo("fred")); // => 'hello fred'

console.log("\n", "rearg");
var rearged = _.rearg(
  function (a, b, c) {
    return [a, b, c];
  },
  [2, 0, 1]
);
console.log(rearged("b", "c", "a")); // => ['a', 'b', 'c']

console.log("\n", "rest");
var say1 = _.rest(function (what, names) {
  return (
    what +
    " " +
    _.initial(names).join(", ") +
    (_.size(names) > 1 ? ", & " : "") +
    _.last(names)
  );
});
console.log(say1("hello", "fred", "barney", "pebbles")); // => 'hello fred, barney, & pebbles'

console.log("\n", "spread");
var say2 = _.spread(function (who, what) {
  return who + " says " + what;
});
console.log(say2(["fred", "hello"])); // => 'fred says hello'
var numbers = Promise.all([Promise.resolve(40), Promise.resolve(36)]);
console.log(
  numbers.then(
    _.spread(function (x, y) {
      return x + y;
    })
  )
); // => a Promise of 76

// console.log('\n', 'throttle')
// // Avoid excessively updating the position while scrolling.
// jQuery(window).on('scroll', _.throttle(updatePosition, 100));
// // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
// var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
// jQuery(element).on('click', throttled);
// // Cancel the trailing throttled invocation.
// jQuery(window).on('popstate', throttled.cancel);

console.log("\n", "unary");
console.log(_.map(["6", "8", "10"], _.unary(parseInt))); // => [6, 8, 10]

console.log("\n", "wrap");
var p = _.wrap(_.escape, function (func, text) {
  return "<p>" + func(text) + "</p>";
});
console.log(p("fred, barney, & pebbles")); // => '<p>fred, barney, &amp; pebbles</p>'


