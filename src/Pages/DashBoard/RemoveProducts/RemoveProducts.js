import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import AdminProduct from '../AdminProduct/AdminProduct';

const RemoveProducts = () => {
  const { products, setProducts } = useAuth();
  const handleDeleteProduct = (productId) => {
    const proceed = window.confirm('Are you Sure,Wanna Delete');
    if (proceed) {
      fetch(`https://vast-citadel-43169.herokuapp.com/products/${productId}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.deletedCount > 0) {
            alert('Deleted Successfully');
            const remainingProducts = products.filter(
              (p) => p._id !== productId
            );
            setProducts(remainingProducts);
          }
        });
    }
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container sx={{ textAlign: 'center' }}>
        <Typography sx={{ color: 'info.main' }} variant='h3' component='div'>
          ALL PRODUCTS
        </Typography>

        <Grid
          container
          spacing={{ xs: 1, md: 1 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {products.map((product, index) => (
            <AdminProduct
              handleDeleteProduct={handleDeleteProduct}
              product={product}
              key={product._id}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default RemoveProducts;
