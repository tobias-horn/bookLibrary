const opener = document.getElementById("addBookButton")
const popup = document.getElementById("popup")
const close = document.getElementById("closePopup")
const bookReadCheckbox = document.getElementById("bookRead")
const submit = document.getElementById("submit")
const booksContainer = document.getElementById("bookContainer")

let library = [];

function Books(title, author, pages, isRead, rating){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read(isRead)
    this.starRating = getRating(rating)
}


// Boolean to string output for display
function read(isRead) {
    if(isRead === true){
        return " Yes"
    } else {
        return " No"
    }
}

// Rating number to string containing the stars
function getRating(rating) {
    this.starRating = ""

    if (document.getElementById("bookRead").checked === true) {

    for (let i = 0; i < rating; i++) {
       this.starRating += `<span  class="fas fa-star star"></span>`
        
    }
    this.starRating = `<li><span>Rating:</span>`+ ` ` + this.starRating + `</li>`

    console.log(this.starRating)
    return this.starRating
    } else {
    return this.starRating = ""
}
}



// Popup event listeners
opener.addEventListener("click", button => {
    popup.style.visibility = 'visible';

})

close.addEventListener("click", button => {
    popup.style.visibility = "hidden"
    document.querySelector("[data-book-input]").reset()
    document.querySelector("[data-rating-wrapper]").innerHTML = ""

})

// creates new book object 
const getBookFromInput = () => {
    const title = document.getElementById("bookTitle").value
    const author = document.getElementById("bookAuthor").value
    const pages = document.getElementById("bookPages").value
    const isRead = document.getElementById("bookRead").checked
    
    if (document.getElementById("bookRead").checked === true) {
        const rating = document.getElementById("rating").value
        return new Books(title, author, pages, isRead, rating)
    } else {
        return new Books(title, author, pages, isRead)
    }
}

// adds data to book object and clears the form 
submit.addEventListener("click", (e)=> {
    e.preventDefault()
    addBookToLibrary()
    document.querySelector("[data-book-input]").reset()
    popup.style.visibility = "hidden"
    document.querySelector("[data-rating-wrapper]").innerHTML = ""
})

function addBookToLibrary() {
    library.push(getBookFromInput())
    renderBooks(library)
}

function deleteBook(array, index){
    array.splice(index, 1)
    renderBooks(library)
}



// displaying books in the grid
function renderBooks(books) {
    booksContainer.innerHTML = ""

    books.forEach(function createCard(book, index) {
        
    let content = `
    <div class="card" data-card-index="${index}">
        <ul>
            <li><span>Title: </span>${book.title}</li>
            <li><span>Author: </span> ${book.author} </li>
            <li><span>Pages: </span>${book.pages}</li>
            <li><span>Read: </span>${book.read}</li>
            ${book.starRating}
        </ul>
        <div class="card-controls">
            <button class="button-delete"data-card-index="${index}" data-delete><span class="fas fa-trash"></span></button>
        </div>
    </div>
    `
    booksContainer.innerHTML += content
    })
    getCurrentButtons()
}


// creates the new event listeners for all the delete buttons 
function getCurrentButtons () {
let deleteButton = document.querySelectorAll("[data-delete]")
    
deleteButton.forEach(button => {
        button.addEventListener("click", (button) => {
            deleteBook(library, button.target.parentNode.parentNode.parentNode.getAttribute("data-card-index"))
    })

})
}

// toggles rating input when box is clicked
bookReadCheckbox.addEventListener("click", () => {
    
    if (document.getElementById("bookRead").checked === true) {
    
    document.querySelector("[data-rating-wrapper]").innerHTML = `
    
    <p>What rating would you give this book? (1-5)</p>
    <input min="1" max="5" placeholder="1" class="text-input" type="number" id="rating" name="rating"><br>
    `
    } else {
    document.querySelector("[data-rating-wrapper]").innerHTML = ""

}})

function addBookToLibrary() {
    library.push(getBookFromInput())
    renderBooks(library)
}

function deleteBook(array, index){
    array.splice(index, 1)
    renderBooks(library)
}



