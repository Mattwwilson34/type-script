import { Box, Button, ButtonGroup } from '@mui/material'
import { useState } from 'react'
import './App.css'

function App() {
  const [milliseconds, setMilliseconds] = useState<number>(0)
  const [intervalID, setIntervalID] = useState<number>(0)

  const start = (): void => {
    if (intervalID !== 0) return;

    const newIntervalID: number = setInterval(() => {
      setMilliseconds((prevCount) => prevCount += 100)
    }, 100)

    setIntervalID(newIntervalID)
  }

  const stop = (): void => {
    clearInterval(intervalID)
    setIntervalID(0)
  }

  const reset = (): void => setMilliseconds(0)

  return (
    <div className="App">
      <Box sx={{ width: '400px', height: '200px', fontSize: '3.7rem' }}>
        {Math.floor(milliseconds / 1000)}:{Math.floor((milliseconds / 100) % 10)}
      </Box>
      <ButtonGroup variant='outlined' size='large'>
        <Button variant='contained' color='success' onClick={start}>Start</Button>
        <Button variant='contained' color='error' onClick={stop}>Stop</Button>
        <Button variant='contained' color='warning' onClick={reset}>Reset</Button>
      </ButtonGroup>
    </div>
  )
}

export default App

