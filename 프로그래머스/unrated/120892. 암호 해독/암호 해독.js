function solution(cipher, code) {
    return [...cipher].reduce((acc,el,index)=>{
        return (index+1)%code===0?acc=acc+el:acc
    },'')
}