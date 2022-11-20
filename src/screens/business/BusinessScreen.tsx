import React, {useEffect, useState} from 'react';
import {categoryService} from '../../api/services';
import {FlatList, SafeAreaView, View} from 'react-native';

import {NewsCardItem} from '../../services/models';
import NewsCard from '../../component/NewsCard';
import styles from './BusinessScreen.style';
import Spinner from '../../component/Spinner';

interface BusinessScreenProps {}

interface cardItem {
  item: NewsCardItem;
}

const BusinessScreen: React.FC<BusinessScreenProps> = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    categoryService('business')
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

export default BusinessScreen;
