function solution(array, n) {
    return array.reduce((acc,el)=>{
        if(el===n) return acc=acc+1
        return acc
    },0)
}