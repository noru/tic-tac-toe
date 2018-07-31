
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

  side

  constructor(side: 0 | 1) {
    this.side = side
  }

  evaluate(pos: number, board: number[]): number {
    let surroundings = AI.surroundingMap[pos]
    if (!surroundings) {
      throw Error('Illegal position')
    }
    let value = 1 // base
    let neighbors = surroundings[0]
    neighbors.forEach(n => {
      if (board[n] === -1 || board[n] === this.side) {
        value++ // weight = 1
      }
    })
    let secondLayerNeighbors = surroundings[1]
    secondLayerNeighbors.forEach(n => {
      if (board[n] === -1 || board[n] === this.side) {
        value++ // weight = 1
      }
    })

    return value + Math.random()
  }
  nextMove(board: number[]) {
    // console.log(board)
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