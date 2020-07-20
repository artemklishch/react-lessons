console.log("now");
console.log(
  _.defer(function (stamp) {
    console.log(_.now() - stamp);
  }, _.now())
); // => Logs the number of milliseconds it took for the deferred invocation.
