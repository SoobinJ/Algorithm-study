function solution(n) {
    var answer = [];
    
    var string = String(n);
    var arr=Array.from(string);

    for(let i=arr.length-1;i>=0;i--){
        answer.push(parseInt(arr[i]))
    }


    return answer;
}