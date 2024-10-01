function solution(numbers) {
    const max = numbers.length
    return [...new Set(numbers.reduce((acc,el,idx)=>{
       for(let i=idx+1;i<max;i++){
           const num = el+numbers[i]
           acc.push(num)
       } 
        return acc
    },[]))].sort((a,b)=>a-b)
}