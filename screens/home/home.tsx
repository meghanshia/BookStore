import React, {FunctionComponent, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './home.styles';
import axios from 'axios';
import {SearchBar} from '../../components/search-bar/search-bar';

export interface HomeProps {
  navigation: any;
}

export const Home: FunctionComponent<HomeProps> = ({navigation}) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [offset, setOffset] = useState(1);
  const [searchKey, setSearchKey] = useState('');
  const getData = async (item: string) => {
    if (!isLoading) {
      setIsLoading(true);
      let baseURL = 'https://openlibrary.org/search.json?q=';

      if (item) {
        baseURL = baseURL + item.split(' ').join('+') + '&page=' + offset;
      } else {
        baseURL = baseURL + '*';
      }

      await axios
        .get(`${baseURL}`)
        .then(response => {
          setOffset(offset + 1);
          setData(response.data.docs);
        })
        .catch(err => console.log('error: ', err));
      setIsLoading(false);
    }
  };

  const renderItemList = ({item}) => {
    let url = 'https://covers.openlibrary.org/b/id/' + item.cover_i + '-S.jpg';
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Details', {book: JSON.stringify(item)})
        }
        style={styles.ListItemView}>
        <Image source={{uri: url}} style={styles.Thumbnail} />
        <Text style={styles.Title}>{item.title}</Text>
      </TouchableOpacity>
    );
  };
  const getEmptyComponent = () => {
    return (
      <View style={styles.EmptyView}>
        <Text style={styles.TopText}>
          Search your favorite book here.. Explore the world of books...
        </Text>
      </View>
    );
  };

  const onEndReached = () => {
    !isLoading &&
      data.length > 0 &&
      offset < data.length / 100 &&
      getData(searchKey);
  }

  const keyExtractor = (item, index) => offset + '_' + index;
  return (
    <View style={styles.Container}>
      <View style={styles.ImageView}>
        <Image source={require('../assets/image.png')} />
      </View>
      <View style={styles.TopIconView}>
        <Image source={require('../assets/book.png')} style={styles.BookIcon} />
        <View style={styles.TopTextView}>
          <Text style={styles.TopText}>Welcome!</Text>
          <Text style={styles.TopText}>To Book Store</Text>
        </View>
      </View>
      <Text style={styles.Text1}>Enter your text and press search key..</Text>
      <SearchBar onSearch={getData} setSearchKey={setSearchKey} />
      {isLoading ? (
        <View style={styles.LoaderView}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <FlatList
          data={data}
          initialNumToRender={50}
          renderItem={renderItemList}
          keyExtractor={keyExtractor}
          onEndReached={onEndReached}
          ListEmptyComponent={() => getEmptyComponent()}
        />
      )}
    </View>
  );
};
