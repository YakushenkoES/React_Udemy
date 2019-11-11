const booksRequested = () => ({
    type: "FETCH_BOOKS_REQUEST"
});

const booksLoaded = (newBooks) => ({
    type: "FETCH_BOOKS_SUCCESS",
    payload: newBooks
});


const booksError = (error) => ({
    type: "FETCH_BOOKS_FAILURE",
    payload: error
});

const fetchBooksOld = (dispatch, getData) => ()=>{
    dispatch(booksRequested());
    getData().then((data) => dispatch(booksLoaded(data))).catch((error) => dispatch(booksError(error)));
};
const fetchBooks = (getData)=>()=>(dispatch) => {
    dispatch(booksRequested());
    getData().then((data) => dispatch(booksLoaded(data))).catch((error) => dispatch(booksError(error)));
};


const bookAddedToCart=(bookId)=>({
    type:"BOOK_ADDED_TO_CART",
    payload: bookId
});

const bookDecreaseInCart=(bookId)=>({
    type:"REMOVE_BOOK_FROM_CART",
    payload: bookId
});
const bookDeleteInCart=(bookId)=>({
    type:"REMOVE_ALL_BOOKS_FROM_CART",
    payload: bookId
});

export { fetchBooks, bookAddedToCart,bookDecreaseInCart ,bookDeleteInCart};
