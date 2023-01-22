import { useState } from 'react'
import { Button, Typography } from '@mui/material'
import './App.css'


function App() {
  const [display, setDisplay] = useState<boolean>(false)

  const handleClick = (): void => setDisplay((prevVal) => !prevVal)

  return (
    <div className="App">
      <Button variant='contained' onClick={handleClick}>Click me to show text</Button>
      {display && <Typography variant="h1" component="h2">
        My first react typescript problem set!
      </Typography>}
    </div>
  )
}

export default App
