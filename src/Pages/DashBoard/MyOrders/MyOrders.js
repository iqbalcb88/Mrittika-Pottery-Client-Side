import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import MyOrder from '../MyOrder/MyOrder';

const MyOrders = () => {
  const { user } = useAuth();
  console.log(user.email);
  const [myOrders, setMyOrders] = useState([]);
  useEffect(() => {
    const url = `https://vast-citadel-43169.herokuapp.com/myOrders?email=${user.email}`;
    fetch(url, {
      headers: {
        'content-type': 'application/json',
      },
    })
      .then(async (res) => await res.json())
      .then((data) => setMyOrders(data));
  }, [user.email]);

  const handleCancelOrder = (id) => {
    const proceed = window.confirm('Are you Sure,Wanna Delete');
    if (proceed) {
      fetch(`https://vast-citadel-43169.herokuapp.com/orders/${id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert('Deleted Successfully');
            const remainingOrders = myOrders.filter((p) => p._id !== id);
            setMyOrders(remainingOrders);
          }
        });
    }
  };

  console.log(myOrders);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container sx={{ textAlign: 'center' }}>
        <Typography sx={{ color: 'info.main' }} variant='h3' component='div'>
          MyOrders
        </Typography>

        <Grid
          container
          spacing={{ xs: 1, md: 1 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {myOrders.map((product, index) => (
            <MyOrder
              handleCancelOrder={handleCancelOrder}
              product={product}
              key={product._id}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default MyOrders;
