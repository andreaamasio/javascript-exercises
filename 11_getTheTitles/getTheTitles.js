const getTheTitles = function(array) {
    const booksList = array.map((item)=>item.title)
  return booksList
};
const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]
console.log(getTheTitles(books))
// Do not edit below this line
module.exports = getTheTitles;
