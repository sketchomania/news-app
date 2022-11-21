import React, {useEffect, useState} from 'react';
import {categoryService, searchService} from '../../api/services';
import {
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
import SearchBar from './component/SearchBar';

interface SearchScreenProps {}

interface cardItem {
  item: NewsCardItem;
}

const SearchScreen: React.FC<SearchScreenProps> = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [inputTerm, setInputTerm] = useState('');
  const [newsData, setNewsData] = useState([]);
  // const [searchCategory, setSearchCategory] = useState('business');

  const searchInputTerm = () => {
    if (inputTerm === '') return;
    setIsLoading(true);
    console.log('inputTerm: ', inputTerm);
    searchService(`${inputTerm}`)
      .then(data => {
        setNewsData(data);
        setIsLoading(false);
        // console.log('data: ', data);
      })
      .catch(error => {
        console.log('SearchTerm error: ', error);
      });
  };

  const searchByCategory = (searchCategory: string) => {
    setIsLoading(true);
    console.log('searchCategory: ', searchByCategory);
    categoryService(`${searchCategory}`)
      .then(data => {
        setNewsData(data);
        setIsLoading(false);
        // console.log('data: ', data);
      })
      .catch(error => {
        console.log('SearchCategory error: ', error);
      });
  };

  useEffect(() => {
    // categoryService(`${searchCategory}`)
    //   .then(data => {
    //     setNewsData(data);
    //     // console.log('data: ', data);
    //   })
    //   .catch(error => {
    //     console.log('SearchScreen error: ', error);
    //   });

    console.log('SearchScreen useEffect: ');

    return () => {
      console.log('SearchScreen Cleanup');
      setNewsData([]);
      setInputTerm('');

      // setSearchCategory('');
    };
  }, []);
  // searchInputTerm, searchByCategory

  const Categories = () => {
    return (
      <View>
        <View style={styles.categoryContainer}>
          <Pressable
            onPress={() => {
              // setSearchCategory('entertainment');
              searchByCategory('entertainment');
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
              // setSearchCategory('science');
              searchByCategory('science');
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
              // setSearchCategory('sports');
              searchByCategory('sports');
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
          <SearchBar
            inputTerm={inputTerm}
            setInputTerm={setInputTerm}
            searchInputTerm={searchInputTerm}
          />
          <Categories />
          <Categories />
          <Categories />
          <View>
            {isLoading ? (
              <Spinner />
            ) : (
              <>
              {/* now flatlist can also be used */}
                {newsData.map(item => (
                  <NewsCard key={item.title} data={item} />
                ))}
              </>
            )}
          </View>
          {/* {newsData.length > 1 ? <Spinner /> : null} */}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default SearchScreen;
