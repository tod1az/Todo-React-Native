import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import Input from '../components/Input'
import { useTodoContext } from '../context/TodoContext'

const AddTodo = ({ navigation }) => {
  const [newTodo, setNewTodo] = useState('')
  const [error, setError] = useState(false)
  const { addItem } = useTodoContext()

  const pressHandler = async () => {
    if (newTodo !== '') {
      await addItem(newTodo)
      navigation.goBack()
    } else {
      setError(true)
    }
  }
  return (
    <View style={styles.form}>
      <Text style={styles.title}>New To do</Text>
      <View style={styles.input}>
        <Input setNewTodo={setNewTodo} newTodo={newTodo} />
        {error && <Text style={styles.error}>*</Text>}
      </View>
      <TouchableOpacity onPress={pressHandler} style={styles.button}>
        <Text>Save</Text>
      </TouchableOpacity>
      {error && <Text style={styles.error}>Please fill out the mandatory fields</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    marginTop: 40,
    alignItems: 'center'
  },
  input: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5
  },
  error: {
    color: '#FF0000'
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold'
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 10,
    backgroundColor: '#87CEEB',
    borderRadius: 20,
    display: 'flex',
    alignItems: 'center',
    width: 200
  }
})
export default AddTodo
