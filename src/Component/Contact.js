import React, { Fragment } from 'react'
import { Box, IconButton, Container, Grid, Typography } from '@mui/material'
import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import Twitter from '@mui/icons-material/Twitter';
import LinkedIn from '@mui/icons-material/LinkedIn';
import GitHub from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ConatctForm from './ConatctForm';

const Contact = (props, { mode, }) => {

  const mapURL = 'https://www.google.co.in/maps/@19.938151,79.890903,40m/data=!3m1!1e3?hl=en';
  const onMapOpen = () => {
    window.open(mapURL)
  };

  return (
    <Box id={'Contact'} sx={{ marginTop: 10, marginBottom: 5 }}>
      <Container maxWidth='md'>
        <Box sx={{ marginBottom: 5 }}>
          <Grid container justifyContent={'center'} rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
            {props?.value?.Public_Calls ?
              <Grid item xs={12} sm={6} md={6}>
                <Box sx={{ transition: '0.3s ease-in-out', width: '100%', backgroundColor: mode ? '#132f4c' : '#FFFFFF', boxShadow: mode ? 12 : '0 4px 44px rgb(17 29 48 / 10%)', borderRadius: 1, '&:hover': { boxShadow: mode ? 12 : '0 4px 44px rgb(17 29 48 / 25%)', transition: '0.3s ease-in-out', backgroundColor: mode ? '#132f4c' : '#FFFFFF' } }}>
                  <Box sx={{ padding: 1.5, }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <Typography sx={{ color: mode ? 'rgb(163 179 188/1)' : 'rgb(91 100 120/1)', fontFamily: 'Nunito', fontSize: 15, fontWeight: 500 }}>Phone</Typography>
                      <Box sx={{ flexGrow: 1 }} />
                      <IconButton href={'tel: 9511723507'} sx={{ boxShadow: 3, transition: '0.3s ease-in-out', '&:hover': { transition: '0.3s ease-in-out', boxShadow: 0, backgroundColor: '#1976d2', color: '#ffffff' } }}>
                        <CallOutlinedIcon fontSize='small' sx={{ color: mode ? 'rgb(163 179 188/1)' : 'rgb(91 100 120/1)' }} />
                      </IconButton>
                      <IconButton href={'https://wa.me/9511723507'} sx={{ ml: .5, boxShadow: 3, transition: '0.3s ease-in-out', '&:hover': { transition: '0.3s ease-in-out', boxShadow: 0, backgroundColor: '#1ad03f', color: '#ffffff' } }}>
                        <WhatsAppIcon fontSize='small' sx={{ color: mode ? 'rgb(163 179 188/1)' : 'rgb(91 100 120/1)' }} />
                      </IconButton>
                    </Box>
                    <Typography sx={{ color: mode ? 'rgb(208 223 255/1)' : '#252F40', fontFamily: 'Open Sans', fontSize: 15, fontWeight: 700 }}>+91 9511723507</Typography>
                  </Box>
                </Box>
              </Grid> : null}
            {props?.value?.Public_Email ?
              <Grid item xs={12} sm={6} md={6} >
                <Box sx={{ width: '100%', backgroundColor: mode ? '#132f4c' : '#FFFFFF', boxShadow: mode ? 12 : '0 4px 44px rgb(17 29 48 / 10%)', borderRadius: 1, transition: '0.3s ease-in-out', '&:hover': { boxShadow: mode ? 12 : '0 4px 44px rgb(17 29 48 / 25%)', transition: '0.3s ease-in-out', backgroundColor: mode ? '#132f4c' : '#FFFFFF' } }}>
                  <Box sx={{ padding: 1.5, }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <Typography sx={{ color: mode ? 'rgb(163 179 188/1)' : 'rgb(91 100 120/1)', fontFamily: 'Nunito', fontSize: 15, fontWeight: 500 }}>Email</Typography>
                      <Box sx={{ flexGrow: 1 }} />
                      <IconButton href={'mailto: govindbiswas079@gmail.com?subject=Support&body=Description'} sx={{ boxShadow: 3, transition: '0.3s ease-in-out', '&:hover': { transition: '0.3s ease-in-out', boxShadow: 0, backgroundColor: '#f7560b', color: '#ffffff' } }}>
                        <MailOutlineIcon fontSize='small' sx={{ color: mode ? 'rgb(163 179 188/1)' : 'rgb(91 100 120/1)' }} />
                      </IconButton>
                    </Box>
                    <Typography sx={{ color: mode ? 'rgb(208 223 255/1)' : '#252F40', fontFamily: 'Open Sans', fontSize: 15, fontWeight: 700 }}>govindbiswas079@gmail</Typography>
                  </Box>
                </Box>
              </Grid> : null}
            <Grid item xs={12} sm={6} md={6}>
              <Box sx={{ width: '100%', backgroundColor: mode ? '#132f4c' : '#FFFFFF', boxShadow: mode ? 12 : '0 4px 44px rgb(17 29 48 / 10%)', borderRadius: 1, transition: '0.3s ease-in-out', '&:hover': { boxShadow: mode ? 12 : '0 4px 44px rgb(17 29 48 / 25%)', transition: '0.3s ease-in-out', backgroundColor: mode ? '#132f4c' : '#FFFFFF', } }}>
                <Box sx={{ padding: 1.5, }}>
                  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography sx={{ color: mode ? 'rgb(163 179 188/1)' : 'rgb(91 100 120/1)', fontFamily: 'Nunito', fontSize: 15, fontWeight: 500 }}>Address</Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <IconButton onClick={onMapOpen} sx={{ boxShadow: 3, transition: '0.3s ease-in-out', '&:hover': { transition: '0.3s ease-in-out', boxShadow: 0, backgroundColor: 'red', color: '#ffffff' } }}>
                      <LocationOnIcon fontSize='small' sx={{ color: mode ? 'rgb(163 179 188/1)' : 'rgb(91 100 120/1)' }} />
                    </IconButton>
                  </Box>
                  <Typography sx={{ color: mode ? 'rgb(208 223 255/1)' : '#252F40', fontFamily: 'Open Sans', fontSize: 15, fontWeight: 700 }}>Chandrapur, Maharashtra, India, 442401</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {props?.value?.Public_Message ?
          <Grid container justifyContent={'center'} rowSpacing={1} columnSpacing={{ xs: 0, sm: 2, md: 3 }}>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Box sx={{ width: '100%', backgroundColor: mode ? '#132f4c' : '#FFFFFF', height: 480, boxShadow: '0 4px 44px rgb(17 29 48 / 10%)', borderRadius: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', transition: '0.3s ease-in-out', '&:hover': { transition: '0.3s ease-in-out', boxShadow: '0 4px 44px rgb(17 29 48 / 5%)' } }}>
                <Box>
                  <img style={{ width: '100%' }} alt='' src='https://www.tenably.app/static/media/contact.7be15601.png' />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Box sx={{ width: '100%', backgroundColor: mode ? '#132f4c' : '#FFFFFF', height: 480, boxShadow: '0 4px 44px rgb(17 29 48 / 10%)', borderRadius: 2, display: 'flex', justifyContent: 'center', transition: '0.3s ease-in-out', '&:hover': { transition: '0.3s ease-in-out', boxShadow: '0 4px 44px rgb(17 29 48 / 5%)' } }}>
                <Box sx={{ padding: 3 }}>
                  <Typography sx={{ textAlign: 'center', fontFamily: 'Open Sans', fontWeight: 700, fontSize: 16, color: mode ? 'rgb(208 223 255/1)' : '#252F40' }}>App</Typography>
                  <ConatctForm mode={mode} />               
                  <Box sx={{ width: '100%', }}>
                    <Box sx={{ display: 'flex', paddingTop: 2, justifyContent: 'center' }}>
                      {props?.value?.Social_Button ?
                        <Fragment>
                          <IconButton sx={{ '&:hover': { boxShadow: 12, backgroundColor: '#38529a', }, backgroundColor: '#38529a', boxShadow: 3, margin: .3, width: 30, height: 30 }} onClick={() => window.open('https://www.facebook.com/govinda.biswas.980')}>
                            <Facebook style={{ cursor: 'pointer', color: '#ffffff', }} fontSize='small' />
                          </IconButton>
                          <IconButton sx={{ '&:hover': { boxShadow: 12, backgroundImage: 'linear-gradient(to right, #f7cb02 , #de1537, #7f3bb2)', }, backgroundImage: 'linear-gradient(to right, #f7cb02 , #de1537, #7f3bb2)', boxShadow: 3, margin: .3, width: 30, height: 30 }} onClick={() => window.open('https://www.instagram.com/prembiswas_07/')}>
                            <Instagram style={{ cursor: 'pointer', color: '#ffffff', }} fontSize='small' />
                          </IconButton>
                          <IconButton sx={{ '&:hover': { boxShadow: 12, backgroundColor: '#1bb1e4', }, backgroundColor: '#1bb1e4', boxShadow: 3, margin: .3, width: 30, height: 30 }} onClick={() => window.open('https://twitter.com/@Govinda_079')}>
                            <Twitter style={{ cursor: 'pointer', color: '#ffffff', }} fontSize='small' />
                          </IconButton>
                          <IconButton sx={{ '&:hover': { boxShadow: 12, backgroundColor: '#007ab5', }, backgroundColor: '#007ab5', boxShadow: 3, margin: .3, width: 30, height: 30 }} onClick={() => window.open('https://www.linkedin.com/in/govinda-biswas-82b94a1b7')}>
                            <LinkedIn style={{ cursor: 'pointer', color: '#ffffff', }} fontSize='small' />
                          </IconButton>
                        </Fragment> : null}
                      {props?.value?.Public_GitHub ?
                        <IconButton sx={{ '&:hover': { boxShadow: 12, backgroundColor: '#000000', }, backgroundColor: '#000000', boxShadow: 3, margin: .3, width: 30, height: 30 }} onClick={() => window.open('https://github.com/prem-pb')}>
                          <GitHub style={{ cursor: 'pointer', color: '#ffffff', }} fontSize='small' />
                        </IconButton> : null}
                    </Box>
                  </Box>
                </Box>
              </Box>

            </Grid>
          </Grid> : null}
      </Container>
    </Box>
  )
}

export default Contact