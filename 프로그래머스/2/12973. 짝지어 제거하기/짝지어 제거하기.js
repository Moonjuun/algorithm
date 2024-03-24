function solution(S) {
    let stack = [];
    
    for (let char of S) {
        if (stack.length > 0 && stack[stack.length - 1] === char) {
            stack.pop(); // 짝을 이루는 문자 제거
        } else {
            stack.push(char); // 짝을 이루지 않는 경우 스택에 추가
        }
    }
    
    return stack.length === 0 ? 1 : 0; // 스택이 비어있으면 1 반환, 아니면 0 반환
}
