import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { styled, Paper, TextField, Button, Divider } from '@mui/material'
import Axios from 'axios'

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
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
  
    const handleLogin = async () => {
      try {
        // Make API request to backend server for login
        const response = await Axios.post('/login', { username, password });
  
        // Handle successful login
        // You can store the authentication state, such as JWT or session information, in your frontend here
        console.log('Logged in successfully!', response.data);
  
        // Redirect to home page or do other actions upon successful login
      } catch (error) {
        // Handle login error
        let errorMessage = "Failed to do something exceptional";
        if (error instanceof Error) {
          errorMessage = error.message;
        }
        console.log(errorMessage);
      }
    };
  return (
    <LoginCardContainer>  
      <TextField
        fullWidth
        label={"username or email bitch"}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        fullWidth
        label={"enter ur password bitch"}
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p>{error}</p>} {/* Display error message if there is an error */}
      <Button onCLick={handleLogin} variant='contained'>Log in</Button>
      <Divider flexItem />
      <Button component={Link} to={'/signup'} variant='contained' color="success">Create new account</Button>
    </LoginCardContainer>
  )

}

export default LoginCard