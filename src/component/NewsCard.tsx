import moment from 'moment';
import React from 'react';
import {Image, Text, View} from 'react-native';

import styles from './NewsCard.style';
import {NewsCardItem} from '../services/models';

interface NewsCardProps {
  data: NewsCardItem;
}

const NewsCard: React.FC<NewsCardProps> = ({data}) => {
  const {id, title, publishedAt, description, urlToImage} = data;

  //   const Up = () => {
  //     <View>
  //     <Icon />
  //     </View>
  //   }

  if (!(urlToImage && description && title)) {
    return;
  }
  return (
    <>
      <View style={styles.container}>
        <Image
          resizeMode="cover"
          style={styles.cardImage}
          source={{uri: urlToImage}}
        />
        <Text style={styles.cardTitle}>{title}</Text>
        <Text>{moment(publishedAt).format('LLL')}</Text>
        <Text style={styles.cardDescription}>{description}</Text>
        <View></View>
      </View>
    </>
  );
};

export default NewsCard;
