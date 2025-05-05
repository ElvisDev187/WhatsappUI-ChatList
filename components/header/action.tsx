import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MoreIcon from '../../assets/more.svg';
import PhotoIcon from '../../assets/photo.svg';
import PlusIcon from '../../assets/plus.svg';
const Action = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          console.log('More icon pressed');
        }}>
        <MoreIcon width={28} height={28} />
      </TouchableOpacity>
      <View style={styles.lefContainer}>
        <TouchableOpacity>
          <PhotoIcon width={28} height={28} />
        </TouchableOpacity>
        <TouchableOpacity>
          <PlusIcon width={28} height={28} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Action;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  lefContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 15,
  },
});
