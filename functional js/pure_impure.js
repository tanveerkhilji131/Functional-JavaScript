//pure or impure function

// pure function 

function pure(name){
    return "hi" +" "+ name;
}
console.log(pure("tanveer"))
// this is pure function ku ki ye hamesh ek hi input ka liya ek hi output deta hai 
// koi side effect nahi  matleb bahare ki value ko change nahi karta ya golobal vari ko chage nahi karta 

// impure function 
let name = "tanveer";
function impure(){
    console.log("hello" , "" + name)
}
impure()
// ek input ka aalge alleg output de sakta hai
// kou ki ya golbal variable name per nirbar hai 

// purefunction ye side effets nahi dakta bahare  or ye ek input ka sath ek output deta hai wo bhi seme deta hai
// impurefunction  ye side effets dalta hai or ye ek input ka sath alage alag output deta hai jase 
 function impure(){
    return Math.random()
 }
console.log( impure());
console.log( impure());

