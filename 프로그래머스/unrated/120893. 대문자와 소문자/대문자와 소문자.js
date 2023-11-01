function solution(my_string) {
    return [...my_string].map((e)=>{
        return e.toUpperCase()!==e?e.toUpperCase():e.toLowerCase()
    }).join('')
}