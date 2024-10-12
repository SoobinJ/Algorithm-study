class Queue {
    items=[];
    front=0;
    rear=0;
    
    push(item) {
        this.items.push(item)
        this.rear++
    }
    pop(){
        return this.items[this.front++]
    }
    isEmpty(){
        return this.front===this.rear
    }
}

const isConnected = (str1, str2) => {
  let count = 0;
  const len = str1.length;
  
  for(let i = 0; i < len; i++) {
    if(str1[i] !== str2[i]) count++;
  }
  
  return count === 1 ? true : false;
}

function solution(begin, target, words) {
    let adj={}
    for(const w of [begin, ...words]) {
        if(!adj[w]) adj[w]=[]
        words.map((e)=>{
          const c = [...e].reduce((acc,el,idx)=>{
             return [...w][idx]===el?acc=acc+1:acc
          },0)
          if(c>1&&w!==e) adj[w].push(e)
        })
    }
    
    const visited = {[begin]:0}
    const q = new Queue();
    
    q.push(begin)
    
    while(!q.isEmpty()) {
        const node = q.pop();
        if(node === target) break
        
        for(const word of words) {
            if(isConnected(word,node) && !visited[word]) {
                visited[word] = visited[node] + 1;
                 q.push(word);
            }
        }
        
        // for(let n of adj[node]||[]) {
        //     if(!visited[n]) {
        //         q.push(n)
        //         visited[n]=visited[node]+1
        //     }
        // }
    }
    
    return visited[target]?visited[target]:0
}