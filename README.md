# EnergiCore React App

This project is designed to collect data using EnergiCore

## How it works

The app connects to EnergiCore's mainnet and gathers info about the latest block.
It then lists the transactions that have taken place on it, as well as the miner's address, the total difficulty and makes a list of the transaction hashes.

It uses EnergiCore's package [@energi/web3-ext](https://www.npmjs.com/package/@energi/web3-ext)

Data is mapped to a Block model that the app passes to the view.

## Live Demo

A live demo is available at this address:

https://energicore-iij69q7cl-bmrejen.vercel.app/
