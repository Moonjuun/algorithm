const solution = (input) => {
    const [h, m] = input.split(' ').map((s) => +s);
    const nextH = m < 45 ? (h <= 0 ? 23 : h - 1) : h;
    const nextM = m < 45 ? 60 + m - 45 : m - 45;
    return `${nextH} ${nextM}`;
};
const print = (input) => console.log(solution(input + ''));
process.stdin.on('data', print);