function solution(price, money, count) {
    var answer =0;
    var sum=0;
    for(var i=1;i<count+1;i++){
        sum=sum+price*i;
    }
    answer=sum-money;
    if(answer<0){
        answer=0;
    }
    return answer;
}