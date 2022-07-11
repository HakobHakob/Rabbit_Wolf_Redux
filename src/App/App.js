import React from 'react'
import { useState } from 'react'
import { AppStyles } from './AppStyle'
import { GameArea } from '../GameAreaFolder/GameArea'
import { CreateNewBoard } from '../CreateNewBoard/NewGameBoardBtn'
import { useSelector } from 'react-redux'

function App() {
  const [gameBoardNumber, setGameBoardNumber] = useState([])

  function addGameBoardnumber() {
    setGameBoardNumber([...gameBoardNumber, gameBoardNumber.length + 1])
  }

  return (
    <AppStyles>
      <CreateNewBoard onClick={addGameBoardnumber} />
      {gameBoardNumber.map((item) => {
        return <GameArea key={item} />
      })}
    </AppStyles>
  )
}
export default App
