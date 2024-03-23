const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = '';

rl.on('line', function (line) {
    input = line;
    convertAndPrint(input);
    rl.close();
});

function convertAndPrint(str) {
    let convertedStr = '';
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char >= 'a' && char <= 'z') {
            convertedStr += char.toUpperCase();
        } else if (char >= 'A' && char <= 'Z') {
            convertedStr += char.toLowerCase();
        } else {
            convertedStr += char;
        }
    }
    console.log(convertedStr);
}
