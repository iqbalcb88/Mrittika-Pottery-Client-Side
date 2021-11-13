import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Grid, Card, CardMedia, Container } from '@mui/material';
import banner1 from '../../../images/banner2.jpg';
import banner2 from '../../../images/banner4.jpg';
import banner3 from '../../../images/banner5.jpg';
import banner4 from '../../../images/banner6.jpg';
import banner5 from '../../../images/banner7.jpg';
import banner6 from '../../../images/banner9.jpg';
export default function Gallery(props) {
  const imagesArray = [
    { img1: banner1, img2: banner2, img3: banner3 },
    { img1: banner1, img2: banner4, img3: banner5 },
    { img1: banner3, img2: banner4, img3: banner6 },
    { img1: banner2, img2: banner1, img3: banner6 },
  ];
  return (
    <Container sx={{ overflow: 'hidden', textAlign: 'center', flexGrow: 1 }}>
      <Carousel interval='1500' sx={{ overflow: 'hidden' }}>
        {imagesArray.map((images, index) => (
          <Item images={images} key={index} />
        ))}
      </Carousel>
    </Container>
  );
}

function Item({ images }) {
  const { img1, img2, img3 } = images;

  return (
    <Grid
      container
      sx={{ overflow: 'hidden' }}
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 12, sm: 12, md: 12 }}
    >
      <Grid item xs={4} sm={4} md={4}>
        <Card>
          <CardMedia
            sx={{ minHeight: '200px' }}
            component='img'
            image={img1}
            alt=''
          />
        </Card>
      </Grid>
      <Grid item xs={4} sm={4} md={4}>
        <Card>
          <CardMedia
            sx={{ minHeight: '200px' }}
            component='img'
            image={img2}
            alt=''
          />
        </Card>
      </Grid>
      <Grid item xs={4} sm={4} md={4}>
        <Card>
          <CardMedia
            sx={{ minHeight: '200px' }}
            component='img'
            image={img3}
            alt=''
          />
        </Card>
      </Grid>
    </Grid>
  );
}
