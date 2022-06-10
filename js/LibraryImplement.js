console.log('hello 768')
// create a class library and implement the following:
// constructor must take the book list as an argument
// getBookList()
// issueBook(bookname, user)
// returnBook(bookname)

class Library{
    constructor(BookList){
        this.BookList = BookList;
        this.issuedBooks = {};

    }

    getBookList(){
    this.BookList.forEach(element => {
        console.log(element)
    });
    }

    issueBook(bookname,user){
        if(this.issuedBooks[bookname] == undefined){
            this.issuedBooks[bookname] =  user;
        }else{
            console.log(`This book ${bookname} is already issued`)
        }
    }

    returnBook(bookname){
     delete this.issuedBooks[bookname]
    }
}