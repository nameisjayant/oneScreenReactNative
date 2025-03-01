import {useState} from 'react';
import {FlatList, View} from 'react-native';
import {sportList} from '../domain/sports';
import SportRow from './SportRow';

const SportList = () => {
  const [selected, setSelected] = useState(1);
  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={sportList}
        renderItem={({item}) => (
          <SportRow
            data={item}
            selected={selected === item?.id}
            onSelectChange={setSelected}
          />
        )}
        ItemSeparatorComponent={() => (
          <View
            style={{
              width: 16,
            }}
          />
        )}
        style={{
          paddingHorizontal: 16,
        }}
      />
    </View>
  );
};

export default SportList;
