import React from 'react'
import './App.css'

function App() {
  return (
    <>
      <div className='container'>
          <h1 id='heading'>Tic Tac Toe</h1>

          <div className='game-board'>
              <div className="cell"></div>
              <div className="cell"></div>
              <div className="cell"></div>
              <div className="cell"></div>
              <div className="cell"></div>
              <div className="cell"></div>
              <div className="cell"></div>
              <div className="cell"></div>
              <div className="cell"></div>
          </div>
      </div>
    </>
  )
}

export default App