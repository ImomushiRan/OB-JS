function fib(num) {
    let list = [];
    let num1 = 1;
    let num2 = 1;
    if (num == 1) {
        list = [num1];
        return list;
    } else if (num == 2) {
        list = [num1, num2];
        return list;
    } else {
        list = [num1, num2];
    }
    let num3;
    let i = 2;
    while (list[num - 1] === undefined) {
        num3 = num1 + num2;
        list = [...list, num3];
        num1 = list[i];
        num2 = list[i - 1];
        i++;
    }
    return list;
}

console.log(fib(9));
