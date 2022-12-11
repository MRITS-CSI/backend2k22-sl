'use strict';
exports.__esModule = true;
exports.fibEncrypt =
	exports.getIndex =
	exports.generateFibonacci =
	exports.fibonacci =
	exports.fibonacciRec =
	exports.initialize =
		void 0;
var fibmax = 0;
var fibvec = [];
var charstring = 'abcdefghijklmnopqrstuvwxyz';
var chars = [];
var initialize = function () {
	chars = [];
	for (var i = 0; i < charstring.length; ++i) {
		chars.push(charstring[i]);
	}
};
exports.initialize = initialize;
var fibonacciRec = function (n) {
	return n <= 1
		? 1
		: (0, exports.fibonacci)(n - 1) + (0, exports.fibonacci)(n - 2);
};
exports.fibonacciRec = fibonacciRec;
var fibonacci = function (num) {
	var num1 = 0;
	var num2 = 1;
	var sum;
	var i = 0;
	for (i = 0; i < num; i++) {
		sum = num1 + num2;
		num1 = num2;
		num2 = sum;
	}
	return num2;
};
exports.fibonacci = fibonacci;
var generateFibonacci = function (n) {
	if (fibmax >= n) return;
	for (var i = fibmax; i < n; ++i) fibvec.push((0, exports.fibonacci)(i));
};
exports.generateFibonacci = generateFibonacci;
var getIndex = function (n) {
	return n % chars.length;
};
exports.getIndex = getIndex;
var fibEncrypt = function (s) {
	var ns = s.toLowerCase();
	var out = '';
	for (var i = 0, j = 0; i < ns.length; ++i)
		out +=
			ns.charCodeAt(i) < 'z'.charCodeAt(0) &&
			ns.charCodeAt(i) > 'a'.charCodeAt(0)
				? chars[(0, exports.getIndex)(fibvec[j++] + chars.indexOf(ns[i]))]
				: ns[i];
	return out;
};
exports.fibEncrypt = fibEncrypt;
(0, exports.initialize)();
(0, exports.generateFibonacci)(150);
console.log((0, exports.fibEncrypt)('Missiles launched from the north front.'));
