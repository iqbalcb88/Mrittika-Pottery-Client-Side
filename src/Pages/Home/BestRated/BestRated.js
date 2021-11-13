import * as React from 'react';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';

import BestRatedProduct from '../BestRatedProduct/BestRatedProduct';

const BestRated = () => {
  const [products, setProducts] = useState([]);
  const limit = 6;
  useEffect(() => {
    fetch(
      `https://vast-citadel-43169.herokuapp.com/homeProducts?limit=${limit}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <Box sx={{ flexGrow: 1, py: 5 }}>
      <Container sx={{ textAlign: 'center' }}>
        <Typography
          sx={{ color: 'info.main', py: 4 }}
          variant='h3'
          component='div'
        >
          BEST RATED
        </Typography>

        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {products.map((product, index) => (
            <BestRatedProduct product={product} index={index} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default BestRated;
