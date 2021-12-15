import { _mapApiBlockToBlock } from "./apis/"
import { Block } from "./models"

export function getData(web3, setState) {
  return web3.eth
    .getBlockNumber()
    .then((block) => web3.eth.getBlock(block))
    .then((block) => _createInstance(block, setState))
    .catch(console.error)
}

function _createInstance(res, setState) {
  const block = new Block(_mapApiBlockToBlock(res))
  setState(block)
}
