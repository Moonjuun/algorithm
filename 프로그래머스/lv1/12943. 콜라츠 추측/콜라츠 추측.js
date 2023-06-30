function solution(num) {
    var answer = 0;
    
    for(let i = 0; i < 501; i++) {
        if (i == 500) {
            answer = -1
        } else if(num == 1) {
            break; 
        } else if(num % 2 == 0) {
            num = num / 2
            answer += 1
        } else if(num % 2 == 1) {
            num = num * 3 + 1
            answer += 1
        }
    }
    
    return answer;
}