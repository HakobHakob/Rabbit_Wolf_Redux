import { combineReducers, createStore } from 'redux'
import { boardNumberReducer, initialBoardNumber } from '../App/BoardNumberReducer'
import {
  gameStateReducer,
  initialGameState,
} from '../GameAreaFolder/GameStateReducer'
import {
  gameSelectReducer,
  initialSelectValue,
} from '../GameSelect/GameSelectReducer'


 const store = createStore(
  combineReducers({
    gameSelect: gameSelectReducer,
    gameState: gameStateReducer,
    boardNumber: boardNumberReducer,
  }),
  {
    gameSelect: initialSelectValue,
    gameState: initialGameState,
    boardNumber: initialBoardNumber,
  },
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : undefined


)
export {store}







