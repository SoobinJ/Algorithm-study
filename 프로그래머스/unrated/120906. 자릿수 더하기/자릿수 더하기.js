function solution(n) {
    return [...n.toString()].reduce((acc,el)=>{
       return acc=acc+Number(el) 
    },0)
}