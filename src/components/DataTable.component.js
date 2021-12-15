import { makeStyles } from "@material-ui/core/styles"
import { DataGrid } from "@mui/x-data-grid"
import { appear } from "../animations/animations"
import Box from "@mui/material/Box"

const rowsPerPage = 10

const useStyles = makeStyles((theme) => {
  const styles = {
    "@keyframes appear": appear,
    root: {
      "& .MuiDataGrid-columnHeaderWrapper": {
        background: theme.palette.primary.light
      },
      "& .MuiDataGrid-columnHeaderTitle": {
        margin: "auto",
        fontWeight: "600",
        textAlign: "center"
      },
      "& .MuiDataGrid-row": {
        animation: "$appear .2s cubic-bezier(0.18, 0.56, 0.36, 1.93) backwards"
      }
    }
  }

  for (let i = 1; i <= rowsPerPage; i++) {
    styles.root[`& .MuiDataGrid-row:nth-child(${i})`] = { "animation-delay": `${i * 0.1}s` }
  }
  return styles
})

export default function DataTable({ items }) {
  const classes = useStyles()
  if (!items || items.length === 0) {
    return (
      <Box component="span" sx={{ display: "grid", placeItems: "center", height: "80vh" }}>
        Loading...
      </Box>
    )
  }

  const rows = [...items].map((item, i) => ({ id: i, value: item }))
  const transaction = items.length > 1 ? "transactions" : "transaction"
  const columns = [
    { field: "value", headerName: `${items.length} ${transaction} on this block`, width: 1000 }
  ]

  return (
    <>
      <div style={{ height: 650, width: "100%" }}>
        <DataGrid
          className={classes.root}
          rows={rows}
          columns={columns}
          pageSize={rowsPerPage}
          rowsPerPageOptions={[rowsPerPage]}
          checkboxSelection
        />
      </div>
    </>
  )
}
