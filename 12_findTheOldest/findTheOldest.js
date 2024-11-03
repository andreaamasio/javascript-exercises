const findTheOldest = function(array) {
    const oldest = array.reduce((prev,next)=>{
        if (!prev.yearOfDeath) prev.yearOfDeath=(new Date()).getFullYear()
        if (!next.yearOfDeath) next.yearOfDeath=(new Date()).getFullYear()
        let prevAge=prev.yearOfDeath-prev.yearOfBirth
        let nextAge=next.yearOfDeath-next.yearOfBirth
        // console.log(`${prev.name} age: ${prevAge}`)
        // console.log(`${next.name} age: ${nextAge}`)
        if (prevAge>nextAge) {
            return prev
        } else return next
    }
    )
    return oldest
};
const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]
console.log(findTheOldest(people))  
// Do not edit below this line
module.exports = findTheOldest;
