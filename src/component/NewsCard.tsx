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
        <View>
          <Image
            resizeMode="cover"
            style={styles.cardImage}
            source={{uri: urlToImage}}
          />
          <View style={styles.imageOverlay}>
            <Text style={{color: 'white'}}>{"Icons"}</Text>
          </View>
        </View>
        <View style={styles.cardTextContainer}>
        {/* <View style={styles.imageOverlay}> */}
          <Text style={styles.cardTitle}>{title}</Text>
          <Text>{moment(publishedAt).format('LLL')}</Text>
          <Text style={styles.cardDescription}>{description}</Text>
        </View>
      </View>
    </>
  );
};

export default NewsCard;
