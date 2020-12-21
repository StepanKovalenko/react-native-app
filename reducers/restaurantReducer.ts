import {RestaurantActions} from '../actions';

const defaultState = {
    list: [],
    restaurant: {
        applications: [],
        applicantProfile: {}
    },
};

export const restaurantReducer = (state = defaultState, {type, context}: any = {}) => {
    switch (type) {
        case RestaurantActions.setRestaurant:
            return {
                ...state,
                restaurant: {
                    ...state.restaurant,
                    ...context
                }
            };

        case RestaurantActions.setRestaurantApplications:
            return {
                ...state,
                restaurant: {
                    ...state.restaurant,
                    applications: [...context]
                }
            };

        case RestaurantActions.setRestaurantApplicantProfile:
            return {
                ...state,
                restaurant: {
                    ...state.restaurant,
                    applicantProfile: {...context}
                }
            };

        case RestaurantActions.setRestaurantList:
            return {
                ...state,
                list: [...context]
            };
            
        default:
            return state;
    }
}

