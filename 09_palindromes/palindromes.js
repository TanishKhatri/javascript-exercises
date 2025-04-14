const palindromes = function (palindrome) {
  palindrome = palindrome.toUpperCase();
  let palindromeArray = palindrome.split("");
  let aToZ = /^[A-Za-z0-9]*$/;
  let palindromeArrayOnlyAToZ = [];
  for (char of palindromeArray) {
    if (aToZ.test(char)) {
      palindromeArrayOnlyAToZ.push(char);
    }
  }
  let reversePalindromeArrayOnlyAToZ = palindromeArrayOnlyAToZ.toReversed();
  let palindromeAToZ = palindromeArrayOnlyAToZ.join("");
  let reversePalindromeAtoZ = reversePalindromeArrayOnlyAToZ.join("");

  if (palindromeAToZ === reversePalindromeAtoZ) {
    return true;
  }
  return false;
};

// Do not edit below this line
module.exports = palindromes;
