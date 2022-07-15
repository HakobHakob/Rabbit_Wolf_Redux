const GAME_STATE_START = 'GAME_STATE_START'
const GAME_STATE_MATRIX = 'GAME_STATE_MATRIX'
const GAME_STATUS = 'GAME_STATUS'
const GAME_RESULT = 'GAME_RESULT'



export const gameStateReducer = (state = {}, action) => {
  switch (action.type) {
    case GAME_STATE_START:
      return {
        ...state,
        gameGrid: action.payload.gameGrid,
        isGameOver: action.payload.isGameOver,
        gameResult: action.payload.gameResult,       
      }

    case GAME_STATE_MATRIX:
      return {
        ...state,
        gameGrid: action.payload.gameGrid,
      }

    case GAME_STATUS:
      return {
        ...state,
        isGameOver: action.payload.isGameOver,
      }
    case GAME_RESULT:
      return {
        ...state,
        gameResult: action.payload.gameResult,
      }

    default:
      return state
  }
}

export const initialGameState = {
  gameGrid: [],
  isGameOver: false,
  gameResult: '',
}

export const setGameStateStart = (setMatrix, setStatus, setResult) => {
  return {
    type: GAME_STATE_START,
    payload: {
      gameGrid: setMatrix,
      isGameOver: setStatus,
      gameResult: setResult,
    },
  }
}
export const setGameStateMatrix = (setNewMatrix) => {
  return {
    type: GAME_STATE_MATRIX,
    payload: {
      gameGrid: setNewMatrix,
    },
  }
}
export const setGameStatus = (setNewStatus) => {
  return {
    type: GAME_STATUS,
    payload: {
      isGameOver: setNewStatus,
    },
  }
}
export const setGameResult = (setNewResult) => {
  return {
    type: GAME_RESULT,
    payload: {
      gameResult: setNewResult,
    },
  }
}