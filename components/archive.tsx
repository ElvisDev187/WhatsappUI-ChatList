import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ArchiveIcon from '@app/assets/archived-small.svg';

const Archives = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          console.log('Archive pressed');
        }}>
        <ArchiveIcon width={24} height={24} color={'#767779'} />
      </TouchableOpacity>
      <Text style={styles.text}>Archived</Text>
    </View>
  );
};

export default Archives;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 16,
    color: '#00000',
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
