function jumpFloor(n) {
    if(n <= 2) {
        return n;
    }
    let ac1 = 1,
        ac2 = 2;
    for(let i = 3; i <= n; i++) {
        [ac1, ac2] = [ac2, ac1 + ac2];
    }
    return ac2;
}
