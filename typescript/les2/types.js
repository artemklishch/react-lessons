//bool
var isFetching = true;
var isLoading = true;
//number
var int = 42;
var float = 4.2;
var num = 3e10;
//string
var message = 'Hello typescript';
//arrays
var numberArray = [1, 1, 2, 3, 5, 8, 13];
var numberArray2 = [1, 1, 2, 3, 5, 8, 13];
var words = ['Hello', 'something'];
//combine
var contact = ['Vladilen', 1234567];
//any
var variable = 42;
variable = 'Hello';
variable = [];
//funcs
function sayMyName(name) {
    console.log(name);
}
sayMyName('Bob');
//never
function throwError(message) {
    throw new Error(message);
}
;
function infinite() {
    while (true) { }
}
var login = 'admin';
var id1 = 1234;
var id2 = '1234';
