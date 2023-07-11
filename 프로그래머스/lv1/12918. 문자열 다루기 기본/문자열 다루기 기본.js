function solution(s) {
    var answer = true;
    if(s.length===4||s.length===6){
        return answer = isNaN(s)?false:s.includes('e')?false: true;
    }else{
        return false
    }
}