function solution(sides) {
    const [min,max]=[Math.min(sides[0],sides[1]),Math.max(sides[0],sides[1])]
    return 2*min-1
}