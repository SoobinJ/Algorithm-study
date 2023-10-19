function solution(array) {
    const centerNum = (array.length-1)/2
    array.sort((a,b)=>b-a)
    return array[centerNum];
}