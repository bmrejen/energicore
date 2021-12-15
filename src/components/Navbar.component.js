import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import { Link } from "react-router-dom"
import logo from "./../assets/logo.svg"
import React from "react"
import Button from "@mui/material/Button"

export default function Navbar({ block }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <IconButton sx={{ mr: 2 }}>
            <img src={logo} height={25} width={25} alt="logo" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            EnergiCore
          </Typography>
          <Button to="*" component={Link} key={0} size="large" fullWidth={true}>
            Block {block.number}
          </Button>
          <Button to="*" component={Link} key={1} size="small" fullWidth={true}>
            Total Difficulty {block.totalDifficulty}
          </Button>
          <Button to="*" component={Link} key={2} size="small" fullWidth={true}>
            Miner {block.miner}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
