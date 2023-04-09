import React from 'react'
import {CircularProgress} from "@material-ui/core"
function Loading({height="auto"}) {
  return (
    <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height
    }}
  >
    <CircularProgress data-testid="circularLoading" />
  </div>
  )
}

export default Loading