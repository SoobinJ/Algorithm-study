// 유클리드 호제법 - a를 b로 나눈 나머지를 r이라고 할 때, a,b의 최대 공약수는 b,r의 최대공약수와 같다는 것, 즉 r=0이면 a,b의 최대공약수는 b가 됨
function fnGCD(a, b) {
  return a % b ? fnGCD(b, a % b) : b;
}

function solution(denum1, num1, denum2, num2) {
  let denum = denum1 * num2 + denum2 * num1;
  let num = num1 * num2;
  let gcd = fnGCD(denum, num); //최대공약수

  return [denum / gcd, num / gcd];
}
