function rectCover(n) {
    if(number <= 2) {
       return number;
   }
    let ac1 = 1,
        ac2 = 2;
    for(let i = 3; i <= number; i++) {
        [ac1, ac2] = [ac2, ac1 + ac2];
    }
    return ac2;
}
