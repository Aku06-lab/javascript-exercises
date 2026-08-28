const palindromes = function (str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "")

    const reverse_string =  cleaned.split("").reverse().join("")
    if(cleaned == reverse_string){
        return true
    }
    return false

};
palindromes("racecar")
palindromes('A car, a man, a maraca.')

// Do not edit below this line
module.exports = palindromes;
