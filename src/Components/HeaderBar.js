import React, { Fragment, useState } from 'react'
import { AppBar, IconButton, Toolbar, Typography, Box, Drawer, Divider, List, ListItem, ListItemButton } from '@mui/material'
import { GitHub, MenuOpen, Close } from '@mui/icons-material';
import { Link } from 'react-scroll';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import Logo from './Logo';
var Scroll = require('react-scroll');
var scroll = Scroll.animateScroll;

const HeaderBar = () => {
  const [nav, setNav] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('Home');

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  }
  window.addEventListener('scroll', changeBackground);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scollTop = () => {
    scroll.scrollToTop();
  }

  const clickClosEvent = (Text) => {
    setActiveNav(Text)
    handleDrawerToggle();
  }

  const ContactData = [
    { id: 1, Title: 'Call Us', value: '91 9511723509', Icon: <CallIcon style={{ cursor: 'pointer', color: '#ffffff', }} fontSize='small' />, FuncURL: () => window.open('tel: 9511723507') },
    { id: 2, Title: 'WhatsApp Us', value: '91 9511723509', Icon: <WhatsAppIcon style={{ cursor: 'pointer', color: '#ffffff', }} fontSize='small' />, FuncURL: () => window.open('https://wa.me/9511723507') },
    { id: 3, Title: 'Email Us', value: 'govindbiswas079@gmail.com', Icon: <MailOutlineOutlinedIcon style={{ cursor: 'pointer', color: '#ffffff', }} fontSize='small' />, FuncURL: () => window.open('mailto: govindbiswas079@gmail.com') },
  ]

  const drawer = (
    <Box onClick={handleDrawerToggle}>
      <Box onClick={() => scollTop()} sx={{ cursor: 'pointer', display: 'flex', justifyContent: 'center', mt: 1, mb: 1 }}>
        <Logo />
      </Box>
      <Divider />
      <List sx={{ mr: 5, mt: 3 }}>
        <Link onClick={() => clickClosEvent('Home')} activeClass='activeClass' to="Home" spy={true} smooth={true} offset={0} duration={500}>
          <ListItem disablePadding={true} sx={{ mt: .3, backgroundColor: activeNav === 'Home' ? 'rgb(145 94 255 /1)' : 'transparent', borderTopRightRadius: 50, borderBottomRightRadius: 50, borderLeftWidth: 2, borderLeftColor: 'rgb(145 94 255 /1)', borderLeftStyle: 'groove' }}>
            <ListItemButton>
              <Typography sx={{ color: activeNav === 'Home' ? '#FFFFFF' : '#252F40', fontSize: 18, fontFamily: 'Nunito', fontWeight: activeNav === 'Home' ? 700 : 500, }}>Home</Typography>
            </ListItemButton>
          </ListItem>
        </Link>
        <Link onClick={() => clickClosEvent('AboutUs')} activeClass='activeClass' to="AboutUs" spy={true} smooth={true} offset={0} duration={500}>
          <ListItem disablePadding sx={{ mt: .3, backgroundColor: activeNav === 'AboutUs' ? 'rgb(145 94 255 /1)' : 'transparent', borderTopRightRadius: 50, borderBottomRightRadius: 50, borderLeftWidth: 2, borderLeftColor: 'rgb(145 94 255 /1)', borderLeftStyle: 'groove' }}>
            <ListItemButton>
              <Typography sx={{ color: activeNav === 'AboutUs' ? '#FFFFFF' : '#252F40', fontSize: 18, fontFamily: 'Nunito', fontWeight: activeNav === 'Home' ? 700 : 500, }}>About</Typography>
            </ListItemButton>
          </ListItem>
        </Link>
        <Link onClick={() => clickClosEvent('Education')} activeClass='activeClass' to="Education" spy={true} smooth={true} offset={0} duration={500}>
          <ListItem disablePadding sx={{ mt: .3, backgroundColor: activeNav === 'Education' ? 'rgb(145 94 255 /1)' : 'transparent', borderTopRightRadius: 50, borderBottomRightRadius: 50, borderLeftWidth: 2, borderLeftColor: 'rgb(145 94 255 /1)', borderLeftStyle: 'groove' }}>
            <ListItemButton>
              <Typography sx={{ color: activeNav === 'Education' ? '#FFFFFF' : '#252F40', fontSize: 18, fontFamily: 'Nunito', fontWeight: activeNav === 'Home' ? 700 : 500, }}>Education</Typography>
            </ListItemButton>
          </ListItem>
        </Link>
        <Link onClick={() => clickClosEvent('Experience')} activeClass='activeClass' to="Experience" spy={true} smooth={true} offset={0} duration={500}>
          <ListItem disablePadding sx={{ mt: .3, backgroundColor: activeNav === 'Experience' ? 'rgb(145 94 255 /1)' : 'transparent', borderTopRightRadius: 50, borderBottomRightRadius: 50, borderLeftWidth: 2, borderLeftColor: 'rgb(145 94 255 /1)', borderLeftStyle: 'groove' }}>
            <ListItemButton>
              <Typography sx={{ color: activeNav === 'Experience' ? '#FFFFFF' : '#252F40', fontSize: 18, fontFamily: 'Nunito', fontWeight: activeNav === 'Home' ? 700 : 500, }}>Experience</Typography>
            </ListItemButton>
          </ListItem>
        </Link>
        <Link onClick={() => clickClosEvent('Development')} activeClass='activeClass' to="Development" spy={true} smooth={true} offset={0} duration={500}>
          <ListItem disablePadding sx={{ mt: .3, backgroundColor: activeNav === 'Development' ? 'rgb(145 94 255 /1)' : 'transparent', borderTopRightRadius: 50, borderBottomRightRadius: 50, borderLeftWidth: 2, borderLeftColor: 'rgb(145 94 255 /1)', borderLeftStyle: 'groove' }}>
            <ListItemButton>
              <Typography sx={{ color: activeNav === 'Development' ? '#FFFFFF' : '#252F40', fontSize: 18, fontFamily: 'Nunito', fontWeight: activeNav === 'Home' ? 700 : 500, }}>Skills</Typography>
            </ListItemButton>
          </ListItem>
        </Link>
        <Link onClick={() => clickClosEvent('ContactUs')} activeClass='activeClass' to="ContactUs" spy={true} smooth={true} offset={0} duration={500}>
          <ListItem disablePadding sx={{ mt: .3, backgroundColor: activeNav === 'ContactUs' ? 'rgb(145 94 255 /1)' : 'transparent', borderTopRightRadius: 50, borderBottomRightRadius: 50, borderLeftWidth: 2, borderLeftColor: 'rgb(145 94 255 /1)', borderLeftStyle: 'groove' }}>
            <ListItemButton>
              <Typography sx={{ color: activeNav === 'ContactUs' ? '#FFFFFF' : '#252F40', fontSize: 18, fontFamily: 'Nunito', fontWeight: activeNav === 'Home' ? 700 : 500, }}>Contact Us</Typography>
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </Box>
  );

  return (
    <Fragment>
      <AppBar elevation={0} sx={{ backgroundColor: nav ? 'rgb(245 249 255/1)' : 'transparent', boxShadow: nav ? '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )' : 'none', transition: '0.2s ease-in-out', zIndex: 999, height: 65 }}>
        <Toolbar>
          {/* <Typography
            onClick={() => scollTop()}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: 'block', color: '#252F40' }}
          >
            GB
          </Typography> */}
          <Box onClick={() => scollTop()} sx={{ cursor: 'pointer' }}>
            <Logo />
          </Box>
          <Box sx={{ flexGrow: 1, }} />
          <IconButton
            color="inherit"
            // onClick={handleDrawerToggle}
            onClick={() => window.open('https://github.com/prem-pb')}
            sx={{ mr: 1, borderWidth: .5, borderColor: nav ? '#252F40' : '#FFFFFF', borderStyle: 'solid', borderRadius: '10px', p: .3, transition: '0.2s ease-in-out', height: 33, width: 33 }}
          >
            <GitHub sx={{ fontSize: 24, color: nav ? '#252F40' : '#FFFFFF', transition: '0.2s ease-in-out', }} />
          </IconButton>

          <IconButton
            color="inherit"
            onClick={handleDrawerToggle}
            sx={{ borderWidth: .5, borderColor: nav ? '#252F40' : '#FFFFFF', borderStyle: 'solid', borderRadius: '10px', p: .3, transition: '0.2s ease-in-out', height: 33, width: 33 }}
          >
            {mobileOpen ?
              <Close sx={{ fontSize: 24, color: nav ? '#252F40' : '#FFFFFF', transition: '0.2s ease-in-out', }} />
              :
              <MenuOpen sx={{ fontSize: 24, color: nav ? '#252F40' : '#FFFFFF', transition: '0.2s ease-in-out', }} />
            }
          </IconButton>
        </Toolbar>
      </AppBar>


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
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240, backgroundColor: 'rgb(245 249 255/1)', borderTopLeftRadius: 5, borderBottomLeftRadius: 5, boxShadow: 12 },
        }}
      >
        {drawer}

        <Box sx={{ width: '100%', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', bottom: 10 }}>
          {ContactData?.map((value, index) => (
            <IconButton key={index} onClick={() => { value?.FuncURL() }} sx={{ backgroundColor: 'rgb(145 94 255 /1)', '&:hover': { borderRadius: '50%', transition: '0.2s ease-in-out', backgroundColor: 'rgb(145 94 255 /1)', }, transition: '0.2s ease-in-out', boxShadow: 3, margin: .3, width: 32, height: 32, borderRadius: 1 }}>
              {value?.Icon}
            </IconButton>
          ))}
        </Box>
      </Drawer>
    </Fragment>
  )
}

export default HeaderBar