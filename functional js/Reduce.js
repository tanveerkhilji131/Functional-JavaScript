let arr = [1,2,3,4,5,6,7];
let newArr = arr.reduce((acc,cureent) => acc + cureent ,0)
/*
    acc     cureent     acc+cureent
    0          1            `1
    1          2             3
    3          3             6
    6          4             10
    10         5             15
    15         6             21
    21         7             28
*/
console.log(newArr) // 28 
function Fnreduce(array){
    let res = 0;
    for (let i = 0; i < array.length; i++) {
       res += array[i]
        
    }
    return res
}
console.log(Fnreduce(arr)) 