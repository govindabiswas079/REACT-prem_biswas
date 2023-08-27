import React, { Fragment } from 'react'
import { Box, IconButton, Typography } from '@mui/material'
import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import Twitter from '@mui/icons-material/Twitter';
import LinkedIn from '@mui/icons-material/LinkedIn';
import GitHub from '@mui/icons-material/GitHub';

const Footer = ({ mode, value }) => {
  return (
    <Box sx={{ width: '100%', height: '130px', backgroundColor: mode ? 'rgb(10 25 41)' : 'green', pb: 6 }}>
      <Box sx={{ display: 'flex', paddingTop: '30px', justifyContent: 'center', alignItems: 'center' }}>
        {value?.Social_Button ?
          <Fragment>
            <IconButton sx={{ '&:hover': { boxShadow: 12, backgroundColor: '#38529a', }, backgroundColor: '#38529a', boxShadow: 3, margin: .5 }} onClick={() => window.open('https://www.facebook.com/govinda.biswas.980')}>
              <Facebook style={{ cursor: 'pointer', color: '#ffffff', fontSize: '20px' }} />
            </IconButton>
            <IconButton sx={{ '&:hover': { boxShadow: 12, backgroundImage: 'linear-gradient(to right, #f7cb02 , #de1537, #7f3bb2)', }, backgroundImage: 'linear-gradient(to right, #f7cb02 , #de1537, #7f3bb2)', boxShadow: 3, margin: .5 }} onClick={() => window.open('https://www.instagram.com/prembiswas_07/')}>
              <Instagram style={{ cursor: 'pointer', color: '#ffffff', fontSize: '20px' }} />
            </IconButton>
            <IconButton sx={{ '&:hover': { boxShadow: 12, backgroundColor: '#1bb1e4', }, backgroundColor: '#1bb1e4', boxShadow: 3, margin: .5 }} onClick={() => window.open('https://twitter.com/@Govinda_079')}>
              <Twitter style={{ cursor: 'pointer', color: '#ffffff', fontSize: '20px' }} />
            </IconButton>
            <IconButton sx={{ '&:hover': { boxShadow: 12, backgroundColor: '#007ab5', }, backgroundColor: '#007ab5', boxShadow: 3, margin: .5 }} onClick={() => window.open('https://www.linkedin.com/in/govinda-biswas-82b94a1b7')}>
              <LinkedIn style={{ cursor: 'pointer', color: '#ffffff', fontSize: '20px' }} />
            </IconButton>
          </Fragment> : null}
        {value?.Public_GitHub ?
          <IconButton sx={{ '&:hover': { boxShadow: 12, backgroundColor: '#000000', }, backgroundColor: '#000000', boxShadow: 3, margin: .5 }} onClick={() => window.open('https://github.com/prem-pb')}>
            <GitHub style={{ cursor: 'pointer', color: '#ffffff', fontSize: '20px' }} />
          </IconButton> : null}
      </Box>
      <Box sx={{ display: 'flex', paddingTop: '30px', justifyContent: 'center', alignItems: 'center' }}>
        <Typography sx={{ color: mode ? 'rgb(208 223 255/1)' : '#000000', fontSize: 16, fontFamily: 'Nunito', fontWeight: 600 }}>App</Typography>
        <Typography sx={{ color: mode ? 'rgb(208 223 255/1)' : '#000000', fontSize: 16, fontFamily: 'Nunito', fontWeight: 600 }}>App@</Typography>
        <Typography sx={{ color: mode ? 'rgb(208 223 255/1)' : '#000000', fontSize: 16, fontFamily: 'Nunito', fontWeight: 600 }}>App</Typography>
        <Typography sx={{ color: mode ? 'rgb(208 223 255/1)' : '#000000', fontSize: 16, fontFamily: 'Nunito', fontWeight: 600 }}>App</Typography>
      </Box>
    </Box>
  )
}

export default Footer