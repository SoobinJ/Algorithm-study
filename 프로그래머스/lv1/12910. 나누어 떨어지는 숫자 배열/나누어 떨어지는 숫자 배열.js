function solution(arr, divisor) {
    var answer = [];
    
    answer = arr.filter(number => 
        number%divisor===0
    )
   return answer = answer.length===0?[-1]:answer.sort(function(a,b){
        return a-b
    })
}