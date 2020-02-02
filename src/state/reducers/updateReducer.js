import { UPDATE_DATA } from "../actions/updateActions";

const initialState = {
    update: { 
        first_name: "",
        last_name: "",
        email: "",
        inquiry_type: "Property Purchase/Sale Information Request",
        inquiry: ""
    }
};

const reducer = (state = initialState, { type, payload }) => {
    const handlers = {
    [UPDATE_DATA]: { ...state, update: payload }
    };
    return handlers[type] || state;
}

export default reducer;