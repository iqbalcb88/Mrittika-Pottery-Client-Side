import React, { useState } from 'react';
import {
  Button,
  CircularProgress,
  Container,
  Grid,
  TextareaAutosize,
  TextField,
  Typography,
} from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const AddProducts = () => {
  const [productInfo, setProductInfo] = useState({});
  const { loading, products, setProducts } = useAuth();
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    // console.log(field, value);
    const newProductInfo = { ...productInfo };
    newProductInfo[field] = value;
    setProductInfo(newProductInfo);
  };
  const handleSaveToDb = (e) => {
    fetch('https://vast-citadel-43169.herokuapp.com/products', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(productInfo),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          setProducts([...products, productInfo]);
          alert('Product Added Successfully');
          setProductInfo({});
          for (let i = 1; i < 6; i++) {
            document.getElementById(`standard-basic${i}`).value = '';
          }
        }
      });

    e.preventDefault();
    console.log(productInfo);
  };
  return (
    <Container>
      <Grid
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        container
        spacing={2}
      >
        <Grid item xs={12}>
          <Typography variant='h5'>Add A Product</Typography>
          {loading ? (
            <CircularProgress />
          ) : (
            <form onSubmit={handleSaveToDb}>
              <TextField
                required
                sx={{ width: '75%', m: 1 }}
                id='standard-basic1'
                type='text'
                name='name'
                onBlur={handleOnBlur}
                label='Product Name'
                variant='standard'
              />
              <TextField
                required
                sx={{ width: '75%', m: 1 }}
                id='standard-basic2'
                type='text'
                name='url'
                onBlur={handleOnBlur}
                label='Image Url'
                variant='standard'
              />
              <TextField
                required
                sx={{ width: '75%', m: 1 }}
                id='standard-basic3'
                type='number'
                name='price'
                onBlur={handleOnBlur}
                label='Price'
                variant='standard'
              />
              <TextField
                required
                sx={{ width: '75%', m: 1 }}
                id='standard-basic4'
                type='number'
                name='key'
                onBlur={handleOnBlur}
                label='SKU-ID'
                variant='standard'
              />
              <TextareaAutosize
                required
                id='standard-basic5'
                onBlur={handleOnBlur}
                aria-label='minimum height'
                name='description'
                minRows={3}
                placeholder='Product Description'
                style={{ width: '75%', margin: '16px 8px 8px' }}
              />

              <Button
                variant='contained'
                type='submit'
                sx={{ width: '75%', m: 1 }}
              >
                Add Product
              </Button>
            </form>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default AddProducts;
