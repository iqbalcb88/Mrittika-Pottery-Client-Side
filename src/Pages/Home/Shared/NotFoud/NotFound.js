import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const NotFound = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        mt: 5,
      }}
    >
      <Typography variant='h1' component='div' gutterBottom>
        SORRY!!! ERROR CODE: 404
      </Typography>
      <Typography variant='h1' component='div' gutterBottom>
        PAGE NOT FOUND
      </Typography>
    </Box>
  );
};

export default NotFound;
