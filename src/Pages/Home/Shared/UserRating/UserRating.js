import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

const UserRating = ({ rating }) => {
  return (
    <Box>
      <Rating name='read-only' value={rating} readOnly />
    </Box>
  );
};

export default UserRating;
