function solution(n) {
    let num=2
    let answer = []
    while (n >= num) {
        if (n % num === 0) {
          answer.push(num)
          n = n / num;
        }else num ++;
    }
    return [...new Set(answer)]
}