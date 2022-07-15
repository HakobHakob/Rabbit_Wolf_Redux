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
import { ShowMessage } from '../ShowMessage/ShowMessage'
import { RendGameBoardDiv } from '../RendGameBoard/RendGameBoardStyle'




const options = [
  { value: 5, label: '5 x 5' },
  { value: 7, label: '7 x 7' },
  { value: 10, label: '10 x 10' },
]
const directions = [0, 1, 2, 3]
const GAME_STATE_START = 'GAME_STATE_START'
const GAME_STATE_MATRIX = 'GAME_STATE_MATRIX'
const GAME_STATUS = 'GAME_STATUS'
const GAME_RESULT = 'GAME_RESULT'
const GAME_BOARD_SIZE = 'GAME_BOARD_SIZE'


const GameArea = () => {
  const gameBordSize = useSelector((state) => {
    return state.gameSelect.boardSize
  })

  const gameStateObject = useSelector((state) => {
    return state.gameState
  })

  const gameMatrix = useSelector((state) => {
    return state.gameState.gameGrid
  })

  const gameStatus = useSelector((state) => {
    return state.gameState.isGameOver
  })

  const gameResult = useSelector((state) => {
    return state.gameState.gameResult
  })

  const dispatch = useDispatch()

  

  const setRabbitDirections = (gameStateObject, directions) => {
    if (gameStatus === true) {
      return
    }
    const gameState = MoveCharacters({ ...gameStateObject }, directions)

    dispatch({
      type: GAME_STATE_MATRIX,
      payload: {
        gameGrid: gameState.gameGrid,
      },
    })
    dispatch({
      type: GAME_STATUS,
      payload: {
        isGameOver: gameState.isGameOver,
      },
    })
    dispatch({
      type: GAME_RESULT,
      payload: {
        gameResult: gameState.gameResult,
      },
    })
  }
  const isGameInProcess = gameStatus === false && gameMatrix.length > 0

  return (
    <>
      <RendGameBoardDiv>
        <OptionsDivStyle>
          <StartBtnStyle
            onClick={() => {
              dispatch({
                type: GAME_STATE_START,
                payload: {
                  gameGrid: CreateGameArray(gameBordSize),
                  isGameOver: false,
                  gameResult: '',
                },
              })
            }}
          >
            Start
          </StartBtnStyle>

          {isGameInProcess ? (
            <ButtonsDiv>
              {directions.map((direction, index) => {
                return (
                  <ArrowButtons
                    key={index}
                    direction={direction}
                    onClick={() =>
                      setRabbitDirections(gameStateObject, direction)
                    }
                  />
                )
              })}
            </ButtonsDiv>
          ) : null}
          <CustomSelect
            options={options}
            onChange={(e) => {
              dispatch({
                type: GAME_BOARD_SIZE,
                payload: {
                  boardSize: parseInt(e.target.value),
                },
              })
            }}
          ></CustomSelect>
        </OptionsDivStyle>

        {gameStatus === true ? (
          <ShowMessage message={gameResult} />
        ) : (
          <div>{<GameBoard array={gameMatrix} />}</div>
        )}
      </RendGameBoardDiv>
    </>
  )
}

export { GameArea }
