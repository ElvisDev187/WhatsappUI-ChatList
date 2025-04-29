import {ScrollView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import FilterPlus from '@app/assets/plus-filter.svg';
const CATEGORIES = [
  {id: '1', name: 'All', selected: true},
  {id: '2', name: 'Unread', selected: false},
  {id: '3', name: 'Science', selected: false},
  {id: '4', name: 'Favourites', selected: false},
  {id: '5', name: 'Groups', selected: false},
];
const CategoryList = () => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {CATEGORIES.map(category => {
        return (
          <TouchableOpacity
            key={category.id}
            style={[
              styles.Categorycontainer,
              {
                backgroundColor: category.selected ? '#D0FECF' : '#F4F4F4',
              },
            ]}>
            <Text
              style={[
                styles.categoryText,
                {
                  color: category.selected ? '#15603E' : '#767779',
                },
              ]}>
              {category.name}
            </Text>
          </TouchableOpacity>
        );
      })}
      <TouchableOpacity style={styles.Categorycontainer}>
        <FilterPlus width={34} height={34} color={'#767779'} />
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  Categorycontainer: {
    height: 34,
    borderRadius: 19,
    paddingHorizontal: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: 'semibold',
  },
  icon: {
    backgroundColor: '#F4F4F4',
    borderRadius: 17,
    height: 34,
    width: 34,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
