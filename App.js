import { FlatList, StyleSheet, Text, View } from 'react-native';
import Products from './components/Products';
import SearchBar from './components/SearchBar'
import data from './data.json'

export default function App() {

  const renderProduct = ({ item }) => <Products products={item} />

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PatikaStore</Text>
      <SearchBar></SearchBar>
      <FlatList numColumns={2}
        keyExtractor={item => item.id.toString()}
        data={data}
        renderItem={renderProduct} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    color: '#800080',
    fontSize: 30,
    fontWeight: 'bold',
    margin: 5
  }
});
