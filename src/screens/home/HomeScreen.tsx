import React, {useEffect, useState} from 'react';
import moment from 'moment';
import {services} from '../../api/services';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Text,
  View,
} from 'react-native';

import {NewsCardItem} from '../../services/models';
import styles from './HomeScreen.style';
import NewsCard from '../../component/NewsCard';
import {COLORS} from '../../constants/color';

interface HomeScreenProps {}

interface cardItem {
  item: NewsCardItem;
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
        {newsData.length > 1 ? (
          <>
            <FlatList
              data={newsData}
              renderItem={({item}: cardItem) => <NewsCard data={item} />}
              keyExtractor={item => item.id}
            />
          </>
        ) : (
          <ActivityIndicator size={'large'} color={COLORS.appColor} />
        )}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
