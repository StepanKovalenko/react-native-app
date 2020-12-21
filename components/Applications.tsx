import React, { useEffect } from 'react';
import {ScrollView, Text, StyleSheet, ActivityIndicator, View, AsyncStorage } from 'react-native';
import { useFetchRestaurantApplicationsById } from '../hooks';
import theme from '../theme';

export default function Applications({route, navigation}: any) {
  const [fetchRestaurantApplicationsById, { restaurantApplications, loading: isRestaurantApplicationsLoading }] = useFetchRestaurantApplicationsById();

  useEffect(() => {
    route.params.id && fetchRestaurantApplicationsById(route.params.id)
  }, []);

  const onPressApplicant = (item: any) => {
    item.viewed = true;
    navigation.push('ApplicantProfile', {id: item.id})
  }

  const restaurantApplicationItems = restaurantApplications
              .map((item: any, i: number) => {
                return <Text
                  key={i}
                  style={styles.applicantItem}
                  onPress={() => onPressApplicant(item)}
                >
                  {item.form_response.answers[0].text} {item.form_response.answers[1].text} 
                  <Text style={styles.viewed}>{item.viewed ? ' Viewed ' : ''}</Text>
                </Text>
              });
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {isRestaurantApplicationsLoading && <ActivityIndicator size="large" color={theme.palette.pineapple} />}
        {!isRestaurantApplicationsLoading && restaurantApplicationItems}
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
  applicantItem: {
    fontSize: 35,
    textAlign: 'center',
    backgroundColor: theme.palette.pineapple,
    marginBottom: 15,
    color: theme.palette.cucumber,
    padding: 15,
    borderRadius: theme.border.borderRadius,
  },
  viewed: {
    fontWeight: 'bold',
    fontSize: 25
  },
  scrollView: {
    marginHorizontal: 20,
  },
});
