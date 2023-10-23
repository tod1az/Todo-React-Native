import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import Item from '../components/Item'
import { useTodoContext } from '../context/TodoContext'

const Home = ({ navigation }) => {
  const { list, deleteItem } = useTodoContext()
  const pressHandler = () => {
    navigation.navigate('Add')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To do List</Text>
      {list.length === 0 ? (
        <Text style={styles.error} numberOfLines={1}>
          Press "+" to add a new Todo
        </Text>
      ) : (
        <FlatList data={list} renderItem={({ item }) => <Item item={item} deleteItem={deleteItem} />} keyExtractor={(item) => item.name} />
      )}
      <TouchableOpacity onPress={pressHandler} style={[styles.button, list.length === 0 && { bottom: 'none', top: 200, right: 160 }]}>
        <Text>+</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    alignItems: 'center',
    gap: 2,
    flex: 1
  },
  title: {
    marginTop: 10,
    fontSize: 40,
    fontWeight: 'bold'
  },
  button: {
    position: 'absolute',
    width: 50,
    height: 50,
    backgroundColor: '#87CEEB',
    borderRadius: 25,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 50,
    right: 20
  },
  error: {
    marginTop: 40
  }
})

export default Home
