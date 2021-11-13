import * as React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import ManageOrder from '../ManageOrder/ManageOrder';

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  const [status, setStatus] = useState(0);

  const handleDeleteOrder = (id) => {
    const proceed = window.confirm('Are you Sure,Wanna Delete');
    if (proceed) {
      fetch(`https://vast-citadel-43169.herokuapp.com/orders/${id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.deletedCount > 0) {
            alert('Deleted Successfully');
            const remainingProducts = orders.filter((p) => p._id !== id);
            setOrders(remainingProducts);
          }
        });
    }
  };

  const handleOrderStatus = (order) => {
    fetch('https://vast-citadel-43169.herokuapp.com/orders/orderId', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          let newStatus = data.modifiedCount;
          console.log(newStatus);
          alert('Confirmed Order Successfully');
          setStatus((newStatus += status));
        }
      });
  };

  useEffect(() => {
    fetch('https://vast-citadel-43169.herokuapp.com/orders')
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [status]);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container sx={{ textAlign: 'center' }}>
        <Typography sx={{ color: 'info.main' }} variant='h3' component='div'>
          Manage Orders
        </Typography>
        <Grid
          container
          spacing={{ xs: 1, md: 1 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {orders.map((order, index) => (
            <ManageOrder
              handleDeleteOrder={handleDeleteOrder}
              handleOrderStatus={handleOrderStatus}
              order={order}
              key={order._id}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ManageOrders;
