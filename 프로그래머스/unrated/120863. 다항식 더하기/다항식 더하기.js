function solution(polynomial) {
    const arr = polynomial.split(' ')
    const x = arr.filter((e)=>!e.includes('+'))
    let result =x.reduce((acc,el)=>{
        const a = el.split('x')
        const num = a[0]===''?1:Number(a[0])
        if(a.length>1) return acc = [acc[0]+num,acc[1]]
        return acc = [acc[0],acc[1]+num]
    },[0,0])
    
    result = [result[0]&&(result[0]===1?'x':`${result[0]}x`),result[1]]
    
    if(result[0]===0){
        return result[1].toString()
    }
    return result[1]===0?result[0].toString():result.join(' + ')
}