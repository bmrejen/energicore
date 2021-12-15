export default class Block {
  constructor({
    difficulty,
    gasUsed,
    miner,
    hash,
    timestamp,
    number,
    totalDifficulty,
    transactions
  }) {
    Object.assign(this, { difficulty, gasUsed, miner, hash, timestamp, number, totalDifficulty })
    this.transactions = transactions || []
  }
}
