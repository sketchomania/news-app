import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  backgroundStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    flex: 1,
  },
  categoryContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  category: {
    shadowColor: 'black',
    elevation: 10,
    backgroundColor : 'white',
    borderRadius: 10,

    alignItems: 'center',
    justifyContent: 'center',
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
