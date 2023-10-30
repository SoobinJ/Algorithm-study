function count(num) {
    let count = 0
    for(let i=1;i<=num;i++){
        if(num%i===0){
            count=count+1
        }
    }
    return count
}

function solution(n) {
    var answer = 0;
    for(let i=1;i<=n;i++){
        if(count(i)>=3) answer=answer+1
    }
    return answer;
}