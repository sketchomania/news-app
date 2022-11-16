import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import styles from './ProfileScreen.style';

interface ProfileScreenProps {}

const ProfileScreen: React.FC<ProfileScreenProps> = () => {
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>
          {'👤 '}
          {'\n'}
          {'ProfileScreen'}
        </Text>
        <Text style={styles.sectionDescription}>
          {'Make changes accourding to need 🎉'}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
