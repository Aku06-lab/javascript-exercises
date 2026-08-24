const repeatString = function(str, num) {
    if(num <= 0 ){
        return "";
    }
    let strings = "";

    for(let i = 0; i < num; i++){
        strings += str;
    }
    return strings

};

repeatString('hey',3);
repeatString('hi', 1);
repeatString('bye',0);

// Do not edit below this line
module.exports = repeatString;
