import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';

const Navigation = () => {
  const theme = useTheme();
  const { user, logout } = useAuth();
  const useStyles = makeStyles({
    navItem: {
      color: '#fff',
      textDecoration: 'none',
    },
    navIcon: {
      [theme.breakpoints.up('sm')]: {
        display: 'none !important',
      },
    },
    navItemContainer: {
      [theme.breakpoints.down('sm')]: {
        display: 'none !important',
      },
    },
    navLogo: {
      [theme.breakpoints.down('sm')]: {
        textAlign: 'right',
      },
    },
    listItem: {
      color: '#f00',
      textDecoration: 'none',
    },
  });

  const { navItem, navIcon, navItemContainer, navLogo, listItem } = useStyles();

  // drawer
  const [state, setState] = React.useState(false);

  /* const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  }; */
  const list = (
    <Box
      sx={{ width: 250 }}
      role='presentation'
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button>
          <Link className={listItem} to='/home'>
            Home
          </Link>
        </ListItem>
        <Divider />
        <ListItem button>
          <Link className={listItem} to='/allProducts'>
            AllProducts
          </Link>
        </ListItem>
        <Divider />
        <ListItem button>
          <Link className={listItem} to='/dashBoard'>
            DashBoard
          </Link>
        </ListItem>{' '}
        <Divider />
        <ListItem>
          {user?.email ? (
            <Box>
              <Link className={listItem} to='/'>
                Hello! {user.displayName}
              </Link>

              <Link className={listItem} to='/'>
                <Button variant='contained' onClick={logout} color='error'>
                  LogOut
                </Button>
              </Link>
            </Box>
          ) : (
            <Link className={listItem} to='/login'>
              <Button color='inherit'>Login</Button>
            </Link>
          )}
        </ListItem>{' '}
        <Divider />
      </List>
    </Box>
  );
  return (
    <>
      <Box>
        <AppBar position='static'>
          <Toolbar>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{ mr: 2 }}
              className={navIcon}
              onClick={() => setState(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              className={navLogo}
              variant='h6'
              component='div'
              sx={{ flexGrow: 1 }}
            >
              MRITTIKA
            </Typography>
            <Box className={navItemContainer}>
              <Link className={navItem} to='/home'>
                <Button color='inherit'>Home</Button>
              </Link>
              <Link className={navItem} to='/allProducts'>
                <Button color='inherit'>AllProducts</Button>
              </Link>
              <Link className={navItem} to='/dashBoard'>
                <Button color='inherit'>DashBoard</Button>
              </Link>
              {user?.email ? (
                <>
                  <Link className={navItem} to='/'>
                    <Button color='inherit'>Hello! {user.displayName}</Button>
                  </Link>

                  <Link className={navItem} to='/'>
                    <Button onClick={logout} color='inherit'>
                      LogOut
                    </Button>
                  </Link>
                </>
              ) : (
                <Link className={navItem} to='/login'>
                  <Button color='inherit'>Login</Button>
                </Link>
              )}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <div>
        <React.Fragment>
          <Drawer open={state} onClose={() => setState(false)}>
            {list}
          </Drawer>
        </React.Fragment>
      </div>
    </>
  );
};

export default Navigation;
