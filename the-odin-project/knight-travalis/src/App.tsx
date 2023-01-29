import './App.css'

function App() {
  const board = new Array(9).fill(new Array(9).fill(true))

  return (
    <div className="App">
      {board.map((rows) => {
        return (
          <>{rows.map((cols) => {
            return <div>hello</div>
          })}</>
        )
      })}
    </div>
  )
}

export default App
