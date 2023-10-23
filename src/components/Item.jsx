import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import { useTodoContext } from '../context/TodoContext'

const Item = ({ item, deleteItem }) => {
  const { name, currentState } = item
  const [state, setState] = useState(currentState)
  const toggleSwitch = async () => {
    setState(!state)
    await changeState(item)
  }
  const { changeState } = useTodoContext()

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => deleteItem(name)}>
        <Text style={{ color: '#FF0000' }}>X</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={toggleSwitch}>
        <Text style={[styles.item, state && { color: '#008000' }]}>{name}</Text>
      </TouchableOpacity>
      <Switch
        trackColor={{ false: '#C0C0C0', true: '#008000' }}
        thumbColor={state ? '#f4f3f4' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={state}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    color: '#FF0000'
  },
  container: {
    marginTop: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6
  }
})

export default Item
