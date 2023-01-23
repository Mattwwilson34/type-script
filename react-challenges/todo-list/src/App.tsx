import { ListItemButton, ListItemText, ListItemTextClasses, TextField } from '@mui/material'
import { ChangeEvent, KeyboardEvent, useState } from 'react'
import './App.css'

function App() {
  const [inputText, setInputText] = useState<string | null>(null);
  const [todos, setTodos] = useState<string[]>([])

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const value: string = event.target.value;
    setInputText(value);
  }

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      if (inputText) {
        const todoCopy: string[] = todos;
        setTodos([...todoCopy, inputText])
        setInputText('');
      }
    }
  }

  return (
    <div className="App">
      <TextField id="outlined-basic" label="Add a todo" variant="outlined" onChange={handleChange} onKeyPress={handleKeyPress} value={inputText} />
      {todos.map((todo) => {
        return (
          <ListItemButton component="a" href="#simple-list">
            <ListItemText primary={todo} />
          </ListItemButton>
        )
      })}

    </div>
  )
}

export default App
