function solution(s) {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            // 열린 괄호일 경우 스택에 추가
            stack.push('(');
        } else if (s[i] === ')') {
            // 닫힌 괄호일 경우 스택에서 열린 괄호를 꺼냄
            if (stack.length === 0) {
                // 스택이 비어있는데 닫힌 괄호가 나온 경우 false 반환
                return false;
            }
            stack.pop();
        }
    }

    // 스택이 비어있으면 모든 괄호가 짝지어져 있음
    return stack.length === 0;
}
