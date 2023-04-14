import React from 'react'
import {CircularProgress} from "@mui/material"
function Loading({height="auto"}) {
  return (
    <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height
    }}
    color='primary'
    data-testid="circularLoading"
  >
    <CircularProgress  />
  </div>
  )
}

export default Loading