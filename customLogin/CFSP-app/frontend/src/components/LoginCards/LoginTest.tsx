import React, { useState } from 'react'
import { Link, Router, useNavigate} from 'react-router-dom'
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

const LoginTest = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

      const history = useNavigate();
    
      const redirect = () => {
        // Redirect to another page
        //history('/');
        //window.location.href = 'http://localhost:3000/';
        window.location.href = 'http://127.0.0.1:5173/'
        return null
      };
    
  
    const handleLogin = async () => {
      try {
        // Make API request to backend server for login
        const response = await Axios.post("http://localhost:5000/models/test", { username, password });

  
        // Handle successful login
        // You can store the authentication state, such as JWT or session information, in your frontend here
        console.log('Logged in successfully!', response.data);
        redirect();
  
        // Redirect to home page or do other actions upon successful login
      } catch (error) {
        // Handle login error
        let errorMessage = "Username/Password is incorrect";
        let httperror = "HTTP ERROR"
        if (error instanceof Error) {
          httperror = error.message
        }
        console.log(errorMessage + "\n" + httperror);
      }
    };
  return (
    <LoginCardContainer>  
      <TextField
        fullWidth
        label={"Enter Username"}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        fullWidth
        label={"Enter Password"}
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p>{error}</p>} {/* Display error message if there is an error */}
      <Button onClick={handleLogin} variant='contained'>Log in</Button>
      <Divider flexItem />
      <Button component={Link} to={'/signup'} variant='contained' color="success">Create new account</Button>
    </LoginCardContainer>
  )

}

export default LoginTest