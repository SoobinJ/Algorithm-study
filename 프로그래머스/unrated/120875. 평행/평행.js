function solution(dots) {
    const newArr = dots.reduce((acc,el,index)=>{
        let arr=acc
        for(let i = index+1;i<dots.length;i++){
            const m = ((el[1]-dots[i][1])/(el[0]-dots[i][0])).toFixed(2)
            const [x,y]=[0,1,2,3].filter((e)=>e!==index&&e!==i)
            const n = ((dots[x][1]-dots[y][1])/(dots[x][0]-dots[y][0])).toFixed(2)
            console.log(m,n)
            arr.push(m===n)
        }
        return arr
    },[])
    console.log(newArr)
    return newArr.some((e)=>e)?1:0
}