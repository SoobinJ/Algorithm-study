function solution(arr) {
    var answer = [];
    
    const minNum = Math.min(...arr)
    for(let i =0;i<arr.length;i++) {
        if(arr[i]===minNum){
            arr.splice(i,1)
        }
    }
    
    answer = arr.length<=0?[-1]:arr
    
    return answer;
}