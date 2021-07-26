import { Types } from "../actions/userAction";

const INITIAL_STATE = {
    items: [],
    name: "Amit"
};

export default function users(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.GET_USERS_SUCCESS: {
            return {
                ...state,
                items: action.payload.items
            }
        }
        default: {
            return state
        }
    }
}