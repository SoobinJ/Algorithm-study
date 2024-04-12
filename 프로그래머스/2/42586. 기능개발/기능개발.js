function solution(progresses, speeds) {
  var answer = [];
  let count = 1;

  progresses.slice(1).reduce((acc, el, index) => {
    const a = Math.ceil((100 - el) / speeds[index + 1]);
      console.log(a,acc)
    if (acc >= a) {
      count++;
      return acc;
    }
    answer.push(count);
    count = 1;
    return a;
  }, Math.ceil((100 - progresses[0]) / speeds[0]));
  answer.push(count);

  return answer;
}