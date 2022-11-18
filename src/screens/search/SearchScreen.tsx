import React, {useEffect, useState} from 'react';
import {services} from '../../api/services';
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';

import {NewsCardItem} from '../../services/models';
import NewsCard from '../../component/NewsCard';
import styles from './SearchScreen.style';
import Spinner from '../../component/Spinner';

interface SearchScreenProps {}

interface cardItem {
  item: NewsCardItem;
}

const SearchScreen: React.FC<SearchScreenProps> = () => {
  const [newsData, setNewsData] = useState([]);
  const [searchCategory, setsearchCategory] = useState('business');


  useEffect(() => {
    services(`${searchCategory}`)
      .then(data => {
        setNewsData(data);
        // console.log('data: ', data);
      })
      .catch(error => {
        console.log('SearchScreen error: ', error);
      });
    console.log('SearchScreen useEffect: ');

    return () => {
      console.log('SearchScreen Cleanup');
      setNewsData([]);
      // setsearchCategory('');
    };
  }, [searchCategory]);

  const Categories = () => {
    return (
      <View>
        <View style={styles.categoryContainer}>
          <Pressable
            onPress={() => {
              setsearchCategory('entertainment');
            }}>
            <View style={styles.category}>
              <Image
                resizeMode="cover"
                style={styles.categoryImage}
                source={require('../../assets/hd-movie.png')}
              />
              <Text style={styles.categoryText}>{'Entertainment'}</Text>
            </View>
          </Pressable>
          <Pressable
            onPress={() => {
              setsearchCategory('science');
            }}>
            <View style={styles.category}>
              <Image
                resizeMode="cover"
                style={styles.categoryImage}
                source={require('../../assets/science.png')}
              />
              <Text style={styles.categoryText}>{'Science'}</Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.categoryContainer}>
          <Pressable>
            <View style={styles.category}>
              <Image
                resizeMode="cover"
                style={styles.categoryImage}
                source={require('../../assets/bookmark.png')}
              />
              <Text style={styles.categoryText}>{'Saved'}</Text>
            </View>
          </Pressable>
          <Pressable
            onPress={() => {
              setsearchCategory('sports');
            }}>
            <View style={styles.category}>
              <Image
                resizeMode="cover"
                style={styles.categoryImage}
                source={require('../../assets/game.png')}
              />
              <Text style={styles.categoryText}>{'Sports'}</Text>
            </View>
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    <>
      <SafeAreaView style={styles.backgroundStyle}>
        <ScrollView>
          <Categories />
          <View>
            <Text></Text>
            {newsData.map(item => (
              <NewsCard key={item.title} data={item} />
            ))}

            {/* {newsData.length > 1 ? (
              <>
                <FlatList
                  data={newsData}
                  renderItem={({item}: cardItem) => <NewsCard data={item} />}
                  keyExtractor={item => item.title}
                  ListFooterComponent={<Spinner />}
                  // ListHeaderComponent={Categories}
                />
              </>
            ) : (
              <Spinner />
            )} */}
          </View>
          {newsData.length > 1 ? <Spinner /> : null}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default SearchScreen;
