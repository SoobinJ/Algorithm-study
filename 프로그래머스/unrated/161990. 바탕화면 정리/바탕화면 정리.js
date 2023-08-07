function solution(wallpaper) {
    var answer = [];
    
    let x = []
    let y = []
    
    wallpaper.map((e,idx)=>{
        if(e.includes('#')){
            x.push(idx)
        }
        
        for(let i =0;i<e.length;i++){
            if(e.slice(i,i+1)==='#'){
                y.push(i)
            }
        }
    })
    
    x.sort(function(a,b){
        return a-b
    })
    
    y.sort(function(a,b){
        return a-b
    })
    
    answer.push(x[0])
    answer.push(y[0])
    answer.push(x[x.length-1]+1)
    answer.push(y[y.length-1]+1)

    return answer;
}