import React, {useEffect, useState} from 'react';
import moment from 'moment';
import {services} from '../../api/services';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import styles from './HomeScreen.style';

interface HomeScreenProps {}
interface cardItem {
  item: {
    title: string;
    publishedAt: Date;
    description: string;
    id: string;
  };
}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    services('general')
      .then(data => {
        setNewsData(data);
        // console.log('data: ', data);
      })
      .catch(error => {
        console.log('error: ', error);
      });
    console.log('homeScreen useEffect: ');

    return () => {
      console.log('homeScreen Cleanup');
      setNewsData([]);
    };
  }, []);

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>{'🏠'}</Text>
        <Text style={styles.sectionTitle}>{'HomeScreen'}</Text>
        <Text style={styles.sectionDescription}>
          {'Make changes accourding to need 🎉'}
        </Text>
        <FlatList
          data={newsData}
          renderItem={({item}: cardItem) => (
            <>
              <View>
                <View>
                  <Text style={styles.sectionTitle}>{item.title}</Text>
                  <Text>{moment(item.publishedAt).format('LLL')}</Text>
                  <Text style={styles.sectionDescription}>
                    {item.description}
                  </Text>
                </View>
              </View>
            </>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
