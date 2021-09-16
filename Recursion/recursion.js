// iteration technique
/* let total = 0;
let n = 3;

for (let i = 1; i <= n; i++) {
    total += i;
}

console.log(total); */


// Recursive Technique
// Formula f(n-1) + n  = f(n)
function sum(n) {
    if (n === 0) {
        return 0;
    } else {
        return sum(n - 1) + n;
    }
}

// factorial using recursion

function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// recursion problem practice
function weirdAlgorithm(n) {
    console.log(n);
    if (n === 1) {
        return;
    } else if (n % 2 === 0) {
        n = n / 2;
        console.log(n);
        weirdAlgorithm(n)

    } else if (n % 2 !== 0) {
        n = (n * 3) + 1;
        console.log(n);
        weirdAlgorithm(n);
    }
}

weirdAlgorithm(3);