import React from 'react'
import { Link } from 'react-router-dom'
import { styled, Paper, TextField, Button, Divider } from '@mui/material'

const LoginCardContainer = styled(Paper)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  width: "25vw",
  padding: "5vh",
  margin: "5vw",
  borderRadius: "10px",
  gap: "15px",
}));

const LoginCard = () => {

  return (
    <LoginCardContainer>  
      <TextField
        fullWidth
        label={"username or email "}
      />
      <TextField
        fullWidth
        label={"enter ur password "}
      />
      <Button component={Link} to={'/'} variant='contained'>Log in</Button>
      <Divider flexItem />
      <Button variant='contained' color="success">Create new account</Button>
    </LoginCardContainer>
  )

}

export default LoginCard