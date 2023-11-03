function solution(s1, s2) {
    var answer = 0;
    s1.map((e)=>{
        s2.map((k)=>{
            if(e===k) answer++
        })
    })
    return answer;
}