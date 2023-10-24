function solution(my_string, letter) {
    const index = my_string.indexOf(letter)
    return ([...my_string].filter((e)=>e!==my_string[index])).join('')
}