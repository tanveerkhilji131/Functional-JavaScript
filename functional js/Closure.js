// closure wo hota hai jo outer function ka ander jo inner function hota hai jab wo return ya call hota hai our sath me outer variable ki value le kare return hota hai isko clusure haotah hai

// what is clusure this is a outer function inside inner function return value outer function thsi is closure  for exmple
function outer(){
    let outerValue = "tanveer"
    return function inner(){
        return `my name is ${outerValue}`
    }
}
let IneerFn = outer();
console.log(IneerFn()) //my name is tanveer

// this is most imprtent 
