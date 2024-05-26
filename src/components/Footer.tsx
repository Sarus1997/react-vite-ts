import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const Footer: React.FC = () => {
  return (
    <Container>
      <Box>
        <footer>
          <Typography variant="body2" color="textSecondary">
            © 2024 [Your Name]. All rights reserved.
          </Typography>
        </footer>
      </Box>
    </Container>
  );
};

export default Footer;