import React, { Fragment } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
// import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';
import { Box, Container, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const Education = () => {
  return (
    <Fragment>
      <Container id={'Education'} sx={{ pt: 10 }}>
        <motion.div variants={textVariant()}>
          <Typography sx={{ color: 'gray', fontSize: { xs: 14, sm: 14, md: 16, lg: 16 }, fontWeight: 800, lineHeight: 1.1, transition: '0.2s ease-in-out', }}>WHAT I HAVE DONE SO FAR <br /> <Typography sx={{ fontSize: { xs: 25, sm: 25, md: 35, lg: 35 }, color: '#252F40', transition: '0.2s ease-in-out', fontWeight: 900 }}>Education.</Typography> </Typography>
        </motion.div>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#252F40', fontFamily: 'Nunito', fontWeight: 800 }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2022 Passing Year"
            iconStyle={{ background: 'rgb(33, 150, 243)', overflow: 'hidden', width: 50, height: 50, color: '#fff' }}
            icon={<SchoolIcon />}
          >
            <Box>
              <Typography variant='h6' onClick={() => { }} sx={{ color: '#eadcdc', fontSize: 12, fontWeight: 700 }}><LocationOnIcon sx={{ fontSize: 12 }} /> Deeksha Bhoomi, Chandrapur (M.S) - 442401</Typography>
              <Typography variant='h6' onClick={() => { window.location.href('https://codefevertech.com') }} sx={{ cursor: 'pointer', color: '#eadcdc', fontSize: 12, fontWeight: 700 }}><LanguageIcon sx={{ fontSize: 12 }} /> http://www.dacchanda.ac.in/</Typography>

              <Typography variant='h3' sx={{ color: 'rgb(255 255 255 / 1)', fontSize: 20, fontWeight: 700, pt: 2 }}>BSC (Computer Science)</Typography>
              <Typography variant='h3' sx={{ color: '#eadcdc', fontSize: 16, fontWeight: 700 }}>DR. Babasaheb Ambedkar college of arts, commerce &science.</Typography>
            </Box>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#252F40', fontFamily: 'Nunito', fontWeight: 800 }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2018 Passing Year"
            iconStyle={{ background: 'rgb(33, 150, 243)', overflow: 'hidden', width: 50, height: 50, color: '#fff' }}
            icon={<SchoolIcon />}
          >
            <Box>
              <Typography variant='h6' onClick={() => { }} sx={{ color: '#eadcdc', fontSize: 12, fontWeight: 700 }}><LocationOnIcon sx={{ fontSize: 12 }} /> Teachers Colony, Chamorshi, Maharashtra - 442603</Typography>

              <Typography variant='h3' sx={{ color: 'rgb(255 255 255 / 1)', fontSize: 20, fontWeight: 700, pt: 2 }}>Higher Secondary Certificate (HSC)</Typography>
              <Typography variant='h3' sx={{ color: '#eadcdc', fontSize: 16, fontWeight: 700 }}>Rajshri shahu maharaj school of science.</Typography>
            </Box>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#252F40', fontFamily: 'Nunito', fontWeight: 800 }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2016 Passing Year"
            iconStyle={{ background: 'rgb(33, 150, 243)', overflow: 'hidden', width: 50, height: 50, color: '#fff' }}
            icon={<SchoolIcon />}
          >
            <Box>
              <Typography variant='h6' onClick={() => { }} sx={{ cursor: 'pointer', color: '#eadcdc', fontSize: 12, fontWeight: 700 }}><LocationOnIcon sx={{ fontSize: 12 }} /> Aheri road, Lagam, Maharashtra India - 442705</Typography>

              <Typography variant='h3' sx={{ color: 'rgb(255 255 255 / 1)', fontSize: 20, fontWeight: 700, pt: 2 }}>Secondary School Certificate (SSC)</Typography>
              <Typography variant='h3' sx={{ color: '#eadcdc', fontSize: 16, fontWeight: 700 }}>Raje dharmarao high school.</Typography>
            </Box>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Container >
    </Fragment>
  )
}

export default SectionWrapper(Education, 'Education')