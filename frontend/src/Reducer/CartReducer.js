let initState = { userproducts: [] }

export const CartReducer = (state = initState, action) => {
    switch (action.type) {

        case 'CREATE_CART':

            console.log("Create Cart", action.data);
            return {
                ...state,
                userproducts: [action.data]
                // loading: true,
            }
        default:
            return state
    }
}