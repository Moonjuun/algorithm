function solution(n, arr1, arr2) {
    const result = [];
    
    for (let i = 0; i < n; i++) {
        let mapLine = '';
        let binary = (arr1[i] | arr2[i]).toString(2);
        while (binary.length < n) {
            binary = '0' + binary;
        }
        
        for (let j = 0; j < n; j++) {
            if (binary[j] === '1') {
                mapLine += '#';
            } else {
                mapLine += ' ';
            }
        }
        
        result.push(mapLine);
    }
    
    return result;
}