export default function _mapApiBlockToBlock({
  difficulty,
  gasUsed,
  hash,
  timestamp,
  number,
  totalDifficulty,
  miner,
  transactions
}) {
  return { difficulty, gasUsed, hash, timestamp, number, totalDifficulty, miner, transactions }
}
