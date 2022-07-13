import { combineReducers, createStore } from 'redux'
import { appReducer, initialBoardNumber } from '../App/AppReducer'
import {
  gameStateReducer,
  initialGameState,
} from '../GameAreaFolder/GameMatrixReducer'
import {
  gameSelectReducer,
  initialSelectValue,
} from '../GameSelect/GameSelectReducer'

const store = createStore(
  combineReducers({
    gameSelect: gameSelectReducer,
    gameState: gameStateReducer,
    boardNumber: appReducer,
  }),
  {
    gameSelect: initialSelectValue,
    gameState: initialGameState,
    boardNumber: initialBoardNumber,
  }
)

export { store }
