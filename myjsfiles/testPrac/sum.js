// note :  to comment uncomment code blocks running altogather different 
// function can cause script failure as this are practise examples from odin

function sum(a, b){
    return a + b; 
}

module.exports = sum;


// return capitalize first character

 export function capitalize(str){
    return str[0].toUpperCase() + str.slice(1);

}
 
//r eturn reverse strings


 export function reverseString(str){
    return str.split("").reverse().join("");

}

// calculator functions 

 export function operations(a, b, op){
    if (op === '*'){
        return a * b;
    }
    else if(op === "+"){
        return a + b ;
    }
    else if( op === "/"){
        if(b === 0){
            throw new Error("not divisible by zero")

        }
        return a / b;
    }
    else if(op === "-"){
        return a -b ;
    }
    else{
        throw new Error("please enter a valid operation");
    }

}


// ceaser cipher 

export function ceaserCipher(str, shift){
    let stringSplit = str.split("");
    let cipherstring = [];
    

    stringSplit.forEach(element => {
        const codeactual = element.charCodeAt(0)
        let newCode;

        if (codeactual >=65 && codeactual <= 90){
            const newPosition = ((codeactual - 65 + shift) % 26 + 26)% 26 + 65;
            newCode = String.fromCharCode(newPosition);
        }
        else if (codeactual >=97  && codeactual <= 122){
            const newPosition = ((codeactual - 97 + shift) % 26 + 26)% 26 + 97;
            newCode = String.fromCharCode(newPosition);
        }
        else{
            newCode = element;
        }
        
        cipherstring.push(newCode);
        
        
    });
    return cipherstring.join("");
}

// analyze array function


export function analyzeArray(arr){
    const len = arr.length;
    let sum = 0;
    
    let min = arr[0];
    let max= arr[0];

    for(let i = 0 ; i < len ; i++){
        sum = sum + arr[i];
        
        
        if (min > arr[i]){
            min = arr[i];
        }
        if(max < arr[i]){
            max = arr[i]
        }

    }
    const avg = sum / len;
    return {
        avg:avg,
        len: len,
        min: min,
        max: max,
        sum: sum
    };
}