import {useDispatch} from 'react-redux';
import {RestaurantActions} from '../../../actions';

export function useDispatchSetRestaurantApplications() {
    const dispatch = useDispatch();
    
    return (context: any) => dispatch({
        type: RestaurantActions.setRestaurantApplications,
        context
    });
}
