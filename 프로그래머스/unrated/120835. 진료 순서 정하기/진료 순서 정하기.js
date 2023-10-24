function solution(emergency) {
    var answer = [];  
    const sortArr = [...emergency].sort((a,b)=>b-a)
    emergency.map((e)=>{
        answer.push(sortArr.indexOf(e)+1)
    })
    
    return answer;
}