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

const AdminProduct = ({ order, handleDeleteOrder, handleOrderStatus }) => {
  const { url, email, _id, status } = order;
  return (
    <Grid item xs={4} sm={8} md={3}>
      <Card
        sx={{
          padding: '10px 5px',
          boxShadow: 5,
          border: 0,
          minWidth: 100,
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
          <Typography gutterBottom variant='h7' component='div'>
            {email}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <Button
            startIcon={<RemoveCircle />}
            variant='contained'
            size='small'
            color='error'
            onClick={() => handleDeleteOrder(_id)}
          >
            Cancel Order
          </Button>
          <Button
            variant='contained'
            size='small'
            color='warning'
            onClick={() => handleOrderStatus(order)}
          >
            {status ? 'Confirmed' : 'Pending'}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default AdminProduct;
