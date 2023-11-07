function solution(array) {
    var answer = 0;
    array.map((e)=>{
        const str = e.toString()
        if(str.includes(7)){
            answer = [...str].reduce((acc,el)=>{
                if(el==='7') {
                    return acc=acc+1
                }
                return acc
            },answer)
        }
    })
    return answer
}