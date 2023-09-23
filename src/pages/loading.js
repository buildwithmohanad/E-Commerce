import React from 'react'
import {CircularProgress} from "@mui/material"
export default function Loading({height="auto"}) {
  console.log("loading")
  return (
    <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "2rem",
      
      height
    }}
    color='primary'
    data-testid="circularLoading"
  >
    <CircularProgress  />
  </div>
  )
}

