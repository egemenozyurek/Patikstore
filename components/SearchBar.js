import React from "react"
import { TextInput, View } from "react-native"
import Styles from './SearchBar.style';

const SearchBar = () => {
    return (
        <View>
            <TextInput placeholder="Ara..." placeholderTextColor={'#BBBBBB'} style={Styles.textInput}></TextInput>
        </View>
    )
}

export default SearchBar