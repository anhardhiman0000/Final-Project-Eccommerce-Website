export const CREATE_USER = "CREATE_USER";
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS"
export const CREATE_USER_FAILURE = "CREATE_USER_FAILURE"

export const createUser = ({ username, email, password }) => {
    console.log(username, email, password);
    return {
        type: CREATE_USER,
        username,
        email,
        password
    };
}

export const createUserSuccess = data => {console.log("kkkkk",data);return{ type: CREATE_USER_SUCCESS, data };}

export const createUserFailure = () => ({ type: CREATE_USER_FAILURE });