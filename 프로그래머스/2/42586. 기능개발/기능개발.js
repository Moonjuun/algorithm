function solution(progresses, speeds) {
    const answer = [];
    let prevDeployDay = 0;
    
    for (let i = 0; i < progresses.length; i++) {
        const remainingProgress = 100 - progresses[i];
        const deployDay = Math.ceil(remainingProgress / speeds[i]);
        
        if (deployDay > prevDeployDay) {
            answer.push(1);
            prevDeployDay = deployDay;
        } else {
            answer[answer.length - 1]++;
        }
    }
    
    return answer;
}
