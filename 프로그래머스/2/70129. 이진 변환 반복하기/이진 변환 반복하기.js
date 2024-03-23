function solution(s) {
    let binaryCount = 0; // 이진 변환 횟수
    let zeroCount = 0; // 제거된 0의 개수

    while (s !== '1') {
        // 1. 0 제거
        const originalLength = s.length;
        s = s.replace(/0/g, '');
        const removedZeroCount = originalLength - s.length;
        zeroCount += removedZeroCount;

        // 2. 길이를 2진법으로 변환
        s = s.length.toString(2);
        binaryCount++;
    }

    return [binaryCount, zeroCount];
}
