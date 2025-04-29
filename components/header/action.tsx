import {StyleSheet, Text, View} from 'react-native';
import MoreIcon from '../../assets/more.svg';
import PhotoIcon from '../../assets/photo.svg';
import PlusIcon from '../../assets/plus.svg';
const Action = () => {
  return (
    <View style={styles.container}>
      <MoreIcon width={28} height={28} />
      <View style={styles.lefContainer}>
        <PhotoIcon width={28} height={28} />
        <PlusIcon width={28} height={28} />
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
