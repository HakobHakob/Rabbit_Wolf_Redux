import React from "react";
import { GameArea } from "../GameAreaFolder/GameArea";



export const BoardNumber = ({boardNumber}) =>{
    
    boardNumber.map((item) => {
        return <GameArea key={item} />
      })
}