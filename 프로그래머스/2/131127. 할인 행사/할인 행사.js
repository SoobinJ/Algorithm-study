function solution(want, number, discount) {
    let wantObj={}
    for(let i=0;i<want.length;i++) {
        wantObj[want[i]]=number[i]
    }
    
    let answer = 0
    
    for(let i=0;i<discount.length-9;i++){
        const discountObj={};
        
        for(let j=i;j<i+10;j++) {
            if(wantObj[discount[j]]){
                discountObj[discount[j]]=(discountObj[discount[j]]||0)+1
            }              
        }
        
        const wantKeys = Object.keys(wantObj)
        const discountKeys = Object.keys(discountObj)
        
        if(wantKeys.length===discountKeys.length) {
            if(wantKeys.every((e)=>wantObj[e]===discountObj[e])) answer+=1
        }
    }
    
    return answer
    
}