function solution(n)
{
    var answer = 0;

    var str=String(n);
    var split=Array.from(str);
    
    for(var i=0;i<split.length;i++){
        answer=answer+parseInt(split[i]);
    }

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log(answer);

    return answer;
}