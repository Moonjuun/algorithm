function solution(s) {
   const wordToNumber = {
        "zero": 0,
        "one": 1,
        "two": 2,
        "three": 3,
        "four": 4,
        "five": 5,
        "six": 6,
        "seven": 7,
        "eight": 8,
        "nine": 9
    };

    let result = '';
    let currentWord = '';
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char >= '0' && char <= '9') {
            result += char;
        } else {
            currentWord += char;
            if (wordToNumber.hasOwnProperty(currentWord)) {
                result += wordToNumber[currentWord];
                currentWord = '';
            }
        }
    }
    return parseInt(result);
}