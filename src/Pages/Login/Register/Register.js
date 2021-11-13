import {
  AccountCircleOutlined,
  EmailOutlined,
  VpnKeyRounded,
} from '@mui/icons-material';
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
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import register from '../../../images/register.jpg';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
  const { user, registerUser, loading, error } = useAuth();
  const [registerInfo, setRegisterInfo] = useState({});

  const history = useHistory();
  console.log(registerInfo);
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    // console.log(field, value);
    const newRegisterInfo = { ...registerInfo };
    newRegisterInfo[field] = value;
    setRegisterInfo(newRegisterInfo);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (registerInfo.password !== registerInfo.confirmPassword) {
      alert('Password did not matched');
      return;
    }
    registerUser(
      registerInfo.email,
      registerInfo.password,
      registerInfo.name,
      history
    );
  };
  return (
    <Container>
      <Grid
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        container
        spacing={2}
      >
        <Grid item xs={12} md={6}>
          <Typography variant='h5'>Register</Typography>
          {loading ? (
            <CircularProgress color='success' />
          ) : (
            <form onSubmit={handleRegisterSubmit}>
              <TextField
                required
                sx={{ width: '75%', m: 1 }}
                id='standard-basic'
                type='text'
                name='name'
                onBlur={handleOnBlur}
                label='Name'
                variant='standard'
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='start'>
                      <AccountCircleOutlined />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                required
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
                required
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
              <TextField
                required
                sx={{ width: '75%', m: 1 }}
                id='standard-basic'
                label='Retype Password'
                type='password'
                name='confirmPassword'
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
                Register
              </Button>
              <NavLink style={{ textDecoration: 'none' }} to='/login'>
                <Button sx={{ width: '75%', m: 1 }}>
                  Already have an account? Please Login!!
                </Button>
              </NavLink>
            </form>
          )}
          {user?.email && (
            <Alert severity='success'>Successfully Created User</Alert>
          )}
          {error && <Alert severity='error'>{error}</Alert>}
        </Grid>
        <Grid item xs={12} md={6}>
          <img width='100%' src={register} alt='' />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
