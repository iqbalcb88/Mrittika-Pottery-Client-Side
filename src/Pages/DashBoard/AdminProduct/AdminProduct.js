import { RemoveCircle } from '@mui/icons-material';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import React from 'react';

const AdminProduct = ({ product, handleDeleteProduct }) => {
  const { name, url, price, _id } = product;
  return (
    <Grid item xs={4} sm={8} md={3}>
      <Card
        sx={{
          padding: '10px 5px',
          boxShadow: 5,
          border: 0,
          minWidth: 275,
          textAlign: 'center',
        }}
      >
        <CardMedia
          component='img'
          style={{ width: '100%', margin: '0 auto' }}
          image={url}
          alt='green iguana'
        />
        <CardContent sx={{ textAlign: 'left' }}>
          <Typography gutterBottom variant='h6' component='div'>
            {name}
          </Typography>
          <Typography color='error' gutterBottom variant='h6' component='div'>
            Price: {price}TK
          </Typography>
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <Button
            startIcon={<RemoveCircle />}
            variant='contained'
            size='small'
            color='error'
            onClick={() => handleDeleteProduct(_id)}
          >
            Remove Product
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default AdminProduct;
