function solution(s) {
    var answer = '';
    let splitStr = s.split(' ')
    
    splitStr.map((e,idx)=>{
        let lowercase = e.toLowerCase()
        let uppercase = lowercase.slice(0,1).toUpperCase()
        answer+= uppercase + lowercase.substring(1,)
        if(idx!==splitStr.length-1){
            answer += ' '
        }
    })

    return answer;
}