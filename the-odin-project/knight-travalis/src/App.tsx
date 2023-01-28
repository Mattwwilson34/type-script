import './App.css'

function App() {
  const board = new Array(9).fill(new Array(9).fill(true))

  console.log(board)
  function buildBoard() {

  }

  buildBoard()

  return (
    <div className="App">
      {board.map(square => <div>Hi</div>)}
    </div>
  )
}

export default App
