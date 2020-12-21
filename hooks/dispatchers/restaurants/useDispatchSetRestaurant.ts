import {useDispatch} from 'react-redux';
import {RestaurantActions} from '../../../actions';

export function useDispatchSetRestaurant(): any {
    const dispatch = useDispatch();
    
    return (context: any) => dispatch({
        type: RestaurantActions.setRestaurant,
        context
    });
}
