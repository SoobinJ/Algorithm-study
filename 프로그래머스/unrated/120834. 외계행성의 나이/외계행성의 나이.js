function solution(age) {
    let answer = '';
    const arr = [...age.toString()]
    const strArr = ['a','b','c','d','e','f','g','h','i','j']
    arr.map((e)=>{
        answer = answer+strArr[e]
    })
    return answer;
}