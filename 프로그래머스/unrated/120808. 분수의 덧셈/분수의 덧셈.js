const getGCD = (num1, num2) => {
  let gcd = 1;

  for (let i = 2; i <= Math.min(num1, num2); i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      gcd = i;
    }
  }

  return gcd;
};

function solution(denom1, numer1, denom2, numer2) {
  let numer = denom1 * numer2 + denom2 * numer1;
  let denom = numer1 * numer2;
  let gcd = getGCD(numer, denom);

  return [numer / gcd, denom / gcd];
}
