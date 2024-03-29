function solution(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
     // 첫 번째 원소이거나 이전에 나온 숫자와 다른 경우
    if (i === 0 || arr[i] !== arr[i - 1]) {
      result.push(arr[i]);
    }
  }
  return result;
}
