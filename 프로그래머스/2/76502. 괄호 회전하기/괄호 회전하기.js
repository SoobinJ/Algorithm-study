function solution(s) {
    var answer = 0;
    let str = [...s]
    
    let stack=[];
    
    for(let i=0;i<s.length;i++) {
        const first=str[0]
        str = i===0?str:[...str].splice(1,).concat(first)
        const flg = str.map((e,idx)=>{
            if(e==="("||e==='{'||e==='[') {
                stack.push(e)
                return 
            }
            if(e===')'||e==='}'||e===']') {
                if(stack.length===0) return false
                if((e===')'&&stack.at(-1)==='(')
                   ||(e==='}'&&stack.at(-1)==='{')
                   ||(e===']'&&stack.at(-1)==='[')) {
                    stack.pop()
                    return
                }
            }
        })

        if(stack.length===0&&!flg.includes(false)) answer++
        stack=[]
    }
    return answer;
}