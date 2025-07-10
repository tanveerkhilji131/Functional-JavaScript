//Function composition is both function combine and retun function combined value for exmple
let plus = v => v + v;
let miness = v => v - 2 ;
let multi = v => v * 2;
let functonCombine = plus(miness(multi(5)));
console.log(functonCombine)
