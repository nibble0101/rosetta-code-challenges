
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


  