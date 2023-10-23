import { createContext, useContext } from 'react'
import { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
export const TodoContext = createContext(null)

export const TodoContextProvider = ({ children }) => {
  const [list, setList] = useState([])
  const deleteItem = async (name) => {
    const newList = list.filter((item) => item.name !== name)
    setList(newList)

    try {
      await AsyncStorage.setItem('todoList', JSON.stringify(newList))
    } catch (error) {
      console.log(error)
    }
  }

  const addItem = async (newTodo) => {
    const newList = [...list, { name: newTodo, currentState: false }]
    setList(newList)

    try {
      await AsyncStorage.setItem('todoList', JSON.stringify(newList))
    } catch (error) {
      console.log(error)
    }
  }

  const getList = async () => {
    let list = await AsyncStorage.getItem('todoList')
    return JSON.parse(list)
  }

  const changeState = async (currentItem) => {
    const newList = list.map((item) => {
      if (item.name === currentItem.name) {
        return { ...item, currentState: !currentItem.currentState }
      }
      return item
    })
    try {
      await AsyncStorage.setItem('todoList', JSON.stringify(newList))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getList().then((data) => {
      if (data) {
        setList(data)
      } else {
        setList([])
      }
    })
  }, [])

  return <TodoContext.Provider value={{ list, setList, deleteItem, addItem, changeState }}>{children}</TodoContext.Provider>
}

export const useTodoContext = () => {
  return useContext(TodoContext)
}
