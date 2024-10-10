function solution(numbers, target) {
    function dfs(i, sum) {
        if(numbers.length===i) return sum===target?1:0
        
        const add = dfs(i+1, sum+numbers[i])
        const sub = dfs(i+1, sum-numbers[i])
        
        return add+sub
        
    }
    
    return dfs(0,0)
}