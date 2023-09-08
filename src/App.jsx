import { useEffect, useState } from "react";
import "./App.css";
import Cell from "./components/Cell.jsx";

function App() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("cross");
  const [winningMessage, setWinningMessage] = useState(null);
  const message = "It is now " + go + "'s go";

  const checkScore = ()=>{
    const winCondition = [
      
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,8],[2,4,6]

    ]
    winCondition.forEach(array =>{
      let circleWins = array.every(cell => cells[cell] === "circle")

      if(circleWins){
        setWinningMessage("CIRCLE WINS!")
        return
      
      }

      let crossWins = array.every(cell => cells[cell] === "cross")

      if(crossWins){
        setWinningMessage("CROSS WINS!")
        return
      
      }
      
    })

  }
  const reset = ()=>{
    setCells(["", "", "", "", "", "", "", "", ""])
    setGo("cross")
    setWinningMessage(null)
  }

  useEffect(()=>{
    checkScore()
  },[cells])

  
  return (
    <div className="app">
      <div className="gameBoard">
        {cells.map((cell, index) => (
          <Cell 
            key={index}
            id={index}
            cell={cell}
            setCells={setCells}
            go = {go}
            setGo = {setGo}
            cells = {cells}
            winningMessage = {winningMessage}
              />
        ))}
      </div>
      <p>{winningMessage||message}</p>
      <button className="gradient-button" onClick = {reset}>Restart!</button>
    </div>
  );
}

export default App;
