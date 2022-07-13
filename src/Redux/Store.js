import { combineReducers, createStore } from 'redux'
import { appReducer, initialBoardNumber } from '../App/AppReducer'
import {
  GameStateReducer,
  initialGameState,
} from '../GameAreaFolder/GameMatrixReducer'
import {
  gameSelectReducer,
  initialSelectValue,
} from '../GameSelect/GameSelectReducer'

const store = createStore(
  combineReducers({
    gameSelect: gameSelectReducer,
    gameState: GameStateReducer,
    boardNumber: appReducer,
  }),
  {
    gameSelect: initialSelectValue,
    gameState: initialGameState,
    boardNumber: initialBoardNumber,
  }
)

export { store }
