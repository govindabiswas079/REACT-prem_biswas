import React, { Fragment } from 'react'
import { Box, Container, Typography, Grid, Paper } from '@mui/material'
import { motion } from "framer-motion";
import { textVariant, zoomIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import {
  JavaScriptIcon,
  ReactIcon,
  ReactNativeIcon,
  NextIcon,
  AngluarIcon,
  ViteIcon,
  IonicIcon,
  NodeIcon,
  ExpressIcon,
  MongoDBIcon,
} from "../assets/Development";

const Development = () => {

  const data = [
    { id: 10, image: JavaScriptIcon, title: 'JavaScript' },
    { id: 1, image: ReactIcon, title: 'React.js' },
    { id: 2, image: ReactNativeIcon, title: 'React-Native' },
    { id: 4, image: NextIcon, title: 'Next.js' },
    { id: 5, image: AngluarIcon, title: 'Angluar.js' },
    { id: 8, image: ViteIcon, title: 'Vite.js' },
    { id: 3, image: IonicIcon, title: 'Ionic framework (React)' },
    { id: 6, image: NodeIcon, title: 'Node.js' },
    { id: 7, image: MongoDBIcon, title: 'MongoDB' },
    { id: 9, image: ExpressIcon, title: 'Express.js' },
  ]
  return (
    <Fragment>
      <Container id={'Development'} sx={{ maxWidth: 1040, margin: '0 auto', pt: 10 }}>
        <motion.div
          variants={textVariant()}
        >
          <Typography sx={{ color: 'gray', fontSize: { xs: 14, sm: 14, md: 16, lg: 16 }, fontWeight: 800, lineHeight: 1.1, transition: '0.2s ease-in-out', }}>SKILLS <br /> <Typography sx={{ fontSize: { xs: 25, sm: 25, md: 35, lg: 35 }, color: '#252F40', transition: '0.2s ease-in-out', fontWeight: 900 }}>Development.</Typography> </Typography>
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
    </Fragment>
  )
}

export default SectionWrapper(Development, 'Development')