import history from "../../history";
import api, { genericHeaders, authHeaders } from "../../config";

export const GET_ADMIN_DATA_SUCCESS = "GET_ADMIN_DATA_SUCCESS";
export const GET_ADMIN_DATA_FAILURE = "GET_ADMIN_DATA_FAILURE";

export const getAdminData = () => (dispatch) => {
    fetch(`${api}`, {
        method: "GET",
        headers: authHeaders()
    })
        .then((res) => res.json())
        .then((data) => {
            dispatch({
                type: GET_ADMIN_DATA_SUCCESS,
                payload: data
            });
        })
        .catch((e) => {
            dispatch({
                type: GET_ADMIN_DATA_FAILURE,
                payload: e
            })
        });
};