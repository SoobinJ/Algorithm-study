function solution(spell, dic) {
    const result = dic.map((e)=>{
        return (spell.map((k)=>e.includes(k)).every((i)=>i))
    })
    return result.some((e)=>e)?1:2
}