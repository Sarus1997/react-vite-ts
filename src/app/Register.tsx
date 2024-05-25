import React from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import { Link } from "react-router-dom";

const Register: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Register Page
      </Typography>
      <form>
        <TextField
          label="Username"
          variant="outlined"
          margin="normal"
          fullWidth
          required
        />
        <TextField
          label="Email"
          variant="outlined"
          margin="normal"
          fullWidth
          required
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          fullWidth
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
        >
          Register
        </Button>
        <Link to="/login">ย้อนกลับ</Link>
      </form>
    </Container>
  );
};

export default Register;
