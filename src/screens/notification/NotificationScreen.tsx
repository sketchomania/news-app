import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import styles from './NotificationScreen.style';

interface NotificationScreenProps {}

const NotificationScreen: React.FC<NotificationScreenProps> = () => {
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>
          {'🔔 '}
          {'\n'}
          {'NotificationScreen'}
        </Text>
        <Text style={styles.sectionDescription}>
          {'Make changes accourding to need 🎉'}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default NotificationScreen;
