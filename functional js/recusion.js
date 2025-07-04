//Iteration vs recusion


function For(num){
    total = null;
    for(let i = 0 ; i <= num.length; i++){
        total += i;
        
    }
    return total
}
// console.log(For([0,1,2,3]));
// this is a Iteration


function recusion(num){
    if(num === 0 || num === 1){
        return 1;    //this is base case
    }
    else{
     return num * recusion(num - 1)
            // this is recursive case
    }
}
// console.log(recusion(5));


function towthree(num1,num2){
    if(num2 === 0){
        return 1;
    }
    else{
     return   num1 * towthree(num1,num2-1);

    }
}
// console.log(towthree(2,4));

function sumlasttwodigite(num){
   if(num == 0 || num == 1) return 1
    
        return sumlasttwodigite(num - 1 ) + sumlasttwodigite(num - 2)
    
}
// console.log(sumlasttwodigite(6));

// recusion case 
function sum(num,res = 0){
    if(num == 0) return res
    return sum(num - 1,res +=num)
}
// console.log(sum(5))

