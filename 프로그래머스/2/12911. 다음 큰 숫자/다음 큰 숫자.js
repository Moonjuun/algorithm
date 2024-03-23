function solution(n) {
    const originalCount = n.toString(2).match(/1/g).length;
    let nextNumber = n + 1;
    while (nextNumber.toString(2).match(/1/g).length !== originalCount) {
        nextNumber++;
    }
    return nextNumber;
}
