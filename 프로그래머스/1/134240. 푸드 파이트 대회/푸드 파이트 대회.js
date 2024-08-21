function solution(food) {
    let foodArray = food.splice(1); // [2, 3, 4]로 가정 (입력에서 첫 번째 요소 제외)
    let answer = '';

    // 첫 번째 반복문: foodArray에 따라 숫자를 문자열로 반복
    foodArray.forEach((count, index) => {
        answer += String(index + 1).repeat(Math.floor(count / 2));
    });

    // 중간에 0 추가
    answer += '0';

    // 두 번째 반복문: 역순으로 숫자를 문자열로 반복
    for (let i = foodArray.length - 1; i >= 0; i--) {
        answer += String(i + 1).repeat(Math.floor(foodArray[i] / 2));
    }

    return answer;
}
