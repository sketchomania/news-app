import React, {useEffect, useState} from 'react';
import {services} from '../../api/services';
import {FlatList, SafeAreaView, View} from 'react-native';

import {NewsCardItem} from '../../services/models';
import NewsCard from '../../component/NewsCard';
import styles from './HealthScreen.style';
import Spinner from '../../component/Spinner';

interface HealthScreenProps {}

interface cardItem {
  item: NewsCardItem;
}

const HealthScreen: React.FC<HealthScreenProps> = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    services('health')
      .then(data => {
        setNewsData(data);
        // console.log('data: ', data);
      })
      .catch(error => {
        console.log('HealthScreen error: ', error);
      });
    // console.log('HealthScreen useEffect: ');

    return () => {
      // console.log('HealthScreen Cleanup');
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

export default HealthScreen;

