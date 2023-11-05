function solution(quiz) {
    var answer = [];
    const arr = []
    quiz.map((e,index)=>{
        arr.push(e.split(' '))
    })
    
    arr.map((e)=>{
        e.reduce((acc,el,index)=>{
            if(index%2!==0 && index!==0){
                if(el==='='){
                    acc === Number(e[index+1]) ? answer.push("O"):answer.push("X")
                    return acc
                }
                const a = Number(e[index - 1]);
                const b = Number(e[index + 1]);
                return acc = index === 1 ? acc + (el === "+" ? a + b : a - b): (el === "+"? acc + b: acc - b);
            }
            return acc
        },0)
    })
    return answer;
}