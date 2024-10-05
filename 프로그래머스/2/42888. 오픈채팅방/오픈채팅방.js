function solution(record) {
    var answer = [];
    const uidObj={}
    for(const r of record) {
        const [flag, uid, name=''] = r.split(' ')
        if(flag==='Enter'||flag==='Change') {
            uidObj[uid]=name
        }
    }
    
    for(const r of record) {
        const [flag, uid, name=''] = r.split(' ')
        if(flag==='Enter') answer.push(`${uidObj[uid]}님이 들어왔습니다.`)
        if(flag==='Leave') answer.push(`${uidObj[uid]}님이 나갔습니다.`)
    }
    
    return answer;
}