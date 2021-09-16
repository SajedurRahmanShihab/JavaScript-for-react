/* 
A closure is the combination of a function bundled together (enclosed).
In other words, a closure gives you access to an outer function's scope from an inner function.
In JavaScript, closures are created every time a function is created, at function creation time.
*/

// Example 1
function init() {
    let name = 'Mozilla';

    function displayName() {
        console.log(name);
    }
    displayName();
}
// init(); 

// Example 2
function makeFunc() {
    var name = 'Mozilla';

    function displayName() {
        console.log(name);
    }
    return displayName;
}

var myFunc = makeFunc();
// myFunc();



// Example 3
function makeAdder(x) {
    return function(y) {
        return x + y;
    };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);
console.log(add5(2)); // 7
console.log(add10(2)); // 12