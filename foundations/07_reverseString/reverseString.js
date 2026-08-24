const reverseString = function(str) {
    let char = str.split("").reverse();
    char = char.join("");

    return char
    
};

reverseString("hello there")

// Do not edit below this line
module.exports = reverseString;
