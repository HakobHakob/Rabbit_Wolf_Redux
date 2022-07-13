export const gameSelectReducer = (state={}, action) => {
  
  
  if (action.type === 'gameBoardSize') {
    return { 
      boardSize: action.payload.boardSize
    }
  }
  return state
}

export const initialSelectValue = {
  boardSize: 5,
}

export const selectValue = (state) => {
  return state.gameSelect.boardSize
}

export const editValue = (newValue) => {
  return {
    type: 'gameBoardSize',
    payload: {
      boardSize: newValue,
    }
  }
}
