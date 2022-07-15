const GAME_BOARD_SIZE = 'GAME_BOARD_SIZE'

export const gameSelectReducer = (state={}, action) => {
  
  switch (action.type) {
    case GAME_BOARD_SIZE:
      return { 
        boardSize: action.payload.boardSize
      }
  

  
    default:
      return state
  
  }
}


export const initialSelectValue = {
  boardSize: 5,
}



export const editValue = (newValue) => {
  return {
    type: GAME_BOARD_SIZE,
    payload: {
      boardSize: newValue,
    }
  }
}
