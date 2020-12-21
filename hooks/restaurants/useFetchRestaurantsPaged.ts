import Config from 'react-native-config';
import { useState } from 'react';
import { useDispatchSetRestaurantList } from '../dispatchers';
import { useSelectRestaurants } from '../selectors';
import axios from 'axios';

export function useFetchRestaurantsPaged(): any {
    const [loading, setLoading] = useState(false);
    const setList = useDispatchSetRestaurantList();
    const state: any = useSelectRestaurants();

    return [
        () => {
            setLoading(true);

            return axios
                .get(`http://localhost:8081/dummyData/applications.json`)
                .then(({ data = [] }) => {
                    setList(data);
                    setLoading(false);
                }).catch(e => {
                    setLoading(false);
                });

        },

        { restaurants: state.list, loading }
    ];
}
