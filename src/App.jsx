import React, { useRef, useState } from 'react'
import './App.css'

function App() {

  const[result, setResult] = useState('')
  const[player, setPlayer] = useState('O')
  const[game, setGame] = useState(true)
  const[click, setClick] = useState(0)

  const disableClick = (id) =>{
    console.log(id + " will not work now")
    document.getElementById(id).style.pointerEvents ="none"
    console.log(id)
  }
  

  const checkWinner = ()=>{
    const values = []
    for(let i=1; i<=9; i++){
      values[i]= document.getElementById(`cell${i}`).innerHTML
    }
    if(player==values[1]&&player==values[2]&&player==values[3]){
      setResult(player+" is winner")
      document.getElementById('cell1').className='winner'
      document.getElementById('cell2').className='winner'
      document.getElementById('cell3').className='winner'
      setGame(false)
    }
    else if(player==values[4]&&player==values[5]&&player==values[6]){
      setResult(player+" is winner")
      document.getElementById('cell4').className='winner'
      document.getElementById('cell5').className='winner'
      document.getElementById('cell6').className='winner'
      setGame(false)
    }
    else if(player==values[7]&&player==values[8]&&player==values[9]){
      setResult(player+" is winner")
      document.getElementById('cell7').className='winner'
      document.getElementById('cell8').className='winner'
      document.getElementById('cell9').className='winner'
      setGame(false)
    }
    else if(player==values[1]&&player==values[4]&&player==values[7]){
      setResult(player+" is winner")
      document.getElementById('cell1').className='winner'
      document.getElementById('cell4').className='winner'
      document.getElementById('cell7').className='winner'
      setGame(false)
    }
    else if(player==values[2]&&player==values[5]&&player==values[8]){
      setResult(player+" is winner")
      document.getElementById('cell2').className='winner'
      document.getElementById('cell5').className='winner'
      document.getElementById('cell8').className='winner'
      setGame(false)
    }
    else if(player==values[3]&&player==values[6]&&player==values[9]){
      setResult(player+" is winner")
      document.getElementById('cell3').className='winner'
      document.getElementById('cell6').className='winner'
      document.getElementById('cell9').className='winner'
      setGame(false)
    }
    else if(player==values[1]&&player==values[5]&&player==values[9]){
      setResult(player+" is winner")
      document.getElementById('cell1').className='winner'
      document.getElementById('cell5').className='winner'
      document.getElementById('cell9').className='winner'
      setGame(false)
    }
    else if(player==values[3]&&player==values[5]&&player==values[7]){
      setResult(player+" is winner")
      document.getElementById('cell3').className='winner'
      document.getElementById('cell5').className='winner'
      document.getElementById('cell7').className='winner'
      setGame(false)
    }

    else if(click>=8){
      setResult('Game Drawn')
    }
  }

  const clickHandler = (cell)=>{

    if(game){
      document.getElementById(cell).innerHTML=player
      setClick(click+1)
      disableClick(cell)
      checkWinner()
      if(player=='O'){
        setPlayer('X')
      }
      else{
        setPlayer('O')
      }
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

          <p id='result'>{result}</p>

          <button onClick={()=>{window.location="/"}} id='restart-btn'>Restart</button>
      </div>
    </>
  )
}

export default App