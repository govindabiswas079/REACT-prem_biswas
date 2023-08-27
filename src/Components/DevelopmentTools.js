import React, { Fragment } from 'react'
import { Box, Container, Typography, Grid, Paper } from '@mui/material'
import { motion } from "framer-motion";
import { textVariant, zoomIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import {
  MosfIcon,
  AndroidStdioIcon,
  JiraIcon,
  DevToolsIcon,
  EnzymeIcon,
  FarmerMotionIcon,
  GitIcon,
  GitHubIcon,
  LottieanimAtionIcon,
  MsOfficeIcon,
  PostmanIcon,
  ReduxIcon,
  StackOverflowIcon,
  VsCodeIcon,
  XcodeIcon,
  ThunderIcon,
  npm_logo
} from "../assets/DevelopmentTools";

const DevelopmentTools = () => {


  const data = [
    { id: 1, image: VsCodeIcon, title: 'Visual Code Studio' },
    { id: 2, image: AndroidStdioIcon, title: 'Android Studio' },
    { id: 3, image: XcodeIcon, title: 'XCode' },
    { id: 4, image: GitHubIcon, title: 'GitHub' },
    { id: 5, image: GitIcon, title: 'Git' },
    { id: 6, image: PostmanIcon, title: 'Postman' },
    { id: 7, image: ThunderIcon, title: 'Thunder Thunder' },
    { id: 8, image: ReduxIcon, title: 'Redux' },
    { id: 9, image: EnzymeIcon, title: 'Enzyme' },
    { id: 10, image: DevToolsIcon, title: 'Profiling Tool' },
    { id: 11, image: FarmerMotionIcon, title: 'Framer Motion' },
    { id: 12, image: LottieanimAtionIcon, title: 'Lottie Animation' },
    { id: 13, image: MosfIcon, title: 'MobSF (Mobile security framework)' },
    { id: 14, image: StackOverflowIcon, title: 'Stack Overflow' },
    { id: 15, image: JiraIcon, title: 'Jira' },
    { id: 16, image: npm_logo, title: 'NPM' },
    { id: 17, image: MsOfficeIcon, title: 'MS-Office' },
  ]
  return (
    <Fragment>
      <Container sx={{ maxWidth: 1040, margin: '0 auto', pt: 10 }}>
        <motion.div
          variants={textVariant()}
        >
          <Typography sx={{ color: 'gray', fontSize: { xs: 14, sm: 14, md: 16, lg: 16 }, fontWeight: 800, lineHeight: 1.1, transition: '0.2s ease-in-out', }}>SKILLS <br /> <Typography sx={{ fontSize: { xs: 25, sm: 25, md: 35, lg: 35 }, color: '#252F40', transition: '0.2s ease-in-out', fontWeight: 900 }}>Development & Tools.</Typography> </Typography>
        </motion.div>
        <Box sx={{ pt: 4 }}>
          <Grid container justifyContent="center" spacing={2}>
            {data.map((value, index) => (
              <Grid item key={index}>
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
                    <Typography sx={{ fontFamily: 'Open Sans', fontSize: 16, fontWeight: 700, textAlign: 'center', lineHeight: 1.3, pt: 2, pl: 1, pr: 1 }}>{value?.title}</Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Fragment>
  )
}

export default SectionWrapper(DevelopmentTools, 'DevelopmentTools')