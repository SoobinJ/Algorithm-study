function solution(my_string) {
    let str = 'aeiou'
    let answer = [...my_string].filter((e)=>!str.includes(e))
    return answer.join('');
}