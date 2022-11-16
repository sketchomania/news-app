import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import styles from './DetailScreen.style';

interface DetailScreenProps {}

const DetailScreen: React.FC<DetailScreenProps> = () => {
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>
          {'ℹ️ '}
          {'\n'}
          {'DetailScreen'}
        </Text>
        <Text style={styles.sectionDescription}>
          {'Make changes accourding to need 🎉'}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default DetailScreen;
