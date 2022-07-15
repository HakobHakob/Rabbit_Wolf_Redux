const BOARD_NUMBER = "BOARD_NUMBER"

export const initialBoardNumber = {
  gameBoards: [],
}

export const boardNumberReducer = (state = initialBoardNumber, action) => {
  switch (action.type) {
    case BOARD_NUMBER:
      return {
        gameBoards: action.payload,
      }

    default:
      return state
  }
}