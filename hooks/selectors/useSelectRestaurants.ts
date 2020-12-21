import {useSelector} from 'react-redux';
import {createSelector} from 'reselect';

const selector: any = createSelector(
    ({restaurant}) => restaurant,
    restaurant => restaurant
);

export function useSelectRestaurants() {
    return useSelector(selector)
}
