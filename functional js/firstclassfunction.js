//first class function is retern like value exmple is
function fullName(first){
    return "hello" + " " + first; ;
}
function input(callback){
    let first = "Amit";
    console.log(callback(first));
    
}
input(fullName)
//this is firstclassfunction


// highorderfunction a function a using input ya fuction a using output
// exmple

function multi(num1){
    return function (num2){
        return num1 * num2;
    }
}
let double = multi(2)
console.log(double(5));
// this is function reterning by function


// array methodes 
// map() map is array all elementes apply and retern new array; ye sab elemnte per kaam karta hai
// filter() sichwation can chage the element and retern new array; condtion ka base per ye kuch per kaam karta hai
// reduce() all elements  combine the value; and return value

// filter()

let array = [1,2,3,4,5,6,7,8,9,10];
let newArray = array.filter((v)=>{
   return  v % 2 === 0;
})
console.log(newArray);
// map()
let mapArray = [1,2,3,4,5,6,7,8,9,10];
let mapvalue = mapArray.map((v)=>{
   return v+= 2;
    
})
// console.log(mapvalue);

//reduce
let reduceArray= [1,2,3,4,5];
let total = reduceArray.reduce((acc,num)=>{
    return acc + num;
    
})
console.log(total);
// make a sadwich using map,filter and reduce

let items = ["kakri","bread","capati","tamato","banana"];
let removeExtra = items.filter(notuse=>{
   return notuse != "capati" && notuse != "banana"
})
let sadwichItem = removeExtra.map(cut=>{
    return cut += "cut "
    
})
console.log(sadwichItem);

let mixitems = sadwichItem.reduce((acc,mix)=>{
   return  acc + "+ " +  mix 
})

console.log(mixitems);
