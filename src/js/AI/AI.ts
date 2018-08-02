
enum WEIGHT {
  WIN = Infinity,
  BLOCK = Number.MAX_VALUE,
  FORK = Number.MAX_VALUE / 2,
  BLOCK_FORK = Number.MIN_VALUE / 4,
  OTHERS = 1,
}

export default class AI {

  static surroundingMap = {
    0: [
      [1, 3, 4],
      [2, 5, 6, 7, 8],
    ],
    1: [
      [0, 3, 4, 5, 2],
      [6, 7, 8],
    ],
    2: [
      [1, 4, 5],
      [0, 3, 6, 7, 8],
    ],
    3: [
      [0, 1, 4, 6, 7],
      [2, 5, 8],
    ],
    4: [
      [0, 1, 2, 3, 5, 6, 7, 8],
      [],
    ],
    5: [
      [1, 2, 4, 7, 8],
      [0, 3, 6],
    ],
    6: [
      [3, 4, 7],
      [0, 1, 2, 5, 8],
    ],
    7: [
      [3, 4, 5, 6, 8],
      [0, 1, 2],
    ],
    8: [
      [4, 5, 7],
      [0, 1, 2, 3, 6],
    ],
  }
  static printBoard(board: number[]) {
    console.info(...board.slice(0, 3))
    console.info(...board.slice(3, 6))
    console.info(...board.slice(6, 9))
  }
  static equal(...args) {
    let val = args[0]
    for (let i of args) {
      if (i !== val) return false
    }
    return true
  }

  static getColRest(i): number[] {
    let col = i % 3
    return [col, col + 3, col + 6].filter(x => x !== i)
  }

  static getRowRest(i): number[] {
    let row = Math.floor(i / 3) * 3
    return [row, row + 1, row + 2].filter(x => x !== i)
  }

  static getDiagonalRest(i): number[] {
    switch (i) {
      case 0:
        return [4, 8]
      case 2:
        return [4, 6]
      case 6:
        return [4, 2]
      case 8:
        return [0, 4]
    }
    throw Error('')
  }

  static isWinMove(i, board, side): boolean {
    let rowRest = AI.getRowRest(i).map(idx => board[idx])
    if (AI.equal(side, ...rowRest)) {
      console.info('row win: ', side, ...rowRest)
      return true
    }
    let colRest = AI.getColRest(i).map(idx => board[idx])
    if (AI.equal(side, ...colRest)) {
      console.info('col win: ', side, ...colRest)
      return true
    }
    if (i === 4) { // diagonal
      return AI.equal(board[0], side, board[8]) || AI.equal(board[2], side, board[6])
    }

    if (i % 2 === 0 && AI.equal(side, ...AI.getDiagonalRest(i))) {
      return true
    }
    return false
  }

  static isBlockMove(i, board, side): boolean {
    let opp = side ? 0 : 1
    return this.isWinMove(i, board, opp)
  }

  static isForkMove(_i, _board): boolean {
    return false
  }

  static isBlockForkMove(_i, _board): boolean {
    return false
  }

  side

  constructor(side: 0 | 1) {
    this.side = side
  }

  evaluate(pos: number, board: number[]): number {
    let surroundings = AI.surroundingMap[pos]
    if (!surroundings) {
      throw Error('Illegal position')
    }

    if (AI.isWinMove(pos, board, this.side)) {
      console.info(`Position ${pos} is a win move`)
      AI.printBoard(board)
      return WEIGHT.WIN
    }

    if (AI.isBlockMove(pos, board, this.side)) {
      console.info(`Position ${pos} is a block move`)
      AI.printBoard(board)
      return WEIGHT.BLOCK
    }

    if (AI.isForkMove(pos, board)) {
      return WEIGHT.FORK
    }

    if (AI.isBlockForkMove(pos, board)) {
      return WEIGHT.BLOCK_FORK
    }

    // todo: how to evaluate other moves?
    let value = 1 // base
    let neighbors = surroundings[0]
    neighbors.forEach(n => {
      if (board[n] === -1 || board[n] === this.side) {
        value += WEIGHT.OTHERS * 2
      }
    })
    let secondLayerNeighbors = surroundings[1]
    secondLayerNeighbors.forEach(n => {
      if (board[n] === -1 || board[n] === this.side) {
        value += WEIGHT.OTHERS
      }
    })

    return value + Math.random() // add some randomness for equal weight move
  }
  nextMove(board: number[]) {
    let maxWeight = 0
    let nextMove = -1
    board.forEach((v, i) => {
      if (v === -1) {
        let weight = this.evaluate(i, board)
        if (maxWeight < weight) {
          maxWeight = weight
          nextMove = i
        }
      }
    })

    return nextMove
  }

}