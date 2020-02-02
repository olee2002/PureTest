export const UPDATE_DATA = "UPDATE_DATA";

export const updateInquiry = (payload) => (dispatch) => {
    dispatch({
        type: UPDATE_DATA,
        payload
    });
};