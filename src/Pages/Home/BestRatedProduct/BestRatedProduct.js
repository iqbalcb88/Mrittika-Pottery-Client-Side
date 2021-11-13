import * as React from 'react';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './BestRatedProduct.css';
import InfoIcon from '@mui/icons-material/Info';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';
const Service = ({ product }) => {
  const { name, description, url, price, _id } = product;
  // console.log(_id);
  return (
    <Grid item xs={4} sm={4} md={4}>
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
        <CardContent className='text-align'>
          <Typography gutterBottom variant='h5' component='div'>
            {name}
          </Typography>
          <Typography gutterBottom variant='h5' component='div'>
            Price: {price}TK
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Description: {description.slice(0, 60)}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <Link style={{ textDecoration: 'none' }} to={`/placeOrder/${_id}`}>
            <Button
              startIcon={<AddShoppingCartIcon />}
              variant='contained'
              size='small'
              color='secondary'
            >
              BuyNow
            </Button>
          </Link>
          <Button
            startIcon={<InfoIcon />}
            color='info'
            variant='contained'
            size='small'
          >
            Details
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Service;
