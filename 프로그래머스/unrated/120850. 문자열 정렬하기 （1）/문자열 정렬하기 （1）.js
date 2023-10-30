function solution(my_string) {
    var arr = [...my_string].filter((e)=>Number(e)||e==='0')
    return arr.map(Number).sort()
}