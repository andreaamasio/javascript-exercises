const palindromes = function (str) {
    let letters=str.trim().split('')
    
    let chars=letters.filter((letter)=>letter.match(/[a-z\d]/i))
    
    if (chars.join('').toLowerCase()===chars.reverse().join('').toLowerCase()){
        return true
    } else return false
};

// Do not edit below this line
module.exports = palindromes;
