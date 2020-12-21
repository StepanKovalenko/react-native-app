import {useDispatch} from 'react-redux';
import {RestaurantActions} from '../../../actions';

export function useDispatchSetRestaurantApplicantProfile() {
    const dispatch = useDispatch();
    
    return (context: any) => dispatch({
        type: RestaurantActions.setRestaurantApplicantProfile,
        context
    });
}
