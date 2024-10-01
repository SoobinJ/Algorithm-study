function solution(answers) {
    let num1Count = 0;
    let num2Count = 0;
    let num3Count = 0;
    
    const answersLength = answers.length
    const num1 = [1,2,3,4,5]
    const num2 = [2,1,2,3,2,4,2,5]
    const num3 = [3,3,1,1,2,2,4,4,5,5]
    
    const handleNumArr = (num) => {
        if(answersLength<=num.length) {
            return num.splice(0, answersLength)
        }
        const quo = Math.floor(answersLength/num.length)
        const remain = answersLength%num.length
        
        let arr = [...num]
        for(let i=0;i<quo;i++) {
            arr = arr.concat(num)
        }
        return arr.concat(num.splice(0,remain))
    }
    
    const num1Arr = handleNumArr(num1)
    const num2Arr = handleNumArr(num2)
    const num3Arr = handleNumArr(num3)
    
    answers.map((e,idx)=>{
        if(num1Arr[idx]===e) {
            num1Count++
        }
        if(num2Arr[idx]===e) {
            num2Count++
        }
        if(num3Arr[idx]===e) {
            num3Count++
        }
    })
    
    const counts = [num1Count, num2Count, num3Count]
    const countsSet =[...new Set(counts)]

    if(countsSet.length===1) return [1,2,3]
    if(countsSet.length===2) {
        const max = countsSet.sort((a,b)=>b-a)[0]
        const answer = counts.reduce((acc,el,idx)=>{
            if(el===max) {
                acc.push(idx+1)
                return acc
            }
            return acc
        },[]).sort((a,b)=>a-b)
    
        return answer
    }
    const max = counts.sort((a,b)=>b-a)[0]
    return max===num1Count?[1]:(max===num2Count?[2]:[3])
}