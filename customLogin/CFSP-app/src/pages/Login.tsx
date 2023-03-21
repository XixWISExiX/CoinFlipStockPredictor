import React from "react"
import { Stack, Typography } from "@mui/material"
import LoginCard from "../components/LoginCards/LoginCard"

const Login = () => {

  return (
    <>
      <Stack>
        <Stack
        minHeight="60%"
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        >
          <Stack>
            <Typography
              variant="h3"
              fontWeight="bold"
              sx={{
                width: "max-content",
                backgroundClip: "text",
                backgroundImage:
                  "linear-gradient(225deg, #F2A900 50%, #f7931a 70%)",
                WebkitTextFillColor: "transparent",
              }}
            >
              CFSP
            </Typography>
            <Typography
            sx={{
              fontSize: "1.5rem",
            }}
            >
              One of the best tools for beginner stock traders!
            </Typography>
          </Stack>
          <LoginCard />
        </Stack>
      </Stack>
    </>
  )
}

export default Login