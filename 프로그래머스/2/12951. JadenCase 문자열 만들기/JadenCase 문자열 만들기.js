function solution(s) {
    return s.split(' ').reduce((acc,el)=>{
        if(el==='') return acc+=' '
        return acc+=el[0].toUpperCase()+el.slice(1,).toLowerCase()+' '
    },'').slice(0,-1)
}