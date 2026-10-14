// note :  to comment uncomment code blocks running altogather different 
// function can cause script failure as this are practise examples from odin



const sum = require("./sum");

test("adds 1 + 2 to equal 3",()=> {
    expect(sum(1,2)).toBe(3);
});

// capitalize test
import { capitalize } from "./sum.js";

test("capitalizes the first character",()=> {
    expect(capitalize("this is me")).toBe("This is me");
});


//reverse string test

import { reverseString } from "./sum.js";

test("reverses the string",()=> {
    expect(reverseString("cat")).toBe("tac");
});

// calculator test 

import { operations } from "./sum.js";

test("perform operations",()=> {
    expect(operations(3,3,"+")).toBe(6);
});
test("perform operations",()=> {
    expect(operations(3,2,"-")).toBe(1);
});
test("perform operations",()=> {
    expect(operations(1,2,"*")).toBe(2);
});
test("perform operations",()=> {
    expect(operations(1,0,"/")).toThrow("not divisible by zero");
});

// cipher test 
import { ceaserCipher } from "./sum.js";

test("perform ceaser on string",()=> {
    expect(ceaserCipher("xyz", 3)).toBe("abc");
});

test("perform ceaser on string",()=> {
    expect(ceaserCipher("heLLo", 3)).toBe("khOOr");
});

test("perform ceaser on string",()=> {
    expect(ceaserCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

// analyzw=e array test 


import {analyzeArray} from "./sum.js";

test("analyze the array ",()=> {
        expect(analyzeArray([1,8,3,4,2,6])).toEqual({
            avg: 4,
            len: 6,
            min: 1,
            max: 8,
            sum: 24
          });
    });

