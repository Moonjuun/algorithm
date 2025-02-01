const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', (line) => {
  input.push(line.trim());
}).on('close', () => {
  const N = parseInt(input[0]); // 첫 번째 줄: 상근이 카드 개수
  const cards = input[1].split(' ').map(Number); // 두 번째 줄: 상근이 카드 목록
  const M = parseInt(input[2]); // 세 번째 줄: 확인할 숫자 개수
  const targets = input[3].split(' ').map(Number); // 네 번째 줄: 확인할 숫자 목록

  // 숫자 카드 목록을 Set으로 변환하여 탐색 효율성 증가
  const cardSet = new Set(cards);

  // 결과 출력
  const result = targets.map(target => (cardSet.has(target) ? 1 : 0));
  console.log(result.join(' '));
});
