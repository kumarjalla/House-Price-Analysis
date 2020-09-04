//program to search for a particular character in a string

let string="hello,this is charishma from letsupgrade";
let n=string.search("charishma");
console.log(n);

//program to convert minutes to seconds

let min=30;
let sec=(min*60);
console.log(sec);

//program to search an element in a array of strings

let numbers=["one","two","three","four","five"];
console.log(numbers.indexOf("three"));

//pint an array in a reverse order

let array=[1,2,3,4,5];
let reverse=array.reverse();
console.log("reversed array i " +reverse);


//program to display elements containing 'a' in them in an array
let elements=Array["note","keypad","web-cam","cpu"];
for(let i=0;i<elements.length;i++)
 {   
        if (elements[i].includes("a"))
    
console.log(elements[i]);
}
