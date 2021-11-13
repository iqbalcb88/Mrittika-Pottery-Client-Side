import { EmailOutlined, Google, VpnKeyRounded } from '@mui/icons-material';
import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png';

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({});
  const { user, loginUser, loading, error, signInWithGoogle } = useAuth();

  const location = useLocation();
  const history = useHistory();

  // console.log(loginInfo);
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    // console.log(field, value);
    const newLoginInfo = { ...loginInfo };
    newLoginInfo[field] = value;
    setLoginInfo(newLoginInfo);
  };

  const handleLoginSubmit = (e) => {
    loginUser(loginInfo.email, loginInfo.password, location, history);
    e.preventDefault();
  };
  const handleGoogleLogin = (e) => {
    signInWithGoogle(location, history);
    e.preventDefault();
  };

  return (
    <Container>
      <Grid
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        container
        spacing={2}
      >
        <Grid item xs={12} md={6}>
          <Typography variant='h5'>Login</Typography>
          <form onSubmit={handleLoginSubmit}>
            <TextField
              sx={{ width: '75%', m: 1 }}
              id='standard-basic'
              type='email'
              name='email'
              onBlur={handleOnBlur}
              label='Email'
              variant='standard'
              InputProps={{
                endAdornment: (
                  <InputAdornment position='start'>
                    <EmailOutlined />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              sx={{ width: '75%', m: 1 }}
              id='standard-basic'
              label='Password'
              type='password'
              name='password'
              onBlur={handleOnBlur}
              variant='standard'
              InputProps={{
                endAdornment: (
                  <InputAdornment position='start'>
                    <VpnKeyRounded />
                  </InputAdornment>
                ),
              }}
            />

            <Button
              variant='contained'
              type='submit'
              sx={{ width: '75%', m: 1 }}
            >
              Login
            </Button>
          </form>
          <Box
            sx={{
              width: '75%',
              display: 'flex',
              // justifyContent: 'center',
              alignItems: 'center',
              justifyItems: 'center',
              m: 1,
            }}
          >
            {loading && <CircularProgress />}
            {user?.email && (
              <Alert severity='success'>Successfully LoggedIn User</Alert>
            )}
            {error && <Alert severity='error'>{error}</Alert>}
          </Box>
          <Button
            sx={{ width: '75%', m: 1 }}
            onClick={handleGoogleLogin}
            startIcon={<Google />}
            variant='contained'
          >
            Login With Google
          </Button>
          <NavLink style={{ textDecoration: 'none' }} to='/register'>
            <Button sx={{ width: '75%', m: 1 }}>
              New Here Please Register!!
            </Button>
          </NavLink>
        </Grid>
        <Grid item xs={12} md={6}>
          <img width='100%' src={login} alt='' />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
