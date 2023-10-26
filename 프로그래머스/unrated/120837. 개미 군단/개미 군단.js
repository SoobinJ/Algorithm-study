function solution(hp) {
    const hpArr = [5,3,1]
    let sum =0
    hpArr.reduce((acc,el,i)=>{
        const attack = Math.floor(acc/el)
        sum = sum+attack
        return acc-attack*el
    },hp)
    return sum
}