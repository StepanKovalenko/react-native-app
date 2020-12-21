import React, { useEffect } from 'react';
import {ScrollView, Text, StyleSheet, ActivityIndicator, View} from 'react-native';
import { useFetchRestaurantApplicantProfileById } from '../hooks';
import theme from '../theme';
import { convertFieldKey } from '../utils';

export default function ApplicantProfile({route}: any) {
  const [fetchRestaurantApplicantProfileById, { applicantProfile, loading: isRestaurantApplicantProfileLoading }] = useFetchRestaurantApplicantProfileById();

  useEffect(() => {
    route.params.id && fetchRestaurantApplicantProfileById(route.params.id)
  }, []);

  const restaurantApplicantProfile = applicantProfile?.form_response?.answers
              .map((item: any, i: number) => {
                return <Text
                  key={i}
                  style={styles.applicantField}
                >
                  {convertFieldKey(item.field.ref)}: {`\n`}
                  <Text style={styles.applicantFieldValue}>
                    {
                      item.text || 
                      item?.choice?.label || 
                      item.date || 
                      item?.choices?.labels || 
                      item.file_url || 
                      item.phone_number || 
                      item.email
                    }
                  </Text>
                </Text>
              });
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {isRestaurantApplicantProfileLoading && <ActivityIndicator size="large" color={theme.palette.pineapple} />}
        {!isRestaurantApplicantProfileLoading && restaurantApplicantProfile}
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
  applicantField: {
    fontSize: 25,
    textAlign: 'center',
    backgroundColor: theme.palette.pineapple,
    marginBottom: 15,
    color: theme.palette.cucumber,
    padding: 15,
    borderRadius: theme.border.borderRadius,
  },
  applicantFieldValue: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  scrollView: {
    marginHorizontal: 20,
  },
});
