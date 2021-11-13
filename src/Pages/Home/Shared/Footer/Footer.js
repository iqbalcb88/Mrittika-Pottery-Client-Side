import { Container, Divider, Grid, Link } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        sx={{
          backgroundColor: 'rgba(55, 157, 255, 0.85)',
          color: 'whitesmoke',
        }}
      >
        <Container maxWidth='lg'>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Help</Box>
              <Box>
                <Link sx={{ textDecoration: 'none' }} to='/' color='inherit'>
                  Support
                </Link>{' '}
                <Divider />
                <Link sx={{ textDecoration: 'none' }} to='/' color='inherit'>
                  Privacy Policy
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Account</Box>
              <Box>
                <Link sx={{ textDecoration: 'none' }} to='/' color='inherit'>
                  Login
                </Link>{' '}
                <Divider />
                <Link sx={{ textDecoration: 'none' }} to='/' color='inherit'>
                  Register
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Contact</Box>
              <Box>
                <Link sx={{ textDecoration: 'none' }} to='/' color='inherit'>
                  01995695139
                </Link>
                <Divider />
                <Link sx={{ textDecoration: 'none' }} to='/' color='inherit'>
                  Cumilla,Bangladesh
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box textAlign='center' pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            all right reserved by Mrittika Pottery &reg;{' '}
            {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
