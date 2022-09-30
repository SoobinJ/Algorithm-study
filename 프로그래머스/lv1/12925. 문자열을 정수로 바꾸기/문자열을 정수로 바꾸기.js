function solution(s) {
    var answer = 0;
    var string='';
    var sign='';
    var arr=Array.from(s);
    if(arr[0]==='-'){
        arr.shift();
        sign='-';
    }
    for(var i=0;i<arr.length;i++){
        string=string+arr[i];
    }
    if(sign==='-'){
        answer=parseInt(string)*(-1);
    }else{
        answer=parseInt(string);
    }

    return answer;
}