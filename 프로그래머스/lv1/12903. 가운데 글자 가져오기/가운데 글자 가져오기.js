function solution(s) {
    var answer = '';
    var arr=Array.from(s);
    if(s.length%2==0){
        answer=answer+arr[s.length/2-1]+arr[s.length/2];
    }else{
        answer=answer+arr[parseInt(s.length/2)];
    }
    return answer;
}