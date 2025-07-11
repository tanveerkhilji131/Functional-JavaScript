// pipe function is return multiple  pure function and combined  value return

let plus = v => v + v;
let miness = v => v - 2 ;
let multi = v => v * 2;
// function composition
let functonCombine = plus(miness(multi(5)));

let Pipe = (...Funs) => (input) => Funs.reduce((acc,fn)=>fn(acc),input)
let pipedFn = Pipe(plus,miness,multi)
console.log(pipedFn(5))

