function solution(arr)
{
    return arr.filter((e,idx)=>e!==arr[idx-1])
    // return arr.reduce((acc,el,index)=>{
    //    if(arr[index-1]!==el) {
    //        acc.push(el)
    //        return acc
    //    } 
    //     return acc
    // },[])
}