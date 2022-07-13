const GAME_GRID = 'GAME_GRID'
const GAME_STATUS = 'GAME_STATUS'
const GAME_RESULT = 'GAME_RESULT'

export const gameStateReducer = (state = {}, action) => {
  if (action.type === GAME_GRID) {
    return {
      gameGrid: action.payload.gameGrid,
    }
  } else if (action.type === GAME_STATUS) {
    return {
      isGameOver: action.payload.isGameOver,
    }
  } else if (action.type === GAME_RESULT) {
    return {
      gameResult: action.payload.gameResult,
    }
  } else return state
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

export const setGameMatrix = (setMatrix) => {
  return {
    type: GAME_GRID,
    payload: {
      gameGrid: setMatrix,
    },
  }
}
export const setGameStatus = (setStatus) => {
  return {
    type: GAME_STATUS,
    payload: {
      isGameOver: setStatus,
    },
  }
}
export const setGameResult = (setResult) => {
  return {
    type: GAME_RESULT,
    payload: {
      gameResult: setResult,
    },
  }
}