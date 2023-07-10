function solution(n) {
    var answer = 0;
    let arr = [...String(n)].map(Number)
    return Number(arr.sort((function(a,b){
        return b-a
    })).join(""))
}