const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputs = [];

// 입력 받기
rl.on('line', (line) => {
  const number = parseInt(line.trim());
  if (number === 0) {
    rl.close(); // 입력 종료 조건
  } else {
    inputs.push(number);
  }
});

// 입력 처리 후 이진 탐색 함수 실행
rl.on('close', () => {
  inputs.forEach(target => {
    const searchPath = binarySearch(1, 50, target);
    console.log(searchPath.join(' '));
  });
});

function binarySearch(start, end, target) {
  const path = [];

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    path.push(mid);

    if (mid === target) break;
    if (mid < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return path;
}
