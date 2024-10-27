const removeFromArray = function(array, ...extras) {
    // let myArray=array
    
    // function checkIfPresent(x){
    //     let index=myArray.indexOf(x)
    //     if (index===-1){            
    //         return false
    //     } else {            
    //         return true
    //     }
    // }

    // for (i in extras){        
    //     while (checkIfPresent(extras[i])){
    //         index=myArray.indexOf(extras[i])
    //         myArray.splice(index,1)
    //     }
    // }

    // return myArray

    // with filter function
    let newArray=array.filter(function(value){
        return extras.indexOf(value)===-1 
        }    
    )
    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;

