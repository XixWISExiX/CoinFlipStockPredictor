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
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
        >
          <Stack>
            <Typography
              variant="h3"
              fontWeight="bold"
              mt={5}
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
          </Stack>
          <SignupTest />
        </Stack>
      </Stack>
    </>
  )
}

export default Signup