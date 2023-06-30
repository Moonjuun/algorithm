function solution(s) {
    var answer = [];
    let ss = s.split(" ").sort((a,b) => a-b)
    answer.push(ss[0], ss[ss.length-1])
    return answer.join(" ")

}