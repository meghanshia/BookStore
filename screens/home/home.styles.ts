import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  ImageView: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  TopIconView: {
    marginTop: 40,
    justifyContent: 'flex-start',
    marginLeft: 20,
    flexDirection: 'row',
  },
  BookIcon: {height: 40, width: 40, alignSelf: 'center'},
  TopTextView: {marginLeft: 10},
  TopText: {color: 'white', fontSize: 20},
  Text1: {color: 'white', fontSize: 10},
  LoaderView: {height: '70%', justifyContent: 'center'},
  ListItemView: {
    backgroundColor: 'white',
    height: 70,
    justifyContent: 'flex-start',
    marginBottom: 5,
    flexDirection: 'row',
    padding: 10,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  Thumbnail: {
    height: 50,
    width: 50,
  },
  Title: {alignContent: 'flex-start', marginTop: 5, marginLeft: 10},
  EmptyView: {justifyContent: 'center', padding: 30},
  EmptyText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});
