export default class BookstoreService {
    _books = [
        {
            id: 0,
            title: "Harry Potter",
            author: "J. Roaling",
            price: 123,
            coverImage: "https://m.media-amazon.com/images/I/91GF+C+YRBL._AC_UL480_FMwebp_QL65_.jpg"
        },
        {
            id: 1,
            title: "Oldman and Sea",
            author: "E. Hemingway",
            price: 87,
            coverImage: "https://m.media-amazon.com/images/I/61Lc9Qd0vgL._AC_UY327_FMwebp_QL65_.jpg"
        }
    ];
    getBooks = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() < 0.2) {
                    reject(new Error("Something bad happend!"));
                }
                resolve(this._books);
            }, 1500);
        });
    };
    getBook = (_id) => {
        return this._books.find((_b) => _b.id === _id);
    };
}
