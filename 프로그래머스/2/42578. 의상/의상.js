function solution(clothes) {
    const clothObj={}
    for(const c of clothes) {
        if(clothObj[c[1]]) clothObj[c[1]]=[...clothObj[c[1]], c[0]]
        else clothObj[c[1]]=[c[0]]
    }
    
    let answer = 0
    if(Object.keys(clothObj).length===1) {
         for(const j in clothObj) {
            answer+=clothObj[j].length
        }   
        return answer
    }

    answer+=(Object.keys(clothObj).reduce((acc,el)=>{
        return acc*(clothObj[el].length+1)
    },1)-1)

    return answer;
}