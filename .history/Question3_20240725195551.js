Question1:give a function that can get integer and if the number forward and backward is same return true.

//input: x=121 ----->>> output:true
//input: x=10 ----->>> output:false

function isPalindrome(x) {
  return x < 0 ? false : x === +x.toString().split("").reverse().join("");
}

const result = isPalindrome(121);

console.log(result);