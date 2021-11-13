import * as React from 'react';
import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router';
import {
  Container,
  Grid,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  CircularProgress,
} from '@mui/material';
import useAuth from '../../hooks/useAuth';
import Navigation from '../../Pages/Home/Shared/Navigation/Navigation';

const PlaceOrder = () => {
  let { productId } = useParams();
  const [product, setProduct] = useState({});
  const [productInfo, setProductInfo] = useState({});
  const { loading, user } = useAuth();
  console.log(productInfo);
  useEffect(() => {
    fetch(`https://vast-citadel-43169.herokuapp.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId]);

  // console.log(user);
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    // console.log(field, value);
    const newProductInfo = {
      ...productInfo,
      email: user.email,
      key: product.key,
      price: product.price,
      status: false,
      url: product.url,
      name: product.name,
      date: new Date().toLocaleDateString(),
    };
    newProductInfo[field] = value;
    setProductInfo(newProductInfo);
  };
  const handleSaveToDb = (e) => {
    fetch('https://vast-citadel-43169.herokuapp.com/orders', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(productInfo),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          setProductInfo({});
          alert('Order Placed Successfully');
          for (let i = 1; i < 5; i++) {
            document.getElementById(`standard-basic${i}`).value = '';
          }
        }
      });

    e.preventDefault();
    console.log(productInfo);
  };

  if (loading) {
    return <CircularProgress />;
  }
  return (
    <>
      <Navigation />
      <Container sx={{ py: 1 }}>
        <Grid
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          container
          spacing={{ xs: 2, md: 3 }}
        >
          <Grid item xs={12} md={5}>
            <Card
              sx={{
                boxShadow: 5,
                border: 0,
                minWidth: 275,
                textAlign: 'center',
              }}
            >
              <CardMedia
                component='img'
                style={{ width: '100%', margin: '0 auto' }}
                image={product.url}
                alt='green iguana'
              />
              <CardContent className='text-align'>
                <Typography gutterBottom variant='h5' component='div'>
                  {product.name}
                </Typography>
                <Typography gutterBottom variant='h5' component='div'>
                  Price: {product.price}TK
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Description: {product.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={7}>
            <form onSubmit={handleSaveToDb}>
              <TextField
                disabled
                sx={{ width: '75%', m: 1 }}
                id='standard-basic1'
                type='text'
                name='name'
                variant='standard'
                label={user.displayName}
              />
              <TextField
                disabled
                sx={{ width: '75%', m: 1 }}
                id='standard-basic2'
                type='text'
                name='url'
                label={user.email}
                variant='standard'
              />
              <TextField
                required
                sx={{ width: '75%', m: 1 }}
                id='standard-basic3'
                type='tel'
                name='phone'
                onBlur={handleOnBlur}
                label='Phone Number'
                variant='standard'
              />
              <TextField
                required
                sx={{ width: '75%', m: 1 }}
                id='standard-basic4'
                type='text'
                name='address'
                onBlur={handleOnBlur}
                label='Delivery Address'
                variant='standard'
              />
              <FormControl sx={{ width: '75%', m: 1 }} component='fieldset'>
                <FormLabel component='legend'>Payment System</FormLabel>
                <RadioGroup row name='payment'>
                  <FormControlLabel
                    value='PayPal'
                    control={<Radio />}
                    label='Paypal'
                    onBlur={handleOnBlur}
                  />
                  <FormControlLabel
                    value='Visa'
                    control={<Radio />}
                    label='Visa'
                    onBlur={handleOnBlur}
                  />
                  <FormControlLabel
                    value='BKash'
                    control={<Radio />}
                    label='BKash'
                    onBlur={handleOnBlur}
                  />
                  <FormControlLabel
                    value='COD'
                    control={<Radio />}
                    label='COD'
                    onBlur={handleOnBlur}
                  />
                </RadioGroup>
              </FormControl>
              <Button
                variant='contained'
                type='submit'
                sx={{ width: '75%', m: 1 }}
              >
                Place Order
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default PlaceOrder;
