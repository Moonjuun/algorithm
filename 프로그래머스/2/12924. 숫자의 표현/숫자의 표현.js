function solution(n) {
    let answer = 0;

    // 연속된 자연수로 표현하기 위해서는 중간값을 기준으로 양 옆으로 홀수개의 자연수를 선택할 때 가능
    for (let i = 1; i <= n; i += 2) {
        if (n % i === 0) {
            // n이 i로 나누어 떨어지면, i를 중간값으로 하는 연속된 자연수들로 표현 가능
            answer++;
        }
    }

    return answer;
}