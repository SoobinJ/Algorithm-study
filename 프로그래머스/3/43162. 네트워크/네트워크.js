function solution(n, computers) {
    var answer = 0;
    const visited = Array(n).fill(false)
    
    function dfs(c,v,node) {
        v[node]=true;
        for(let idx=0;idx<c[node].length;idx++) {
            if(c[node][idx]&&!v[idx]) {
                dfs(c,v,idx)
            }
        }
    }
    
    for(let i=0;i<n;i++) {
        if(!visited[i]) {
            dfs(computers, visited, i)
            answer++
        }
    }
    return answer;
}