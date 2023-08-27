import React, { Fragment } from 'react'
import { Box, Container, Typography, Grid, Paper, Divider } from '@mui/material'
import { motion } from "framer-motion";
import { textVariant, zoomIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import {
  BootstrapIcon,
  ElementIcon,
  MaterialIcon,
  ChakraIcon,
  MuiIcon,
  BaseIcon,
  PaperIcon,
  ThemeIcon,
} from "../assets/design";
import { Data } from '../assets/apiIcon';

import Marquee from "react-fast-marquee";

const DevelopmentDesign = () => {

  const data = [
    { id: 1, image: MuiIcon, title: 'Material UI' },
    { id: 2, image: BaseIcon, title: 'Native-Base' },
    { id: 3, image: PaperIcon, title: 'React-Native-Paper' },
    { id: 4, image: ElementIcon, title: 'React-Native-Elements' },
    { id: 5, image: MaterialIcon, title: 'React-Native-Material' },
    { id: 6, image: ChakraIcon, title: 'Chakra UI' },
    { id: 7, image: ThemeIcon, title: 'Theme UI' },
    { id: 8, image: BootstrapIcon, title: 'Bootstrap' },
  ];

  return (
    <Fragment>
      <Container sx={{ maxWidth: 1040, margin: '0 auto', pt: 10 }}>
        <motion.div
          variants={textVariant()}
        >
          <Typography sx={{ color: 'gray', fontSize: { xs: 14, sm: 14, md: 16, lg: 16 }, fontWeight: 800, lineHeight: 1.1, transition: '0.2s ease-in-out', }}>SKILLS <br /> <Typography sx={{ fontSize: { xs: 25, sm: 25, md: 35, lg: 35 }, color: '#252F40', transition: '0.2s ease-in-out', fontWeight: 900 }}>Design Components.</Typography> </Typography>
        </motion.div>
        <Box sx={{ pt: 4 }}>
          <Grid container justifyContent="center" spacing={2}>
            {data?.map((value, index) => (
              <Grid key={index} item>
                <motion.div
                  variants={zoomIn(0.2, 1)}
                >
                  <Paper
                    elevation={0}
                    sx={{ height: 240, width: 200, backgroundColor: '#fff', borderWidth: 1.8, borderColor: 'gray', borderStyle: 'solid', borderRadius: 5, transition: '0.2s ease-in-out', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', '&:hover': { transition: '0.2s ease-in-out', borderColor: 'rgb(145 94 255 /1)', borderBottomWidth: 5, borderBottomStyle: 'solid', borderTopColor: 'rgb(145 94 255 /1)', borderTopWidth: 5, borderTopStyle: 'solid', boxShadow: 6 } }}
                  >
                    <Box sx={{ width: 70, height: 70, }}>
                      <img alt={''} src={value?.image} style={{ width: '100%', height: '100%', }} />
                    </Box>
                    <Typography sx={{ fontFamily: 'Open Sans', fontSize: 16, fontWeight: 700, textAlign: 'center', lineHeight: 1.3, pt: 2 }}>{value?.title}</Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      <Box sx={{ marginTop: 10 }}>
        <Container>
          <Divider sx={{ pb: 2, color: '#252F40', fontFamily: 'Open Sans', fontWeight: 600, fontSize: 16 }}>Trusted by several API</Divider>
          <Marquee play={true} gradientWidth={0} pauseOnHover={false} direction={'left'} style={{ width: '100%', height: '100%', }}>
            {Data?.map((value, index) => (
              <Box onClick={() => window.open(value?.Link)} key={index} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: 2, cursor: 'pointer', borderWidth: 2, borderRadius: 2, p: 1, borderColor: 'transparent', borderStyle: 'solid', '&:hover': { boxShadow: '0 4px 44px rgb(17 29 48 / 45%)', transition: '0.3s ease-in-out', backgroundColor: '#FFFFFF', borderWidth: 2, borderColor: 'rgb(145 94 255 /1)', borderStyle: 'solid' } }} >
                <Box sx={{ width: 50, height: 50, }}>
                  <img alt={value?.name} style={{ width: '100%', height: '100%', borderRadius: 12, }} src={value?.logo_path} />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', pl: 1 }}>
                  <Typography sx={{ color: '#252F40', fontFamily: 'Open Sans', fontWeight: 500, fontSize: 20, }}>{value?.name}</Typography>
                  <Typography sx={{ color: '#252F40', fontFamily: 'Open Sans', fontWeight: 900, fontSize: 20, pl: 1 }}>{value?.span_name}</Typography>
                </Box>
              </Box>
            ))}
          </Marquee>
        </Container>
      </Box>
    </Fragment>
  )
}

export default SectionWrapper(DevelopmentDesign, 'DevelopmentDesign')