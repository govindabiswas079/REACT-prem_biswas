import React, { Fragment, useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-scroll';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import GitHubIcon from '@mui/icons-material/GitHub';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Toolbar } from '@mui/material';

var Scroll = require('react-scroll');
var scroll = Scroll.animateScroll;


const drawerWidth = 240;
const NavBar = ({ mode, setMode, value }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [activeNav, setActiveNav] = useState('Home');
  const [nav, setNav] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  }
  window.addEventListener('scroll', changeBackground);


  const scollTop = () => {
    scroll.scrollToTop();
  }

  const clickClosEvent = (Text) => {
    setActiveNav(Text)
    handleDrawerToggle();
  }

  const drawer = (
    <Box onClick={handleDrawerToggle}>
      <Typography variant="h6" sx={{ my: 2, textAlign: 'center', color: mode ? '#FFFFFF' : '#252F40' }}>
        MUI
      </Typography>
      <Divider />
      <List sx={{ mr: 5, mt: 3 }}>
        <Link onClick={() => clickClosEvent('Home')} activeClass='activeClass' to="Home" spy={true} smooth={true} offset={0} duration={500}>
          <ListItem disablePadding={true} sx={{ mt: .3, backgroundColor: activeNav === 'Home' ? mode ? 'rgb(19, 47, 76)' : 'blue' : 'transparent', borderTopRightRadius: 50, borderBottomRightRadius: 50, borderLeftWidth: 2, borderLeftColor: 'blue', borderLeftStyle: 'groove' }}>
            <ListItemButton>
              <Typography sx={{ color: activeNav === 'Home' ? '#FFFFFF' : mode ? 'rgb(150 155 165/1)' : '#252F40', fontSize: 18, fontFamily: 'Nunito', fontWeight: activeNav === 'Home' ? 700 : 500, }}>Home</Typography>
            </ListItemButton>
          </ListItem>
        </Link>
        <Link onClick={() => clickClosEvent('About')} activeClass='activeClass' to="About" spy={true} smooth={true} offset={0} duration={500}>
          <ListItem disablePadding sx={{ mt: .3, backgroundColor: activeNav === 'About' ? mode ? 'rgb(19, 47, 76)' : 'blue' : 'transparent', borderTopRightRadius: 50, borderBottomRightRadius: 50, borderLeftWidth: 2, borderLeftColor: 'blue', borderLeftStyle: 'groove' }}>
            <ListItemButton>
              <Typography sx={{ color: activeNav === 'About' ? '#FFFFFF' : mode ? 'rgb(150 155 165/1)' : '#252F40', fontSize: 18, fontFamily: 'Nunito', fontWeight: activeNav === 'Home' ? 700 : 500, }}>About</Typography>
            </ListItemButton>
          </ListItem>
        </Link>
        {value?.Public_Experiance ?
          <Link onClick={() => clickClosEvent('WorkExperiance')} activeClass='activeClass' to="WorkExperiance" spy={true} smooth={true} offset={0} duration={500}>
            <ListItem disablePadding sx={{ mt: .3, backgroundColor: activeNav === 'WorkExperiance' ? mode ? 'rgb(19, 47, 76)' : 'blue' : 'transparent', borderTopRightRadius: 50, borderBottomRightRadius: 50, borderLeftWidth: 2, borderLeftColor: 'blue', borderLeftStyle: 'groove' }}>
              <ListItemButton>
                <Typography sx={{ color: activeNav === 'WorkExperiance' ? '#FFFFFF' : mode ? 'rgb(150 155 165/1)' : '#252F40', fontSize: 18, fontFamily: 'Nunito', fontWeight: activeNav === 'Home' ? 700 : 500, }}>Experiance</Typography>
              </ListItemButton>
            </ListItem>
          </Link> : null}
        {value?.Public_Skills ?
          <Link onClick={() => clickClosEvent('Skills')} activeClass='activeClass' to="Skills" spy={true} smooth={true} offset={0} duration={500}>
            <ListItem disablePadding sx={{ mt: .3, backgroundColor: activeNav === 'Skills' ? mode ? 'rgb(19, 47, 76)' : 'blue' : 'transparent', borderTopRightRadius: 50, borderBottomRightRadius: 50, borderLeftWidth: 2, borderLeftColor: 'blue', borderLeftStyle: 'groove' }}>
              <ListItemButton>
                <Typography sx={{ color: activeNav === 'Skills' ? '#FFFFFF' : mode ? 'rgb(150 155 165/1)' : '#252F40', fontSize: 18, fontFamily: 'Nunito', fontWeight: activeNav === 'Home' ? 700 : 500, }}>Skills</Typography>
              </ListItemButton>
            </ListItem>
          </Link> : null}
        {value?.Public_Portfolio ?
          <Link onClick={() => clickClosEvent('Work')} activeClass='activeClass' to="Work" spy={true} smooth={true} offset={0} duration={500}>
            <ListItem disablePadding sx={{ mt: .3, backgroundColor: activeNav === 'Work' ? mode ? 'rgb(19, 47, 76)' : 'blue' : 'transparent', borderTopRightRadius: 50, borderBottomRightRadius: 50, borderLeftWidth: 2, borderLeftColor: 'blue', borderLeftStyle: 'groove' }}>
              <ListItemButton>
                <Typography sx={{ color: activeNav === 'Work' ? '#FFFFFF' : mode ? 'rgb(150 155 165/1)' : '#252F40', fontSize: 18, fontFamily: 'Nunito', fontWeight: activeNav === 'Home' ? 700 : 500, }}>Portfolio</Typography>
              </ListItemButton>
            </ListItem>
          </Link> : null}
        {value?.Public_Technology ?
          <Link onClick={() => clickClosEvent('Thech')} activeClass='activeClass' to="Thech" spy={true} smooth={true} offset={0} duration={500}>
            <ListItem disablePadding sx={{ mt: .3, backgroundColor: activeNav === 'Thech' ? mode ? 'rgb(19, 47, 76)' : 'blue' : 'transparent', borderTopRightRadius: 50, borderBottomRightRadius: 50, borderLeftWidth: 2, borderLeftColor: 'blue', borderLeftStyle: 'groove' }}>
              <ListItemButton>
                <Typography sx={{ color: activeNav === 'Thech' ? '#FFFFFF' : mode ? 'rgb(150 155 165/1)' : '#252F40', fontSize: 18, fontFamily: 'Nunito', fontWeight: activeNav === 'Home' ? 700 : 500, }}>Technology</Typography>
              </ListItemButton>
            </ListItem>
          </Link> : null}
        {value?.Public_Contact ?
          <Link onClick={() => clickClosEvent('Contact')} activeClass='activeClass' to="Contact" spy={true} smooth={true} offset={0} duration={500}>
            <ListItem disablePadding sx={{ mt: .3, backgroundColor: activeNav === 'Contact' ? mode ? 'rgb(19, 47, 76)' : 'blue' : 'transparent', borderTopRightRadius: 50, borderBottomRightRadius: 50, borderLeftWidth: 2, borderLeftColor: 'blue', borderLeftStyle: 'groove' }}>
              <ListItemButton>
                <Typography sx={{ color: activeNav === 'Contact' ? '#FFFFFF' : mode ? 'rgb(150 155 165/1)' : '#252F40', fontSize: 18, fontFamily: 'Nunito', fontWeight: activeNav === 'Home' ? 700 : 500, }}>Contact Us</Typography>
              </ListItemButton>
            </ListItem>
          </Link> : null}
      </List>
    </Box>
  );

  const OnToggleMode = () => {
    setMode(!mode)
    localStorage.setItem('ThemeMode', !mode)
  }
  
  return (
    <Fragment>
      <Box sx={{ display: 'flex' }}>
        <AppBar color='inherit' elevation={0} sx={{ backgroundColor: nav ? mode ? 'rgb(10 25 41)' : 'rgb(245 249 255/1)' : 'transparent', boxShadow: nav ? mode ? 'inset 0px -1px 1px #132f4c' : '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )' : 'none', transition: '0.2s ease-in-out', zIndex: 999, }} component="nav">
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: 'block', color: mode ? '#FFFFFF' : '#252F40' }}
            >
              MUI
            </Typography>
            <Box sx={{ flexGrow: 1, }} />

            <IconButton
              onClick={() => OnToggleMode()}
              color="inherit"
              sx={{ mr: 1, borderWidth: .5, borderColor: mode ? '#132f4c' : '#e0e3e7', borderStyle: 'solid', borderRadius: '10px', p: .3, justifyContent: 'center', alignItems: 'center', display: 'flex', transition: '0.2s ease-in-out', height: 33, width: 33 }}
            >
              {mode ?
                <Brightness7Icon sx={{ fontSize: 24, color: mode ? '#FFFFFF' : '#252F40', transition: '0.2s ease-in-out', }} />
                :
                <Brightness4Icon sx={{ fontSize: 24, color: mode ? '#FFFFFF' : '#252F40', transition: '0.2s ease-in-out', }} />
              }
            </IconButton>
            {value?.Public_GitHub ?
              <IconButton
                color="inherit"
                sx={{ mr: 1, borderWidth: .5, borderColor: mode ? '#132f4c' : '#e0e3e7', borderStyle: 'solid', borderRadius: '10px', p: .3, justifyContent: 'center', alignItems: 'center', display: 'flex', transition: '0.2s ease-in-out', height: 33, width: 33 }}
              >
                <GitHubIcon sx={{ fontSize: 24, color: mode ? '#FFFFFF' : '#252F40', transition: '0.2s ease-in-out', }} />
              </IconButton> : null}
            <IconButton
              color="inherit"
              onClick={handleDrawerToggle}
              sx={{ borderWidth: .5, borderColor: mode ? '#132f4c' : '#e0e3e7', borderStyle: 'solid', borderRadius: '10px', p: .3, transition: '0.2s ease-in-out', height: 33, width: 33 }}
            >
              {mobileOpen ?
                <CloseIcon sx={{ fontSize: 24, color: mode ? '#FFFFFF' : '#252F40', transition: '0.2s ease-in-out', }} />
                :
                <MenuIcon sx={{ fontSize: 24, color: mode ? '#FFFFFF' : '#252F40', transition: '0.2s ease-in-out', }} />
              }
            </IconButton>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            disableRestoreFocus={true}
            disableScrollLock={false}
            anchor='right'
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              disableRestoreFocus: true,
              keepMounted: true
            }}
            sx={{
              display: 'block',
              backdropFilter: 'blur(2px)',
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: mode ? 'rgb(10, 25, 41)' : 'rgb(245 249 255/1)', borderTopLeftRadius: 5, borderBottomLeftRadius: 5, boxShadow: 12 },
            }}
          >
            {drawer}
            <Box sx={{ transition: '0.2s ease-in-out', alignItems: 'center', justifyContent: 'center', width: '100%', position: 'absolute', bottom: 0, mb: 1, display: { xs: 'block', sm: 'none', md: 'none' } }}>
              <Divider />
              <Box sx={{ mt: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', transition: '0.2s ease-in-out', }}>
                <IconButton
                  onClick={() => OnToggleMode()}
                  sx={{ mr: 2, borderWidth: .5, borderColor: mode ? '#132f4c' : '#e0e3e7', borderStyle: 'solid', borderRadius: '10px', p: .3, justifyContent: 'center', alignItems: 'center', display: 'flex', transition: '0.2s ease-in-out', height: 33, width: 33 }}
                >
                  {mode ?
                    <Brightness7Icon sx={{ fontSize: 24, color: mode ? '#FFFFFF' : '#252F40', transition: '0.2s ease-in-out', }} />
                    :
                    <Brightness4Icon sx={{ fontSize: 24, color: mode ? '#FFFFFF' : '#252F40', transition: '0.2s ease-in-out', }} />
                  }
                </IconButton>
                {value?.Public_GitHub ?
                  <IconButton
                    sx={{ borderWidth: .5, borderColor: mode ? '#132f4c' : '#e0e3e7', borderStyle: 'solid', borderRadius: '10px', p: .3, justifyContent: 'center', alignItems: 'center', display: 'flex', transition: '0.2s ease-in-out', height: 33, width: 33 }}
                  >
                    <GitHubIcon sx={{ fontSize: 24, color: mode ? '#FFFFFF' : '#252F40', transition: '0.2s ease-in-out', }} />
                  </IconButton> : null}
              </Box>
            </Box>
          </Drawer>
        </Box>
      </Box>
      {mobileOpen ?
        <Box sx={{ transition: '0.2s ease-in-out', boxShadow: 12, position: 'fixed', top: 0, m: 1, zIndex: 999999, borderRadius: 1, backgroundColor: mode ? 'rgb(10, 25, 41)' : 'rgb(245 249 255/1)', display: { xs: 'none', sm: 'block', md: 'block' } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', p: .7, transition: '0.2s ease-in-out', }}>
            <IconButton
              onClick={handleDrawerToggle}
              sx={{ borderWidth: .5, borderColor: mode ? '#132f4c' : '#e0e3e7', borderStyle: 'solid', borderRadius: '10px', p: .3, transition: '0.2s ease-in-out', height: 30, width: 30 }}
            >
              {mobileOpen ?
                <CloseIcon sx={{ fontSize: 24, color: mode ? '#FFFFFF' : '#252F40', transition: '0.2s ease-in-out', }} />
                :
                <MenuIcon sx={{ fontSize: 24, color: mode ? '#FFFFFF' : '#252F40', transition: '0.2s ease-in-out', }} />
              }
            </IconButton>

            {value?.Public_GitHub ?
              <IconButton
                sx={{ ml: 1, borderWidth: .5, borderColor: mode ? '#132f4c' : '#e0e3e7', borderStyle: 'solid', borderRadius: '10px', p: .3, justifyContent: 'center', alignItems: 'center', display: 'flex', transition: '0.2s ease-in-out', height: 30, width: 30 }}
              >
                <GitHubIcon sx={{ fontSize: 24, color: mode ? '#FFFFFF' : '#252F40', transition: '0.2s ease-in-out', }} />
              </IconButton> : null}

            <IconButton
              onClick={() => OnToggleMode()}
              sx={{ ml: 1, borderWidth: .5, borderColor: mode ? '#132f4c' : '#e0e3e7', borderStyle: 'solid', borderRadius: '10px', p: .3, justifyContent: 'center', alignItems: 'center', display: 'flex', transition: '0.2s ease-in-out', height: 30, width: 30 }}
            >
              {mode ?
                <Brightness7Icon sx={{ fontSize: 24, color: mode ? '#FFFFFF' : '#252F40', transition: '0.2s ease-in-out', }} />
                :
                <Brightness4Icon sx={{ fontSize: 24, color: mode ? '#FFFFFF' : '#252F40', transition: '0.2s ease-in-out', }} />
              }
            </IconButton>
          </Box>
        </Box>
        : null}

      {mobileOpen ?
        <Box sx={{ transition: '0.2s ease-in-out', boxShadow: 12, position: 'fixed', top: 0, m: 1, zIndex: 999999, borderRadius: 2, backgroundColor: mode ? 'rgb(10, 25, 41)' : 'rgb(245 249 255/1)', display: { xs: 'block', sm: 'none', md: 'none' } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', transition: '0.2s ease-in-out', }}>
            <IconButton
              onClick={handleDrawerToggle}
              sx={{ borderWidth: .5, borderColor: mode ? '#132f4c' : '#e0e3e7', borderStyle: 'solid', borderRadius: '10px', transition: '0.2s ease-in-out', height: 30, width: 30 }}
            >
              {mobileOpen ?
                <CloseIcon sx={{ fontSize: 24, color: mode ? '#FFFFFF' : '#252F40', transition: '0.2s ease-in-out', }} />
                :
                <MenuIcon sx={{ fontSize: 24, color: mode ? '#FFFFFF' : '#252F40', transition: '0.2s ease-in-out', }} />
              }
            </IconButton>
          </Box>
        </Box>
        : null}


      <IconButton sx={{
        width: '40px',
        height: '40px',
        position: 'fixed',
        bottom: 15,
        boxShadow: 6,
        left: 5,
        transition: '0.2s ease-in -out',
        cursor: 'pointer',
        display: nav ? 'block' : 'none',
        zIndex: '999',
        backgroundColor: mode ? 'rgb(38, 93, 151)' : 'rgb(194, 224, 255)',
        alignItems: 'center',
        justifyContent: 'center',
        '&:hover': { backgroundColor: mode ? 'rgb(38, 93, 151)' : 'rgb(194, 224, 255)', }
      }} onClick={scollTop}>
        <ArrowUpwardIcon sx={{ color: mode ? 'rgb(153, 204, 243)' : 'rgb(0, 76, 153)' }} />
      </IconButton>
      {value?.Public_Calls ?
        <IconButton href={'tel: 9511723507'} sx={{
          width: '40px',
          height: '40px',
          position: 'fixed',
          bottom: 60,
          right: 15,
          boxShadow: 6,
          transition: '0.2s ease-in -out',
          cursor: 'pointer',
          display: nav ? 'block' : 'none',
          zIndex: '999',
          backgroundColor: '#1c8db7',
          alignItems: 'center',
          justifyContent: 'center',
          '&:hover': { backgroundColor: '#1c8db7', }
        }} onClick={scollTop}>
          <CallOutlinedIcon sx={{ color: '#ffffff', }} />
        </IconButton> : null}
      {value?.WhatsApp_Message ?
        <IconButton href={'https://wa.me/9511723507'} sx={{
          width: '40px',
          height: '40px',
          position: 'fixed',
          bottom: 15,
          right: 15,
          boxShadow: 6,
          transition: '0.2s ease-in -out',
          cursor: 'pointer',
          display: nav ? 'block' : 'none',
          zIndex: '999',
          backgroundColor: '#1ad03f',
          alignItems: 'center',
          justifyContent: 'center',
          '&:hover': { backgroundColor: '#1ad03f', }
        }} onClick={scollTop}>
          <WhatsAppIcon sx={{ color: '#ffffff', }} />
        </IconButton> : null}
    </Fragment >
  )
}

export default NavBar;