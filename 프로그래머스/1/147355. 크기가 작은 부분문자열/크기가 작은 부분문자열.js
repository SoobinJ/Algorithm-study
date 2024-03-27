function solution(t, p) {
        let count = 0;
    for(let i=0; i<=t.length-p.length; i++) {
        let value = t.slice(i, i+p.length);
        if(+p >= +value) count++;
    }
    return count;
    // var answer = 0;
    // let n = 0
    // let length = p.length
    // while(true) {
    //     if(n+length>t.length) break;
    //     t.slice(n,n+length)<=p&&answer++
    //     n++
    // }
    // return answer;
}