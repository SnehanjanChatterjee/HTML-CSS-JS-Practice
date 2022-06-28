function swap1(a, b) {
    console.log("In function swap1, Before Swapping a = " + a + " b = " + b);
    // let x = a;
    // a = b;
    // b = x
    [a, b] = [b, a]
    console.log("After Swapping a = " + a + " b = " + b);
}
let swap2 = (a, b) => {
    console.log("In function swap2, Before Swapping a = " + a + " b = " + b);
    // let x = a;
    // a = b;
    // b = x
    [a, b] = [b, a]
    console.log("After Swapping a = " + a + " b = " + b);
}
swap1(10, 20);
swap2(10, 20);