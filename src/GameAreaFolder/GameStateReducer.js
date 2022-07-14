const GAME_STATE = 'GAME_STATE'
// const GAME_STATUS = 'GAME_STATUS'
// const GAME_RESULT = 'GAME_RESULT'

export const gameStateReducer = (state = {}, action) => {
  if (action.type === GAME_STATE) {
    return {
      ...state,
      gameGrid: action.payload.gameGrid,
      isGameOver: action.payload.isGameOver,
      gameResult: action.payload.gameResult,     
      
    }
  // } else if (action.type === GAME_STATUS) {
  //   return {
  //     ...state,
  //     isGameOver: action.payload.isGameOver,
  //   }
  // } else if (action.type === GAME_RESULT) {
  //   return {
  //     ...state,
  //     gameResult: action.payload.gameResult,
  //   }
  } 
  // else 
  return state
}

export const initialGameState = {
  gameGrid: [],
  isGameOver: false,
  gameResult: '',
}

export const gameMatrix = (state) => {
  return state.gameState.gameGrid
}
export const gameStatus = (state) => {
  return state.gameState.isGameOver
}
export const gameResult = (state) => {
  return state.gameState.gameResult
}

export const setGameState = (setMatrix,setStatus,setResult) => {
  return {
    type: GAME_STATE,
    payload: {
      gameGrid: setMatrix,
      isGameOver: setStatus,
      gameResult: setResult,
    },
  }
}
// export const setGameStatus = (setStatus) => {
//   return {
//     type: GAME_STATUS,
//     payload: {
//       isGameOver: setStatus,
//     },
//   }
// }
// export const setGameResult = (setResult) => {
//   return {
//     type: GAME_RESULT,
//     payload: {
//       gameResult: setResult,
//     },
//   }
// }