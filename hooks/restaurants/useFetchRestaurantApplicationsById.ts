import Config from 'react-native-config';
import { useState } from 'react';
import { useDispatchSetRestaurantApplications } from '../dispatchers';
import { useSelectRestaurants } from '../selectors';
import axios from 'axios';

export function useFetchRestaurantApplicationsById(): any {
    const [loading, setLoading] = useState(false);
    const setRestaurantApplications = useDispatchSetRestaurantApplications();
    const state: any = useSelectRestaurants();

    return [
        (id: string) => {
            setLoading(true);

            return axios
                .get(`http://localhost:8081/dummyData/applications.json`)
                .then(({ data }) => {
                    const restaurantApplications = data.filter((item: any) => item.restaurant.id === id);

                    setRestaurantApplications(restaurantApplications);
                    setLoading(false)
                })
                .catch(e => {
                    setLoading(false)
                });
        },

        { restaurantApplications: state.restaurant.applications, loading }
    ];
}
