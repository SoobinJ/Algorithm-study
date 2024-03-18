function solution(arr)
{
    // let answer = []
    // arr.reduce((acc,el)=>{
    //     if(acc!==el) answer.push(el)
    //     return el
    // },-1)
    // return answer
    
    return arr.reduce((acc,el,index)=>{
       if(arr[index-1]!==el) {
           acc.push(el)
           return acc
       } 
        return acc
    },[])
}