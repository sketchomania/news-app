import moment from 'moment';
import React, {useState} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';

import styles from './NewsCard.style';
import {NewsCardItem} from '../services/models';
import {COLORS} from '../constants/color';

interface NewsCardProps {
  data: NewsCardItem;
}

const NewsCard: React.FC<NewsCardProps> = ({data}) => {
  const [upVote, setUpVote] = useState(false);
  const [downVote, setDownVote] = useState(false);
  const [saved, setSaved] = useState(false);

  const {title, publishedAt, description, urlToImage} = data;

  const Up = () => {
    return (
      <Pressable
        onPress={() => {
          setUpVote(!upVote);
        }}>
        <View>
          <Foundation
            name={'arrow-up'}
            size={25}
            color={upVote ? COLORS.green : COLORS.lightgreen}
          />
        </View>
      </Pressable>
    );
  };
  const Down = () => {
    return (
      <Pressable
        onPress={() => {
          setDownVote(!downVote);
        }}>
        <View>
          <Foundation
            name={'arrow-down'}
            size={25}
            color={downVote ? COLORS.red : COLORS.lightred}
          />
        </View>
      </Pressable>
    );
  };
  const SaveIcon = () => {
    return (
      <Pressable
        onPress={() => {
          setSaved(!saved);
        }}>
        {saved ? (
          <View>
            <Ionicons name={'bookmark'} size={24} color={COLORS.goldenrod} />
          </View>
        ) : (
          <View>
            <Ionicons
              name={'bookmark-outline'}
              size={24}
              color={COLORS.goldenrod}
            />
          </View>
        )}
      </Pressable>
    );
  };

  if (!(urlToImage && description && title)) {
    return null;
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
            <View style={styles.iconContainer}>
              <Up />
              <Down />
            </View>
            <View>
              <SaveIcon />
            </View>
          </View>
        </View>
        <View style={styles.cardTextContainer}>
          {/* <View style={styles.imageOverlay}> */}
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.cardDate}>
            {moment(publishedAt).format('LLL')}
          </Text>
          <Text style={styles.cardDescription}>{description}</Text>
        </View>
      </View>
    </>
  );
};

export default NewsCard;
