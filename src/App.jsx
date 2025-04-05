import React, { useRef, useState } from 'react'
import './App.css'

function App() {

  const[player, setPlayer] = useState('O')

  const checkWinner = ()=>{
    const values = []
    for(let i=1; i<=9; i++){
      values[i]= document.getElementById(`cell${i}`).innerHTML
    }
    if(player==values[1]&&player==values[2]&&player==values[3]){
      alert(player+ "is the winner")
    }
    else if(player==values[4]&&player==values[5]&&player==values[6]){
      alert(player+ "is the winner")
    }
    else if(player==values[7]&&player==values[8]&&player==values[9]){
      alert(player+ "is the winner")
    }
    else if(player==values[1]&&player==values[4]&&player==values[7]){
      alert(player+ "is the winner")
    }
    else if(player==values[2]&&player==values[5]&&player==values[8]){
      alert(player+ "is the winner")
    }
    else if(player==values[3]&&player==values[6]&&player==values[9]){
      alert(player+ "is the winner")
    }
    else if(player==values[1]&&player==values[5]&&player==values[9]){
      alert(player+ "is the winner")
    }
    else if(player==values[3]&&player==values[5]&&player==values[7]){
      alert(player+ "is the winner")
    }
  }

  const clickHandler = (cell)=>{
    document.getElementById(cell).innerHTML=player
    checkWinner()
    if(player=='O'){
      setPlayer('X')
    }
    else{
      setPlayer('O')
    }
  }





  return (
    <>
      <div className='container'>
          <h1 id='heading'>Tic Tac Toe</h1>

          <div className='game-board'>
              <div className="cell" id='cell1' onClick={()=>{clickHandler('cell1')}}></div>
              <div className="cell" id='cell2' onClick={()=>{clickHandler('cell2')}}></div>
              <div className="cell" id='cell3' onClick={()=>{clickHandler('cell3')}}></div>
              <div className="cell" id='cell4' onClick={()=>{clickHandler('cell4')}}></div>
              <div className="cell" id='cell5' onClick={()=>{clickHandler('cell5')}}></div>
              <div className="cell" id='cell6' onClick={()=>{clickHandler('cell6')}}></div>
              <div className="cell" id='cell7' onClick={()=>{clickHandler('cell7')}}></div>
              <div className="cell" id='cell8' onClick={()=>{clickHandler('cell8')}}></div>
              <div className="cell" id='cell9' onClick={()=>{clickHandler('cell9')}}></div>
          </div>

          <button onClick={()=>{window.location="/"}} id='restart-btn'>Restart</button>
      </div>
    </>
  )
}

export default App