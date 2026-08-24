const removeFromArray = function(arr, num) {
    for(let i= 0; i< arr.length; i++) {
        let val = arr[i];
        if(val == num){
            arr.splice(i,1);
            i--
        }
    }
    console.log(arr);
    return arr

};


removeFromArray([1,2,3,3,4],45)
// Do not edit below this line
module.exports = removeFromArray;
