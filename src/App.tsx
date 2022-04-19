import React from 'react'
import Button, { ButtonSize, ButtonType } from './components/Button/button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button>按钮</Button>
        <Button
          size={ButtonSize.Large}
          btnType={ButtonType.Danger}
        >
          按钮大
        </Button>
        <Button
          btnType={ButtonType.Primary}
          disabled
        >
          链接
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
