// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {
    for (let list in menu){
        if(typeof menu[list] === "number"){
           menu[list] = menu[list] * 2;
        }
        else {
            list = menu[list]
        }


    };
    console.log(menu)
};
multiplyNumeric(menu);

// // after the call
// menu = {
//     width: 400,
//     height: 600,
//     title: "My menu"
// };