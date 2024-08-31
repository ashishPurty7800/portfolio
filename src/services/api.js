const BASE_URL = process.env.REACT_APP_BASE_URL

export const endpoints = {
    // LOGIN_API: BASE_URL + "/user/login",
    LOGIN_API: "http://localhost:4000/api/v1/user/login",
    ADD_DETAILS_API: "http://localhost:4000/api/v1/user/addDetails",
    DELETE_DETAILS_API: "http://localhost:4000/api/v1/user/deleteDetails",
    GET_DETAILS_API: "http://localhost:4000/api/v1/user/getDetails",
}