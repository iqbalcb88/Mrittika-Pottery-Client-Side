import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import banner from '../../../images/banner.png';
import pottery from '../../../images/pottery1.jpg';
import { Container, Typography } from '@mui/material';

const bg = {
  background: `url(${banner})`,
  backgroundColor: 'rgba(45,45,45, 0.9)',
  backgroundBlendMode: 'darken,luminosity',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  backgroundPosition: 'top',
  backgroundSize: 'cover',
  overflow: 'hidden',
};
const verticalCenter = {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  overflow: 'hidden',
};

const HomeBanner = () => {
  return (
    <Container style={bg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={{ xs: 4, md: 12 }} sx={{ py: 3 }}>
        <Grid style={verticalCenter} item xs={4} md={6}>
          <Box sx={{ margin: '15px 0  0 15px' }}>
            <img width='100%' src={pottery} alt='' />
          </Box>
        </Grid>
        <Grid
          item
          sx={{ ...verticalCenter, textAlign: 'left', color: 'white' }}
          xs={4}
          md={6}
        >
          <Box sx={{ px: 2, textAlign: 'center' }}>
            <Typography variant='h3'>
              WELCOME TO <br />
              <Typography variant='h3'>MRITTIKA POTTERY</Typography>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomeBanner;
