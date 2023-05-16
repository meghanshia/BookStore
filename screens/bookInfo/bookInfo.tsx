import React, {FunctionComponent, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './bookInfo.styles';
import axios from 'axios';

export interface BookInfoProps {
  route: any;
  navigation: any;
}

/* UI to be optimized to show more info
 */

export const BookInfo: FunctionComponent<BookInfoProps> = ({
  route,
  navigation,
}) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const routeData = JSON.parse(route.params.book);
  const key = routeData.key;
  const cover = routeData.cover_i;
  const url = 'https://covers.openlibrary.org/b/id/' + cover + '-L.jpg';
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    setIsLoading(true);
    const baseURL = 'https://openlibrary.org' + key + '.json';
    await axios
      .get(`${baseURL}`)
      .then(response => {
        setData(response.data);
      })
      .catch(err => console.log('error: ', err));
    setIsLoading(false);
  };
  return (
    <View style={styles.Container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.GoBackButton}>
        <Text style={styles.GoBackText}>Go Back</Text>
      </TouchableOpacity>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <ScrollView style={styles.InfoView}>
          {data && (
            <>
              <Text style={styles.Title}>{data?.title}</Text>
              <Image source={{uri: url}} style={styles.CoverImage} />
              <Text style={styles.Desc}>
                {data?.description || data?.description?.value}
              </Text>
              <View style={styles.AdditionalInfoView}>
                <View style={styles.AdditionalView}>
                  <Text style={styles.DataText}>Rating: </Text>
                  <Text style={styles.DataText}>
                    {routeData?.ratings_average || 0}
                  </Text>
                </View>
                <View style={styles.AdditionalView}>
                  <Text style={styles.DataText}>Editions: </Text>
                  <Text style={styles.DataText}>
                    {routeData?.edition_count || 0}
                  </Text>
                </View>
                <View style={styles.AdditionalView}>
                  <Text style={styles.DataText}>E-books: </Text>
                  <Text style={styles.DataText}>
                    {routeData?.ebook_count_i || 0}
                  </Text>
                </View>
              </View>
            </>
          )}
        </ScrollView>
      )}
    </View>
  );
};
