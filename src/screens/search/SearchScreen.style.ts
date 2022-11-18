import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  backgroundStyle: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    // paddingTop: 140,
  },
  categoryContainer: {
    display: 'flex',
    flexDirection: 'row',
    // borderWidth: 1,
    // borderColor: 'cyan',
  },
  category: {
    shadowColor: 'black',
    elevation: 10,
    backgroundColor : 'white',
    borderRadius: 10,

    alignItems: 'center',
    justifyContent: 'center',
    // padding: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    width: 150,
    height: 130,
  },
  categoryImage: {
    width: 80,
    height: 80,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
  },
});

export default styles;
