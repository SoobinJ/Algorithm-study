function solution(phone_number) {
    var answer = '';

    var point=phone_number.length-4;
    var backNum=phone_number.slice(point);
    var frontNum='';
    
    for(var i=0;i<point;i++){
        frontNum=frontNum+'*';
    }
    answer=frontNum+backNum;
    
    return answer;
}