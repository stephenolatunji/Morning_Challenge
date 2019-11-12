const numSum = (nos) => {
    let add = 0;
    for (i = 1; i <= nos; i++) {
        add += i;
    }
    return add;

}
console.log(numSum(17));