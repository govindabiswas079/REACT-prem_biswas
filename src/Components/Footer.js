import React, { Fragment } from 'react';
import { Box, IconButton } from '@mui/material'
import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import Twitter from '@mui/icons-material/Twitter';
import LinkedIn from '@mui/icons-material/LinkedIn';
import GitHub from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Footer = () => {

  return (
    <Fragment>
      <Box sx={{ width: '100%', height: 200, backgroundColor: '#050816', }}>

        <Box sx={{ width: '100%', pt: 2 }}>
          <Box sx={{ display: 'flex', paddingTop: 2, justifyContent: 'center' }}>
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
              <IconButton sx={{ '&:hover': { boxShadow: 12, backgroundColor: '#000000', }, backgroundColor: '#000000', boxShadow: 3, margin: .3, width: 30, height: 30 }} onClick={() => window.open('https://github.com/prem-pb')}>
                <GitHub style={{ cursor: 'pointer', color: '#ffffff', }} fontSize='small' />
              </IconButton>
            </Fragment>
          </Box>
        </Box>

      </Box>
    </Fragment>
  )
}

export default Footer