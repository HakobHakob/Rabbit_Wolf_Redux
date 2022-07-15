import React from "react"
import { AppStyles } from "./AppStyle"
import { CreateNewBoard } from "../CreateNewBoard/NewGameBoardBtn"
import { GameArea } from "../GameAreaFolder/GameArea"
import { useDispatch, useSelector } from "react-redux"

const BOARD_NUMBER = "BOARD_NUMBER"

function App() {
  const gameBoards = useSelector((state) => {
    return state.boardNumber.gameBoards
  })

  const dispatch = useDispatch()

  const addGameBoardnumber = () => {
    dispatch({
      type: BOARD_NUMBER,
      payload: [...gameBoards, Number(gameBoards + 1)],
    })
  }

  return (
    <AppStyles>
      <CreateNewBoard onClick={addGameBoardnumber} />
      {gameBoards.map((item) => (
        <GameArea key={item} />
      ))}
    </AppStyles>
  )
}
export default App