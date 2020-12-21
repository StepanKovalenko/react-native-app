import {useDispatch} from 'react-redux';
import {RestaurantActions} from '../../../actions';

export function useDispatchSetRestaurantList() {
    const dispatch = useDispatch();
    
    return (context: any) => dispatch({
        type: RestaurantActions.setRestaurantList,
        context
    });
}
