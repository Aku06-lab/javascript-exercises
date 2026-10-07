const myLibrary = [];

class Book{
  
  constructor(title, author, no_pages, read_status) {
    this.title = title;
    this.author = author;
    this.no_pages = no_pages;
    this.read_status = read_status;
    this.id = crypto.randomUUID()
  }

}



function addBookToLibrary(title, author, no_pages, read_status, id){

  const mybook = new Book(title, author, no_pages, read_status);
  myLibrary.push(mybook)

}

function displayBooks (){

  const booklist = document.querySelector(".bookList")
  booklist.textContent = ""

  myLibrary.forEach(book => {
    const row = document.createElement("div");
    row.classList.add("book-row")

    const title = document.createElement("div");
    title.textContent = book.title;

    const author = document.createElement("div");
    author.textContent = book.author;

    const no_pages = document.createElement("div");
    no_pages.textContent = book.no_pages;

    const read_status = document.createElement("div");
    read_status.textContent = book.read_status;

    const delete_book = document.createElement("button");
    delete_book.textContent = "Remove"

    row.dataset.id = book.id;

    delete_book.addEventListener("click",()=> {
      const id = row.dataset.id;
      const index = myLibrary.findIndex(i => i.id === id);
      myLibrary.splice(index, 1);
      displayBooks();
    })

    row.appendChild(title);
    row.appendChild(author);
    row.appendChild(no_pages);
    row.appendChild(read_status)
    row.appendChild(delete_book)

    booklist.appendChild(row)
  })

}


const addBook = document.querySelector("#addnew");
const bookform = document.getElementById("formBook");


addBook.addEventListener("click", () => {
 bookform.hidden = false ;

})

const updateLibrary = document.querySelector("#submit");

const inputs = [...bookform.elements];

inputs.forEach(input => {

  if (input.type === "submit") return;

  input.addEventListener("input", () => {

    const error = document.querySelector(`#${input.id}-error`);

    if (input.validity.valid) {
      error.textContent = "";
    }

  });

});

bookform.addEventListener("submit", (event) => {

  event.preventDefault();

  let allvalid = true;

  inputs.forEach(input => {
      if(input.type === "submit"){
        return;
      }
      const error = document.querySelector(`#${input.id}-error`);
      
      if(!input.validity.valid){
        error.textContent = input.dataset.error;
        allvalid=false;
        error.style.color = "red";     
      }
      else {
        error.textContent ="";
      }

  });
  

  if(!allvalid){
    return;
  }

  const title = document.querySelector("#ttle").value;
  const author = document.querySelector("#athor").value;
  const no_pages = document.querySelector("#num").value;
  const read_status = document.querySelector("#rs").value;

  addBookToLibrary(title, author, no_pages, read_status);

  displayBooks();
  bookform.reset();

});
