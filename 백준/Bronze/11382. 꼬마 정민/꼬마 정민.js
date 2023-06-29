const fs = require('fs');

const input = fs.readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);

const [A, B, C] = [input[0], input[1], input[2]];

const sum = A + B + C;

console.log(sum);