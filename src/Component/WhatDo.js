import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import Grid from '@mui/material/Grid';
import { HowDo } from './index'

const WhatDo = ({ mode }) => {
  return (
    <Box id={'WhatDo'} sx={{ marginTop: 10 }}>
      <Container>
        <Grid container justifyContent="center" spacing={2}>
          {data.map((value, index) => (
            <Grid key={index} item xs={6} sm={4} md={2} lg={2}>
              <Box data-aos='zoom-in' data-aos-offset='200' sx={{ height: 140, width: '100%', transition: '0.3s ease-in-out', boxShadow: '0 4px 44px rgb(17 29 48 / 10%)', display: 'flex', justifyContent: 'center', backgroundColor: mode ? '#132f4c' : '#FFFFFF', borderRadius: 2, borderWidth: 2, borderColor: mode ? '#132f4c' : '#FFF', borderStyle: 'solid', '&:hover': { boxShadow: '0 4px 44px rgb(17 29 48 / 45%)', transition: '0.3s ease-in-out', color: 'blue', backgroundColor: mode ? '#132f4c' : '#FFFFFF', borderWidth: 2, borderColor: mode ? '#1e4976' : 'blue', borderStyle: 'solid' } }} className='shadow-lg'>
                <Box sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <img src={value?.img} alt='' style={{ width: '75px' }} />
                  <Typography style={{ marginTop: '10px', fontSize: 16, fontFamily: 'Open Sans', fontWeight: '500', color: mode ? 'rgb(208 223 255/1)' : '#252F40' }}>App</Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
      <HowDo mode={mode} />
    </Box>
  )
}

export default WhatDo;


const data = [
  { id: 1, title: 'App', img: 'https://cdn4.iconfinder.com/data/icons/illustrations-2/1200/139-256.png' },
  { id: 2, title: 'App', img: 'https://cdn2.iconfinder.com/data/icons/flat-illustrations-1/550/Mobile_App_Development-256.png' },
  { id: 3, title: 'App', img: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/web-hosting-2573267-2144670.png' },
]