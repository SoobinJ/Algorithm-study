function solution(x) {
    var answer = true;
    let arrNum=Array.from(String(x)).map(y=>parseInt(y));
    let sum=arrNum.reduce((acc,cur)=>acc+cur,0);
    return answer=(x%sum===0)?true:false;
}