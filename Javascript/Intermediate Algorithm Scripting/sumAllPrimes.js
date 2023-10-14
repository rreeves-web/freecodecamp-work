/* A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num. */

function checkPrime(numberToCheck)
{
    if(numberToCheck == 1)
    {
        return false;
    }
    for (let i = 2; i * i <= numberToCheck; i++)
    {
        if (numberToCheck % i == 0)
        {
            return false;
        }
    }
    return true;
}

function sumPrimes(r)
{
    let l = 0;
    let sum = 0;
    for (let i = r; i >= l; i--)
    {
        let isPrime = checkPrime(i);
        if (isPrime)
        {
            sum = sum + i;
        }
    }
    return sum;
}
 
const res = sumPrimes(10);

console.log(res);