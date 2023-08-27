import React, { Fragment } from 'react'
import { Box, Container, Grid, Typography, Paper } from '@mui/material'
import { motion } from "framer-motion";
import { textVariant, zoomIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { BackEndDeveloper, WebDeveloper, ReactNative } from "../assets/About";

const About = () => {


  const Data = [
    { id: 1, image: WebDeveloper, title: 'Web Developer' },
    { id: 2, image: ReactNative, title: 'React Native Developer' },
    { id: 3, image: BackEndDeveloper, title: 'Back End Developer' },
  ];


  return (
    <Fragment>
      <Container id={'AboutUs'} sx={{ pt: 6 }}>
        <motion.div
          variants={textVariant()}
        >
          <Typography sx={{ color: 'gray', fontSize: { xs: 14, sm: 14, md: 16, lg: 16 }, fontWeight: 800, lineHeight: 1.1, transition: '0.2s ease-in-out', }}>INTRODUCTION <br /> <Typography sx={{ fontSize: { xs: 25, sm: 25, md: 35, lg: 35 }, color: '#252F40', fontWeight: 900, transition: '0.2s ease-in-out', }}>Overview.</Typography> </Typography>
        </motion.div>
        <Box sx={{ pt: 2 }}>
          <Typography sx={{ fontFamily: 'Open Sans', color: '#252F40', fontSize: { xs: 15, sm: 16, md: 18, lg: 18 }, fontWeight: 600, lineHeight: 1.3, transition: '0.2s ease-in-out' }}>
            I'm a skilled web & mobile app developer, I have
            extensive experience in React.js and React-Native
            frameworks. My expertise in these frameworks allows me
            to create efficient, scalable, and user-friendly solutions
            that solve real-world problems. I am a quick learner and
            collaborate closely with clients to ensure that their needs
            are met and that the final product.</Typography>
        </Box>

        <Box sx={{ pt: 8 }}>
          <Grid container justifyContent="center" spacing={2}>
            {Data?.map((value, index) => (
              <Grid key={index} item>
                <motion.div
                  variants={zoomIn(0.2, 1)}
                >
                  <Paper
                    elevation={0}
                    sx={{ height: 240, width: 200, backgroundColor: '#fff', borderWidth: 1.8, borderColor: 'gray', borderStyle: 'solid', borderRadius: 5, transition: '0.2s ease-in-out', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', '&:hover': { transition: '0.2s ease-in-out', borderColor: 'rgb(145 94 255 /1)', borderBottomWidth: 5, borderBottomStyle: 'solid', borderTopColor: 'rgb(145 94 255 /1)', borderTopWidth: 5, borderTopStyle: 'solid', boxShadow: 6 } }}
                  >
                    <img alt={''} src={value?.image} style={{ width: 120, height: 100, }} />
                    <Typography sx={{ fontFamily: 'Open Sans', fontSize: 16, fontWeight: 700, textAlign: 'center', lineHeight: 1.3, pt: 2 }}>{value?.title}</Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
            {/* <Grid item>
              <motion.div
                variants={zoomIn(0.2, 1)}
              >
                <Paper
                  elevation={0}
                  sx={{ height: 240, width: 200, backgroundColor: '#fff', borderWidth: 1.8, borderColor: 'gray', borderStyle: 'solid', borderRadius: 5, transition: '0.2s ease-in-out', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', '&:hover': { transition: '0.2s ease-in-out', borderBottomColor: 'rgb(145 94 255 /1)', borderBottomWidth: 5, borderBottomStyle: 'solid', borderTopColor: 'rgb(145 94 255 /1)', borderTopWidth: 5, borderTopStyle: 'solid', boxShadow: 6 } }}
                >
                  <img alt={''} src={ReactNative} style={{ width: 120, height: 100, }} />
                  <Typography sx={{ fontFamily: 'Open Sans', fontSize: 16, fontWeight: 700, textAlign: 'center', lineHeight: 1.3, pt: 2 }}>React Native <br /> Developer</Typography>
                </Paper>
              </motion.div>
            </Grid>
            <Grid item>
              <motion.div
                variants={zoomIn(0.2, 1)}
              >
                <Paper
                  elevation={0}
                  sx={{ height: 240, width: 200, backgroundColor: '#fff', borderWidth: 1.8, borderColor: 'gray', borderStyle: 'solid', borderRadius: 5, transition: '0.2s ease-in-out', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', '&:hover': { transition: '0.2s ease-in-out', borderBottomColor: 'rgb(145 94 255 /1)', borderBottomWidth: 5, borderBottomStyle: 'solid', borderTopColor: 'rgb(145 94 255 /1)', borderTopWidth: 5, borderTopStyle: 'solid', boxShadow: 6 } }}
                >
                  <img alt={''} src={BackEndDeveloper} style={{ width: 120, height: 100, }} />
                  <Typography sx={{ fontFamily: 'Open Sans', fontSize: 16, fontWeight: 700, textAlign: 'center', lineHeight: 1.3, pt: 2 }}>Back End <br /> Developer</Typography>
                </Paper>
              </motion.div>
            </Grid> */}
          </Grid>
        </Box>
      </Container>
    </Fragment >
  )
}

export default SectionWrapper(About, 'about')