import { View, TextInput, StyleSheet } from 'react-native'

const Input = ({ newTodo, setNewTodo }) => {
  return (
    <View style={styles.input}>
      <TextInput value={newTodo} editable numberOfLines={1} maxLength={50} onChangeText={(text) => setNewTodo(text)} />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 8,
    width: 200
  }
})

export default Input
