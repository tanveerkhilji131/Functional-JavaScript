let array = [1,2,3,4,5,6,7,8];
//array * 2 
function multibytwo(arr,index= 0,total = []){
    if(arr.length <= index){
        return total
    }
     console.log(arr  * index);
     
    return multibytwo(arr,index + 1 ,total)
}
console.log(multibytwo(array));
