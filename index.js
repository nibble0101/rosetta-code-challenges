
// Rosetta Code: Count occurrences of a substring

function countSubstring(str, subStr) {
    const a = str.length;
    const b = (str.split(subStr)).join('').length;
    return (a - b)/subStr.length;
  }
  
//Rosetta Code: Letter frequency

function letterFrequency(txt) {
    const arr = txt.split(''), obj = {};
    arr.forEach(val => {
      if(obj[val]){
         obj[val]++;
      }else{
        obj[val] = 1;
      }
    })
    return Object.entries(obj).sort();
  }
//Rosetta Code: Dot product
  function dotProduct(ary1, ary2) {
    const product = ary1.reduce((prev, curr, ind) => {
        return prev  + curr * ary2[ind]  
    }, 0);
  
    return product
  }
//Rosetta Code: Hash from two arrays

function arrToObj (keys, vals) {
  const  obj = {}
  keys.forEach((v, i) => {
    obj[v] = vals[i];
  })
  return obj;
}
//Rosetta Code: Least common multiple

//Euclidean Algorithm

function LCM(A) {
  if(A.length < 2){
    return new Error('There must be atleast 2 numbers!')
  }
  A.sort((a, b) => a - b);
  const gcf = (a, b) => {
    if(!a){
      return b
    }
    return gcf(b % a, a)
  }
 const lcm = (a, b) =>  {
    return (a * b)/gcf(a, b)
 }
 while(A.length > 1){
   const a = Math.min(A[0], A[1])
   const b = Math.max(A[0], A[1])
   const l = lcm(a, b)
   A.splice(0, 2, l)
 }
 return A[0]
}

//Rosetta Code: Left factorials

function leftFactorial(n) {
  if(n < 0){
    throw new Error(`Expected ${n} to be postive.`);  
  };
  if(!n){
    return n;
  };
  
  const f = []; // f = [0!, 1!, 2!, ..., (n-1)!] 
  n = n - 1;   // !n = 0! + 1! + 2! + ... + (n - 1)!
 
function factorial(n){
    if(!n){
      return f[n] = 1;
    };
     return f[n] = factorial(n - 1) * n;
  }
  factorial(n);
  const sum = f.reduce((acc, curr) => acc + curr);
  return sum;
}

//Rosetta Code: Sum multiples of 3 or 5 or both.
// This solution is inefficient

function sumMults(n) {
  let mult  = [], 
      sum = 0,
      max = Math.floor(n/3),
      i = 1;
      

  for(i; i <= max; i++){
      if(i * 3 < n){
        if(!mult.includes(i * 3)){
          mult.push(i * 3);
          sum += i * 3;
        }
      };
      if(i * 5 < n){
        if(!mult.includes(i * 5)){
          mult.push(i * 5);
          sum += i * 5;
        }
      };
  };
  return sum;
};

