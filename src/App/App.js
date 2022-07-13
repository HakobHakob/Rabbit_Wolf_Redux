import React from 'react'
import { AppStyles } from './AppStyle'
import { GameArea } from '../GameAreaFolder/GameArea'
import { useDispatch, useSelector } from 'react-redux'
import { CreateNewBoard } from '../CreateNewBoard/NewGameBoardBtn'
// import { BoardNumber } from './BoardNumber'

const BOARD_NUMBER = 'BOARD_NUMBER'




function App() {

  const boardNumber = useSelector(state =>{
    return state.boardNumber.gameBoardNumber
  })

  const dispatch = useDispatch()
 

  return (
    <AppStyles>
      
      <CreateNewBoard  onClick={()=>{
        console.log(boardNumber)
        dispatch({
          type:BOARD_NUMBER,
          payload:{
            gameBoardNumber:boardNumber.length + 1
          }
        })
      }} />
      <GameArea/>
     

      {/* <BoardNumber boardNumber={boardNumber}/> */}
      {/* {boardNumber.map((item) => {
        return <GameArea key={item} />
      })} */}
    </AppStyles>
  )
}
export default App
