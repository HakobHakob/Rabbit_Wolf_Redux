import React from 'react'
import { CustomSelect } from '../GameSelect/CustomSelect'
import { useSelector, useDispatch } from 'react-redux'
import { StartBtnStyle } from '../StartBtnFolder/StartBtnStyle'
import { GameBoard } from '../RendGameBoard/RendGameBoard'
import { CreateGameArray } from './CreateEmptyMass'
import { OptionsDivStyle } from './OptionsDivStyle'
import { ButtonsDiv } from './ButtonsDiv'
import { ArrowButtons } from '../ArrowButtons/ArrowButtons'
import { MoveCharacters } from './MoveCharacters'

const options = [
  { value: 5, label: '5 x 5' },
  { value: 7, label: '7 x 7' },
  { value: 10, label: '10 x 10' },
]
const directions = [0, 1, 2, 3]
const GAME_GRID = 'GAME_GRID'

const GameArea = () => {

  const gameBordSize = useSelector((state) => {
    return state.gameSelect.boardSize
  })

  const gameStateObject = useSelector((state) => {

  console.log(state.gameState,'asss')

    return state.gameState
  })


  const gameMatrix = useSelector((state) => {
    return state.gameState.gameGrid
  })
  const gameStatus = useSelector((state) => {
    return state.gameState.isGameOver
  })

  const dispatch = useDispatch()

  const setRabbitDirections = (gameStateObject,directions) => {
    console.log(gameStateObject,'7777')
    if (gameStatus === true) {
      return
    }
   MoveCharacters({...gameStateObject}, directions)

  }

  return (
    <>
    <OptionsDivStyle>
      <StartBtnStyle
        onClick={() => {
          dispatch({
            type: GAME_GRID,
            payload: {
              gameGrid: CreateGameArray(gameBordSize),
              isGameOver:false,
              gameResult:''
            },
          })
        }}
      >
        Start
      </StartBtnStyle>

      <ButtonsDiv>
      {directions.map((direction, index) => {
        
              return (
                <ArrowButtons
                  key={index}
                  direction={direction}
                  onClick={() => {
                    dispatch({
                      type: GAME_GRID,
                      payload: {
                        gameGrid: setRabbitDirections(gameStateObject,direction),                 
                        isGameOver:false,
                        gameResult:''
                        
                      },
                    })
                  }}
                  
                />
              )
            })}
      </ButtonsDiv>

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
