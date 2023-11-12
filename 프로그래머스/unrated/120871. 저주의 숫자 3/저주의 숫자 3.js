function solution(n) {
    let num=1
    let count=1
    while(count!==n){
        num=num+1
        if(num%3!==0&&!num.toString().includes('3')){
            count++
        }
    }
    return num
}