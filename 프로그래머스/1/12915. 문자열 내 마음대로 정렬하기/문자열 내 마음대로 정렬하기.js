function solution(strings, n) {
    return strings.sort(function(a, b) {
        let charA = a.charAt(n);
        let charB = b.charAt(n);
        
        if (charA === charB) {
            return a.localeCompare(b);
        }
        return charA.localeCompare(charB);
    });
}