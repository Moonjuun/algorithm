function solution(s) {
    // 문자열을 공백을 기준으로 나눠 배열로 변환
    const words = s.split(' ');

    // 각 단어에 대해 JadenCase 적용
    const jadenCasedWords = words.map(word => {
        if (word.length === 0) {
            // 빈 문자열은 그대로 반환
            return word;
        }

        // 단어의 첫 글자를 대문자로 변환
        const firstChar = word[0].toUpperCase();
        // 나머지 글자는 소문자로 변환
        const restOfWord = word.slice(1).toLowerCase();

        // JadenCase로 조합한 단어 반환
        return firstChar + restOfWord;
    });

    // 배열을 다시 문자열로 합쳐 리턴.
    return jadenCasedWords.join(' ');
}
