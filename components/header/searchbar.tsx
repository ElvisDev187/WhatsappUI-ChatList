import {StyleSheet, TextInput, View} from 'react-native';
import Search from '@app/assets/search.svg';
const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Search width={24} height={24} color={'#767779'} />
      <TextInput
        style={styles.text}
        placeholder="Ask Meta AI or search"
        placeholderTextColor={'#767779'}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4F4F4',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 6,
  },
  text: {
    fontSize: 16,
  },
});
