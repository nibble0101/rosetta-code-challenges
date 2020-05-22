
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

  