import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import useAuth from '../../hooks/useAuth';
import BestRatedProduct from '../Home/BestRatedProduct/BestRatedProduct';
import Navigation from '../Home/Shared/Navigation/Navigation';

const AllProducts = () => {
  const { products } = useAuth();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Navigation />
      <Container sx={{ textAlign: 'center' }}>
        <Typography sx={{ color: 'info.main' }} variant='h3' component='div'>
          EXPLORE PRODUCTS
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

export default AllProducts;
