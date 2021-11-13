import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const UserReview = () => {
  const [reviews, setReviews] = useState([]);
  console.log(reviews);

  useEffect(() => {
    fetch('https://vast-citadel-43169.herokuapp.com/reviews')
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <Box sx={{ flexGrow: 1, py: 5 }}>
      <Container sx={{ textAlign: 'center' }}>
        <Typography
          sx={{ color: 'info.main', py: 4 }}
          variant='h3'
          component='div'
        >
          UserReview
        </Typography>

        <Grid
          container
          spacing={{ xs: 1, md: 1 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {reviews.map((userReview, index) => (
            <Review userReview={userReview} key={userReview._id} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default UserReview;
