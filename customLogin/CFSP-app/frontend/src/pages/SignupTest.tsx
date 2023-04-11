import React from "react"
import { Stack, Typography } from "@mui/material"
import LoginTest from "../components/LoginCards/LoginTest"
import SignupTest from "../components/LoginCards/SignupTest"

const Signup = () => {

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
          <SignupTest />
        </Stack>
      </Stack>
    </>
  )
}

export default Signup