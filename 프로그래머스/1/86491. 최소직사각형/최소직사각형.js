function solution(sizes) {
  let maxWidth = 0;
  let maxHeight = 0;

  for (const card of sizes) {
    // 명함마다 가로와 세로 중 더 큰 값 선택
    maxWidth = Math.max(maxWidth, Math.min(...card));
    maxHeight = Math.max(maxHeight, Math.max(...card));
    
    console.log('maxW', maxWidth)
      console.log('maxH', maxHeight)
  }
      const walletSize = maxWidth * maxHeight;

  return walletSize;

    
}