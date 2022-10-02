function solution(numbers) {
    var answer = 0;
    for(var i=0;i<10;i++){
        if(numbers.find(v=>v===i)===undefined){
            answer=answer+i;
        }
    }
    return answer;
}