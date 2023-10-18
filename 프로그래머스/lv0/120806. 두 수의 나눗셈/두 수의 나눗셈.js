function solution(num1, num2) {
  return parseInt((num1 / num2) * 1000);
}

//다른 사람 풀이
// Math.trunc() - 소수점 이하는 버림, Math.floor() - 내림
// => Math.trunc()의 경우 소수점 이하는 다 버리기 때문에 -23.2인 경우 -23을 return 함
// 하지만 Math.floor()의 경우 -23.3인 경우 내림을 하기 때문에 -24를 return 함
function solution(num1, num2) {
  return Math.trunc((num1 / num2) * 1000);
}
