export default class BookstoreService {
    _books = [ { title: "Harry Potter", author: "J. Roaling" }, { title: "Oldman and Sea", author: "E. Hammingway" } ];
    getBooks=()=> {
        return this._books;
    }
    getBook=(_id)=> {
        return this._books[_id];
    }
}
