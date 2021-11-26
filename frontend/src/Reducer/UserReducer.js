let initState = { isloggedin: false }

export const UserReducer = (state = initState, action) => {
    console.log("user reducer", action)
    switch (action.type) {

        case 'CREATE_USER':
            console.log("USERrEDUCER cREATE", action.type);
            console.log("User Reducer Create", state);
            return {
                ...state,
            }
        case 'CREATE_USER_SUCCESS':
            console.log("CREATE_USER_SUCCESS ACTION IN REDUCER", action.data);
            console.log("User Reducer Success Create", action);
            return {
                ...state,
                isloggedin: action.data.islogged,
            }

        case 'CREATE_USER_FAILURE':
            return {
                ...state,
                isloggedin: action.data.islogged,
            }
        default:
            return state
    }
}