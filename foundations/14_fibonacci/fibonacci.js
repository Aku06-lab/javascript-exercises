const fibonacci = function(number) {
    const result =[0,1]

    for (let i = 2; i<= 15; i++){
       result.push(result[i-1] + result[i-2])
    }
    return result[number]



};
fibonacci(4)
// Do not edit below this line
module.exports = fibonacci;
