const BOARD_NUMBER = 'BOARD_NUMBER'

export const boardNumberReducer = (state = {}, action) => {
  switch (action.type) {
    case BOARD_NUMBER:
      return {
        ...state,
        gameBoardNumber: action.payload.gameBoardNumber,
      }

    default:
      return state
  }
}

export const initialBoardNumber = {
  gameBoardNumber: [],
}

export const addBoardNumber = (newNumber) => {
  return {
    type: BOARD_NUMBER,
    payload: {
      gameBoardNumber: newNumber,
    },
  }
}
