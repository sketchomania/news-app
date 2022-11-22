import React, {useEffect, useState} from 'react';
import {categoryService} from '../../api/services';
import {FlatList, SafeAreaView, View} from 'react-native';

import {NewsCardItem} from '../../services/models';
import NewsCard from '../../component/NewsCard';
import styles from './TechScreen.style';
import Spinner from '../../component/Spinner';

interface TechScreenProps {}

interface cardItem {
  item: NewsCardItem;
}

const TechScreen: React.FC<TechScreenProps> = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    categoryService('technology')
      .then(data => {
        setNewsData(data);
        // console.log('data: ', data);
      })
      .catch(error => {
        console.log('TechScreen error: ', error);
      });
    // console.log('TechScreen useEffect: ');

    return () => {
      console.log('TechScreen Cleanup');
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

export default TechScreen;
