import { configureStore } from '@reduxjs/toolkit'
import tarefasReducer from './reducers/tarefas'
import filtroReducer from './reducers/filtro'

const store = configureStore({
  reducer: {
    tarefas: tarefasReducer,
    fitro: filtroReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
