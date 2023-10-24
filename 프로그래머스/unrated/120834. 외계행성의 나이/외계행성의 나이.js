function solution(age) {
    let answer = '';
    const arr = [...age.toString()]
    const strArr = 'abcdefghij'
    arr.map((e)=>{
        answer = answer+strArr[e]
    })
    return answer;
}