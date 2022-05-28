console.log("classes excercise")
// create a class library and implement the following:
// constructor must take the book list as an argument
// getBookList()
// issueBook(bookname, user)
// returnBook(bookname)


class Library{
    constructor(bookJava, bookPython, bookJavascript,bookYaram,bookSulphite){
        this.books=[bookJava, bookPython, bookJavascript,bookYaram,bookSulphite]
        // this.java= bookJava
        // this.python= bookPython;
        // this.javascript =bookJavascript;
        // this.yaram = bookYaram;
        // this.sulphite = bookSulphite
    }
   
}
const getbook= (issuebook) =>{
    for(let i =0; i>length; i++){
    if(this.books === issuebook){
       return ("available")
      
    }else{"Not available"}

}}
newbooks = new Library("Java", "Python","Javascript", "Yaram", "Sulphite")
console.log(getbook("Sulphite"))
console.log(newbooks)