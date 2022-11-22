import React, {useEffect, useState} from 'react';
import {categoryService} from '../../api/services';
import {FlatList, SafeAreaView, View} from 'react-native';

import {NewsCardItem} from '../../services/models';
import NewsCard from '../../component/NewsCard';
import styles from './HomeScreen.style';
import Spinner from '../../component/Spinner';

interface HomeScreenProps {}

interface cardItem {
  item: NewsCardItem;
}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    categoryService('general')
      .then(data => {
        setNewsData(data);
        // console.log('data: ', data);
      })
      .catch(error => {
        console.log('HomeScreen error: ', error);
      });
    // console.log('homeScreen useEffect: ');

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
              keyExtractor={item => item.title}
              ListFooterComponent={<Spinner />}
            />
          </>
        ) : (
          <Spinner />
        )}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
