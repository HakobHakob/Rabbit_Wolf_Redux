import React from 'react'
import { AppStyles } from './AppStyle'
import { CreateNewBoard } from '../CreateNewBoard/NewGameBoardBtn'
import { GameArea } from '../GameAreaFolder/GameArea'
import { useDispatch, useSelector } from 'react-redux'

const BOARD_NUMBER = 'BOARD_NUMBER'

function App() {
  const boardNumber = useSelector((state) => {
    return state.boardNumber.gameBoardNumber
  })

  const dispatch = useDispatch()

  const addGameBoardnumber = () => {
    return [
      ...boardNumber,
      dispatch({
        type: BOARD_NUMBER,
        payload: {
          gameBoardNumber: [...boardNumber, Number(boardNumber + 1)],
        },
      }),
    ]
  }

  return (
    <AppStyles>
      <CreateNewBoard onClick={addGameBoardnumber} />

      {boardNumber.map((item) => {
        return <GameArea key={item} />
      })}
    </AppStyles>
  )
}
export default App
