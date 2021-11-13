import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import { Button } from '@mui/material';
import AddProducts from '../AddProducts/AddProducts';
import AddReview from '../AddReview/AddReview';
import RemoveProducts from '../RemoveProducts/RemoveProducts';
import MakePayment from '../MakePayment/MakePayment';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import useAuth from '../../../hooks/useAuth';
import ManageOrders from '../ManageOrders/ManageOrders';
import MyOrders from '../MyOrders/MyOrders';
import AdminRoute from '../../Login/Login/AdminRoute/AdminRoute';

const drawerWidth = 200;

function DashBoard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const { admin, logout } = useAuth();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar>
        <Button
          sx={{ width: '100%' }}
          onClick={logout}
          variant='contained'
          color='error'
        >
          LogOut
        </Button>
      </Toolbar>
      <Divider />

      {/* User Panel */}
      {/* ................. */}
      <Link style={{ textDecoration: 'none' }} to='/allProducts'>
        <Button variant='contained' sx={{ width: '100%' }} color='inherit'>
          Continue Shopping
        </Button>
      </Link>
      <Divider />
      <Link style={{ textDecoration: 'none' }} to={`${url}`}>
        <Button variant='contained' sx={{ width: '100%' }} color='inherit'>
          My Orders
        </Button>
      </Link>
      <Divider />
      <Link style={{ textDecoration: 'none' }} to={`${url}/addReview`}>
        <Button variant='contained' sx={{ width: '100%' }} color='inherit'>
          Add Review
        </Button>
      </Link>
      <Divider />
      <Link style={{ textDecoration: 'none' }} to={`${url}/makePayment`}>
        <Button variant='contained' sx={{ width: '100%' }} color='inherit'>
          Make Payment
        </Button>
      </Link>

      {/* ................. */}
      {/* Admin Panel */}
      {/* ................. */}
      {/* {admin && ( */}
      <Divider />
      {admin && (
        <Box>
          <Link style={{ textDecoration: 'none' }} to={`${url}/manageOrders`}>
            <Button variant='contained' sx={{ width: '100%' }} color='inherit'>
              Manage Orders
            </Button>
          </Link>
          <Divider />
          <Link style={{ textDecoration: 'none' }} to={`${url}/addProducts`}>
            <Button variant='contained' sx={{ width: '100%' }} color='inherit'>
              Add Products
            </Button>
          </Link>
          <Divider />
          <Link style={{ textDecoration: 'none' }} to={`${url}/removeProducts`}>
            <Button variant='contained' sx={{ width: '100%' }} color='inherit'>
              Remove Products
            </Button>
          </Link>
          <Divider />
          <Link style={{ textDecoration: 'none' }} to={`${url}/makeAdmin`}>
            <Button variant='contained' sx={{ width: '100%' }} color='inherit'>
              Make Admin
            </Button>
          </Link>
        </Box>
      )}
      {/* )} */}
      {/* ................. */}
      {/* <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position='fixed'
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap component='div'>
            Mrittika Pottery
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component='nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label='mailbox folders'
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant='permanent'
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Box>
          <Typography
            sx={{ color: 'green', fontWeight: 700, textAlign: 'center' }}
            variant='h3'
          >
            Welcome to Mrittika
          </Typography>
          <Divider />
          {/* <img width='100%' src={dbImg} alt='' /> */}
        </Box>
        {/* <Typography paragraph>content here</Typography> */}
        <Switch>
          <Route exact path={`${path}`}>
            <MyOrders />
          </Route>
          <Route path={`${path}/makePayment`}>
            <MakePayment />
          </Route>
          <AdminRoute path={`${path}/manageOrders`}>
            <ManageOrders />
          </AdminRoute>
          <AdminRoute path={`${path}/addProducts`}>
            <AddProducts />
          </AdminRoute>
          <AdminRoute path={`${path}/removeProducts`}>
            <RemoveProducts />
          </AdminRoute>
          <Route path={`${path}/addReview`}>
            <AddReview />
          </Route>
          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin />
          </AdminRoute>
        </Switch>
      </Box>
    </Box>
  );
}

DashBoard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DashBoard;
