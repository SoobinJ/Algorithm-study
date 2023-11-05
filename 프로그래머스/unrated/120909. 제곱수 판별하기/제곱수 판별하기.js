function solution(n) {
    let num=1
    while(num<=n){
        if(num*num===n){
            return 1
            break;
        }
        num++
    }
    return num===1?1:2
}