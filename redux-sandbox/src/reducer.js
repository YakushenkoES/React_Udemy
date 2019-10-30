const reducer = (state = 15, action) => {
    if (state === undefined) {
        return 0;
    }
    switch (action.type) {
        case "RND":
            return state + action.payload;
        case "INC":
            return ++state;
        case "DEC":
            return --state;
        default:
            return state;
    }
};

export default reducer;