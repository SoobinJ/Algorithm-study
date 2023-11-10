function solution(board) {
    const dangerousIdx=[]
    board.map((e,index)=>{
        e.map((k,kIndex)=>{
            if(k===1){
                const x=index-1<0?0:index-1
                const xPlus = index+1>e.length-1?e.length-1:index+1
                const y=kIndex-1<0?0:kIndex-1
                const yPlus = kIndex+1>e.length-1?e.length-1:kIndex+1
                dangerousIdx.push([x,y])
                dangerousIdx.push([x,kIndex])
                dangerousIdx.push([x,yPlus])
                dangerousIdx.push([index,y])
                dangerousIdx.push([index,kIndex])
                dangerousIdx.push([index,yPlus])
                dangerousIdx.push([xPlus,y])
                dangerousIdx.push([xPlus,kIndex])
                dangerousIdx.push([xPlus,yPlus])
    
            }
        })
    })
    
    return dangerousIdx.length===0?board.length*board.length:board.length*board.length-[...new Set(dangerousIdx.join("|").split("|"))].length
}