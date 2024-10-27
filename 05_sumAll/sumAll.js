const sumAll = function(a,b) {
    if (Number.isInteger(a)&&
        Number.isInteger(b)&&
        a>=0&&
        b>=0)        
        {    
        let sum=0
        let higher=0
        let lower=0
        if (a>b){
            higher=a;
            lower=b
        } else if (a<b){
            higher=b;
            lower=a
        } else {
            return a+b
        }
        
        for (let i=lower;i<=higher;i++){
            
            sum+=i
        }
        
        return sum
        
    } else {
        return "ERROR"
    }
    }

// Do not edit below this line
module.exports = sumAll;
