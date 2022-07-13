import React from 'react'
import { CustomSelect } from '../GameSelect/CustomSelect'
import { useSelector, useDispatch } from 'react-redux'
import { StartBtnStyle } from '../StartBtnFolder/StartBtnStyle'
import { GameBoard } from '../RendGameBoard/RendGameBoard'
import { CreateGameArray } from './CreateEmptyMass'
import { OptionsDivStyle } from './OptionsDivStyle'

const options = [
  { value: 5, label: '5 x 5' },
  { value: 7, label: '7 x 7' },
  { value: 10, label: '10 x 10' },
]
const GAME_GRID = 'GAME_GRID'

const GameArea = () => {
  const gameBordSize = useSelector((state) => {
 
    return state.gameSelect.boardSize
  })

  const gameMatrix = useSelector((state) => {
    return state.gameState.gameGrid
  })
  const dispatch = useDispatch()

  return (
    <>
    <OptionsDivStyle>
      <StartBtnStyle
        onClick={() => {
          dispatch({
            type: GAME_GRID,
            payload: {
              gameGrid: CreateGameArray(gameBordSize),
            },
          })
        }}
      >
        Start
      </StartBtnStyle>

      <CustomSelect
        options={options}
        onChange={(e) => {
          dispatch({
            type: 'gameBoardSize',
            payload: {
              boardSize: parseInt(e.target.value),
            },
          })
        }}
      ></CustomSelect>
     </ OptionsDivStyle>
      <GameBoard array={gameMatrix} />
    </>
  )
}

export { GameArea }
