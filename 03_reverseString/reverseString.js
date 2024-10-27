const reverseString = function(string) {
    let letters=[]
    for (let i=0;i<string.length;i++){
        letters.unshift(string[i])
    }
    output=letters.join("")
    return output
};


// Do not edit below this line
module.exports = reverseString;
