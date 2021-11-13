import { Button, Grid, TextField, TextareaAutosize } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const AddReview = () => {
  const { user } = useAuth();
  console.log(user);
  const [reviewInfo, setReviewInfo] = useState({});
  const defaultPhotoUrl = 'https://i.ibb.co/1b5qS8f/zukerberg.jpg';
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    // console.log(field, value);
    const newReviewInfo = {
      ...reviewInfo,
      name: user.displayName,
      email: user.email,
      userPhoto: user?.photoURL ? user.photoURL : defaultPhotoUrl,
      date: new Date().toLocaleDateString(),
    };
    newReviewInfo[field] = value;
    setReviewInfo(newReviewInfo);
  };

  console.log(reviewInfo);
  const handleSaveToDb = (e) => {
    fetch('https://vast-citadel-43169.herokuapp.com/reviews', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(reviewInfo),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert('Thanks for your valuable opinion!!');
          setReviewInfo({});
          for (let i = 1; i < 4; i++) {
            document.getElementById(`standard-basic${i}`).value = '';
          }
        }
      });

    e.preventDefault();
  };
  return (
    <Grid container item xs={12} md={7}>
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
          required
          sx={{ width: '75%', m: 1 }}
          id='standard-basic2'
          type='number'
          name='rating'
          onBlur={handleOnBlur}
          label='Rating between  1 to 5'
          variant='standard'
        />
        <TextareaAutosize
          required
          id='standard-basic3'
          onBlur={handleOnBlur}
          aria-label='minimum height'
          name='review'
          minRows={3}
          placeholder='Write Your Review'
          style={{ width: '75%', margin: '16px 8px 8px' }}
        />

        <Button variant='contained' type='submit' sx={{ width: '75%', m: 1 }}>
          Review
        </Button>
      </form>
    </Grid>
  );
};

export default AddReview;
