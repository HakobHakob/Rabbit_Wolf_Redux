import React from 'react'
import { NewGameBoardBtnStyle } from './NewBoardBtnStyle'

const CreateNewBoard = ({ onClick }) => {
  return (
    <NewGameBoardBtnStyle onClick={onClick}>
      Create New Board
    </NewGameBoardBtnStyle>
   
  )
}
export { CreateNewBoard }
