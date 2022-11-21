import {View, TextInput, StyleSheet} from 'react-native';
// import { Feather } from "@expo/vector-icons";
import Ionicons from 'react-native-vector-icons/Ionicons';
//
const SearchBar = ({inputTerm, setInputTerm, searchInputTerm}) => {
  return (
    <View style={styles.backgroundStyle}>
      {/* <Feather name="search" style={styles.iconStyle} /> */}
      <Ionicons name="search" style={styles.iconStyle} size={25} />
      <TextInput
        placeholder="Search"
        style={styles.inputStyles}
        value={inputTerm}
        onChangeText={setInputTerm}
        onEndEditing={searchInputTerm}
        autoCapitalize="none"
        // autocorrect={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 8,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    // elevation: 10,
  },
  iconStyle: {
    alignSelf: 'center',
    marginHorizontal: 15,
    color: 'gray',
  },
  inputStyles: {
    flex: 1,
  },
});

export default SearchBar;
