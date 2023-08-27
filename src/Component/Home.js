import React, { Fragment } from 'react'
import { Box, Container, Grid } from '@mui/material';
import { SpeedDialTooltipLeftOpen, ContacSpeedDialTooltipRightOpent } from './index';
import { BannerAssets } from './ImgageAssets';

const Home = () => {
  return (
    <Fragment>
      <Container id={'Home'} sx={{
        // backgroundImage: `url(https://matteomanferdini.com/wp-content/uploads/2020/03/Become-an-iOS-developer-Facebook.png)`,
        // backgroundRepeat: 'no - repeat',
        // backgroundPosition: 'center',
        // backgroundSize: 'cover',
        // height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Box sx={{ width: '100%', height: 500, mt: 8 }}>
              <img src={BannerAssets} alt='' style={{ width: '100%', height: '100%' }} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Box sx={{ width: '100%', height: 500, mt: 8 }}>
              <img src={BannerAssets} alt='' style={{ width: '100%', height: '100%' }} />
            </Box>
          </Grid>
        </Grid>
      </Container >
      {/* <SpeedDialTooltipLeftOpen />
      <ContacSpeedDialTooltipRightOpent /> */}
    </Fragment>
  )
}

export default Home