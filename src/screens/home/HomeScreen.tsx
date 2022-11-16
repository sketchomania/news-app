import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import styles from './HomeScreen.style';

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>{'🏠'}</Text>
        <Text style={styles.sectionTitle}>{'HomeScreen'}</Text>
        <Text style={styles.sectionDescription}>
          {'Make changes accourding to need 🎉'}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
