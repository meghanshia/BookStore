import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    marginTop: 60,
  },
  GoBackButton: {
    width: 70,
    height: 30,
    backgroundColor: 'blue',
    borderRadius: 15,
    marginLeft: 10,
    justifyContent: 'center',
  },
  GoBackText: {color: 'white', alignSelf: 'center'},
  InfoView: {marginTop: 10, padding: 20},
  CoverImage: {
    height: 300,
    width: 250,
    alignSelf: 'center',
    marginBottom: 10,
    resizeMode: 'contain',
  },
  Title: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    color: '#141823',
    padding: 10,
  },
  Desc: {
    fontSize: 12,
    textAlign: 'center',
    padding: 10,
  },
  AdditionalInfoView: {
    height: 40,
    marginBottom: 80,
  },
  AdditionalView: {
    flexDirection: 'row',
    backgroundColor: 'blue',
    alignSelf: 'center',
    paddingHorizontal: 25,
    borderRadius: 5,
    marginBottom: 10,
  },
  DataText: {
    color: 'white',
    paddingVertical: 5,
  },
});
