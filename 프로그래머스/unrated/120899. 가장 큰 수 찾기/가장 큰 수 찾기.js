function solution(array) {
    return [[...array].sort((a,b)=>b-a)[0],array.indexOf([...array].sort((a,b)=>b-a)[0])]

}