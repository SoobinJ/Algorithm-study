const getGCD = (num1, num2) => {
  let gcd = 1;

  // 최대공약수는 num1, num2의 공통된 약수 중 가장 큰 정수
  // 2부터 num1,num2 중 작은 값까지 모든 정수로 나눔, 둘다 나누어 떨어지는 수를 재할당하며 반복
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
