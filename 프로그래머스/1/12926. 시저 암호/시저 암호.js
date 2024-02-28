function solution(s, n) {
    let result = '';

    for (let i = 0; i < s.length; i++) {
        let charCode = s.charCodeAt(i);

        // 대문자인 경우
        if (s[i] >= 'A' && s[i] <= 'Z') {
            result += String.fromCharCode(((charCode - 65 + n) % 26) + 65);
        }
        // 소문자인 경우
        else if (s[i] >= 'a' && s[i] <= 'z') {
            result += String.fromCharCode(((charCode - 97 + n) % 26) + 97);
        }
        // 알파벳이 아닌 경우
        else {
            result += s[i];
        }
    }

    return result;
}