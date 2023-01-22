import { Box, Button, ButtonGroup } from '@mui/material'
import { useState } from 'react'
import './App.css'

function App() {
  const [running, setRunning] = useState<boolean>(false)
  const [counter, setCounter] = useState<number>(0)
  const [timer, setTimer] = useState<number | null>(null)

  if (running) {
    setTimer(() => {
      return setTimeout(() => {
        setCounter((prevCounter) => prevCounter += 100)
      }, 100)
    })
  }

  const start = (): void => {
    setRunning((prevState) => !prevState)
  }

  const stop = (): void => {
    setRunning((prevState) => !prevState)
    if (timer) {
      clearTimeout(timer)
    }
  }

  return (
    <div className="App">
      <Box sx={{ width: '400px', height: '100px', fontSize: '3.7rem' }}>{counter}</Box>`
      <ButtonGroup variant='outlined' size='large'>
        <Button variant='contained' color='success' onClick={start}>Start</Button>
        <Button variant='contained' color='error' onClick={stop}>Stop</Button>
        <Button variant='contained' color='warning'>Reset</Button>
      </ButtonGroup>
    </div>
  )
}

export default App

