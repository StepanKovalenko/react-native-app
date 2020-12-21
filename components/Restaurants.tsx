import React, { useEffect } from 'react';
import {ScrollView, Text, StyleSheet, ActivityIndicator, Button, View, Alert} from 'react-native';
import { useFetchRestaurantsPaged } from '../hooks';
import theme from '../theme';

export default function Restaurants({ navigation }: any) {
  const [fetchList, { restaurants, loading: isRestaurantsLoading }] = useFetchRestaurantsPaged();

  useEffect(() => {
    fetchList()
  }, []);


  const restaurantItems = restaurants.map((item: any) => item.restaurant);
  const uniqRestaurantItems = [...new Map(
                                    restaurantItems.map((item: any) => [item.id, item])
                                  ).values()
                              ].map((item: any, i: number) => {

                                return <Text
                                  key={i}
                                  style={styles.restaurantItem}
                                  onPress={() => navigation.push('Applications', {id: item.id})}
                                >
                                  {item.label}
                                </Text>

                              });
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {isRestaurantsLoading && <ActivityIndicator size="large" color={theme.palette.pineapple} />}
        {!isRestaurantsLoading && uniqRestaurantItems}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 20,
    width: '100%'
  },
  text: {
    ...theme.typography.body,
    textAlign: 'center',
  },
  restaurantItem: {
    fontSize: 35,
    textAlign: 'center',
    backgroundColor: theme.palette.pineapple,
    marginBottom: 15,
    color: theme.palette.cucumber,
    padding: 15,
    borderRadius: theme.border.borderRadius,
  },
  scrollView: {
    marginHorizontal: 20,
  },
});
