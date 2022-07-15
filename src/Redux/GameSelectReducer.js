const GAME_BOARD_SIZE = 'GAME_BOARD_SIZE'
export const initialSelectValue = {
  boardSize: 5,
}

export const gameSelectReducer = (state = initialSelectValue, action) => {
  switch (action.type) {
    case GAME_BOARD_SIZE:
      return {
        boardSize: action.payload.boardSize,
      }

    default:
      return state
  }
}
export const editValue = (newValue) => {
  return {
    type: GAME_BOARD_SIZE,
    payload: {
      boardSize: newValue,
    }
  }
}

