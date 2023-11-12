function solution(a, b) {
    var answer = 0;
    let x=1
    for(let i=2;i<=Math.min(a,b);i++){
        if(a%i===0&&b%i===0){
            x=i
        }
    }
    let y=b/x
    let arr = []
    let num=2
    while(y>=num){
        if(y%num===0){
            arr.push(num===2||num===5)
            y=y/num
        }else num++
    }
    return arr.some((e)=>!e)?(arr.length===0?1:2):1
}