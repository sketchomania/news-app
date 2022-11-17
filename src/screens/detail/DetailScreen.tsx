import React, {useEffect, useState} from 'react';
import {services} from '../../api/services';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Text,
  View,
} from 'react-native';

import {NewsCardItem} from '../../services/models';
import NewsCard from '../../component/NewsCard';
import {COLORS} from '../../constants/color';
import styles from './DetailScreen.style';

interface DetailScreenProps {}

interface cardItem {
  item: NewsCardItem;
}

const DetailScreen: React.FC<DetailScreenProps> = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    services('business')
      .then(data => {
        setNewsData(data);
        // console.log('data: ', data);
      })
      .catch(error => {
        console.log('error: ', error);
      });
    console.log('business useEffect: ');

    return () => {
      console.log('business Cleanup');
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

export default DetailScreen;
