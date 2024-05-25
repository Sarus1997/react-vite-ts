import React, { useState } from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch('/database/data.json');
      const users = await response.json();
      const user = users.find((u: { email: string; password: string }) => u.email === email && u.password === password);

      if (user) {
        setError('');
        // Successful login logic here (e.g., redirect, set user context)
        console.log('Login successful!');
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      setError('เกิดข้อผิดพลาดขณะพยายามเข้าสู่ระบบ');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Login Page
        </Typography>
        <form onSubmit={handleLogin}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && (
            <Typography color="error" variant="body2">
              {error}
            </Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
        </form>
        <Link to="/register">หากยังไม่มีบัญชี ไปยังหน้าลงทะเบียน</Link>
        <br />
        <Link to="/">ย้อนกลับ</Link>
      </Box>
    </Container>
  );
};

export default Login;
