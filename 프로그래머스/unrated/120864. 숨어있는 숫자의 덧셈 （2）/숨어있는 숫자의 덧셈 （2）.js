function solution(my_string) {
    return my_string.split(/[a-z]|[A-Z]/ ).filter((e)=>e!=='').reduce((acc,el)=>{
        return acc=acc+Number(el)
    },0)
}