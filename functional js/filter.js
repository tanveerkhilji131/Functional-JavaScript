let numbers = [1,2,3,4,5,6,7,8,9];
function isEven(arr,index= 0,total = []){
    if(arr.length <= index){
        return total
    }
    if (arr[index] % 2 === 0) {
        total += arr[index]
    }
    return isEven(arr,index + 1,total)
}
const even = Array(isEven(numbers));
console.log((even));

//isodd
function isEven(arr,index= 0,total = []){
    if(arr.length <= index){
        return total
    }
    if (arr[index] % 2 !== 0) {
        total += arr[index]
    }
    return isEven(arr,index + 1,total)
}
const odd = Array(isEven(numbers));
console.log((odd));

