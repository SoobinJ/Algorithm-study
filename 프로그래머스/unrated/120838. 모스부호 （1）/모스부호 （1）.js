const morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
}
    
function solution(letter) {
    var answer = '';
    const letterArr = letter.split(' ')
    letterArr.map((e)=>{
        answer=answer+morse[Object.keys(morse).find(key=>key===e)]
    })
    return answer;
}