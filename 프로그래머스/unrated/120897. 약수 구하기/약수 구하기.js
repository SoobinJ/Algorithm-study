function solution(n) {
    var answer = [];
    let num=1
    while(n>=num){
        if(n%num===0){
            answer.push(num)
        }
        num++
    }
    
    return answer;
}