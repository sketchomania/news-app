import {StyleSheet} from 'react-native';
import {COLORS} from '../constants/color';

const styles = StyleSheet.create({
  container: {
    // play with elevation add border remove background color
    marginBottom: 20,
    marginHorizontal: 10,
    width: 360,
    alignItems: 'center',

    backgroundColor: COLORS.white,
    // backgroundColor: 'rgba(0,0,0,0.5)',

    shadowColor: COLORS.black,
    // shadowOpacity: 1,
    // shadowOffset: {width: 40, height: 40},
    // shadowRadius: 10,

    borderRadius: 10,
    elevation: 10,
  },
  cardImage: {
    width: 360,
    height: 200,
    // borderRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  imageOverlay: {
    position: 'absolute',
    width: 360,
    // alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    bottom: 0,
    // padding: 5,
    backgroundColor: 'rgba(0,0,0,0.5)',
    // borderBottomLeftRadius: 10,
    // borderBottomRightRadius: 10,
  },
  cardTextContainer: {
    paddingHorizontal: 8,
    paddingBottom: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
  },
  cardDescription: {
    // backgroundColor: 'rgba(0,0,0,0.5)',
    // marginTop: 8,
    fontSize: 16,
    // fontWeight: '400',
    color: 'black',
  },
});

export default styles;
