import React from 'react'
import { Box, Container, IconButton, Typography } from '@mui/material'
import Grid from '@mui/material/Grid';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MovieIcon from '@mui/icons-material/Movie';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import DriveEtaIcon from '@mui/icons-material/DriveEta';


const Intrest = ({ mode }) => {
  return (
    <Box sx={{ marginTop: 10 }}>
      <Container>
        <Grid container justifyContent="center" spacing={2}>
          {data.map((value, index) => (
            <Grid key={index} item xs={6} sm={4} md={2} lg={2}>
              <Box data-aos='zoom-in' data-aos-offset='200' sx={{ height: 140, width: '100%', boxShadow: '0 4px 44px rgb(17 29 48 / 10%)', borderWidth: 2, borderColor: mode ? '#132f4c' : '#ffffff', borderStyle: 'solid', display: 'flex', justifyContent: 'center', backgroundColor: mode ? '#132f4c' : '#FFFFFF', borderRadius: 2, transition: '0.3s ease-in-out', '&:hover': { color: 'blue', boxShadow: '0 4px 44px rgb(17 29 48 / 45%)', transition: '0.3s ease-in-out', backgroundColor: mode ? '#132f4c' : '#FFFFFF', borderWidth: 2, borderColor: mode ? '#1e4976' : 'blue', borderStyle: 'solid' } }} className='shadow-lg'>
                <Box sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <IconButton sx={{ borderWidth: 1, borderColor: 'rgb(33 144 255/1)', borderStyle: 'solid', }}>
                    <value.img fontSize='large' sx={{ color: 'rgb(33 144 255/1)' }} />
                  </IconButton>
                  <Typography style={{ marginTop: '10px', fontFamily: 'Open Sans', fontWeight: '600', color: mode ? 'rgb(208 223 255/1)' : '#252F40' }}>App</Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Intrest;

const data = [
  { id: 1, title: 'Listening songs', img: MusicNoteIcon },
  { id: 2, title: 'Watching movies', img: MovieIcon },
  { id: 3, title: 'Traveling', img: ConnectingAirportsIcon },
  { id: 4, title: 'Driving', img: DriveEtaIcon },
]