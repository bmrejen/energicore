import React, { useEffect, useState } from "react"
import * as web3Extension from "@energi/web3-ext"
import Web3 from "web3"
import { TransactionList, Navbar } from "./components"
import { getData } from "./utils"
import CssBaseline from "@mui/material/CssBaseline"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const web3 = new Web3("https://nodeapi.energi.network")
web3Extension.extend(web3)

function App() {
  // blocks
  const [block, setBlock] = useState(null)
  useEffect(() => getData(web3, setBlock), [])

  if (block == null) return <div>Loading...</div>
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Navbar block={block} />
        <Routes>
          <Route path="/block" element={<TransactionList transactions={block.transactions} />} />
          <Route path="*" element={<div>404</div>} />
          <Route path="/" element={<TransactionList transactions={block.transactions} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
