const fibonacci = function(x) {
    x=Number(x)
    if (x<0) return "OOPS"
    if (x===0) return 0
    
    let fibonacci_seq=[1,1]
    for (let i=1;i<50;i++){
        let newNum=fibonacci_seq[i]+fibonacci_seq[i-1]
        fibonacci_seq.push(newNum)
    };
    
    return fibonacci_seq[x-1]
};
// 1, 1, 2, 3, 5, 8,
console.log(fibonacci(6))
// Do not edit below this line
module.exports = fibonacci;
