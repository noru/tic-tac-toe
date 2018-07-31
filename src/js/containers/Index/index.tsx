import React from 'react'
import FA from 'react-fontawesome'
import './index.scss'

const EMPTY_BOARD = new Array(9).fill(-1)
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

  mark(x: number) {
    let { board, round } = this.state

    if (board[x] === -1) {
      board[x] = round % 2
      this.setState({ board, round: round + 1 })
    } else {
      throw Error('Illegal play')
    }
  }

  evaluate() {
    let { board } = this.state
    for (let i = 0; i < 3; i++) {
      let j = i * 3
      if (Index.winCondition(board[j], board[j + 1], board[j + 2])) {
        return true
      }
      if (Index.winCondition(board[i], board[i + 3], board[i + 6])) {
        return true
      }
    }
    if (Index.winCondition(board[0], board[4], board[8])) {
      return true
    }
    if (Index.winCondition(board[2], board[4], board[6])) {
      return true
    }
    return false
  }

  play(x) {
    let { xWin, oWin } = this.state
    if (xWin || oWin) return
    try {
      this.mark(x)
      if (this.evaluate()) {
        let { round } = this.state
        if (round % 2) {
          this.setState({ xWin: true })
        } else {
          this.setState({ oWin: true })
        }
      }
    } catch (error) {
      // do nothing
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
            board.map((v, i) => i % 3 === 0 ? <Cell key={i} onClick={() => this.play(i)}>
            { v === 0 && <O /> }
                { v === 1 && <X /> }
              </Cell> : null).filter(Boolean)
          }
          </div>
          <div className="row">
          {
            board.map((v, i) => i % 3 === 1 ? <Cell key={i} onClick={() => this.play(i)}>
                { v === 0 && <O /> }
                { v === 1 && <X /> }
              </Cell> : null).filter(Boolean)
          }
          </div>
          <div className="row">
          {
            board.map((v, i) => i % 3 === 2 ? <Cell key={i} onClick={() => this.play(i)}>
                { v === 0 && <O /> }
                { v === 1 && <X /> }
              </Cell> : null).filter(Boolean)
          }
          </div>
        </div>
      </div>
    )
  }

}

export default Index