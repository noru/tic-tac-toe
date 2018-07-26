import React from 'react'
import FA from 'react-fontawesome'
import './index.scss'

const EMPTY_BOARD = [new Array(3).fill(-1), new Array(3).fill(-1), new Array(3).fill(-1)]
const X = () => <FA name="close" size="4x"/>
const O = () => <FA name="circle-o" size="4x"/>
const Cell = ({onClick, children}) => <div onClick={onClick} className="cell">{ children }</div>

export class Index extends React.Component<any, any> {

  static winCondition(...args) {
    let [a, b, c] = args
    return a !== -1 && a === b && b === c
  }

  state = {
    board: EMPTY_BOARD,
    round: 0,
    xWin: false,
    oWin: false,
  }

  initBoard() {
    this.setState({ board: JSON.parse(JSON.stringify(EMPTY_BOARD)) })
  }

  initRound() {
    this.setState({ round: 0, xWin: false, oWin: false })
  }

  mark(x: number, y: number) {
    let { board, round } = this.state
    if (board[x][y] === -1) {
      board[x][y] = round % 2
      this.setState({ board, round: round + 1 })
    } else {
      console.warn('Illegal play')
    }
  }

  evaluate() {
    let { board } = this.state
    for (let i = 0; i < 3; i++) {
      if (Index.winCondition(...board[i])) {
        return true
      }
      if (Index.winCondition(board[0][i], board[1][i], board[2][i])) {
        return true
      }
    }
    if (Index.winCondition(board[0][0], board[1][1], board[2][2])) {
      return true
    }
    if (Index.winCondition(board[0][2], board[1][1], board[2][0])) {
      return true
    }
    return false
  }

  play(x, y) {
    let { xWin, oWin } = this.state
    if (xWin || oWin) return
    this.mark(x, y)
    if (this.evaluate()) {
      let { round } = this.state
      if (round % 2) {
        this.setState({ xWin: true })
      } else {
        this.setState({ oWin: true })
      }
    }
  }

  init = () => {
    this.initBoard()
    this.initRound()
  }
  componentDidMount() {
    this.init()
  }
  render() {

    let { board, round, xWin, oWin } = this.state

    return (
      <div className="container">
        <div className="header">
          <div className={oWin ? 'win' : undefined}><O/></div>
          <div className="round">
            <div>Round</div>
            <div>{round}</div>
            <div><a onClick={this.init}>restart</a></div>
          </div>
          <div className={xWin ? 'win' : undefined}><X/></div>
        </div>
        <div className="board">
          <div className="row">
          {
            board[0].map((v, i) => <Cell key={'0' + i} onClick={() => this.play(0, i)}>
                { v === 0 && <O /> }
                { v === 1 && <X /> }
              </Cell>)
          }
          </div>
          <div className="row">
          {
            board[1].map((v, i) => <Cell key={'1' + i}  onClick={() => this.play(1, i)}>
                { v === 0 && <O /> }
                { v === 1 && <X /> }
              </Cell>)
          }
          </div>
          <div className="row">
          {
            board[2].map((v, i) => <Cell key={'2' + i} onClick={() => this.play(2, i)}>
                { v === 0 && <O /> }
                { v === 1 && <X /> }
              </Cell>)
          }
          </div>
        </div>
      </div>
    )
  }

}

export default Index