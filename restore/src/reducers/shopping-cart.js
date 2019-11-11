const deleteItem = (items, ind) => {
    return [ ...items.slice(0, ind), ...items.slice(ind + 1) ];
};
const updateCartItems = (items, newItem, ind) => {
    if (ind === -1) {
        return [ ...items, newItem ];
    } else if (newItem.count <= 0) {
        return deleteItem(items, ind);
    } else {
        return [ ...items.slice(0, ind), newItem, ...items.slice(ind + 1) ];
    }
};
const updateCartItem = (book, oldItem = {}, qty) => {
    const { id = book.id, count = 0, title = book.title, total = 0 } = oldItem;

    return {
        id,
        title,
        count: count + qty,
        total: total + qty * book.price
    };
};

const updateOrder = (state, bookId, qty) => {
    const { bookList: { books }, shoppingCart: { cartItems } } = state;
    const book = books.find(({ id }) => id === bookId);

    const itemInd = cartItems.findIndex(({ id }) => id === bookId);
    const item = cartItems[itemInd];

    let newItem = updateCartItem(book, item, qty);

    const newState = {
        cartItems: updateCartItems(cartItems, newItem, itemInd)
    };
    newState.orderTotal = newState.cartItems.reduce((acc, curr) => acc + curr.total, 0);
    return newState;
};

const updateShoppingCart = (state, action) => {
    if (state === undefined) {
        return {
            cartItems: [],
            orderTotal: 0
        };
    }

    switch (action.type) {
        case "BOOK_ADDED_TO_CART": {
            return updateOrder(state, action.payload, 1);
        }
        case "REMOVE_BOOK_FROM_CART": {
            return updateOrder(state, action.payload, -1);
        }
        case "REMOVE_ALL_BOOKS_FROM_CART": {
            const bookId = action.payload;
            const item = state.shoppingCart.cartItems.find(({ id }) => id === bookId);
            return updateOrder(state, action.payload, -item.count);
        }
        default:
            return state.shoppingCart;
    }
};

export default updateShoppingCart;