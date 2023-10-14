/* Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 0 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first seven numbers of the Fibonacci sequence are 0, 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5. */

function sumFibs(num) {
    let t1 = 0;
    let t2 = 1;
    let sum = 0;
    let i = 0;
    for (let nextTerm = t1 + t2; nextTerm <= num; i++) {
        t1 = t2;
        t2 = nextTerm;
        nextTerm = t1 + t2;
        if (t2 <= 1) {
            sum += t2;
        }
        if (t2 % 2 == 1) {
            sum += t2;
        }
    }
    return sum;
}

const res = sumFibs(10);
const res2 = sumFibs(1000);
const res3 = sumFibs(75025);

console.log(res);
console.log(res2);
console.log(res3);