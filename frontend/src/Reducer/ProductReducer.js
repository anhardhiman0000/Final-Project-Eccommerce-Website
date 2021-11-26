let initState = { products: [], product: {}, loading: true, success: false }
export const ProductReducer = (state = initState, action) => {

    console.log("Product reducer ACtion is: ", action)
    switch (action.type) {

        case 'DELETE_PRODUCT':
        case 'UPDATE_PRODUCT':
        case 'CREATE_PRODUCT':
        case 'FETCH_PRODUCTS':
            console.log("State is", state);
            console.log("Action in ProductReducer",action);
            return {
                ...state,
                // loading: true,
            }


        //FETCH
        case 'FETCH_PRODUCTS_SUCCESS':
            console.log("FETCH_PRODUCTS_SUCCESS Action", action);
            console.log("PRODUCT SUCCESS", action.data)
            return {
                ...state,
                products: action.data.product1,

                loading: false
                // success:action.data.success
            }

        //SUCCESS
        case 'DELETE_PRODUCT_SUCCESS':
        case 'UPDATE_PRODUCT_SUCCESS':
        case 'CREATE_PRODUCT_SUCCESS':

            console.log("CREATE_PRODUCT_SUCCESS ACTION IN REDUCER", action.data);
            return {
                ...state,
                products: action.data.product ? state.products.concat(action.data.product) : state.products,
                loading: false,
                success: action.data.success
            }

        //FAILURE
        case 'FETCH_PRODUCTS_FAILURE':
        case 'CREATE_PRODUCT_FAILURE':
        case 'UPDATE_PRODUCT_FAILURE':
        case 'DELETE_PRODUCT_FAILURE':
            return {
                ...state,
                loading: false,
                success: false,
            }

        default:
            return state
    }
}