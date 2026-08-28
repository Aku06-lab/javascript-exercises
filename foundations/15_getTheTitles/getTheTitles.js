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

const getTheTitles = function(arr) {
    let title = arr.map(item => item.title)
    return title

};

getTheTitles(books)
// Do not edit below this line
module.exports = getTheTitles;
