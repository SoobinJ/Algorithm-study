function solution(n) {
    for(let i=1;;i++){
        const num = n*i/6
        if(num===Math.trunc(num)){
            return num
        }
    }
}