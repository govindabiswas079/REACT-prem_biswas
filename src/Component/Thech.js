import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';
import { Intrest } from './index';

const Thech = ({ mode }) => {
  const { GetTechnology } = useSelector(state => state?.reducerSlicer);

  return (
    <Box id={'Thech'} sx={{ marginTop: 10 }}>
      <Container>
        <Grid container justifyContent="center" spacing={2}>
          {GetTechnology?.map((value, index) => (
            <Grid key={index} item xs={6} sm={4} md={2} lg={2}>
              <Box data-aos='zoom-in' data-aos-offset='200' sx={{ height: 140, width: '100%', borderWidth: 2, borderColor: mode ? '#132f4c' : '#ffffff', borderStyle: 'solid', boxShadow: '0 4px 44px rgb(17 29 48 / 10%)', display: 'flex', justifyContent: 'center', backgroundColor: mode ? '#132f4c' : '#FFFFFF', borderRadius: 2, transition: '0.3s ease-in-out', '&:hover': { boxShadow: '0 4px 44px rgb(17 29 48 / 45%)', color: 'blue', transition: '0.3s ease-in-out', backgroundColor: mode ? '#132f4c' : '#FFFFFF', borderWidth: 2, borderColor: mode ? '#1e4976' : 'blue', borderStyle: 'solid' } }} className='shadow-lg'>
                <Box sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <img src={value?.image} alt={value?.title} style={{ width: '75px' }} />
                  <Typography style={{ marginTop: '10px', fontFamily: 'Open Sans', fontWeight: '600', color: mode ? 'rgb(208 223 255/1)' : '#252F40' }}>{value?.title}</Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Intrest mode={mode} />
    </Box>
  )
}

export default Thech