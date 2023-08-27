import React from 'react';
import { Container, Box, Typography, Divider, } from '@mui/material';
import Marquee from "react-fast-marquee";
import { LogoAssets } from './ImgageAssets';

const CarouselTech = ({ mode }) => {

  return (
    <Box sx={{ marginTop: 10 }}>
      <Container>
        <Divider sx={{ pb: 2, color: mode ? 'rgb(208 223 255/1)' : '#252F40', fontFamily: 'Roboto', fontSize: 16 }}>trusted by several industry</Divider>
        <Marquee play={true} gradientWidth={0} pauseOnHover={false} direction={'left'} style={{ width: '100%', height: '100%', }}>
          {LogoAssets?.map((value, index) => (
            <Box onClick={() => window.open(value?.Link)} key={index} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: 2, cursor: 'pointer', borderWidth: 2, borderRadius: 2, p: 1, borderColor: 'transparent', borderStyle: 'solid', '&:hover': { boxShadow: '0 4px 44px rgb(17 29 48 / 45%)', transition: '0.3s ease-in-out', backgroundColor: mode ? '#132f4c' : '#FFFFFF', borderWidth: 2, borderColor: mode ? '#1e4976' : 'blue', borderStyle: 'solid' } }} >
              <Box sx={{ width: 50, height: 50, }}>
                <img alt={value?.name} style={{ width: '100%', height: '100%', borderRadius: 12, }} src={value?.logo_path} />
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', pl: 1 }}>
                <Typography sx={{ color: mode ? 'rgb(208 223 255/1)' : '#252F40', fontFamily: 'Roboto', fontWeight: 500, fontSize: 20, }}>{value?.name}</Typography>
                <Typography sx={{ color: mode ? 'rgb(208 223 255/1)' : '#252F40', fontFamily: 'Roboto', fontWeight: 900, fontSize: 20, pl: 1 }}>{value?.span_name}</Typography>
              </Box>
            </Box>
          ))}
        </Marquee>
      </Container>
    </Box >
  )
}

export default CarouselTech;