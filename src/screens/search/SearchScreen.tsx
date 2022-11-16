import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import styles from './SearchScreen.style';

interface SearchScreenProps {}

const SearchScreen: React.FC<SearchScreenProps> = () => {
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>
          {'🔍 '}
          {'\n'}
          {'SearchScreen'}
        </Text>
        <Text style={styles.sectionDescription}>
          {'Make changes accourding to need 🎉'}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
