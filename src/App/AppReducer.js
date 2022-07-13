const BOARD_NUMBER = 'BOARD_NUMBER'

export const appReducer = (state = [], action) => {
  if (action.type === BOARD_NUMBER) {
    return {
      gameBoardNumber: action.payload.gameBoardNumber,
    }
  }
  return state
}

export const initialBoardNumber = {
  gameBoardNumber: [],
}

export const boardNumber = (state) => {
  return state.boardNumber.gameBoardNumber
}

export const addBoardNumber = (newNumber) => {
  return {
    type: BOARD_NUMBER,
    payload: {
      gameBoardNumber: newNumber,
    },
  }
}
