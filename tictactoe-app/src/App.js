import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Board } from './components/board'
import { Scoreboard } from './components/scoreboard'

import './styles/variables.css'
import './styles/base.css'
import './styles/board.css'
import './styles/box.css'
import './styles/buttons.css'
import './styles/scoreboard.css'

class App extends React.Component {
  state = {
    playerOneName: 'x',
    playerTwoName: 'o'
  }

  handlePlayerNameChange = (stateKey, stateValue) => {
    this.setState({
      [stateKey]: stateValue
    })
  }

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Routes>
            {/* Use the `element` prop instead of `render` */}
            <Route path="/" element={<Scoreboard state={this.state} nameChangeHandler={this.handlePlayerNameChange} />} />
            <Route path="/board" element={<Board state={this.state} nameChangeHandler={this.handlePlayerNameChange} />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

// Use `createRoot` for React 18 and above
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

export default App