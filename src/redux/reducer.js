import { COMMENTS } from '../shared/comments';
import { DISHES } from '../shared/dishes';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';

const initialState = {
    comments: COMMENTS,
    dishes: DISHES,
    leaders: LEADERS,
    promotions: PROMOTIONS,
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'comments/addComment':
            return {
                ...state,
                comments: [...state.comments, action.payload],
            };

        default:
            return state;
    }
};

export default rootReducer;
