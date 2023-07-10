function solution(n) {
    var answer = '';
    let num=0
    while(num<n){
        num%2?answer+='박':answer+='수'
        num++
    }
    return answer;
}