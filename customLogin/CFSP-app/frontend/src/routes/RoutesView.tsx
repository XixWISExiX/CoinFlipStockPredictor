import React from "react"
import { Route, Routes } from "react-router-dom"
import routes from "./routes"

// create routes in compact way.
// ez map function
const RoutesView = () => {
  return (
    <Routes>
      {
        routes.map((route) => (
          <Route key={route.path} {...route} />
        ))
      }
    </Routes>
  )
}

export default RoutesView