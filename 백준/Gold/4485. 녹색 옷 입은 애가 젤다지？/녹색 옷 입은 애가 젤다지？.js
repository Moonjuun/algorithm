const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 우선순위 큐를 위한 전역 변수
let pqValues = [];

// 우선순위 큐에 요소를 추가하는 함수
function enqueue(val, cost) {
  pqValues.push({ val, cost }); // 새로운 요소 추가
  pqValues.sort((a, b) => a.cost - b.cost); // 비용 기준으로 정렬
}

// 우선순위 큐에서 가장 비용이 낮은 요소를 제거하고 반환하는 함수
function dequeue() {
  return pqValues.shift(); // 첫 번째 요소 제거 및 반환
}

// 다익스트라 알고리즘을 사용하여 최소 비용을 계산하는 함수
function dijkstra(N, grid) {
  // 상하좌우 이동을 위한 방향 배열 (위, 오른쪽, 아래, 왼쪽)
  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  // 각 칸까지의 최소 비용을 저장하는 2D 배열
  const dist = Array.from({ length: N }, () => Array(N).fill(Infinity));
  dist[0][0] = grid[0][0]; // 시작점 [0][0]의 비용은 해당 칸의 도둑루피 값

  // 우선순위 큐 초기화 및 시작점 추가
  pqValues = []; // 큐 배열 초기화
  enqueue([0, 0], dist[0][0]);

  // 큐가 빌 때까지 탐색
  while (pqValues.length) {
    // 현재 비용이 가장 낮은 노드
    const { val, cost } = dequeue();
    const [x, y] = val;

    // 이미 더 적은 비용으로 방문한 경우 무시
    if (cost > dist[x][y]) continue;

    // 상하좌우로 이동 가능한 칸을 탐색
    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      // 동굴 범위 내에 있는지 확인
      if (nx >= 0 && nx < N && ny >= 0 && ny < N) {
        // 새로운 경로의 비용 = 현재 비용 + 다음 칸의 도둑루피
        const newCost = dist[x][y] + grid[nx][ny];

        // 새로운 경로가 기존 경로보다 비용이 적다면 갱신
        if (newCost < dist[nx][ny]) {
          dist[nx][ny] = newCost;
          enqueue([nx, ny], newCost);
        }
      }
    }
  }

  // 목표 지점 [N-1][N-1]의 최소 비용 반환
  return dist[N-1][N-1];
}

// 입력 처리
let lineIdx = 0; // 입력 라인을 추적하는 인덱스
let problemIdx = 1; // 문제 번호

while (true) {
  // 동굴 크기 N
  const N = parseInt(input[lineIdx++]);

  // N이 0이면 입력 종료
  if (N === 0) break;

  // N x N 동굴
  const grid = [];
  for (let i = 0; i < N; i++) {
    grid.push(input[lineIdx++].split(' ').map(Number));
  }

  // 다익스트라 알고리즘을 실행하여 최소 비용 계산
  const result = dijkstra(N, grid);

  // 결과 출력
  console.log(`Problem ${problemIdx}: ${result}`);
  problemIdx++;
}