import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import UserRating from '../Shared/UserRating/UserRating';
import { Grid } from '@mui/material';

const Review = ({ userReview }) => {
  const { name, userPhoto, rating, review, date } = userReview;
  console.log(review);

  return (
    <Grid item xs={4} sm={4} md={3}>
      <Card sx={{ maxWidth: 300, minHeight: 350 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
              {name.slice(0, 1).toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton aria-label='settings'>
              <MoreVertIcon />
            </IconButton>
          }
          title={name}
          subheader={new Date(date).toLocaleDateString()}
        />
        <CardMedia component='img' height='194' image={userPhoto} />
        <CardContent>
          <Typography variant='body2' color='text.secondary'>
            {review}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label='add to favorites'>
            <FavoriteIcon color='error' />
          </IconButton>
          <IconButton aria-label='share'>
            <ShareIcon color='primary' />
          </IconButton>
          <UserRating rating={rating} />
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Review;
