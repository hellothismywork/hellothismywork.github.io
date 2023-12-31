import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { ArrowForward } from '@mui/icons-material';
import Link from 'next/link';

const pages = ['About', 'Capabilities', 'Technologies', 'Case Studies', 'Cloud Architecture', 'Insights', 'Contact Us'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cabin:400,500,600,700&display=swap"/>
      <Container maxWidth="xl">
        <Toolbar disableGutters>          
          <Link href="/">
            <Box component='img' src="../images/sonicsoft-logo.png"></Box>
          </Link>

          <Box className='mobile-menu' sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              

              
                <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"><Link href="/about">About Us</Link></Typography>
                </MenuItem><MenuItem  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"><Link href="/capabilities">Capabilities</Link></Typography>
                </MenuItem>
                 <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"><Link href="/technologies">Technologies</Link></Typography>
                </MenuItem>{/* <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"><Link href="/casestudies">Case Studies</Link></Typography>
                </MenuItem> */}
                {/* <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"><Link href="/capabilities/cloud-architecture">Cloud Architecture</Link></Typography>
                </MenuItem> */}
               {/* <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"><Link href="/insights">Insights</Link></Typography>
                </MenuItem> */}
                <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"><Link href="/contactus">Contact Us</Link></Typography>
                </MenuItem>
              {/* ))} */}
            </Menu>
          </Box>
          
          <Box className='my-menu' sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent:'end' }}>           
            <Link href="/about">About Us</Link>
            <Link href="/capabilities">Capabilities</Link>
            <Link href="/technologies">Technologies</Link>
            {/* <Link href="/casestudies">Case Studies</Link> */}
          {/*  <Link href="/capabilities/cloud-architecture">Cloud Architecture</Link>*/}
           {/*  <Link href="/insights">Insights</Link>   */}         
            <Link href="/contactus">
              <Button className="icon-right-btn" variant="contained" endIcon={<ArrowForward />} color="inherit">Contact Us</Button>
              </Link>
          </Box>          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;