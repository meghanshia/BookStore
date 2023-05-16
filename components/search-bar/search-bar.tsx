import React, {memo, useState} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {styles} from './search-bar.styles';
import {Input} from 'react-native-elements';

export interface SearchBarProps {
  onSearch: any;
  setSearchKey: any;
}

/*
 * Need to optimized to add suggestions,
 * search on key press with debounce effect
 */

const SearchBars: React.FunctionComponent<SearchBarProps> = (
  props: SearchBarProps,
) => {
  const [value, setValue] = useState('');

  const rightIcon = () => {
    return (
      <TouchableOpacity onPress={() => props.onSearch(value)}>
        <Image
          source={require('./assets/search.png')}
          style={{height: 30, width: 30}}
        />
      </TouchableOpacity>
    );
  };

  const onTextChanged = val => {
    setValue(val);
    props.setSearchKey(val);
  };

  return (
    <View style={styles.Container}>
      <Input
        autoFocus={true}
        style={styles.InputContainer}
        onChangeText={onTextChanged}
        value={value}
        inputStyle={styles.InputStyle}
        placeholder={'search here...'}
        rightIcon={rightIcon()}
      />
    </View>
  );
};
export const SearchBar = memo(SearchBars);
