function solution(seoul) {
    var answer = '';
    var location='';
    
    for(var i=0;i<seoul.length;i++){
        if(seoul[i]==="Kim"){
            location=String(i);
        }
    }
    answer=`김서방은 ${location}에 있다`;
    
    return answer;
}