function solution(array, commands) {
    let result = [];
    
    for (let cmd of commands) {
        let slicedArray = array.slice(cmd[0] - 1, cmd[1]);
        slicedArray.sort((a, b) => a - b); // 숫자를 오름차순으로 정렬
        
        result.push(slicedArray[cmd[2] - 1]);
    }
    
    return result;
}
