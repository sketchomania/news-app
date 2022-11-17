import React, {useEffect, useState} from 'react';
import moment from 'moment';
import {services} from '../../api/services';
import {FlatList, Image, SafeAreaView, Text, View} from 'react-native';
import styles from './HomeScreen.style';
import NewsCard from '../../component/NewsCard';

interface HomeScreenProps {}
interface cardItem {
  item: {
    title: string;
    publishedAt: Date;
    description: string;
    id: string;
    urlToImage: string;
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
      <View>
        <>
          <Text style={styles.sectionTitle}>{'🏠'}</Text>
          <Text style={styles.sectionTitle}>{'HomeScreen'}</Text>
          <Text style={styles.sectionDescription}>
            {'Make changes accourding to need 🎉'}
          </Text>
        </>
        <FlatList
          data={newsData}
          renderItem={({item}: cardItem) => <NewsCard data={item} />}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
