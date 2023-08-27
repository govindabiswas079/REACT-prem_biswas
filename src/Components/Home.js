import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { motion } from "framer-motion";
import { HeroBg } from '../assets'
import { SectionWrapper } from "../hoc";
import { Link } from 'react-scroll';
import {
  ReactIcon,
  ReactNativeIcon,
  AngluarIcon,
  IonicIcon,
  NodeIcon,
} from "../assets/Development";

const Home = () => {
  return (
    <Box sx={{ backgroundImage: `url(${HeroBg})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundColor: 'rgb(59 130 246 / 0.5)' }}>
      <Container id={'Home'} sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Grid container justifyContent={'center'} alignItems={'center'} spacing={2}>
          <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
            <Box sx={{ display: 'flex', alignItems: 'ceter' }}>
              <Box sx={{ alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ backgroundColor: 'rgb(145 94 255 /1)', width: 20, height: 20, borderRadius: '50%' }} />
                <Box sx={{ background: '-webkit-linear-gradient( -90deg, #804dee 0%, rgba(60, 51, 80, 0) 100% )', width: 5, height: 300, }} />
              </Box>
              <Box sx={{ pl: 5 }}>
                <Typography sx={{ fontSize: 35, fontFamily: 'sans-serif', color: 'rgb(255 255 255 / 1)', fontWeight: 900 }}>Hi, I'm <span style={{ fontSize: 35, fontFamily: 'sans-serif', color: 'rgb(145 94 255 /1)', fontWeight: 900 }}>Govinda</span></Typography>
                <Box sx={{}}>
                  <Typography sx={{ fontSize: 16, fontFamily: 'Open Sans', color: 'rgb(243 243 243 / 1)', fontWeight: 800, lineHeight: 1.2 }}>I develop 3D visuals, user interfaces and web applications</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Box
              sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Box
                className={'Main-App-logo'}
                sx={{
                  width: 200,
                  height: 200,
                  // backgroundColor: 'rgb(145 94 255 /1)',
                  borderWidth: 2,
                  borderColor: 'rgb(145 94 255 /1)',
                  // borderColor: 'rgb(245 249 255/1)',
                  borderStyle: 'solid',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                <img alt={''} className={'App-logo'} src={IonicIcon} style={{ width: 40, height: 40, position: 'relative', top: -100, left: 80 }} />
                <img alt={''} className={'App-logo'} src={ReactIcon} style={{ width: 40, height: 40, position: 'relative', right: 60 }} />
                <img alt={''} /* className={'App-logo'} */ src={NodeIcon} style={{ width: 40, height: 40, }} />
                <img alt={''} className={'App-logo'} src={ReactNativeIcon} style={{ width: 40, height: 40, position: 'relative', left: 60 }} />
                <img alt={''} className={'App-logo'} src={AngluarIcon} style={{ width: 40, height: 40, position: 'relative', bottom: -100, right: 80 }} />
              </Box>

            </Box>
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ pt: 0, position: 'absolute', bottom: 20, width: '100%' }}>
        <Box
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', }}
        >
          <Link activeClass='activeClass' to="AboutUs" spy={true} smooth={true} offset={0} duration={500}>
            <Box sx={{ height: '49px', width: '20px', borderRadius: '1.5rem', borderColor: 'rgb(170 166 195 / 1)', borderWidth: 4, borderStyle: 'solid', display: 'flex', justifyContent: 'center', padding: '2px' }}>
              <motion.div
                animate={{
                  y: [0, 31, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                style={{ width: 15, height: 15, borderRadius: '50%', backgroundColor: 'rgb(170 166 195 / 1)' }} />
            </Box>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}

export default SectionWrapper(Home, 'Home')