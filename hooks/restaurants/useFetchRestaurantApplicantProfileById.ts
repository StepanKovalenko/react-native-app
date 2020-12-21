import Config from 'react-native-config';
import { useState } from 'react';
import { useDispatchSetRestaurantApplicantProfile } from '../dispatchers';
import { useSelectRestaurants } from '../selectors';
import axios from 'axios';

export function useFetchRestaurantApplicantProfileById(): any {
    const [loading, setLoading] = useState(false);
    const setRestaurantApplicantProfile = useDispatchSetRestaurantApplicantProfile();
    const state: any = useSelectRestaurants();

    return [
        (id: string) => {
            setLoading(true);

            return axios
                .get(`http://localhost:8081/dummyData/applications.json`)
                .then(({ data }) => {

                    const restaurantApplications = data.filter((item: any) => item.id === id);
                    const restaurantApplicantProfile = restaurantApplications.find((application: any) => application.id === id);

                    setRestaurantApplicantProfile(restaurantApplicantProfile);
                    setLoading(false);
                })
                .catch(e => {
                    setLoading(false)
                });
        },

        { applicantProfile: state.restaurant.applicantProfile, loading }
    ];
}
